import react from "react";
import { about } from "./AboutDetail";
// console.log(about)

function About() {
  return (
    <div className="bg-light overall">
      <div className="pt-3">
        <h3 className="text-center teams">__Teams</h3>
      </div>
      <div className="row p-5">
        {about.map((data) => {
          console.log(data);
          return (
            <div className="col-md-4 diver">
              <div className="card diver2">
                <div className="text-center p-3">
                  <img
                    className="text-center"
                    src={data.image}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <p>{data.description}</p>
                </div>
                <button className="btn btn-success">Read more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
