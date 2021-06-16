import React from "react";
import Style from "./PhotoViewer.css";
import { useState } from 'react';

function PhotoViewer({src}) {

    const [url, setUrl] = useState(src[0]);

    console.log("test this is working")

    const images = src.map(srcUrl => <img className="image" src={srcUrl} alt="placeholder text" onClick={() => setUrl(srcUrl)}/>)
    
    return (
        <div>
            <img className="image" src={url} alt="placeholder text" />
            {images}
        </div>
    );
}

export { PhotoViewer };