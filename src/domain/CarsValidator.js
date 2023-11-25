class CarsValidator {
  /**
   *
   * @param {string[]} names
   * @return {void}
   */
  static validateDuplicatedName(names){
    const uniqueNamesSize = new Set(names).size

    if(names.length !== uniqueNamesSize){
      throw new Error (`중복된 이름이 존재합니다.`)
    }

  }
}

export default CarsValidator