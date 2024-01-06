let btn = document.querySelector('.brand-btn');
let brandList = document.querySelector('.brand-list');

let brandInput = document.querySelector('.brand-input');
document.querySelector('.brand-item').addEventListener('click', valueInput);

btn.addEventListener('click', function() {
    brandList.classList.toggle('brand-list__open');
    btn.classList.toggle('brand-btn__active')
});

function valueInput() {
    let brandItem = document.querySelector('.brand-item');

    brandInput.innerHTML = brandItem.value;
}