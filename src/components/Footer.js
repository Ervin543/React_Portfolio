import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/Ervin543">My GitHub
              <i className="fab fa-github" aria-label="GitHub"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ervin-dasratt-207335276/">My LinkedIn
              <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/youruserid/Ervin543">My stackoverflow
              <i className="fab fa-stack-overflow" aria-label="Stack Overflow"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Ervin543">My Twitter
              <i className="fab fa-twitter" aria-label="Twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Ervin Dasratt</p>
    </footer>
  );
}

export default Footer;
