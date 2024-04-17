/* Shows Page Javascript */

/**Object declaration for shows object */

/* 
let showDates = [
    {
        date: '',
        venus: '',
        location: '',
    },
]
*/

let showDates = [
  {
    date: 'Mon Sept 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA'
  },
  {
    date: 'Tue Sept 17 2024',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA '
  },
  {
    date: 'Sat Oct 12 2024',
    venue: 'View Lounge ',
    location: 'San Francisco, CA '
  },
  {
    date: 'Sat Nov 16 2024',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA'
  },
  {
    date: 'Fri Nov 29 2024',
    venue: 'Moscow Center',
    location: 'San Francisco, CA'
  },
  {
    date: 'Wed Dec 18 2024',
    venue: 'Press Club',
    location: 'San Francisco, CA'
  }
];

// Function to create any element and attach a class to it
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};

const createhowDates = dates => {
  // create the ShowDates table for mobile breakpoint
  // create elements

  const parent = document.querySelector('.shows__wrapper');
  const showdatesContainerElm = makeElement('div', 'shows__showdates');

  const showDateLabelElm = makeElement('div', 'shows__showdate-label');
  const showVenueLabelElm = makeElement('div', 'shows__showdate-label');
  const showLocationLabelElm = makeElement('div', 'shows__showdate-label');

  const showdateWrapperElm = makeElement('div', 'shows__showdate-wrapper');

  const showDateLabelPtag = document.createElement('p');
  const showVenueLabelPtag = document.createElement('p');
  const showLocationLabelPtag = document.createElement('p');

  const showDateInfo = makeElement('div', 'shows__showdate-info');
  const showVenueInfo = makeElement('div', 'shows__showdate-info');
  const showLocationInfo = makeElement('div', 'shows__showdate-info');

  const showDate = makeElement('p', 'shows__showdate-info--date');
  const showVenue = makeElement('p', 'shows__showdate-info--venue');
  const showLocation = makeElement('p', 'shows__showdate-info--location');
  const buttonContainer = makeElement('div', 'shows__cta-container');
  const buyTicketsBtn = makeElement('button', 'cta-btn');

  // Build component
  parent.appendChild(showdatesContainerElm);
  showdatesContainerElm.appendChild(showDateLabelElm);
  showDateLabelElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  showdatesContainerElm.appendChild(showDateInfo);
  showDateInfo.appendChild(showDate);
  showDate.innerText = dates.date;

  showdatesContainerElm.appendChild(showVenueLabelElm);
  showVenueLabelElm.appendChild(showVenueLabelPtag);
  showVenueLabelPtag.innerText = 'venue';

  showdatesContainerElm.appendChild(showVenueInfo);
  showVenueInfo.appendChild(showVenue);
  showVenue.innerText = dates.venue;

  showdatesContainerElm.appendChild(showLocationLabelElm);
  showLocationLabelElm.appendChild(showLocationLabelPtag);
  showLocationLabelPtag.innerText = 'location';

  showdatesContainerElm.appendChild(showLocationInfo);
  showLocationInfo.appendChild(showLocation);
  showLocation.innerText = dates.location;

  showdatesContainerElm.appendChild(buyTicketsBtn);
  buyTicketsBtn.innerText = 'buy tickets';

  parent.append(makeElement('div', 'divider'));

  return parent;
};

const renderShowdates = () => {
  const parent = document.querySelector('.shows');
  const showsContainerElm = makeElement('div', 'shows__container');
  const containerTitleElm = makeElement('div', 'shows__title');
  const containerTitleElmH2 = document.createElement('h2');

  const wrapperContainerElm = makeElement('div', 'shows__wrapper');
  const labelContainerElm = makeElement('div', 'shows__label-container');
  const showDateLabelElm = makeElement('div', 'shows__showdate-label');
  const showVenueLabelElm = makeElement('div', 'shows__showdate-label');
  const showLocationLabelElm = makeElement('div', 'shows__showdate-label');
  const showDateLabelPtag = document.createElement('p');
  const showVenueLabelPtag = document.createElement('p');
  const showLocationLabelPtag = document.createElement('p');

  parent.appendChild(showsContainerElm);
  showsContainerElm.appendChild(containerTitleElm);
  containerTitleElm.appendChild(containerTitleElmH2);
  containerTitleElmH2.innerText = 'Shows';

  showsContainerElm.appendChild(wrapperContainerElm);
  wrapperContainerElm.appendChild(labelContainerElm);

  labelContainerElm.appendChild(showDateLabelElm);
  showDateLabelElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  labelContainerElm.appendChild(showVenueLabelElm);
  showVenueLabelElm.appendChild(showVenueLabelPtag);
  showVenueLabelPtag.innerText = 'venue';

  labelContainerElm.appendChild(showLocationLabelElm);
  showLocationLabelElm.appendChild(showLocationLabelPtag);
  showLocationLabelPtag.innerText = 'location';

  for (const d of showDates) {
    parent.append(createhowDates(d));
  }
};

const heroImage = url => {
  // a function to display the desired image for the hero section of the page
  const heroSection = document.querySelector('.hero');
  const showsHeroSectionImgUrl = url;
  heroSection.style.backgroundImage = 'url(' + showsHeroSectionImgUrl + ')';
};

heroImage('../assets/Images/hero-shows.jpg');
const heroSection = document.querySelector('.hero');

renderShowdates();

// Code to handle the requirement that clicking on a show date changes the styling
// as outlined in requirements

const showdatesContainer = document.querySelectorAll('.shows__showdates');
const tabletSection = document.querySelector('#tablet');
const mobileSection = document.querySelector('#mobile');

function clearAttribute() {
  const showdateRemoveID = document.getElementById('activeShowdate');

  if (showdateRemoveID !== null) {
    showdateRemoveID.removeAttribute('id');
  }
  return;
}

showdatesContainer.forEach((value, index) => {
  showdatesContainer[index].addEventListener('click', function (event) {
    if (this.id !== 'activeShowdate') {
      clearAttribute();
      showdatesContainer[index].setAttribute('id', 'activeShowdate');
    }
  });
});
