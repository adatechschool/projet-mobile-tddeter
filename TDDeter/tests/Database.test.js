import database from "../backend/database.js";

describe("Database test suite", () => {
  beforeEach(async () => {
    const clearDB = await database
      .from("exposantes")
      .delete()
      .neq("first_name", "");
  });

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

  it("should allow to insert data in exposantes table with statusText created", async () => {
    const lastName = "Noël";
    const firstName = "Père";
    const email = "santa@hoho.com";
    const password = "leslutinsmalins";

    const response = await database.from("exposantes").insert({
      last_name: lastName,
      first_name: firstName,
      email: email,
      password: password,
    });
    expect(response.statusText).toBe("Created");
  });

  it("should contain 'participations' table and receive 200 code when performing select on table", async () => {
    const response = await database.from("participations").select();
    expect(response.status).toBe(200);
  });
});
