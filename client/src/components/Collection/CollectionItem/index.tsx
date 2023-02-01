import React from "react";
import SectionHeader from "../../SectionHeader";
import cn from "classnames";

import "./styles.scss";
import ImageWithLoader from "../../ImageWithLoader";

type CollectionItemProps = {
    src: string;
    title: string;
    subtitle?: string;
    size?: "small";
    height?: number;
    width?: number;
};

const CollectionItem: React.FC<CollectionItemProps> = ({ src, title, subtitle, size, height, width }) => {
    return (
        <a className={cn('collection-item', { 'collection-item--small': size })} href="#">
            <ImageWithLoader
                imageClassName="collection-item__img"
                src={src}
                alt="Photo"
                height={height}
                width={width}
            />
            <div className="collection-item__info">
                {size !== "small" ? (
                    <SectionHeader
                        title={title}
                        subtitle={subtitle}
                        align={"center"}
                        hasUnderline={true}
                        titleClassName={"collection-item__title"}
                        subtitleClassName={"collection-item__subtitle"}
                        underlineClassName="collection-item__underline"
                    />
                ) : (
                    <SectionHeader
                        title={title}
                        align="center"
                        titleClassName="collection-item__title collection-item__title--small"
                    />
                )}
            </div>
        </a>
    );
};

export default CollectionItem;
