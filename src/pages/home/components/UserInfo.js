import React, {useState} from "react";


const UserInfo = () =>{
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        gender:{}
    })
    
    const handleSubmit = () =>{


    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="firstName"
                placeHolder="Enter first name"
                // value={info.firstName}
                onChange={(e) =>setInfo({...info, firstName:e.target.value, lastName:info.lastName})}
                /><br></br>
                 <input
                type="text"
                name="lastName"
                placeHolder="Enter last name"
                // value={info.lastName}
                onChange={(e) =>setInfo({...info, lastName:e.target.value, firstName:info.firstName})}
                /><br></br>
                <select name="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>She-male</option>
                    <option>Bobrisky</option>
                </select>
                <button type="submit">Submit</button><br></br>
            </form>
        </div>
    )
}

export default UserInfo;