import React from 'react';

const RewardSection = props => {
    return (
        <>
            <h1>Reward View:</h1>
            <br />
            <h3>Congrats! {props.data?.customerName} has {props.data?.reward} points!!</h3>
        </>
    );
}

export default RewardSection