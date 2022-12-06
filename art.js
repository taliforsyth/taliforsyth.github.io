import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";

// create a new svg.js instance
const svg = SVG(".canvas");

// regenerate button
const btn = document.querySelector("button");

// 200 x 200
const { width, height } = svg.viewbox();
// how many circles should we paint?
const numCircles = 12;
// stripe width === viewBox width / the amount of stripes we would like to paint
const stripeWidth = width / numCircles;

// listen for clicks on the regenerate button
btn.addEventListener("click", () => {
  generate();
});

function generate() {
 
  const colors = ["#C9CBA3", "#E4D6A6", "#FFE1A8", "#E26D5C", "#F1A782", "#4B4A67", "#696047"];

  for (let i = 0; i < width; i += stripeWidth) {
    // pick a number between 0 and 11 (the length of the colors array)
    const diceRoll = Math.floor(Math.random() * colors.length);
    // pick out the color
    const color = colors[diceRoll];

    // draw a circle
    svg.circle(200).x(i).y(0).fill(color).stroke(color);
  }
}

generate();

//based my code on this website: https://dev.to/georgedoescode/a-generative-svg-starter-kit-5cm1