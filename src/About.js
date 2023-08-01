import './About.css';
import group from './group.png';

function About(){
    return(
<section className='about' id="about"><div className="about-heading">
<img src={group} className='about-img'  />
</div>
<div className = "about-content">
    <h2 className='heading'>About<span>Me</span></h2>
    <h3>Code Afficionados</h3>
    <p>Passionate and innovative professional with a diverse skill set in blockchain development, Python programming, React framework, web development,app development, design,Google cloud, algorithmic problem-solving, and a deep enthusiasm for technology. I thrive in dynamic environments where I can apply my expertise to create impactful solutions and contribute to innovative projects. With a strong foundation in blockchain, Python, React, web development, and design, combined with my proficiency in Data Structures and Algorithms (DSA), I possess the versatility to tackle complex challenges and deliver exceptional results. Constantly seeking opportunities to learn and grow, I am driven to shape the future through my passion for technology.</p>
    {/* <a href ="/" className='btn'>Read More</a> */}
</div>
    
</section>
    )
}

export default About;
