import "../styles/contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">

            <h2>Let's Connect</h2>

            <p>
                Interested in working together or discussing a data opportunity?
                Feel free to get in touch.
            </p>

            <div className="contact-links">

                <a href="mailto:aanju9363@gmail.com">
                    aanju9363@gmail.com
                </a>

                <a href="tel:+64226454024">
                    +64 22 645 4024
                </a>

                <a
                    href="https://www.linkedin.com/in/anjusambasivan/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/AnjuSambasivan93/ANJU-DATA-ANALYST"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

            </div>

        </section>
    );
}

export default Contact;