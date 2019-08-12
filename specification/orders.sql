-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `locator` char(6) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `currency` char(3) NOT NULL,
  `date_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, 'abcdes', 'qwerty@ya.ru', '+7915', '100.00', 'USD', '2017-03-14 09:59:13');
INSERT INTO `orders` VALUES (2, 'qazwsx', 'qsc@ya.ru', '+375', '99.00', 'EUR', '2017-03-14 09:59:15');
INSERT INTO `orders` VALUES (3, 'qweras', 'sdfs@sd.ru', '+123', '85.00', 'EUR', '2017-03-14 09:59:19');
INSERT INTO `orders` VALUES (4, 'wsxcde', 'asdf@rf.ru', '+456', '1500.00', 'RUB', '2017-03-14 09:59:24');
INSERT INTO `orders` VALUES (5, 'wsxqaz', 'fgfg@ru.ru', '+789', '175.00', 'USD', '2017-03-14 09:59:32');
INSERT INTO `orders` VALUES (6, 'rewsdf', 'asdfa@ya.ru', '+987', '2500.00', 'RUB', '2017-03-14 09:59:29');
INSERT INTO `orders` VALUES (7, 'dsawsx', 'wsxasd@ya.ru', '+654', '25.00', 'EUR', '2017-03-14 09:59:34');
INSERT INTO `orders` VALUES (8, 'qazasd', 'wsxdse@ya.ru', '+321', '47.00', 'EUR', '2017-03-14 09:59:37');
INSERT INTO `orders` VALUES (9, 'wsxrfv', 'www@ya.ru', '+741', '74.00', 'USD', '2017-03-14 09:59:39');
INSERT INTO `orders` VALUES (10, 'cdevfr', 'ru@ya.ru', '+852', '95.00', 'RUB', '2017-03-14 09:59:41');


-- ----------------------------
-- Table structure for `order_passengers`
-- ----------------------------
DROP TABLE IF EXISTS `order_passengers`;
CREATE TABLE `order_passengers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `name_first` varchar(64) NOT NULL,
  `name_second` varchar(64) NOT NULL,
  `date_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_passengers
-- ----------------------------
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (1, 'Василий', 'Пупкин');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (1, 'Василиса', 'Пупкина');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (2, 'Петр', 'Иванов');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (3, 'Иван', 'Петров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Иван', 'Сидоров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Петр', 'Сидоров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (4, 'Артем', 'Иванов');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (5, 'Олег', 'Сидоров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (6, 'Ольга', 'Сидорова');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (6, 'Анна', 'Сидорова');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (7, 'Анна', 'Иванова');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Елена', 'Петрова');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Андрей', 'Петров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (8, 'Георгий', 'Петров');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (9, 'Максим', 'Кузнецов');
INSERT INTO `order_passengers` (`order_id`, `name_first`, `name_second`) VALUES (10, 'Максим', 'Кузнецов');
