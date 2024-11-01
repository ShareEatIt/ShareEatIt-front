import styled from "styled-components";
import { ReactComponent as SerchIcon } from "../../../assets/common/SearchIcon.svg";
const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
  `,
  SectionContainer: styled.div`
    box-sizing: border-box;
    margin-left: 0.5rem;
    padding-top: 2rem;
  `,
  SectionClassificationButton: styled.button`
    padding: 0.35rem 1.25rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: transparent;
    color: var(--white);
    padding-top: ${({ $isActive }) => ($isActive ? "0.75rem" : "0.35rem")};
  `,
  SectionWrapper: styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    background-color: var(--yellow-50);
  `,
  SectionContentContainer: styled.div`
    box-sizing: border-box;
    padding: 1.06rem 1rem;
  `,
  SearchBarContainer: styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: var(--white);
    filter: drop-shadow(0px 2px 2px rgba(255, 184, 73, 0.3));
    box-sizing: border-box;
    padding: 0.3rem 0.5rem;
  `,
  SerchBarIcon: styled(SerchIcon)``,
  SerchInput: styled.input`
    width: 100%;
    margin: 0 0.5rem;

    &::placeholder {
      color: var(--yellow-90);
    }
  `,
};

export { S };
