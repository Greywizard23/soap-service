import * as fastify from "fastify";
import * as http from "http";
import {PassengersRepository} from "../../database/models/repositories/passenger";

export class PassengerController {

    public static async show(req: fastify.FastifyRequest<http.IncomingMessage>,
                             reply: fastify.FastifyReply<http.ServerResponse>) {

        const [passengers] = await PassengersRepository.getPassengerList(req.params.locator);

        reply.view("passenger/show.ejs", {passengers});
    }
}
