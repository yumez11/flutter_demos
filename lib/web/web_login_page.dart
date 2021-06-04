import 'dart:math';
import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/utils/application.dart';
import 'package:my_demo/web/web_home_page.dart';
import 'package:my_demo/web/commond/commond.dart';

class WebLoginPage extends StatefulWidget {
  const WebLoginPage({Key? key}) : super(key: key);

  @override
  _WebLoginPageState createState() => _WebLoginPageState();
}

class _WebLoginPageState extends State<WebLoginPage> with TickerProviderStateMixin {
  String? _loginName;
  String? _password;

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
        child: BackGroundImgWidget(
            backImg:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01458b5568504300000127165e28af.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625149800&t=cb54fe96bd6c4f270f086fd5028de289',
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
                          hintText: '账号/登录名',
                          hintStyle: TextStyle(color: Colors.white, fontSize: 14),
                          contentPadding: EdgeInsets.all(15),
                          border: InputBorder.none,
                        ),
                        onChanged: (value) {
                          _loginName = value;
                        },
                      ),
                    ),
                    SizedBox(height: 5),
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
                        onChanged: (value) {
                          _password = value;
                        },
                      ),
                    ),
                    Container(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          CupertinoButton(
                            child: Text(
                              '登录',
                              style: TextStyle(
                                color: Colors.white,
                              ),
                            ),
                            onPressed: () {
                              if (_loginName == null && _password == null) {
                                BotToast.showSimpleNotification(title: "请输入账户名或密码");
                                return;
                              }

                              if (_loginName == 'admin' && _password == 'admin') {
                                Application.loginInfo = '管理员';
                                Application.isAdmin = true;
                                BotToast.showSimpleNotification(title: "管理员    登录");

                                Navigator.pushAndRemoveUntil(
                                  context,
                                  MaterialPageRoute(builder: (context) => WebHomePage()),
                                  (route) => route == null,
                                );
                              } else {
                                BotToast.showSimpleNotification(title: "账户或密码错误");
                              }
                            },
                          ),
                          CupertinoButton(
                            child: Text(
                              '游客登录',
                              style: TextStyle(
                                color: Colors.white,
                              ),
                            ),
                            onPressed: () {
                              if (_loginName == null) {
                                BotToast.showSimpleNotification(title: "请填写登录名称");
                                return;
                              }
                              BotToast.showSimpleNotification(title: "欢迎登录", subTitle: _loginName);
                              Application.loginInfo = _loginName;
                              Application.isAdmin = false;
                              Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                                return WebHomePage();
                              }));
                            },
                          ),
                        ],
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
