import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './League.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    // console.log(props.league);
    const { idLeague,strLeague, strSport, strLeagueAlternate } = props.league;
    const[logo,setLogo]=useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLogo(data.leagues[0]))
    } , [idLeague])

    return (
        <Col xs={12} md={4}>
            <Card className="league-card">
                <Card.Img variant="top" src={logo.strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <p>Sports Type: {strSport}</p>
                    <Button className="btn"><Link to={`/league/${idLeague}`}> Explore  <FontAwesomeIcon icon={faArrowRight} /></Link></Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default League;