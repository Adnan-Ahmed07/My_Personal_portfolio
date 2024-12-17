import React from 'react'
// import pdf from "../pdf/resume.pdf";
import adnan from './Data/adnan.json'


const Home = () => {
  


  return (
    <>
    <div className="container home">
      <div className="left" >
      
   <h1>Adnan</h1>
 
          {/* //  <a
          //   href={pdf}
          //   download="Resume.pdf"
          //   className="btn btn-outline-warning my-3"
          // >
          //   Download Resume
          // </a>  */}
          
          </div>
       
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${adnan.imgSrc}`} alt="adnan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
