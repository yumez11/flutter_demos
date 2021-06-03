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
  static Future<bool> saveMsgs(MsgEntity ent) async {
    List<MsgEntity> ents = getMsgs();
    ents.insert(0, ent);
    bool? a = await SpUtil.putObjectList(msgKey, ents.toSet().toList());
    return a!;
  }

  static List<MsgEntity> getMsgs() {
    List<MsgEntity>? ents = SpUtil.getObjList<MsgEntity>(msgKey, (v) {
      MsgEntity ent = JsonConvert.fromJsonAsT<MsgEntity>(v);
      return ent;
    }, defValue: []);
    return ents ?? [];
  }

  static Future<bool> deleteMsg(MsgEntity ent) async {
    List<MsgEntity> ents = getMsgs();
    ents = ents.where((e) {
      return e.msgTitle == ent.msgTitle && e.creater == ent.creater && e.time != ent.time && e.describe != ent.describe;
    }).toList();
    bool? a = await SpUtil.putObjectList(msgKey, ents.toSet().toList());
    return a!;
  }
}
