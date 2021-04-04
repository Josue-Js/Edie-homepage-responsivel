import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';


import { Container, Logo, Nav } from './styles';

function NavBar() {


  const [showButton, setShowButton] = useState(false)


  const getSize = () => {
    const width = window.innerWidth

    if (width < 768) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }


  useEffect(() => getSize(), [])



  window.addEventListener('resize', getSize)



  return (
    <Container>
      <Logo>Edie</Logo>

      <Nav>
        {showButton ? (
          <div>
            <FiMenu size={24} color="#000"/>
          </div>
        ) : (
          <ul className="menu">
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Our works</a></li>
            <li><a href="/#">Clients</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        )}
      
      </Nav>
    </Container>
  );
};

export default NavBar;
