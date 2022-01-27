import { PureComponent } from "react";
import './header.scss';

class Header extends PureComponent {
    render() {
        return (
            <div className="header-main_container">
                <div className="header_menu">
                    <div className="jb_logo">
                        <img src="images/jb_logo.png" alt="logo img" />
                    </div>
                    <div className="menu_item">
                        <ul>
                            <div className="menu_tools">
                                <li><a href="#Developer Tools">Developer Tools</a></li>
                                <li><a href="#Team Tools">Team Tools</a></li>
                                <li><a href="#Learning Tools">Learning Tools</a></li>
                                <li><a href="#Solutions">Solutions</a></li>
                                <li><a href="#Support">Support</a></li>
                                <li><a href="#Store">Store</a></li>
                            </div>
                            <div className="search_menu">
                                <img src="images/search.png" alt="search" />
                            </div>
                            <div className="contact_cart">
                                <div className="contact_menu">
                                    <img src="images/contact.jpg" alt="contact" />
                                </div>
                                <div className="cart_menu">
                                    <img src="images/cart.jpg" alt="cart" />
                                </div>
                                <div className="language_menu">
                                    <img src="images/language.png" alt="cart" />
                                </div>
                            </div>
                            <div className="menu_hamburger">
                                <img src="images/images.png" alt="" />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="header_text">
                    <div className="title_text">
                        <h1 className="title_1">Essential tools for software developers and teams</h1>
                        <p class="title_2">We build our software so you can enjoy building yours</p>
                    </div>
                    <div className="header_tools">
                        <div className="developer_tool">
                            <div className="img_title">
                                <img className="tool_img" src="images/dt.jpg" alt="dt" />
                                <h3 className="tool_title">Developer Tools</h3>
                            </div>
                            <p className="tool_subT"> The complete
                                <br></br>
                                developer toolkit
                            </p>
                            <p class="tool_link"><a href="#choose">Choose your tool</a></p>
                        </div>
                        <div className="team_tool">
                            <div className="img_title">
                                <img className="tool_img" src="images/tt.jpg" alt="dt" />
                                <h3 className="tool_title">Team Tool</h3>
                            </div>
                            <p className="tool_subT"> A wide range of tools and
                                <br></br>
                                integrations for any team
                            </p>
                            <p class="tool_link"><a href="#choose">See all tools</a></p>
                        </div>
                        <div className="learning_tool">
                            <div className="img_title">
                                <img className="tool_img" src="images/lt.jpg" alt="dt" />
                                <h3 className="tool_title">Learning Tools</h3>
                            </div>
                            <p className="tool_subT"> Solutions and opportunities
                                <br></br>
                                for&nbsp;teachers and students
                            </p>
                            <p class="tool_link"><a href="#choose">Find your solution</a></p>
                        </div>
                        <div className="kotlin_tool">
                            <div className="img_title">
                                <img className="tool_img" src="images/kotlin.png" alt="dt" />
                                <h3 className="tool_title">Kotlin</h3>
                            </div>
                            <p className="tool_subT"> A modern multiplatform
                                <br></br>
                                programming language
                            </p>
                            <p class="tool_link"><a href="#choose">Discover Kotlin</a></p>
                        </div>
                    </div>
                    <div className="header_row">
                        <div className="row_col1">
                            <img className="remote_imgage" src="images/remote.png" alt="remote" />
                            <div className="col1_para1">Connect to remote dev environments from anywhere in seconds</div>
                            <div className="col1_para2">Tap into the CPU power of a&nbsp;remote machine from your laptop</div>
                            <div className="col1_btn"><button>Learn More</button> </div>
                        </div>
                        <div className="row_col2">
                            <div className="col2_banner1">
                                <div className="banner1_image">
                                    <img src="images/banner1.png" alt="banner1" />
                                </div>
                                <div className="academy_logo">
                                    <img src="images/academy_logo.png" alt="academy" />
                                </div>
                                <div className="banner1_para1"><h3>JetBrains Academy for Organizations</h3></div>
                                <div className="banner1_para2">Hands-on programming education in the hands of your team.</div>
                                <div className="banner1_btn"><button>Learn More</button> </div>
                            </div>
                            <div className="col2_banner2">
                                <div className="banner2_image">
                                    <img src="images/banner2.jpeg" alt="banner2" />
                                </div>
                                <div className="space_image">
                                    <img src="images/space.jpeg" alt="space" />
                                    <h3>Space</h3>
                                </div>

                                <div className="banner2_para1"><h3>All-in-One Solution for Software Teams</h3></div>
                                <div className="banner2_para2">Get a complete toolchain to&nbsp;develop software and collaborate with your team.</div>
                                <div className="banner2_btn"><button>Learn More</button> </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Header;