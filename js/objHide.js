const button = document.querySelector('#toggle-button');
const elements = document.querySelectorAll('.toggle-element');

 button.addEventListener('click', () => {
   elements.forEach((element) => {
     if (element.style.display === 'none') {
       element.style.display = 'block';
       element.style.transition = 'opacity 0.1s ease-in-out';
       element.style.opacity = 1;
     } else {
         element.style.transition = 'opacity 0.1s ease-in-out';
       element.style.opacity = 0;
       setTimeout(() => {
         element.style.display = 'none';
       }, 500);
     }
   });
 });