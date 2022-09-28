const buttons = document.querySelectorAll("button");

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("this was clicked");
}

// // this is not recommended because you can't add more logic. better to use addEventListener
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// button.addEventListener("click", () => {
//   console.log("clicked");
// }); // this is not recommended because it creates an anon function object everytime it is called, and you can't remove it later
// button.addEventListener("click", buttonclickHandler.bind(this)); // this is not recommended as well because it creates a new function object everytime it is called
// // code below won't work
// setTimeout(() => {
//   button.removeEventListener("click", () => {
//     console.log("clicked");
//   });
// }, 2000);

// // addEventListener();
// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener("mouseneter", buttonClickHandler);
})




