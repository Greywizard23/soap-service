'use strict';

module.exports = {
    up: (queryInterface) => {
        return Promise.all([
            queryInterface.sequelize.query("" +
                "CREATE TABLE `order_passengers` (" +
                "  `ID` int(11) NOT NULL AUTO_INCREMENT," +
                "  `order_id` int(11) NOT NULL," +
                "  `name_first` varchar(64) NOT NULL," +
                "  `name_second` varchar(64) NOT NULL," +
                "  `date_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP," +
                "  PRIMARY KEY (`ID`)" +
                ") ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (1, 'Василий', 'Пупкин');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (1, 'Василиса', 'Пупкина');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (2, 'Петр', 'Иванов');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (3, 'Иван', 'Петров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Иван', 'Сидоров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Петр', 'Сидоров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Артем', 'Иванов');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (5, 'Олег', 'Сидоров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (6, 'Ольга', 'Сидорова');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (6, 'Анна', 'Сидорова');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (7, 'Анна', 'Иванова');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Елена', 'Петрова');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Андрей', 'Петров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Георгий', 'Петров');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (9, 'Максим', 'Кузнецов');"),
            queryInterface.sequelize.query("INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (10, 'Максим', 'Кузнецов');"),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.sequelize.query("DROP TABLE IF EXISTS `order_passengers`;"),
        ]);
    }
};
