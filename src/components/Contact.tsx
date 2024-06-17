import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <hr />
                <p>Feel free to reach out to me via the form below:</p>
                <div className="contact-form">
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={4} required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;