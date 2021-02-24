
class Network {
  constructor() {
    this.API_link = 'https://api.themoviedb.org/3'
    this.API_key = '026890b0945cbc402813edbeb90f0223'
  }

  getMovies = (search_text, current_page, setMovies) => {
    const query = `&query=${ search_text && search_text.length >= 3 ? search_text : null}&page=${current_page}`
    // API KEY: 026890b0945cbc402813edbeb90f0223
    fetch(`${this.API_link}/search/movie?api_key=${this.API_key + query}`,{
      method: 'GET',
    })
      .then((result) => {
        if(result.ok) {
        return result.json()
        }
        throw new Error("Something bad happened…")
      })
      .then((response) => {
        setMovies(response.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export default new Network()