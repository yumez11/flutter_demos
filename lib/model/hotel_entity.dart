import 'package:my_demo/generated/json/base/json_convert_content.dart';

class HotelEntity with JsonConvert<HotelEntity> {
  String? hotelName;
  String? hotelLevel;
  String? loction;
  String? contact;
  String? money;
  String? describe;
}
