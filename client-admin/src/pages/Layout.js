import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar";
export default function Layout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
