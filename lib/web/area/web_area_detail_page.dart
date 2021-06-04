import 'package:bot_toast/bot_toast.dart';
import 'package:my_demo/model/model_helps.dart';
import 'package:my_demo/model/msg_entity.dart';
import 'package:my_demo/utils/application.dart';
import 'package:my_demo/utils/utils.dart';
import 'package:my_demo/web/commond/commond.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'area_pointDetail.dart';

class WebAreaDetailPage extends StatefulWidget {
  WebAreaDetailPage({Key? key, required this.data}) : super(key: key);
  AreaEntity data;

  @override
  _WebAreaDetailPageState createState() => _WebAreaDetailPageState();
}

class _WebAreaDetailPageState extends State<WebAreaDetailPage> with TickerProviderStateMixin {
  late Size _size;
  String _inputString = '';

  ValueNotifier<List<MsgEntity>> msgList = ValueNotifier([]);

  @override
  void initState() {
    super.initState();
    getMsg();
  }

  getMsg() {
    msgList.value = SharedStore.getMsgs();
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
                            onTap: () {
                              Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                                return AreaPointDetailPage(data: e);
                              }));
                            },
                            leading: ClipRRect(
                              borderRadius: BorderRadius.circular(5),
                              child: BaseImage(imgUrl: e.images.first, fit: BoxFit.cover, width: 100, height: 100),
                            ),
                            title: Text(e.pointName ?? '', style: TTextStyles.fTitle, maxLines: 1),
                            subtitle: Text(e.location ?? '', style: TTextStyles.f13w),
                          ),
                        )
                        .toList(),
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                  ),
                  Container(
                    height: areaModels.where((element) => element.areaName != widget.data.areaName).toList().length > 0
                        ? 200
                        : 0,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: areaModels

                          /// 其他的景点
                          .where((element) => element.areaName != widget.data.areaName)
                          .map(
                            (e) => Container(
                                width: 250,
                                height: 200,
                                child: ListTile(
                                    onTap: () {
                                      Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                                        return WebAreaDetailPage(data: e);
                                      }));
                                    },
                                    title: ClipRRect(
                                      borderRadius: BorderRadius.circular(5),
                                      child:
                                          BaseImage(imgUrl: e.images.first, fit: BoxFit.cover, width: 100, height: 100),
                                    ),
                                    subtitle: Column(
                                      children: [
                                        Text(e.areaLevel ?? '', style: TTextStyles.fTitle, maxLines: 1),
                                        Text(e.location ?? '', style: TTextStyles.f13w),
                                      ],
                                    ))),
                          )
                          .toList(),
                    ),
                  ),
                  ValueListenableBuilder<List<MsgEntity>>(
                      valueListenable: msgList,
                      builder: (ctx, value, wid) {
                        return ListView(
                          children: value
                              .map(
                                (e) => ListTile(
                                  onTap: () {
                                    if (Application.isAdmin) {
                                      showDeleteAlert(context, action: () {
                                        SharedStore.deleteMsg(e);
                                        getMsg();
                                      });
                                    }
                                  },
                                  title: Row(
                                    children: [
                                      Container(
                                        margin: EdgeInsets.all(10),
                                        padding: EdgeInsets.all(5),
                                        // borderRadius: BorderRadius.circular(5),
                                        decoration: BoxDecoration(
                                          color: Colors.white.withOpacity(0.83),
                                          borderRadius: BorderRadius.circular(26),
                                        ),
                                        width: 52,
                                        height: 52,
                                        child: Center(
                                          child: Text((e.creater ?? '').characters.first,
                                              style: TextStyle(fontSize: 32, color: Colors.black12), maxLines: 1),
                                        ),
                                      ),
                                      Text(e.creater ?? '', style: TTextStyles.fTitle, maxLines: 1),
                                    ],
                                  ),
                                  subtitle: Container(
                                    padding: EdgeInsets.all(10),
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                      children: [
                                        Text(e.describe ?? '', style: TextStyle(fontSize: 18, color: Colors.white70)),
                                        Text((e.time ?? ''), style: TTextStyles.f13w),
                                      ],
                                    ),
                                  ),
                                ),
                              )
                              .toList(),
                          shrinkWrap: true,
                          physics: NeverScrollableScrollPhysics(),
                        );
                      }),
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
              '留下你的宝贵意见或分享内容吧~',
              style: TextStyle(fontSize: 14),
            ),
            content: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Container(
                width: 300,
                height: 100,
                child: CupertinoTextField(
                  onChanged: (value) {
                    _inputString = value;
                  },
                ),
              ),
            ),
            actions: <Widget>[
              CupertinoDialogAction(
                onPressed: () {
                  Navigator.pop(context);
                  DateTime time = DateTime.now();

                  MsgEntity ent = MsgEntity()
                    ..msgTitle = widget.data.areaName
                    ..describe = _inputString
                    ..describe = _inputString
                    ..creater = Application.loginInfo
                    ..time = '${time.year}年${time.month}月${time.day}日  ${time.hour}时${time.minute}分${time.second}秒';
                  print('存数据结果1:  $ent');
                  SharedStore.saveMsgs(ent).then((value) {
                    if (value) {
                      BotToast.showSimpleNotification(title: "添加成功");
                      getMsg();
                    } else {
                      BotToast.showSimpleNotification(title: "添加失败");
                    }
                  });
                },
                child: Text('确定'),
              ),
            ],
          );
        });
  }
}

showDeleteAlert(
  BuildContext context, {
  String title = '是否删除此条数据?',
  required VoidCallback action,
}) {
  showCupertinoDialog(
      context: context,
      barrierDismissible: true,
      builder: (context) {
        return CupertinoAlertDialog(
          title: Text(
            title,
            style: TextStyle(fontSize: 14),
          ),
          actions: <Widget>[
            CupertinoDialogAction(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('取消'),
            ),
            CupertinoDialogAction(
              onPressed: () {
                Navigator.pop(context);
                action();
              },
              child: Text(
                '确定',
                style: TextStyle(color: Colors.redAccent),
              ),
            ),
          ],
        );
      });
}
