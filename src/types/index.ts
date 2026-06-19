import { INJECT } from "../constants/symbols";

type Constructor<T = any> = new (...args: any[]) => T;

type ClassDecorator<T> = (
  target: Constructor<T>,
  context: ClassDecoratorContext<Constructor>,
) => void;

interface DIMetadata {
  [INJECT]?: Constructor[];
}

export type { ClassDecorator, Constructor, DIMetadata };
