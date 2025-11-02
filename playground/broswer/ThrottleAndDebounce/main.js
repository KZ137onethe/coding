// import { baseDebounce, _debounce, debounce } from "../JavaScript/debounce.js"
import { throttle } from "@code/business";
const searchIpt = document.querySelector("#searchIpt");
const cancelBtn = document.querySelector("#cancelBtn");

const searchEvent = throttle(
  (event) => {
    console.log("搜索完毕！", Math.floor(Math.random() * 9) + 1);
    console.log("event: ", event);
  },
  2000,
  {
    leading: false,
    trailing: true,
  },
);

searchIpt.addEventListener("input", searchEvent);
cancelBtn.addEventListener("click", () => {
  console.log("cancel");
  searchEvent.cancel();
});
