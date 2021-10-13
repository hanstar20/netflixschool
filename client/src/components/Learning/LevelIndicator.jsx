import styled, { css } from 'styled-components';
import Arrow from './Arrow';

const ArrowButton = styled.button`
  margin: ${props => props.flip ? "0 0 0 16px !important": "0 16px 0 0"};

  ${props => props.flip && css`
    transform: scaleX(-1);
  `}

  > svg {
    display: block;
  }

`

export default function LevelIndicator (
  {
    level,
    currPage,
    onClickPage,
    pageCount
  }
  ) {

  return(
    <div>
      <ArrowButton
        disabled={currPage === 0}
        onClick={() => onClickPage(currPage - 1)}
      >
        <Arrow />
      </ArrowButton>
        <h2> Level {level} Today's examples</h2>
      <ArrowButton
        flip
        disabled={currPage === pageCount - 1}
        onClick={() => onClickPage(currPage + 1)}
      >
        <Arrow />
      </ArrowButton>
    </div>
  )
}
