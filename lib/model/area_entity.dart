import 'package:my_demo/generated/json/base/json_convert_content.dart';

class AreaEntity with JsonConvert<AreaEntity> {
  String? areaName;
  String? areaLevel;
  String? weather;
  String? location;
  String? money;
  String? describe;
  List<String> images = [];
  List<AreaPointEntity> points = [];
}

class AreaPointEntity with JsonConvert<AreaPointEntity> {
  String? pointName;
  String? pointLevel;
  String? location;
  String? money;
  String? describe;
  List<String> images = [];
  List<AreaPointEntity> points = [];
}
