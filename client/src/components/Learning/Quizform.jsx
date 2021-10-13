// 객관식 문제 유형
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column;
  padding: 50px 0;

`
const Image = styled.img`
  width: 60%;
  height: 60%;
  display: block; 
  margin: 0px auto;
`;

const Asking = styled.p`
  font-size: 30px;
  text-align: center;
`;

const Wrap = styled.div`
  text-align: center;
`;

const Reply = styled.div`
  font-size: 24px;
  display: inline-block;
  padding-left: 50px;
`;

export default function Quizform (
  {
    file_path,
    question,
    choices
  }
  ) {

  return(
    <div>
      <Container>
        <h3> Today's Quiz </h3>
        <div><Image src={file_path} alt='questionimg' /></div>
        <Asking>{question}</Asking>
      </Container>
      <Wrap>
      {choices && choices.map((answ, index) => {
        return (
            <Reply key={index}>
              <input
                type='radio'
                name='answer'
                value={answ.choice}
              />
              <span>{answ.choice}</span>
            </Reply>
        )
      })}
      </Wrap>
    </div>
  )
}
