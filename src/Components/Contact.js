
import '../App.css';


function Contact() {
    return (
        <section class="child" id="contact">
            <div className="margin10 top40 description fullscreen">
                <h1 className="centerTextWeb">Get In Touch</h1>
                <p className="centerTextWeb">lee.raymond61@Gmail.com</p>
                <form action="https://formspree.io/f/mvowwppa" method="post" className="contactDiv">
                    <input name="Name" id="name" type="name" placeholder="Name" className="width100 contactForm" />
                    <input name="Email" id="email" type="email" placeholder="Email" className="width100 contactForm" />
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className="width100 contactForm" placeholder="Message"></textarea>
                    <button type="submit" className="width100 submitBtn">Submit</button>
                </form>

            </div>
        </section>
    );
}

export default Contact;
