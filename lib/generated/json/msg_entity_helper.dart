import 'package:my_demo/model/msg_entity.dart';

msgEntityFromJson(MsgEntity data, Map<String, dynamic> json) {
	if (json['msgTitle'] != null) {
		data.msgTitle = json['msgTitle'].toString();
	}
	if (json['creater'] != null) {
		data.creater = json['creater'].toString();
	}
	if (json['time'] != null) {
		data.time = json['time'].toString();
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	if (json['up'] != null) {
		data.up = json['up'] is String
				? int.tryParse(json['up'])
				: json['up'].toInt();
	}
	if (json['down'] != null) {
		data.down = json['down'] is String
				? int.tryParse(json['down'])
				: json['down'].toInt();
	}
	return data;
}

Map<String, dynamic> msgEntityToJson(MsgEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['msgTitle'] = entity.msgTitle;
	data['creater'] = entity.creater;
	data['time'] = entity.time;
	data['describe'] = entity.describe;
	data['up'] = entity.up;
	data['down'] = entity.down;
	return data;
}