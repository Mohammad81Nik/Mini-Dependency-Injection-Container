import { INJECT } from "../constants/symbols.js";
import { Constructor, DIMetadata } from "../types/index.js";

export default class Container {
  resolve<T>(constructor: Constructor<T>): T {
    const deps = this.getDependencies(constructor);

    const instances = deps.map((dep) => this.resolve(dep));

    return new constructor(...instances);
  }

  getDependencies(target: Function): Constructor[] {
    const deps = target[Symbol.metadata] as DIMetadata;

    return deps?.[INJECT] ?? [];
  }
}
