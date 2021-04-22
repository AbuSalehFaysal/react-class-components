import React, { useRef } from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null);
    const handleClick = () => {
        console.log(userNameRef.current.value);
    }
    return (
        <div>
            <input ref={userNameRef} type="text" name="" id=""/>
            <button onClick={handleClick}>Button</button>
        </div>
    );
};

export default ExploreRef;