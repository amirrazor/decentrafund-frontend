// NEXTJS

import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"

// IMAGES
import dapp from "../images/dapp.png"

// COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* EXTERNAL SCRIPTS  */}
                <script src="js/jquery.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/jquery.stellar.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/smoothscroll.js"></script>
                <script src="js/custom.js"></script>
            </Head>

            <Header />

            {/*  ENTER FUND  */}
            <section id="home" data-stellar-background-ratio="0.5">
                <div className="img-overlay overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12"></div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h1 className="text-white font-title">
                                    Fund your favorite project with ETH
                                </h1>
                                <h3 className="text-white">
                                    This is a test project and uses Goerli test money
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12"></div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <a href="fund-project">
                                    {" "}
                                    <div className="fund-box-fund font-title">Fund a project</div>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12"></div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <a href="get-funded">
                                    <div className="fund-box font-title">
                                        Get funded (Coming soon!)
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  INFO  */}
            <section id="feature" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h1>Tools used</h1>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active">
                                    <a
                                        href="#tab01"
                                        aria-controls="tab01"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Ethers.js
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#tab02"
                                        aria-controls="tab02"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Next.js
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#tab03"
                                        aria-controls="tab03"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Hardhat
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active" id="tab01" role="tabpanel">
                                    <div className="tab-pane-item">
                                        <h2>Ethers.js</h2>
                                        <p class="large-paragraph">
                                            The <strong>Ethers.js {""}</strong>
                                            library aims to be a complete and compact library for
                                            interacting with the Ethereum Blockchain and its
                                            ecosystem. It was originally designed for use with
                                            ethers.io and has since expanded into a more
                                            general-purpose library.
                                        </p>
                                    </div>
                                    <div className="tab-pane-item">
                                        <p class="large-paragraph">
                                            Ether.js is a great communication tool between the
                                            back-end and the blockchain. Visit this link{" "}
                                            <a
                                                href="https://docs.ethers.org/v5/"
                                                target="_blank"
                                                className="text-success hover-link"
                                            >
                                                <strong>this link</strong>
                                            </a>{" "}
                                            to learn more about the Ethers.js library.
                                        </p>
                                    </div>
                                </div>

                                <div className="tab-pane" id="tab02" role="tabpanel">
                                    <div className="tab-pane-item">
                                        <h2>Next.js</h2>
                                        <p class="large-paragraph">
                                            <strong>Next.js</strong> is an open-source web
                                            development framework created by Vercel enabling
                                            React-based web applications with server-side rendering
                                            and generating static websites.
                                        </p>
                                    </div>
                                    <div className="tab-pane-item">
                                        <p class="large-paragraph">
                                            The Front-end of this project is a next.js app. to
                                            learn more visit the{" "}
                                            <a
                                                href="https://nextjs.org/docs/getting-started"
                                                target="_blank"
                                                className="text-success hover-link"
                                            >
                                                <strong>Next.js Documentation</strong>
                                            </a>{" "}
                                        </p>
                                    </div>
                                </div>

                                <div className="tab-pane" id="tab03" role="tabpanel">
                                    <div className="tab-pane-item">
                                        <h2>Hardhat</h2>
                                        <p class="large-paragraph">
                                            <strong>Hardhat</strong> is a development environment
                                            for Ethereum software. It consists of different
                                            components for editing, compiling, debugging and
                                            deploying your smart contracts and dApps, all of which
                                            work together to create a complete development
                                            environment.
                                        </p>
                                    </div>
                                    <div className="tab-pane-item">
                                        <p class="large-paragraph">
                                            Hardhat is used in this project to create the back-end
                                            structure. To learn more about hardhat visit{" "}
                                            <a
                                                href="https://hardhat.org/docs"
                                                target="_blank"
                                                className="text-success hover-link"
                                            >
                                                <strong>Hardhat Documentation</strong>
                                            </a>{" "}
                                            for more info.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="">
                                <Image src={dapp} className="" alt="" width={370} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section id="testimonial" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="testimonial-image"></div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="testimonial-info">
                                <div className="section-title">
                                    <h1>About me</h1>
                                </div>
                                <h3>
                                    My name is Amir and i am a web3 developer. My focus is on
                                    creating fullstack dApps (decentralized apps), developing smart
                                    contracts and contributing to the decentralized finance AKA
                                    DeFi. If you have any questions or feedback or if you want to
                                    contact me for any business inqueries, feel free to contact me.
                                </h3>
                                <h5 className="mt-3 mb-3">You can find me on:</h5>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/amir-razaghkhah-3a654923b/"
                                        target="_blank"
                                        className="text-primary hover-link social-icon-link bi-linkedin me-2"
                                    >
                                        {" "}
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://www.instagram.com/crypto.with.amir/"
                                        target="_blank"
                                        className="me-2 text-warning hover-link social-icon-link bi-instagram"
                                    >
                                        {" "}
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UCo1_p4Z1XELqyTCp_VBt6Aw"
                                        target="_blank"
                                        className="me-2 text-danger hover-link social-icon-link bi-youtube"
                                    >
                                        {" "}
                                        YouTube
                                    </a>
                                    <a
                                        href="https://twitter.com/CryptoWithAmir"
                                        target="_blank"
                                        className="me-2 text-info hover-link social-icon-link bi-twitter"
                                    >
                                        {" "}
                                        Twitter
                                    </a>
                                    <a
                                        href="mailto:cryptowithamir@gmail.com"
                                        target="_blank"
                                        className="me-2 text-success hover-link social-icon-link bi-envelope"
                                    >
                                        {" "}
                                        E-mail
                                    </a>

                                    <a
                                        href="https://github.com/amirrazor"
                                        target="_blank"
                                        className="text-white hover-link social-icon-link bi-github"
                                    >
                                        {" "}
                                        Github
                                    </a>
                                </p>
                                <h5 className="mt-3 mb-3">
                                    or visit my website at:{" "}
                                    <a
                                        href="https://crypto-amir.de"
                                        target="_blank"
                                        className="text-white"
                                    >
                                        {" "}
                                        https://crypto-amir.de
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  FOOTER  */}
            <Footer />
        </>
    )
}
