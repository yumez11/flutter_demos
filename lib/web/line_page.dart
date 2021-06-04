import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/model/line_entity.dart';
import 'package:my_demo/model/model_helps.dart';
import 'package:my_demo/stelys/stelys.dart';

import 'commond/commond.dart';

class LinMoudelPage extends StatefulWidget {
  const LinMoudelPage({Key? key}) : super(key: key);

  @override
  _LinMoudelPageState createState() => _LinMoudelPageState();
}

class _LinMoudelPageState extends State<LinMoudelPage> {
  List<LineEntity> _entModels = [];

  @override
  void initState() {
    super.initState();
    getDatas();
  }

  getDatas() {
    // SharedStore.getAreas();
    _entModels = lineModels;
    print('length ${_entModels.length}');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 40),
      child: ListView.separated(
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            color: Colors.transparent,
            height: 10,
          );
        },
        itemBuilder: (ctx, index) {
          LineEntity ent = _entModels[index];
          return InkWell(
            onTap: () {
              setState(() {
                ent.isExpand = !ent.isExpand;
              });
            },
            child: Container(
              child: Column(
                children: [
                  Row(
                    children: [
                      Container(
                        padding: EdgeInsets.all(10),
                        height: 100,
                        width: 100,
                        constraints: BoxConstraints(minWidth: 100, minHeight: 100),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(25),
                          color: Colors.primaries[index % 17].withOpacity(0.3),
                        ),
                        child: Text(
                          ent.lineName ?? '',
                          style: TextStyle(color: Colors.primaries[index % 17], fontSize: 30),
                        ),
                      ),
                      SizedBox(width: 10),
                      Column(
                        children: [
                          Text(
                            ent.lineName ?? '',
                            style: TTextStyles.fTitle,
                            maxLines: 1,
                          ),
                          SizedBox(height: 10),
                          Text(
                            ent.describe ?? "",
                            style: TTextStyles.f13w,
                          ),
                        ],
                      ),
                    ],
                  ),
                  ent.isExpand
                      ? Container(
                          padding: EdgeInsets.symmetric(horizontal: 50),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height: 10),
                              Container(
                                height: 50,
                                child: Text(ent.area!.stayTime ?? '', style: TTextStyles.fTitle, maxLines: 1),
                              ),
                              Container(
                                height: 200,
                                child: ListView(
                                  scrollDirection: Axis.horizontal,
                                  children: (ent.area!.areas ?? [])
                                      .map(
                                        (e) => Container(
                                            width: 250,
                                            height: 200,
                                            child: ListTile(
                                                title: ClipRRect(
                                                  borderRadius: BorderRadius.circular(5),
                                                  child: BaseImage(
                                                      imgUrl: e.images.first,
                                                      fit: BoxFit.cover,
                                                      width: 100,
                                                      height: 100),
                                                ),
                                                subtitle: Column(
                                                  children: [
                                                    Text((e.areaName ?? '') + ' ' + (e.areaLevel ?? ''),
                                                        style: TTextStyles.fTitle, maxLines: 1),
                                                    Text(e.location ?? '', style: TTextStyles.f13w),
                                                  ],
                                                ))),
                                      )
                                      .toList(),
                                ),
                              ),
                              SizedBox(height: 10),
                              Container(
                                height: 50,
                                child: Text(ent.hotel!.stayTime ?? '', style: TTextStyles.fTitle, maxLines: 1),
                              ),
                              Container(
                                height: 200,
                                child: ListView(
                                  scrollDirection: Axis.horizontal,
                                  children: (ent.hotel!.hotels ?? [])
                                      .map(
                                        (e) => Container(
                                            width: 250,
                                            height: 200,
                                            child: ListTile(
                                                title: ClipRRect(
                                                  borderRadius: BorderRadius.circular(5),
                                                  child: BaseImage(
                                                      imgUrl: e.images.first,
                                                      fit: BoxFit.cover,
                                                      width: 100,
                                                      height: 100),
                                                ),
                                                subtitle: Column(
                                                  children: [
                                                    Text((e.hotelName ?? '') + ' ' + (e.hotelLevel ?? ''),
                                                        style: TTextStyles.fTitle, maxLines: 1),
                                                    Text(e.location ?? '', style: TTextStyles.f13w),
                                                  ],
                                                ))),
                                      )
                                      .toList(),
                                ),
                              ),
                            ],
                          ))
                      : Container(),
                ],
              ),
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
