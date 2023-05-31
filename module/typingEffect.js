export default function typingEffect() {
  const phrase = ["I'm a Marcos Lopes", "I'm a Freelancer", "I'm a Developer"];

  const element = document.querySelector(".home-text-title");

  let indexSentence = 0;
  let indexChar = 0;

  function writeText() {
    if (indexChar <= phrase[indexSentence].length) {
      element.textContent = phrase[indexSentence].substring(0, indexChar);
      indexChar++;
      setTimeout(writeText, 100);
    } else {
      setTimeout(removeText, 1000);
    }
  }

  function removeText() {
    if (indexChar >= 0) {
      element.textContent = phrase[indexSentence].substring(0, indexChar);
      indexChar--;
      setTimeout(removeText, 100);
    } else {
      indexSentence++;
      if (indexSentence >= phrase.length) {
        indexSentence = 0;
      }
      setTimeout(writeText, 1000);
    }
  }

  writeText();
}
