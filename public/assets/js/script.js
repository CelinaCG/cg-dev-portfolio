// Chronologie

window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.timeline-entry');
    if (elements.length > 0) {
        window.addEventListener('scroll', checkVisibility);

        function checkVisibility() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.classList.add('show');
                } else {
                    element.classList.remove('show');
                }
            });
        }
    }
});

// test

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}};

// Bouton haut de page


// Prendre le bouton

const backToTopButton = document.getElementById('back-to-top');
// console.log(backToTopButton);

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');
  // console.log(backToTopButton);

  function checkScrollPosition() {
    // console.log('checkScrollPosition appelée');
    if (window.scrollY > 200) {
      backToTopButton.classList.add('back-to-top-show');
    } else {
      backToTopButton.classList.remove('back-to-top-show');
    }
  }

  // Ajouter l'événement scroll pour vérifier la position de la fenêtre
  window.addEventListener('scroll', checkScrollPosition);


  // Ajouter l'événement click pour faire remonter la page
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior:'smooth' });
  });
});




