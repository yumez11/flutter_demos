import 'package:my_demo/model/area_entity.dart';

areaEntityFromJson(AreaEntity data, Map<String, dynamic> json) {
	if (json['areaName'] != null) {
		data.areaName = json['areaName'].toString();
	}
	if (json['areaLevel'] != null) {
		data.areaLevel = json['areaLevel'].toString();
	}
	if (json['weather'] != null) {
		data.weather = json['weather'].toString();
	}
	if (json['loction'] != null) {
		data.loction = json['loction'].toString();
	}
	if (json['isStay'] != null) {
		data.isStay = json['isStay'].toString();
	}
	if (json['money'] != null) {
		data.money = json['money'].toString();
	}
	if (json['line'] != null) {
		data.line = json['line'].toString();
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	return data;
}

Map<String, dynamic> areaEntityToJson(AreaEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['areaName'] = entity.areaName;
	data['areaLevel'] = entity.areaLevel;
	data['weather'] = entity.weather;
	data['loction'] = entity.loction;
	data['isStay'] = entity.isStay;
	data['money'] = entity.money;
	data['line'] = entity.line;
	data['describe'] = entity.describe;
	return data;
}