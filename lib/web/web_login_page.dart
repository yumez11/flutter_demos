import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/web/web_home_page.dart';
import 'web_moudel_detail_page.dart';

List<String> webMoudelsBacks = [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1790597721,3502361807&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1212518464,3076935787&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3309920848,3927301808&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1263019847,4168672104&fm=26&gp=0.jpg',
];

class WebLoginPage extends StatefulWidget {
  const WebLoginPage({Key? key}) : super(key: key);

  @override
  _WebLoginPageState createState() => _WebLoginPageState();
}

class _WebLoginPageState extends State<WebLoginPage> with TickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
  }

// 南京玄武湖 图片
// https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wendangwang.com%2Fpic%2F819d58faf493da100ce71203%2F1-1262-png_6_0_0_0_0_0_0_1785.824_1262.835-1786-0-0-1786.jpg&refer=http%3A%2F%2Fwww.wendangwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625111663&t=7d43f666640b23377eb72c4e69ac6da6
  @override
  Widget build(BuildContext context) {
    int index = Random().nextInt(3);
    print(index);

    return Scaffold(
      body: Container(
        child: BackImageWidget(
            backImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wendangwang.com%2Fpic%2F819d58faf493da100ce71203%2F1-1262-png_6_0_0_0_0_0_0_1785.824_1262.835-1786-0-0-1786.jpg&refer=http%3A%2F%2Fwww.wendangwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625111663&t=7d43f666640b23377eb72c4e69ac6da6",
            child: Center(
              child: Container(
                width: 300,
                height: 180,
                padding: EdgeInsets.only(top: 10, bottom: 0, left: 10, right: 10),
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.3),
                  borderRadius: BorderRadius.circular(10),
                ),
                // color: Colors.black.withOpacity(0.3),
                child: Column(
                  children: [
                    Container(
                      margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      height: 44,
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.white, width: 1),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: TextField(
                        cursorColor: Colors.white,
                        style: TextStyle(color: Colors.white),
                        decoration: InputDecoration(
                          hintText: '用户名',
                          hintStyle: TextStyle(color: Colors.white, fontSize: 14),
                          contentPadding: EdgeInsets.all(15),
                          border: InputBorder.none,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 5,
                    ),
                    Container(
                      margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      height: 44,
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.white, width: 1),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: TextField(
                        cursorColor: Colors.white,
                        style: TextStyle(color: Colors.white),
                        decoration: InputDecoration(
                          hintText: '密码',
                          hintStyle: TextStyle(color: Colors.white, fontSize: 14),
                          contentPadding: EdgeInsets.all(15),
                          border: InputBorder.none,
                        ),
                      ),
                    ),
                    Container(
                      // color: Colors.brown.withOpacity(0.2),
                      child: CupertinoButton(
                        child: Text(
                          '登录',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        onPressed: () {
                          Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                            return WebHomePage();
                          }));
                        },
                      ),
                    )
                  ],
                ),
              ),
            )),
      ),
    );
  }
}
