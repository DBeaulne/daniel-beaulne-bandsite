/* Shows Page Javascript */

// call hero image function and display the image at the path passed into the function
heroImage('../assets/Images/hero-shows.jpg');

// Function to create the primary showdate container that will display the date, venue, & location
// of the show, as well as include the labels for each piece of information

const createShowDates = dates => {
  // create all the elements that we'll need as well as the class required for that element
  const parent = document.querySelector('.shows__wrapper');
  const showdatesContainerElm = makeElement('div', 'shows__showdates');

  const showDateInfo = makeElement('div', 'shows__showdate-info');
  const showVenueInfo = makeElement('div', 'shows__showdate-info');
  const showLocationInfo = makeElement('div', 'shows__showdate-info');

  const showDateLabelPElm = makeElement('p', 'shows__showdate-info--label');
  const showVenueLabelPElm = makeElement('p', 'shows__showdate-info--label');
  const showLocationLabelPElm = makeElement('p', 'shows__showdate-info--label');

  const showDate = makeElement('p', 'shows__showdate-info--date');
  const showVenue = makeElement('p', 'shows__showdate-info--venue');
  const showLocation = makeElement('p', 'shows__showdate-info--location');

  const buttonContainer = makeElement('div', 'shows__cta-container');
  const buyTicketsBtn = makeElement('button', 'cta-btn');

  // Build the component showdate container element including all child elements and the info that
  // goes into the necessary elements
  parent.appendChild(showdatesContainerElm);

  showdatesContainerElm.appendChild(showDateInfo);
  showDateInfo.appendChild(showDateLabelPElm);
  showDateLabelPElm.innerText = 'date';
  showDateInfo.appendChild(showDate);
  showDate.innerText = new Date(dates.date).toDateString();

  showdatesContainerElm.appendChild(showVenueInfo);
  showVenueInfo.appendChild(showVenueLabelPElm);
  showVenueLabelPElm.innerText = 'venue';
  showVenueInfo.appendChild(showVenue);
  showVenue.innerText = dates.place;

  showdatesContainerElm.appendChild(showLocationInfo);
  showLocationInfo.appendChild(showLocationLabelPElm);
  showLocationLabelPElm.innerText = 'location';
  showLocationInfo.appendChild(showLocation);
  showLocation.innerText = dates.location;

  showdatesContainerElm.appendChild(buttonContainer);
  buttonContainer.appendChild(buyTicketsBtn);
  buyTicketsBtn.innerText = 'buy tickets';

  return parent;
};

// function to render the showdates header which contains the title element as well as an
// element that contains the Date, Venue, & Location labels that is displayed only on
// tablet or desktop view and hidden in mobile view, as set by the media query breakpoints

const showdatesHeader = () => {
  // create all the elements that we'll need as well as the class required for that element
  const parent = document.querySelector('.shows');
  const showsContainerElm = makeElement('div', 'shows__container');
  const containerTitleElm = makeElement('div', 'shows__title');
  const containerTitleElmH2 = document.createElement('h2');

  const wrapperContainerElm = makeElement('div', 'shows__wrapper');
  const labelContainerElm = makeElement('div', 'shows__label-container');

  const showDateLabelPtag = makeElement('p', 'shows__label-container--date');
  const showVenueLabelPtag = makeElement('p', 'shows__label-container--venue');
  const showLocationLabelPtag = makeElement('p', 'shows__label-container--location');

  // Build the component showdate container element including all child elements and the info that
  // goes into the necessary elements
  parent.appendChild(showsContainerElm);
  showsContainerElm.appendChild(containerTitleElm);
  containerTitleElm.appendChild(containerTitleElmH2);
  containerTitleElmH2.innerText = 'Shows';

  showsContainerElm.appendChild(wrapperContainerElm);
  wrapperContainerElm.appendChild(labelContainerElm);

  labelContainerElm.appendChild(showDateLabelPtag);
  showDateLabelPtag.innerText = 'date';

  labelContainerElm.appendChild(showVenueLabelPtag);
  showVenueLabelPtag.innerText = 'venue';

  labelContainerElm.appendChild(showLocationLabelPtag);
  showLocationLabelPtag.innerText = 'location';
};

async function getShowsData() {
  const api = new BandSiteApi(API_KEY);
  const newShowDates = await api.getShows();
  return newShowDates;
}

async function renderShows() {
  const newShowDates = await getShowsData();
  showdatesHeader();
  newShowDates.forEach(show => {
    const parent = document.querySelector('.shows');
    parent.append(createShowDates(show));
  });
  watchForClick();
}

renderShows();

// Code to handle the requirement that clicking on a show date changes the styling
// as outlined in requirements

const watchForClick = () => {
  const showdatesContainer = document.querySelectorAll('.shows__showdates');

  showdatesContainer.forEach((value, index) => {
    showdatesContainer[index].addEventListener('click', function (event) {
      if (this.id !== 'activeShowdate') {
        clearAttributes();
        showdatesContainer[index].setAttribute('id', 'activeShowdate');
      }
    });
  });
};

const clearAttributes = () => {
  const showdateRemoveID = document.getElementById('activeShowdate');

  if (showdateRemoveID !== null) {
    showdateRemoveID.removeAttribute('id');
  }
  return;
};
