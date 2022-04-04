import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };
        setMovie(movie);

        console.log(data);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1 className="page-one-title">{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data de lançamento: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
