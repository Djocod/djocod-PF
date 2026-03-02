import React from "react";

const Contact = () => {
  return (
    <footer id="footer">
      <i className="fa-solid fa-hexagon hexa1"></i>
      <i className="fa-solid fa-hexagon hexa2"></i>
      <i className="fa-solid fa-hexagon hexa3"></i>
      <ul className="social-contact">
        <li>
          <a href="https://github.com/Djocod" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github icon"></i>
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jordan-francoual-a41b9728b"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in icon"></i>
            linkedIn
          </a>
        </li>
        <li>
          <a href="mailto:jordan.francoual@hotmail.com" rel="noreferrer">
            <i className="fa-solid fa-envelope-open-text icon"></i>
            mail
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
