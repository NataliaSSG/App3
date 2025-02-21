'use client'

import { useState } from 'react';
import Header from './components/header';

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  }

  const handleSubtract = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl">{counter}</h1>
        <div className="flex gap-4">
          <form onSubmit={handleAdd}>
            <button
              type="submit"
              className="bg-pink-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-pink-400 cursor-pointer rounded-lg">
              Add
            </button>
          </form>
          <form onSubmit={handleSubtract}>
            <button
              type="submit"
              className="bg-pink-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-pink-400 cursor-pointer rounded-lg">
              Subtract
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}