/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import './Typewriter.css'; // Add your styles here

export default function Typewriter({ texts, typingDelay = 100, delayAfterTyping = 2000 }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const currentIndex = displayText.length;

    useEffect(() => {
        if (isTyping) {
            if (currentIndex < texts[currentTextIndex].length) {
                const timer = setTimeout(() => {
                    setDisplayText(texts[currentTextIndex].slice(0, currentIndex + 1));
                }, typingDelay);
                return () => clearTimeout(timer);
            } else {
                setTimeout(() => {
                    setIsTyping(false);
                }, delayAfterTyping);
            }
        } else {
            if (currentIndex > 0) {
                const timer = setTimeout(() => {
                    setDisplayText(texts[currentTextIndex].slice(0, currentIndex - 1));
                }, typingDelay);
                return () => clearTimeout(timer);
            } else {
                setIsTyping(true);
                setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                setDisplayText('');
            }
        }
    }, [displayText, isTyping, currentIndex, texts, currentTextIndex, typingDelay, delayAfterTyping]);

    return (
        <div className="typewriter-container">
            <div className="typewriter-text">
                {displayText}
                {isTyping && <span className="typewriter-cursor"></span>}
            </div>
        </div>
    );
}


