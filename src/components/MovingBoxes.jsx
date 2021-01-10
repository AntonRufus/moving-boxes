import React, {useEffect, useRef} from "react";
import css from "./MovingBoxes.module.css";
import useMovement from "./useMovement";

const MovingBoxes = () => {
        const canvasRef = useRef(null);
        const linkDownRef = useRef(null);
        const linkUpRef = useRef(null);
        const linkRightRef = useRef(null);
        const linkLeftRef = useRef(null);
        const {x, y, direction, move} = useMovement();

        // set the height and with
        useEffect(() => {
            const context = canvasRef.current.getContext('2d');
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight;
        }, []);

        // move the box if x or y changes
        useEffect(() => {
            const context = canvasRef.current.getContext('2d');
            context.clearRect(0, 0, window.innerHeight + 100000000, window.innerHeight + 10000000)
            // context.clearRect(0, 0, window.innerHeight, window.innerHeight);
            // context.fillRect(x, y, 100, 100);

            let theLinkRef;
            if (direction === 'down') theLinkRef = linkDownRef;
            if (direction === 'up') theLinkRef = linkUpRef;
            if (direction === 'left') theLinkRef = linkLeftRef;
            if (direction === 'right') theLinkRef = linkRightRef;

            context.drawImage(theLinkRef.current, x, y);
        }, [x, y]);

        return (
            <div className={css.app}>
                <canvas ref={canvasRef}/>

                <div className={css.arrows}>
                    <button onClick={() => move('up')}>Up</button>
                    <button onClick={() => move('left')}>Left</button>
                    <button onClick={() => move('down')}>Down</button>
                    <button onClick={() => move('right')}>Right</button>
                </div>

                <div className={css.images}>
                    <img
                        ref={linkDownRef}
                        // src="http://drapak.ca/cpg/img/link-down.png"
                        src="https://i.imgur.com/JYUB0m3.png"
                        alt="Down"
                    />
                    <img
                        ref={linkRightRef}
                        // src="http://drapak.ca/cpg/img/link-right.png"
                        src="https://i.imgur.com/GEXD7bk.gif"
                        alt="Right"
                    />
                    <img
                        ref={linkUpRef}
                        // src="http://drapak.ca/cpg/img/link-up.png"
                        src="https://i.imgur.com/XSA2Oom.gif"
                        alt="Up"
                    />
                    <img
                        ref={linkLeftRef}
                        // src="http://drapak.ca/cpg/img/link-left.png"
                        src="https://i.imgur.com/4LGAZ8t.gif"
                        alt="Left"
                    />
                </div>
            </div>
        )
    }
;

export default MovingBoxes;
