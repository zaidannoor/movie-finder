class DataSource{
    /* Mengambil data saat awal web diload
      data yang diambil saya pilih harry potter */
    static initialLoad(){
        return new Promise((resolve,reject) => {  
          fetch(`http://www.omdbapi.com/?apikey=4971988c&s=harry%20potter`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {  
              resolve(responseJson.Search);
          })
          .catch(error => {
            reject(error);
          })
        })
    }

    /* Mengambil data berdasarkan keyword pencarian */
    static searchMovie(keyword){
      return new Promise((resolve,reject) => {  
        fetch(`http://www.omdbapi.com/?apikey=4971988c&s=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {  
          if (responseJson.Search) {
            resolve(responseJson.Search)
          } else {
            reject(responseJson.Error)
          }
        })
        .catch(error => {
          reject(error)
        })
      })
    }

    /* Mengambil data berdasarkan id yang didapat saat click button detail */
    static getMovieByID(id){
      return new Promise((resolve,reject) => {  
        fetch(`http://www.omdbapi.com/?apikey=4971988c&i=${id}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {  
          if (responseJson.Error) {
            reject(responseJson.Error)
          } else {
            resolve(responseJson)
          }
        })
        .catch(error => {
          reject(error)
        })
      })
    }
}

export default DataSource;