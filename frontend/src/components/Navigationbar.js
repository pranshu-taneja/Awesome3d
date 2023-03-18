import React from "react";
import { BrowserRouter,Link} from "react-router-dom";
import './Navigationbar.css'


function Navigationbar() {
  return (
    <div>
      <BrowserRouter>
        <nav id="navigationbar" className="navhorizontal">
          <ul id="ulist" className="horUL">
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/homepage"}>Homepage</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>

    </div>
  );
}

export default Navigationbar;
