import 'package:flutter/material.dart';
import 'package:my_demo/web/web_moudle_page.dart';
import 'add_page.dart';
import 'web_moudel_detail_page.dart';

List<String> webMoudelsBacks = [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790597721,3502361807&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212518464,3076935787&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3309920848,3927301808&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1263019847,4168672104&fm=26&gp=0.jpg',
];

class WebHomePage extends StatefulWidget {
  const WebHomePage({Key? key}) : super(key: key);

  @override
  _WebHomePageState createState() => _WebHomePageState();
}

class _WebHomePageState extends State<WebHomePage> with TickerProviderStateMixin {
  List<String> webMoudels = ['景区', '酒店', '路线'];
  late TabController _controller;
  // late AnimationController _aniController;
  ValueNotifier<int> cIndexNotifier = ValueNotifier(0);

  @override
  void initState() {
    _controller = TabController(length: webMoudels.length, vsync: this);

    // _aniController = AnimationController(vsync: this)
    //   ..drive(Tween(begin: 0, end: 1))
    //   ..duration = Duration(milliseconds: 500);
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
          backImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212518464,3076935787&fm=26&gp=0.jpg',
          child: Column(
            children: [
              Container(
                height: 80,
                width: double.infinity,
                child: TabBar(
                  indicatorColor: Colors.transparent,
                  controller: _controller,
                  labelColor: Colors.redAccent[100],
                  labelStyle: TextStyle(fontSize: 18),
                  unselectedLabelColor: Colors.black,
                  unselectedLabelStyle: TextStyle(fontSize: 16),
                  tabs: webMoudels
                      .map((e) => Tab(
                            text: e,
                          ))
                      .toList(),
                ),
              ),
              Expanded(
                  child: TabBarView(
                controller: _controller,
                children: webMoudels.map((e) {
                  int index = webMoudels.indexOf(e);
                  return WebMoudelPage(type: WebMoudelType.values[index]);
                }).toList(),
              ))
            ],
          ),
        ),
      ),
      // floatingActionButtonLocation: FloatingActionButtonLocation.endTop,
      floatingActionButton: ValueListenableBuilder<int>(
        valueListenable: cIndexNotifier,
        builder: (c, value, w) {
          print('ValueListenableBuilder  ${value}');
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
            // color: Colors.redAccent,
            child: IconButton(
                iconSize: 14,
                icon: Column(
                  children: [
                    // Icon(icon, size: 30, color: Colors.white),
                    Text(
                      '新增$name',
                      style: TextStyle(color: Colors.white, fontSize: 9),
                    ),
                  ],
                ),
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                    return AddPage(type: WebMoudelType.values[value]);
                  }));
                }),
          );
        },
      ),
    );
  }
}

class HomeItemCell extends StatefulWidget {
  HomeItemCell({Key? key, this.backImage}) : super(key: key);

  String? backImage;

  @override
  _ItemCellState createState() => _ItemCellState();
}

class _ItemCellState extends State<HomeItemCell> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
