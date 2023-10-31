// 정적 배열 - 크기 변경 불가
// 동적 배열 - 크기 변경 가능(push 등), 자바스크립트는 기본적으로 동적 배열
// List

// ADT(abstract data type, 추상 자료형(자료구조 공부)
// 할 수 있는 일을 명확하게 제약을 두기
// 앞, 뒤에서만 넣고 뺼 수 있는 stack, queue처럼 배열 만들기

//클래스 만든 뒤 원하는 기능만 매서드로 만들기 -> 한눈에 파악 가능!

//일급 컬렉션(배열, 같은 타입의 데이터를 여러개 모은 것)

//Cars는 도메인 객체 - 비즈니스 로직만 갖고있음, 출력할때 쓰는 건 따로 dto로 빼줌
export class Cars {
  #carList; // Car[]

  constructor(carNames) {
    // carNames를 돌면서 Cars 만들기
    this.#carList = carNames.map((carNames) => new Cars(carNames));
  }

  // 모든 차를 움직이는 매서드
  // 자기 객체의 데이터는 되도록 자기 안에서 쓰기
  moveAll() {
    this.#carList.forEach((car) => {
      car.move();
    });
  }

  // 결과는 도메인 객체에서 dto로 만들기
  makeCarsDto() {}
}