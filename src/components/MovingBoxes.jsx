import React, {useEffect, useRef, useState} from "react";
import css from "./MovingBoxes.module.css";

const MovingBoxes = () => {
    const canvasRef = useRef(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;

        context.fillRect(100, 100, 100, 100);
    }, []);

    return (
        <div className={css.app}>
            <canvas ref={canvasRef}/>

            <div className={css.arrows}>
                <button>Up</button>
                <button>Left</button>
                <button>Down</button>
                <button>Right</button>
            </div>

            <div className={css.images}>
                <img src="https://i.imgur.com/JYUB0m3.png" alt="Down"/>
                <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right"/>
                <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up"/>
                <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left"/>
            </div>
        </div>
    )
};

export default MovingBoxes;
