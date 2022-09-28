// const buttons = document.querySelectorAll("button");

// const buttonClickHandler = event => {
//   event.target.disabled = true;
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log("this was clicked");
// }

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

// listening to mouse over events
// buttons.forEach(btn => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// })

// // listening to scroll events
// window.addEventListener("scroll", event => {
//   console.log(event)
// });

// infinite scrolling
let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);

` 
So what's happening here?
At the very bottom, we register the scrollHandler function as a handler for the 'scroll' event on our window object.
Inside that function, we first of all measure the total distance between our viewport (top left corner of what we currently see) and the end of the page (not just the end of our currently visible area) => Stored in distanceToBottom.
For example, if our browser window has a height of 500px, then distanceToBottom could be 684px, assuming that we got some content we can scroll to.
Next, we compare the distance to the bottom of our overall content (distanceToBottom) to the window height + a certain threshold (in this example 150px). document.documentElement.clientHeight is preferable to window.innerHeight because it respects potential scroll bars.
If we have less than 150px to the end of our page content, we make it into the if-block (where we append new data).
Inside of the if-statement, we then create a new <div> element and populate it with a <p> element which in turn outputs an incrementing counter value.
`

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault(); // prevent default behaviour of the browser. In this case, it prevents the page from reloading when clicking submit form
  console.log(event);
})

// example of event propagation
const button = document.querySelector("button");
const div = document.querySelector("div");

div.addEventListener("click", event => {
  console.log("CLICKED DIV");
  console.log(event);
}, true); // adding true here means that the event should be in the capturing phase not bubbling phase

button.addEventListener("click", event => {
  event.stopPropagation(); // stops bubbling
  // event.stopImmediatePropagation; // stops bubbling if there are multiple event listeners
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

// event delegation
const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(listItem => {
//   listItem.addEventListener("click", event => {
//     event.target.classList.toggle("highlight");
//   }) // this is cumbersome to add multiple listeners and takes up too much memory
// });

list.addEventListener("click", event => {
  // event.target.classList.toggle("highlight"); // this doesn't change all items to red
  event.target.closest("li").toggle("highlight"); // when any parts inside the li is clicked. The closest li, will toggle on/off red
  form.submit(); // programatically triggers a form submit event, however note that his bypasses instructions like event.preventDefault(); that occurs when users click on it.
  // unless of course you call on click on the submit button form, then event.preventDefault(); will occur
}); // listening for event propagation here is more efficient, as there is only one event listener


