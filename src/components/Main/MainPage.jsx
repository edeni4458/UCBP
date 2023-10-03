import solidSnakeL from './images/solid-snake.jpg'
import PhantomCigar2 from './images/Phantom-cigar2.gif'
import MainTop from './MainPageParts/MainTop'
import { Container } from 'react-bootstrap'
import React from 'react'

const MainPage = () => {




    return (
        <div>
            <div className="main-container">
                <div className="first-top-width">
                    <img className="fix-image" src={solidSnakeL} alt="picture of solid snake" />
                    <div className="sub-text">
                        <h2>We are UCBP and MGS is our business</h2>
                        <h3><span id='link-to-connect'>Join us</span> under the cardboard box</h3>
                        <h5>Watch or listen to your favorite episodes, now with the ability to add your comments</h5>
                    </div>
                </div>
                <div className="first-mid-width">
                    <Container>
                        <div className="video-flex">
                            <div className="">
                                <div className="">
                                    <iframe className='fav-episodes' src="https://www.youtube.com/embed/-0zVUhJ84cs?si=0C7UBQU7fzIDhBf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <h4 className='episode-title'>Episode 1</h4>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <iframe className='fav-episodes' src="https://www.youtube.com/embed/tqG9FIDJdy8?si=UOiX9VLM_cX8ODRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <h4 className='episode-title'>Episode 35</h4>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <iframe className='fav-episodes' src="https://www.youtube.com/embed/X12vUzWN8c4?si=UThlu9HQ7bF9wKY1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <h4 className='episode-title'>Episode 16</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <MainTop></MainTop>
            </div>
        </div>
    )
}

export default MainPage