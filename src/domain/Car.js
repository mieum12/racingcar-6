import CarValidator from "./CarValidator.js";
import CarDto from "./dto/CarDto.js";
import WinnersDto from "./dto/WinnersDto.js";
import WinnerDto from "./dto/WinnerDto.js";

class Car {
  /**
   * @type {string}
   */
  #name
  /**
   * @type {number}
   */
  #position

  /**
   *
   * @param {string} carName
   */
  constructor(carName) {
    CarValidator.validateNameLength(carName)
    this.#name = carName
    this.#position = 0

  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name
  }

  /**
   *
   * @return {number}
   */
  get position(){
    return this.#position
  }

  /**
   * @return {void}
   */
  move() {
    this.#position++
  }

  /**
   *
   * @return {CarDto}
   *
   */
  toCarDto(){
    return new CarDto(
      this.#name,
      this.#position)
  }

  /**
   *
   * @return {WinnerDto}
   */
  toWinnerDto(){
    return new WinnerDto(this.#name)
  }
  
}

export default Car