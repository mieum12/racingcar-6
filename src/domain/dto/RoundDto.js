class RoundDto {
  /**
   * @type {CarDto[]}
   */
  #cars

  /**
   *
   * @param {CarDto[]} cars
   */
  constructor(cars) {
    this.#cars = cars
  }

  get cars() {
    return this.#cars
  }
}

export default RoundDto