function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="img-carousel d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/99-hinh-anh-xe-moto-do-dep-khung-moto-do-dep-nhat-the-gioi-1024x536.jpg`}
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="img-carousel d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/Hinh-nen-xe-moto-Norton-V4SV.jpg`}
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="img-carousel d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/hinh-nen-3d-xe-moto_025907885.jpg`}
              alt="Third slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="img-carousel d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/hinh-nen-xe-moto-ducati.jpg`}
              alt="aa"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="img-carousel d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/hinh-nen-xe-moto-va-nguoi-dep.jpg`}
              alt="bb"
            ></img>
          </div>
          <div class="img-carousel carousel-item">
            <img
              class="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/hinh-nen-moto-4k.jpg`}
              alt="cc"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
      <section id="section-introduce">
        <div class="background-overlay">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="box-video_introduce">
                  <a class="btn-popupvideo fancybox-youtube" href="">
                    <img
                      class="img-incule"
                      src="https://thuongmotor.com/wp-content/uploads/2020/12/132581772_141811717738190_4444778641187632806_o.jpg"
                      alt=""
                    />
                    <span class="icplay-video">
                      <div class="icplays">
                        <span class="icplays-inner">
                          <div class="animated alo-circle"></div>
                          <div class="animated alo-circle-fill"></div>
                          <div class="animated alo-circle-fill alo-circle-fill2">
                            <i class="fa fa-play"></i>
                          </div>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <h2 class="title-section">
                  <span>Giới thiệu</span>
                </h2>
                <div class="line-section"></div>
                <div class="info-introduce">
                  <div class="excerpt-introduce">
                    <p>
                      <strong>Thanh Do Motor</strong> chuyên mua bán các dòng xe
                      mô tô thể thao phong phú của các hãng nổi tiếng{" "}
                      <strong>Honda</strong>, <strong>Yamaha</strong>,{" "}
                      <strong>Suzuki</strong>, <strong>BMW</strong>,{" "}
                      <strong>Ducati</strong>, <strong>Kawasaki</strong>…có
                      nhiều sự lựa chọn cho người chơi xe thể thao. Với rất
                      nhiều dịch vụ hỗ trợ khách hàng, Thưởng Motor tự tin khẳng
                      định mình là{" "}
                      <strong>
                        <a href="#">cửa hàng xe PKL</a>
                      </strong>
                      , xe mô tô nhập khẩu <strong>UY TÍN</strong> và{" "}
                      <strong>CHẤT LƯỢNG NHẤT VIỆT NAM</strong>.
                    </p>
                  </div>
                  <div class="readmore-section">
                    <a href="/gioi-thieu/">Xem chi tiết</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
