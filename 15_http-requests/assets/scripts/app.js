const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest(); // this name used to be for fetching XML. XML fell out of favour and people using JSON more now. But the XML name stuck.
  //   xhr.setRequestHeader("Content-Type", "application/json");
  //   xhr.setRequestHeader("Content-Type", "text/html"); // can set multiple headers
  //   xhr.open(method, url);
  //   xhr.responseType = 'json';
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       xhr.response;
  //       reject(new Error("something went wrong. Non-success status code."));
  //     }
  //   };
  //   xhr.oneerror = function() {
  //     console.log(xhr.response);
  //     console.log(xhr.status);
  //     reject(new Error("Failed to send request! Network connection error."));
  //   }
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;

  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data,
    // headers: {
      // typically sends application json as shown in body above
      // 'Content-Type': 'application/json',
    // },
  })
    .then((response) => {
      // this defaults to get request and uses promises. so no need code above.
      // response.text() returns text or response.blob() returns files
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error("something wrong on server side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error('Network connectivity issue!');
    });
}

async function fetchPosts() {
  // try {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  // const listOfPosts = JSON.parse(xhr.response); // this is needed is didn't put responseType as json
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
  // } catch (error) {
  //   alert(error.message);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  // const post = {
  //   title: title,
  //   body: content,
  //   userId: userId,
  // };

  const fd = new FormData(form); // not all apis support FormData. Some will insists JSON data
  // fd.append("title", title);
  // fd.append("body", content);
  fd.append("userId", userId);
  // fd.append("someFile", "photo.png");

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
