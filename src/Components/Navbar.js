import react from "react";
import {Link} from 'react-router-dom';

function Navbar(params) {
  return (
    <div>
      <div className="bg-dark p-3">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/">cd 
              Home
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/works">
              Works
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/project">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
