const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'https://localhost:55000'
  : 'url_prod';
export default {
  URL_BACKEND,
};
