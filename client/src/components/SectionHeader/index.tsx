import React from "react";
import cn from "classnames";

import "./styles.scss";

type SectionHeaderProps = {
    title: string;
    align?: "left" | "center";
    hasUnderline?: boolean;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    underlineClassName?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    align = "left",
    hasUnderline,
    subtitle,
    className,
    titleClassName,
    subtitleClassName,
}) => {
    return (
        <header className={cn("section-header", { "section-header--center": align === "center" }, className)}>
            <h3
                className={cn(
                    "section-header__title",
                    { "section-header__title--underline": hasUnderline },
                    { "section-header__title--center": align === "center" },
                    titleClassName
                )}
            >
                {title}
            </h3>
            <p className={cn("section-header__subtitle", subtitleClassName)}>{subtitle}</p>
        </header>
    );
};

export default SectionHeader;
