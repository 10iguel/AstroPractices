import { useState, useEffect, useRef } from "react";

interface LoveTriviaGame {
    closeIcon?: () => void;
}

const MarryGame = ({closeIcon}:LoveTriviaGame) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
    const [showModal, setShowModal] = useState(false);
    const yesButtonRef = useRef(null);

    const setInitialPosition = () => {
        if (yesButtonRef.current) {
            // @ts-ignore
            const yesButtonRect = yesButtonRef.current.getBoundingClientRect();
            const initialLeft = yesButtonRect.left + yesButtonRect.width + 16;
            const initialTop = yesButtonRect.top + window.scrollY;
            setNoButtonPosition({ top: initialTop, left: initialLeft });
        }
    };

    useEffect(() => {
        const ref = requestAnimationFrame(setInitialPosition)

        window.addEventListener("resize", setInitialPosition);

        return () => {
            cancelAnimationFrame(ref);
            window.removeEventListener("resize", setInitialPosition);
        };
    }, []);

    const handleNoHover = () => {
        const buttonWidth = 477;
        const buttonHeight = 270;
        const maxX = Math.min(window.innerWidth - buttonWidth, 1000);
        const maxY = Math.min(window.innerHeight - buttonHeight, 580);
        const newLeft = Math.max(0, Math.random() * maxX);
        const newTop = Math.max(0, Math.random() * maxY);
        setNoButtonPosition({ top: newTop, left: newLeft });
    };

    const handleYesClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        requestAnimationFrame(setInitialPosition);
    };

    return (
        <div className=" flex text-center justify-center items-center flex-col">
            <div className="flex relative mb-8">
                <button
                    onClick={closeIcon}
                    className="absolute top-[-40px] right-[-30px] text-gray-500 hover:text-blue-400 text-4xl z-10"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h1 className="text-4xl font-bold text-green-600 mb-8">Would you marry me? 💍</h1>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    ref={yesButtonRef}
                    onClick={handleYesClick}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Yes
                </button>
                <button
                    onMouseEnter={handleNoHover}
                    style={{
                        position: 'absolute',
                        top: `${noButtonPosition.top}px`,
                        left: `${noButtonPosition.left}px`,
                        transition: 'all 0.3s ease',
                    }}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    No
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            I knew you were gonna say yes! 💖
                        </h2>
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Play again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarryGame;