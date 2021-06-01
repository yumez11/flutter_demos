import 'package:my_demo/generated/json/base/json_convert_content.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';

// import 'package:my_demo/model/hotel_entity.dart';
// import 'package:my_demo/model/line_entity.dart';

class LineEntity with JsonConvert<LineEntity> {
  String? lineName;
  String? time;
  LineHotel? hotel;
  LineArea? area;
  String? describe;
  String? lineType;
}

class LineHotel with JsonConvert<LineHotel> {
  String? stayTime;
  List<HotelEntity>? hotels;
}

class LineArea with JsonConvert<LineArea> {
  String? stayTime;
  List<AreaEntity>? areas;
}
