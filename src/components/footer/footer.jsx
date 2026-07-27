import {Link} from 'react-router-dom';

const  Footer = () => (
    <footer>
        <div>
            <h3>A propos de Kasa</h3>
            <Link to="#">Notre histoire</Link>
            <Link to="#">Equipe</Link>
            <Link to="#">Carrières</Link>
            <Link to="#">Presse</Link>            
        </div>
        <div>
            <h3>Support</h3>
            <Link to="#">Centre d'aide</Link>
            <Link to="#">Nous contacter</Link>
            <Link to="#">Signaler un problème</Link>
            <Link to="#">PAge 404</Link>            
        </div>
        <div>
            <h3>Légal</h3>
            <Link to="#">Conditions d'utilisation</Link>
            <Link to="#">Politique de confidentialité</Link>
            <Link to="#">Mentions légales</Link>
            <Link to="#">Cookies</Link>            
        </div>
        <p>© 2024 Kasa. Tous droits réservés.</p>
    </footer>
)

export default Footer