import './Experiences.css';
import intern from './intern.png';
import ms from './mlsa.png';
import ieee from './design.png';
import nitp from './nitp.png';

function Experiences(){ 
    return(
        < div className="containers">
            <div className="cards" style={{ color: "#00abf0" }}>
                <div className="contents">
                    <h2>Internship</h2>
                    <p>femowpfmkfmwpmfowfmpwofm
                    </p>
                    <a href="/">Certificate</a>
                </div>
                <div className="imagBx"><img src={intern} className='intern-img' />
                </div>
                <div className="txtBx">
                    <h2>SBPDCL Intern</h2>
                </div>
            </div>
        
                <div className="cards" style={{ color: "#00abf0" }}>
                    <div className="contents">
                        <h2>MLSA</h2>
                        <p>femowpfmkfmwpmfowfmpwofm
                        </p>
                        <a href="/">Certificate</a>
                    </div>
                    <div className="imagBx"><img src={ms} className='intern-img' />
                    </div>
                    <div className="txtBx">
                        <h2>MLSA</h2>
                    </div>
                </div>
            
                <div className="cards" style={{ color: "#00abf0" }}>
                    <div className="contents">
                        <h2>IEEE</h2>
                        <p>femowpfmkfmwpmfowfmpwofm
                        </p>
                        <a href="/">Certificate</a>
                    </div>
                    <div className="imagBx"><img src={ieee} className='intern-img'  sizes='1em'/>
                    </div>
                    <div className="txtBx">
                        <h2>IEEE SB NITP</h2>
                    </div>
                </div>
            
                <div className="cards" style={{ color: "#00abf0" }}>
                    <div className="contents">
                        <h2>Think India </h2>
                        <p>femowpfmkfmwpmfowfmpwofm
                        </p>
                        <a href="/">Certificate</a>
                    </div>
                    <div className="imagBx"><img src={nitp} className='intern-img' />
                    </div>
                    <div className="txtBx">
                        <h2>Think India SC NITP</h2>
                    </div>
                </div>
            </div>

    )
}

export default Experiences;