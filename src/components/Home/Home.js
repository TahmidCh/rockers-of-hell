import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import League from '../League/League';
import "./Home.css"

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <main>
            <div className="home-top">
                <h1>Rockers of Hell</h1>
            </div>
            <div className="leagues">
                <Container>
                    <Row>
                        {
                            leagues.slice(0, 24).map(league => <League league={league}></League>)
                        }
                    </Row>
                </Container>

            </div>
        </main>
    );
};

export default Home;