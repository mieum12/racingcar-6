import RacingController from "./controller/Controller.js";

class App {
  async play() {
   await RacingController.run()
  }
}

export default App


