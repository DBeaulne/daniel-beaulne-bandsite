/** BandSite API code */

// to use you must append ?api_key=<your_api_key_here> to each of the API request URLs (except for /register)

export const API_KEY = 'e687fdd1-3285-4094-9651-8a690a75b760';

export class BandSiteApi {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
  }

  postComment = async (comment) => {
    try {
      const response = await axios.post(`${this.baseUrl}comments?api_key=<${API_KEY}>`, comment);
    } catch (error) {
      console.log(error);
    }
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

  likeComment = async (id) => {
    try {
      const response = await axios.put(`${this.baseUrl}comments/${id}/like?api_key=<${this.API_KEY}>`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  deleteComment = async (id) => {
    try {
      const response = await axios.delete(`${this.baseUrl}comments/${id}?api_key=<${this.API_KEY}>`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
