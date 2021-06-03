import 'package:my_demo/web/commond/commond.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import '../web_home_page.dart';

class WebAreaDetailPage extends StatefulWidget {
  WebAreaDetailPage({Key? key, required this.data}) : super(key: key);
  AreaEntity data;

  @override
  _WebAreaDetailPageState createState() => _WebAreaDetailPageState();
}

class _WebAreaDetailPageState extends State<WebAreaDetailPage> with TickerProviderStateMixin {
  late Size _size;
  String _inputString = '';

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    _size = MediaQuery.of(context).size;

    return Scaffold(
      body: Container(
        child: BackImageWidget(
          backImg: widget.data.images.first,
          child: Container(
            width: double.infinity,
            height: double.infinity,
            color: Colors.transparent,
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Card(
                    color: Colors.transparent,
                    child: Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Column(
                        children: [
                          Row(
                            children: [
                              Text(
                                widget.data.areaName ?? '',
                                style: TTextStyles.fTitle,
                              ),
                              Text(
                                widget.data.areaLevel ?? '',
                                style: TTextStyles.f13w,
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Text(
                            widget.data.location ?? '',
                            style: TTextStyles.f13w,
                          ),
                        ],
                      ),
                    ),
                  ),
                  Card(
                    color: Colors.transparent,
                    child: Container(
                      height: 200,
                      padding: const EdgeInsets.all(10.0),
                      child: new Swiper(
                        itemBuilder: (BuildContext context, int index) {
                          return ClipRRect(
                            borderRadius: BorderRadius.circular(5),
                            child: BaseImage(
                              imgUrl: widget.data.images[index],
                              fit: BoxFit.fill,
                            ),
                          );
                        },
                        itemCount: widget.data.images.length,
                        viewportFraction: 0.8,
                        scale: 0.9,
                      ),
                    ),
                  ),
                  Card(
                    color: Colors.transparent,
                    child: Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Text(
                        (widget.data.describe ?? '') * 10,
                        style: TTextStyles.f13w,
                      ),
                    ),
                  ),
                  ListView(
                    children: widget.data.points
                        .map(
                          (e) => ListTile(
                            leading: ClipRRect(
                              borderRadius: BorderRadius.circular(5),
                              child: BaseImage(
                                imgUrl: e.images.first,
                                fit: BoxFit.cover,
                                width: 100,
                                height: 100,
                              ),
                            ),
                            title: Text(
                              e.pointName ?? '',
                              style: TTextStyles.fTitle,
                              maxLines: 1,
                            ),
                            subtitle: Text(e.location ?? '', style: TTextStyles.f13w),
                          ),
                        )
                        .toList(),
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                  ),
                  Container(
                    height: 200,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: areaModels
                          .where((element) => element.areaName != widget.data.areaName)
                          .map(
                            (e) => Container(
                              width: 250,
                              height: 200,
                              child: ListTile(
                                title: ClipRRect(
                                  borderRadius: BorderRadius.circular(5),
                                  child: BaseImage(
                                    imgUrl: e.areaName ?? '',
                                    fit: BoxFit.cover,
                                    width: 100,
                                    height: 100,
                                  ),
                                ),
                                subtitle: Column(
                                  children: [
                                    Text(
                                      e.areaLevel ?? '',
                                      style: TTextStyles.fTitle,
                                      maxLines: 1,
                                    ),
                                    Text(e.location ?? '', style: TTextStyles.f13w),
                                  ],
                                ),
                              ),
                            ),
                          )
                          .toList(),
                      // shrinkWrap: true,
                      // physics: NeverScrollableScrollPhysics(),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
      floatingActionButton: Container(
        width: 80,
        height: 60,
        child: IconButton(
            iconSize: 14,
            icon: Column(
              children: [
                Text(
                  '新增评论',
                  style: TextStyle(color: Colors.white, fontSize: 9),
                ),
              ],
            ),
            onPressed: () {
              showAddMessageAlert();
            }),
      ),
    );
  }

  showAddMessageAlert() {
    showCupertinoDialog(
        context: context,
        barrierDismissible: true,
        builder: (context) {
          return CupertinoAlertDialog(
            title: Text(
              '添加图片url',
              style: TextStyle(fontSize: 14),
            ),
            content: Padding(
              padding: const EdgeInsets.all(8.0),
              child: CupertinoTextField(
                onChanged: (value) {
                  _inputString = value;
                },
                // placeholder: '添加图片url',
              ),
            ),
            actions: <Widget>[
              CupertinoDialogAction(
                onPressed: () {
                  Navigator.pop(context);


                },
                child: Text('确定'),
              ),
            ],
          );
        });
  }
}
