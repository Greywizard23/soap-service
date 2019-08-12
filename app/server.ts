import * as cors from "cors";
import * as ejs from "ejs";
import * as fastify from "fastify";
import * as pointOfView from "point-of-view";
import {OrderController} from "./controllers/order.controller";
import {PassengerController} from "./controllers/passenger.controller";

const server = fastify();
const opts = {};

server.register(pointOfView, {
    engine: {
        ejs
    },
    templates: "templates"
});

server.use(cors());
server.get("/orders", opts, OrderController.show);
server.get("/order/:locator", opts, PassengerController.show);

(async () => {
    try {
        const PORT = 3000;
        const HOST = "0.0.0.0";
        await server.listen(PORT, HOST);
        server.log.info(`server listening on ${HOST}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();
