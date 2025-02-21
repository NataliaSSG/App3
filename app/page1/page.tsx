'use client'

import { useState } from 'react';
import Header from '../components/header';
import Rectangle from '../components/rectangle';

export default function Page1() {
    const [rectangleColor, setRectangleColor] = useState("red");

    const handleColorChange = (color: string) => {
        setRectangleColor(color);
    };

    const handleSubmit = (e: React.FormEvent, color: string) => {
        e.preventDefault();
        handleColorChange(color);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <Header />
            <Rectangle color={rectangleColor} />

            <div className="flex gap-4">
                <form className="flex gap-4" onSubmit={(e) => handleSubmit(e, "blue")}>
                    <button
                        type="submit"
                        className="bg-blue-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-blue-400 cursor-pointer rounded-lg">
                        Blue
                    </button>
                </form>

                <form className="flex gap-4" onSubmit={(e) => handleSubmit(e, "green")}>
                    <button
                        type="submit"
                        className="bg-green-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-green-400 cursor-pointer rounded-lg">
                        Green
                    </button>
                </form>
            </div>

            <div className="flex gap-4">
                <form className="flex gap-4" onSubmit={(e) => handleSubmit(e, "yellow")}>
                    <button
                        type="submit"
                        className="bg-yellow-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-yellow-400 cursor-pointer rounded-lg">
                        Yellow
                    </button>
                </form>

                <form className="flex gap-4" onSubmit={(e) => handleSubmit(e, "red")}>
                    <button
                        type="submit"
                        className="bg-red-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-red-400 cursor-pointer rounded-lg">
                        Red
                    </button>
                </form>
            </div>
        </div>


    );
}