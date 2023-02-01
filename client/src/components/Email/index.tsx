import React from "react";

import "./styles.scss";

type EmailProps = {
    text: string;
}

const Email: React.FC<EmailProps> = ({ text }) => {
    return <a className="email" href="mailto:ouremailaddress@email.com">{text}</a>;
};

export default Email;
