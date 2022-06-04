import React, { useEffect, useState } from 'react';

const Home = (props: {name: string}) => {

    return (
        <div>
            Hi {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </div>
    );
};

export default Home;