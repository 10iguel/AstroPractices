import React, { type PropsWithChildren, useState } from "react";

const questions = [
    {
        question: "Where did we have our first date?",
        options: ["Coffee Shop", "Beach", "Movie Theater", "Park"],
        answer: "Coffee Shop",
        feedback: "That’s right! Our first date was magical at the coffee shop. ☕"
    },
    {
        question: "What’s my favorite thing about you?",
        options: ["Your smile", "Your humor", "Your kindness", "Your eyes"],
        answer: "Your kindness",
        feedback: "You got it! Your kindness melts my heart every day. ❤️"
    },
    {
        question: "What song was playing during our first dance?",
        options: ["Perfect", "Can’t Help Falling in Love", "At Last", "All of Me"],
        answer: "Can’t Help Falling in Love",
        feedback: "Yes! That song still gives me butterflies. 💃"
    }
];

interface LoveTriviaGame {
    closeIcon?: () => void;
}

const LoveTriviaGame = ({ closeIcon }: LoveTriviaGame) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [feedbackClass, setFeedbackClass] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const loadQuestion = () => {
        setFeedback("");
        setFeedbackClass("");
        setShowNext(false);
    };

    const checkAnswer = (selected: string) => {
        const q = questions[currentQuestion];
        if (selected === q.answer) {
            setScore(score + 1);
            setFeedback(q.feedback);
            setFeedbackClass("mt-4 text-green-600");
        } else {
            setFeedback("Oops! Try again or move on.");
            setFeedbackClass("mt-4 text-red-600");
        }
        setShowNext(true);
    };

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            loadQuestion();
        } else {
            setGameOver(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setGameOver(false);
        loadQuestion();
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-blue-400">Love Trivia Game</h1>
                    <button
                        className="text-black-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                        onClick={closeIcon}
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
                <p className="text-gray-600 mb-4">Test your knowledge of our love story!</p>
                {!gameOver ? (
                    <>
                        <div className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</div>
                        <div className="space-y-2 mb-4">
                        {questions[currentQuestion].options.map(option => (
                                <button
                                    key={option}
                                    className="w-full bg-purple-300 text-black-400 p-2 rounded hover:bg-purple-400"
                                    onClick={() => checkAnswer(option)}
                                    disabled={showNext}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className={feedbackClass}>{feedback}</div>
                        {showNext && (
                            <button
                                className="mt-6 bg-purple-300 text-black px-4 py-2 rounded hover:bg-purple-400"
                                onClick={handleNext}
                            >
                                Next Question
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <div className="text-lg font-semibold mb-4">Game Over!</div>
                        <div className="mt-4 text-gray-700">
                            You got {score} out of {questions.length}! Happy Anniversary, my love! 💕
                        </div>
                        <button
                            className="mt-6 bg-purple-300 text-white px-4 py-2 rounded hover:bg-purple-400"
                            onClick={handleRestart}
                        >
                            Play Again
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoveTriviaGame;