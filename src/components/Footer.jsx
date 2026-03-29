import '../styles/Footer.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GiStrikingDiamonds } from "react-icons/gi";
import { RiTiktokLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

 export default function Footer() {


    const socialsData = [
        {
            id: 1,
            ico: <FaMapMarkedAlt className='footer_ico' /> ,
            name: 'Localisation',
            url: ''
        },

         {
            id: 2,
            ico: <FaPhone className='footer_ico' />,
            name: 'Contact',
            url: ''
        },

         {
            id: 3,
            ico: <GiStrikingDiamonds className='footer_ico' />,
            name: 'JewerlyShop',
            url: ''
        },

         {
            id: 4,
            ico: <RiTiktokLine className='footer_ico' />,
            name: 'Tiktok',
            url: ''
        },

         {
            id: 5,
            ico: <FaInstagram className='footer_ico' />,
            name: 'Instagram',
            url: ''
        },
    ]
    return(
        <footer>
            {socialsData.map((item) => (
                <a href={item.url} key={item.id} className='footer_link'>
                    {item.ico}
                    <span>{item.name}</span>
                </a>
            ))}
        </footer>
    )
 }