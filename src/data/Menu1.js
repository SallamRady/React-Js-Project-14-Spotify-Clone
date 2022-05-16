import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse,BiNote } from "react-icons/bi";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";

export const MenuList1 = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    path:'/'
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
    path:'/'
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
    path:'/'
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    path:'/'
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
    path:'/'
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
    path:'/'
  },
  {
    id: 7,
    icon: <BiNote />,
    name: "Last Note",
    path:'/note'
  },
];
