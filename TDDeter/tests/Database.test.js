import database from "../backend/database.js";

describe("Database test suite", () => {
  it("should connect to database", async () => {
    const client = await database;
    expect(client).toBeTruthy();
  });

  it("should contain 'brocantes' table and receive 200 code when performing select on table", async () => {
    const response = await database.from("brocantes").select();
    expect(response.status).toBe(200);
  });
  it("should contain 'exposantes' table and receive 200 code when performing select on table", async () => {
    const response = await database.from("exposantes").select();
    expect(response.status).toBe(200);
  });
});
