const keys: string= "qwertyuopasdfghjklizxcvbnm"
export const keysArr:{item:string, isHeld: boolean}[] = keys.toUpperCase().split("").map(item=> ({
  item,
  isHeld : false
}))

export const wordList: string[][] = [
    ["hangman", "A popular word-guessing game."],
    ["javascript", "A high-level programming language used for web development."],
    ["react", "A JavaScript library for building user interfaces."],
    ["typescript", "A typed superset of JavaScript that compiles to plain JavaScript."],
    ["openai", "A leading artificial intelligence research laboratory."],
    ["programming", "The process of writing computer programs."],
    ["computer", "An electronic device that processes data."],
    ["algorithm", "A set of step-by-step instructions for solving a problem or accomplishing a task."],
    ["internet", "A global network of interconnected computers."],
    ["development", "The process of creating, improving, and maintaining software."]
  ];
export const randomQuestion: string[] = wordList[Math.floor(Math.random()*wordList.length)]