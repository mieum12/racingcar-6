import CarValidator from "./CarValidator.js";
import Car from "./Car.js";
import CarsValidator from "./CarsValidator.js";
import RoundDto from "./dto/RoundDto.js";
import CarDto from "./dto/CarDto.js";
import WinnersDto from "./dto/WinnersDto.js";

class Cars {
  /**
   * @type {Car[]}
   */
  #cars

  /**
   *
   * @param {string[]} carNames
   */
  constructor(carNames) {
    // pairs.map(Car.constructor) 로 줄여서 쓸 수 있는데 타입 추론 안됨
    const cars = carNames.map(carName => new Car(carName))
    CarsValidator.validateDuplicatedName(carNames)
    this.#cars = cars

  }

  /**
   * @param {MoveDecider} moveDecider
   * @return {void}
   */
  moveAllBy(moveDecider) {
    //모든 차를 move 하는 메서드
    for (const car of this.#cars){
      //모든 차를 돌며 움직일 수 있는지 매번 확인
      if(moveDecider.canMove()){
        car.move()
      }
    }
  }

  /**
   * @return {RoundDto}
   */
  toRoundDto(){
    const carDtos = this.#cars.map(car => car.toCarDto());
    return  new RoundDto(carDtos)
  }

  /**
   * @return {WinnersDto}
   */
  toWinnersDto(){
    const maxPosition = this.#calcMaxPosition()

    const winnerDtos = this.#cars
      .filter(car => car.position === maxPosition)
      .map(car => car.toWinnerDto())

    return new WinnersDto(winnerDtos)
  }

  /**
   * @return {number}
   */
  #calcMaxPosition() {
    //원본변경 + 리턴
    this.#cars
      .sort((a,b) => a.position - b.position)
      .reverse() //오름차순이라 한번 뒤집어주기
    //toSorted : 원본 그대로 , 변경된 새 배열 변환, 메소드는 뒤에 ed붙이는 관례

    return this.#cars[0].position
  }


}
export default Cars