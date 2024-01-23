import { useState } from 'react'

export const useCursorPosition = () => {
    const [cursorPosition, setCursortPosition] = useState(0);
    const resetCursorPosition = () => setCursortPosition(0);

    const updateCursorPosition = (state: 'increase' | 'decrease') => {
        if (state == 'increase') setCursortPosition((cursor) => cursor + 1);
        if (state == 'decrease') setCursortPosition((cursor) => cursor - 1);
    }

    return {
        cursorPosition,
        resetCursorPosition,
        updateCursorPosition
    }
}
