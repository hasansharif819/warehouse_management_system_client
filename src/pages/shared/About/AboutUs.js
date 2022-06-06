import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './About.css';

const AboutUs = () => {
    return (
        <div className='FooterClass'>
            <PageTitle title="About"></PageTitle>
            
            <p>
                Hello!!!! I'm <strong>Sharif Hasan</strong> from <strong>Dhaka, Bangladesh.</strong>
                <br /> Studied at <strong>Institute of Science and Technology (IST)</strong> Dhanmondi, Dhaka. <br /> In <strong>Computer Science and Engineering (CSE)</strong> <br /> at <strong>Bachelor of Science (B.Sc.)</strong> <br /> final Semester. <br />
                My goal is to reach the highest achievement the of the <br /> <strong>Software Engineering</strong> field. <br /> <strong>My skills at present about Front-End Developer are as follows:- </strong>
                
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Java Script</li>
                    <li>React.JS</li>
                    <li>Firebase</li>
                    <li>Etc.</li>
                
                <strong>About Back-End-Developer</strong>
                
                    <li> Node.JS </li>
                    <li>Express.JS</li>
                    <li>Context API</li>
                
                and
                <strong>Database are:- </strong>
                
                    <li>NOSQL</li>
                    <li>MongoDb</li>
                    <li>MYSQL</li>
                
            </p>
            <h2>To know more about me</h2>
            <h6>Email: hs.sharif819@gmail.com</h6>    
            <h6>Contacts: +8801640911511</h6>        
                <a href="https://github.com/hasansharif819" target='_blank'><button className='btn btn-primary'>Git Hub</button></a>
                <a href="https://www.linkedin.com/in/sharif-hasan-073a58218/" target="_blank"> <button className='btn btn-success'>Linked In</button> </a>
        </div>
    );
};

export default AboutUs;