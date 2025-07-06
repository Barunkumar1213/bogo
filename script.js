const optionBoxes = document.querySelectorAll('.option-box');

optionBoxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');

  box.addEventListener('click', () => {
    optionBoxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    radio.checked = true;
  });
});
