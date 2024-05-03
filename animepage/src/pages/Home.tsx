import AnimeList from "../components/AnimeList";
import { animeData } from "../../animes";
const Home: React.FC = ()=>{
    return(
        <>
        <AnimeList animes={animeData}/>
        </>
    )
}
export default Home;