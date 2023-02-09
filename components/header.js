import ButtonConnect from "../components/connect-button"
import logo from "../images/logo.png"
import Image from "next/image"
export default function Header() {
    return (
        <div>
            {/*  MENU  */}
            <section
                className="navbar custom-navbar navbar-fixed-top fixed-top navbar-expand-lg"
                role="navigation"
            >
                <div className="container">
                    {/*  lOGO TEXT HERE  */}
                    <a href="/" className="navbar-brand">
                        <Image src={logo} width={35} height={35} className="me-2 mb-1" style={{opacity: 0.7}}/>
                        DecentraFund
                    </a>
                    <div className="navbar-header">
                        <button
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/*  MENU LINKS  */}
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/" className="smoothScroll">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#feature" className="smoothScroll">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="smoothScroll">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="get-funded" className="smoothScroll">
                                    Get funded
                                </a>
                            </li>
                            <li>
                                <a href="fund-project" className="smoothScroll">
                                    Fund a project
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <ButtonConnect />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
