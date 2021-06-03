import 'package:my_demo/generated/json/base/json_convert_content.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/model/msg_entity.dart';
import 'package:my_demo/utils/sp_util.dart';

class SharedStore {
  static String areaKey = 'areas';
  static String hotelKey = 'hotels';
  static String msgKey = 'msgs';

  /// 存取景点
  static Future<bool> saveAreas(List<AreaEntity> entitys) async {
    List<AreaEntity> ents = getAreas() ?? [];
    print('存取 saveAreas  get ${ents.length}');
    entitys.addAll(ents);
    bool? a = await SpUtil.putObjectList(areaKey, entitys.toSet().toList());
    return a!;
  }

  static List<AreaEntity>? getAreas() {
    return SpUtil.getObjList<AreaEntity>(areaKey, (v) => JsonConvert.fromJsonAsT<AreaEntity>(v));
  }

  static Future<bool> deleteArea(AreaEntity area) async {
    List<AreaEntity> ents = (getAreas() ?? []).where((e) => e.areaName != area.areaName).toList();
    bool? a = await SpUtil.putObjectList(areaKey, ents);
    return a!;
  }

  /// 存取酒店
  static Future<bool> saveHotels(List<HotelEntity> entitys) async {
    List<HotelEntity> ents = getHotels() ?? [];
    print('存取 saveHotels  get ${ents.length}');

    entitys.addAll(ents);
    bool? a = await SpUtil.putObjectList(hotelKey, entitys.toSet().toList());
    return a!;
  }

  static List<HotelEntity>? getHotels() {
    return SpUtil.getObjList<HotelEntity>(hotelKey, (v) => JsonConvert.fromJsonAsT<HotelEntity>(v));
  }

  static Future<bool> deleteHotel(HotelEntity area) async {
    List<HotelEntity> ents = (getHotels() ?? []).where((e) => e.hotelName != area.hotelName).toList();
    bool? a = await SpUtil.putObjectList(hotelKey, ents);
    return a!;
  }

  /// 存取消息
  static Future<bool> saveMsgs(List<MsgEntity> entitys) async {
    List<MsgEntity> ents = getMsgs() ?? [];
    print('存取 saveMsgs  get ${ents.length}');

    entitys.addAll(ents);
    bool? a = await SpUtil.putObjectList(msgKey, entitys.toSet().toList());
    return a!;
  }

  static List<MsgEntity>? getMsgs() {
    return SpUtil.getObjList<MsgEntity>(msgKey, (v) => JsonConvert.fromJsonAsT<MsgEntity>(v));
  }

  static Future<bool> deleteMsg(MsgEntity area) async {
    List<MsgEntity> ents = (getMsgs() ?? []).where((e) => e.msgTitle != area.msgTitle).toList();
    bool? a = await SpUtil.putObjectList(msgKey, ents);
    return a!;
  }
}
