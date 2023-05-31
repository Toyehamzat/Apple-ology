import React from "react";
import styled from "styled-components";
import { Github } from "react-bootstrap-icons";

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

const FooterWrapper = styled.footer`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.3rem;
  height: 50px;
  background: transparent;
`;

const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: black;
  font-size: 2rem;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.5) rotate(360deg);
  }
`;

export default Footer;
