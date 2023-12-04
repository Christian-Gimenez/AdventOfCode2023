"use strict";
import { demoResult, result } from "./day1.js";

const div = createNode("div");
//<div></div>

const strong1 = createNode("strong", demoResult);
//<strong>123</strong>
const demoSolution = createNode("p", "The solution for the demo exercise: ");
//<p>The solution for the demo exercise: </p>
demoSolution.insertAdjacentElement("beforeend", strong1);
//<p>The solution for the demo exercise: <strong>123</strong></p>

const strong2 = createNode("strong", result);
//<strong>123</strong>
const finalSolution = createNode("p", "The solution for the final exercise: ");
//<p>The solution for the final exercise: </p>
finalSolution.insertAdjacentElement("beforeend", strong2);
//<p>The solution for the demo exercise: <strong>123</strong></p>

div.appendChild(demoSolution);
div.appendChild(finalSolution);
document.body.appendChild(div);
// const body = document.getElementsByTagName("body")[0];
// body.appendChild(div);

function createNode(tag, content) {
  const node = document.createElement(tag);
  if(content) {
    const txtNode = document.createTextNode(content);
    node.appendChild(txtNode);
  }
  return node;
}
