import React from "react";

import "./styles.scss";

type GalleryItemProps = {
    src: string;
    height?: number;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ src, height }) => {
    return <img className="gallery-img" src={src} alt="Photo" height={height} />;
};

export default GalleryItem;
