/**
 *
 * @type {string}
 */
const COMMAS = ','
export class InputConverter {
  /**
   *
   * @param {string} input
   * @return {number}
   */
  static convertToNumber(input) {
    // 숫자로 변환
    return +input;
  }

  /**
   *
   * @param {string} input
   * @return {string[]}
   * @description '가,나,다' -> ['가','나','다']
   */
  static convertToArray(input){
   return input.split(COMMAS)
  }
}