/* Shows Page Javascript */

/**Object declaration for shows object */

/* let showDatesArray = [
  {
    date: '',
    venus: '',
    location: ''
  }
]; */

// Function to create any element and attach a class to it
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};

const createShowDates = dates => {
  // create elements

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

  // Build component
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

const renderShowdates = () => {
  const parent = document.querySelector('.shows');
  const showsContainerElm = makeElement('div', 'shows__container');
  const containerTitleElm = makeElement('div', 'shows__title');
  const containerTitleElmH2 = document.createElement('h2');

  const wrapperContainerElm = makeElement('div', 'shows__wrapper');
  const labelContainerElm = makeElement('div', 'shows__label-container');

  const showDateLabelPtag = makeElement('p', 'shows__label-container--date');
  const showVenueLabelPtag = makeElement('p', 'shows__label-container--venue');
  const showLocationLabelPtag = makeElement('p', 'shows__label-container--location');

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

const heroImage = url => {
  // a function to display the desired image for the hero section of the page
  const heroSection = document.querySelector('.hero');
  const showsHeroSectionImgUrl = url;
  heroSection.style.backgroundImage = 'url(' + showsHeroSectionImgUrl + ')';
};

heroImage('../assets/Images/hero-shows.jpg');
const heroSection = document.querySelector('.hero');

async function getShowsData() {
  const api = new BandSiteApi(apiKey);
  const newShowDates = await api.getShows();
  return newShowDates;
}

async function newRenderShows() {
  const newShowDates = await getShowsData();
  renderShowdates();
  console.log(newShowDates);
  newShowDates.forEach(show => {
    console.log(show);
    const parent = document.querySelector('.shows');
    parent.append(createShowDates(show));
  });
}

newRenderShows();

// Code to handle the requirement that clicking on a show date changes the styling
// as outlined in requirements

const showdatesContainer = document.querySelectorAll('.shows__showdates');

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
