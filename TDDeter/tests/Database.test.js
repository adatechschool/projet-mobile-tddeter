import database from "../backend/database.js";

describe("Database test suite", () => {
  it("should connect to database", async () => {
    const client = await database;
    expect(client).toBeTruthy();
  });
});
