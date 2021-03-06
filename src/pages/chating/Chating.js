import {
  child,
  get,
  limitToLast,
  onValue,
  push,
  query,
  ref,
  set,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/image/detail1.jpg";
import { firebase } from "../../configFireBase";
import Typing from "./components/Typing";
function Chating() {
  const navigate = useNavigate();
  const uId = localStorage.getItem("userId");
  const [info, setInfo] = useState({});
  const [listUser, setListUser] = useState([]);
  const [chatting, setChatting] = useState([]);
  const [partner, setPartner] = useState({});
  const [listChat, setListChat] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [typing, setTyping] = useState([]);
  const [mess, setMess] = useState("");
  const [seen, setSeen] = useState([]);

  useEffect(() => {
    getInfo();
    getListUser();
    listenMes();
    listenTyping();
    listenSeen();
  }, [roomId]);
  useEffect(() => {
    listenNew();
  }, []);
  useEffect(() => {
    checkLogin();
  }, [uId]);
  function checkLogin() {
    if (!uId) {
      navigate("/login");
    }
  }
  function listenSeen() {
    const db = firebase.database;
    const listener = ref(db, `users/${uId}/roomchat/${roomId}/seen`);
    onValue(listener, (snapshot) => {
      var tempArr = [];
      snapshot.forEach((seen) => {
        let seenItem = { userId: seen.key, messId: seen.val().id };
        tempArr.push(seenItem);
      });
      setSeen(tempArr);
    });
  }
  function listenNew() {
    const db = firebase.database;
    const listener = ref(db, `users/${uId}/roomchat`);
    onValue(listener, (snapshot) => {
      var tempArr = [];
      snapshot.forEach((room) => {
        const parnerId =
          room.val().startPoint != uId
            ? room.val().startPoint
            : room.val().endPoint;
        var chatItem = {
          id: room.key,
          lassMess: room.val().lassMess,
          partnerId: parnerId,
          name: getInfoChatList(parnerId).name,
          avata: getInfoChatList(parnerId).avata,
        };
        tempArr.push(chatItem);
      });
      setListChat(tempArr);
    });
  }
  function listenMes() {
    const db = firebase.database;
    const dbRef = ref(firebase.database);
    get(child(dbRef, `users/${uId}/roomchat/${roomId}`)).then((response) => {
      if (response.exists())
        get(
          child(
            dbRef,
            `users/${
              response.val().startPoint != uId
                ? response.val().startPoint
                : response.val().endPoint
            }`
          )
        ).then((res) => {
          if (res.exists()) {
            setPartner(res.val());
          } else {
            console.log("no data 1");
          }
        });
    });
    const listener = ref(db, `users/${uId}/roomchat/${roomId}/mess`);
    onValue(listener, (snapshot) => {
      var array = [];
      snapshot.forEach((item) => {
        let data = {
          id: item.key,
          sender: item.val().sender,
          content: item.val().content,
        };
        array.push(data);
      });
      setChatting(array);
    });
  }
  function listenTyping() {
    const db = firebase.database;
    const listenTypinga = ref(db, `users/${uId}/roomchat/${roomId}/typing`);
    onValue(listenTypinga, (snapshot) => {
      var arrayTyping = [];
      snapshot.forEach((item) => {
        arrayTyping.push({ id: item.key, isTyping: item.val() });
      });
      setTyping(arrayTyping);
    });
  }
  function getListUser() {
    const db = firebase.database;
    const listener = ref(db, "users");
    onValue(listener, (snapshot) => {
      var array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });
      setListUser(array);
    });
  }
  function getInfo() {
    const db = ref(firebase.database);
    get(child(db, `users/${uId}`))
      .then((res) => {
        if (res.exists()) {
          setInfo(res.val());
        } else {
          console.log("no data");
        }
      })
      .catch((err) => console.log(err));
  }
  function handleClick() {
    const db = firebase.database;
    var data = {
      sender: uId,
      content: mess,
    };
    roomId &&
      get(child(ref(db), `users/${uId}/roomchat/${roomId}`)).then((res1) => {
        const newKey = push(
          child(ref(db), `users/${uId}/roomchat/${roomId}/mess`)
        ).key;
        set(
          ref(db, `users/${uId}/roomchat/${roomId}/mess/${newKey}`),
          data
        ).then((res) => {
          updateLassmess(uId, data);
          const partnerId =
            res1.val().endPoint != uId
              ? res1.val().endPoint
              : res1.val().startPoint;
          set(
            ref(db, `users/${partnerId}/roomchat/${roomId}/mess/${newKey}`),
            data
          ).then((res) => {
            updateLassmess(partnerId, data);
            updataSeen(uId, uId, newKey);
            updataSeen(partnerId, uId, newKey);
            setMess("");
          });
        });
      });
  }
  function updateLassmess(id, value) {
    const db = firebase.database;
    set(ref(db, `users/${id}/roomchat/${roomId}/lassMess`), value).then(
      (res) => {}
    );
  }
  async function handleStartChat(value) {
    const db = firebase.database;
    var count = 0;
    var roomId = "";
    await get(child(ref(db), `users/${uId}/roomchat`)).then((res) => {
      res.forEach((roomItem) => {
        if (
          (roomItem.val().endPoint == value.id &&
            roomItem.val().startPoint == uId) ||
          (roomItem.val().startPoint == value.id &&
            roomItem.val().endPoint == uId)
        ) {
          count = count + 1;
          roomId = roomItem.key;
        }
      });
    });
    if (count === 0) {
      updateRoomId(uId, value.id);
    } else {
      setRoomId(roomId);
    }
  }
  function updateRoomId(start, end) {
    const db = firebase.database;
    const newKey = push(child(ref(db), `users/${start}/roomchat`)).key;
    set(ref(db, `users/${start}/roomchat/${newKey}`), {
      startPoint: start,
      endPoint: end,
    });
    set(ref(db, `users/${end}/roomchat/${newKey}`), {
      startPoint: start,
      endPoint: end,
    });
    setRoomId(newKey);
  }
  function getInfoChatList(id) {
    const db = firebase.database;
    const listener = ref(db, `users/${id}`);
    var chatItem = {};
    onValue(listener, (snapshot) => {
      chatItem.name = snapshot.val()?.username;
      chatItem.avata = snapshot.val()?.avata;
    });
    return chatItem;
  }

  let timer;
  function handleKeyPress(e) {
    clearTimeout(timer);
    const dbRef = ref(firebase.database);
    roomId &&
      get(child(dbRef, `users/${uId}/roomchat/${roomId}`)).then((response) => {
        const partnerId =
          response.val().startPoint != uId
            ? response.val().startPoint
            : response.val().endPoint;
        updateTyping(partnerId, true);
      });
  }
  function handleKeyUp(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const dbRef = ref(firebase.database);
      roomId &&
        get(child(dbRef, `users/${uId}/roomchat/${roomId}`)).then(
          (response) => {
            const partnerId =
              response.val().startPoint != uId
                ? response.val().startPoint
                : response.val().endPoint;
            updateTyping(partnerId, false);
          }
        );
    }, 1000);
  }

  function updateTyping(id, value) {
    const db = firebase.database;
    set(ref(db, `users/${id}/roomchat/${roomId}/typing/${uId}`), value).then(
      (res) => {}
    );
  }
  function handleUpdateSeen() {
    const db = firebase.database;
    const que = query(
      ref(db, `users/${uId}/roomchat/${roomId}/mess`),
      limitToLast(1)
    );
    const dbRef = ref(firebase.database);
    roomId &&
      get(child(dbRef, `users/${uId}/roomchat/${roomId}`)).then((response) => {
        const partnerId =
          response.val().startPoint != uId
            ? response.val().startPoint
            : response.val().endPoint;
        get(que).then((res) => {
          res.forEach((x) => {
            updataSeen(uId, uId, x.key);
            updataSeen(partnerId, uId, x.key);
          });
        });
      });
  }
  function updataSeen(id, idUpdate, idMess) {
    const db = firebase.database;
    set(ref(db, `users/${id}/roomchat/${roomId}/seen/${idUpdate}`), {
      id: idMess,
    }).then((res) => {});
  }

  return (
    <div>
      <div className="container">
        <h3 className="text-center text-light">Chatting</h3>
        <div className="row">
          <div className="col-md-5 list__chat">
            <div className="info d-flex justify-content-center align-items-center">
              <img
                src={info.avata ? info.avata : img1}
                alt=""
                className="image circle size70"
              />
              <p className="m-0 fs-1">{info.username}</p>
            </div>
            <div className="row">
              <div className="col-3">
                {listUser?.map((item, index) => {
                  return (
                    item.id != uId && (
                      <img
                        key={index}
                        onClick={() => handleStartChat(item)}
                        src={item.avata ? item.avata : img1}
                        alt=""
                        className="image circle size70 mb-2"
                      />
                    )
                  );
                })}
              </div>
              <div className="col-9">
                <div className="">
                  <div className="mt-3">
                    {listChat.length > 0 &&
                      listChat?.map((item, index) => {
                        return (
                          item.lassMess && (
                            <div
                              key={index}
                              onClick={() => setRoomId(item.id)}
                              className="chat__item d-flex justify-content-start align-items-center mx-2 my-2"
                            >
                              <img
                                src={item.avata ? item.avata : img1}
                                alt=""
                                className="image circle size50"
                              />
                              <div className="chat__item--mess mx-3">
                                <p>{item.name}</p>
                                <p>
                                  <span>
                                    {item.lassMess?.sender == uId
                                      ? "You"
                                      : item.name}{" "}
                                    :
                                  </span>{" "}
                                  {item.lassMess?.content}
                                </p>
                              </div>
                            </div>
                          )
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="chatting d-flex flex-column justify-content-between py-3">
              {partner.username && (
                <div className="info d-flex justify-content-center align-items-center">
                  <img
                    src={partner.avata ? partner.avata : img1}
                    alt=""
                    className="image circle size70"
                  />
                  <p className="m-0 fs-1">{partner.username}</p>
                </div>
              )}
              {chatting?.length > 0 ? (
                <div className="chat-content px-4">
                  {chatting?.map((item, idx) => {
                    return item.sender != uId ? (
                      <div
                        key={idx}
                        className="other text-light d-flex justify-content-start align-items-center mb-3"
                      >
                        <img
                          src={partner.avata ? partner.avata : img1}
                          alt=""
                          className="image circle size30"
                        />
                        <div className="mx-3">
                          <p className="m-0 fs-5 chat__content">
                            {item.content}
                          </p>
                        </div>
                        {seen.find((x) => x.userId != uId)?.messId ==
                          item.id && (
                          <img
                            src={partner.avata ? partner.avata : img1}
                            alt=""
                            className="image circle size15 avataseen"
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className="me text-light d-flex justify-content-end mb-3"
                      >
                        <p className="m-0 fs-5 chat__content">
                          {item.content}{" "}
                          {seen.find((x) => x.userId != uId)?.messId ==
                            item.id && (
                            <img
                              src={partner.avata ? partner.avata : img1}
                              alt=""
                              className="image circle size15 avataseen"
                            />
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-light chat-content d-flex justify-content-center align-items-center fw-bold">
                  {" "}
                  Start Chat{" "}
                </div>
              )}
        
              <div className="box-input-chat">
              {typing?.find((x) => x.id != uId)?.isTyping && (
                <Typing name={partner.username} />
              )}
              <div className="chat__newmess d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  className="form-control w-75"
                  value={mess}
                  onChange={(e) => setMess(e.target.value)}
                  onFocus={() => {
                    handleUpdateSeen();
                  }}
                  onKeyPress={() => handleKeyPress()}
                  onKeyUp={() => handleKeyUp()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClick();
                    }
                  }}
                />
                <button
                  className="form-control w-25"
                  onClick={() => handleClick()}
                >
                  Send
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chating;
