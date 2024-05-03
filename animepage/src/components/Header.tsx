import React from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { AnimeProps } from "../../animes";
import SearchBar from "./SearchBar";

interface HeaderProps {
  animes:AnimeProps[]
}
const Header: React.FC<HeaderProps> = ({animes}) => {
  const navigate = useNavigate();

  const handlePopularClick = () => {
    navigate("/popular");
  };

  const handleAiringClick = () => {
    navigate("/airing");
  };

  const handleUpcomingClick = () => {
    navigate("/upcoming");
  };

  return (
    <header className={classes.myHeader}>
      <h1>Popular Anime</h1>
      <div className={classes.headerContent}>
        <form className={classes.myForm}>
         <SearchBar animes={animes}/>
        </form>
        <div className={classes.buttonContainer}>
          <Button onClick={handlePopularClick}>Popular</Button>
          <Button onClick={handleAiringClick}>Airing</Button>
          <Button onClick={handleUpcomingClick}>Upcoming</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
