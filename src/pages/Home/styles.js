import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 6rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 360px;
    border-radius: 10px;
    margin-bottom: 2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  span {
    font-weight: bold;
    font-size: 127%;
    text-align: center;
    opacity: 70%;
  }

  a {
    transition: 0.2s;
    opacity: 60%;
  }

  a:hover {
    transform: scale(1.15);
    opacity: 100%;
  }
`;
