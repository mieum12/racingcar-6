import {Console} from "@woowacourse/mission-utils";
import RoundDto from "../domain/dto/RoundDto.js";

class OutputView {
  /**
   * @return {void}
   */
 static printStartLine(){
    Console.print('\n실행 결과')
  }

  /**
   *
   * @param {RoundDto} roundDto
   * @return {void}
   */
  static printRoundDto(roundDto){
    //name: ---
    roundDto.cars.forEach(car=>{
      Console.print(`${car.name}: ${'-'.repeat(car.position)}`)
    })
    Console.print('')
  }

  /**
   *
   * @param {WinnersDto} winnersDto
   * @return {void}
   */
  static printWinnersDto(winnersDto){
   const winnerNames = winnersDto.winners.map(winner => winner.name)
    const winnerNamesString = winnerNames.join(', ')
    Console.print(`최종 우승자 : ${winnerNamesString}`)
  }
}

export default OutputView