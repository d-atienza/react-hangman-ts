//@ts-ignore
import { useState } from "react";

function HangmanGame() {
  const wordToGuess = "melon";
  const [selectedLetters, setSelectedLetters] = useState<string[]>([
    "c",
    "a",
    "t",
    "s",
  ]);

  const mistakeCount = countMistakes(selectedLetters, wordToGuess);

  function storeSelectedLetter(inputLetter: string) {
    const copyArray = [...selectedLetters, inputLetter];
    setSelectedLetters(copyArray);
    console.log(selectedLetters);
  }

  const keyboard = alphabet.map((letter) => (
    <button
      key={letter}
      className="keyboard-letter"
      disabled={selectedLetters.includes(letter)}
      onClick={() => storeSelectedLetter(letter)}
    >
      {letter}
    </button>
  ));

  return (
    <div className="hangmanGame">
      <div className="wordToGuess">{wordToGuess}</div>
      <div className="keyboard-display">{keyboard}</div>
      <div>{mistakeCount}</div>
    </div>
  );
}

const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabet = originalAlphabet.split("");

function countMistakes(selectedLetters: string[], wordToGuess: string) {
  let count = 0;

  for (const letter of selectedLetters) {
    if (!wordToGuess.includes(letter)) {
      count++;
    }
  }

  return count;
}

export default HangmanGame;
