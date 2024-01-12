import React from "react"

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img 
                src={`../images/${props.coverImg}`}
                className="card--image"
                alt="Main card image"
            />
            <div className="card--stats">
                <img 
                    src="../images/star.png"
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span> 
                <span className="gray">{props.location}</span>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )

}