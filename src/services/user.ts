import { Inject } from "../decorators/inject.js";
import { Injectable } from "../decorators/injectable.js";
import Database from "./database.js";

@Inject(Database)
@Injectable
export default class UsersService {
  constructor(private db: Database) {}

  getAll() {
    this.db.executeQuery("SELECT * FROM USERS;");
  }
}
