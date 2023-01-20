import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const NavContainerDiv = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  top: 10vh;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    display: none;
  }

  button {
    display: inline-block;
    padding: 8px 16px;
    border: none;
    background-color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;

const DropdownMenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #fff;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  background: #fcc81a;

  li {
    margin: 0;
    padding: 16px 16px;
    white-space: nowrap;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    padding: 16px 16px;
  }

  a:hover {
    background-color: #fff;
    height: 100%;
  }

  button {
    margin-left: auto;
    background: dimgrey;
    color: white;
    font-weight: 600;
  }
`;

const DonateButton = styled.button``;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <NavContainerDiv>
      <Nav ref={dropdownRef}>
        <DropdownMenu>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/other-projects'>Other Projects</a>
          </li>
          <li>
            <a href='/contact-us'>Contact Us</a>
          </li>
          <li>
            <a href='/signin'>Sign In</a>
          </li>
          <button>Donate Now</button>
        </DropdownMenu>
      </Nav>
    </NavContainerDiv>
  );
}

export default NavigationBar;
