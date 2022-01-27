import { PureComponent } from "react";
import './section1.scss';

class Section1 extends PureComponent {
    render() {
        return (
            <div className="section1-main_container">
                <div className="section1_subtitle">
                    <p className="subtitle_para1">
                        However big or small your team is, our products will ensure that it always has a smooth
                        and enjoyable experience when
                        <a className="p1-link1" href="#">building and shipping your code</a>,
                        <a className="p1-link2" href="#">planning your work</a>,
                        and
                        <a className="p1-link3" href="#">collaborating</a>.
                    </p>
                    <p className="subtitle_para2">Whatever platform or language you work with, JetBrains has a development tool for you.</p>
                </div>

                <div className="section1_links">
                    <li><button>JavaScript</button></li>
                    <li><button>.NET</button></li>
                    <li><button>Java & JVM</button></li>
                    <li> <button>C++</button></li>
                    <li><button>macOS  iOS</button></li>
                    <li><button>Python & Django</button></li>
                    <li><button>PHP</button></li>
                    <li><button>Ruby & Rails</button></li>
                    <li><button>Go</button></li>
                    <li><button>Kotlin</button></li>
                    <li><button>SQL</button></li>
                    <div className="last">
                        <li ><button >See all tools</button></li></div>
                </div>
                <div className="news_events">
                    <h2>News & events</h2>
                    <div className="ne_cards">
                        <div className="card_card1">
                            <p>Jan 20, 2022</p>
                            <h3>
                                JetBrains Academy: Looking Back at 2021
                            </h3>
                            <p><span>We decided to take a step back, remind ourselves about the amazing things that happened last year, and prepare for the new adventures ahead. Will you join us?</span></p>
                            <a href="#" classname="card_link">Learn more</a>
                        </div>

                        <div className="card_card2">
                            <p>Jan 5, 2022</p>
                            <h3>
                                Once a Developer, Always a Developer                                </h3>
                            <p><span>Alina Komissarova, Coordinator of JetBrains Educational Projects who is based in Novosibirsk, Russia, interviewed her fellow Siberian Tagir Valeev, Java Tech Lead in IntelliJ IDEA. They talked.</span></p>
                            <a href="#" classname="card_link">Learn more</a>
                        </div>

                        <div className="card_card3">
                            <p>Jan 4, 2022</p>
                            <h3>
                                Java Annotated Monthly – January 2022                                </h3>
                            <p><span>Welcome to the January edition of our monthly collection of JVM-related news! This is my first Java Annotated Monthly; I’m taking over this project from Irina and Trisha – if I can see a little...</span></p>
                            <a href="#" classname="card_link">Learn more</a>
                        </div>

                    </div>
                </div>

                <div className="trusted_container">
                    <div className="trusted_text">
                        <h2>Trusted</h2>
                        <div className="trusted-text_row">
                            <div className="tt-row_col1">
                                <h4>Many of the world's most dynamic companies and individuals find JetBrains tools make them more creative and effective.</h4>
                            </div>
                            <div className="tt-row_col2">
                                <div className="tt-row_col2_row1">

                                    <h4>10M+</h4>
                                    <p>users trust our tools </p>
                                </div>
                                <div className="tt-row_col2_row2">
                                    <h4>96K</h4>
                                    <p>join every month</p>
                                </div>
                            </div>
                        </div>.
                    </div>
                </div>
                <div className="trusted_image-row">
                    <div className="t-img_col1">
                        <img src="images/mary.png" alt="mary-img" />
                    </div>
                    <div className="t-img_col2">
                        <h3>IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.</h3>
                        <h4>Mary Grygleski</h4>
                        <p>IBM</p>
                    </div>
                </div>
                <div className="trusted_btn">
                    <button>More testimonials</button>
                </div>

            </div>
        );
    }
}
export default Section1;