import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './Navbar.css';
import './Drawings.css';
import HVAC from './hvac.jpg';

import Phoenix from './phoenix.png';
import ScrollToTop from './ScrollToTop';
class Navbar extends React.Component{
    render() {
        return (
            <HashRouter basename='/'>
            <ScrollToTop />
            <div className="container">
            <div className="nav">
                <a href="/website-master/"><img className="icons" width="60px" height="60px" src={Phoenix}/></a>  
                <div className="item">     
                    <ul className="bar">
                        <li className="tab"><Link to="/">HOME</Link></li>
                        <li className="tab"><Link to="/contacts/">CONTACTS</Link></li>
                        <li className="tab"><Link to="/about/">ABOUT</Link></li>
                    </ul>
                </div>  
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/contacts/" component={Contacts}/>
            <Route path="/about/" component={About} />
            </div>
            </HashRouter>
            
        );
    }
}
const Home = () => {
    return (
        <div className="image-txt-container"> 
        <img src={HVAC} style={{opacity:"0.5"}}></img>
        <div className="content">
            <h4>Welcome to Phoenix Mechanical</h4>
            <a href="tel:437-324-7749" >(437)-324-7749</a>
        </div>
        </div>
            );
        }

const About = () =>{ 
    return (
    <div>
<div style={{textAlign:"left", fontSize: "130%"}} className="text">
    <p>Phoenix Mechanical System Services Limited (“Phoenix Mechanical”) is a commercial and
    industrial heating and air conditioning service provider, committed to four key
    principles: <b >professional service, long-term relationships, up-front pricing</b> and <b>safety</b>.</p>
    <p>Our professional technician team has an average of <b>10 years</b> of HVAC service experience in
    commercial and industrial HVAC field. All of team are fully trained, experienced and always put
    the safety as the priority. We provide HVAC design build, repair and maintenance services to
    the entire Southern Ontario Area including GTA, Niagara Region, Barrie, Keswick etc.</p>
    <p>Phoenix Mechanical is a fully licensed HVAC service provider. We are registered with WSIB and
    TSSA and covered by commercial liability insurance.</p>
    <h3>Our Services:</h3>
    <p>a. Always on-call 24/7 emergency repair service</p>
    <p> b. Scheduled maintenance to ensure efficient performance</p>
    <p>c. Replacement of existing HVAC equipment</p>
    <p>d. Installation of new HVAC equipment for new building projects</p>
    <p>e. Engineering and design of HVAC systems</p>
    <h3>Our Commitments:</h3>
    <p>a. Timely repair and maintenance service</p>
    <p>b. 24 hour /365 day emergency service</p>
    <p>c. Free professional assessments and up-front pricing</p>
</div>
    </div> );
}



const Contacts = () =>{
    return (
    <div style={{textAlign:"left"}} className="text">
    <h2>Need an HVAC Contractor in GTA Or Surrounding Area?</h2>
    <p>If you are interested in learning more about Phoenix Mechanical and how we can help with your commercial HVAC needs, please don't hesitate to contact us.</p>
    <p>We offer a no-charge consultation in which we will discuss your specific requirements and determine the optimal solution for your building.</p>
    <h2>Contact Information</h2>
    <div className="contact">  
        <div className="container"><h3>Phone</h3><a className="contacts" href="mailto: phoenixmechanicalsystems@gmail.com">phoenixmechanicalsystems@gmail.com</a></div>
        <div className="container"><h3>Email</h3><a className="contacts" href="tel:437-324-7749" >+1-(437)-324-7749</a></div>
        <div className="container"><h3>Address</h3><a className="contacts" >To be determined</a></div>
    </div>  
    </div>);
}

export default Navbar;
