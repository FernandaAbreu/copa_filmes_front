import React from 'react';
import { ContentAreaContainer } from './styles';
import PropTypes from 'prop-types';

function MovieCard({
    model,
    onChangeEvent
  }) {

    return (
        
             <ContentAreaContainer.Item className="column col4">
                    <input
                        type="checkbox"
                        id={model.id}
                        value={model.id}
                        className="centerCheckbox"
                        onChange={(event) => onChangeEvent(event, model)}
                    />
                    <ContentAreaContainer.Title >
                    {model.titulo}
                </ContentAreaContainer.Title>
                <ContentAreaContainer.Year>
                    {model.ano}
            </ContentAreaContainer.Year>
             </ContentAreaContainer.Item>

        
    )

}
MovieCard.defaultProps = {
    onChangeEvent: () => {},
  };
  
  MovieCard.propTypes = {
    onChangeEvent: PropTypes.func,
  };
  export default MovieCard;
