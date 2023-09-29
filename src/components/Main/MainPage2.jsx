import React from 'react'
import PhantomCigar2 from './images/Phantom-cigar2.gif'
import { Container, Card } from 'react-bootstrap'

const MainPage2 = () => {
    return (
        <div responsive="true">
            <Container>
                <Container>
                    <h2 className='disappeer'>Welcome to the UCBP Website!</h2>
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-5 col-sm-4">
                                <img src={PhantomCigar2} responsive="true" className='img-fluid' alt="solid Snake" />
                            </div>
                            <div class="col-7 col-sm-8">
                                <div class="card-body">
                                    <h2 class="card-title">Welcome to the UCBP Website! </h2>
                                    <p class="card-text">Watch or listen to your favorite episodes, now with the ability to add your comments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container >
                <div className="d-flex justify-content-evenly bd-highlight">
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly bd-highlight'>
                    <div className="boxA">
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainPage2