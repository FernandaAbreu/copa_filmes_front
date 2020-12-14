import styled from 'styled-components';


export const ContentAreaContainer = styled.section`
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 5%;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  background: var(--white);
  padding: 20px;
  padding-bottom:0px;
  padding-top:0px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Year = styled.p`
  color:var(--blackLighter);
  font-size: 12px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: bold;
  font-weight: 300;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 12px;

  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`;
