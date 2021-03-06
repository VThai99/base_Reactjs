import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import img1 from "../../assets/image/detail1.jpg";
import img2 from "../../assets/image/detail2.jpg";
import img3 from "../../assets/image/detail3.jpg";
import img4 from "../../assets/image/detail4.jpg";
import img5 from "../../assets/image/detail5.jpg";
import { AiOutlineLeft, AiFillCaretRight, AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
function FilmsDetail() {
  const [point, setpoint] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setpoint(7);
    }, 1000);
  }, []);
  const slideArr = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    arrows: false,
  };
  return (
    <div>
      <div className="detail-banner">
        <div className="detail-banner__slide">
          <Slider {...settings}>
            {slideArr.map((item, index) => {
              return <img src={item.url} alt="" key={index} />;
            })}
          </Slider>
        </div>
        <div className="detail-banner__content">
          <div className="container box">
            <div className="row box__content">
              <div className="col-md-4 d-flex flex-column justify-content-between align-items-center">
                <div className="back_button d-flex align-items-center w-100">
                  <span className="icons back">
                    <AiOutlineLeft />
                  </span>
                  <p>John Wick: Dell scary who </p>
                </div>
                <div className="d-flex align-items-center progressBar">
                  <div className="progressBar__circle size80">
                    <CircularProgressbar
                      value={(point / 10) * 100}
                      text={`${7}`}
                      strokeWidth={7}
                      className="custom"
                    />
                  </div>
                  <div className="progressBar__detail">
                    <p>35.7K VOTES</p>
                    <p>Our Users Are Rcommending It</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 trailer">
                <button className="button--trailer y700">
                  <p>
                    <AiFillCaretRight />
                  </p>
                  <p>TRAILER</p>
                </button>
              </div>
              <div className="col-md-4 movies">
                <button>MOVIES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3 film-postcard">
                  <img src={img1} alt="" />
                </div>
                <div className="col-md-9 film-detail">
                  <div className="name">John Wick: Dell Sowj Ai</div>
                  <div className="type">
                    {" "}
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>{" "}
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>{" "}
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>{" "}
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>{" "}
                    <div class="sub_title">ACTION</div>{" "}
                    <div class="sub_title">Gun</div>
                  </div>
                  <div className="action d-flex align-items-center">
                    <button className="button--trailer b700">
                      <p>
                        <AiFillCaretRight />
                      </p>
                      <p>Watch</p>
                    </button>
                    <span className="icons heart">
                      <AiFillHeart />
                    </span>
                    <span className="icons share">
                      <BsFillShareFill />
                    </span>
                    <span className="icons more">
                      <FiMoreHorizontal />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3 film-time">
                  <p>2022</p>
                  <p>1H 37Min</p>
                </div>
                <div className="col-md-6 film-storyline">
                  <p className="text title">storyline</p>
                  <p className="text g789">
                    C?? th??? n??i IT l?? vua c???a c??c ngh??? Ng??nh IT Vi???t Nam hi???n nay
                    ??? ?????u c???a s??? ph??t tri???n. C?? th??? n??i IT l?? vua c???a c??c ngh???.
                    V???a c?? ti???n, c?? quy???n. V???a ki???m ???????c nhi???u $ l???i ???????c x?? h???i
                    tr???ng v???ng. Th???ng em m??nh h???c b??ch khoa c?? kh??, b??? ngang
                    sang IT, sinh n??m 96. T??? m??y m?? h???c code r???i ??i l??m remote
                    cho c??ng ty M??? 2 n??m nay. M???i t???i online 3-4 gi??? l?? xong
                    vi???c. L????ng th??ng 3k6. Nh??ng thu nh???p ch??nh v???n l?? t??? nh???n
                    c??c project b??n ngo??i l??m th??m. Tu???n l??m 2,3 c??i nh??? nh??ng
                    9,10k ti???n t????i th??c th???t kh??ng ph???i ????ng thu???. L??m g???n ???????c
                    3 n??m m?? nh?? xe n?? ???? mua ????? c???. Ngh?? m?? th??m. G??i g?? th?? c???
                    nghe n?? b???o l??m CNTT th?? ch???y n?????c. C?? b?? kia d??n du h???c
                    sinh ??c, v??? ???????c c?? ch??? gi???i thi???u l??m ng??n h??ng VCB. Th???
                    n??o th???ng ???y ??i m??? th??? t??n d???ng g???p ph???i th??? l?? h???t ???????c c???
                    ch??? l???n em. 3 ?????a n?? s???ng chung m???t c??n h??? cao c???p. Nh?? con
                    b?? kia bi???t chuy???n ban ?????u ph???n ?????i sau bi???t th???ng ?????y h???c
                    IT th?? ?????i th??i ?????, c??ch ba b???a h???i th??m, n??m b???a t???ng qu??
                    gi???c c?????i k???o l??? k??o. ????ng l??? th??ng n??y l?? ????m c?????i t???i n??
                    nh??ng d??nh covid n??n d???i l???i cu???i n??m r???i.
                  </p>
                </div>
                <div className="col-md-3 film-cast">
                  <p className="text title">cast</p>
                  <div className="cast">
                    <div className="cast__item mb-3">
                      <img src={img1} alt="" className="image circle size70" />
                      <div className="cast__info">
                        <div className="name">Tom Hardy</div>
                        <div className="character">Eddie Brock</div>
                      </div>
                    </div>
                    <div className="cast__item mb-3">
                      <img src={img1} alt="" className="image circle size70" />
                      <div className="cast__info">
                        <div className="name">Tom Hardy</div>
                        <div className="character">Eddie Brock</div>
                      </div>
                    </div>
                    <div className="cast__item mb-3">
                      <img src={img1} alt="" className="image circle size70" />
                      <div className="cast__info">
                        <div className="name">Tom Hardy</div>
                        <div className="character">Eddie Brock</div>
                      </div>
                    </div>
                    <div className="cast__item mb-3">
                      <img src={img1} alt="" className="image circle size70" />
                      <div className="cast__info">
                        <div className="name">Tom Hardy</div>
                        <div className="character">Eddie Brock</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 likeThis">
              <div className="text title size40">More like this</div>
              <div className="list-film mt-5">
                <div className="list-film__item mb-3">
                  <img src={img2} alt="" className="image square size7090" />
                  <div className="info mx-3">
                    <div className="type text size15">Avegers:</div>
                    <div className="name text size15">Age Of Ultron</div>
                    <div className="rate mt-2">
                      <div className="progressBar__circle size50">
                        <CircularProgressbar
                          value={(point / 10) * 100}
                          text={`${7}`}
                          strokeWidth={7}
                          className="custom"
                        />
                      </div>
                      <div className="time text size13 g398 mx-2">
                        <p>2015</p>
                        <p>2H 21MIN</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-film__item mb-3">
                  <img src={img2} alt="" className="image square size7090" />
                  <div className="info mx-3">
                    <div className="type text size15">Avegers:</div>
                    <div className="name text size15">Age Of Ultron</div>
                    <div className="rate mt-2">
                      <div className="progressBar__circle size50">
                        <CircularProgressbar
                          value={(point / 10) * 100}
                          text={`${7}`}
                          strokeWidth={7}
                          className="custom"
                        />
                      </div>
                      <div className="time text size13 g398 mx-2">
                        <p>2015</p>
                        <p>2H 21MIN</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-film__item mb-3">
                  <img src={img2} alt="" className="image square size7090" />
                  <div className="info mx-3">
                    <div className="type text size15">Avegers:</div>
                    <div className="name text size15">Age Of Ultron</div>
                    <div className="rate mt-2">
                      <div className="progressBar__circle size50">
                        <CircularProgressbar
                          value={(point / 10) * 100}
                          text={`${7}`}
                          strokeWidth={7}
                          className="custom"
                        />
                      </div>
                      <div className="time text size13 g398 mx-2">
                        <p>2015</p>
                        <p>2H 21MIN</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-film__item mb-3">
                  <img src={img2} alt="" className="image square size7090" />
                  <div className="info mx-3">
                    <div className="type text size15">Avegers:</div>
                    <div className="name text size15">Age Of Ultron</div>
                    <div className="rate mt-2">
                      <div className="progressBar__circle size50">
                        <CircularProgressbar
                          value={(point / 10) * 100}
                          text={`${7}`}
                          strokeWidth={7}
                          className="custom"
                        />
                      </div>
                      <div className="time text size13 g398 mx-2">
                        <p>2015</p>
                        <p>2H 21MIN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsDetail;
