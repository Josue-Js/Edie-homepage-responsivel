import { Container, Menu, Redes, Email } from './styles';

import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';


function Footer() {
  return (
    <Container>
      <div>
        <div>
          
          <Menu>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Our Works</a></li>
            <li><a href="/#">Clients</a></li>
            <li><a href="/#">Contact</a></li>
          </Menu>

          <Redes>
            <h1>Edie</h1>
            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <ImInstagram size={24} color="white" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} color="white" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare size={24} color="white" />
              </a>
            </div>
          </Redes>

          <Email>
            <span>Want us to contact you?</span>
            <div>
              <input type="text" placeholder="Email" />
              <button>
                Join
                  </button>
            </div>
          </Email>
        </div>
        <p>created by <span>Josué</span> - devChallenges.io</p>
      </div>

    </Container>
  );
};

export default Footer;
