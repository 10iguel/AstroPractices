import { useState, useEffect, useRef } from "react";

const MarryGame = () => {
    const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
    const [showModal, setShowModal] = useState(false);
    const yesButtonRef = useRef(null);

    // Set initial position of "No" button next to "Yes" button after mount
    useEffect(() => {
        const setInitialPosition = () => {
            if (yesButtonRef.current) {
                // @ts-ignore
                const yesButtonRect = yesButtonRef.current.getBoundingClientRect();
                const initialLeft = yesButtonRect.left + yesButtonRect.width + 16; // 16px gap (matches gap-4 in Tailwind)
                const initialTop = yesButtonRect.top + window.scrollY; // Adjust for scrolling
                setNoButtonPosition({ top: initialTop, left: initialLeft });
            }
        };

        // Delay execution to ensure DOM is fully rendered
        const timer = setTimeout(setInitialPosition, 0);

        // Recalculate on window resize to adjust for layout changes
        window.addEventListener("resize", setInitialPosition);

        // Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", setInitialPosition);
        };
    }, []);

    const handleNoHover = () => {
        const maxX = window.innerWidth - 100; // Adjust for button width
        const maxY = window.innerHeight - 40; // Adjust for button height
        const newTop = Math.random() * maxY;
        const newLeft = Math.random() * maxX;
        setNoButtonPosition({ top: newTop, left: newLeft });
    };

    const handleYesClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-8">Would you marry me? 💍</h1>
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