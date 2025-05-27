import React, { useRef, useState } from "react";
import "./CircleButton.css";

const CircleButton = () => {
    const [progress, setProgress] = useState(0);
    const animationRef = useRef<number>(0);
    const startTimeRef = useRef<number>(0);
    const doneRef = useRef(false);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const duration = 5000; // 5 seconds

    const startProgress = () => {
        startTimeRef.current = performance.now();
        doneRef.current = false;

        const animate = (time: number) => {
            const elapsed = time - startTimeRef.current!;
            const percent = Math.min(elapsed / duration, 1);
            setProgress(percent);

            if (percent < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else if (!doneRef.current) {
                doneRef.current = true;
                alert("انجام شد!");
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const resetProgress = () => {
        cancelAnimationFrame(animationRef.current!);
        setProgress(0);
        doneRef.current = false;
    };

    return (
        <div
            className="circle-button"
            onMouseDown={startProgress}
            onMouseUp={resetProgress}
            onMouseLeave={resetProgress}
            onTouchStart={startProgress}
            onTouchEnd={resetProgress}
        >
            <svg className="progress-ring" width="100" height="100">
                <circle
                    className="ring-bg"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="8"
                />
                <circle
                    className="ring-progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress)}
                />
            </svg>
            <span className="button-label">نگه دار</span>
        </div>
    );
};

export default CircleButton;
