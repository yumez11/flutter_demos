import 'package:my_demo/generated/json/base/json_convert_content.dart';

class MsgEntity with JsonConvert<MsgEntity> {
	String? msgTitle;
	String? creater;
	String? time;
	String? describe;
	int? up;
	int? down;
}
