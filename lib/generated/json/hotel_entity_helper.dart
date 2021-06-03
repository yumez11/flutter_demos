import 'package:my_demo/model/hotel_entity.dart';

hotelEntityFromJson(HotelEntity data, Map<String, dynamic> json) {
	if (json['hotelName'] != null) {
		data.hotelName = json['hotelName'].toString();
	}
	if (json['hotelLevel'] != null) {
		data.hotelLevel = json['hotelLevel'].toString();
	}
	if (json['location'] != null) {
		data.location = json['location'].toString();
	}
	if (json['contact'] != null) {
		data.contact = json['contact'].toString();
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

Map<String, dynamic> hotelEntityToJson(HotelEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['hotelName'] = entity.hotelName;
	data['hotelLevel'] = entity.hotelLevel;
	data['location'] = entity.location;
	data['contact'] = entity.contact;
	data['money'] = entity.money;
	data['describe'] = entity.describe;
	data['images'] = entity.images;
	return data;
}