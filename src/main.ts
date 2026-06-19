import Container from "./container/index.js";
import UsersService from "./services/user.js";

const container = new Container();

const service = container.resolve(UsersService);

service.getAll();
