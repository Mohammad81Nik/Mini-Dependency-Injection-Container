import { INJECTABLE } from "../constants/symbols.js";
import { Constructor } from "../types/index.js";

(Symbol as any).metadata ??= Symbol("metadata");

export function Injectable<T>(
  constructor: Constructor<T>,
  context: ClassDecoratorContext<Constructor<T>>,
) {
  context.metadata[INJECTABLE] = true;
}
