let buttons = document.querySelectorAll('.button-ripple-effect');

// Attaching click event listener
buttons.forEach((button) => {
  console.log('attaching listener');
  button.addEventListener('click', function(e) {
    console.log('btn clicked');
    e.stopPropagation()
    console.log(e.clientX, e.clientY);
    console.log(e.target)
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

   // Creating the ripple element
    let ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);

    // Removing the ripple element
    setTimeout(() => {
        ripple.remove();
    }, 1000);

  });

});
