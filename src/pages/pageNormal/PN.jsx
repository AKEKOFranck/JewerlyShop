import '../../styles/stylePN/PN.css';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/Ebague.png';
import pic2 from '../../assets/Eboucles.png';
export default function PN() {
    const dataProducts = [
        {
            id:1 ,
            details: [
                "name",
                "prix",
                "taille",
                "type",
            ],
            disponibility:" dispo",
             image: pic1,
        },

          {
            id:2 ,
            details: [
                "name",
                "prix",
                "taille",
                "type",
            ],
            disponibility:" dispo",
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
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
        </div>
    </div>
))}


                 </div>

                <div className='pn_box'>
                    
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
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
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
        </div>
    </div>
))}
                </div>

                <div className='pn_box'>
                    
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
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
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
        </div>
    </div>
))}
                </div>

                <div className='pn_box'>
                    
{dataProducts.map(data => (
    <div className='pn_card' key={data.id}>
        <img src={data.image} alt={data.name} className='pn_img'/>
        <div className='pn_items'>
            <ul>
                {data.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <p className='pn_qt'>{data.disponibility}</p>
            <button className='pn_bt'>commander</button>
        </div>
    </div>
))}
                </div>

           </section>
        </main>
    )
}




  