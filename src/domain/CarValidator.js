const MIN_NAME_LEN = 1
const MAX_NAME_LEN = 5
class CarValidator {
  /**
   *
   * @param {string} name
   * @return {void}
   */
  static validateNameLength(name){
    if(name.length < MIN_NAME_LEN || name.length > MAX_NAME_LEN){
      throw new Error(`이름의 길이는 최소 ${MIN_NAME_LEN}이상 ${MAX_NAME_LEN}이하여야합니다.`)
    }
  }
}

export default CarValidator