import InputView from "../view/InputView.js";
import MoveDecider from "../domain/MoveDecider.js";
import OutputView from "../view/OutputView.js";

const moveDecider = new MoveDecider()

class RacingController {

   static async run() {
    // 1. 입력 - 사용자가 입력한 차를 받아온다
    const cars = await InputView.inputCars()
    // 2. 실행 - 차를 입력된 라운드만큼 움직인다
    await this.playRound(cars)
    // 3. 출력 - 최종 결과를 출력한다
    OutputView.printWinnersDto(cars.toWinnersDto())
  }

  /**
   *
   * @param {Cars} cars
   * @return {Promise<void>}
   */
   static async playRound(cars) {
    const maxRound = await InputView.inputMaxRound()
    OutputView.printStartLine()
    //라운드 횟수만큼 움직이고 위치 출력 반복
    for (let round = 0; round < maxRound; round++) {
      cars.moveAllBy(moveDecider)
      OutputView.printRoundDto(cars.toRoundDto())
    }
  }

}

export default RacingController;