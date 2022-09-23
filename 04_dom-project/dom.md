## Accessing the DOM

**Window**
- typing `window` in console gives you access all the window object. The top most object.
- `alert("something");` is essentially the same as `window.alert("something")`. The difference is that when `window.` is silent, it is automatically added.
- 

**Document**
- Accessing document
![Click here for the image](/04_dom-project/images/console-dir.png)
<img src="/04_dom-project/images/console-dir.png" width="200" height="200">

```
document; // sames as window.document;

console.dir(document); // to see everything in the DOM
```
- Nodes vs Elements 
![Nodes vs Elements](/04_dom-project/images/nodes-vs-elements.png)
- [Reference for Node.nodeTypes](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
- 

- Accessing the elements in documents;
```
document.documentElement;

//returns all HTML content
<html lang=​"en">​<head>​…​</head>​<body>​ ​</body>​</html>​
```







