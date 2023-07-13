import { ArrowBarRight } from "react-bootstrap-icons";
import "./STYLES.css";
export function Footer() {
  return (
    <>
      <footer id="footer">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h4>
            <label htmlFor="user-email">STAY IN THE KNOW</label>
          </h4>
          <div id="line">
            <input
              type="email"
              name="email"
              id="user-email"
              placeholder="Email Address"
            />

            <button type="submit">
              <ArrowBarRight />
            </button>
          </div>
        </form>

        <div id="footer-contact">
          <h4>SOCIAL</h4>
          <h4>PRODUCTS</h4>
          <h4>OFFICES</h4>
          <ul>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Airpods
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                macbook Air
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Macbook pro
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                iphone
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                ipad
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Lagos - NG
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Los Angeles - USA
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Bay Area - CA
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                St. Louis - MO
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Cape Town - ZA
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                London - EN
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Stockholm - SE
              </a>
            </li>
            <li>
              <a
                id="link"
                href="https://github.com/Toyehamzat"
                target="_blank"
                rel="noopener"
              >
                Wien - AU
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <section id="end">
        <div>APPLE-LOGY®</div>
        <div>BUY WHAT YOU LOVE.™</div>
        <div>TERMS, PRIVACY POLICY</div>
      </section>
    </>
  );
}
