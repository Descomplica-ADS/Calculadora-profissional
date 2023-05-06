const display = document.querySelector('input[type="text"]');

document.querySelectorAll('.keys button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    switch(value) {
      case '=':
        display.value = eval(display.value);
        break;
      case 'C':
        display.value = '';
        break;
      default:
        display.value += value;
        break;
    }
  });
});
