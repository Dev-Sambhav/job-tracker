import moment from "moment";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  // format the date
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
            <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
            <JobInfo icon={<FaCalendarAlt/>} text={date}/>
            <JobInfo icon={<FaBriefcase/>} text={jobType}/>
            <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => setEditJob(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => deleteJob(_id)}
              className="btn delete-btn"
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
