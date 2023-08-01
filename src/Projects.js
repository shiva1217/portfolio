import './Projects.css';
import webdev from './web dev.PNG';
import calculator from './Capture.PNG';
import splash from './Splash 1.jpg';
import pic from './Short.jpg';
import web from './web.PNG';

function Projects(){
    return(<><div className="projects">
        <div className="project">
            <div className="card">
                <div className="img-bx">
                    <img src={webdev} className='p-img' />
                </div>
                <div className="content">
                    <div className="details">
                        <h2>CinemaAdda</h2>
                        {/* <br></br><span>Web Development</span> */}
                        <div className='data'>
                            {/* <h3>Description</h3> */}
                        </div>
                        <div className='actionBtn'>
                            <a href='https://shiva1217.github.io/cinemaadda/' className='button'>View</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="img-bx">
                    <img src={web} className='p-img' />   </div>
                <div className="content">
                    <div className="details">
                        <h2>Azure Static webpage</h2>
                        <div className='data'>
                            {/* <h3>Description</h3> */}
                        </div>
                        <div className='actionBtn'>
                            <a href='https://shiva1217.github.io/my-profile/' className='button'>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div className="project1">
            <div className="card">
                <div className="img-bx">
                    <img src={splash} className='p-img' />    </div>
                <div className="content">
                    <div className="details">
                        <h2>UrbanHues</h2>
                        <div className='data'>
                            {/* <h3>Description</h3> */}
                        </div>
                        <div className='actionBtn'>
                            <a href='https://www.figma.com/file/Aj9nLfWdoqXiafB9tuaP0T/UrbanHues?type=design&t=jLWKc9CzNCEtEwUl-6' className='button'>View</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="img-bx">
                    <img src={pic} className='p-img' />    </div>
                <div className="content">
                    <div className="details">
                        <h2>MetaNest</h2>
                        <div className='data'>
                            {/* <h3>Description</h3> */}
                        </div>
                        <div className='actionBtn'>
                            <a href='https://github.com/shiva1217/flutter' className='button'>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="project2">
        <div className="card">
            <div className="img-bx">
                <img src={calculator} className='p-img' />   </div>
            <div className="content">
                <div className="details">
                    <h2>Calculator</h2>
                    <div className='data'>
                        {/* <h3>Description</h3> */}
                    </div>
                    <div className='actionBtn'>
                        <a href='https://shiva1217.github.io/calculator/' className='button'>View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    
    
    )
}

export default Projects;