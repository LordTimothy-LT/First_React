import "../reuseable components/styles/Card";


const Card = (props) => {
    return(
        <div className="card_main">
            <img src={props.image} alt={props.alt} classname=""></img>
            <div className="use_id">
                <p>{props.userId}</p>
                <p>{props.id}</p>
            </div>
            <p>{props.title}</p>
            <div className="card_body">{props.body}</div>
        </div>
    )
}

export default Card