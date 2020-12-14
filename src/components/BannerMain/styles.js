import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;



ContentAreaContainer.PageName = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 32px;
  color:var(--blackLighter);

  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  color:var(--white);
  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  color:var(--white);

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;



