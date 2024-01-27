let btnBrand = document.querySelector('.brand-auto__list-btn');
let priceAutoListBrand = document.querySelector('.brand-auto__list');

btnBrand.addEventListener('click', function() {
    priceAutoListBrand.classList.toggle('price-auto__list__open');
    btnBrand.classList.toggle('price-auto__btn__active');
});

let btnModel = document.querySelector('.model-auto__list-btn');
let priceAutoListModel = document.querySelector('.model-auto__list');

btnModel.addEventListener('click', function() {
    priceAutoListModel.classList.toggle('price-auto__list__open');
    btnModel.classList.toggle('price-auto__btn__active');
});

let btnYear = document.querySelector('.year-auto__list-btn');
let priceAutoListYear = document.querySelector('.year-auto__list');

btnYear.addEventListener('click', function() {
    priceAutoListYear.classList.toggle('price-auto__list__open');
    btnYear.classList.toggle('price-auto__btn__active');
});

let btnBudget = document.querySelector('.budget-auto__list-btn');
let priceAutoListBudget = document.querySelector('.budget-auto__list');

btnBudget.addEventListener('click', function() {
    priceAutoListBudget.classList.toggle('price-auto__list__open');
    btnBudget.classList.toggle('price-auto__btn__active');
});

let catList = document.querySelector('.catalog-list__2');
let catBtn = document.querySelector('.catalog-add__btn');

catBtn.addEventListener('click', function() {
    catList.classList.toggle('catalog-list__active');
    catBtn.classList.toggle('catalog-add__btn__active');
});

let auction = document.querySelector('.auction-start__in');

auction.addEventListener('click', function() {
    window.location.replace("https://youtube.com/");
});