import React, { useRef, useState } from "react";
import demovideo from "../../assets/video/demovideo.mp4";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import img4 from "../../assets/image/img4.jpg";
import img5 from "../../assets/image/img5.jpg";
import { FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Home() {
  const [isPlay, setIsPlay] = useState(false);
  const navigate = useNavigate();
  const videoPlay = useRef();
  function handlePlay() {
    if (videoPlay.current.paused) {
      videoPlay.current.play();
      setIsPlay(true);
    } else {
      videoPlay.current.pause();
      setIsPlay(false);
    }
  }
  return (
    <div>
      <div className="banner">
        <div className="banner--blur"></div>
        <div className="banner__content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 film">
                <p className="film__tittle">Blood Lost. Life Found</p>
                <p className="film__name">
                  the <span>Revenant</span>
                </p>
                <p className="film__feel">Inspired by True Events...!</p>
                <p className="film__content mt-2">
                  Deep in the uncharted American wilderness
                </p>
                <button className="mt-3">
                  <span>READ MORE</span>
                </button>
              </div>
              <div className="col-md-6">
                <div className="demo">
                  <div className="demo__tittle">THE REVENANT</div>
                  <div className="demo__film">
                    <span
                      onClick={() => handlePlay()}
                      className={isPlay && "pause"}
                    >
                      {isPlay ? <FaPause /> : <FaPlay />}
                    </span>
                    <video ref={videoPlay}>
                      <source src={demovideo} type="video/mp4"></source>
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="listFilm">
        <div className="container">
          <div className="bestFilm">
            <div className="bestFilm__item" onClick={()=> navigate("film/2")}>
              <img src={img1} alt="" />
              <span className="spin circle">4.4</span>
            </div>
            <div className="bestFilm__item">
              <img src={img2} alt="" />
              <span>4.4</span>
            </div>
            <div className="bestFilm__item">
              <img src={img3} alt="" />
              <span>4.4</span>
            </div>
            <div className="bestFilm__item">
              <img src={img4} alt="" />
              <span>4.4</span>
            </div>
            <div className="bestFilm__item">
              <img src={img5} alt="" />
              <span>4.4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
