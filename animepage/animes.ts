import fairy from './images/fairy.jpeg';
import fullmetal from './images/fullmetal.jpeg'; // Ensure correct file extension
import gintama from './images/gintama.jpeg';
import ippo from './images/ippo.jpeg'
import katekyo from './images/katekyo.jpeg'
import naruto from './images/naruto.jpeg';
import onePunch from './images/onePunch.jpeg';
import sao from './images/sao.jpeg';


export interface AnimeProps {
    id: string;
    title: string;
    description: string;
    image: string; // Use string type for image URL
}

export const animeData: AnimeProps[] = [
    {
        id:'1',
        title: 'Fairy Tail',
        description: 'A magical adventure with wizards and guilds.',
        image: fairy // Import image URL from correct location
    },
    {
        id:'2',
        title: 'Fullmetal Alchemist',
        description: 'Two brothers seek the Philosopher\'s Stone to restore their bodies.',
        image: fullmetal // Import image URL from correct location
    },
    {
        id:'3',
        title: 'gintama',
        description: 'A magical adventure with wizards and guilds.',
        image: gintama // Import image URL from correct location
    },
    {
        id:'4',
        title: 'Ippo',
        description: 'A magical adventure with wizards and guilds.',
        image: ippo // Import image URL from correct location
    },
    {
        id:'5',
        title: 'katekyo Hitman Reborn',
        description: 'A magical adventure with wizards and guilds.',
        image: katekyo // Import image URL from correct location
    },
    {
        id:'6',
        title: 'naruto',
        description: 'A magical adventure with wizards and guilds.',
        image: naruto // Import image URL from correct location
    },
    {
        id:'7',
        title: 'One Punch Man',
        description: 'A magical adventure with wizards and guilds.',
        image: onePunch // Import image URL from correct location
    },
    {
        id:'8',
        title: 'Sword Art Online',
        description: 'A magical adventure with wizards and guilds.',
        image: sao // Import image URL from correct location
    },
];
