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

const createTabletShowDates = show => {
  // create the ShowDates table for tablet breakpoint
  // create elements
  const showdatesContainerElm = document.querySelector('.tablet__showdates');
  const showdateInfoEle = makeElement('div', 'tablet__showdates-info');
  const showDateInfo = makeElement('div', 'tablet__info');
  const showVenueData = makeElement('div', 'tablet__info');
  const showLocationData = makeElement('div', 'tablet__info');

  const showDate = makeElement('p', 'tablet__info--date');
  const showVenue = makeElement('p', 'tablet__info--venue');
  const showLocation = makeElement('p', 'tablet__info--location');
  const buttonContainer = makeElement('div', 'tablet__cta');
  const buyTicketsBtn = makeElement('button', 'cta-btn');

  // Build component
  showdatesContainerElm.append(showdateInfoEle);
  showdateInfoEle.appendChild(showDateInfo);
  showDateInfo.appendChild(showDate);
  showDate.innerText = show.date;

  showdateInfoEle.appendChild(showVenueData);
  showVenueData.appendChild(showVenue);
  showVenue.innerText = show.venue;

  showdateInfoEle.appendChild(showLocationData);
  showLocationData.appendChild(showLocation);
  showLocation.innerText = show.location;

  showdateInfoEle.appendChild(buttonContainer);
  buttonContainer.appendChild(buyTicketsBtn);
  buyTicketsBtn.innerText = 'buy tickets';

  showdatesContainerElm.append(makeElement('div', 'divider'));

  return showdatesContainerElm;
};

const showdatesTablet = () => {
  const parent = document.querySelector('#tablet');
  const containerTitleElm = makeElement('div', 'tablet__title');
  const containerTitleElmH2 = document.createElement('h2');

  const containerShowdatesELm = makeElement('div', 'tablet__showdates');
  const showsLabelsElm = makeElement('div', 'tablet__showdates-labels');
  const showDateLabelElm = makeElement('div', 'tablet__label');
  const showVenueLabelElm = makeElement('div', 'tablet__label');
  const showLocationLabelElm = makeElement('div', 'tablet__label');
  const showDateLabelPtag = document.createElement('p');
  const showVenueLabelPtag = document.createElement('p');
  const showLocationLabelPtag = document.createElement('p');

  parent.appendChild(containerTitleElm);
  containerTitleElm.appendChild(containerTitleElmH2);
  containerTitleElmH2.innerText = 'Shows';
  parent.appendChild(containerShowdatesELm);

  containerShowdatesELm.appendChild(showsLabelsElm);

  showsLabelsElm.appendChild(showDateLabelElm);
  showDateLabelElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  showsLabelsElm.appendChild(showVenueLabelElm);
  showVenueLabelElm.appendChild(showVenueLabelPtag);
  showVenueLabelPtag.innerText = 'venue';

  showsLabelsElm.appendChild(showLocationLabelElm);
  showLocationLabelElm.appendChild(showLocationLabelPtag);
  showLocationLabelPtag.innerText = 'location';

  for (const d of showDates) {
    parent.append(createTabletShowDates(d));
  }
};

const createMobileShowDates = dates => {
  // create the ShowDates table for mobile breakpoint
  // create elements

  const showContainerElm = document.querySelector('.mobile__container');
  const showdateContainerElm = makeElement('div', 'mobile__showdates');

  const showDateLabelElm = makeElement('div', 'mobile__showdates-label');
  const showVenueLabelElm = makeElement('div', 'mobile__showdates-label');
  const showLocationLabelElm = makeElement('div', 'mobile__showdates-label');

  const showDateLabelPtag = document.createElement('p');
  const showVenueLabelPtag = document.createElement('p');
  const showLocationLabelPtag = document.createElement('p');

  const showDateInfo = makeElement('div', 'mobile__showdates-info');
  const showVenueData = makeElement('div', 'mobile__showdates-info');
  const showLocationData = makeElement('div', 'mobile__showdates-info');

  const showDate = makeElement('p', 'mobile__showdates-info--date');
  const showVenue = makeElement('p', 'mobile__showdates-info--venue');
  const showLocation = makeElement('p', 'mobile__showdates-info--location');
  const buyTicketsBtn = makeElement('button', 'cta-btn');

  // Build component
  showContainerElm.appendChild(showdateContainerElm);
  showdateContainerElm.appendChild(showDateLabelElm);
  showDateLabelElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  showdateContainerElm.appendChild(showDateInfo);
  showDateInfo.appendChild(showDate);
  showDate.innerText = dates.date;

  showdateContainerElm.appendChild(showVenueLabelElm);
  showVenueLabelElm.appendChild(showVenueLabelPtag);
  showVenueLabelPtag.innerText = 'venue';

  showdateContainerElm.appendChild(showVenueData);
  showVenueData.appendChild(showVenue);
  showVenue.innerText = dates.venue;

  showdateContainerElm.appendChild(showLocationLabelElm);
  showLocationLabelElm.appendChild(showLocationLabelPtag);
  showLocationLabelPtag.innerText = 'location';

  showdateContainerElm.appendChild(showLocationData);
  showLocationData.appendChild(showLocation);
  showLocation.innerText = dates.location;

  showdateContainerElm.appendChild(buyTicketsBtn);
  buyTicketsBtn.innerText = 'buy tickets';

  showContainerElm.append(makeElement('div', 'divider'));

  return showContainerElm;
};

const showdatesMobile = () => {
  const parent = document.querySelector('#mobile');
  const showContainerElm = makeElement('div', 'mobile__container');
  const containerTitleElm = makeElement('div', 'mobile__title');
  const containerTitleElmH2 = document.createElement('h2');

  parent.appendChild(showContainerElm);
  showContainerElm.appendChild(containerTitleElm);
  containerTitleElm.appendChild(containerTitleElmH2);
  containerTitleElmH2.innerText = 'Shows';

  for (const d of showDates) {
    parent.append(createMobileShowDates(d));
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
// heroSection.style.height = '75vw';
showdatesTablet();
showdatesMobile();

// Code to handle the requirement that clicking on a show date changes the styling
// as outlined in requirements

const showdateBoxTablet = document.querySelectorAll('.tablet__showdates-info');
const showdateBoxMobile = document.querySelectorAll('.mobile__showdates');

function clearAttribute() {
  const showdateRemoveTabID = document.getElementById('activeShowdateTablet');
  const showdateRemoveMobID = document.getElementById('activeShowdateMobile');

  if (showdateRemoveTabID !== null) {
    showdateRemoveTabID.removeAttribute('id');
  }
  if (showdateRemoveMobID !== null) {
    showdateRemoveMobID.removeAttribute('id');
  }
  return;
}

showdateBoxTablet.forEach((value, index) => {
  showdateBoxTablet[index].addEventListener('click', function (event) {
    if (this.id !== 'activeShowdateTablet') {
      clearAttribute();
      showdateBoxTablet[index].setAttribute('id', 'activeShowdateTablet');
      showdateBoxMobile[index].setAttribute('id', 'activeShowdateMobile');
    }
  });
});

showdateBoxMobile.forEach((value, index) => {
  showdateBoxMobile[index].addEventListener('click', function (event) {
    if (this.id !== 'activeShowdateMobile') {
      clearAttribute();
      showdateBoxMobile[index].setAttribute('id', 'activeShowdateMobile');
      showdateBoxTablet[index].setAttribute('id', 'activeShowdateTablet');
    }
  });
});
