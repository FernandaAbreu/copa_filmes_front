import React from 'react';
import { ContentAreaContainer } from './styles';
import PropTypes from 'prop-types';

export default function MovieTopPosition({
    model,
    position_in_rank
}) {

    return (
        
             <ContentAreaContainer.Item>
                  <ContentAreaContainer.DivLateral>

                    <ContentAreaContainer.Position>
                            {position_in_rank} °
                    </ContentAreaContainer.Position>
                  </ContentAreaContainer.DivLateral>
                  <ContentAreaContainer.DivPrincipal>

                        <ContentAreaContainer.Title>
                            {model.titulo}
                        </ContentAreaContainer.Title>
                </ContentAreaContainer.DivPrincipal>

 
             </ContentAreaContainer.Item>

        
    )

}
