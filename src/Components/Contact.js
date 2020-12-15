
import '../App.css';


function Contact() {
    return (
        <section class="child" id="contact">
            <div className="margin10 top40 description fullscreen grid50">
                <div>
                    <h1 className="left-align width50 text-white">Leave your request and I will contact you</h1>
                </div>
                <form action="https://formspree.io/f/mvowwppa" method="post" className="contactDiv">
                    <input name="Name" id="name" type="name" placeholder="Name" className="width100 contactForm" />
                    <input name="Email" id="email" type="email" placeholder="Email" className="width100 contactForm" />
                    <textarea id="w3review" name="w3review" rows="1" cols="3" className="width100 contactForm" placeholder="Message"></textarea>
                    <button type="submit" className="width50 submitBtn">Submit</button>
                </form>

            </div>
        </section>
    );
}

export default Contact;
