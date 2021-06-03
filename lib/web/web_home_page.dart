import 'package:flutter/material.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/utils/application.dart';
import 'package:my_demo/web/web_moudle_page.dart';
import 'area/add_page.dart';
import 'package:my_demo/web/commond/commond.dart';

class WebHomePage extends StatefulWidget {
  const WebHomePage({Key? key}) : super(key: key);

  @override
  _WebHomePageState createState() => _WebHomePageState();
}

class _WebHomePageState extends State<WebHomePage> with TickerProviderStateMixin {
  List<String> webMoudels = ['景区', '酒店', '路线'];
  late TabController _controller;
  ValueNotifier<int> cIndexNotifier = ValueNotifier(0);

  @override
  void initState() {
    _controller = TabController(length: webMoudels.length, vsync: this);
    super.initState();
    _controller.addListener(() {
      cIndexNotifier.value = _controller.index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: BackImageWidget(
          backImg:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01098d5568e1710000012716d6cc06.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625149991&t=9d0ce350c019a6d2744333195c681468',
          child: Column(
            children: [
              Container(
                height: 80,
                width: double.infinity,
                child: TabBar(
                  indicatorColor: Colors.transparent,
                  controller: _controller,
                  labelColor: Colors.cyan,
                  labelStyle: TextStyle(fontSize: 18),
                  unselectedLabelColor: Colors.white,
                  unselectedLabelStyle: TextStyle(fontSize: 17),
                  tabs: webMoudels.map((e) => Tab(text: e)).toList(),
                ),
              ),
              Expanded(
                child: TabBarView(
                  controller: _controller,
                  children: webMoudels.map((e) {
                    int index = webMoudels.indexOf(e);
                    return WebMoudelPage(type: WebMoudelType.values[index]);
                  }).toList(),
                ),
              )
            ],
          ),
        ),
      ),
      floatingActionButton: Application.isAdmin
          ? ValueListenableBuilder<int>(
              valueListenable: cIndexNotifier,
              builder: (c, value, w) {
                IconData icon;
                String name;
                if (value == 0) {
                  icon = Icons.terrain_rounded;
                  name = '景区';
                } else if (value == 1) {
                  icon = Icons.house_rounded;
                  name = '酒店';
                } else {
                  icon = Icons.linear_scale_rounded;
                  name = '路线';
                }
                return Container(
                  width: 80,
                  height: 60,
                  child: IconButton(
                      iconSize: 14,
                      icon: Column(
                        children: [
                          Text(
                            '新增$name',
                            style: TextStyle(color: Colors.white, fontSize: 9),
                          ),
                        ],
                      ),
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(builder: (ctx) {
                            return AddPage(type: WebMoudelType.values[value]);
                          }),
                        );
                      }),
                );
              },
            )
          : null,
    );
  }
}

AreaEntity zijinshan = AreaEntity()
  ..areaName = ''
  ..areaLevel = ''
  ..location = ''
  ..describe = ''
  ..money = ''
  ..images = []
  ..points = [
    AreaPointEntity()
      ..pointName = ''
      ..pointLevel = ''
      ..location = ''
      ..describe = ''
      ..money = ''
      ..images = []
  ];

List<AreaEntity> areaModels = [
  zijinshan,
  AreaEntity()
    ..areaName = ''
    ..areaLevel = '',
];

List<HotelEntity> hotelModels = [
  HotelEntity()
    ..hotelName = ''
    ..hotelLevel = ''
    ..location = ''
    ..describe = ''
    ..money = ''
    ..images = []
];
