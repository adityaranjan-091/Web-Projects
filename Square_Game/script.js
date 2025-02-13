let x = document.getElementById("s1");
let y = document.getElementById("s2");
let z = document.getElementById("s3");
let h = document.getElementById("s4");
let g = document.getElementById("main");

x.addEventListener("mouseenter", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  x.style.backgroundColor = `rgb(${a},${b},${c})`;
});
y.addEventListener("mouseenter", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  y.style.backgroundColor = `rgb(${a},${b},${c})`;
});
z.addEventListener("mouseenter", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  z.style.backgroundColor = `rgb(${a},${b},${c})`;
});
h.addEventListener("mouseenter", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  h.style.backgroundColor = `rgb(${a},${b},${c})`;
});
x.addEventListener("mouseleave", function () {
  x.style.backgroundColor = "white";
});

x.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 1000);
  x.innerHTML = `<h1>${r}</h1>`;
});
y.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 1000);
  y.innerHTML = `<h1>${r}</h1>`;
});
z.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 1000);
  z.innerHTML = `<h1>${r}</h1>`;
});
h.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 1000);
  h.innerHTML = `<h1>${r}</h1>`;
});
x.addEventListener("mouseleave", function () {
  x.style.Color = "black";
  x.style.backgroundColor = "white";
});
y.addEventListener("mouseleave", function () {
  y.style.Color = "black";
  y.style.backgroundColor = "white";
});
z.addEventListener("mouseleave", function () {
  z.style.Color = "black";
  z.style.backgroundColor = "white";
});
h.addEventListener("mouseleave", function () {
  h.style.Color = "black";
  h.style.backgroundColor = "white";
});

document.addEventListener("mousemove", function (event) {
  let circle = document.getElementById("circle");
  let x = event.clientX;
  let y = event.clientY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});
alert("Welcome to the Square Game");
