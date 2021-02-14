"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read file)
  console.log("doing something...");
  setTimeout(() => {
    resolve("hiden52");
    //reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Chicken?"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => Egg`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => Egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => Sunny-side up Egg `), 1000);
  });

getHen()        // 1가지만 받아서 그 한가지만 그대로 호출(전달)할 경우 아래의 케이스가 가능
  .then(getEgg) // same to ".then((hen) => getEgg(hen))"
  .catch(error => {
      return 'Bread';
  })            // 중간 error catch로 프로세스 중단 없이 땜빵 ?? ㅋㅋㅋ
  .then(cook)
  .then(console.log)
  .catch(console.log);
