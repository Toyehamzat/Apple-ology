
import {
  Instagram,
  Github,
  Twitter,
  Whatsapp,
  Facebook,
} from "react-bootstrap-icons";
import {ContactWrapper, SocialLink, SocialMedia,ContactInfo} from "./styles"
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
        <p>--Apple-ology--</p>
        <p>Rodeo Drive 42, Los Angeles USA</p>
      </ContactInfo>
    </ContactWrapper>
  );
}

