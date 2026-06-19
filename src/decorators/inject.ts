import { INJECT, INJECTABLE } from "../constants/symbols.js";
import { Constructor } from "../types/index.js";

(Symbol as any).metadata ??= Symbol("metadata");

export function Inject(...deps: Function[]) {
  return function <T>(
    constructor: Constructor<T>,
    context: ClassDecoratorContext<Constructor<T>>,
  ) {
    if (context.metadata[INJECTABLE] !== true) {
      throw new Error(`Service ${context.name} is not injectable`);
    }
    context.metadata[INJECT] = deps;
  };
}
