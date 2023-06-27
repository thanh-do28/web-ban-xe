/*eslint-disable*/
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

function Homepage() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default Homepage;
