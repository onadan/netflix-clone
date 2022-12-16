import { useFetchNetflixOriginalsQuery } from "../services/tmdb";
import "../scss/hero.scss";

const Hero = () => {
  const { data, error, isLoading } = useFetchNetflixOriginalsQuery();

  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };

  return (
    <div className="hero">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <img
            className="hero_img"
            src={`https://image.tmdb.org/t/p/original/${data.results[0]?.backdrop_path}`}
            alt="movie_poster"
          />
          <div className="hero_info">
            <h1 className="hero_title">
              {data.results[0]?.title ||
                data.results[0]?.name ||
                data.results[0]?.original_name}
            </h1>
            <p className="hero_desc">
              {truncate(data.results[0].overview, 150)}
            </p>
            <div className="hero_btns">
              <button className="hero_btn">Play</button>
              <button className="hero_btn">My List</button>
            </div>

            <p className="hero_note">
              NB: video preview is not currently available!
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
