import 'package:my_demo/generated/json/base/json_convert_content.dart';

class UserEntity with JsonConvert<UserEntity> {
	String? userName;
	String? userPhone;
	String? sex;
	String? describe;
}
