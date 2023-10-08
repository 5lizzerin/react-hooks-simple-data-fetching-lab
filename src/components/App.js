// create your App component here

import React, {useEffect, useState} from "react";

const dogUrl = "https://dog.ceo/api/breeds/image/random"

function App () {
    const [dogPic, setDogPic] = useState(null)
    useEffect( () => {
        fetch(dogUrl)
        .then(dogUrlServerResponse => dogUrlServerResponse.json())
        .then(dogJson => {
            console.log(dogJson.message)
            setDogPic(dogJson.message)
        });
    }, []);

            if (!dogPic) return <p>Loading...</p>;

            return <img src={dogPic} alt="a dog"></img>
}

export default App;
