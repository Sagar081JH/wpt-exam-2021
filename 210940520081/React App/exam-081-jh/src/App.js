// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";

function App() {
  return (
    <div>
      <div>
        <Component></Component>
      </div>
      <div>
        <Validation></Validation>
      </div>
    </div>
  );
}

function Component() {
  const [title, settitle] = useState("MyChatApp");
  const [studentInfo, setstudentInfo] = useState("Sagar_Ghumare_210940520081");
  const [user1, setuser1] = useState("Hi");
  const [user2, setuser2] = useState("Hello");

  return (
    <div>
      <div className="d-flex bg-secondary text-light ">
        <h1 className="m-2 mx-2">{title}</h1>
        <h6 className="mt-4"> By {studentInfo} </h6>
      </div>
    </div>
  );
}

function Validation() {
  const send = async () => {
    if (msg == "") {
      alert("connot send empty message...");
      return;
    }
    const url = `http://localhost:4000/send`;
    const data = {
      msg: msg,
    };

    await axios.post(url, data);
    setmsg("");
    alert("send");
  };
  const [msg, setmsg] = useState("");
  const msghandler = (event) => {
    setmsg(event.target.value);
  };
  retutn(
    <div className="container m-0 p-o mt-e mx-2">
      <div>
        <input
          className="me-2"
          type="text"
          placehoder="lets chat here.."
        ></input>
        <input type="button" value="send" onClick={send}></input>
      </div>
    </div>
  );
}
export default App;
