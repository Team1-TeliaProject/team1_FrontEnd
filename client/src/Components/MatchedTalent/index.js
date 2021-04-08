import React from 'react';
import './MatchedTalent.scss';

import ChatButton from '../ChatButton';
import InfoButton from '../InfoButton';
import {Container, Row, Col} from 'react-bootstrap';


const MatchedTalent = ({ match, modifier, chatClicked, infoClicked }) => {
  return (
          <Container >
              <Row className='matched-job'>
                  <Col className='col-box square {modified}'></Col>
                  <Col xs={5} className='col-content'>
                      <Container className='inner-container'>
                          <Row><Col><p className='job-title'>{match.talentName}</p></Col></Row>
                          <Row><Col><p className='company-name'>{match.location}</p></Col></Row>
                      </Container>
                  </Col>
                  <Col xs={2} className='col-content'>
                      <Container className='inner-container'>
                          <Row><Col><p className='job-position-level'>{match.positionLevel}</p></Col></Row>
                      </Container>
                  </Col>
                  <Col xs={2} className='col-content last-col'>
                      <Container className='inner-container'>
                          <Row>
                              <Col style={{height:'100%', width:'100%', padding:0}}>
                                  <ChatButton handleClick={chatClicked} modifier={'full-height'}></ChatButton>
                              </Col>
                          </Row>
                          <Row>
                              <Col style={{height:'100%', width:'100%', padding:0}}>
                                  <InfoButton handleClick={infoClicked} modifier={'full-height'}></InfoButton>
                              </Col>
                          </Row>
                      </Container>
                  </Col>
              </Row>
          </Container>
  );
};

export default MatchedTalent;
