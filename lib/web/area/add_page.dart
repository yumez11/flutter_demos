import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'package:my_demo/utils/utils.dart';
import 'package:my_demo/web/web_moudle_page.dart';
import 'package:my_demo/web/commond/commond.dart';
import '../../model/area_entity.dart';
import '../../model/hotel_entity.dart';
import '../../stelys/stelys.dart';

class AddPage extends StatefulWidget {
  AddPage({Key? key, required this.type}) : super(key: key);
  WebMoudelType type;

  @override
  _AddPageState createState() => _AddPageState();
}

class _AddPageState extends State<AddPage> {
  late List<String> titles;
  Map<String, dynamic> entMap = {};
  ValueNotifier<List<String>> imageUrls = ValueNotifier([]);
  String? _inputString;

  AreaEntity _areaEntity = AreaEntity();
  HotelEntity _hotelEntity = HotelEntity();

  @override
  void initState() {
    super.initState();
    switch (widget.type) {
      case WebMoudelType.area:
        titles = ['景区名称', '景区等级', '景区位置', '门票价格', '景区描述'];
        break;
      case WebMoudelType.hotel:
        titles = ['酒店名称', '酒店等级', '酒店位置', '联系电话', '酒店价格', '酒店描述'];
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BackImageWidget(
        fit: BoxFit.cover,
        backImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wendangwang.com%2Fpic%2F819d58faf493da100ce71203%2F1-1262-png_6_0_0_0_0_0_0_1785.824_1262.835-1786-0-0-1786.jpg&refer=http%3A%2F%2Fwww.wendangwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625111663&t=7d43f666640b23377eb72c4e69ac6da6",
        child: SingleChildScrollView(
          child: Column(
            children: [
              ListView.builder(
                itemBuilder: (ctx, index) {
                  return InputWidget(
                    title: titles[index],
                    valueChanged: (value) {
                      synsnec(value, titles[index]);
                    },
                  );
                },
                itemCount: titles.length,
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
              ),
              Container(
                color: Colors.redAccent.withOpacity(0.1),
                padding: EdgeInsets.symmetric(horizontal: 40),
                child: Column(
                  children: [
                    InkWell(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('添加图片', style: TTextStyles.fTitle),
                          Icon(Icons.add, color: Colors.white),
                        ],
                      ),
                      onTap: () {
                        showAddImageAlert();
                      },
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    ValueListenableBuilder<List<String>>(
                        valueListenable: imageUrls,
                        builder: (ctx, value, widget) {
                          return GridView.builder(
                            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                              crossAxisCount: 3,
                              crossAxisSpacing: 5,
                              mainAxisSpacing: 5,
                              childAspectRatio: 1,
                            ),
                            itemCount: value.length,
                            itemBuilder: (BuildContext context, int index) {
                              return ClipRRect(
                                borderRadius: BorderRadius.circular(5),
                                child: BaseImage(
                                  imgUrl: value[index],
                                  fit: BoxFit.cover,
                                  width: 100,
                                  height: 180,
                                ),
                              );
                            },
                            shrinkWrap: true,
                            physics: NeverScrollableScrollPhysics(),
                          );
                        }),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Container(
        // width: 100,
        // height: 61.8,
        padding: EdgeInsets.symmetric(horizontal: 40, vertical: 10),
        // color: Colors.redAccent.withOpacity(0.1),
        child: CupertinoButton(
          child: Text('保存'),
          onPressed: () {
            save();
          },
        ),
      ),
    );
  }

  synsnec(String? inputValue, String title) {
    if (inputValue == null || inputValue.isEmpty) {
      return;
    }

    String key = '';
    switch (title) {
      case '景区名称':
        key = 'areaName';
        _areaEntity.areaName = inputValue;
        break;
      case '景区等级':
        key = 'areaLevel';
        _areaEntity.areaLevel = inputValue;
        break;
      case '景区位置':
        key = 'loction';
        _areaEntity.location = inputValue;
        break;
      case '门票价格':
        key = 'money';
        _areaEntity.money = inputValue;
        break;
      case '景区描述':
        key = 'describe';
        _areaEntity.describe = inputValue;

        break;
      // hotel
      case '酒店名称':
        key = 'hotelName';
        _hotelEntity.hotelName = inputValue;

        break;
      case '酒店等级':
        key = 'hotelLevel';
        _hotelEntity.hotelLevel = inputValue;

        break;
      case '酒店位置':
        key = 'loction';
        _hotelEntity.location = inputValue;

        break;
      case '联系电话':
        key = 'contact';
        _hotelEntity.contact = inputValue;

        break;
      case '酒店价格':
        key = 'money';
        _hotelEntity.money = inputValue;

        break;
      case '酒店描述':
        key = 'describe';
        _hotelEntity.describe = inputValue;
        break;
    }

    entMap[key] = (inputValue);
  }

  save() {
    switch (widget.type) {
      case WebMoudelType.area:
        if (imageUrls.value.isNotEmpty) {
          _areaEntity.images = imageUrls.value;
        }
        SharedStore.saveAreas([_areaEntity]).then((value) {
          if (value) {
            BotToast.showSimpleNotification(title: "保存成功");
            _areaEntity = AreaEntity();
            imageUrls.value = [];
          }
        });
        break;
      case WebMoudelType.hotel:
        if (imageUrls.value.isNotEmpty) {
          _hotelEntity.images = imageUrls.value;
        }
        SharedStore.saveHotels([_hotelEntity]).then((value) {
          if (value) {
            BotToast.showSimpleNotification(title: "保存成功");
            _hotelEntity = HotelEntity();
            imageUrls.value = [];
          }
        });
        break;
    }
  }

  showAddImageAlert() {
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
                  if (_inputString != null && _inputString!.isNotEmpty) {
                    List<String> nl = imageUrls.value;
                    nl.add(_inputString!);
                    nl = nl.toSet().toList();
                    imageUrls.value = nl;
                    _inputString = null;
                  }
                },
                child: Text('确定'),
              ),
            ],
          );
        });
  }
}

class InputWidget extends StatelessWidget {
  InputWidget({Key? key, required this.title, required this.valueChanged}) : super(key: key);
  final String title;
  final ValueChanged<String> valueChanged;
  final TextEditingController inputController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(
        minWidth: 220,
        maxWidth: 650,
      ),
      color: Colors.redAccent.withOpacity(0.1),
      margin: EdgeInsets.symmetric(horizontal: 20),
      padding: EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: TTextStyles.fTitle),
          SizedBox(height: 10),
          Container(
            constraints: BoxConstraints(minHeight: 20, maxHeight: 150),
            child: TextField(
              maxLines: null,
              controller: inputController,
              textInputAction: TextInputAction.done,
              cursorRadius: Radius.circular(3.0),
              cursorColor: Colors.white,
              style: TTextStyles.f13w,
              decoration: InputDecoration(
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                // focusedBorder: OutlineInputBorder(
                //   borderRadius: BorderRadius.all(
                //     Radius.circular(15), // 边角为30
                //   ),
                //   borderSide: BorderSide(
                //     color: Colors.green, // 边框颜色为绿色
                //     width: 0.5, //宽度为5
                //   ),
                // ),
              ),
              autofocus: false,
              onChanged: valueChanged,
            ),
          ),
        ],
      ),
    );
  }
}
