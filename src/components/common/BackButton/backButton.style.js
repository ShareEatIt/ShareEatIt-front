import styled from "styled-components";

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 24px;
    padding: 7px 10px 7px 0px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  `,

  TextWrapper: styled.div`
    font-size: 15px;
  `,
  RightBox: styled.div`
    width: 1rem;
  `,

  BarLeftContainer: styled.div`
    display: flex;
    justify-content: start;
    gap: 0.5rem;
  `,
  ETCBTNWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.8rem;
    background-color: var(--yellow-90);
    border-radius: 10px;
  `,
  UserImg: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  `,
  Dropdown: styled.div`
    position: absolute;
    top: 3rem;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    z-index: 100;
  `,
  DropdownOption: styled.div`
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    color: #333;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
  `,
};

export { S };
