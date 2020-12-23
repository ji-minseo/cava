import React from 'react';
import Draggable from 'react-draggable';

function Obj ({name}) {
    return (
        <Draggable>
        <div className="drag-wrapper">
            <img src={process.env.PUBLIC_URL + name}/>
        </div>
        </Draggable>

    );
}

export default Obj;
