import styled from 'styled-components';


export const ContentAreaContainer = styled.section`
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
ContentAreaContainer.DivLateral= styled.div`
  position:relative;
  float: left;
  border-width:2px;
  width:50px;
  height: auto;
  background-color: var(--blackLighter);
`;
ContentAreaContainer.DivPrincipal= styled.div`
  position: relative;
  float: left;
  border-width:2px;
  width:auto;
  height: auto;
  left:50px;
`;
ContentAreaContainer.Position = styled.p`
  color:var(--white);
  font-size: 22px;
  text-align: center;

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
