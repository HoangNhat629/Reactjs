import React, { Component } from "react";
import './style.css';
export default class NotFound extends Component {
  
  render() {
    function eyeball  (event) {
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function (eye) {
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.pageX - x, event.pageY - y);
          let rot = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = "rotate(" + rot + "deg )";
        });
    }
    document.querySelector("body").addEventListener("mousemove", eyeball);
    return (
      <div class="face">
      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
        </div>
    </div>   
    );
  }
}
