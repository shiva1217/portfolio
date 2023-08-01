import './Header.css';

function Header(){
    return(
        <header className="header">
            <a href="/" className="logo">Shivangi<span>S</span>ingh</a>
            <nav className="navbar">
            <a href="/" className="active" >Home</a>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Projects</a>
            <a href="/">Experience</a>
            {/* <a href="/">Certifications</a> */}
            <a href="/">Contact</a>
            </nav>
            {/* <div className="bx bx-moon" id="darkMode-icon"></div> */}
        </header>
    )
}

export default Header;