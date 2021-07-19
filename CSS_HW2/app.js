const keyboardIcon = document.querySelector(".yAnw3c");
const voiceIcon = document.querySelector(".goxjub");
const body = document.getElementsByTagName("body")[0];

const listener1 = () => {
  keyboardIcon.addEventListener("mouseenter", addLabel);
  keyboardIcon.addEventListener("mouseout", removeLabel);
  voiceIcon.addEventListener("mouseenter", addLabel);
  voiceIcon.addEventListener("mouseout", removeLabel);
};
let x = 0;
listener1();

function addLabel(e) {
  console.log();
  if (x === 0 && e.target.ariaLabel !== null) {
    let a = e.srcElement.getBoundingClientRect().x - 50;
    const element1 = document.createElement("div");
    element1.setAttribute(
      "style",
      `background: rgb(45, 45, 45); border: 1px solid rgb(255, 255, 255); color: rgb(255, 255, 255); display: block; font-size: 11px; font-weight: bold; height: 29px; left: ${a}px; line-height: 29px; padding: 0px 10px; position: absolute; text-align: center; top: 426px; white-space: nowrap; visibility: visible; z-index: 2000; box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px; box-sizing: border-box; transition: opacity 0.13s ease 0s;`
    );
    element1.innerHTML += e.target.ariaLabel;
    const element2 = document.createElement("div");
    element2.setAttribute(
      "style",
      `border-width: 0px 6px 6px; border-style: solid; border-image: initial; border-color: rgb(255, 255, 255) transparent; content: ""; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: -6px; width: 0px; left: 51px;`
    );
    const element3 = document.createElement("div");
    element3.setAttribute(
      "style",
      `border-width: 0px 6px 6px; border-style: solid; border-image: initial; border-color: rgb(45, 45, 45) transparent; content: ""; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: 1px; width: 0px; left: -6px;`
    );
    element2.appendChild(element3);
    element1.appendChild(element2);
    element1.setAttribute("class", "add-on");
    body.appendChild(element1);
  }
  x = 1;
}

function removeLabel(e) {
  const element = document.querySelector(".add-on");
  if (element) element.remove();
  x = 0;
}
