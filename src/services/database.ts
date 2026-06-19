import { Inject } from "../decorators/inject.js";
import { Injectable } from "../decorators/injectable.js";
import Logger from "./logger.js";

@Inject(Logger)
@Injectable
export default class Database {
  constructor(private logger: Logger) {}

  showLogs() {
    console.log("checking logger status....");

    if (!this.logger.active) {
      console.log("Logger offline, activating....");
      this.logger.activate();
    }

    console.log("logger status: ", this.logger.active);
  }

  executeQuery(query: string) {
    this.showLogs();

    console.log("------");
    console.log("Executing query: ", query);
  }
}
