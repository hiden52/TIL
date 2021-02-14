// async & await
// Syntatic sugar
// clear style of using promise

// 1. async
// function fetchUser() {
//     //do network request in 10 secs...

//     return new Promise((resolve, reject) => {
//         //return "hiden52"; // Be pending forever with out resolve
//         resolve("hiden52");
//     });
// }

// Return Promise automatically by unsing keyword 'async'
async function fetchUser() {
    //do network request in 10 secs...

    return "hiden52";
}

const user = fetchUser();
user.then(console.log);
console.log(user);
// code stops until process is above end without async

// 2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    //throw 'error';
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

// Like 'Callback Hell'
// function pickFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }

async function pickFruits() {
    const applePromise = getApple();    // Promise를 각각 만들어 
    const bananaPromise = getBanana();  // 병렬적으로 실행
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

const fruit = pickFruits();
pickFruits().then(console.log);


// 3. useful Promise APIs

// Promise.all([Array]) : [returns]
// 비동기 처리할 promise들을 배열로 전달받고 각 프로미스의 리턴값을 배열로 반환
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
}

pickFruits().then(console.log);

//  Promise.race([Array]) : [return]
// 비동기 처리할 promise 들을 배열로 전달받고 먼저 처리된 프로미스의 리턴만 반환
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);


// Homework
