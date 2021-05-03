import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <a href="aboutUs">ABOUT US</a>
            <a href="forYou">FOR YOU</a>
            <a href="services">SERVICES</a>            
            <a href="blog" className="active">BLOG</a>            
            <a href="vlog">VLOG</a>            
            <a href="contact">CONTACT</a>            
        </div>
    )
}

export default Navbar;