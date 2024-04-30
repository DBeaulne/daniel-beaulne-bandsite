/** Global Functions */

// a function to display the desired image for the hero section of the page
export const heroImage = url => {
  // function call will pass in the url string of the desired img
  const heroSection = document.querySelector('.hero');
  const showsHeroSectionImgUrl = url;
  heroSection.style.backgroundImage = 'url(' + showsHeroSectionImgUrl + ')';
};

// Function to create any element and attach a class to it
// ver 1.0
// Current limitations -- Passing in an elem without a class results in a class="null" being added
// TO DO for future versions -- make second and third parameter optional (if that is even possible)
export const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};
