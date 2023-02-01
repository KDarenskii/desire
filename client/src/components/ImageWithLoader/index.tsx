import React from "react";
import cn from "classnames";
import BeatLoader from "react-spinners/BeatLoader";
import { LoaderSizeMarginProps } from "react-spinners/helpers/props";

import "./styles.scss";

interface ImageWithLoaderProps extends LoaderSizeMarginProps {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
    imageClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
    src,
    alt,
    children,
    height,
    imageClassName,
    width,
    ...rest
}) => {
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    return (
        <>
            <div className="image-with-loader">
                <img
                    onLoad={() => setIsImageLoaded(true)}
                    className={cn(
                        "image-with-loader__img",
                        { "image-with-loader__img--loaded": isImageLoaded },
                        imageClassName
                    )}
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                />
                {!isImageLoaded && <BeatLoader color="#FFEF35" className="image-with-loader__loader" {...rest} />}
            </div>
        </>
    );
};

export default ImageWithLoader;
