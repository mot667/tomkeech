import React, { useState, useEffect, useRef, Image} from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import Typical from 'react-typical';
import { Parallax, Background } from 'react-parallax';
import "./styles.css";
import { StarFill, Star} from 'react-bootstrap-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import resumePdf from './images/tomKeechResume.pdf';



const steps = [
  'I am a programmer', 1000,
  'I am a designer', 1000,
  'I am creative', 1000,
  'I am an editor', 1000,
];


function App() {


  document.body.style.height = "100%";
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [offset, setOffset] = useState(0);

  const listener = e => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  useOnClickOutside(node, () => setOpen(false));

  
  

  return (
    
 

    <ThemeProvider theme={theme}>

      <>
        <GlobalStyles />
        <div ref={node}>
  
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
         
      <header
        className="header-background"
        style={{ backgroundPositionY: offset}}
  
      >
        <section className="info-container" style={{ bottom: offset / 2 }}>
          <div style = {{color: 'black', fontSize: 30}}>
          <Typical wrapper="span" steps={steps} loop={10000} className={'caca'} />
          </div>
          <h1 style = {{color: 'black', fontSize: 55}}>Hello. From Tom Keech</h1>
        </section>
      
      </header>
  
   
     
          <div class = "container" style = {{paddingBottom: "65px"}}>
            <div id="profile" style = {{fontSize: 54, paddingTop: 65, color:"#851E3E"}}> 
              Profile
            </div>
            <div style = {{fontSize: 21, paddingTop:30 }}>
              Im a Software Engineering student
            </div>
            <hr style = {{marginTop: 40, marginBottom: 40, opacity: 0.8, borderColor: 'white'}}></hr>

        <div class = "row">
          <div class = "col-md-4">
            <h3 style= {{textAlign: "left", color:"#851E3E"}}>
              About Me
            </h3>
            <p style = {{textAlign: "left"}}>
              Here is stuff about me. I am cool awesome super huge. Like massive. Like weirdly big. Like
              I'm kinda concerned abbout how huge I am. All nat like no steroids. I know right. You would
              think that someone this size would 100% be on steroids.
            </p>
          </div>
          <div class = "col-md-4 text-center">
            <img  style = {{width: 250, borderColor: 'white' , paddingTop:20}} src={require('./images/me.jpg')} alt="picture of me" />
          </div>
          <div class = "col-md-4">
            <h3 style= {{textAlign: "left", color: "#851E3E"}}>
              Details
            </h3>
            <p style = {{textAlign: "left"}}> 
              <strong>Name: </strong>
              <br></br>
              Tom Keech
              <br></br>
              <strong>Age: </strong>
              <br></br>
              21
              <br></br>
              <strong>Location: </strong>
              <br></br>
              London, Ontario
            </p>
            <button style = {{backgroundColor: '#0D0C1D', borderWidth: 0}} >
              <img style = {{width: 30, alignSelf: 'left'}} src={require('./images/instagram.png')} alt="follow instagram" onClick = {() =>  window.open("https://www.instagram.com/tom.keech/", "_blank") } />
            </button>


          </div>
        </div>
        <div style = {{paddingTop:25}}>
        <Button style = {{backgroundColor: "#851E3E", borderColor: "#851E3E"}} href = {resumePdf} target = "_blank" variant="secondary" size="lg">
          View Resume
        </Button>
        </div>
          
          </div>
        

        <div style = {{backgroundColor:'#F5EEE1', width: '100%', padding: 0, margin:0}}>
          <div class = "container" style = {{paddingBottom: "40px", paddingTop: "40px", paddingLeft: "180px", paddingRight: "180px"}}>
            <div id = "abilities" style = {{fontSize: 54, paddingTop: 65, color:"#851E3E"}}> 
              Abilities
            </div>
            <p class = "lead" style = {{color: "black"}}>
              "I think most people can learn a lot more than they think they can"
              <br></br>
              - Elon Musk
            </p>
            <hr style = {{marginTop: 40, marginBottom: 40,opacity: 0.8, borderColor: 'black'}}></hr>
            <h3 style = {{color: "#851E3E", textAlign:'left'}}>
              Skills
            </h3>
            <div class = "row">
              <div class = "col-md-6"> 
              <ul class = "no-bullets">
                <li style = {{textAlign: 'left', paddingTop: 25}}>
                  <span class = "ability-title">React Native</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Javascript</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>      
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">HTML</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>        
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">CSS</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>      
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">React</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Firebase</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>

              </ul>
              </div>
              <div class = "col-md-6">
                <ul class = "no-bullets">
                <li style = {{textAlign: "left", paddingTop: 25}}>
                <span class = "ability-title">SQL</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">UML</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Java</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">C++</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Python</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">C#</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>

              </ul>
              </div>
            </div>
            <hr style = {{marginTop: 40, marginBottom: 40,opacity: 0.8, borderColor: 'black'}}></hr>
            <h3 style = {{color: "#851E3E", textAlign:'left'}}>
              Languages
            </h3>
            <div class = "row">
              <div class = "col-md-6">
                <ul class = "no-bullets">
                <li style = {{textAlign: "left", paddingTop: 25}}>
                <span class = "ability-title">English</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  </span>
                </li>
                </ul>
              </div>
              <div class = "col-md-6">
                <ul class = "no-bullets">
                <li style = {{textAlign: "left", paddingTop: 25}}>
                <span class = "ability-title">French</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  </span>
                </li>
                </ul>
              </div>
            </div>
            <hr style = {{marginTop: 40, marginBottom: 40,opacity: 0.8, borderColor: 'black'}}></hr>
            <h3 style = {{color: "#851E3E", textAlign:'left'}}>
              Tools
            </h3>
            <div class = "row">
              <div class = "col-md-6">
                <ul class = "no-bullets">
                <li style = {{textAlign: "left", paddingTop: 25}}>
                <span class = "ability-title">Windows</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Adobe Premiere Pro CS6</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Dialogflow</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Unity</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Cameo Systems Modeler</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                </ul>
              </div>
              <div class = "col-md-6">
                <ul class = "no-bullets">
                <li style = {{textAlign: "left", paddingTop: 25}}>
                <span class = "ability-title">Git</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Adobe Photoshop</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Arduino</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">MS Office</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                <li style = {{textAlign: "left", paddingTop: 10}}>
                <span class = "ability-title">Intel Quartus Prime</span>
                  <span class = "ability-score">
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <StarFill color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  <Star color = "#851E3E"/>
                  </span>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class = "container" style = {{paddingBottom: "40px", paddingTop: "40px", paddingLeft: "180px", paddingRight: "180px"}}>
            <div id="experiences" style = {{fontSize: 54, paddingTop: 65, color:"#851E3E"}}> 
              Experiences
            </div>
            <p class = "lead">
            “A well-educated mind will always have more questions than answers.”
              <br></br>
              - Helen Keller
            </p>
            <hr style = {{marginTop: 40, marginBottom: 40, opacity: 0.8, borderColor: 'white'}}></hr>
            <h3 style = {{color: "#851E3E", textAlign:'left', paddingBottom: 18}}>
              Educations
            </h3>
            <div class = "experiences">
              <div class = "experience row">
                <div class = "col-md-4">
                  <h4 style = {{textAlign: "left", paddingRight:10}}>University of Western Ontario</h4>
                  <p style = {{textAlign: "left", paddingRight:10}} class = "experience-period">
                    Sept 2017 - Present
                  </p>
                </div>
                <div class = "col-md-8">
                  <p style = {{textAlign: "left"}}>
                    <span>
                      <div style = {{textAlign:"left", marginBottom:-10}}><strong>Bachelor - Software Engineering BESc</strong></div>
                    </span>
                    
                    <span class = "hidden-phone">
                      <br></br>

                      Something about western and Software Engineering. Like what i learnt and classes I took
                      and like maybe projects and labs I did or somwthing i dont know.
                    </span>
                    <span class = "experience-details">
                      <span class = "location">
                        <br></br>
                        <div style = {{textAlign:"left", paddingTop: 6}}><FaMapMarkerAlt/>
                        <span style = {{paddingLeft: 10}}>
                          London, Ontario
                        </span>
                        </div>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              <div style = {{paddingTop:35}} class = "experience row">
                <div class = "col-md-4">
                  <h4 style = {{textAlign: "left", paddingRight:10}}>École secondaire catholique Monseigneur-Bruyère</h4>
                  <p style = {{textAlign: "left", paddingRight:10}} class = "experience-period">
                    Sept 2010 - June 2017
                  </p>
                </div>
                <div class = "col-md-8">
                  <p style = {{textAlign: "left"}}>
                    <span>
                      <div style = {{textAlign:"left", marginBottom:-10}}><strong>Highschool</strong></div>
                    </span>
                    
                    <span class = "hidden-phone">
                      <br></br>

                      Something about western and Software Engineering. Like what i learnt and classes I took
                      and like maybe projects and labs I did or somwthing i dont know.
                    </span>
                    <span class = "experience-details">
                      <span class = "location">
                        <br></br>
                        <div style = {{textAlign:"left", paddingTop: 6}}><FaMapMarkerAlt/>
                        <span style = {{paddingLeft: 10}}>
                          London, Ontario
                        </span>
                        </div>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <hr style = {{marginTop: 40, marginBottom: 40, opacity: 0.8, borderColor: 'white'}}></hr>
              <h3 style = {{color: "#851E3E", textAlign:'left', paddingBottom: 18}}>
              Educations
            </h3>
            </div>
          </div>

          
        <div style = {{backgroundColor:'#F5EEE1', width: '100%', padding: 0, margin:0}}>
          <div class = "container" style = {{paddingBottom: "40px", paddingTop: "40px", paddingLeft: "180px", paddingRight: "180px"}}>
            <div id = "projects" style = {{fontSize: 54, paddingTop: 65, color:"#851E3E"}}> 
              Projects
            </div>
            <p class = "lead" style = {{color: "black"}}>
              "something"
              <br></br>
              - Me Keech
            </p>
            <hr style = {{marginTop: 40, marginBottom: 40,opacity: 0.8, borderColor: 'black'}}></hr>
            <div class = "row">
              <div class = "col-md-6 col-sm-12 col-xs-12">

              </div>
            </div>
          </div>
        </div>

        <div style = {{backgroundColor:'grey', width: '100%', padding: 0, margin:0}}>
        <div class = "container" style = {{paddingBottom: "40px", paddingTop: "40px", paddingLeft: "180px", paddingRight: "180px"}}>
            <div id = "contact" style = {{fontSize: 54, paddingTop: 65, color:"#851E3E"}}> 
              Contact
            </div>
            <p class = "lead">
            “A well-educated mind will always have more questions than answers.”
              <br></br>
              - Helen Keller
            </p>
            <hr style = {{marginTop: 40, marginBottom: 40, opacity: 0.8, borderColor: 'white'}}></hr>
            <div class = "row">
              <div class = "col-md-6"> 
                <ul class = "no-bullets">
                  <li>
                    <a style = {{color:'white'}} href = "https://github.com/mot667" target = "_blank">
                      <div class = "row">
                        <img style = {{width: 40, alignSelf: 'left'}} src={require('./images/githubLogo.png')} alt = "github logo"></img>
                        <text style = {{paddingLeft:15}}>https://github.com/mot667</text>
                        </div>
         
                    </a>
                  </li>
                  <li style = {{paddingTop:20}}>
                    <a style = {{color:'white'}} href = "https://devpost.com/thomasvkeech" target = "_blank">
                      <div class = "row">
                        <img style = {{width: 40, alignSelf: 'left'}} src={require('./images/devpostLogo.png')} alt = "devpost logo"></img>  

                      <text style = {{paddingLeft:15, display:'incline-block'}}>https://devpost.com/thomasvkeech</text>
                      </div>
                      
                    </a>
                  </li>
                </ul>
              </div>
              <div class = "col-md-6">
              <ul class = "no-bullets">
                  <li>
                    <a style = {{color:'white'}} href = "https://www.linkedin.com/in/tomkeech/" target = "_blank">
                      <div class = "row">
                        <img style = {{width: 40, alignSelf: 'left'}} src={require('./images/linkedinLogo.png')} alt = "linkedin logo"></img>
                        <text style = {{paddingLeft:15}}>https://www.linkedin.com/in/tomkeech/</text>
                        </div>
         
                    </a>
                  </li>
                  <li style = {{paddingTop:20}}>
                    <a style = {{color:'white'}} href = "mailto:thomas.v.keech@gmail.com" target = "_blank">
                      <span class = "icon icon-email"></span>
                      thomas.v.keech@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        
      </>

    </ThemeProvider>

  );
}
//hi
export default App;
