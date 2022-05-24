import React, { useState } from "react";
// import Middle from "../components/Header/Middle";
// import Navbar from "../components/Header/Navbar";
// import Top from "../components/Header/Top";
import Top from "../components/newHeader/Top";
import MiddleHeader from "../components/newHeader/Middle";
import Nav from "../components/newHeader/Nav";
import SideNav from "../components/newHeader/SideNav";
import Backdrop from "../components/newHeader/Backdrop";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
    console.log("button is clicked");
  };
  return (
    <>
      {/* <Top />
      <Middle />
      <Navbar /> */}
      <Top />
      <MiddleHeader openSidebar={toggleSidebar} />
      <Nav />
      <Backdrop />
      {/* <SideNav showSidebar={showSidebar} /> */}
    </>
  );
}
