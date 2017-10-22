class settings {
  testingKey: string
  constructor(user: string) {
    this.testingKey = user;
  }
}
const config = new settings("ba26ff97bb1e2e477c10930d0039bb29")
export {config};