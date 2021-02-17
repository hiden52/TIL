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
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createLiInHTML(item)).join('');
}

// 이 함수는 각 li를 생성해서 ul에 child로 붙이기 때문에 refresh가 힘듦
function createLiFromItem(itemOfData) {
    const li = document.createElement("li");
    li.className = "item";

    const img = document.createElement("img");
    img.src = `img/${itemOfData.color}_${itemOfData.type.charAt(0)}.png`;
    img.alt = itemOfData.type;
    img.className = "item_thumbnail";

    const span = document.createElement("span");
    span.className = "item_description";
    span.innerText = `${itemOfData.gender}, ${itemOfData.size}`;

    li.appendChild(img);
    li.appendChild(span);

    return li;
}

function displayItems(items) {
    const itemUl = document.querySelector(".items");

    // 작동함 ㅇㅋ
    for (const clothes of items) {
        itemUl.appendChild(createLiFromItem(clothes));
    }
}

function filterByColor(items, colorForFilter) {
    const result = items.filter(item => item.color === colorForFilter);
    return result;
}
function fillterByType(itmes, typeForFilter) {
    const result = items.filter(item => item.type === typeForFilter);
    return result;
}

function setEventListener(items) {
    const logo =document.querySelector(".logo");
    const btn = document.querySelector(".blue");
    logo.addEventListener("click", () => displayItems_(items));
    btn.addEventListener("click", function(){
        displayItems_(filterByColor(items, "blue"));
    });

}

//main
loadItems()
    .then((data) => {
        // displayItems(data); // refresh 힘듦
        displayItems_(data);
        setEventListener(data);
    })
    .catch(console.log);
