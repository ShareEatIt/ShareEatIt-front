import styled from "styled-components";
const S = {
  Layout: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 720px;
    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
    background-color: var(--yellow-100);
    position: absolute;
    bottom: 0;
    margin: 10px 10px 10px 10px;
    @media (max-width: 800px) {
      width: 365px;
    }
  `,

  TextWrapper: styled.div`
    font-weight: bold;
    color: var(--white);
  `,
};
export { S };
