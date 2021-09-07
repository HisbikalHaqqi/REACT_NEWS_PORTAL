import Get from './Get';
import { API_KEY } from './Config';

const getPopular = (param) => Get(`everything?q=${param}&from=2021-09-06&to=2021-09-06&sortBy=popularity&apiKey=${API_KEY}`);
const getTopHeadline = (country, category) => Get(`top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
const getArticle = (article) => Get(`everything?q=${article}&from=2021-08-07&sortBy=publishedAt&apiKey=${API_KEY}`);

const API = {
    getPopular,
    getArticle,
    getTopHeadline
}

export default API;