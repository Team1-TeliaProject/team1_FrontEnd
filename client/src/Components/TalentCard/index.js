import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { likeTalent, superlikeTalent } from '../../services/userService';

import './TalentCard.scss';

const TalentCard = ({ talent, userId, setStatus }) => {
  const handleLike = () => {
    likeTalent(userId, talent.id).then((response) => {
      if (response.data) {
        console.log('resss--', response.data);
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);
      }
    });
  };

  const handleSuperLike = () => {
    superlikeTalent(userId, talent.id).then((response) => {
      if (response.data) {
        console.log('resss--', response.data);
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);
      }
    });
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
    </section>
  );
};

export default TalentCard;
