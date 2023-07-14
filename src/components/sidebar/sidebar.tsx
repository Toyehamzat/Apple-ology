import styled from "styled-components";
import { List } from "react-bootstrap-icons";
import { gsap } from "gsap";
import { useRef, useState } from "react";

const SidebarContainer = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "300px")};
  height: 100vh;
  background-color: #333333;
  z-index: 999;
  transition: left 0.3s ease;

  @media (max-width: 500px) {
    background: transparent;
    backdrop-filter: blur(15px);
  }
`;

const SidebarToggle = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 22px;
  left: ${({ isOpen }) => (isOpen ? "calc(300px + 20px)" : "20px")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: left 0.3s ease;
`;

const SidebarContent = styled.div`
  padding: 20px;
  color: #ffffff;
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const Sidebar: React.FC = () => {
  const [sideBarIsOpen, setBarIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setBarIsOpen(!sideBarIsOpen);
    animateSidebar();
  };

  const animateSidebar = () => {
    if (sidebarRef.current) {
      const sidebar = sidebarRef.current;

      if (!sideBarIsOpen) {
        gsap.to(sidebar, { left: "0", duration: 0.1, ease: "power2.out" });
      } else {
        gsap.to(sidebar, { left: "-100%", duration: 0.1, ease: "power2.out" });
      }
    }
  };

  const isMobile = window.innerWidth <= 550;

  return (
    <>
      <SidebarToggle isOpen={sideBarIsOpen} onClick={toggleSidebar}>
        <List size={25} color="#ffffff" />
      </SidebarToggle>
      <SidebarContainer
        isOpen={sideBarIsOpen}
        isMobile={isMobile}
        ref={sidebarRef}
      >
        <SidebarContent>
          <h2>Sidebar Content</h2>
          <p>This is the content of the sidebar.</p>
        </SidebarContent>
      </SidebarContainer>
      <Backdrop isOpen={sideBarIsOpen} />
    </>
  );
};

export default Sidebar;
