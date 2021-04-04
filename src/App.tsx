

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { GlobalStyles } from './styles/global';
import {
  Container,
  Content,
  Title,
  Image,
  Contact,
  Services,
  Cards,
  ShowCase,
  Team,
  About,
} from './styles/app';


import { FaPen } from 'react-icons/fa';
import { BsCode, BsArrowRight } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';


import heroImage from './assets/heroImage.jpg';
import smartHome from './assets/smarthome.jpg';
import onboard from './assets/onboard.png';
import booking from './assets/booking.png';
import juice from './assets/juice-product.png';

import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.png';



function App() {




  return (
    <Container>
      <GlobalStyles />

      <NavBar />

      <Content>
        <Title>
          <p>Unhappy with your website?</p>
          <h1>We create beautiful<br /> and fast web services</h1>
        </Title>

        <Image src={heroImage} alt="hero" />

        <Contact>
          <h1>Story, emotion <br /> and purpose</h1>
          <p>
            We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
          </p>

          <span>Want us to contact you?</span>
          <div>
            <input type="text" placeholder="Email" />
            <button type="button">Join</button>
          </div>
        </Contact>

        <Services>
          <h1>We offer high <br /> demand services</h1>
          <Cards>
            <div className="card">
              <span>
                <FaPen size={24} color="white" />
              </span>
              <h2>UI/UX Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>
                Get Started
              </button>
            </div>
            <div className="card">
              <span>
                <BsCode size={28} color="white" />
              </span>
              <h2>Front End</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>
                Get Started
              </button>
            </div>
            <div className="card">
              <span>
                <AiOutlineBars size={24} color="white" />
              </span>
              <h2>Back End</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>
                Get Started
              </button>
            </div>
          </Cards>
        </Services>

        <ShowCase>
          <h1>Good design means <br /> good business</h1>
          <div className="cards">
            <div>
              <img src={smartHome} alt="" />
              <span>Full stack application</span>
              <p>Smart home dashboard</p>
            </div>
            <div>
              <img src={onboard} alt="" />
              <span>UX/UI design</span>
              <p>Onboard application</p>
            </div>
            <div>
              <img src={booking} alt="" />
              <span>Mobile application</span>
              <p>Booking system</p>
            </div>
            <div>
              <img src={juice} alt="" />
              <span>Front End applicati on</span>
              <p>Juice product homepage</p>
            </div>
          </div>

          <div className="see-more">
            <span>see more</span>
            <BsArrowRight size={24} color="#2d9cdb" />
          </div>
        </ShowCase>

        <Team>
          <div className="text">
            <h2>Meet the team</h2>
            <h1>We are chilled <br />  and a laidback <br /> team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="person">
            <div>
              <img src={person1} alt="person" />
            </div>
            <div>
              <img src={person2} alt="person" />
            </div>
            <div>
              <img src={person3} alt="person" />
            </div>
          </div>
        </Team>

        <About>
          <p>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</p>

          <div>
            <img src={person4} alt="person" />
            <div>
              <span>Carlos Tran</span>
              <p>The Decorate Gatsby</p>
            </div>
          </div>
        </About>
      </Content>

      <Footer />
    </Container>
  );
}

export default App;
