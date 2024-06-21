//@ts-ignore
import { useState } from "react";

function HangmanGame() {
  const wordToGuess = ["m", "e", "l", "_", "n"];
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
    <span
      key={letter}
      className="keyboard-letter"
      onClick={() => storeSelectedLetter(letter)}
    >
      {letter}
    </span>
  ));

  return (
    <div className="HangmanGame">
      <div className="guessed-word">{wordToGuess}</div>
      <div className="keyboard-display">{keyboard}</div>
    </div>
  );
}

const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabet = originalAlphabet.split("");

export default HangmanGame;
