import styled from 'styled-components';

const Box = styled.div`
  background-color:#F1F9FE ;
  border-radius:8px;

  padding:16px;

  /* CSS Pré Pronto */

  margin-bottom:10px;

  .boxLink{
      font-size:16px;
      color:#2E7BB4;
      text-decoration:none;
      font-weight:800;

  }
  .title, .subTitle{ 
      font-weight:400;
      margin-bottom:20px;
  }

  .title{
    font-size:32px;
  }
  .subTitle{
    font-size:18px;
  }
  .smallTitle{
    margin-bottom:20px;
    font-weight:700;
    font-size:18px;
    color:#333;
  }
  hr{
      margin-top:12px;
      margin-bottom:8px;
      border-color:transparent;
      border-bottom-color:#ECF2FA;
  }
  input {
      width:100%;
      background-color:#F4F4F4;
      color:#333;
      border:0;
      padding:14px 16px;
      margin-bottom:15px;
      border-radius:10000px;
      ::placeholder{
          color: #3333;
          opacity:1;
      }
  }
  button{
      border:0;
      color:#FFF;
      padding:8px 12px;
      border-radius:10000px;
      background-color:#6F92BB;
  }

`;

export default Box;