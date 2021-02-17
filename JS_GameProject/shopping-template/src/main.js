"use strict";

const loadItems = function () {
    return fetch("data/clothes.JSON")
        .then((response) => response.json())
        .then((json) => json.items);
    //.then(json => console.log(json); 하면 promise 리턴이 안돼서 에러!
};

function createLiInHTML(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
            <span class="item_description">${item.gender}, ${item.size}</sapn>
        </li>
    `;
}
function displayItems_(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createLiInHTML(item)).join("");
}

// 이 함수는 각 li를 생성해서 ul에 child로 붙이기 때문에 refresh가 힘듦

//그래서 함수 두개 지움 ㅇㅇ

function filterData(items, dataset) {
    const result = items.filter((item) => item[dataset.key] === dataset.value);
    return result;
}

function onBtnClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key === undefined || value === undefined) {
        return;
    }

    displayItems_(filterData(items, dataset));
}

function setEventListener(items) {
    const logo = document.querySelector(".logo");
    const btns = document.querySelector(".buttons");

    logo.addEventListener("click", () => displayItems_(items));
    btns.addEventListener("click", (event) => onBtnClick(event, items));
    
}

//main
loadItems()
    .then((data) => {
        // displayItems(data); // refresh 힘듦
        displayItems_(data);
        setEventListener(data);
    })
    .catch(console.log);
