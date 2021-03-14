import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import malePng from '../../images/male.png'
import femalePng from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faFlag, faFutbol, faMapPin, faMars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './LeagueDetail.css'


const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState([]);
    const [image, setImage] = useState(false);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])
    console.log(league);

    const conditionalImg = () => {
        let gender = league.strGender;
        let image;
        if (gender === 'Male') {
            image = <img src={malePng} alt="" />
        } else if (gender === 'Female') {
            image = <img src={femalePng} alt="" />
        }
        return image;
    }
    console.log(league);

    return (
        <div>
            <section className="home-top">
                <img width="550px" src={league.strBanner} alt=""/>
                <br/>
                <br/>
                <img width="150px" src={league.strBadge} alt="" />
            </section>
            <Container>
                <div className="league-summary">
                    <Row>
                        <Col xs={12} md={6}>
                            <h3 className="league-name">{league.strLeague}</h3>
                            
                                <h6><FontAwesomeIcon icon={faMapPin} /> Founded: {league.intFormedYear}</h6>
                                <h6><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</h6>
                                <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {league.strSport}</h6>
                                <h6><FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}</h6>
                            
                        </Col>
                        <Col className="conditional-img" xs={12} md={6}>
                            {
                                conditionalImg()
                            }
                        </Col>
                    </Row>
                </div>
                <div className="description">
                    <p>{league.strDescriptionEN}</p>
                </div>
                <div className="social-icon">
                    
                        <a id="fb" href={league.strFacebook}> <FontAwesomeIcon icon={faFacebook} />     </a>
                        <a id="twitter" href={league.strTwitter}><FontAwesomeIcon icon={faTwitterSquare} />     </a>
                        <a id="youtube" href={league.strYoutube}><FontAwesomeIcon icon={faYoutube} />     </a>

                </div>
                
            </Container>
        </div>
    );
};

export default LeagueDetail;