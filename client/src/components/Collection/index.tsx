import React from "react";
import CollectionItem from "./CollectionItem";
import cn from "classnames";

import "./styles.scss";

type CollectionProps = {
    className?: string;
    wrapperClassName?: string;
};

const Collection: React.FC<CollectionProps> = ({ className, wrapperClassName }) => {
    return (
        <div className={cn('collection', className)}>
            <div className={(cn('collection__wrapper', wrapperClassName))}>
                <CollectionItem
                    title="Truffaut literally trust"
                    subtitle="Living room furntiture | Chair"
                    src="img/collection/1.jpg"
                    height={350}
                    width={350}
                />
                <CollectionItem
                    title="Truffaut literally trust"
                    subtitle="Living room furntiture | Chair"
                    src="img/collection/2.jpg"
                    height={350}
                    width={350}
                />
                <CollectionItem
                    title="Truffaut literally trust"
                    subtitle="Living room furntiture | Chair"
                    src="img/collection/3.jpg"
                    height={350}
                    width={350}
                />
                <CollectionItem
                    title="Truffaut literally trust"
                    subtitle="Living room furntiture | Chair"
                    src="img/collection/4.jpg"
                    height={350}
                    width={350}
                />
                <CollectionItem
                    title="Truffaut literally trust"
                    subtitle="Living room furntiture | Chair"
                    src="img/collection/5.jpg"
                    height={350}
                    width={350}
                />
            </div>
        </div>
    );
};

export default Collection;
