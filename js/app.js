let count = 0;
let counter = document.querySelector('#counter');
let btnLower = document.querySelector('.prevBtn');
let btnAdd = document.querySelector('.nextBtn');

btnAdd.addEventListener('click', () => {
    count++
    counter.innerHTML = count
    if (count === 0)
        counter.style.color = 'black';
    else if (count > 0)
        counter.style.color = 'green';
});

btnLower.addEventListener('click', () => {
    count--
    counter.innerHTML = count
    if (count === 0)
        counter.style.color = 'black';
    else if (count < 0)
        counter.style.color = 'red';
});