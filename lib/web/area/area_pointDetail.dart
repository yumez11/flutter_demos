import 'package:my_demo/model/model_helps.dart';
import 'package:my_demo/web/commond/commond.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/stelys/stelys.dart';

class AreaPointDetailPage extends StatefulWidget {
  AreaPointDetailPage({Key? key, required this.data}) : super(key: key);
  AreaPointEntity data;

  @override
  _AreaPointDetailPageState createState() => _AreaPointDetailPageState();
}

class _AreaPointDetailPageState extends State<AreaPointDetailPage> with TickerProviderStateMixin {
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
        child: BackGroundImgWidget(
          backImg: widget.data.images.first,
          useHero: true,
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
                                widget.data.pointName ?? '',
                                style: TTextStyles.fTitle,
                              ),
                              Text(
                                widget.data.pointLevel ?? '',
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
                  Container(
                    height: 200,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: widget.data.points
                          .map(
                            (e) => Container(
                              width: 250,
                              height: 200,
                              child: ListTile(
                                title: ClipRRect(
                                  borderRadius: BorderRadius.circular(5),
                                  child:
                                      BaseImage(imgUrl: e.pointName ?? '', fit: BoxFit.cover, width: 100, height: 100),
                                ),
                                subtitle: Column(
                                  children: [
                                    Text(e.pointLevel ?? '', style: TTextStyles.fTitle, maxLines: 1),
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

    );
  }
}
