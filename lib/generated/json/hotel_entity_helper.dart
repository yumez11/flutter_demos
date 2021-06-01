import 'package:my_demo/model/hotel_entity.dart';

hotelEntityFromJson(HotelEntity data, Map<String, dynamic> json) {
	if (json['hotelName'] != null) {
		data.hotelName = json['hotelName'].toString();
	}
	if (json['hotelLevel'] != null) {
		data.hotelLevel = json['hotelLevel'].toString();
	}
	if (json['loction'] != null) {
		data.loction = json['loction'].toString();
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
	return data;
}

Map<String, dynamic> hotelEntityToJson(HotelEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['hotelName'] = entity.hotelName;
	data['hotelLevel'] = entity.hotelLevel;
	data['loction'] = entity.loction;
	data['contact'] = entity.contact;
	data['money'] = entity.money;
	data['describe'] = entity.describe;
	return data;
}