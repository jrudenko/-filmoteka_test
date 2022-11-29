import axios from 'axios';

const API_KEY = '20e13b9a04a0b41c58cfa9dd598a635c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const URL_TRENDING = 'trending/movie/day';
const URL_KEY = 'search/movie';
const URL_ID = 'movie';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
  page: 1,
  include_adult: false,
});

export class FetchApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.loadedHits = 0;
  }

  async fetchTrending() {
    const url = `${BASE_URL}${URL_TRENDING}?${searchParams}`;

    try {
      const response = await axios.get(url);

      this.setQuery('');
      this.resetPage();
      this.setLoadedHits(response.total_pages);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async fetchKey(query) {
    const url = `${BASE_URL}${URL_KEY}?${searchParams}&query=${query}`;

    try {
      const response = await axios.get(url);

      this.setQuery(query);
      this.resetPage();
      this.setLoadedHits(response.total_pages);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async fullFetch(id) {
    const url = `${BASE_URL}${URL_ID}/${id}?${searchParams}`;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  incrementPage(nextPage) {
    this.page = nextPage;
  }

  resetPage() {
    this.page = 1;
  }

  getQuery() {
    return this.searchQuery;
  }

  setQuery(newQuery) {
    this.searchQuery = newQuery;
  }

  getLoadedHits() {
    return this.loadedHits;
  }

  setLoadedHits(hits) {
    this.loadedHits = hits;
  }
}

// import axios from 'axios';

// const API_KEY = '20e13b9a04a0b41c58cfa9dd598a635c';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const URL_TRENDING = 'trending/movie/day';
// const URL_KEY = 'search/movie';
// const URL_ID = 'movie';

// // const BASE_URL = 'https://api.themoviedb.org/3';
// // const URL_TRENDING = `${BASE_URL}/trending/movie/week`;
// // const URL_KEY = `${BASE_URL}/search/movie`;
// // const URL_ID = `${BASE_URL}/movie/`;

// const searchParams = new URLSearchParams({
//   api_key: API_KEY,
//   language: 'en-US',
//   page: 1,
//   include_adult: false,
// });

// export class FetchApiMovies {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.loadedHits = 0;
//     this.list = 'home';
//     this.baseUrl = 'https://api.themoviedb.org/3/';
//     this.language = 'en-US';
//     this.key = '20e13b9a04a0b41c58cfa9dd598a635c';
//   }
//   async fetchWithPage(pageNumber) {
//     const searchParams = new URLSearchParams({
//       api_key: API_KEY,
//       language: 'en-US',
//       page: pageNumber,
//       include_adult: false,
//     });

//     const url = '${BASE_URL}${URL_TRENDING}?${searchParams}';
//     // console.log(url),
//     try {
//       const response = await axios.get(url);
//       this.setQuery('');
//       this.resetPage();
//       this.setLoadedHits(response.data.total_pages);
//       return response.data;
//     } catch (error) {
//       return console.log(error);
//     }
//   }
//   async fetchTrending() {
//     const url = '${BASE_URL}${URL_TRENDING}?${searchParams}';

//     try {
//       const response = await axios.get(url);

//       this.setQuery('');
//       this.resetPage();
//       this.setLoadedHits(response.total_pages);
//       // console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return console.log(error);
//     }
//   }

//   async fetchKey(query) {
//     const url = '${BASE_URL}${URL_KEY}?${searchParams}&query=${query}';

//     try {
//       const response = await axios.get(url);

//       this.setQuery(query);
//       this.resetPage();
//       this.setLoadedHits(response.total_pages);

//       return response.data;
//     } catch (error) {
//       return console.log(error);
//     }
//   }

//   async fullFetch(id) {
//     const url = '${BASE_URL}${URL_ID}/${id}?${searchParams}';

//     try {
//       const response = await axios.get(url);

//       return response.data;
//     } catch (error) {
//       return console.log(error);
//     }
//   }

//   incrementPage(nextPage) {
//     this.page = nextPage;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   getQuery() {
//     return this.searchQuery;
//   }

//   setQuery(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   getLoadedHits() {
//     return this.loadedHits;
//   }

//   setLoadedHits(hits) {
//     this.loadedHits = hits;
//   }
// }