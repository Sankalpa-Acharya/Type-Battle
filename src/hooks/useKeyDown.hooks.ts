import { useEffect, useState } from "react";

export const useKeyDown = () => {

    const [charTyped, setcharTyped] = useState<string>('');

    const handleKeyDown = ({ key, code }: KeyboardEvent) => {
        // event.preventDefault();
        if (key === " ") {
            console.log('space');
        }
        else {
            setcharTyped((prevCharacter) => prevCharacter);
        }

    }


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    }, [])

    return { charTyped }
}



