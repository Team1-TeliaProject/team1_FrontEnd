import React from 'react';

import './MatchesPage.scss';
import {Col, Row} from 'react-bootstrap';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/all';
import Jobcard from '../../Components/JobscardEmployee';
import ApplicantCard from '../../Components/ApplicantCard';

const Swipepage = ({type, data}) => {

    function previous(){
        console.log('GET PREVIOUS');
    }

    function next(){
        console.log('GET NEXT');
    }

    function handleLike(){

    }

    function handleSuperLike(){

    }
    return <Row>
        <Col xs={2}>
            <button onClick={previous} className='job-toggle-btn'>
                <AiOutlineArrowLeft size={70}/>
            </button>
        </Col>
        <Col xs={8}>
            {
                type === 'job' ? <Jobcard
                    employer={data}
                    handlelike={handleLike()}
                    handleSuperLike={handleSuperLike()}
                /> : ''
            }
            {
                type === 'talent' ? <ApplicantCard
                    applicant={data}
                    handlelike={handleLike()}
                    handleSuperLike={handleSuperLike()}
                /> : ''
            }

        </Col>
        <Col xs={2}>
            <button onClick={next} className='job-toggle-btn'>
                <AiOutlineArrowRight size={70}/>
            </button>
        </Col>
    </Row>;
};

export default Swipepage;
