import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;

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

  li {
    margin: 0;
    padding: 8px 16px;
    white-space: nowrap;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    display: block;
    padding: 8px 16px;
  }

  a:hover {
    background-color: #eee;
  }
`;

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
    <Nav ref={dropdownRef}>
      {/* <button onClick={() => setIsOpen((prev) => !prev)}>Menu</button> */}

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
      </DropdownMenu>
    </Nav>
  );
}

export default NavigationBar;
