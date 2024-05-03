import React, { ChangeEvent } from "react";
import classes from './SearchBar.module.css';
import { AnimeProps } from "../../animes";

interface SearchBarProps {
    animes: AnimeProps[];
}

const SearchBar: React.FC<SearchBarProps> = ({ animes }) => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const searchResult = animes.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <input
                className={classes.myInput}
                type="search"
                id="search"
                placeholder="Search for anime..."
                value={searchTerm}
                onChange={handleInput}
            />
            {searchTerm && ( // Conditionally render based on searchTerm
                <ul className={classes.searchResults}>
                    {searchResult.map((anime) => (
                        <li key={anime.id}>
                            <h3>{anime.title}</h3>
                            <img src={anime.image} alt={anime.title} />
                            <p>{anime.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchBar;
