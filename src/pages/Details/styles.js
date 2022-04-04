import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem 0;
  h1 {
    margin: 3rem 0%;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    margin-left: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
  }

  img {
    height: 400px;
    border-radius: 5px;
  }

  span {
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1.1rem;
    background-color: #2fa4ff;
    border: none;
    width: 8rem;
    height: 3rem;
    border-radius: 10px;
    font-size: 1.06rem;
    cursor: pointer;
    transition: 0.15s;
  }

  button:hover {
    background-color: #22577e;
    transition: 0.24s;
    color: white;
  }

  .release-date {
    opacity: 0.5;
  }
`;
