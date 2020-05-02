class ScreenCapture {
  takeScreenshot() {}
}

describe("ScreenCapture", () => {
  let screenCapture = new ScreenCapture();
  test("it should exists", () => {
    expect(screenCapture).toBeDefined();
  });

  test("it should have takeScreenshot function", () => {
    expect(screenCapture.takeScreenshot).toBeDefined();
  });
});
