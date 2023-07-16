import styled from "styled-components";
import { List } from "react-bootstrap-icons";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shoppingCartContext";

export const Sidebar: React.FC = () => {
  const [sideBarIsOpen, setBarIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setBarIsOpen(!sideBarIsOpen);
    animateSidebar();
    toggleScrollLock(); // Toggle scroll lock when sidebar opens/closes
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

  const toggleScrollLock = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = sideBarIsOpen ? "auto" : "hidden";
    }
  };

  const isMobile = window.innerWidth <= 550;

  const { TargetDownRef1 } = useShoppingCart();

  const handleOptionSelect2 = () => {
    TargetDownRef1.current?.scrollIntoView({ behavior: "smooth" });
    toggleSidebar();
  };

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
          <SidebarList>
            <Link to="/" id="link" onClick={toggleSidebar}>
              Home
            </Link>
          </SidebarList>
          <SidebarList>
            <Link to="/Cart" id="link" onClick={toggleSidebar}>
              Cart
            </Link>
          </SidebarList>
          <SidebarList>
            <Link to="/SavedItems" id="link" onClick={toggleSidebar}>
              Liked Items
            </Link>
          </SidebarList>
          <SidebarList onClick={() => handleOptionSelect2()}>
            Contact us
          </SidebarList>
        </SidebarContent>
      </SidebarContainer>
      <Backdrop isOpen={sideBarIsOpen} onClick={toggleSidebar} />
    </>
  );
};

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  font-weight: 500;
`;

const SidebarList = styled.label`
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    color: #818080ff;
  }
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
