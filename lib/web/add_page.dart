import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/generated/json/base/json_convert_content.dart';
import 'package:my_demo/model/area_entity.dart';
import 'package:my_demo/model/hotel_entity.dart';
import 'package:my_demo/stelys/stelys.dart';
import 'package:my_demo/utils/utils.dart';
import 'package:my_demo/web/web_moudel_detail_page.dart';
import 'package:my_demo/web/web_moudle_page.dart';

class AddPage extends StatefulWidget {
  AddPage({Key? key, required this.type}) : super(key: key);
  WebMoudelType type;

  @override
  _AddPageState createState() => _AddPageState();
}

class _AddPageState extends State<AddPage> {
  late List<String> names;
  Map<String, dynamic> entMap = {};

  late List<String> imageUrls;

  @override
  void initState() {
    super.initState();

    switch (widget.type) {
      case WebMoudelType.area:
        names = ['景区名称', '景区等级', '景区位置', '门票价格', '景区描述'];
        break;
      case WebMoudelType.hotel:
        names = ['酒店名称', '酒店等级', '酒店位置', '联系电话', '酒店价格', '酒店描述'];
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
              Text(
                '添加内容',
                style: TTextStyles.fTitle,
              ),
              ListView.builder(
                itemBuilder: (ctx, index) {
                  return InputWidget(
                    title: names[index],
                    valueChanged: (value) {
                      synsnec(value, names[index]);
                    },
                  );
                },
                itemCount: names.length,
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
              ),

              GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 3, crossAxisSpacing: 5, mainAxisSpacing: 5, childAspectRatio: 1),
                itemCount: imageUrls.length,
                itemBuilder: (BuildContext context, int index) {
                  return Image.network(imageUrls[index], width: 100, height: 180,);
                },
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 100,
            height: 61.8,
            child: CupertinoButton(
              child: Text('确定添加'),
              onPressed: () {
                save();
              },
            ),
          ),
        ],
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
        break;
      case '景区等级':
        key = 'areaLevel';
        break;
      case '景区位置':
        key = 'loction';
        break;
      case '门票价格':
        key = 'money';
        break;
      case '景区描述':
        key = 'describe';
        break;
      // hotel
      case '酒店名称':
        key = 'hotelName';
        break;
      case '酒店等级':
        key = 'hotelLevel';
        break;
      case '酒店位置':
        key = 'loction';
        break;
      case '联系电话':
        key = 'contact';
        break;
      case '酒店价格':
        key = 'money';
        break;
      case '酒店描述':
        key = 'describe';
        break;
    }

    entMap[key] = (inputValue);
  }

  save() {
    switch (widget.type) {
      case WebMoudelType.area:
        AreaEntity entity = JsonConvert.fromJsonAsT<AreaEntity>(entMap);
        SharedStore.saveAreas([entity]).then((value) {
          if (value) {
            BotToast.showSimpleNotification(title: "添加成功"); // popup a notification toast;
          }
        });
        break;
      case WebMoudelType.hotel:
        HotelEntity entity = JsonConvert.fromJsonAsT<HotelEntity>(entMap);
        SharedStore.saveHotels([entity]).then((value) {
          if (value) {
            BotToast.showSimpleNotification(title: "添加成功"); // popup a notification toast;
          }
        });

        break;
    }
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
      margin: EdgeInsets.all(15),
      padding: EdgeInsets.all(15),
      child: Column(
        children: [
          Text(
            title,
            style: TTextStyles.fTitle,
          ),
          SizedBox(
            height: 10,
          ),
          Container(
            constraints: BoxConstraints(
              minHeight: 20,
              maxHeight: 150,
            ),
            child: TextField(
              maxLines: null,
              controller: inputController,
              textInputAction: TextInputAction.done,
              cursorRadius: Radius.circular(3.0),
              cursorColor: Colors.white,
              style: TTextStyles.f13w,
              decoration: InputDecoration(
                enabledBorder: InputBorder.none,
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(
                    Radius.circular(15), // 边角为30
                  ),
                  borderSide: BorderSide(
                    color: Colors.green, // 边框颜色为绿色
                    width: 0.5, //宽度为5
                  ),
                ),
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
