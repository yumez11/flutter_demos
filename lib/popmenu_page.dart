import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'custom_popmenu/custom_width_pop_widget.dart' as NewPopMenu;

class BasePopUpMenuWidget<T> extends StatelessWidget {
  BasePopUpMenuWidget({
    required this.items,
    required this.btnTitleChild,
    required this.offset,
    this.backColor,
    this.onSelected,
    this.iconWidget,
    this.elevation = 2,
    this.menuItemHeight = 30,
    this.menuItemWidth = 40,
    this.style = const TextStyle(color: Colors.black, fontSize: 12),
  });

  /// itemsMenu标题Strs
  List items;

  /// 标题 title
  Widget btnTitleChild;

  /// itemsMenu 偏移量
  Offset offset;

  /// itemsMenu 背景颜色
  Color? backColor;

  /// 标题icon
  Widget? iconWidget;

  /// 阴影
  double? elevation;

  /// 选择执行方法
  PopupMenuItemSelected<T>? onSelected;

  /// 列表高度
  double? menuItemHeight;

  /// 列表宽度
  double menuItemWidth;

  /// itemsMenu文本
  TextStyle style;

  @override
  Widget build(BuildContext context) {
    return NewPopMenu.PopupMenuButton<T>(
      enabled: true,
      icon: iconWidget,
      padding: EdgeInsets.zero,
      child: btnTitleChild,
      itemBuilder: ((context) {
        return items.map((value) {
          return NewPopMenu.PopupMenuItem<T>(
            textStyle: style,
            height: menuItemHeight ?? 20,
            value: value,
            child: Center(child: Text(value)),
          );
        }).toList();
      }),
      offset: offset,
      color: backColor,
      elevation: elevation,
      menuItemWidth: menuItemWidth,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(5),
      ),
      onSelected: onSelected,
      onCanceled: () {
        print('onCanceled');
      },
    );
  }
}

class PopMenuPage extends StatefulWidget {
  @override
  _PopMenuPageState createState() => _PopMenuPageState();
}

class _PopMenuPageState extends State<PopMenuPage> with SingleTickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
  }

  List menuModel = ['1', '2', '3', '4'];

  String itemValue = 'dddd';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[400],
      appBar: AppBar(
        title: Text('layer painter'),
      ),
      body: Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.grey[400],
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                DropdownButtonHideUnderline(
                  // PopupMenuButton
                  child: DropdownButton<String>(
                    elevation: 1,
                    value: menuModel.first,
                    style: TextStyle(color: Color(0xff333333), fontSize: 13),
                    icon: Icon(Icons.arrow_drop_down, size: 26, color: Color(0xff999999)),
                    items: menuModel.map((value) {
                      return DropdownMenuItem<String>(
                        //下拉项
                        value: value, //下拉项值
                        child: Text(value), //下拉项显示内容
                      );
                    }).toList(),
                    onChanged: (value) {
                      print('呵呵哒2222');
                    }, //on change事件
                  ),
                ),
                BasePopUpMenuWidget<String>(
                  items: menuModel,
                  onSelected: (str) {
                    setState(() {
                      itemValue = str;
                    });
                  },
                  menuItemHeight: 30,
                  menuItemWidth: 50,
                  btnTitleChild: Container(
                    color: Colors.grey,
                    width: 50,
                    height: 20,
                    child: Center(child: Text(itemValue)),
                  ),
                  offset: Offset(0, 20),
                ),
              ],
            ),
          )),
    );
  }
}
