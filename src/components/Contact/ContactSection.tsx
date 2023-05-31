import styled from "styled-components";
import {
  Instagram,
  Github,
  Twitter,
  Whatsapp,
  Facebook,
} from "react-bootstrap-icons";

export function ContactSection() {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/Toyehamzat" target="_blank">
          <Github />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Twitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Instagram />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Facebook />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Whatsapp />
        </SocialLink>
      </SocialMedia>
      <ContactInfo>
        <p>Apple-ology</p>
        <p>Rodeo Drive 42, Los Angeles USA</p>
      </ContactInfo>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      rgba(214, 225, 230, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    #ffffff;
  align-items: center;
  width: 100%;
  animation: fadeIn ease 2s;
  justify-content: center;
  gap: 4rem;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 5rem;

  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 8rem;
  }

  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;
