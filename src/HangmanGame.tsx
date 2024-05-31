function HangmanGame() {
  const wordToGuess = ["m", "e", "l", "_", "n"];

  const keyboard = alphabet.map((letter) => (
    <span className="keyboard-letter">{letter}</span>
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
