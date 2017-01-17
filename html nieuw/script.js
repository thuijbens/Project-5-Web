/* 1. selecteer elementen met document.querySelector */
var footer = document.querySelector('.leesknop'); // first section element
var button = document.querySelector('.leesknop > button');

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: footer.dance) */
    footer.classList.toggle('dancing')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', dance);
