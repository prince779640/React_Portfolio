import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    // Typewriter state
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        let timeoutId;

        const typeText = () => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index));
                index++;
                timeoutId = setTimeout(typeText, 100);
            } else {
                setTimeout(onComplete, 1000); // Call onComplete after 1 sec delay
            }
        };

        typeText(); // Start typing effect

        return () => clearTimeout(timeoutId); // Cleanup function
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            
            {/* Typewriter effect */}
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> | </span>
            </div>

            {/* Loading bar */}
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading">
                </div>
            </div>

        </div>
    );
};
