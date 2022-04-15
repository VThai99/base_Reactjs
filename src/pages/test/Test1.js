import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Test1() {
  const [data, setData] = useState({});
  const [comment, setComment] = useState('');
  useEffect(() => {
    GetCommemnt()
  }, []);
  function GetCommemnt(){
    axios({
      method: "get",
      url: "http://54.180.143.188:8084/comments",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI3MiIsImlhdCI6MTY0OTk5MzI1NiwiZXhwIjoxNjUwNTk4MDU2fQ.W21sRscyJkqPWQL2mNWZ5EA_50AwaCzPO0I7-BxYw0veMZeQGUJD963Q-M1Cds56",
      },
      params: {
        page: 0,
        size: 100,
        sort: "ASC",
        freeNoticeBoardId: 1,
      },
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  
  function PostComment() {
    axios({
      method: "post",
      url: "http://54.180.143.188:8084/comments",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI3MiIsImlhdCI6MTY0OTk5MzI1NiwiZXhwIjoxNjUwNTk4MDU2fQ.W21sRscyJkqPWQL2mNWZ5EA_50AwaCzPO0I7-BxYw0veMZeQGUJD963Q-M1Cds56",
      },
      data: {
        body: comment,
        freeNoticeBoard: {
        id: 1,
        },
      },
    }).then((reponse)=>{
      if(reponse.status == 200){
        GetCommemnt()
      }
    }).catch(()=>{
      console.log("looxi vc")
    })
  }
  return (
    <div>
      <table>
        {data?.content?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.body}</td>
         
              <td>
                {item.writer?.id}
                {item.writer?.name}
              </td>
            </tr>
          );
        })}
      </table>
     
        <input onChange={(e)=>{
          setComment(e.target.value)
          
        }} type="text" />
        <button onClick={()=>PostComment()}>save</button>

    </div>
  );
}

export default Test1;
