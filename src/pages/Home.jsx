import '../styles/Home.css';
import { Link } from 'react-router-dom';
import affiche1 from '../assets/Ebague.png';
import affiche2 from '../assets/Eboucles.png';
import affiche3 from '../assets/Ebracelet.png';
import affiche4 from '../assets/Echaine.png';
import poste from '../assets/postePerso.jpg';
import { CiShop } from "react-icons/ci";

 export default function Home() {
    const exampleData = [
        { id: 1, name: 'Bagues', image: affiche1 },
        { id: 2, name: 'Boucles', image: affiche2 },
        { id: 3, name: 'Bracelets', image: affiche3 },
        { id: 4, name: 'Chaînes', image: affiche4 },
    ];
    return(
        <main>
            <section className="home" id='poste'>
                <div className='home_cont1-1'>
                    Des bijoux uniques
                </div>
                <div className='home_cont1-2'>
                    à votre image
                </div>
            </section>



            <section className="home" id='example'>
                <div className='home2_title'>Nos catégories</div>
                <div className='home2_container'>
                    {exampleData.map(item => (
                        <div key={item.id} className='home2_cont'>
                            <img src={item.image} alt={item.name} className='home2_cont1' />
                            <div className='home2_cont2'>{item.name}</div>
                        </div>
                    ))}
                </div>
            </section>


            

            <section className="home" id='perso'>
                <div className='home3_cont_text'>
                    <p> Gravez </p>
                    <p> Personnalisez </p>
                    <p> Aimez </p>
                </div>

                <img src={poste} alt='poste' className='home3_cont_img'>
                    
                </img>

                <div className='home3_cont_text'>
                    <p> Votre nom </p>
                    <p> votre photo </p>
                    <p> votre bijou </p>
                </div>
            </section>

            <section className="home" id='products'>
                <p className='home4_cont'> Personnaliser maintenant  </p>
               <Link to="/pn" className='home4_cont_ico'>
                    <CiShop />
                </Link>
            </section>
        </main>
    )
 }