import InvalidNumberInputError from "../exception/InvalidNumberInputError.js";
import InvalidFormatInputError from "../exception/InvalidFormatInputError.js";
import InvalidStringInputError from "../exception/InvalidStringInputError.js";

const INPUT_FORMAT_REG_EXP =/^[A-z가-힣]+(,[A-z가-힣]+)*$/

  class InputValidator {
  // 1. 숫자 패턴 검증
  /**
   *
   * @param {string} input
   * @return {void}
   */
  static validateNumberInput(input) {
    if (isNaN(parseInt(input))||isNaN(Number(input))) {
      throw new InvalidNumberInputError();
    }
  }
  static validateInputFormat(input){
    if (input ===null ||input===undefined ||!INPUT_FORMAT_REG_EXP.test(input)){
      throw new InvalidFormatInputError()
    }
  }

}

export default InputValidator