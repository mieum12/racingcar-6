// class InputView {
//   #inputValidator
//   #inputConverter
//   constructor(inputValidator, inputConverter) {
//     this.#inputValidator = inputValidator;
//     this.#inputConverter = inputConverter;
//   }
//
//   async readMoving() {
//     const input = await Console.readLineAsync(MESSAGE.moving);
//     try {
//       // 검증
//       this.#inputValidator.validateMovingInput(input);
//       // 변환(아니면 그냥 여기서 반환)
//       return this.#inputConverter.convertToMoney(input);
//     } catch (error) {
//       // 예외 발생 시 에러 처리
//       Console.print(`${error.message}`);
//       //여기부터 재시작
//       return this.readMoving();
//     }
//   }
// }
//
// export default InputView

import {Console} from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator";
import {InputConverter} from "./InputConverter";
import Cars from "../domain/Cars.js";

/**
 *
 * @type {string}
 */
const INPUT_CAR_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
const INPUT_MAX_ROUND_MESSAGE = '시도할 횟수는 몇 회인가요?\n'

class InputView {
  /**
   *
   * @return {Promise<Cars>}
   */
  static async inputCars() {
    const input = await Console.readLineAsync(INPUT_CAR_MESSAGE)
    InputValidator.validateInputFormat(input)
    const cars = InputConverter.convertToArray(input)
    return new Cars(cars)
  }
  /**
   *
   * @return {Promise<number>}
   */
   static async inputMaxRound() {
    const input = await Console.readLineAsync(INPUT_MAX_ROUND_MESSAGE)
    InputValidator.validateNumberInput(input)
    return InputConverter.convertToNumber(input)
  }
}

export  default InputView