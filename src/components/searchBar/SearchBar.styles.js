import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  width: 100%;
  height: 55px;
  margin: 0 auto;
  position: relative;
  color: var(--white);
  border-radius: 40px;
  max-width: var(--maxWidth);
  background: var(--medGrey);

  img {
    top: 14px;
    left: 15px;
    width: 30px;
    position: absolute;
  }

  input {
    left: 0;
    border: 0;
    width: 95%;
    height: 40px;
    margin: 8px 0;
    font-size: 28px;
    position: absolute;
    color: var(--white);
    padding: 0 0 0 60px;
    background: transparent;

    :focus {
      outline: none;
    }
  }
`;
