/*************
 * Boolfix Api
 *************/

const app = new Vue({
  el: '#app',
  data: {
    movies: [],
    series: [],
    search: '',
    moviesVisibility: true,
    seriesVisibility: true,
  },
  methods: {

    searchBtn() {
      this.getMovie();
      this.getSerie();
      // To clean input
      this.search = '';
    },

    // Function to get a movie
    getMovie() {
      if (this.search.trim()) {

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
      };
    },

    // Function to get a serie
    getSerie(){
      if (this.search) {

        axios.get('http://api.themoviedb.org/3/search/tv', {
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
    },

    // Use stars to vote
    voteStars(vote) {
     return Math.ceil(vote / 2);
   },

    // Filter movies and series by keyup
    searchFiltered(){
     if ( this.search.length > 2 ) {
            this.getMovie()
            this.getSerie()
     }
    },

    // To reset my search
    resetSearch(){
     this.movies = [];
     this.series = [];
     // To clean input
     this.search = '';
   },

   // To show just the movies
   showMovies() {
      this.moviesVisibility = true
      this.seriesVisibility = false
       },

    // To show just the series
    showSeries() {
      this.moviesVisibility = false
      this.seriesVisibility = true
    },
    
    // To show movies and series
    showAll() {
      this.moviesVisibility = true
      this.seriesVisibility = true
    },

  }
});
