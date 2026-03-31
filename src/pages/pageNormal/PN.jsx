import '../../styles/stylePN/PN.css';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/Ebague.png';
import pic2 from '../../assets/Eboucles.png';
import { useState } from 'react';
export default function PN() {

    const sendToWhatsApp = (product) => {
    const numero = "2250789763083"; // ton numéro

    const message = `
 *Commande produit*

 Produit : ${product.name}
 Prix : ${product.prix}
 Taille : ${product.taille}
 Type : ${product.type}

 *Veuillez compléter :*
 Nom :
 Numéro :
 Localisation :
 Quantité :

Merci 🙏
    `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

const [dispo, setDispo] = useState(true);
   



    const dataProducts = [
  {
    id: 1,
    name: "Bague élégante",
    prix: "5000 FCFA",
    taille: "M",
    type: "Or",
    disponibility: true,
    image: pic1,
  },
  {
    id: 2,
    name: "Boucles d'oreilles",
    prix: "3000 FCFA",
    taille: "Unique",
    type: "Argent",
    disponibility: true,
    image: pic2,
  }
]

    return(
        <main>

            <section className='pn_header'></section>

           <section className='pn_cont'>

                 <div className='pn_box'>
                    
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}


                 </div>

                <div className='pn_box'>
                   
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}
                </div>
                    
           </section>

           <section className='pn_cont'>

                <div className='pn_box'>
                    
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}
                </div>

                <div className='pn_box'>
                   
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}
                </div>

           </section>

           <section className='pn_cont'>

                <div className='pn_box'>
                   
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}
                </div>

                <div className='pn_box'>
                   
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <p className='pn_name'>{data.name}</p>
            <p className='pn_prix'>{data.prix}</p>
            <p className='pn_taille'>{data.taille}</p>
            <p className='pn_type'>{data.type}</p>
            <p className='pn_qt'>{data.disponibility ? "Disponible" : "Indisponible"}</p>
            <button className='pn_bt' onClick={() => sendToWhatsApp(data)}>
                commander
            </button>
        </div>
    </div>
))}
                </div>

           </section>
        </main>
    )
}




  