import React from "react";
import Gallery from "../../components/Gallery";
import GalleryImg from "../../components/Gallery/GalleryImg";

import "./styles.scss";

const GalleryPage: React.FC = () => {
    return (
        <div className="gallery-page">
            <Gallery>
                <GalleryImg src="img/gallery/1.jpg" height={1148} />
                <GalleryImg src="img/gallery/2.jpg" height={657} />
                <GalleryImg src="img/gallery/3.jpg" height={657} />
                <GalleryImg src="img/gallery/4.jpg" height={657} />
                <GalleryImg src="img/gallery/5.jpg" height={657} />
                <GalleryImg src="img/gallery/6.jpg" height={657} />
                <GalleryImg src="img/gallery/7.jpg" height={657} />
                <GalleryImg src="img/gallery/big-2.jpg" height={1148} />
                <GalleryImg src="img/gallery/8.jpg" height={657} />
                <GalleryImg src="img/gallery/9.jpg" height={657} />
            </Gallery>
        </div>
    );
};

export default GalleryPage;
