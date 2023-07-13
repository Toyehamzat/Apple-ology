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
          <h4>INITIATIVES</h4>
          <h4>OFFICES</h4>
          <ul>
            <li>
              <a id="link" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Twitter
              </a>
            </li>
            <li>
              <a id="link" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Github
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a id="link" href="#">
                Crafted
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Applied
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Bandbeats
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Moves
              </a>
            </li>
            <li>
              <a id="link" href="#">
                B®/Good
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a id="link" href="#">
                Lagos - NG
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Los Angeles - USA
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Bay Area - CA
              </a>
            </li>
            <li>
              <a id="link" href="#">
                St. Louis - MO
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Cape Town - ZA
              </a>
            </li>
            <li>
              <a id="link" href="#">
                London - EN
              </a>
            </li>
            <li>
              <a id="link" href="#">
                Stockholm - SE
              </a>
            </li>
            <li>
              <a id="link" href="#">
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
