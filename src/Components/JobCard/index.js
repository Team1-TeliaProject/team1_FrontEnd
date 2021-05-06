import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '../Button';
import { FaHeart } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import {
  getOneTalent,
  likeJob,
  superlikeJob,
} from '../../services/userService';
import { createMatch } from '../../services/matchService';
import { checkMatch } from '../../Utils/checkMatch';

import './JobCard.scss';

Modal.setAppElement('#root');
const Jobcard = ({
  job,
  userId,
  userType,
  setStatus,
  setPage,
  setIsMatched,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchType, setMatchType] = useState('');

  const handleLike = async () => {
    likeJob(userId, job.id).then(async (response) => {
      if (response.data) {
        console.log(response.data);
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);

        const { data } = await getOneTalent(userId);

        const isMatched = checkMatch(
          userId,
          userType,
          job.company,
          data.likes,
          data.superLikes,
          null,
          job.id
        );
        if (isMatched === 'match') {
          const matchInfo = {
            companyId: job.company.id,
            talentId: userId,
            type: 'match',
          };
          createMatch(matchInfo).then((response) => {
            if (response.data) {
              setMatchType('match');
              setIsModalOpen(true);
              setIsMatched(true);
              //create chat group/ function here
            }
          });
        }

        if (isMatched === 'supermatch') {
          const matchInfo = {
            companyId: job.company.id,
            talentId: userId,
            type: 'supermatch',
          };
          createMatch(matchInfo).then((response) => {
            if (response.data) {
              setMatchType('super-match');
              setIsModalOpen(true);
              setIsMatched(true);
              //create chat group/ function here
            }
          });
        }
      }
    });
  };

  const handleSuperLike = () => {
    superlikeJob(userId, job.id).then(async (response) => {
      if (response.data) {
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);

        const { data } = await getOneTalent(userId);

        const isMatched = checkMatch(
          userId,
          userType,
          job.company,
          data.likes,
          data.superLikes,
          null,
          job.id
        );

        if (isMatched === 'match') {
          const matchInfo = {
            companyId: job.company.id,
            talentId: userId,
            type: 'match',
          };
          createMatch(matchInfo).then((response) => {
            if (response.data) {
              setMatchType('match');
              setIsModalOpen(true);
              setIsMatched(true);
              //create chat group/ function here
            }
          });
        }

        if (isMatched === 'supermatch') {
          const matchInfo = {
            companyId: job.company.id,
            talentId: userId,
            type: 'supermatch',
          };
          createMatch(matchInfo).then((response) => {
            if (response.data) {
              setMatchType('super-match');
              setIsModalOpen(true);
              setIsMatched(true);
              //create chat group/ function here
            }
          });
        }
      }
    });
  };

  const customStyles = {
    content: {
      background: '#17252a',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    job && (
      <section className="jobcard">
        {job ? (
          <div>
            <div className="jobcard__main">
              <div className="jobcard__head">
                <img
                  className="jobcard__avatar"
                  src={job.company && job.company.logo}
                  alt="company logo"
                />
                <div className="jobcard__job-info">
                  <h2 className="jobcard__company">
                    {job.company && job.company.name}
                  </h2>
                  <p className="jobcard__text jobcard__text--location">
                    {job.location}
                  </p>
                </div>
              </div>
              <p className="jobcard__text jobcard__text--position">
                {job.title}
              </p>
              <p className="jobcard__text jobcard__text--seniority">
                {job.level}, &nbsp;
                {job.type}
              </p>
              <div className="jobcard__skills">
                {job.techs.map((item, index) => (
                  <p className="jobcard__text jobcard__text--skill" key={index}>
                    {item}, &nbsp;
                  </p>
                ))}
              </div>
              <p className="jobcard__text jobcard__text--description">
                {job.description}
              </p>
              <h4 className="jobcard__deadline">
                <b>Deadline: &nbsp;</b>
                {job.deadline}
              </h4>
            </div>
            <div className="jobcard__icons">
              <div className="jobcard__icon-div">
                <FaHeart onClick={handleSuperLike} className="jobcard__icon " />
                <span>Super-like</span>
              </div>
              <div className="jobcard__icon-div">
                <FaThumbsUp onClick={handleLike} className="jobcard__icon " />
                <span>Like</span>
              </div>
            </div>
          </div>
        ) : null}
        <Modal isOpen={isModalOpen} style={customStyles}>
          <div onClick={() => setIsModalOpen(false)} className="close">
            X
          </div>
          <div className="TC-content">
            <h1 className="TC-content__title">{`It's a ${matchType}`}</h1>
            <p className="TC-content__text">
              {`Congratulations!! it is a ${matchType}. You can now start conversation`}
            </p>
            <div className="TC-content__btn-div">
              <Button
                modifier="light"
                text="Start Conversation"
                handleClick={() => setPage('messages')}
              />
            </div>
          </div>
        </Modal>
      </section>
    )
  );
};

export default Jobcard;
