## Accessing the DOM

**Window**
- typing `window` in console gives you access all the window object. The top most object.
- `alert("something");` is essentially the same as `window.alert("something")`. The difference is that when `window.` is silent, it is automatically added.
- 

**Document**
- Accessing document
```
document; // sames as window.document;

console.dir(document); // to see everything in the DOM and know which properties are available
```
![Click here for the image](/04_dom-project/images/console-dir.png)
- Nodes includes blank spaces, white text, css elements etc.
- [Click here for more info on Nodes vs Elements](/04_dom-project/images/nodes-vs-elements.png)
- [Reference for Node.nodeTypes](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
- You can also instantiate constant of document
- Accessing the elements in documents with `querySelector` and other options available
![queryselector](/04_dom-project/images/query-selector.png)
- IMPORTANT!: [Click here for other node query methods](/04_dom-project/documents/node-query-methods.md)
- Changing DOM properties
```
const h1 = document.querySelector("h1");
h1.textContent
h1.textcontent = "Some New Text!";
h1.className = "Title";
h1.style.color = "white";
h1.style.backgroundColor = "red"; //backgroundColor is changed from background-color as the dash will not work
console.dir(h1); // use this to know which properties are available
```

**Attributes vs Properties**
- Attributes are mapped to properties 
![attributes-vs-properties](/04_dom-project/images/attributes-vs-properties.png)
- get and set properties in attributes 
- changing attribute value doesn't reflect in HTML code.
```
const input = document.querySelector("input")
console.dir(input)
const input2 = document.querySelector("input")
console.dir(input2)
input2.value = "some other input"


input.setAttribute("value", "some other default value")
input.value
input.value = input.getAttribute("value") // reset the input
```

## Traversing the DOM
![parents-childeren-ancestors-descendants](/04_dom-project/images/parents-child-ancestors-descendants.png)
![dom-traversal](/04_dom-project/images/dom-traversal.png)

- The images above provides a guideline on traversing the DOM
- Below are some methods to moving down
```
const ul = document.querySelector("ul");
ul.children // gets li element nodes only
ul.children[1] // gets second li element nodes only

ul.childNodes // returns more content like text nodes, line break etc
```
- for faster query instead of using `querySelector` wchich is slower use `firstElementChild`, `lastChild` or `lastElementChild` etc.
- Below are some methods to moving up
```
const liFirst = document.querySelector("li");
liFirst.parentElement;
liFirst.parentNode; // returns ul
liFirst.closest("body") // returns <body>...</body> as it returns the nearest ancestor element
liFirst.closest("header") // returns null, header is not ancestor or li
```
- Below are some methods to move to sibling
```
const liFirst = document.querySelector("li");
const ul = liFirst.parentElement;
const header = ul.previousElementSibling // returns <header>...</header>
const header = ul.previousSibling // returns the node which is a empty space text, not the header
const footer = ul.nextElementSibling // returns <footer>...</footer>
const footer = ul.nextSibling // returns the node which is a empty space text, not the footer
```

## Styling DOM Elements
![styling-dom-elemnts](/04_dom-project/images/styling-dom-elements.png)
- Examples of styling
```
const section = document.querySelector("section");
section.className = "red-bg";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  section.classList.con;
  section.classList.add;
  section.classList.remove;
  section.classList.replace;
  section.classList.toggle("invisible"); // makes the invisible style true or false
  // allows you to change styles without if else statements
});
```

## Create and Insert Elements
![creating-inserting-elements](/04_dom-project/images/creating-inserting-elements.png)
- Methods to create and add elements
```
section.innerHTML = "<h2>Some H2 text</h2>"; // innerHTML swaps the entire nested HTML code in section

const list = document.querySelector("ul");
list.innerHTML = list.innerHTML + "<li>Item 4</li>" // it still changes everything inside the ul. if there are input elements with values. it will be lost

// or

list.insertAdjacentHTML("beforeend", "<li>something went wrong</li>") // beforebegin, afterbegin, beforeend, afterend are methods to add content inside.

//or

const newLi = document.createElement("li");
list.appendChild(newLi); // or prepend to put it before
newLi.textcontent = "Item 4";
newLi.style.backgroundColor = "blue";
```

![insertion-removal](/04_dom-project/images/insertion-removal.png)
- Methods to insert elements
```
const list = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
list.append(newLi);
list.lastElementChild.before(newLi); // newLi moved from last element in the list to second last. As it is objects are references.
list.firstElementChild.replaceWith(newLi); // replace first child with newLi
// before and after doesn work in safari. Search MDN for more info

secondLi.insertAdjacentElement("afterend", newLi)
```
- Methods to copy elements
```
const newLi2 = newLi.cloneNode(true) // clones direct child and all nested elements and descendants
```
- Methods to remove
```
const list = document.querySelector("ul");
list.remove();
// or 
list.parentElement.removeChild(list); // works for all browser
```
- [Click here for more info on insert, replace, remove](/04_dom-project/documents/insert-replace-remove.md)


