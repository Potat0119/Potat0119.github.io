import React from "react";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="FooterContainer">
                <div className="FooterInnerContainer">
                    <div className="FooterProfile">
                        <p className="FooterTitle">REO YOSHIOKA</p>
                        <p className="FooterText">KANAGAWA, JAPAN</p>
                        <p className="FooterText">biz.reoyoshioka@outlook.com</p>
                        <div className="SnsLogos">
                        <a href="https://x.com/Pot4t0_0w0" className="snsbtn">
                        <Image
                        className='XLogo'
                        src="/images/logo-black.png"
                        width={50}
                        height={50}

                        alt='X'/>
                        </a>
                        <a href="https://www.instagram.com/pot4t0_0w0/" className="snsbtn">
                        <Image
                        className='Instagram'
                        src="/images/IG_Black.png"
                        width={55}
                        height={55}

                        alt='Instagram'/>
                        </a>
                        </div>
                    </div>
                    <div className="FooterNav">
                        <ul className="FooterNavInner">
                            <li className="FooterNavTitle">
                                <p className="FooterTitle">WORKS</p>
                            </li>
                            <li className="FooterNavSmall">
                                <a href="#works" className="FooterNavButton">
                                    <p className="FooterText">Textures</p>
                                </a>
                            </li>
                            <li className="FooterNavSmall">
                                <a href="#works" className="FooterNavButton">
                                    <p className="FooterText">3D Models</p>
                                </a>
                            </li>
                            <li className="FooterNavSmall">
                                <a href="#works" className="FooterNavButton">
                                    <p className="FooterText">Web Design / Apps</p>
                                </a>
                            </li>
                        </ul>
                        <ul className="FooterNavInner">
                            <li className="FooterNavTitle">
                                <p className="FooterTitle">ABOUT</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="FooterIcons">
                    <a href="#" className="Top">
                    <Image
                    className='TopButton'
                    src="/images/top.svg"
                    width={55}
                    height={55}
                    alt='BackToTop'/>
                    </a>
                </div>
            </div>
                <p className="copyright">Copyright &copy; 2024- REO YOSHIOKA - All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;