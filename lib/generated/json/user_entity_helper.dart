import 'package:my_demo/model/user_entity.dart';

userEntityFromJson(UserEntity data, Map<String, dynamic> json) {
	if (json['userName'] != null) {
		data.userName = json['userName'].toString();
	}
	if (json['userPhone'] != null) {
		data.userPhone = json['userPhone'].toString();
	}
	if (json['sex'] != null) {
		data.sex = json['sex'].toString();
	}
	if (json['describe'] != null) {
		data.describe = json['describe'].toString();
	}
	return data;
}

Map<String, dynamic> userEntityToJson(UserEntity entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['userName'] = entity.userName;
	data['userPhone'] = entity.userPhone;
	data['sex'] = entity.sex;
	data['describe'] = entity.describe;
	return data;
}