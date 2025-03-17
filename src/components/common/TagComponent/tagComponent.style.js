import styled from "styled-components";

const M = {
  SectionContainer: styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 2rem;
  `,
  SectionClassificationButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.35rem 1.25rem;
    gap: 0.5rem;
    background-color: transparent;
    color: ${({ $isActive }) => ($isActive ? "var(--yellow-100)" : "#D4D4D4")};

    border-bottom: ${({ $isActive }) =>
      $isActive ? "2px solid var(--yellow-100)" : "2px solid transparent"};
  `,
};
export { M };
