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
    <div className="HangmanGame">
      <div className="wordToGuess">{wordToGuess}</div>
      <div className="keyboard-display">{keyboard}</div>
    </div>
  );
}

const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabet = originalAlphabet.split("");

export default HangmanGame;
