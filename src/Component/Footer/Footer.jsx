import React from "react";
import ShareLink from "react-facebook-share-link";
import { FaFacebook,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10 bg-neutral text-neutral-content">
      <div className="container mx-auto footer place-items-stretch justify-between">
        <aside>
          <img
            className="w-16 rounded-full"
            src="https://i.ibb.co/YpDz3JN/macrime-logo.png"
            alt=""
            srcset=""
          />
          <p>
            Macrame Carfts BD.
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
            <ShareLink link="https://www.facebook.com/macramecarftsbd/">
                {(link) => (
                  <a href={link} target="_blank">
                    <FaTwitterSquare className="text-4xl" />
                  </a>
                )}
              </ShareLink>
            </a>
            <a>
              <ShareLink link="https://www.facebook.com/macramecarftsbd/">
                {(link) => (
                  <a href={link} target="_blank">
                    <FaFacebook className="text-4xl"/>
                  </a>
                )}
              </ShareLink>
              
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
