import './Contact.css';

function Contact() {
    return (
        <div className="contact" id='contact'>
            <h2>Contact <span>Me!</span></h2>

            <form action="/">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Mobile Number" required />
                        <input type="text" placeholder="Email Subject" required />
                        </div>
                        <textarea name='' id='' cols={"30"} rows={"10"} placeholder="Your Message" required></textarea>
                        <input type="submit" value="Send Message" className="btn" />
            </form>
        </div>
    )
}
export default Contact;