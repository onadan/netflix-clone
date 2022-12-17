import { useFetchNetflixOriginalsQuery } from "../services/tmdb";
import "../scss/hero.scss";
import { IoPlay } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { useEffect } from "react";

const Hero = () => {
  const { data, error, isLoading } = useFetchNetflixOriginalsQuery();

  // const num = Math.floor(Math.random() * 20)

  // useEffect(()=> {
  //   const movie = data[Math.floor(Math.random() * data?.results.length - 1)]
  //   console.log(movie)
  // }, [data])



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
          <div
            className="hero_img"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${data.results[0]?.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>

          <div className="hero_info">
            <h1 className="hero_title">
              {data.results[0]?.title ||
                data.results[0]?.name ||
                data.results[0]?.original_name}
            </h1>
            <p className="hero_desc">
              {truncate(data.results[0].overview, 200)}
            </p>
            <div className="hero_btns">
              <button className="hero_btn">
                {" "}
                <IoPlay /> &nbsp; Play
              </button>
              <button className="hero_btn">
                <HiPlus /> &nbsp; My List
              </button>
            </div>

            <p className="hero_note">
              <AiOutlineInfoCircle /> &nbsp; video preview is not currently
              available!
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
