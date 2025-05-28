import { useRef, useState } from "react";
import "./style.css";
import { OnlineIcon } from "@/assets/icons/OnlineIcon";
import { OfflineIcon } from "@/assets/icons/OfflineIcon";

const CircleButton = ({ hideModal, onlineStatus, setOnlineStatus }: { hideModal: () => void, onlineStatus: boolean, setOnlineStatus: (value: boolean) => void }) => {
    const [progress, setProgress] = useState(0);
    const animationRef = useRef<number>(0);
    const startTimeRef = useRef<number>(0);
    const doneRef = useRef(false);

    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const duration = 5000;

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
                setOnlineStatus(!onlineStatus)
                hideModal()
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const resetProgress = () => {
        cancelAnimationFrame(animationRef.current!);
        setProgress(0);
        doneRef.current = false;
    };

    return (<>
        <div
            className={onlineStatus ? "circle-button-green" : "circle-button"}
            onMouseDown={startProgress}
            onMouseUp={resetProgress}
            onMouseLeave={resetProgress}
            onTouchStart={startProgress}
            onTouchEnd={resetProgress}
        >
            <svg className={onlineStatus ? "progress-ring-green" : "progress-ring"} width="150" height="15ُُ0">
                <circle
                    className={onlineStatus ? "ring-bg-green" : "ring-bg"}
                    cx="75"
                    cy="75"
                    r={radius}
                    strokeWidth="9"
                />
                <circle
                    className={onlineStatus ? "ring-progress-green" : "ring-progress"}
                    cx="75"
                    cy="75"
                    r={radius}
                    strokeWidth="9"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress)}
                    strokeLinecap="round"
                />
            </svg>
            <span className={`${onlineStatus ? `button-label-green` : `button-label`}`}>
                {onlineStatus ? <OnlineIcon className="w-[80px]" /> : <OfflineIcon className="w-[80px]" />}
            </span>
        </div>

    </>
    );
};

export default CircleButton;
