/** Global Functions */

// a function to display the desired image for the hero section of the page
const heroImage = url => {
  // function call will pass in the url string of the desired img
  const heroSection = document.querySelector('.hero');
  const showsHeroSectionImgUrl = url;
  heroSection.style.backgroundImage = 'url(' + showsHeroSectionImgUrl + ')';
};

// Function to create any element and attach a class to it
// ver 1.0
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};
