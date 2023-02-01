import React from "react";
import CallToAction from "../components/CallToAction";
import Gallery from "../components/Gallery";
import GalleryImg from "../components/Gallery/GalleryImg";
import Ideas from "../components/Ideas";
import Intro from "../components/Intro";
import NewCollection from "../components/NewCollection";
import Process from "../components/Process";

const HomePage: React.FC = () => {
    return (
        <>
            <Intro />
            <NewCollection />
            <CallToAction />
            <Process />
            <Gallery>
                <GalleryImg src="img/gallery/1.jpg" height={1148} />
                <GalleryImg src="img/gallery/2.jpg" height={567} />
                <GalleryImg src="img/gallery/3.jpg" height={567} />
                <GalleryImg src="img/gallery/4.jpg" height={567} />
                <GalleryImg src="img/gallery/5.jpg" height={567} />
            </Gallery>
            <Ideas />
        </>
    );
};

export default HomePage;
