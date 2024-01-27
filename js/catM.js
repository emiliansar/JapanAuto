let currency = document.querySelectorAll('.price-descr');
let priceBtn = document.querySelectorAll('.price-btn')

priceBtn.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    priceBtn.forEach(function(item) {
        item.classList.remove('price-btn__active');
    });

    target.classList.add('price-btn__active');

    currency.forEach(function(item) {
        item.classList.remove('price-descr__active');
    });
    
    contentActive.forEach(function(item) {
        item.classList.add('price-descr__active');
    });
}

let review = document.querySelectorAll('.more-review');
let moreBtn = document.querySelectorAll('.more-item-btn');
let span = document.querySelectorAll('.more-item-btn__bar');

moreBtn.forEach(function(element) {
    element.addEventListener('click', active);
});

function active(evt) {
    let target = evt.currentTarget;
    let button = target.dataset.content;
    let buttonSpan = target.dataset.span;
    let contentActive = document.querySelectorAll(`.${button}`);
    let spanActive = document.querySelectorAll(`.${buttonSpan}`);

    span.forEach(function(item) {
        item.classList.remove('more-active-btn__bar');
    });

    spanActive.forEach(function(item) {
        item.classList.add('more-active-btn__bar')
    })

    review.forEach(function(item) {
        item.classList.remove('more-active');
    });

    contentActive.forEach(function(item) {
        item.classList.add('more-active')
    })
}

let reviewBtn = document.querySelectorAll('.compilation-review__img');
let reviewImg = document.querySelectorAll('.main-review__img');

reviewBtn.forEach(function(element) {
    element.addEventListener('click', review);
});

function review(evt) {
    let target = evt.correntTarget;
    let button = target.dataset.button;
    let mainReview = document.querySelectorAll(`.${button}`);

    reviewBtn.forEach(function(item) {
        // item.classList.remove('compilation-review__disactive');
        item.classList.add('compilation-review__active');
    });
    
    target.classList.add('compilation-review__disactive');
}