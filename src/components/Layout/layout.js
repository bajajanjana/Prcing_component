import Card from "../Card/card";
import Header from "../Header/Header";
import "./layout.css";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 5;
`;
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  // width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 5vh;
`;

const Layout = (props) => {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }
  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
  return (
    <Page>
      {/* <div className="container  flex"> */}
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Header theme={props.theme} />
        <Card theme={props.theme} />
      </Container>
      {/* </div> */}
    </Page>
  );
};

export default Layout;
