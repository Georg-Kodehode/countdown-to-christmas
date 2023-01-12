import StyledMain from "./StyledMain";
import Countdown from "./Countdown";
import InputWrapper from "./InputWrapper";
import Comments from "./Comments";

const Main = () => {
  const updateComments = () => {
    const savedMessages = JSON.parse(localStorage.getItem("savedMessages"));
    console.log(savedMessages);
    return savedMessages;
  };
  return (
    <StyledMain>
      <div className="wrapper">
        <Countdown></Countdown>
        <InputWrapper savedMessages={updateComments}></InputWrapper>
        <div className="comments" id="comments">
          <Comments savedMessages={updateComments}></Comments>
        </div>

        <div className="push"></div>
      </div>
    </StyledMain>
  );
};

export default Main;
