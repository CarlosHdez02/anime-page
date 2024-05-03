import {AnimeProps} from '../../animes'
import classes from './AnimeList.module.css'
interface AnimeListProps{
    animes: AnimeProps[];
}
const AnimeList: React.FC<AnimeListProps> = ({animes}) => {
    return (
        <div className={classes.anime}>
            {animes.map((anime) => (
                <div key={anime.id} className={classes.animeItem}>
                    <h2 className={classes.animeTitle}>{anime.title}</h2>
                    <img src={anime.image} alt={anime.title} className={classes.animeImage} />
                    <p>{anime.description}</p>
                </div>
            ))}
        </div>
    );
};
export default AnimeList;

