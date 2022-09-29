const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

// // then catch is similar to async await below. except for timer done and getting position. these will run while waiting for then and catch.
// function trackUserHandler() {
//   let positionData;
//   getPosition()
//     .then((posData) => {
//       positionData = posData;
//       return setTimer(2000);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .then((data) => {
//       console.log(data, positionData);
//     });
//   // setTimer(1000).then(() => {
//   //   console.log('Timer done!');
//   // });
//   // console.log('Getting position...');
// };

// Async Await is similar to then catch above. except for timer done and getting position. these will run after the await functions are run.
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  // console.log(timerData, posData);
  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});