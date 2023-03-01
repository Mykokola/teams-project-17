const dayValue = document.querySelector('#day-value');
const priceValue = document.querySelector('#price-value');
const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');
priceValue.value = 2500;
dayValue.value = 1;
function pricechange(s){
    if(+dayValue.value > 0){
        priceValue.value = +dayValue.value * s;
    }
}
dayValue.addEventListener('input',(e) => {
    if((+dayValue.value > 0) && +dayValue.value < 365){
    pricechange(2500)
  }  })
btnUp.addEventListener('click',(e) => {
    if(+dayValue.value < 365){
    dayValue.value = +dayValue.value + 1
    } 
     pricechange(2500)
})
btnDown.addEventListener('click',(e) => {
    if(+dayValue.value > 1){
    dayValue.value = +dayValue.value - 1
   }  
   pricechange(2500)
})

