const span = document.querySelector('h1 span');
let counter = 1;
const increment = ()=>{
  if(counter <= 100){
    span.textContent = counter;
    counter++;
  }else if(span.textContent === '100'){
    document.querySelector('h1').style.display = 'none';
  }
}
increment();
setInterval(increment,45);