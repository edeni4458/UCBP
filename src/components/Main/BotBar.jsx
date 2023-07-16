import instagram from '../Main/images/instagram.png'
import facebook from '../Main/images/fb-icon.png'
import twitter from '../Main/images/twitter.png'
import {Link} from 'react-router-dom'
import React from 'react'

const BotBar = () => {
    return (
        <div>
            <div className="bottom-bar">
                <div className='nav-center'>
                    <ul className='nav-listB'>
                        <li><Link to={"/"} className='nav-link'>Home</ Link></li>
                        <li><Link to={"/about"} className='nav-link'>About</ Link></li>
                        <li><Link to={"/view"} className='nav-link'>Episodes</Link></li>
                        <li><Link to={"/news"} className='nav-link'>C-B News</Link></li>
                        <li><Link to={"/connect"} className='nav-link'>Connect</Link></li>
                    </ul>
                </div>
                <hr />
                <div className="social-mediaB">
                        <a href="https://twitter.com/UCBPodcast" target='_blank'><img className='codec-imageB' src={twitter} alt='Facebook Logo' /></a>
                        <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank'><img className='codec-imageB' src={facebook} alt='Facebook Logo' /></a>
                        <a href="https://www.instagram.com/ucbpodcast/" target='_blank'><img className='codec-imageB' src={instagram} alt='Instagram Logo' /></a>
                </div>
            </div>
        </div>
    )
}

export default BotBar