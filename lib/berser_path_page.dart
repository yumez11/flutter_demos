import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class BezierPage extends ChangeNotifier {
  List<Offset> _points = [];
  int _selectIndex = -1;

  int get selectIndex => _selectIndex;

  List<Offset> get points => _points;

  set selectIndex(int value) {
    assert(value != null);
    if (_selectIndex == value) return;
    _selectIndex = value;
    notifyListeners();
  }

  void addPoint(Offset offset) {
    points.add(offset);
    notifyListeners();
  }

  void updatePoint(int index, Offset point) {
    points[index] = point;
    notifyListeners();
  }

// Offset get selectPoint => _selectIndex == -1 ? null : _points[_selectIndex];
}

class Path2 extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return Path2State();
  }
}

class Path2State extends State<Path2> {
  BezierPage touchInfo = BezierPage();

  @override
  void dispose() {
    super.dispose();
    touchInfo.dispose();
  }

  @override
  void initState() {
    super.initState();
    // initPoints();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bezier'),
      ),
      body: Container(
        // decoration: BoxDecoration(),
        width: double.infinity,
        height: double.infinity,
        color: Colors.white,
        child: GestureDetector(
          onPanDown: _onPanDown,
          onPanUpdate: _onPanUpdate,
          child: CustomPaint(
            painter: Path2CustomPainter(repaint: touchInfo),
          ),
        ),
      ),
    );
  }

  void _onPanDown(DragDownDetails details) {
    print('_onPanDown');
    if (touchInfo.points.length < 4) {
      touchInfo.addPoint(details.localPosition);
    } else {
      ///绘制曲线
      judgeZone(details.localPosition);
    }
  }

  void _onPanUpdate(DragUpdateDetails details) {
    judgeZone(details.localPosition, update: true);
  }

  ///判断是否在某点半径范围内
  bool judgeCircleArea(Offset src, Offset dst, double r) => (src - dst).distance <= r;

  ///判断那个点被选中
  void judgeZone(Offset src, {bool update = false}) {
    for (int i = 0; i < touchInfo.points.length; i++) {
      if (judgeCircleArea(src, touchInfo.points[i], 15)) {
        touchInfo.selectIndex = i;
        if (update) {
          touchInfo.updatePoint(i, src);
        }
      }
    }
  }
}

class Path2CustomPainter extends CustomPainter {
  Path2CustomPainter({required this.repaint}) : super(repaint: repaint);

  BezierPage repaint;
  List<Offset> pos = [];

  @override
  void paint(Canvas canvas, Size size) {
    canvas.translate(size.width / 2, size.height / 2);
//     path(canvas);
//     drawCoordinate(canvas, size);
//     drawGirdLine(canvas, size);
////    quadraticBezierTo(canvas);

    ///因为画布平移了，所以三个点也需要平移
    pos = repaint.points.map((e) => e.translate(-size.width / 2, -size.height / 2)).toList();

    ///如果点数少于三个就绘制点  如果大于三个就绘制贝塞尔曲线，绘制辅助线
    if (pos.length < 4) {
      canvas.drawPoints(
          PointMode.points,
          pos,
          Paint()
            ..color = Colors.purple
            ..strokeWidth = 8
            ..strokeCap = StrokeCap.round);
    } else {
      Path path = Path();
      /// 画bezier曲线  从0 到 2  控制点在1
      // path.moveTo(pos[0].dx, pos[0].dy);
      // path.quadraticBezierTo(pos[1].dx, pos[1].dy, pos[2].dx, pos[2].dy);

      path.moveTo(pos[0].dx, pos[0].dy);
      path.cubicTo(pos[1].dx, pos[1].dy, pos[2].dx, pos[2].dy, pos[3].dx, pos[3].dy);
      canvas.drawPath(
          path,
          Paint()
            ..color = Colors.purple
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2);


      canvas.drawPoints(
          PointMode.points,
          pos,
          Paint()
            ..color = Colors.purple
            ..strokeWidth = 8
            ..strokeCap = StrokeCap.round);
      ///画控制点到 bezier端点线
      canvas.drawPoints(PointMode.polygon, pos, Paint()..color = Colors.purple);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
