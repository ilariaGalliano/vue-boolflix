/*************
 * Boolfix Api
 *************/

const app = new Vue({
  el: '#app',
  data: {
    movies: [],
    series: [],
    search: '',
  },
  methods: {
    searchBtn() {
      this.getMovie();
      this.getSerie();
      this.search = '';
    },

    getMovie() {
      if (this.search) {

        axios.get('http://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '3c67c4d06b5f783fc1b76e71b63a58a7',
              language: 'it-IT',
              query: this.search
           }
        })
        .then( response => {
          this.movies = response.data.results;
        })

        .catch(error => {
          console.log('error', error);
        })
      }
    },
    getSerie(){
      if (this.search) {

        axios.get('http://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '3c67c4d06b5f783fc1b76e71b63a58a7',
              language: 'it-IT',
              query: this.search
           }
        })
        .then( response => {
          this.series = response.data.results;
        })

        .catch(error => {
          console.log('error', error);
        })
      }
    }
  }

});
