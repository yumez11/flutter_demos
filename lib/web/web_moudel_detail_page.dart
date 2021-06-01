import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';
import 'package:my_demo/stelys/stelys.dart';

import 'web_home_page.dart';

class WebMoudelDetailPage extends StatefulWidget {
  WebMoudelDetailPage({Key? key, this.index}) : super(key: key);
  int? index;

  @override
  _WebMoudelDetailPageState createState() => _WebMoudelDetailPageState();
}

class _WebMoudelDetailPageState extends State<WebMoudelDetailPage> with TickerProviderStateMixin {
  late Size _size;

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
          backImg: webMoudelsBacks[widget.index ??
              0], // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790597721,3502361807&fm=26&gp=0.jpg',
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
                      child: Text(
                        '景区名称${widget.index}',
                        style: TTextStyles.fTitle,
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
                              webMoudelsBacks[index],
                              fit: BoxFit.fill,
                            ),
                          );
                        },
                        itemCount: webMoudelsBacks.length,
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
                        '景区描述' * 100,
                        style: TTextStyles.f13w,
                      ),
                    ),
                  ),
                  ListView(
                    children: webMoudelsBacks
                        .map((e) => ListTile(
                              leading: ClipRRect(
                                borderRadius: BorderRadius.circular(5),
                                child: Image.network(
                                  e,
                                  fit: BoxFit.cover,
                                  width: 100,
                                  height: 100,
                                ),
                              ),
                              title: Text(
                                e,
                                style: TTextStyles.fTitle,
                                maxLines: 1,
                              ),
                              subtitle: Text(e, style: TTextStyles.f13w),
                            ))
                        .toList(),
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                  ),
                  Container(
                    // color: Colors.redAccent,
                    height: 200,
                    // width: double.infinity,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: webMoudelsBacks
                          .map(
                            (e) => Container(
                              width: 250,
                              height: 200,
                              child: ListTile(
                                title: ClipRRect(
                                  borderRadius: BorderRadius.circular(5),
                                  child: Image.network(
                                    e,
                                    fit: BoxFit.cover,
                                    width: 100,
                                    height: 100,
                                  ),
                                ),
                                subtitle: Column(
                                  children: [
                                    Text(
                                      e,
                                      style: TTextStyles.fTitle,
                                      maxLines: 1,
                                    ),
                                    Text(e, style: TTextStyles.f13w),
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
