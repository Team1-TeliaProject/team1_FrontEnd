import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

import './TalentCard.scss';

const TalentCard = ({ talent, handleSuperLike, handlelike }) => {
  return (
    <section className="talent-card">
      <div className="talent-card__main">
        <img className="talent-card__avatar" src={talent.image} alt="talent logo" />
        <h2 className="talent-card__name">{`${talent.firstName} ${talent.lastName}`}</h2>
        <div className="talent-card__head">
          <p className="talent-card__text talent-card__text--position">{talent.title}</p>
          <p className="talent-card__text talent-card__text--location">{talent.location}</p>
        </div>
        <p className="talent-card__text talent-card__text--seniority">
          {talent.seniority}, &nbsp;
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
        <BiLike onClick={handlelike} className="talent-card__icon " />
      </div>
    </section>
  );
};

export default TalentCard;
