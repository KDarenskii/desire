import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import CollectionItem from "../Collection/CollectionItem";
import Container from "../Container";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

const CollectionSlider: React.FC = () => {
    return (
        <div className="collection-slider">
            <Container type="fluid">
                <Swiper
                    className="swiper collection-slider__swiper"
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletActiveClass:
                            "swiper-pagination-bullet-active collection-slider__pagination-bullet--active",
                        bulletClass: "swiper-pagination-bullet collection-slider__pagination-bullet",
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    speed={2000}
                    spaceBetween={17.9}
                    breakpoints={{
                        1920: {
                            slidesPerView: 10,
                            slidesPerGroup: 10
                        },
                        1700: {
                            slidesPerView: 9,
                            slidesPerGroup: 9,
                        },  
                        1500: {
                            slidesPerView: 7,
                            slidesPerGroup: 7
                        },
                        1000: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        700: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        }
                    }}
                >
                    <SwiperSlide className="collection-slider__slide">
                        <CollectionItem src="img/collection/1.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/2.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/3.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/4.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/5.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/6.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/7.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/8.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/9.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/10.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide className="collection-slider__slide">
                        <CollectionItem src="img/collection/11.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/12.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/13.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/8.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/10.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/9.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/2.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/3.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/5.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/1.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide className="collection-slider__slide">
                        <CollectionItem src="img/collection/10.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/9.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/8.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/7.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/6.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/5.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/4.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/3.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/2.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CollectionItem src="img/collection/1.jpg" title="Truffaut literally trust" size="small" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
};

export default CollectionSlider;
