const btn = document.querySelector('button');
const icon = document.querySelector('button i');

btn.addEventListener('click', ()=>{
    if(btn.className === 'test'){
        btn.classList.add('animate');
    }else{
        btn.classList.remove('animate');
    }
})