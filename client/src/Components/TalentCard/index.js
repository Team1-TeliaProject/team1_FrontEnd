import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';

import Button from '../Button';
import { useMatch } from '../../hooks/useMatch';
import { createMatch } from '../../services/matchService';
import { likeTalent, superlikeTalent } from '../../services/userService';

import './TalentCard.scss';
Modal.setAppElement('#root');
const TalentCard = ({ talent, userId, userType, setStatus, setPage }) => {
  const [isMatched, isSuperMatched, setIsLiked] = useMatch(userId, userType, talent);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchType, setMatchType] = useState('');

  const handleLike = () => {
    likeTalent(userId, talent.id).then((response) => {
      if (response.data) {
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);
        setIsLiked(true);
      }
    });

    if (isMatched) {
      const matchInfo = { companyId: userId, talentId: talent.id, type: 'match' };
      console.log('match-info', matchInfo);
      createMatch(matchInfo).then((response) => {
        if (response.data) {
          setMatchType('match');
          setIsModalOpen(true);
        }
      });
    }

    if (isSuperMatched) {
      const matchInfo = { companyId: userId, talentId: talent.id, type: 'supermatch' };
      console.log('match-info', matchInfo);
      createMatch(matchInfo).then((response) => {
        if (response.data) {
          setMatchType('super-match');
          setIsModalOpen(true);
        }
      });
    }
    setTimeout(() => {
      setIsLiked(false);
    }, 500);
  };

  const handleSuperLike = () => {
    superlikeTalent(userId, talent.id).then((response) => {
      if (response.data) {
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);
        setIsLiked(true);
      }
    });

    if (isMatched) {
      const matchInfo = { companyId: userId, talentId: talent.id, type: 'match' };
      console.log('match-info', matchInfo);
      createMatch(matchInfo).then((response) => {
        if (response.data) {
          setMatchType('match');
          setIsModalOpen(true);
        }
      });
    }

    if (isSuperMatched) {
      const matchInfo = { companyId: userId, talentId: talent.id, type: 'supermatch' };
      console.log('match-info', matchInfo);
      createMatch(matchInfo).then((response) => {
        if (response.data) {
          setMatchType('super-match');
          setIsModalOpen(true);
        }
      });
    }
    setTimeout(() => {
      setIsLiked(false);
    }, 500);
  };

  const customStyles = {
    content: {
      background: '#17252a',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <section className="talent-card">
      <div className="talent-card__main">
        <div className="talent-card__head">
          <img className="talent-card__avatar" src={talent.photo} alt="talent profile" />
          <div className="talent-card__talent-info">
            <h2 className="talent-card__name">{`${talent.firstName} ${talent.lastName}`}</h2>
            <p className="talent-card__text talent-card__text--location">{talent.location}</p>
          </div>
        </div>
        <p className="talent-card__text talent-card__text--position">{talent.title}</p>
        <p className="talent-card__text talent-card__text--seniority">
          {talent.level}, &nbsp;
          {talent.type}
        </p>
        <div className="talent-card__skills">
          {talent.techs.map((item, index) => (
            <p className="talent-card__text talent-card__text--skill" key={index}>
              {item}, &nbsp;
            </p>
          ))}
        </div>
        <p className="talent-card__text talent-card__text--description">{talent.about}</p>
      </div>
      <div className="talent-card__icons">
        <FaHeart onClick={handleSuperLike} className="talent-card__icon " />
        <FaThumbsUp onClick={handleLike} className="talent-card__icon " />
      </div>
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
  );
};

export default TalentCard;
