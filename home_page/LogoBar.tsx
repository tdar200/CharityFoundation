import styled from "styled-components";

const LogoBarComponent = styled.div`
  height: 10vh;
  width: 100%;
  color: black;
  top: 0;
  position: absolute;
  background: white;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 8px 30px;
`;

function LogoBar() {
  return <LogoBarComponent>LogoBar</LogoBarComponent>;
}

export default LogoBar;
