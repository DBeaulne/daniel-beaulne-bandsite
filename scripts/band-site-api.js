/** BandSite API code
 *
 * -- create a class called BandSiteApi with the following methods
 */
/* # constructor: - the constructor accepts an API key as its only parameter (e.g. apiKey)
 *                  This API key will be used when making POST and GET requests to the APPI (such as in the postComment
 *                  and getComments methods).
 *                - The constructor must store the API key parameter in an instance property (e.g. this.apiKey).
 *                - The constructor must store the base API URL in an instance property (e.g. this.baseUrl). This
 *                  property can be set to a hardcoded string, as it is not passed as a parameter.
 */
/** # postComment: - This method accepts a comment object as its only parameters. It must send a POST request to
 *                  the API with the comment object as the body, using the API key instance property (this.apiKey)
 *                  to authenticate the request
 */
/* # getComments: - This method accepts no parameters. It must send a GET request to the API, using the API key instance
 *                  property (this.apiKey) to authenticate the request.
 *                - The getComments method must sort the array of comments from the API, returning them in order from
 *                  newest to oldest.
 */
/* # getShows:    - This method accepts no parameters. It must send a GET request to the provided shows API,
 *                  using the API key instance property (e.g. this.apiKey) to authenticate the request.
 *                - The getShows method must return the array of show data objects returned from the API.
 */
/*
 * -- You must create an instance of the BandSiteApi class and use this to interact with the API.
 * -- A class method that makes an API request must be marked with the async keyword. When calling the async method,
 *    remember to use await!
 */

// to use you must append ?api_key=<your_api_key_here> to each of the API request URLs (except for /register)

const API_KEY = 'e687fdd1-3285-4094-9651-8a690a75b760';

class BandSiteApi {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
  }

  postComment = async comment => {
    try {
      const response = await axios.post(`${this.baseUrl}comments?api_key=<${API_KEY}>`, comment);
    } catch (error) {}
  };

  getComments = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}comments?api_key=<${API_KEY}>`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getShows = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}showdates?api_key=<${this.API_KEY}>`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}
