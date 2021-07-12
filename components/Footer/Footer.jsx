/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FooterIcon from "./FooterIcon/FooterIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container-padding text-dark bg-light text-center">
      <div className="container-fluid">
        <FooterIcon
          url="http://www.linkedin.com/in/dr-kayalvizhi-jayavel-2505783b"
          img="/images/footer/linkedin.png"
          imgAlt="linkedin-img"
        />
        <FooterIcon
          url="https://www.youtube.com/channel/UCpPx2HdF0uooB91Bk8HH-5w"
          img="/images/footer/youtube.png"
          imgAlt="youtube-img"
        />
        <FooterIcon
          url="http://www.iotalliance.in/"
          img="/images/iota.png"
          imgAlt="youtube-img"
          last
        />
      </div>
      <p className="text-secondary mt-4 mb-0">
        &copy; Kayalvizhi Jayavel {year}
      </p>
    </div>
  );
};

export default Footer;
