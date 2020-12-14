import React, { useEffect, useState } from 'react';
import BannerMain from '../../../components/BannerMain';
import MovieCard from '../../../components/MovieCard';
import MovieTopPosition from '../../../components/MovieTopPosition';
import movieRepository from '../../../repositories/movies';
import '../../../App.css';
import Button from '../../../components/Button';
import { ContentAreaContainer } from '../../../components/MovieCard/styles';
function MovieSelection() {
  var process = false;
  const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [winners, setWinners] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    if (selected.length == 8) {
      process = true;
      movieRepository.generate(selected)
        .then((movies) => {

          setWinners(movies);
        })
        .catch((err) => {
          console.log(err.message);
          alert("Não foi possivel gerar");

        });
    } else {
      alert("É necessário selecionar 8 itens");
    }
  }


  useEffect(() => {
    movieRepository.getAll()
      .then((movies) => {

        setMovieList(movies);
      })
      .catch((err) => {
        console.log(err.message);

      });
  }, []);

  function onChange(event, item) {
    if (event.target.checked) {
      setSelected([...selected, item]);
    } else {
      setSelected((prev) =>
        prev.filter((currItem) => currItem.value !== item.value)
      );
    }
  }
  return (
    <div style={{ background: '#cacaca' }} >
      {winners.length === 0 &&
        <div className="pageDefault">
          <BannerMain
            nameOfSection="Fase de Seleção"
            descriptionOFSection="Selecione 8 filmes que você deseja que entrem e depois precione o botão Gerar Meu Campeonato para prosseguir"
          ></BannerMain>

          <p style={{ padding: '30px' }}>Selecionados {selected.length > 0 ? selected.length : 0} de 8 filmes</p>
          {movieList.length === 0 &&
            <div className="center">
              <p>Carregando ...</p>
            </div>
          }
          <ContentAreaContainer>


            {movieList.map((movie, indice) => {
              return (

                <MovieCard
                  model={movie}
                  onChangeEvent={onChange}
                ></MovieCard>

              )

            })
            }
          </ContentAreaContainer>
          <div style={{ padding: '30px' }}>
            <Button onClick={handleClick}>
              GERAR MEU CAMPEONATO
          </Button>

            {process &&
              <div className="center">
                <p>Gerando filmes campeões ...</p>
              </div>
            }
          </div>
        </div>
      }
   {winners.length != 0 &&
     <div className="pageDefault">
          <BannerMain
            nameOfSection="Resultado Final"
            descriptionOFSection="Veja o resultado final do Campeonato de filmes de forma simples e rápida"
          ></BannerMain>

          {winners.map((winner, indice) => {
                  return (
                    
                      <MovieTopPosition
                      model={winner}
                      position_in_rank={indice +1}
                      ></MovieTopPosition>
                  )
          })
        }
        </div>
       }

    </div>
  )
}
export default MovieSelection;
