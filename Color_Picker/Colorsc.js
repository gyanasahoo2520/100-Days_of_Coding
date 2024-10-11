const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('#btn');

cards.forEach(card =>{
    let random1 = Math.floor(Math.random()* 255);
    let random2 = Math.floor(Math.random()* 255);
    let random3 = Math.floor(Math.random()* 255);
    card.style.background = `rgb(${random1},${random2},${random3})`;
    let h3 = document.createElement('input');
    h3.value = `rgb(${random1},${random2},${random3})`;
    card.appendChild(h3);
});

// Copying the text when clicking the button.
buttons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        let selectedBtn = e.target;
        let copyText = selectedBtn.parentElement.lastChild;
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
      })
});

