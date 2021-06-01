import 'package:flutter/material.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'package:my_demo/utils/utils.dart';
import 'package:my_demo/web/web_home_page.dart';

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
      child: ListView.builder(
        itemBuilder: (ctx, index) {
          var model = _entModels[index];
          String? name;
          String? url;
          String? content;

          if (model is AreaEntity) {
            AreaEntity areaEnt = model as AreaEntity;
            name = areaEnt.areaName;
            url = areaEnt.areaName;
            content = areaEnt.describe;
          } else if (model is HotelEntity) {
            HotelEntity areaEnt = model as HotelEntity;
            name = areaEnt.hotelName;
            url = areaEnt.hotelName;
            content = areaEnt.describe;
          }

          return ListTile(
            leading: ClipRRect(
              borderRadius: BorderRadius.circular(5),
              child: Image.network(
                url ?? '',
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
