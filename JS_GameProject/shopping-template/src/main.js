"use strict";

const loadItems = function () {
    return fetch("data/clothes.JSON")
        .then(response => response.json())
        .then(json => console.log(json));
}

function displayItems(itmes) {
    const itemUl = document.querySelector(".items");
    
    //이거 왜ㅑ 작동 안하지?? 확인해보자
    for(const clothes of items.items) {
        const item = document.createElement("li");
        item.className = "item";

        const img = document.createElement("img");
        img.src = `img/${clothes.color}_${clothes.type.charAt(0)}.png`;
        img.alt = clothes.type;
        img.className = "item_thumbnail";

        const span = document.createElement("span").innerText = `${clothes.gender}, ${clothes.size}`;
        span.className = "item_description";

        item.appendChild(img);
        item.appendChild(span);
        console.log(item);

        itemUl.appendChild(item);
    }
}

//main
loadItems()
    .then((items) => {
        displayItems(items);
        //setEventListener(items);
    })
    .catch(console.log);
