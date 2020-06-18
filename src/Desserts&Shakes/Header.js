import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from'react-bootstrap';
import "./LoginPage.css"
const Header = () => {
    const { state: { cart } } = useContext(CartContext)
    return (
      <div>
      <Navbar variant="primary" expand="lg" className="header">
        <Navbar>
          <Navbar.Brand href="#">
          <h2 style={{ fontSize: 'xx-large' }} className="text-dark navbar-brand" id="hov">
                             <img height="40px" src="http://pluspng.com/img-png/milkshake-png-hd-cikolatal-milkshake-cikolatal-milkshake-518.png" />Desserts&Shakes</h2>
      </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle className="btn btn-dark " aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/"style={{textDecoration:'none'}} ><Nav.Link className=" text-dark font-weight-bold " href="#home">Home</Nav.Link></Link>
            <Link to='/menu'style={{textDecoration:'none'}} ><Nav.Link className=" text-dark font-weight-bold" href="#menu">Menu</Nav.Link></Link>
            <Link to="/loginpage"style={{textDecoration:'none'}} ><Nav.Link className=" text-dark font-weight-bold" href="#login">Sign In</Nav.Link></Link>
            {/* <Link to="/signup"><Nav.Link className="btn btn-dark text-light font-weight-bold" href="#About Us">Sign Up</Nav.Link></Link> */}        
            <Link to="/cart"style={{textDecoration:'none'}} ><Nav.Link className=" text-dark font-weight-bold" href="#Cart">Cart({cart.length})</Nav.Link></Link>
            <Link to="/Contact"style={{textDecoration:'none'}} ><Nav.Link className=" text-dark font-weight-bold" href="#Contact Us">Get in touch</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    //     <header className="pt-2">
    //         <nav className="navbar navbar-expand justify-content-between text-black" >
    //             <h4 style={{ fontSize: 'xx-large' }} className="text-black navbar-brand">
    //                 <img height="40px" src="http://pluspng.com/img-png/milkshake-png-hd-cikolatal-milkshake-cikolatal-milkshake-518.png" />Desserts&Shakes</h4>
    //                 <Navbar.Toggle className="bg-dark" aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto">
  
    //             <ul className="navbar-nav ">
    //                 <Link to="/">
    //                     <li className="nav-item pr-4">
    //                         <a className="nav-link  text-dark font-weight-bold" href="#">Home</a>
    //                     </li>
    //                 </Link>
    //                 <Link to='/menu'>
    //                 <li className="nav-item pr-4">
    //                         <a className="nav-link  text-dark font-weight-bold" href="#">Menu</a>
    //                     </li>
    //                     </Link>
    //                 <Link to="/loginpage">
    //                     <li className="nav-item pr-4">
    //                         <a className=" nav-link text-dark font-weight-bold" href="#">Login</a>
    //                     </li></Link>
    //                 <Link to="/signup">
    //                     <li className="pr-4 nav-item">
    //                         <button className="btn btn-dark">Sign Up</button>
    //                     </li></Link>
    //                 <Link to="/cart">
    //                     <li className="pr-4 nav-item">
    //                         <a className=" nav-link text-dark font-weight-bold">MyCart({cart.length})</a>
    //                     </li></Link>
    //                     <li className="nav-item pr-4">
    //                         <Link to="/Contact"><a className=" nav-link text-dark font-weight-bold" href="#">Get in touch</a></Link>
    //                     </li>
    //             </ul>
    //             </Nav>
    //             </Navbar.Collapse>
    // </nav>
    
    //     </header>
    )
}
export default Header;