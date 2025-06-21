import request from "supertest";
import app from "../app";

describe("User registration", () => {
  it("should return 400 for missing fields", async () => {
    const res = await request(app).post("/api/users/register").send({});
    expect(res.statusCode).toBe(400);
  });
});
