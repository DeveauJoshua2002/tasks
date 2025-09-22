/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0){
        return []; //If no elements return empty array
    }
    if (numbers.length === 1){
        return [numbers[0], numbers[0]]; //If just one element return numbers twice
    }
    //Since it starts at 0 to get last element subtract by 1
    return [numbers[0], numbers[numbers.length -1]]; //Else return first number and last number
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //Use map
    return numbers.map((value: number) => value*3); //Triple the new array by 3
}

/**
 * Consume an array of strincgs and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string) => {
        //Found a way to change a string to an int: https://www.geeksforgeeks.org/java/how-to-convert-string-to-int-in-java/
        const value = parseInt(str);
        //If parseInt failed (Meaning not an integer) return 0
        return isNaN(value) ? 0 : value;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string) =>{
        //If the $ exists remove it
        const RemovedDollar = amount.startsWith("$") ? amount.slice(1) : amount;
        const value = parseInt(RemovedDollar);  //Turn string into integer
        return isNaN(value) ? 0 : value; //If it's not an integer return 0
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //Find any string that ends with ? and remove them
    const NoQuest = messages.filter(
        (msg: string) => !msg.endsWith("?") //Opposite of startsWith()
    );
    return NoQuest.map((value : string) =>
        value.endsWith("!") ? value.toUpperCase() : value //If message ends with ! Uppercase string, else leave message
);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {

    const ShortWords = words.filter((word : string) => word.length < 4); //Use .filter and check if word.length is < 4
    return ShortWords.length; //Return word length
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {

    //Found what I was looking for: https://www.geeksforgeeks.org/javascript/javascript-array-every-method/
    return colors.every( //Will return if every color is red green or blue, else false
        (color : string) =>
            color === "red" || color === "blue" || color === "green" 
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
