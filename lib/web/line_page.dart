import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/model/line_entity.dart';
import 'package:my_demo/model/model_helps.dart';
import 'package:my_demo/stelys/stelys.dart';

import 'commond/commond.dart';

class LinMoudelPage extends StatefulWidget {
  const LinMoudelPage({Key? key}) : super(key: key);

  @override
  _LinMoudelPageState createState() => _LinMoudelPageState();
}

class _LinMoudelPageState extends State<LinMoudelPage> {
  List<LineEntity> _entModels = [];

  @override
  void initState() {
    super.initState();
    getDatas();
  }

  getDatas() {
    // SharedStore.getAreas();
    _entModels = lineModels;
    print('length ${_entModels.length}');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 40),
      child: ListView.separated(
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            color: Colors.transparent,
            height: 10,
          );
        },
        itemBuilder: (ctx, index) {
          LineEntity ent = _entModels[index];
          return Container(
            child: Column(
              children: [
                Row(
                  children: [
                    Container(
                      padding: EdgeInsets.all(10),
                      height: 100,
                      width: 100,
                      constraints: BoxConstraints(minWidth: 100, minHeight: 100),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(25),
                        color: Colors.blueGrey,
                      ),
                      child: Text(
                        ent.lineName ?? '',
                        style: TextStyle(color: Colors.primaries[index % 17], fontSize: 30),
                      ),
                      // ),
                    ),
                    Column(
                      children: [
                        Text(
                          ent.lineName ?? '',
                          style: TTextStyles.fTitle,
                          maxLines: 1,
                        ),
                        Text(
                          ent.describe ?? "",
                          style: TTextStyles.f13w,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          );
        },
        itemCount: _entModels.length,
        // shrinkWrap: true,
        // physics: NeverScrollableScrollPhysics(),
      ),
    );
  }
}
