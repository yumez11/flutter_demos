import 'package:flutter/material.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'package:my_demo/utils/utils.dart';
import 'package:my_demo/web/hotel/hohel_detail_page.dart';
import 'area/web_area_detail_page.dart';
import 'package:my_demo/web/commond/commond.dart';

enum WebMoudelType { area, hotel, line }

class WebMoudelPage extends StatefulWidget {
  WebMoudelPage({Key? key, required this.type}) : super(key: key);
  final WebMoudelType type;

  @override
  _WebMoudelPageState createState() => _WebMoudelPageState();
}

class _WebMoudelPageState extends State<WebMoudelPage> {
  List _entModels = [];

  @override
  void initState() {
    super.initState();
    getDatas();
  }

  getDatas() {
    switch (widget.type) {
      case WebMoudelType.area:
        _entModels = SharedStore.getAreas() ?? [];
        break;
      case WebMoudelType.hotel:
        _entModels = SharedStore.getHotels() ?? [];
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.separated(
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            color: Colors.transparent,
            height: 10,
          );
        },
        itemBuilder: (ctx, index) {
          var model = _entModels[index];
          String? name;
          String? url;
          String? url2;
          String? content;

          if (model is AreaEntity) {
            AreaEntity areaEnt = model as AreaEntity;
            name = areaEnt.areaName;
            List<String> imgs = (areaEnt.images);
            if (imgs.isNotEmpty) {
              url = imgs.first;
              url2 = imgs.last;
            }
            content = areaEnt.describe;
          } else if (model is HotelEntity) {
            HotelEntity hotelEntity = model as HotelEntity;
            name = hotelEntity.hotelName;
            List<String> imgs = (hotelEntity.images);
            if (imgs.isNotEmpty) {
              url = imgs.first;
              url2 = imgs.last;
            }
            content = hotelEntity.describe;
          }

          return ListTile(
            onTap: () {
              if (widget.type == WebMoudelType.area) {
                Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                  return WebAreaDetailPage(data: model as AreaEntity);
                }));
              } else {
                Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                  return WebHotelDetailPage(data: model as HotelEntity);
                }));
              }
            },
            onLongPress: (){

            },
            leading: ClipRRect(
              borderRadius: BorderRadius.circular(5),
              child: BaseImage(
                imgUrl: url ?? '',
                fit: BoxFit.cover,
                width: 100,
                height: 100,
              ),
            ),
            title: Text(
              name ?? '',
              style: TTextStyles.fTitle,
              maxLines: 1,
            ),
            subtitle: Text(
              content ?? "",
              style: TTextStyles.f13w,
            ),
          );
        },
        itemCount: _entModels.length,
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
      ),
    );
  }


}
