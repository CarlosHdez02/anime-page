import { Outlet } from "react-router-dom";
import { AnimeProps } from "../animes"; // Import AnimeProps interface
import Header from "./components/Header";
interface LayoutProps {
  animes: AnimeProps[]; // Define prop type for anime data
}

const Layout: React.FC<LayoutProps> = ({ animes }) => {
  return (
    <>
      <Header  animes={animes}/>


      {/*Layout children */}
      <Outlet />
    </>
  );
};
export default Layout;
