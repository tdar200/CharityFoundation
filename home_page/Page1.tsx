import styled from "styled-components";
import image1 from "../public/static/little_girl.jpeg";
import Image from "next/image";
import LogoBar from "./LogoBar";

interface BackgroundImageProps {
  imageUrl: string;
}
const BackgroundImage = styled.div<BackgroundImageProps>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  justify-content: center;
  display: flex;
  flex-direction: column;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  }
`;

const ImageTextBig = styled.text`
  margin: 8px 30px;
  font-size: 60px;
  color: white;
`;

const ImageTextSmall = styled.text`
  margin: 8px 30px;
  font-size: 25px;
  color: white;
`;

const ImageButton = styled.button`
  background: #fcc81a;
  margin: 60px 30px;
  height: 3rem;
  width: 7rem;
  border-radius: 10px;
  border: none;
  color: white;
`;

function Page1() {
  return (
    <>
      <LogoBar></LogoBar>
      <BackgroundImage imageUrl={"/static/little_girl.jpeg"}>
        <ImageTextBig>Small Effort</ImageTextBig>

        <ImageTextBig>Make Big Change</ImageTextBig>
        <ImageTextSmall>
          Volunteers necessarily do not have the time
        </ImageTextSmall>
        <ImageTextSmall>they just have the heart</ImageTextSmall>
        <ImageButton>Donate</ImageButton>
      </BackgroundImage>
    </>
  );
}

export default Page1;
