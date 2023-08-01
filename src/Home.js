import './Home.css';
import profile from './profile.png';


function Home(){
    return(
    <section className='home' id='home'>
        <div className='home-content'>
            <h3>Hello, I am</h3>
            <h1>Shivangi Singh</h1>
            <p>a, 3rd year EE Undergrad @ NIT Patna<br></br></p>
            
                <span>Web Developer | App Developer | Open Source Enthusiast <br></br>
                Graphic Designer | GCP | Microsoft Learn Student Ambassador</span>
            

            <div className='social-media'>
                <a href='https://www.facebook.com/shivangi1217'><i className='bx bxl-facebook'></i></a>
                <a href='https://www.instagram.com/shivangis1217/'><i className='bx bxl-instagram-alt'></i></a>
                <a href='https://www.linkedin.com/in/shivangisingh1217/'><i className='bx bxl-linkedin-square'></i></a>
                <a href='https://twitter.com/home'><i className='bx bxl-twitter'></i></a>
                <a href='https://github.com/shiva1217'><i className='bx bxl-github'></i></a>
            </div>

            <a href='/' className='btn'>Download CV</a>
        </div>

       {/* <div className='profession-container'>
        <div className='profession-box'>
            <div className='profession' style={{ "--i": 0 }}>
            <i className='bx bx-code-alt'></i>
            <h3>webtyry</h3></div>
            <div className='profession' style={{ "--i": 1 }}>
            <i className='bx bx-code-alt'></i>
            <h3>webrytry</h3></div>
            <div className='profession' style={{ "--i": 2 } }>
            <i className='bx bx-code-alt'></i>
            <h3>webeeetrtrytty</h3></div>
            <div className='profession' style={{ "--i": 3 } }>
            <i className='bx bx-code-alt'></i>
            <h3>webrfetryt</h3></div>
             <div className='circle'></div>
        </div>
        <div className='overlay'></div>
       </div> */}

       
       <img src={profile} className='home-img'  />
       

    </section>
    )
    }

    export default Home;