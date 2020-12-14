import React from 'react';
import { ContentAreaContainer } from './styles';

export default function BannerMain({
    nameOfSection,
    descriptionOFSection,
  }) {

    return (
        <ContentAreaContainer>
        <ContentAreaContainer.Item>
        <ContentAreaContainer.PageName>
            CAMPEONATO DE FILMES
          </ContentAreaContainer.PageName>
          <ContentAreaContainer.Title>
            {nameOfSection}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {descriptionOFSection}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

      </ContentAreaContainer>
    )
  }
