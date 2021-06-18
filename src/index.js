import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(["Hello", "webpack"]);
  element.classList.add("hello");

  // 添加图像
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
