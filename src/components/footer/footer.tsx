import { Github } from "react-bootstrap-icons";
import {FooterWrapper,GithubLink} from "./styles"
export function Footer() {
  return (
    <FooterWrapper>
      Copyright © 2023 Toyehamzat
      <GithubLink
        href="https://github.com/Toyehamzat"
        target="_blank"
        rel="noopener"
      >
        <Github />
      </GithubLink>
    </FooterWrapper>
  );
}


