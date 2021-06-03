import 'package:my_demo/model/line_entity.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';

lineEntityFromJson(LineEntity data, Map<String, dynamic> json) {
	if (json['lineName'] != null) {
		data.lineName = json['lineName'].toString();
	}
	if (json['time'] != null) {
		data.time = json['time'].toString();
	}
	if (json['hotel'] != null) {
		data.hotel = LineHotel().fromJson(json['hotel']);
	}
	if (json['area'] != null) {
		data.area = LineArea().fromJson(json['area']);
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	if (json['lineType'] != null) {
		data.lineType = json['lineType'].toString();
	}
	return data;
}

Map<String, dynamic> lineEntityToJson(LineEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['lineName'] = entity.lineName;
	data['time'] = entity.time;
	data['hotel'] = entity.hotel?.toJson();
	data['area'] = entity.area?.toJson();
	data['describe'] = entity.describe;
	data['lineType'] = entity.lineType;
	return data;
}

lineHotelFromJson(LineHotel data, Map<String, dynamic> json) {
	if (json['stayTime'] != null) {
		data.stayTime = json['stayTime'].toString();
	}
	if (json['hotels'] != null) {
		data.hotels = (json['hotels'] as List).map((v) => HotelEntity().fromJson(v)).toList();
	}
	return data;
}

Map<String, dynamic> lineHotelToJson(LineHotel entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['stayTime'] = entity.stayTime;
	data['hotels'] =  entity.hotels?.map((v) => v.toJson())?.toList();
	return data;
}

lineAreaFromJson(LineArea data, Map<String, dynamic> json) {
	if (json['stayTime'] != null) {
		data.stayTime = json['stayTime'].toString();
	}
	if (json['areas'] != null) {
		data.areas = (json['areas'] as List).map((v) => AreaEntity().fromJson(v)).toList();
	}
	return data;
}

Map<String, dynamic> lineAreaToJson(LineArea entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['stayTime'] = entity.stayTime;
	data['areas'] =  entity.areas?.map((v) => v.toJson())?.toList();
	return data;
}