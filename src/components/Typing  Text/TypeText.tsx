import texts from "../../data/text";
import { useEffect } from "react";
import { useKeyDown } from '../../hooks/useKeyDown.hooks'
type Props = {}


export default function TypeTex({ }: Props) {
    const { charTyped } = useKeyDown();
    console.log(charTyped);
    // split the sentence into words.
    const words = texts[0].split(' ');

    return (
        <div className="h-[135px] w-full overflow-hidden">
            <div className="word-text relative" id="words">
                {
                    words.map((word, index) => (
                        // splitting words into letters 
                        <div key={index} className="word">
                            {word.split('').map((letter, index) => (
                                <span className="letter ml-[3px]" key={index}>{letter}</span>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}