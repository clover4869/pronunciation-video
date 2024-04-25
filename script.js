const input = document.querySelector(".input");
const iframe = document.querySelector("iframe");

let timeout = null;

input.addEventListener("input", (event) => {
  const value = event.target.value;
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    console.log({ value });
    iframe.src = `https://content-media.elsanow.co/_static_/youglish.html?${value}`
  }, 1000);
});