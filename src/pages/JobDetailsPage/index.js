import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiArrowBack, BiLike } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

import './JobDetailsPage.scss';

const JobDetailsPage = () => {
  const history = useHistory();

  // dummy data to be removed when conneted with the db
  const job = {
    company: 'B Company',
    location: 'Helsinki, Finland',
    title: 'Full stack developer',
    seniority: 'Junior',
    type: 'Full-time',
    deadline: '12-05-2021',
    description:
      'this is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',
    stack: ['react', 'javaScript', 'Typescript', 'scss'],
    image:
      'https://logo-logos.com/wp-content/uploads/2017/07/red-bull-logo.png',
  };

  const handleLike = () => {};

  const handleSuperLike = () => {};

  return (
    <div className="job-details">
      <BiArrowBack
        onClick={() => history.push('/homepage')}
        className="job-details__arrow"
      />
      <div className="job-details__content">
        <div className="job-details__image-div">
          <img alt="company" className="job-details__image" src={job.image} />
        </div>
        <div className="job-details__info">
          <div className="job-details__company-info">
            <h2 className="job-details__text job-details__text--name">
              {job.company}
            </h2>
            <p className="job-details__text job-details__text--location">
              {job.location}
            </p>
          </div>
          <div className="job-details__job-info">
            <h3 className="job-details__text job-details__text--title">
              {job.title}
            </h3>
            <div className="job-details__type-info">
              <p className="job-details__text job-details__text--type">
                {job.seniority}, {job.type}
              </p>
              <p className="job-details__text job-details__text--deadline">
                <b>Deadline: </b>
                {job.deadline}
              </p>
            </div>
            <h4 className="job-details__text job-details__text--desc">
              Description
            </h4>
            <h4 className="job-details__text ">{job.description}</h4>
            <div className="job-details__techs">
              {job.stack.map((item, index) => (
                <span key={index}>{`${item}, `}</span>
              ))}
            </div>
            <div className="job-details__actions">
              <BiLike onClick={handleLike} className="job-details__icon" />
              <FaHeart
                onClick={handleSuperLike}
                className="job-details__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
