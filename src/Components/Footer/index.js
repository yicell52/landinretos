import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
import Logo from "../../images/logo.jpeg";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <img
                                src={Logo}
                                alt="logo"
                                style={{
                                    width: "108px",
                                    height: "86px",
                                    left: "47px",
                                    top: "26px",
                                    borderRadius: "50%",
                                }}
                            />
                        </SocialLogo>
                        <h6>© Derechos reservados 2021</h6>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://www.facebook.com/estrella.debellen"
                                target="_blank"
                                aria-label="Facebook"
                                style={{ color: "blue" }}
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://api.whatsapp.com/send?phone=573125218787&text=Hola,%20deseo%20hacer%20una%20cotización."
                                target="_blank"
                                aria-label="WhatsApp"
                                style={{ color: "#4DE714" }}
                            >
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink
                                href=""
                                target="_blank"
                                aria-label="Instagram"
                                style={{ color: "#000" }}
                            >
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
