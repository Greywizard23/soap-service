import * as sequelize from "../../index";

export class PassengersRepository {

    public static async getPassengerList(locator: string) {
        return sequelize.default.query(
            `select o.ID, o.locator, op.name_first, op.name_second from orders as o
            left join order_passengers as op on o.ID = op.order_id WHERE o.locator = '${locator}';`
        );
    }
}
