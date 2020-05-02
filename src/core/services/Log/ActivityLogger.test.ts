class ActivityLogger {
  static logToServer = () => {};
}

describe("ActivityLogger", () => {
  test("it should exits", () => {
    expect(ActivityLogger).toBeDefined();
  });
});
