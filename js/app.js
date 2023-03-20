let count = 0;
let btnLower = document.querySelector('.prevBtn');
let btnAdd = document.querySelector('.nextBtn');

btnAdd.addEventListener('click', () => {
    count++;
    updateCounter(count);
});

btnLower.addEventListener('click', () => {
    count--
    updateCounter(count);
});

updateCounter = (count) => {
    let counter = document.querySelector('#counter');
    counter.innerHTML = count;

    if (count === 0)
        counter.style.color = 'black';
    else if (count < 0)
        counter.style.color = 'red';
    else if (count > 0)
        counter.style.color = 'green';
};