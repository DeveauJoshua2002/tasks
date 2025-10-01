import { setTokenSourceMapRange } from "typescript";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id, //Return the types specified earlier
        name: name,
        type: type,
        body: "", //Empty strings
        expected: "",
        options: [], //Empty list
        points: 1, //Return what is asked
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const lowercaseAnswers = answer.trim().toLowerCase(); //Remove whitespace & convert to lowercase for user's answer
    const lowercaseQuestion = question.expected.trim().toLowerCase(); //Do the same for the question
    return lowercaseAnswers === lowercaseQuestion; //Check if two strings are the same
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question"){ 
        return true; //Return valid for this case
    }
    else if (question.type === "multiple_choice_question") {
        return question.options.includes(answer); //Check to see if it's one of the options
    }
    return false; //If neither return false
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    //We are only returning a statement
    //question.id gets id and place beginning of sting, then : , finally use slice to get first 10 characters
    return `${question.id}: ${question.name.slice(0,10)}`;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    /* 
    Found an example:

    `# Colors
Which of these is a color?
- red
- apple
- firetruck`
    */

    //Need to start with base string

    //Start with # then space then name, Use newline and start with question body
    let markdown = `# ${question.name}\n${question.body}`

    if (question.type === "multiple_choice_question"){ //If question is multiple choice
        //.map() to create new array that starts with '-' in front
        const OptionArrays = question.options.map((option: string) => `- ${option}`);

        //Use .join to create a single string with \n seperating each (Thus creating new lines)
        markdown += "\n" + OptionArrays.join("\n");
    }

    return markdown; //Return result
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {...question, name: newName}; //Use ... as shown in Chapter 3
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    return {...question, published: !question.published}; //Use ! to invert "published"
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {...oldQuestion,
        id: id,
        name: `Copy of ${oldQuestion.name}`, //Add "Copy of" in front of oldQuestion
        published: false //Resetting to false
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    //Looking at nested field subsection quite helpful

    return {...question, //Copy all the top level properties
        //overwrite options array, first copy original options array
        options: [...question.options, newOption] //Lastly add 'newOption' at the end
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return contentQuestion;
}
