import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imgProductDetail, setImgProductDetail] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 64d0edbc8c468b49213291016c010f9c306d1b0b"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const detail = async () => {
    const request = await fetch(
      "https://api.openchinaapi.com/v1/taobao/products/" + product.num_iid,
      requestOptions
    );
    const allProducts = await request.json();
    setImgProductDetail(allProducts.data.item_imgs);
  };

  useEffect(() => {
    detail();
  });

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {imgProductDetail.map((item, key) => (
          <SwiperSlide>
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {imgProductDetail.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
