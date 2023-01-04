/**
 * Methods for validating a string.
 * Useful for validating text fields
 * in forms or other dynamic text data.
 */
class stringValidator {
  constructor() {
    //case-insensitive latin alphabets from A-Z
    const lettersRegex = /[a-z]/i
    //numbers from 0 - 9
    const numbersRegex = /[0-9]/
    // blankspaces, tabs and new lines
    const whiteSpaceRegex = /[\s]/
    //ascii characters
    const charsRegex = /[`£¬€!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    //ascii characters except dash and underscore
    const sepCharsRegex = /[`£¬€!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/
    // email regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    /**
     *
     * @param {String} string
     * @returns true if there
     *is at least one alphabet in a string
     */
    this.hasAlphabet = (string) => {
      return lettersRegex.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if there
     *is at least one number in a string
     */
    this.hasNumber = (string) => {
      return numbersRegex.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if there is a blank space,
     *tab or line break anywhere in a string
     */
    this.hasSpace = (string) => {
      return whiteSpaceRegex.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if there is at least
     *one special character in a string
     */
    this.hasChar = (string) => {
      return charsRegex.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if there is at least one special
     *character in a string except dash(-) and underscore(_)
     */
    this.hasCharSep = (string) => {
      return sepCharsRegex.test(string)
    }

    //----METHODS FOR STRICT VALIDATION----//

    /**
     *
     * @param {String} string
     * @returns true if a string is empty
     * or contains only blank spaces
     */
    this.isEmpty = (string) => {
      return string.length === 0 ? true : /^[ \s]+$/.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if a string
     *contains only alphabets
     */
    this.onlyAlphabet = (string) => {
      return /^[a-zA-Z]+$/.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if a string
     *contains only numbers
     */
    this.onlyNumber = (string) => {
      return /^[0-9]+$/.test(string)
    }

    /**
     *
     * @param {String} string
     * @returns true if a string
     *contains only special characters
     */
    this.onlyChar = (string) => {
      return /^[`£¬€!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/.test(string)
    }

    /**
     *
     * @param {String} email
     * @returns true if a string matches
     * the email format
     */
    this.isEmail = (email) => {
      return emailRegex.test(email)
    }

    /**
     *
     * @param {String} text
     * @param {Number} wordCount
     * @returns truncated text with '...' at the end.
     */
    this.truncate = (text, wordCount) => {
      const words = String(text).split(' ')

      if (!wordCount || words.length <= wordCount) return text

      return words.slice(0, wordCount).join(' ') + '...'
    }
  }
}

export default new stringValidator()
