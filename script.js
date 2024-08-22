function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


// SCROLL TO TOP BUTTON

const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Show the button when the page is scrolled down 300px / You can adjust it according to your needs.
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact Me Button / Sends Email
document.getElementById('contact').addEventListener('click', function() {
  var link = "mailto:kaanthemusician@gmail.com";
             
  

  window.location.href = link;
});

// Let's Roll Button / Scrolls to the pricing plans of the page

function scrollToPrice(){
  document.getElementById('pricing-plans').scrollIntoView({behavior: 'smooth'});
}


// Changing title of the page when the user is not on the page

window.onload = function() {
  var pageTitle = document.title; // HTML title of the page
  var attentionMessage = 'Hey, come back!'; // Message that will be displayed in the title

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    }
    else {
      document.title = pageTitle;
      clearInterval(blinkEvent);

    } 
  });

  function blink(){
    blinkEvent = setInterval(function() {
      if(document.title === attentionMessage){
        document.title = pageTitle;
      }
      else {
        document.title = attentionMessage;
      }
    }, 100);
  }
};

