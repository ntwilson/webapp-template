import * as server from "./server";
import * as router from "./router";

server.start(router.route);
