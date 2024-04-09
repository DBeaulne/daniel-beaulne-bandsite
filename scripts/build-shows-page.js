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

const showDates = [
  {
    date: 'Mon Sept 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 17 2024',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA ',
  },
  {
    date: 'Sat Oct 12 2024',
    venue: 'View Lounge ',
    location: 'San Francisco, CA ',
  },
  {
    date: 'Sat Nov 16 2024',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',
    veune: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
];

// Function to create any element and attach a class to it
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};

const createShowDates = dates => {
  // create the ShowDates table for mobile breakpoint
  // create elements
  const showContainerElm = document.querySelector('.shows__container');
  const showdateContainerElm = makeElement('div', 'showdates');

  const showDateLabelElm = makeElement('div', 'showdates__label');
  const showVenueLabelElm = makeElement('div', 'showdates__label');
  const showLocationLabelElm = makeElement('div', 'showdates__label');

  const showDateLabelPtag = document.createElement('p');
  const showVenueLabelPtag = document.createElement('p');
  const showLocationLabelPtag = document.createElement('p');

  const showDateData = makeElement('div', 'showdates__data');
  const showVenueData = makeElement('div', 'showdates__data');
  const showLocationData = makeElement('div', 'showdates__data');

  const showDate = makeElement('p', 'showdates__data--date');
  const showVenue = makeElement('p', 'showdates__data--venue');
  const showLocation = makeElement('p', 'showdates__data--location');
  const buyTicketsBtn = makeElement('button', 'shows__btn');

  // Build component
  showContainerElm.appendChild(showdateContainerElm);
  showdateContainerElm.appendChild(showDateLabelElm);
  showDateLabelElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  showdateContainerElm.appendChild(showDateData);
  showDateData.appendChild(showDate);
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

const populateDates = () => {
  const showDatesSection = document.querySelector('#upcoming-shows');
  const showContainerElm = makeElement('div', 'shows__container');
  const containerTitleElm = makeElement('div', 'shows__title');
  const containerTitleElmH2 = document.createElement('h2');

  showDatesSection.appendChild(showContainerElm);
  showContainerElm.appendChild(containerTitleElm);
  containerTitleElm.appendChild(containerTitleElmH2);
  containerTitleElmH2.innerText = 'Shows';

  for (const d of showDates) {
    showDatesSection.append(createShowDates(d));
  }
};

window.onload = populateDates;
