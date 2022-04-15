import axios from "axios";
import React, { useEffect, useState } from "react";

function Test21() {
  const [comment, setComment] = useState({});
  const [inputComment, setInputComment] = useState("");
  useEffect(() => {
    getComment();
  }, []);
  function getComment() {
    axios({
      method: "get",
      url: "http://54.180.143.188:8084/comments",
      params: {
        freeNoticeBoardId: 1,
        page: 0,
        size: 100,
        sort: "ASC",
      },
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI3MiIsImlhdCI6MTY0OTk5MzI1NiwiZXhwIjoxNjUwNTk4MDU2fQ.W21sRscyJkqPWQL2mNWZ5EA_50AwaCzPO0I7-BxYw0veMZeQGUJD963Q-M1Cds56 ",
      },
    })
      .then(function (response) {
        setComment(response.data);
      })
      .catch(() => {
        console.log("looi vch do");
      });
  }
  function postComment() {
    axios({
      method: "post",
      url: "http://54.180.143.188:8084/comments",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI3MiIsImlhdCI6MTY0OTk5MzI1NiwiZXhwIjoxNjUwNTk4MDU2fQ.W21sRscyJkqPWQL2mNWZ5EA_50AwaCzPO0I7-BxYw0veMZeQGUJD963Q-M1Cds56 ",
      },
      data: {
        body: inputComment,
        freeNoticeBoard: {
          id: 1,
        },
      },
    }).then(function(response){
      if(response.status == 200){
        getComment()
      }
    }).catch(()=>{console.log("ok con cho thai")})
  }
  return (
    <div>
      {comment?.content?.length > 0 &&
        comment?.content?.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.id}</p>
              <p>{item.body}</p>
              <div>
                {item.writer.id}
                {item.writer.name}
              </div>
            </div>
          );
        })}
      ,
      <input
        onChange={(e) => {
          setInputComment(e.target.value);
        }}
        type="text"
        name=""
        id=""
      />
      <button onClick={() => postComment()}></button>
    </div>
  );
}

export default Test21;
