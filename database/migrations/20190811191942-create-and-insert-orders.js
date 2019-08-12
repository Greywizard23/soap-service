'use strict';

module.exports = {
    up: (queryInterface) => {
        return Promise.all([
            queryInterface.sequelize.query("" +
                "CREATE TABLE `orders` (" +
                "`ID` int(11) NOT NULL AUTO_INCREMENT," +
                "`locator` char(6) NOT NULL," +
                "`email` varchar(64) NOT NULL," +
                "`phone` varchar(32) NOT NULL," +
                "`price` decimal(6,2) NOT NULL," +
                "`currency` char(3) NOT NULL," +
                "`date_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n" +
                "PRIMARY KEY (`ID`)" +
                ") ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (1, 'abcdes', 'qwerty@ya.ru', '+7915', '100.00', 'USD', '2017-03-14 09:59:13');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (2, 'qazwsx', 'qsc@ya.ru', '+375', '99.00', 'EUR', '2017-03-14 09:59:15');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (3, 'qweras', 'sdfs@sd.ru', '+123', '85.00', 'EUR', '2017-03-14 09:59:19');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (4, 'wsxcde', 'asdf@rf.ru', '+456', '1500.00', 'RUB', '2017-03-14 09:59:24');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (5, 'wsxqaz', 'fgfg@ru.ru', '+789', '175.00', 'USD', '2017-03-14 09:59:32');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (6, 'rewsdf', 'asdfa@ya.ru', '+987', '2500.00', 'RUB', '2017-03-14 09:59:29');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (7, 'dsawsx', 'wsxasd@ya.ru', '+654', '25.00', 'EUR', '2017-03-14 09:59:34');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (8, 'qazasd', 'wsxdse@ya.ru', '+321', '47.00', 'EUR', '2017-03-14 09:59:37');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (9, 'wsxrfv', 'www@ya.ru', '+741', '74.00', 'USD', '2017-03-14 09:59:39');"),
            queryInterface.sequelize.query("INSERT INTO `orders` VALUES (10, 'cdevfr', 'ru@ya.ru', '+852', '95.00', 'RUB', '2017-03-14 09:59:41');"),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.sequelize.query("DROP TABLE IF EXISTS `orders`;"),
        ]);
    }
};
