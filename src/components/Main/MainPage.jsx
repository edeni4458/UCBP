import solidSnakeL from './images/solid-snake.jpg'
import { Container } from 'react-bootstrap'
import React from 'react'

const MainPage = () => {



    return (
        <div>
            <div className="main-container">
                <div className="first-top-width" style={{backgroundImage: `url(${solidSnakeL})`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "50%",
                                                        backgroundPosition: "start",
                                                        }}>
                    <h3>Join us under the cardboard box</h3>
                    <h5>Watch or listen to your favorite episodes, now with the ability to add your comments.</h5>
                </div>
                <div className="fav-titles">
                    <div className="boxA">
                        <h5>EP 51: It's Not Perfect<br></br>But We Love It!</h5>
                    </div>
                    <div className="boxA">
                        <h5>Ep 21: David Hayter<br></br>Is Back As Snake!</h5>
                    </div>
                    <div className="boxA">
                        <h5>Ep 12: Our Favorite Non<br></br>Canon Metal Gear Games</h5>
                    </div>
                </div>
                <div className="fav-ep-box">
                    <Container>
                        <div className="ratio ratio-21x9">
                            <iframe className='fav-episodes' width="80" height="80" src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </Container>
                    <Container>
                        <div className="ratio ratio-21x9">
                            <iframe className='fav-episodes' width="80" height="80" src="https://www.youtube.com/embed/b8KbjzcHeYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </Container>
                    <Container>
                        <div className="ratio ratio-21x9">
                            <iframe className='fav-episodes' width="80" height="80" src="https://www.youtube.com/embed/LaM-MqoopiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default MainPage