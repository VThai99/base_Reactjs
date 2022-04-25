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
                    Có thể nói IT là vua của các nghề Ngành IT Việt Nam hiện nay
                    ở đầu của sự phát triển. Có thể nói IT là vua của các nghề.
                    Vừa có tiền, có quyền. Vừa kiếm được nhiều $ lại được xã hội
                    trọng vọng. Thằng em mình học bách khoa cơ khí, bỏ ngang
                    sang IT, sinh năm 96. Tự mày mò học code rồi đi làm remote
                    cho công ty Mỹ 2 năm nay. Mỗi tối online 3-4 giờ là xong
                    việc. Lương tháng 3k6. Nhưng thu nhập chính vẫn là từ nhận
                    các project bên ngoài làm thêm. Tuần làm 2,3 cái nhẹ nhàng
                    9,10k tiền tươi thóc thật không phải đóng thuế. Làm gần được
                    3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm. Gái gú thì cứ
                    nghe nó bảo làm CNTT thì chảy nước. Có bé kia dân du học
                    sinh Úc, về được cô chị giới thiệu làm ngân hàng VCB. Thế
                    nào thằng ấy đi mở thẻ tín dụng gặp phải thế là hốt được cả
                    chị lẫn em. 3 đứa nó sống chung một căn hộ cao cấp. Nhà con
                    bé kia biết chuyện ban đầu phản đối sau biết thằng đấy học
                    IT thì đổi thái độ, cách ba bữa hỏi thăm, năm bữa tặng quà
                    giục cưới kẻo lỡ kèo. Đáng lẽ tháng này là đám cưới tụi nó
                    nhưng dính covid nên dời lại cuối năm rồi.
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
