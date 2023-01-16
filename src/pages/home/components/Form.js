import { useState } from "react"
import "../styles/Form.css"


const Form = (props) => {
    const [details, setDetails] = useState({
        fullName: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setDetails((prevDetails) => {
            return{
                ...prevDetails,
                [name] : value
            }
        })
    }
    const submitDetails = (event) => {
        event.preventDefault()
        console.log(details)
    }

    return (
        <form className = "form">
            <p>Full name</p><br /><input type="text" name="fullName" value ={details.fullName} onChange = {handleChange}/><br />
            <p>Email</p><br /><input type="email" name="email" value={details.email} onChange = {handleChange} /><br />
            <p>Message</p><br /><textarea name="message" rows = "10" cols="50" value = {details.message} onChange = {handleChange}></textarea><br /><br />
            <button onClick = {submitDetails}>Send message</button>
        </form>
    )
}

export default Form