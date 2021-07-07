import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container-padding text-center text-theme bg-theme"
    >
      <div className="container-fluid">
        <h2 style={{ fontWeight: "800", marginBottom: "2rem" }}>Contact Me</h2>
        <p>jayavelkayal@gmail.com</p>
        <p>kayalvij@srmist.edu.in</p>
        <p>
          <Link
            passHref
            href="https://www.linkedin.com/in/dr-kayalvizhi-jayavel-2505783b"
          >
            Linkedin
          </Link>
          <p className="mt-3">Mobile Number: +91 98844 96212</p>
        </p>
      </div>
    </div>
  );
};

export default Contact;
