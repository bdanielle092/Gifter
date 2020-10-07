import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                GIFTER
      </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Feed
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts/add" className="nav-link">
                        New Post
          </Link>
                </li>
                {/*                 
                <li className="nav-item">
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                </li> */}

                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                      </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                      </Link>
                </li>

            </ul>
        </nav>
    );
};

export default Header;