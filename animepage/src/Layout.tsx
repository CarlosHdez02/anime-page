import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const Layout: React.FC = () => {
  return (
    <>
      <Header />


      {/*Layout children */}
      <Outlet />
    </>
  );
};
export default Layout;
