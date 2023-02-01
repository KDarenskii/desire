import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import SectionHeader from "../SectionHeader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.scss";

const Intro: React.FC = () => {
    return (
        <section className="intro">
            <Swiper
                className="swiper intro__swiper"
                slidesPerView={1}
                modules={[Pagination, Autoplay, EffectFade]}
                pagination={{
                    clickable: true,
                    bulletActiveClass: "swiper-pagination-bullet-active intro__pagination-bullet--active",
                    bulletClass: "swiper-pagination-bullet intro__pagination-bullet",
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                spaceBetween={30}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
            >
                <SwiperSlide className="intro__slide">
                    <img className="intro__slide-img" src="img/intro/intro-photo.png" alt="Photo" height={815} width={703} />
                    <SectionHeader
                        title="Furniture collection"
                        subtitle="Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"
                        hasUnderline={true}
                        className="intro__slide-content"
                        titleClassName="intro__slide-title"
                        subtitleClassName="intro__slide-text"
                    />
                </SwiperSlide>
                <SwiperSlide className="intro__slide">
                    <img className="intro__slide-img" src="img/intro/intro-photo.png" alt="Photo" />
                    <SectionHeader
                        title="Beautiful decor"
                        subtitle="Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"
                        hasUnderline={true}
                        className="intro__slide-content"
                        titleClassName="intro__slide-title"
                        subtitleClassName="intro__slide-text"
                    />
                </SwiperSlide>
                <SwiperSlide className="intro__slide">
                    <img className="intro__slide-img" src="img/intro/intro-photo.png" alt="Photo" />
                    <SectionHeader
                        title="Modern design"
                        subtitle="Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"
                        hasUnderline={true}
                        className="intro__slide-content"
                        titleClassName="intro__slide-title"
                        subtitleClassName="intro__slide-text"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Intro;
