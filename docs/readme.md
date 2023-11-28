# ✦ 기능 요구사항 분석 ✦

## ✅ 입력받을 것
- [ ] 경주할 자동차 이름(쉼표 기준 구분)
  - 예외 처리
- [ ] 시도할 횟수

## ✅ 출력
- [ ] 1. 라운드 별 자동차 이름 및 위치
  - [ ] 아래와 같은 형식
```
실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --
```
  - [ ] 첫 라운드는 '실행 결과'도 출력

- [ ] 2. 최종 우승자 출력
 - [ ] 아래와 같은 형식

```
최종 우승자 : pobi, jun
```
 - [ ] 모든 자동차 위치가 0이면 모두 우승자

## ✅ 예외

예외 발생 시 아래와 같은 형식으로 예외 메세지 출력 후 프로그램 종료
```
ERROR] 숫자가 잘못된 형식입니다.
```

## ✅ 기능

`Car`
- [ ] 이름은 5자 이하

`Cars`
- [ ] 중복된 이름 검증

자동차 전진 - 0-9사이 무작위값을 구한 뒤 4 이상이면 전진

승자 구하기 - 모든 라운드 전진 후, 위치를 비교해서 승자구하기

#  ✦ 기능 설계 및 소개 ✦

> 1. MVC 패턴 적용

## 📍 domain

- `Car` : 하나의 차량에 대한 개별 클래스
  - `CarValidator` : 비즈니스 로직에 필요한 검증
- `Cars` : Car를 멤버변수로 갖는 일급 컬렉션
  - `CarsValidator` : 비즈니스 로직에 필요한 검증
- `MoveDecider` : 움직임을 판단하는 클래스


- dto : 
  - `CarDto` : 자동차 하나에 대한 이름과 위치를 갖고있는 DTO 레코드
  - `RoundDto` : 전체 CarDto의 배열을 갖고있는 DTO 레코드
  - `WinnerDto` : 최종 우승자의 이름과 이동거리를 갖고있는 DTO 레코드
  - `WinnersDto` : 전체 WinnerDto의 배열을 갖고있는 DTO 레코드

## 📍 view

- `InputView` : 사용자 입력을 받음
- `InputValidator` : 입력값의 유효성을 검증
- `InputConverter` : 입력값을 알맞은 형태로 변환
- `OutputView` : 데이터를 받아 랜더링 후 출력

## 📍 controller

- `RacingController` : 전체 프로그램의 흐름을 제어

<br/>

> 2. 예외 처리 클래스

## 📍 exception
- `InvalidNumberInputError` : 숫자 입력 검증 예외 처리
- `InvalidFormatInputError` : 포맷 검증 예외 처리
