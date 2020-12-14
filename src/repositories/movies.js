import config from '../config';

const URL_MOVIES = `${config.URL_BACKEND}/movie`;

function getAll() {
    return fetch(`${URL_MOVIES}`)
      .then(async (response) => {
        if (response.ok) {
          const movies = await response.json();
          return movies;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }
  function generate(listMovies) {
    return fetch(`${URL_MOVIES}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(listMovies),
    })
      .then(async (response) => {
        if (response.ok) {
          const winners = await response.json();
          return winners;
        }
  
        throw new Error('Não foi possível gerar a lista de campeões (');
      });
  }
  
  export default {
    getAll,
    generate
  };
