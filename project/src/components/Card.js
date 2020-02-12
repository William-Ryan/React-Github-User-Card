import React from "react";

const Card = props => {
    return (
        <div>
            {/* <img src={props.userDate.avatar_url}/> */}
            <h2>{props.userData.login}</h2>
            <h3>Repos: {props.userData.repos_url}</h3>
            <h3>Followers: {props.userData.followers}</h3>
        </div>
    )
}
export default Card; 