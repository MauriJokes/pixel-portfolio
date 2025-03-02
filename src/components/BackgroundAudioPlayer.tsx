import { useEffect, useState } from "react";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";
import { IoPauseCircleSharp } from "react-icons/io5";
import { IoPlayCircleSharp } from "react-icons/io5";
import React from "react";

interface BackgroundAudioPlayerProps {
  data: string;
  textColor: string;
  active: number;
}

const BackgroundAudioPlayer: React.FC<BackgroundAudioPlayerProps> = ({
  data,
  textColor,
  active,
}) => {
  const [text, setText] = useState(""); // Stores typed text
  const [charIndex, setCharIndex] = useState(0); // Tracks typing position
  const [showCursor, setShowCursor] = useState(true); // Cursor blinking state
  const [isSkipping, setIsSkipping] = useState(false); // Skip state
  const [isPaused, setIsPaused] = useState(false); // Pause state
  const typingSpeed = 40; // Typing speed

  // Reset text when tab changes
  useEffect(() => {
    setText("");
    setCharIndex(0);
    setIsSkipping(false);
    setIsPaused(false);
  }, [active]);

  // Typewriter effect
  useEffect(() => {
    if (!isSkipping && !isPaused && charIndex < data.length) {
      const timeout = setTimeout(() => {
        setText(data.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, data, isSkipping, isPaused]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Handle Skip button click
  const handleSkip = () => {
    setIsSkipping(true);
    setText(data); // Instantly show full text
    setCharIndex(data.length); // Move cursor to end
  };

  // Handle Pause/Resume button click
  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  // Handle Restart button click
  const handleRestart = () => {
    setText("");
    setCharIndex(0);
    setIsSkipping(false);
    setIsPaused(false);
  };

  return (
    <React.Fragment>
      <div className="max-h-100 w-full flex-1 overflow-auto rounded-lg border border-white/50 bg-black/60 p-5 shadow-lg shadow-gray-800/40">
        <p className={`font-jet-brains ${textColor}`}>
          {text}
          <span
            className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"} text-base text-white transition-opacity duration-300`}
          >
            |
          </span>
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-4 rounded-lg border border-white/50 bg-black/60 p-2 shadow-lg shadow-gray-800/40">
        <IoIosSkipBackward
          className="text-2xl text-white/80"
          onClick={handleRestart}
        />
        {isPaused ? (
          <IoPlayCircleSharp
            className="text-5xl text-white/80"
            onClick={handlePauseResume}
          />
        ) : (
          <IoPauseCircleSharp
            className="text-5xl text-white/80"
            onClick={handlePauseResume}
          />
        )}

        <IoIosSkipForward
          className="text-2xl text-white/80"
          onClick={handleSkip}
        />
      </div>
    </React.Fragment>
  );
};

export default BackgroundAudioPlayer;
