import main from "../assets/images/main-job.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracker</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            voluptatibus, unde, autem expedita modi perspiciatis voluptates
            quasi consequatur nesciunt ab adipisci itaque corrupti, dolor illo
            numquam temporibus! Numquam esse laudantium quo tempore expedita,
            ipsum nulla provident incidunt reiciendis culpa magni.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
