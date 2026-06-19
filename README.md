# DI-Modern

A modern, lightweight Dependency Injection (DI) container implementation for TypeScript using ECMAScript decorators and metadata.

**Note:** This project was created as an educational exercise to understand how Dependency Injection works under the hood by implementing a DI container from scratch.

## Features

- 🚀 **Modern TypeScript** - Built with TypeScript and ECMAScript 2022+ features
- 🎯 **Decorator-based** - Uses native ECMAScript decorators for dependency injection
- 📦 **Lightweight** - Minimal dependencies and small footprint
- 🔧 **Type-safe** - Full TypeScript support with strict type checking
- ⚡ **Fast** - Efficient resolution with metadata-based dependency tracking

## Project Structure

```
src/
├── constants/
│   └── symbols.ts          # DI metadata symbols
├── container/
│   └── index.ts           # Main DI container implementation
├── decorators/
│   ├── inject.ts          @Inject decorator
│   └── injectable.ts      @Injectable decorator
├── services/
│   ├── database.ts        Example database service
│   ├── logger.ts          Example logger service
│   └── user.ts            Example user service
├── types/
│   └── index.ts           Type definitions
└── main.ts               Application entry point
```

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd DI-Modern

# Install dependencies
npm install
# or
pnpm install
```

## Usage

### 1. Define Injectable Services

```typescript
// services/database.ts
import { Injectable } from "../decorators/injectable.js";

@Injectable
export default class Database {
  executeQuery(query: string) {
    console.log(`Executing query: ${query}`);
    // Database logic here
  }
}
```

### 2. Inject Dependencies

```typescript
// services/user.ts
import { Inject } from "../decorators/inject.js";
import { Injectable } from "../decorators/injectable.js";
import Database from "./database.js";

@Injectable
@Inject(Database)
export default class UsersService {
  constructor(private db: Database) {}

  getAll() {
    this.db.executeQuery("SELECT * FROM USERS;");
  }
}
```

### 3. Use the Container

```typescript
// main.ts
import Container from "./container/index.js";
import UsersService from "./services/user.js";

const container = new Container();
const service = container.resolve(UsersService);
service.getAll(); // Executes: SELECT * FROM USERS;
```

## Decorators

### `@Injectable`
Marks a class as injectable by the DI container.

### `@Inject(...dependencies)`
Specifies dependencies to be injected into a class constructor.

## Container API

### `Container.resolve<T>(constructor: Constructor<T>): T`
Resolves a class instance with all its dependencies injected.

## Development

```bash
# Build the project
npm run build

# Run the application
npm start

# Build and run
npm run deploy
```

## TypeScript Configuration

This project uses modern TypeScript features:
- ECMAScript 2022 target
- Experimental decorators (ESNext.Decorators)
- Strict type checking
- Declaration files generation

## Requirements

- Node.js 18+
- TypeScript 5.0+
- pnpm or npm

## License

ISC License

## Contributing

Feel free to open issues or submit pull requests for improvements and bug fixes.