import { useRef, useState, useEffect } from "react"

export const Player = ({source}) => {
    const btnRef = useRef();
    const [value, setValue] = useState(0);
    const playerRef = useRef();
    const play = () => {
        playerRef.current.play();
        console.log(playerRef.current)
    };
    const pause = () => {
        playerRef.current.pause();
        console.log(playerRef.current);
    };

    // console.log(btnRef.current);

      useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log(btnRef.current);
      });
    
    const handleClick = () => {
            // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
        console.log(btnRef.current);
    }
    
    return (
        <>
            <button onClick={()=>setValue(value + 1)}>Update value to trigger re-render</button>
            <button ref={btnRef}> Button with ref</button>
            <div>
                <video ref={playerRef} src={source} >Sorry, your browser does not support embedded videos.</video>
                <div>
                    <button onClick={play}>Play</button>
                    <button onClick={pause}>Pause</button>
                </div>
            </div>

            
        </>
    )
};
