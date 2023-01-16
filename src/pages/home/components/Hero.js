import '../styles/Hero.css'
import Button from '../../../reuseable components/Button';

function Hero(){
    return(
        <div className="hero_main">
            <section className='hero_sec'>
                <p className='hero_ptag_one'>Turn your product into something that sticks forever!</p>
                <p className='hero_ptag_two'>We offer a beautiful, high-end website that hooks your 
                    audience multiplying your engagement and impressions.</p>

                    <div className='hero_btn'>
                    <Button
                    name="Get Started"
                    width='60%'
                    height='50px'
                    borderTopLeft='0px'
                    borderBottomLeft='16px'
                    borderBottomRight='0px'
                    borderTopRight='16px'
                    color='white'
                    bgColor='#ec502d'
                    border='none'
                />
                <Button
                    name="Our Pricing"
                    width='40%'
                    height='50px'
                    borderTopLeft='0px'
                    borderBottomLeft='16px'
                    borderBottomRight='0px'
                    borderTopRight='16px'
                    color='#000'
                    bgColor='#fff'
                    border='none'
                />
                    <div className='hero_ptag_three'>
                        <p>Google</p>
                        <p>Amazon</p>
                    </div>
                    </div>
            </section>
            
        </div>

    )
}

export default Hero;