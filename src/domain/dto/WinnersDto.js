class WinnersDto {
  /**
   * @type {WinnerDto[]}
   */
  #winners

  /**
   *
   * @param {WinnerDto[]} winners
   */
  constructor(winners) {
    this.#winners = winners
  }

  /**
   * @return {WinnerDto[]}
   */
  get winners() {
    return this.#winners
  }
}

export default WinnersDto