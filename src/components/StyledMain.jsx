import styled from "styled-components";
import image from "../images/christmas_background2.jpg";

const StyledMain = styled.main`
  font-family: "Christmas Goodwill";
  font-size: 36px;
  display: flex;
  justify-content: center;
  background-color: #d81159;

  .wrapper {
    width: 512px;
    min-height: calc(100vh - 5rem);
    margin: 0 1rem -5rem 1rem;
  }
  .countdown {
    margin: 0;
    padding: 36px 0 18px 0;
    color: #fff;
    text-shadow: 3px 0 10px #000;
  }
  .countdown-text {
    text-align: left;
    padding-bottom: 0;
  }
  .countdown-time {
    padding-top: 0;
    width: 100%;
  }
  .comments {
    background-image: url(${image});
    background-size: contain;
    color: #fff;
    font-size: 2.2rem;
    text-shadow: 3px 0 10px #000;
    width: 100%;
    min-height: 345px;
    margin-top: 18px;
    padding: 1rem 4rem;
    box-sizing: border-box;
    border: 3px solid #218380;
    margin-bottom: 2rem;
    word-break: break-word;
  }
  .push {
    height: 80px;
  }
  .input-wrapper {
    display: flex;
    justify-content: space-between;
  }
  input,
  button {
    height: 40px;
    box-sizing: border-box;
  }
  input {
    font-family: "Christmas Goodwill";
    font-size: 26px;
    width: 80%;
    margin-right: 3px;
    padding: 0 1rem;
  }
  button {
    width: 20%;
    min-width: 100px;
    font-family: "Christmas Goodwill";
    font-size: 1.2rem;
    background-color: #218380;
    color: #fff;
    border-color: #73d2de;
  }
  .messageText {
    margin-bottom: 0;
  }
  .messageTimestamp {
    margin-top: 0;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    .countdown-text,
    .countdown-time {
      font-size: 24px;
    }
    .input-wrapper {
      flex-direction: column;
      align-items: center;
    }
    input,
    button {
      width: 100%;
    }
    input {
      font-size: 18px;
    }
    button {
      margin-top: 5px;
    }
  }
`;

export default StyledMain;
