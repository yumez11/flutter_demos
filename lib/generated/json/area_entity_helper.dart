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
	if (json['location'] != null) {
		data.location = json['location'].toString();
	}
	if (json['money'] != null) {
		data.money = json['money'].toString();
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	if (json['images'] != null) {
		data.images = (json['images'] as List).map((v) => v.toString()).toList().cast<String>();
	}
	if (json['points'] != null) {
		data.points = (json['points'] as List).map((v) => AreaPointEntity().fromJson(v)).toList();
	}
	return data;
}

Map<String, dynamic> areaEntityToJson(AreaEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['areaName'] = entity.areaName;
	data['areaLevel'] = entity.areaLevel;
	data['weather'] = entity.weather;
	data['location'] = entity.location;
	data['money'] = entity.money;
	data['describe'] = entity.describe;
	data['images'] = entity.images;
	data['points'] =  entity.points.map((v) => v.toJson()).toList();
	return data;
}

areaPointEntityFromJson(AreaPointEntity data, Map<String, dynamic> json) {
	if (json['pointName'] != null) {
		data.pointName = json['pointName'].toString();
	}
	if (json['pointLevel'] != null) {
		data.pointLevel = json['pointLevel'].toString();
	}
	if (json['location'] != null) {
		data.location = json['location'].toString();
	}
	if (json['money'] != null) {
		data.money = json['money'].toString();
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	if (json['images'] != null) {
		data.images = (json['images'] as List).map((v) => v.toString()).toList().cast<String>();
	}
	return data;
}

Map<String, dynamic> areaPointEntityToJson(AreaPointEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['pointName'] = entity.pointName;
	data['pointLevel'] = entity.pointLevel;
	data['location'] = entity.location;
	data['money'] = entity.money;
	data['describe'] = entity.describe;
	data['images'] = entity.images;
	return data;
}