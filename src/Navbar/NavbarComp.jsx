// import { Container, Dropdown, Nav, Navbar, Modal, Button } from 'react-bootstrap';
// import { IoSearch } from "react-icons/io5";
// import { IoMdContact } from "react-icons/io";
// import { FaFaceFrown,FaFaceGrinBeam } from "react-icons/fa6";
// import { PiUserCirclePlus,PiUserCircleLight  } from "react-icons/pi";
// import './NavbarComp.css';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';


// function NavbarComp() {

//   const [showDropdown, setShowDropdown] = useState(false);
//   const [logout, setLogOut] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleDropDownToggle = () => {
//     setShowDropdown((prev)=>!prev);
//   };
  
//   const signout = () => {
//     setLogOut((prevLogout) => !prevLogout); // Toggle the logout state
//   }
//   return (

//     <div className='navbar' >
//       <Navbar bg="light" data-bs-theme="light" fixed="top" >
//         <Link to={'./'}>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RHSOacKMp98Ix4_Sgn5tvjs_bBxX4Row7A&usqp=CAU" width="30px" height="30px" style={{ marginLeft: "20px" }} />
//         </Link>
//         <Container>
//           <Navbar.Brand href="#home">Home</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#browse" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Browse</Nav.Link>
//             <Nav.Link href="#shows" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>TV-shows</Nav.Link>
//             <Nav.Link href="wishlist" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Wishlist</Nav.Link>
//             <Nav.Link href="#games" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Games</Nav.Link>
//           </Nav>
//           <p className='wel-text'>{logout? "Welcome" :""}</p>
//           <Nav>
//             <div >
//               <div onClick={handleDropDownToggle}>
    
//             {/* {logout  ?(<FaFaceGrinBeam style={{width:"30px", height:"30px"}}/>):(<FaFaceFrown style={{width:"30px", height:"30px"}}/>)} */}
//             {logout  ?(<PiUserCircleLight  style={{width:"30px", height:"30px"}}/>):(<PiUserCirclePlus style={{width:"30px", height:"30px"}}/>)}

//             </div>
//             {showDropdown && (
//             <div className='flex flex-col dropDownProfile'>
//               <ul className='flex flex-col gap-4' style={{ listStyleType: "none" }}>
//                 <li >
//                   {logout ? 
//                   <Link to='/profile'>
//                   Profile
//                   </Link>: <Link to="/"></Link>}
//                   </li>
//                 <li onClick={()=>{handleShow(); signout(); setShowDropdown(); } }>
//                   <Link>
//                   {logout? "Sign Out": "Sign In"}   
//                   </Link>
//                 </li>
//               </ul>
//               <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                   <Button variant="secondary" onClick={handleClose}>
//                     Close
//                   </Button>
//                   <Button variant="primary" onClick={handleClose}>
//                     Save Changes
//                   </Button>
//                 </Modal.Footer>
//               </Modal>
//             </div>
//             )}
//             </div>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>

//   )
// }
// export default NavbarComp


import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { PiUserCirclePlus, PiUserCircleLight } from "react-icons/pi";
import './NavbarComp.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavbarComp() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const initialValues= {email:"", password:""};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDropDownToggle = () => {
    setShowDropdown((prev) => !prev);
  };
  
  const toggleSignIn = () => {
    if (isLoggedIn) {
      // If the user is logged in, toggle the dropdown menu
      setShowDropdown((prev) => !prev);
    } else {
      // If the user is not logged in, show the modal
      handleShow();
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const signIn = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormValues({...formValues, [name]:value});
  };
  // if (Object.keys(formErrors).length === 0) {
  //   signIn(); // Call signIn if there are no validation errors
  // }
  useEffect(()=>{
    if(Object.keys(formErrors).length===0 & isSubmit){
      console.log(formValues);
      signIn();
    }
  },[formErrors]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate=(values)=>{
    const errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email="Email is required"
    }
     if(!values.password){
      errors.password ="Password is required"
    }else if (values.password.length<4){
      errors.password = "Password should be more than 4 characters"
    }
    return errors;
  }

  return (
    <div className='navbar'>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Link to={'/'}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RHSOacKMp98Ix4_Sgn5tvjs_bBxX4Row7A&usqp=CAU"
            width="30px"
            height="30px"
            style={{ marginLeft: "20px" }}
            alt="logo"
          />
        </Link>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#browse" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Browse</Nav.Link>
            <Nav.Link href="#shows" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>TV-shows</Nav.Link>
            <Nav.Link href="wishlist" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Wishlist</Nav.Link>
            <Nav.Link href="#games" style={{ paddingRight: "20px", paddingLeft: "20px" }} className='nav-style'>Games</Nav.Link>
          </Nav>
          <Nav>
            <p style={{marginRight:"10px"}}>{isLoggedIn? `Welcome ${formValues.username}`:""}</p>
            <div onClick={toggleSignIn} style={{ cursor: "pointer" }}>
              {isLoggedIn ? (
                <PiUserCircleLight style={{ width: "30px", height: "30px" }} />
              ) : (
                <PiUserCirclePlus style={{ width: "30px", height: "30px" }} />
              )}
            </div>
            {isLoggedIn && showDropdown && (
              <div className='flex flex-col dropDownProfile'>
                <ul className='flex flex-col gap-4' style={{ listStyleType: "none" }}>
                  <li>
                    <Link to='/profile'>Profile</Link>
                  </li>
                  <li onClick={signOut}>
                    <Link>Sign Out</Link>
                  </li>
                </ul>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit} >
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" id='username' name='username' value={formValues.username} onChange={handleChange}/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" id='email' name='email' value={formValues.email} onChange={handleChange}/>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <label htmlFor="password"><b>Password</b>  </label>
            <input id="password" name="password" type="password" value={formValues.password} onChange={handleChange}/>
            <p style={{color:"red"}}>{formErrors.password}</p>
            <button className="bg-primary" type='submit'>Submit</button>
          </form>
          {/* Include your sign-in form or logic here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={signIn}>
            Sign In
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavbarComp;
