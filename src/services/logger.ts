import { Injectable } from "../decorators/injectable.js";

@Injectable
export default class Logger {
  active: boolean = false;

  activate() {
    this.active = true;
  }
}
