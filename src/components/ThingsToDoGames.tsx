import {useState} from "react";
import MarryGame from "../components/MarryGame";
import LoveTriviaGame from "../components/LoveTriviaGame";

const CloseIcon = ({onClick}: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-[178px] right-4 text-gray-500 hover:text-blue-400 text-2xl z-10"
        aria-label="Close"
    >
        &times;
    </button>
);

const ThingsToDoGames = () => {
    const [selectedGame, setSelectedGame] = useState<null | "marry" | "trivia">(null);

    return (
        <div className="relative min-h-[400px] flex flex-col items-center justify-center">
            {!selectedGame && (
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold mb-4">Choose a game:</h2>
                    <button
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                        onClick={() => setSelectedGame("marry")}
                    >
                        Marry Game
                    </button>
                    <button
                        className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
                        onClick={() => setSelectedGame("trivia")}
                    >
                        Love Trivia Game
                    </button>
                </div>
            )}
            {selectedGame === "marry" && (
                <div className="relative w-full flex justify-center">
                    <MarryGame closeIcon={() => setSelectedGame(null)}/>
                </div>
            )}
            {selectedGame === "trivia" && (
                <div className="relative w-full flex justify-center">
                    <LoveTriviaGame closeIcon={() => setSelectedGame(null)}/>
                </div>
            )}
        </div>
    );
};

export default ThingsToDoGames;