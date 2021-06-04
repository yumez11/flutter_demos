import 'package:flutter/material.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/model/model_helps.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'package:my_demo/utils/application.dart';
import 'package:my_demo/web/area/web_area_detail_page.dart';
import 'package:my_demo/web/commond/commond.dart';
import 'package:my_demo/web/hotel/hotel_detail_page.dart';

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
        // _entModels = SharedStore.getAreas() ?? [];
        _entModels = areaModels;
        break;
      case WebMoudelType.hotel:
        // _entModels = SharedStore.getHotels() ?? [];
        _entModels = hotelModels;
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
          String? level;
          String? money;
          String? content;

          if (model is AreaEntity) {
            AreaEntity areaEnt = model as AreaEntity;
            name = areaEnt.areaName;
            level = areaEnt.areaLevel;
            money = areaEnt.money;
            content = (areaEnt.location ?? '');
            List<String> imgs = (areaEnt.images);
            if (imgs.isNotEmpty) {
              url = imgs.first;
            }
          } else if (model is HotelEntity) {
            HotelEntity hotelEntity = model as HotelEntity;
            name = hotelEntity.hotelName;
            level = hotelEntity.hotelLevel;
            money = hotelEntity.money;
            List<String> imgs = (hotelEntity.images);
            if (imgs.isNotEmpty) {
              url = imgs.first;
            }
            content = hotelEntity.describe;
          }

          // return BackGroundImgWidget(
          //   backImg: url ?? '',
          //   child:

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
            onLongPress: () {
              if (Application.isAdmin) {
                showDeleteAlert(context, action: () {
                  switch (widget.type) {
                    case WebMoudelType.area:
                      // _entModels = SharedStore.getAreas() ?? [];
                      _entModels = areaModels;
                      break;
                    case WebMoudelType.hotel:
                      // _entModels = SharedStore.getHotels() ?? [];
                      _entModels = hotelModels;
                      break;
                  }

                  getDatas();
                });
              }
            },
            leading: ClipRRect(
              borderRadius: BorderRadius.circular(5),
              child: BaseImage(
                useHero: true,
                imgUrl: url ?? '',
                // fit: BoxFit.cover,
                // width: 100,
                // height: 100,
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
        // shrinkWrap: true,
        // physics: NeverScrollableScrollPhysics(),
      ),
    );
  }
}
