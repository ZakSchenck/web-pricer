let pageViews = document.getElementById('pageviews');
let price = document.getElementById('price');
let slider = document.getElementById('slider');
let checkbox = document.getElementById('checkbox');

   function myFunc() {
    let sliderAmount = slider.value
    if (checkbox.checked === false) {
       
        if (sliderAmount == 1) {
            price.innerText = '$8.00'
            pageViews.innerText = '10K PAGEVIEWS'
        }
        if (sliderAmount == 2) {
            price.innerText = '$12.00'
            pageViews.innerText = '50K PAGEVIEWS'
        }
        if (sliderAmount == 3) {
            price.innerText = '$16.00'
            pageViews.innerText = '100K PAGEVIEWS'
        }
        if (sliderAmount == 4) {
            price.innerText = '$24.00'
            pageViews.innerText = '500K PAGEVIEWS'
        }
        if (sliderAmount == 5) {
            price.innerText = '$36.00'
            pageViews.innerText = '1M PAGEVIEWS'
        }
    }
        else {
        if (sliderAmount == 1) {
            price.innerText = '$72.00'
            pageViews.innerText = '10K PAGEVIEWS'
        }
        if (sliderAmount == 2) {
            price.innerText = '$108.00'
            pageViews.innerText = '50K PAGEVIEWS'
        }
        if (sliderAmount == 3) {
            price.innerText = '$144.00'
            pageViews.innerText = '100K PAGEVIEWS'
        }
        if (sliderAmount == 4) {
            price.innerText = '$216.00'
            pageViews.innerText = '500K PAGEVIEWS'
        }
        if (sliderAmount == 5) {
            price.innerText = '$324.00'
            pageViews.innerText = '1M PAGEVIEWS'
        }
    }
}

slider.addEventListener('input', function () {
    myFunc();
})



