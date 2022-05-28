import React from "react";

const Home = (props: {name: string}) => {

    return(
        <div className="add-space">
            <p>
                {props.name ? 'Hi '+ props.name : 'You are not logged in'}
            </p>
        </div>
    );
}

export default Home;