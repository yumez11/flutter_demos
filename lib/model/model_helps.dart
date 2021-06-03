import 'area_entity.dart';
import 'hotel_entity.dart';

/// 景区
// 紫金山
AreaEntity zijinshan = AreaEntity()
  ..areaName = ''
  ..areaLevel = ''
  ..location = ''
  ..describe = ''
  ..money = ''
  ..images = []
  ..points = [
    AreaPointEntity()
      ..pointName = ''
      ..pointLevel = ''
      ..location = ''
      ..describe = ''
      ..money = ''
      ..images = []
  ];

// 玄武湖
AreaEntity xuanwuhu = AreaEntity()
  ..areaName = ''
  ..areaLevel = ''
  ..location = ''
  ..describe = ''
  ..money = ''
  ..images = []
  ..points = [
    AreaPointEntity()
      ..pointName = ''
      ..pointLevel = ''
      ..location = ''
      ..describe = ''
      ..money = ''
      ..images = []
  ];

/// 所有景区
List<AreaEntity> areaModels = [
  zijinshan,
  AreaEntity()
    ..areaName = ''
    ..areaLevel = '',
];

/// 所有酒店
List<HotelEntity> hotelModels = [
  HotelEntity()
    ..hotelName = ''
    ..hotelLevel = ''
    ..location = ''
    ..describe = ''
    ..money = ''
    ..images = []
];
