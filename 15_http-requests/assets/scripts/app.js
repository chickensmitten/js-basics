const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.send();
  });
  return promise;
}

async function fetchPosts() {
  const responseData = sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );
  // const listOfPosts = JSON.parse(xhr.response); // this is needed is didn't put responseType as json
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    console.log(postTemplate);
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

fetchPosts();
