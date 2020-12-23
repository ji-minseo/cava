import React from 'react';

function Obj ({name}) {
    return (
        <div className="object">
            <img src={process.env.PUBLIC_URL + name}/>
            </div>

    );
}

export default Obj;
