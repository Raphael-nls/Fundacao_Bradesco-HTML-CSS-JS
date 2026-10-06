'use strict';
const swither = document.querySelector('.btn');
swither.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
      this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name ' + document.body.className);
});
