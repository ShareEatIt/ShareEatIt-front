import styled from "styled-components";
const M = {
  Layout: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
    background-color: var(--yellow-100);
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 10px;
  `,

  TextWrapper: styled.div`
    font-weight: bold;
    color: var(--white);
  `,

  ButtonContainer: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
    background-color: var(--yellow-100);
    bottom: 0;
  `,
};

export { M };
