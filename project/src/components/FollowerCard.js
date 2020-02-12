import React from "react";

const FollowerCard = props => {
    return (
        <div>
            <h2>{props.followerData.login}</h2>
            <h3>Repos: {props.followerData.repos_url}</h3>
            <h3>Followers: {props.followerData.followers}</h3>
        </div>
    )
}
export default FollowerCard; 