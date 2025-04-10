import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

// Styled Components MUST come before using them
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;

      img {
        width: 100px;
        height: auto;
      }
    }

    .toggle {
      display: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;

    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;

        &:hover {
          color: #023e8a;
        }
      }

      &:first-of-type a {
        color: #023e8a;
        font-weight: 900;
      }
    }
  }

  .login-button {
    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 1rem;
      border: none;
      color: white;
      background-color: #48cae4;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #023e8a;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .toggle {
        display: block;
      }
    }

    ul {
      display: none;
    }

    .login-button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: absolute;
  top: ${({ state }) => (state ? "80px" : "-400px")};
  left: 0;
  right: 0;
  background-color: white;
  z-index: 999;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  .close-btn {
    display: flex;
    justify-content: flex-end;
    font-size: 1.8rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: 1rem 0;
      text-align: center;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: color 0.2s;

        &:hover {
          color: #023e8a;
        }
      }

      &:first-of-type a {
        font-weight: 900;
        color: #023e8a;
      }
    }
  }
`;

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLogedIn(false)
      }else{
        setIsLogedIn(true)
      }
    })

    return () => unsubscribe()
  }, [])


  const handleLogout = async () => {
    const unsubscribe = onAuthStateChanged(auth,async (user) => {
      if (!user) {
        navigate('/login')
      }else{
        try {
          await signOut(auth)
          setIsLogedIn(false)
          window.location.reload();
        } catch (error) {
          console.error("Logout Error:", error)
        }
      }
    })
    
  }

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="Logo" />
            ParvatPrawasi
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rentals">Vehicle Rentals</a>
          </li>
          <li>
            <a href="/packages">Packages</a>
          </li>
          <li>
            <a href="/activity">Activities</a>
          </li>
        </ul>
        <div className="login-button">
          <button onClick={()=>handleLogout()}>{
            isLogedIn ? "Log Out" : "Sign In"
            }</button>
        </div>
      </Nav>

      <ResponsiveNav state={navbarState}>
        <div className="close-btn">
          <VscChromeClose onClick={() => setNavbarState(false)} />
        </div>
        <ul>
          <li>
            <a href="/" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          {/* <li>
            <a href="/stays" onClick={() => setNavbarState(false)}>
              Stays
            </a>
          </li> */}
          <li>
            <a href="/rentals" onClick={() => setNavbarState(false)}>
              Vehicle Rentals
            </a>
          </li>
          <li>
            <a href="/packages" onClick={() => setNavbarState(false)}>
              Packages
            </a>
          </li>
          <li>
            <a href="/activity" onClick={() => setNavbarState(false)}>
              Activities
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}
