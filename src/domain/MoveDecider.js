import {Random} from "@woowacourse/mission-utils";

/**
 *
 * @type {number}
 */
const START_INCLUSIVE = 0
/**
 *
 * @type {number}
 */
const END_INCLUSIVE = 9
/**
 *
 * @type {number}
 */
const MIN_DECIDE_NUMBER = 4

class MoveDecider {
  /**
   * @return {boolean}
   */
  canMove(){
    const number = Random.pickNumberInRange(START_INCLUSIVE,END_INCLUSIVE)
    return number >= MIN_DECIDE_NUMBER
  }
}

export default MoveDecider