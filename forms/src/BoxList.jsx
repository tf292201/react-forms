import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const [idCounter, setIdCounter] = useState(1); // Initialize id counter

    const addBox = (newBox) => {
        const boxWithId = { ...newBox, id: idCounter }; // Assign id to the new box
        setBoxes(prevBoxes => [...prevBoxes, boxWithId]);
        setIdCounter(prevId => prevId + 1); // Increment id counter
    };

    const removeBox = (id) => {
        setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => (
                <Box
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={removeBox}
                />
            ))}
        </div>
    );
}

export default BoxList;
