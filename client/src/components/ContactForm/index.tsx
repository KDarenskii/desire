import React, { FormHTMLAttributes } from "react";
import ActionButton from "../ActionButton";
import Input from "../Input";
import Textarea from "../Textarea";
import cn from "classnames";

import "./styles.scss";

type ContactFormProps = FormHTMLAttributes<HTMLFormElement>;

const ContactForm: React.FC<ContactFormProps> = ({ className, ...rest }) => {
    return (
        <form {...rest} className={cn("contact-form", className)}>
            <div className="contact-form__wrapper">
                <Input className="contact-form__input" type="text" placeholder="Your name" required />
                <Input className="contact-form__input" type="email" placeholder="Your e-mail" required />
            </div>
            <Textarea className="contact-form__textarea" placeholder="Your message" />
            <ActionButton className="contact-form__button" type="submit">
                Send
            </ActionButton>
        </form>
    );
};

export default ContactForm;
