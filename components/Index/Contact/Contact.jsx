import Link from "next/link";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Contact = () => {
  const copyToClipboard = (e) => {
    let textToBeCopied = e.target.innerHTML;
    navigator.clipboard.writeText(textToBeCopied);
  };
  return (
    <div
      id="contact"
      className="container-padding text-center text-theme bg-theme"
    >
      <div className="container-fluid">
        <h2 style={{ marginBottom: "2rem" }}>Contact Me</h2>
        <p id="email1">
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip id="tooltip-right">Click to copy.</Tooltip>}
          >
            <span className="clickable" onClick={copyToClipboard}>
              kayalvij@srmist.edu.in
            </span>
          </OverlayTrigger>
        </p>

        <p id="email2">
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip id="tooltip-right">Click to copy.</Tooltip>}
          >
            <span className="clickable" onClick={copyToClipboard}>
              jayavelkayal@gmail.com
            </span>
          </OverlayTrigger>
        </p>

        <p>
          <Link
            passHref
            href="https://www.linkedin.com/in/dr-kayalvizhi-jayavel-2505783b"
          >
            Linkedin
          </Link>

          <p id="mobile" className="mt-3">
            Mobile Number:{" "}
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip id="tooltip-right">Click to copy.</Tooltip>}
            >
              <span className="clickable" onClick={copyToClipboard}>
                +91 98844 96212
              </span>
            </OverlayTrigger>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Contact;
