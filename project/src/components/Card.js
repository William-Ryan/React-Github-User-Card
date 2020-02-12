import React from "react";
import styled from "styled-components";

const Card = props => {
    return (
        <div>
            <h2>{props.userData.login}</h2>
            <h3>Repos: {props.userData.repos_url}</h3>
            <h3>Followers: {props.userData.followers}</h3>
        </div>
    )
}
export default Card; 