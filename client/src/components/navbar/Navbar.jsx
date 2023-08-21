import React, { useEffect,useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode'
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import Avatar from '../avatar/avatar';
import ham from '../../assets/ham.png'
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {

   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);
  var User = useSelector((state) => (state.currentUserReducer));
  // console.log(user);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  useEffect(() => {
    const token=User?.token
    if(token){
      const decodedToken=decode(token)
      if(decodedToken.exp*1000<new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])

  const toggle=()=>{
    setNavbarOpen(!navbarOpen)
  }
 
  
 


  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='logo'></img>
        </Link>
        <button className='nav-item  toggle' onClick={toggle}><img src={ham} alt='logo'></img></button>
        
        {
          navbarOpen ? (<div className="navbar small-dis"><Link to='/About' className='nav-item nav-btn'>About</Link>
        <Link to='/Products' className='nav-item nav-btn'>Products</Link>
        <Link to='/Fteams' className='nav-item nav-btn'>For Teams</Link>

        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} alt="search" className="search-icon" />
        </form>

        {User === null ? <Link to='/Auth' className='nav-items nav-links'>Log in</Link> :
          <>
            <Avatar backgroundColor='#009dff' px='4px' py='10px' color='white' borderRadius='50%' fontSize='20px' textAlign='center' cursor='pointer' ><Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none' }} >{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>}</div>) : <></>
        }
        <div className="large-dis navbar"><Link to='/About' className='nav-item nav-btn'>About</Link>
        <Link to='/Products' className='nav-item nav-btn'>Products</Link>
        <Link to='/Fteams' className='nav-item nav-btn'>For Teams</Link>

        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} alt="search" className="search-icon" />
        </form>

        {User === null ? <Link to='/Auth' className='nav-items nav-links'>Log in</Link> :
          <>
            <Avatar backgroundColor='#009dff' px='4px' py='10px' color='white' borderRadius='50%' fontSize='20px' textAlign='center' cursor='pointer' ><Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none' }} >{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>}</div>
      </div>
    </nav>
  )

}
export default Navbar;