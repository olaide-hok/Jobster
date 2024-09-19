import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import {Link} from 'react-router-dom';
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Welcome to a platform that allows job seekers to sign up
                        and manage their job search information. Users can
                        provide details such as the position they are applying
                        for, the company's name, job location, status of their
                        application (pending, declined, interviewing), and the
                        type of job (full-time, part-time, remote, internship).
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
