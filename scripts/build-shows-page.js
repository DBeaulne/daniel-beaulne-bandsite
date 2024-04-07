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
  const showContainer = makeElement('div', 'shows__container');
  const showTitle = makeElement('div', 'shows__title');
  const showTitleH2 = makeElement('h2');
  const showDateLabel = makeElement('div', 'shows__label');
  const showVenueLabel = makeElement('div', 'shows__label');
  const showLocationLabel = makeElement('div', 'shows__label');

  const showLabelPtag = makeElement('p');

  const showDateData = makeElement('div', 'shows_data');
  const showVenueData = makeElement('div', 'shows_data');
  const showLocationData = makeElement('div', 'shows_data');

  const showDate = makeElement('p', 'shows__data--date');
  const showVenue = makeElement('p', 'shows__data--venue');
  const showLocation = makeElement('p', 'shows__data--location');
  const buyTicketsBtn = makeElement('button', 'shows__btn');

  // Build component
  showContainer.appendChild(showTitle);
  showTitle.appendChild(showTitleH2);
  showTitleH2.innerText = 'Shows';

  showContainer.appendChild(showLabel);
  showLabel.appendChild(showLabelPtag);
  showLabelPtag.innerText = 'date';

  showContainer.appendChild(showData);
  showData.appendChild(showDate);
  showDate.innerText = dates.date;

  /*   showContainer.appendChild(showLabel);
  showLabel.appendChild(showLabelPtag);
  showLabelPtag.innerText = 'venue';

  showContainer.appendChild(showData);
  showData.appendChild(showVenue);
  showDate.innerText = dates.venue; */

  /*   showContainer.appendChild(showLabel);
  showLabel.appendChild(showLabelPtag);
  showLabelPtag.innerText = 'location';

  showContainer.appendChild(showData);
  showData.appendChild(showLocation);
  showDate.innerText = dates.location; */

  showContainer.appendChild(buyTicketsBtn);
  buyTicketsBtn.innerText = 'buy tickets';

  return showContainer;
};

const populateDates = () => {
  for (const d of showDates) {
    const showDatesSection = document.querySelector('#upcoming-shows');
    showDatesSection.append(createShowDates(d));
    showDatesSection.append(makeElement('div', 'divider'));
  }
};

window.onload = populateDates;
