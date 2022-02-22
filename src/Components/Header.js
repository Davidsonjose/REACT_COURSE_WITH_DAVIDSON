import react from "react";

function Header(params) {
  return (
    <div>
      <div className="container d-flex" style={{ paddingTop: "18%" }}>
        <div>
          <h1>
            My name is <span>Davidson jose</span>
          </h1>
          <h3>
            I am a <span> programmer</span>
          </h3>
          <p>Fullstack developer using javascript, react, nodejs&Express</p>
        </div>
        <div className="money">
          <img src="../images/prof.jpg" />
        </div>
      </div>
      ;
    </div>
  );
}

export default Header;
