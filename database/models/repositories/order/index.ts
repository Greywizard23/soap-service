import * as sequelize from "../../index";

export class OrderRepository {

    public static async getOrderList() {
        return sequelize.default.query(
            "select o.ID, o.locator, o.date_insert, o.price, o.currency, count(o.ID) as count " +
            "from orders as o left join order_passengers as op on o.ID = op.order_id group by o.ID;"
        );
    }
}
