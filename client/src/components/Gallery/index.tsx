import React from "react";
import Container from "../Container";
import cn from "classnames";

import "./styles.scss";

type GalleryProps = {
    className?: string;
    children: React.ReactNode;
};

const Gallery: React.FC<GalleryProps> = ({ className, children }) => {
    return (
        <div className={cn("gallery", className)}>
            <Container type="fluid">
                <div className="gallery__wrapper">
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default Gallery;
