

  const API_link = 'https://api.themoviedb.org/3'
  const API_key = '026890b0945cbc402813edbeb90f0223'



  export const getMovies = async (search_text, current_page) => {
    const query = `&query=${ search_text && search_text.length >= 1 ? search_text : null}&page=${current_page}`
    // API KEY: 026890b0945cbc402813edbeb90f0223

    try {
      const response = await fetch(`${API_link}/search/movie?api_key=${API_key + query}`,{
        method: 'GET',
      })
        // .then((result) => {
        //   if(result.ok) {
        //   return result.json()
        //   }
        //   throw new Error("Something bad happened…")
        // })
        // .then((response) => {
        //   return response;
        // })
        // .catch((error) => {
        //   console.error(error);
        // });

      return await response.json()
    } catch (error) {
      console.log(error);
    }
  };


