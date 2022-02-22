import react from "react";

function Navbar(params) {
  return (
    <div>
      <div className="bg-dark p-3">
        {" "}
        <ul class="nav justify-content-end">
          {" "}
          <li class="nav-item">
            {" "}
            <a class="nav-link" aria-current="page" href="#">
               Home {" "}
            </a>
            {" "}
          </li>
          {" "}
          <li class="nav-item">
            {" "}
            <a class="nav-link" href="#">
               About {" "}
            </a>
            {" "}
          </li>
          {" "}
          <li class="nav-item">
            {" "}
            <a class="nav-link" href="#">
               Works {" "}
            </a>
            {" "}
          </li>
          {" "}
          <li class="nav-item">
            {" "}
            <a class="nav-link" href="#">
               Contact {" "}
            </a>
            {" "}
          </li>
          {" "}
          <li class="nav-item">
             <a class="nav-link">Projects</a>
            {" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
