let pageViews = document.getElementById('pageviews');
let price = document.getElementById('price');
let slider = document.getElementById('slider');
let checkbox = document.getElementById('checkbox');

const opts = [
    {
        price: ['$8.00', '$72.00'],
        pageViews: ['10k PAGEVIEWS', '10k PAGEVIEWS']
    },
    {
        price: ['$12.00', '$108.00'],
        pageViews: ['50k PAGEVIEWS', '50k PAGEVIEWS']
    },{
        price: ['$16.00', '$144.00'],
        pageViews: ['16k PAGEVIEWS', '100K PAGEVIEWS']
    },{
        price: ['$24.00', '$216.00'],
        pageViews: ['500k PAGEVIEWS', '500K PAGEVIEWS']
    },{
        price: ['$36.00', '$324.00'],
        pageViews: ['1M PAGEVIEWS', '1M PAGEVIEWS']
    },
]

function myFunc() {
    let sliderAmount = slider.value
    if (checkbox.checked === false) {
        price.innerText = opts[sliderAmount - 1].price[0];
        pageViews.innerText = opts[sliderAmount - 1].pageViews[0];

    }
    else {
        price.innerText = opts[sliderAmount - 1].price[1];
        pageViews.innerText = opts[sliderAmount - 1].price[1];
    }
}

slider.addEventListener('input', function () {
    myFunc();
})



