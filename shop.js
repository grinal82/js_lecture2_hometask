const goods = [
    {
        id: 1,
        name: "Рубашка",
        description: '"гавайская рубашка" с коротким рукавом',
        sizes: [35, 36, 40],
        price: 1000,
        available: 1,
    },
    {
        id: 2,
        name: "Ботинки",
        description: "трекинговые ботинки",
        sizes: [41, 42, 43],
        price: 10000,
        available: 1,
    },
    {
        id: 3,
        name: "Куртка",
        description: "курстка кожанная, черная",
        sizes: [35, 36, 40],
        price: 15000,
        available: 1,
    },
    {
        id: 4,
        name: "Брюки",
        description: 'брюки "офисные", черные',
        sizes: [48, 52, 54],
        price: 5000,
        available: 0,
    },
    {
        id: 5,
        name: "Джинсы",
        description: "джинсы синие",
        sizes: [48, 52, 54],
        price: 10000,
        available: 1,
    },
];


let basket = [
    {
        good: goods[0],
        amount: 1,
    },
    {
        good: goods[4],
        amount: 5,
    },
];

function addToBasket(idChoice, amount) {
    for(i = 0; i < goods.length; i++) {
        if(goods[i].id == idChoice){
            basket.push({"good": goods[i], "amount":amount});
        }
    }
    return basket;
}

function deleteFromBasket(idChoice) {
    for (i = 0; i < basket.length; i++) {
        if (basket[i].good.id == idChoice) {
            basket.splice(i,1);
            return;
        }
    }
    console.log(basket)
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length);
    console.log(basket)
    return basket
}

function totalBasketPrice() {
    let totalBasket = {
        totalAmount:0,
        totalSum:0,
    };              
    for (i = 0; i < basket.length; i++) {
        let itemPrice = basket[i].good.price * basket[i].amount;
        let itemAmount = basket[i].amount;
        totalBasket.totalSum += itemPrice;
        totalBasket.totalAmount += itemAmount;
    }
    console.log(`Общее кол-во товаров в корзине ${totalBasket.totalAmount}`);
    console.log(`Цена всех товаров в корзине ${totalBasket.totalSum}`);
    return totalBasket;
}

addToBasket(3, 3);
addToBasket(2, 2);
deleteFromBasket(1);
totalBasketPrice();
// clearBasket();
console.log(`Наименований товаров в корзине: ${basket.length}`);
