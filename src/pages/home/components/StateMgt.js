import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            color: "Green"
        }
    }

    handleColorState=()=>{
        this.setState({color:"brown"})
    }

    handleColorChange=(e)=>{
        e.preventDefault();
        this.setState({color: e.target.value})
    }

    render(){
        return(
            <div style={{marginBottom: "40px"}}>
                <p style={{backgroundColor: this.state.color}}>love for humanity</p>
                <form>
                    <input
                    type="text"
                    placeholder="Enter color"
                    value={this.state.color}
                    onChange={this.handleColorChange}
                    />
                </form>
                <button 
                    type="button"
                    onClick={this.handleColorState}
                    style={{
                        backgroundColor: this.handleColorState.color,
                        width: "70px",
                        height: "40px"
                    }}
                    
                >
                    Click here
                    </button>
            </div>
        );
    }
}

export default Counter;

