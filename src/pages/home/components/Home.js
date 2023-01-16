import "../styles/Home.css";
// import TrueCallerHero from '../../../assets/images/truecaller.jpeg'
import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import StateMgt from "../components/StateMgt";
import UserInfo from "../components/UserInfo"

function Home(){
    return(
        // <div className="home_page_one">
        // <div className="home_page_back">
        <div className="home_page">
            <TopNav/>
            <Hero/>
            <Footer/>
            <StateMgt/>
            <UserInfo/>
        </div>
        // </div>
        // </div>
    );
}


export default Home;