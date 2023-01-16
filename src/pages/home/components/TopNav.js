import "../styles/TopNav.css"
import Button from '../../../reuseable components/Button'


function TopNav(){
    return(
        <div className="top_main_body">
            <div className="left_side">
                <p className="left_ptag">Product</p>
                <p className="left_ptag">Resource</p>
                <p className="left_ptag">Support</p>
            </div>
            <div className="mid_side">
                <p className="mid_ptag">P
                    <span className="mid_span">A</span>CIFI
                    <span className="mid_span">A</span>
                </p>
            </div>
            <ul className="right_side">
                <li className="right_ptag">
                    <a href="https://semicolon.africa" target="blank" className="right_a">Company</a>
                </li>
                <li className="right_ptag">
                    <a href="https://jumia.com.ng" target="blank" className="right_a">Pricing</a>
                    <div className="drop_down">
                        <a href="#">Contact Us</a>
                        <a href="#">Contact Us</a>
                    </div>
                </li>
                <Button
                    name="Contact Us"
                    width='100%'
                    height='50px'
                    borderTopLeft='0px'
                    borderBottomLeft='16px'
                    borderBottomRight='0px'
                    borderTopRight='16px'
                    color='white'
                    bgColor='#ec502d'
                    border='none'
                />
                {/* <button className="right_btn">Contact Us</button> */}

            </ul>
        </div>
    );
}

export default TopNav