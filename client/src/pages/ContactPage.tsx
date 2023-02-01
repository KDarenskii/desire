import React from "react";
import CollectionSlider from "../components/CollectionSlider";
import ContactUs from "../components/ContactUs";

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="contact-page__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10504.422740656442!2d37.60063526384536!3d55.7533035709487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1675110896711!5m2!1sru!2sru"
                    width="100%"
                    height="578"
                    style={{border:"0"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <ContactUs />
            <CollectionSlider />
        </div>
    );
};

export default ContactPage;
