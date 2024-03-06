let btnBrand = document.querySelector('.brand-auto__list-btn');
let priceAutoListBrand = document.querySelector('.brand-auto__list');

btnBrand.addEventListener('click', function () {
    priceAutoListBrand.classList.toggle('price-auto__list__open');
    btnBrand.classList.toggle('price-auto__btn__active');
});

let btnModel = document.querySelector('.model-auto__list-btn');
let priceAutoListModel = document.querySelector('.model-auto__list');

btnModel.addEventListener('click', function () {
    priceAutoListModel.classList.toggle('price-auto__list__open');
    btnModel.classList.toggle('price-auto__btn__active');
});

let btnYear = document.querySelector('.year-auto__list-btn');
let priceAutoListYear = document.querySelector('.year-auto__list');

btnYear.addEventListener('click', function () {
    priceAutoListYear.classList.toggle('price-auto__list__open');
    btnYear.classList.toggle('price-auto__btn__active');
});

let btnBudget = document.querySelector('.budget-auto__list-btn');
let priceAutoListBudget = document.querySelector('.budget-auto__list');

btnBudget.addEventListener('click', function () {
    priceAutoListBudget.classList.toggle('price-auto__list__open');
    btnBudget.classList.toggle('price-auto__btn__active');
});

let catList = document.querySelector('.catalog-list__2');
let catBtn = document.querySelector('.catalog-add__btn');

catBtn.addEventListener('click', function () {
    catList.classList.toggle('catalog-list__active');
    catBtn.classList.toggle('catalog-add__btn__active');
});

let faq = document.querySelector('.faq-item');
let faq_btn_auction = document.querySelector('#auction');
let faq_auction = document.querySelector('.faq-auction');
faq_btn_auction.addEventListener('click', function () {
    faq_auction.classList.toggle('faq-active');
});

let faq_btn_brand = document.querySelector('#brand');
let faq_brand = document.querySelector('.faq-brand');
faq_btn_brand.addEventListener('click', function () {
    faq_brand.classList.toggle('faq-active');
});

let faq_btn_document = document.querySelector('#document');
let faq_document = document.querySelector('.faq-document');
faq_btn_document.addEventListener('click', function () {
    faq_document.classList.toggle('faq-active');
});

let faq_btn_condition = document.querySelector('#condition');
let faq_condition = document.querySelector('.faq-condition');
faq_btn_condition.addEventListener('click', function () {
    faq_condition.classList.toggle('faq-active');
});

let more_news_btn = document.querySelector('.more-btn');
more_news_btn.addEventListener('click', function () {
    window.location = 'https://ria.ru/';
});