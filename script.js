document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        const readMoreButton = card.querySelector('.read-more');
        const readLessButton = card.querySelector('.read-less');

        readMoreButton.addEventListener('click', function () {
            card.querySelector('.card-front').style.display = 'none';
            card.querySelector('.card-back').style.display = 'block';
        });

        readLessButton.addEventListener('click', function () {
            card.querySelector('.card-front').style.display = 'block';
            card.querySelector('.card-back').style.display = 'none';
        });
    });
   
});

 // JavaScript to handle opening and closing of the popup
    document.getElementById('contact-us-link').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('contact-popup').style.display = 'flex';
    });

    function closePopup() {
      document.getElementById('contact-popup').style.display = 'none';
    }
     // JavaScript for handling tour dropdown navigation
     document.addEventListener('DOMContentLoaded', function () {
        const dropdownLinks = document.querySelectorAll('.navbar .links .dropdown-content a');
  
        dropdownLinks.forEach(link => {
          link.addEventListener('click', function (event) {
            // Prevent default action for anchor tags
            event.preventDefault();
  
            // Get href attribute value
            const href = this.getAttribute('href');
  
            // Navigate to the href location
            if (href) {
              window.location.href = href;
            }
          });
        });
      });
  //responsive navbar
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
  
      // Toggle dropdown menu on click
      dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
      });
  
      // Close dropdown if user clicks outside
      window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdownContent.classList.remove('show');
        }
      });
    });
  });