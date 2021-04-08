import React from 'react';

import './MatchesPage.scss';
import {Col, Row} from 'react-bootstrap';
import MatchedTalent from '../../Components/MatchedTalent';
import MatchedJob from '../../Components/MatchedJob';

const Matchespage = ({type, data}) => {

    function showChat(chat){
        console.log('Show Chat : ' + chat);
    }

    function showInfo(info){
        console.log('Show Info ' + info);
    }
    return data.map((match, i) =>{
        return<Row key={i}>
            <Col>
                {
                    type === 'talent' ?  <MatchedTalent
                        match ={match}
                        chatClicked={showChat}
                        infoClicked={showInfo}
                        modifier={''}
                    />: ''
                }

                {
                    type === 'jobs' ?  <MatchedJob
                        match ={match}
                        chatClicked={showChat}
                        infoClicked={showInfo}
                        modifier={''}
                    />: ''
                }
            </Col>
        </Row>
    });
};

export default Matchespage;
