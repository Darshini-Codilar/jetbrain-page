import { PureComponent } from "react";
import './section2.scss';

class Section2 extends PureComponent {
    render() {
        return (
            <div className="section2-main_container">
                <div className="section2-logo_container">
                    <div className="section2-logo_text">
                        <h4>Our tools are used all over the world in some of the best-known companies.</h4>
                    </div>
                    <div className="section2-logo_logos">
                        <div className="google_logo">
                            <img src="images/google.png" alt="google" />
                        </div>
                        <div className="nasa_logo">
                            <img src="images/nasa.png" alt="nasa" />
                        </div>
                        <div className="valve_logo">
                            <img src="images/valve.png" alt="valve" />
                        </div>
                        <div className="netflix_logo">
                            <img src="images/netflix.png" alt="netflix" />
                        </div>
                        <div className="ubisoft_logo">
                            <img src="images/ubisoft.jpeg" alt="ubisoft" />
                        </div>
                        <div className="twitter_logo">
                            <img src="images/twitter.jpeg" alt="twitter" />
                        </div>
                    </div>
                </div>

                <div className="customer_container">
                    <h2>Customer Stories</h2>
                    <p>See how the world's leading companies use JetBrains products</p>
                    <div className="customer_cards">
                        <div className="cust_card1">
                            <h3>OpenStack</h3>
                            <p>PyCharm has tons of advantages when compared to text editors in terms of supported functionality. With respect to Python development, PyCharm definitely stands out with features like remote debugging, code quality checks, and integrations with third-party software like Docker and Kubernetes.</p>
                            <h5>Swapnil Kulkarni, Active Technology Contributor, OpenStack</h5>
                            <h6>Read case study</h6>
                        </div>
                        <div className="cust_card2">
                            <h3>Instil</h3>
                            <p>When the social distancing restrictions were introduced in March 2020, we needed a tool that would let us collaborate online with students as part of virtual deliveries, and Space was the obvious choice.</p>
                            <h5>Garth Gilmour, Instil</h5>
                            <h6>Read case study</h6>
                        </div>
                        <div className="cust_card3">
                            <h3>VMware</h3>
                            <p>As our team carefully weighed the benefits and shortcomings of building our strategy upon each of the frameworks, Kotlin Multiplatform Mobile ultimately emerged as the framework of choice.</p>
                            <h5>Kris Wong, Software Engineer/Architect, VMware</h5>
                            <h6>Read case study</h6>
                        </div>
                    </div>
                    <div className="case-study_btn">
                        <button>More case studies</button>
                    </div>
                </div>

                <div className="discover_container">
                    <h2>Discover more</h2>
                    <div className="discover_cards">
                        <div className="dis_card1">
                            <img src="images/home-play.svg" />
                            <h3>Software development the JetBrains way: dogfooding</h3>
                            <p>Giving you the scoop on how your favorite products are created</p>
                            <h6>Watch Now</h6>
                        </div>
                        <div className="dis_card2">
                            <img src="images/annual-highlights.svg" />
                            <h3>JetBrains 2020/21 Annual Highlights</h3>
                            <p>Find out why more than 10 million developers use and trust our tools</p>
                            <h6>Read Now</h6>
                        </div>
                        <div className="dis_card3">
                            <img src="images/home-survey.svg" />
                            <h3>The State of Developer Ecosystem 2021</h3>
                            <p>Developer community trends in JetBrains' fifth annual survey results</p>
                            <h6>Learn more</h6>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Section2;