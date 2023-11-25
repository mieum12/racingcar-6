class CarDto {
  /**
   * @type {string}
   */
  #name
  /**
   * @type {number}
   */
  #position

  constructor(name,position) {
    this.#name = name
    this.#position = position
  }

  /**
   *
   * @return {string}
   */
  get name() {
    return this.#name
  }

  /**
   * @return {number}
   */
  get position() {
    return this.#position
  }
}

export default CarDto