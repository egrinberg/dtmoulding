import styled from 'styled-components';


const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .main-logo {
    img {
      width: 128px;
      height: auto;
    }
  }
  .logo-alt {
    width: 128px;
    height: auto;
    display: none;
  }
`;



export { Container };
