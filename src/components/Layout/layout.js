import Card from "../Card/card";
import Header from "../Header/Header"
import "./layout.css";
const Layout = () => {
  return (
    <div className="container  flex">
        <Header/>
        <Card/>
    </div>
  );
};

export default Layout;
