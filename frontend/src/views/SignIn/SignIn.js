import React, { useState } from "react";
import {
  TextField, //input
  Typography, //h2
  Button,
  Paper,
} from "@material-ui/core";

// jsx = js + xml ml= marked language
// 3 trường phái thiết kế giao diện
// MATERIAL-UI - GOOGLE
// Ant - tàu
// flat desing - apple
// nhanh nhưng mất tính chặt chẽ của class
// phù hợp cho các dự án nhỏ
function SighIn(props) {
  const [username, setUsername] = useState(""); //usename là biến, setUsername là hàm để thay đổi biến. useState("nhat")=> usename = "nhat"
  const [password, setPassword] = useState("");
  // const handleChange = (event) =>{}
  function handleChange1(event) {
    setPassword(event.target.value);
  }
  function handleChange2(event) {
    setUsername(event.target.value);
  }
  function DangNhap() {
    console.log(username, password);
  }
  function DangKi() {
    if (password.length < 6) alert("password yếu");
    console.log("đây là prop params1: ", props.params1);
    console.log("đây là prop p2: ", props.params2);
    console.log("đây là prop p3: ", props.params3);
    props.setVersion(props.version + 1);
  }

  function Press(event) {
    if (event.key === "Enter") DangNhap();
  }
  const buttonStyle = {
    color: "black",
    background: "purple",
    margin: 10,
    height: 100,
    width: 200,
  }; //material ui color tool để có màu đẹp
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        margin: 10,
      }}
    >
      <h2>hello zai</h2>
      <TextField
        onKeyPress={Press}
        label="Tài khoản"
        type="text"
        onChange={handleChange2}
      />
      <TextField
        onKeyPress={Press}
        label="Mật khẩu"
        type="password"
        onChange={handleChange1}
      />

      <Button onClick={DangNhap} variant="outlined" style={buttonStyle}>
        <Typography>Dang nhap</Typography>
      </Button>
      <Button onClick={DangKi} variant="contains" style={buttonStyle}>
        <Typography>Dang ki</Typography>
      </Button>

      <Typography variant="h4">{username}</Typography>
      <Typography variant="h3">{password}</Typography>
    </Paper>
  );
}
// làm các dự án lớn thì dùng kiểu này
// có tính chạt chẽ
// class MyComponent extends React.Component {
//   constructor(props) {}
//   // vòng đời con react
//   //chạy trc render
//   componentWillMount() {}
//   componentWillReceiveProps() {}
//   componentWillUpdate() {}
// componentWillUnmount(){ }
//   render() {
//     return <div>lam nhu nay cung duoc</div>;
//   }
//   //chạy sau render
//   componentDidCatch() {}
//   componentDidMount() {}
//   componentDidUpdate() {}
// }
export default SighIn;
