import '../../styles/stylePN/PN.css';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/Ebague.png';
export default function PN() {
    return(
        <main>

            <section className='pn_header'>

            </section>

           <section className='pn_cont'>
            <div className='pn_card'>
                <img src={pic1} alt="Ebague" className='pn_card_img'/>
                <div className='pn_card_text'>
                    <p className='pn_card_n'>Nome</p>
                    <p className='pn_card_p'> Price </p>
                    <p className='pn_card_t'> type </p>
                    <p className='pn_card_qt'> Disponible </p>
                </div>
                <button className='pn_card_btn'> Commander </button>
            </div>
           </section>

           <section className='pn_cont'>
            
           </section>

           <section className='pn_cont'>
            
           </section>
        </main>
    )
}