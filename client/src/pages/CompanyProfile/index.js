import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Components/Button';
import profilePic from '../../Assets/proifle.jpeg';
import Job from '../../Components/Job';
import { getOneCompany } from '../../services/userService';
import { getJobsByCompany } from '../../services/jobService';

import './CompanyProfile.scss';
const CompanyProfile = ({ match }) => {
  const id = match.params.id;
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    getOneCompany(id).then((response) => {
      if (response.data) {
        setUser(response.data);
      }
    });

    getJobsByCompany(id).then((response) => {
      if (response.data) {
        setJobs(response.data);
      }
    });
  }, [status]);

  return (
    user && (
      <div className="company">
        <div className="company__profile-div">
          <img
            className="company__image"
            src={user.logo ? user.logo : profilePic}
            alt="profile picture"
          />
        </div>

        <div className="company__content">
          <div className="company__info">
            <h2 className="company__text">{user.name}</h2>
            <div className="company__contact">
              <p className="company__text company__text--email">Email: {user.email}</p>
              {user.website && (
                <p className="company__text company__text--phone">Website: {user.website}</p>
              )}
            </div>

            {user.location && (
              <p className="company__text company__text--location"> {user.location}</p>
            )}

            {user.about && (
              <div>
                <p className="company__text">About</p>
                <p className="company__text company__text--about">{user.about}</p>
              </div>
            )}

            <div className="company__btn-div">
              <Button
                handleClick={() => history.push(`/profile/${id}/vacancy/addnew`)}
                text="Add a Job"
                modifier="light"
              />
              <div style={{ width: '20px' }}></div>
              <Button
                handleClick={() => history.push(`/profile/edit/${user.id}/${user.userType}`)}
                text="Edit Profile"
                modifier="light"
              />
            </div>
          </div>
          <div className="company__jobs">
            {jobs.length > 0 ? (
              jobs.map((job) => <Job setStatus={setStatus} key={job.id} job={job} />)
            ) : (
              <h3 style={{ textAlign: 'center' }}>No jobs to show</h3>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CompanyProfile;
