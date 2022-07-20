import React, { useState } from "react";

export default function Generate() {
    const [dataOne, setDataOne] = useState(null);
    const [dataTwo, setDataTwo] = useState(null);
    const [print, setPrint] = useState(false);
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };

    function getFirstLine(valOne) {
        setDataOne(valOne.target.value.toUpperCase())
        setPrint(false)
    }
    function getSecondLine(valTwo) {
        setDataTwo(valTwo.target.value.toUpperCase())
        setPrint(false)
    }

    return (
        <div className="generate-main">
            <form className="form" onSubmit={handleSubmit}>

                <input className="form-input" type="text" placeholder="Top text" onChange={getFirstLine}></input>
                <input className="form-input" type="text" placeholder="Bottom text" onChange={getSecondLine}></input>
                <button className="form-button" onClick={() => setPrint(true)}>Create Meme</button>
            </form>
            <div className="generate-meme-wrapper center-aligned">
                <img className="generate-img" src="https://uploads.dailydot.com/6b2/79/a466411474bc5578-e1508484954756.jpg?auto=compress&fm=pjpg" />
                {
                    print ? <h1 className="text-on-image-top">{dataOne}</h1> : null
                }
                {
                    print ? <h1 className="text-on-image-bottom">{dataTwo}</h1> : null
                }
            </div>
        </div>
    )
}