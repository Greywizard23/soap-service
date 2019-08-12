import {format} from "date-fns";
import * as fastify from "fastify";
import * as http from "http";
import {OrderRepository} from "../../database/models/repositories/order";
import {DailyInfoService} from "../services/daily-info.service";

export class OrderController {

    public static async show(req: fastify.FastifyRequest<http.IncomingMessage>,
                             reply: fastify.FastifyReply<http.ServerResponse>) {

        const dailyInfoService = new DailyInfoService();
        const now = format(new Date(), "YYYY-MM-DD");

        const $orders = OrderRepository.getOrderList();
        const $data = dailyInfoService.getCursOnDate(now);

        const [
            [orders],
        ] = [
            await $orders,
            await $data
        ];

        const lastUpdate = format(new Date(), "YYYY-MM-DD hh:mm:ss");

        reply.view("order/show.ejs", {orders, dailyInfoService, lastUpdate});
    }
}
