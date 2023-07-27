import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
