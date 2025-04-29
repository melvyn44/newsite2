// App.js
document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.querySelector(".trigger");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    // Toggle the menu when the hamburger icon is clicked
    trigger.addEventListener("click", function () {
      dropdownContent.classList.toggle("open");
    });
  
    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function (event) {
      if (!dropdownContent.contains(event.target) && !trigger.contains(event.target)) {
        dropdownContent.classList.remove("open");
      }
    });
  });
  const sliderTrack = document.querySelector('.slider-track');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;
  
  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= 2) { // Ici on a 2 groupes
      currentIndex = 0; // Retour au début
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-05H8109028"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-05H8109028');
</script>
    
