import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Connect With Us On</h4>
        <ul className="socials">
          <li>
            <a href="#" className="icon">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
