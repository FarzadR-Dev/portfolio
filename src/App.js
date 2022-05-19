// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Me from './images/image0.jpeg'
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {  Container, Navbar, Nav, Image, Button, Carousel } from 'react-bootstrap';
import newvid from './newvid.mp4';
// import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from 'react-tsparticles';
import Winner from './images/Winner.jpg';
import DisGraph from './images/DisGraph.png';
import res1 from './images/resume_demo.png';
import res1real from './Farzad Rahman.pdf';
import res2 from './images/res2demo.png';
import res2real from './newSkillsResume.pdf';

function App() {

  const [page, setPage] = useState("splash");

  function renderBackground(){
return(
    <video className='videoTag' id="background-video" autoPlay loop>
          <source src={newvid} type='video/mp4'/>
      </video>
)
  }

  function renderSplash(){
    const handleClick=(e)=>{
      setPage("");
    }

    return(
      <div className='header-wrapper'>
        <div className='main-info'>
        <Button onClick={handleClick}>
          <h1>
            Enter
          </h1>
        </Button>
        </div>
      </div>
    )
  }

  function renderPage(){
    return(
        <>
       
        <Navbar className="dark-nav" fixed="top" class="nav-3" align="center" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h1 className='dark-info-tex'>CloseZad</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto"> 

              <Nav.Link href="#welcome" ><h4 className='dark-info-tex'>Welcome</h4></Nav.Link>
              <Nav.Link href="#about"><h4 className='dark-info-tex'>About</h4></Nav.Link>
              <Nav.Link href="#work"><h4 className='dark-info-tex'>Work</h4></Nav.Link>
              <Nav.Link href="#sites"><h4 className='dark-info-tex'>Sites</h4></Nav.Link>
              <Nav.Link href="#projects"><h4 className='dark-info-tex'>Projects</h4></Nav.Link>
              <Nav.Link href="#resumes"><h4 className='dark-info-tex'>Résumé</h4></Nav.Link>
              {/* <NavDropdown title="Résumé" className='dark-info-tex' id="basic-nav-dropdown">
                <NavDropdown.Item href="https://farzadr-dev.github.io/Skills%20Resume.docx.pdf">Version 1</NavDropdown.Item>
                <NavDropdown.Item href="https://farzadr-dev.github.io/Updated%20Resume.pdf">Version 2</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
     
      
      <div className='header-wrapper'>

        <div className='main-info' id="welcome">
        {/* <Particles params={{particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }}}
            /> */}
          <h1>Welcome</h1>
          <p>Website? More like a glorified linktree.
          <br/> And a bit about Farzad too...
          </p>          
        </div>
      </div>

      <div className='header-wrapper' id="about">
        <div className='dark-info' class='dark-info'>
          <div className='wrapper container'>
          <div className='row'>
          <div className='column'>
            <Image src={Me} className='image-type'/>
            </div>
            <div className='column'>
            <h1 className='dark-info-text'>About Me</h1><br></br>
          <p className='paragraph'>Hi! I'm Farzad, a first year computer engineering student at the University of Waterloo and software developer. My last position was as a Full-Stack Developer working with ServerlessStack and ReactJS.
            Outside of class and programming, you'd find me playing video games, soccer, volleyball, tennis or basketball with friends. I also play piano, violin, guitar and sometimes produce and play with a launchpad mk II.
            Based in Waterloo, I often bike/skate around the city, so feel free to say hi!
          </p>
            </div>
          </div>
          </div>
        </div>

      </div>



  <div className='header-wrapper'>
    <div className='dark-info-3' id="work">
          <h1>Recent Work Experience</h1>
          <br></br>
          <a href="https://soaringtasks.com/">
          <img alt='proving grounds'src='https://soaringtasks.com/wp-content/uploads/2019/11/PGtitlelogo2-scaled.png' className='image-type'/>
          </a>
          <h3>Full-Stack Developer (ServerlessStack, React JS, Node JS, AWS...)</h3> 
            <p className='paragraph-1'>This recent winter co-op term, I got to work at Proving Grounds for my first co-op position.
              I was a full-stack developer working on a glider-club management platform. As a full-stack developer, I created front-end features with react-bootstrap
              and added functionality by adapting to internal assets and existing tools. I created api functions for use of new features whenever necessary.
              For example, I created a club-admin page where admins could manage club rules and database-stored factors such as payment methods, dates, and transaction lock data. 
            </p>
    </div>
  </div>
      


<div className='header-wrapper' id="sites">
  <Carousel className='dark-info-2'>
  <Carousel.Item>
    <a  href="https://github.com/FarzadR-Dev?tab=repositories">
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="First slide"
      className='image-type'
    />
    </a>
    
    <Carousel.Caption>
      <h3>My Github</h3>
      <p>That's where I upload most projects I had worked on including school projects. Still got more to upload and more to work on. </p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <a href="https://www.linkedin.com/in/farzad-rahman-929ab5191">
    <img
      className='image-type'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
      alt="Second slide"
    />
    </a>
    <Carousel.Caption>
      <h3>My LinkedIn</h3>
      <p>Feel free to see my LinkedIn profile and connect with my professional side.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <a href="mailto:farzadrahman20@gmail.com">
    <img
      className='image-type'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
      alt="Third slide"
    />
    </a>
        <Carousel.Caption>
      <h3>My Email</h3>
      <p>Reach me by email by sending to farzadrahman20@gmail.com</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>

    <a href="https://www.instagram.com/closezad/">
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="Fourth slide" className='image-type'/>
    </a>
        <Carousel.Caption>
      <h3>instagram</h3>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://www.facebook.com/profile.php?id=100007856446681">
    <img src="https://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png" alt="Fifth slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>facebook</h3>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://www.youtube.com/channel/UCxgxN6_o2_jEU_4zAKd91pA">
      <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="Sixth slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>youtube</h3>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://refillonline.github.io/">
      <img src="https://cdn.discordapp.com/attachments/772201659212365895/797899045737725992/iconReFillother.png" alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>Re-Fill</h3>
      <p>Okay now this is actually a cool thing in the works right now. You'll be really excited if you are involved in any way.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div className='header-wrapper' id="projects">
  <Carousel className='dark-info-4'>
  <Carousel.Item>
  <a href="https://github.com/FarzadR-Dev/GameJam2020-WON-AWARD-">
      <img src={Winner} alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>UW Games Institute Game Jam Project</h3>
      <p>In June 2020, my friends and I entered a game jam (hackathon where you create a game in short time) hosted by the University of Waterloo's Games Institute. I was one of the lead developers on our team where we somehow won an award.
                            Might get a demo out???</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://devpost.com/software/disgraph?ref_content=user-portfolio&ref_feature=in_progress">
      <img src={DisGraph} alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>DisGraph (Hack the North 2020 Submission)</h3>
      <p>Wrote script functions for a discord bot that generates graphs from user input data based on graph style choice and details.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://tyseer2335.github.io/chAD-Bot/">
      <img src="https://tyseer2335.github.io/chAD-Bot/images/logo.png" alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>chAD (EngHacks 2021 Submission)</h3>
      <p>Designed a discord bot that generates custom ads based on wishes of the server's owner. Curated for businesses looking to market in new spaces, and server owners looking to make ad-revenue.</p>
      <a href="https://devpost.com/software/chad-the-ad-bot-for-discord-servers?ref_content=my-projects-tab&ref_feature=my_projects" className=''> DevPost Link</a>
    </Carousel.Caption>
  </Carousel.Item>

  


  </Carousel>
</div>

<div className='header-wrapper' id="resumes">
  <div className='dark-info-5'>
    <div className='row'>
      <h1>Résumés</h1>
    </div>
    <div className='row'>
      <div className='column-1'>
        <a href={res1real}>
        <img src={res1}  alt="res1"/>
        </a>
      </div>
      <div className='column-1'>
      <a href={res2real}>
          <img src={res2} alt="res2"/>
        </a>
      </div>
    </div>
  </div>

</div>

</>
    )
  }


  return (

    <>
    
      {/* {(page !== "lander") && renderMap()} */}
      {(page === "splash") && renderSplash()}
      {(page === "") && renderBackground()}
      {(page === "") && renderPage()}

      
      <>

  {/* <footer fixed="bottom">A CloseZad Production</footer> */}
      </>
      

    
   </>
  
  );
}

export default App;
