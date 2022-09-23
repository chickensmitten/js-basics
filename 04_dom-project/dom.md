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
- [Click her efor more infor on Nodes vs Elements](/04_dom-project/images/nodes-vs-elements.png)
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





