/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature-32) * (5/9);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let total = 0; //Create a variable called total set it to zero 
    
    if (first > 0){ //Check > 0
        total += first; //Add first to the total
    }
    //Repeat for second and third
    if (second > 0){
        total += second;
    }

    if (third > 0){
        total += third;
    }
    
    return total; //Return the total of all the numbers (That are all greater then zero)
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!"; //Found documentation for uppercase method: https://www.geeksforgeeks.org/typescript/typescript-string-touppercase-method/
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    //Found documentation for returning a boolean: https://www.geeksforgeeks.org/typescript/typescript-string-endswith-method/
    return message.endsWith("?"); //Will return true if it has a question mark and false without it. No if statment required
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const lowercaseWord = word.toLowerCase(); //Need to do this because you could get results like: YEs or nO or yes or YES. Simplifies all results no matter the input
    if (lowercaseWord === "yes"){
        return true; //If yes return true
    }
    else if (lowercaseWord === "no"){
        return false; //If no return false
    }
    else {
        return null; //If neither return null
    }
}
