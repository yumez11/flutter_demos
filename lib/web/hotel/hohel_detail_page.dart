import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/stelys/stelys.dart';

import '../web_home_page.dart';

class WebHotelDetailPage<T> extends StatefulWidget {
  WebHotelDetailPage({Key? key, required this.data}) : super(key: key);
  HotelEntity data;

  @override
  _WebHotelDetailPageState createState() => _WebHotelDetailPageState();
}

class _WebHotelDetailPageState extends State<WebHotelDetailPage> with TickerProviderStateMixin {
  late Size _size;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    _size = MediaQuery.of(context).size;

    // String? name;
    // String? loction;
    // String? level;
    // String? content;
    // String? url;
    // String? url2;
    // List<String> imgs = [];
    //
    // if (widget.data is AreaEntity) {
    //   AreaEntity areaEnt = widget.data as AreaEntity;
    //   name = areaEnt.areaName;
    //   loction = areaEnt.location;
    //   level = areaEnt.areaLevel;
    //   content = areaEnt.describe;
    //   imgs = (areaEnt.images ?? []);
    //   if (imgs.isNotEmpty) {
    //     url = imgs.first;
    //     url2 = imgs.last;
    //   }
    // } else if (widget.data is HotelEntity) {
    //   HotelEntity hotelEntity = widget.data as HotelEntity;
    //   name = hotelEntity.hotelName;
    //   content = hotelEntity.describe;
    //   loction = hotelEntity.location;
    //   level = hotelEntity.hotelLevel;
    //   imgs = (hotelEntity.images ?? []);
    //   if (imgs.isNotEmpty) {
    //     url = imgs.first;
    //     url2 = imgs.last;
    //   }
    // }

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
                                widget.data.hotelName ?? '',
                                style: TTextStyles.fTitle,
                              ),
                              Text(
                                widget.data.hotelLevel ?? '',
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
                            child: Image.network(
                              widget.data.images[index],
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
                        (widget.data.contact ?? '') * 100,
                        style: TTextStyles.f13w,
                      ),
                    ),
                  ),
                  Card(
                    color: Colors.transparent,
                    child: Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Text(
                        (widget.data.describe ?? '') * 100,
                        style: TTextStyles.f13w,
                      ),
                    ),
                  ),
                  // ListView(
                  //   children: webMoudelsBacks
                  //       .map(
                  //         (e) => ListTile(
                  //           leading: ClipRRect(
                  //             borderRadius: BorderRadius.circular(5),
                  //             child: Image.network(
                  //               e,
                  //               fit: BoxFit.cover,
                  //               width: 100,
                  //               height: 100,
                  //             ),
                  //           ),
                  //           title: Text(
                  //             e,
                  //             style: TTextStyles.fTitle,
                  //             maxLines: 1,
                  //           ),
                  //           subtitle: Text(e, style: TTextStyles.f13w),
                  //         ),
                  //       )
                  //       .toList(),
                  //   shrinkWrap: true,
                  //   physics: NeverScrollableScrollPhysics(),
                  // ),
                  Container(
                    // color: Colors.redAccent,
                    height: 200,
                    // width: double.infinity,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: hotelModels
                          .where((element) => element.hotelName != widget.data.hotelName)
                          .map(
                            (e) => Container(
                              width: 250,
                              height: 200,
                              child: ListTile(
                                title: ClipRRect(
                                  borderRadius: BorderRadius.circular(5),
                                  child: Image.network(
                                    e.images.first,
                                    fit: BoxFit.cover,
                                    width: 100,
                                    height: 100,
                                  ),
                                ),
                                subtitle: Column(
                                  children: [
                                    Text(
                                      e.hotelName ?? '',
                                      style: TTextStyles.fTitle,
                                      maxLines: 1,
                                    ),
                                    Text((e.hotelLevel ?? '') + (e.location ?? ''), style: TTextStyles.f13w),
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

class BackImageWidget extends StatelessWidget {
  BackImageWidget({Key? key, this.backImg, this.child, this.fit = BoxFit.cover}) : super(key: key);
  final String? backImg;
  final Widget? child;
  final BoxFit fit;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        children: [
          Positioned.fill(
            child: FadeInImage.assetNetwork(
              fit: fit,
              placeholderErrorBuilder: (xtx, err, st) {
                return placeHolder(width: 40, height: 40);
              },
              image: backImg!,
              placeholder: '....',
            ),
          ),
          Positioned.fill(child: child!),
        ],
      ),
    );
  }

  Widget placeHolder({double width = 40, double height = 40}) {
    return SizedBox(
      width: width,
      height: height,
      child: CupertinoActivityIndicator(
        radius: min(10.0, width / 3),
        // iOSVersionStyle: CupertinoActivityIndicatorIOSVersionStyle.iOS13,
      ),
    );
  }
}
