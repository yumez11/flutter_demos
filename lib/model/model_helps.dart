import 'package:my_demo/web/web_login_page.dart';

import 'area_entity.dart';
import 'hotel_entity.dart';
import 'line_entity.dart';

List<String> webMoudelsBacks = [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790597721,3502361807&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212518464,3076935787&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3309920848,3927301808&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1263019847,4168672104&fm=26&gp=0.jpg',
];

/// 景区
// 紫金山
AreaEntity zijinshan = AreaEntity()
  ..areaName = '呵呵景区名'
  ..areaLevel = '呵呵等级'
  ..location = '呵呵位置' * 5
  ..describe = '呵呵描述' * 10
  ..money = '呵呵钱'
  ..images = webMoudelsBacks
  ..points = [
    AreaPointEntity()
      ..pointName = '呵呵点1名'
      ..pointLevel = '呵呵点等级'
      ..location = '呵呵点位置'
      ..describe = '呵呵点描述'
      ..money = '呵呵点金钱'
      ..images = webMoudelsBacks.sublist(2, 3),
    AreaPointEntity()
      ..pointName = '呵呵点1名'
      ..pointLevel = '呵呵点等级'
      ..location = '呵呵点位置'
      ..describe = '呵呵点描述'
      ..money = '呵呵点金钱'
      ..images = webMoudelsBacks.sublist(2, 3),
    AreaPointEntity()
      ..pointName = '呵呵点1名'
      ..pointLevel = '呵呵点等级'
      ..location = '呵呵点位置'
      ..describe = '呵呵点描述'
      ..money = '呵呵点金钱'
      ..images = webMoudelsBacks.sublist(2, 3),
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
  // zijinshan,
  // zijinshan,
  // zijinshan,
];

/// 所有酒店
List<HotelEntity> hotelModels = [
  HotelEntity()
    ..hotelName = '呵呵酒店1'
    ..hotelLevel = '呵呵等级'
    ..location = '呵呵位置'
    ..describe = '呵呵描述'
    ..money = '呵呵钱'
    ..images = webMoudelsBacks,
  HotelEntity()
    ..hotelName = '呵呵酒店2'
    ..hotelLevel = '呵呵等级'
    ..location = '呵呵位置'
    ..describe = '呵呵描述'
    ..money = '呵呵钱'
    ..images = webMoudelsBacks,
  HotelEntity()
    ..hotelName = '呵呵酒店3'
    ..hotelLevel = '呵呵等级'
    ..location = '呵呵位置'
    ..describe = '呵呵描述'
    ..money = '呵呵钱'
    ..images = webMoudelsBacks,
  HotelEntity()
    ..hotelName = '呵呵酒店4'
    ..hotelLevel = '呵呵等级'
    ..location = '呵呵位置'
    ..describe = '呵呵描述'
    ..money = '呵呵钱'
    ..images = webMoudelsBacks,
];

/// 所有路线
List<LineEntity> lineModels = [
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线2'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线3'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
  LineEntity()
    ..lineName = '呵呵路线1'
    ..time = '呵呵时间'
    ..hotel = lineHotel
    ..area = LineArea()
    ..describe = '呵呵路线描述钱'
    ..lineType = '呵呵路线类型',
];
LineHotel lineHotel = LineHotel()
  ..stayTime = '星期六'
  ..hotels = hotelModels;

LineArea lineArea = LineArea()
  ..stayTime = '星期六'
  ..areas = areaModels;
