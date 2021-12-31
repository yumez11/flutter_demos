import 'dart:math';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class DartTreePage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return DartTreePageState();
  }
}

class DartTreePageState extends State<DartTreePage> with SingleTickerProviderStateMixin {
  Offset position = Offset.zero;
  late AnimationController controller;
  Duration _duration = Duration(seconds: 1);

  @override
  void initState() {
    super.initState();
    controller = AnimationController(vsync: this, duration: _duration)
      ..addListener(() {
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('dart_true'),
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.white,
        child: GestureDetector(
          onPanDown: _onPanDown,
          onPanUpdate: _onPanUpdate,
          child: CustomPaint(
            painter: Path2CustomPainter(position, controller.value),
          ),
        ),
      ),
    );
  }

  play() {
    controller.value = 0.0;
    controller.forward();
  }

  void _onPanDown(DragDownDetails details) {
    // play();
  }

  void _onPanUpdate(DragUpdateDetails details) {
    setState(() {
      position = details.localPosition;
    });
  }
}

class Path2CustomPainter extends CustomPainter {
  Path2CustomPainter(this.tapPosition, this.duration);
  int mainLineLong = 50;
  int maxLevel = 10;
  double duration = 0.0;

  Offset tapPosition;
  @override
  void paint(Canvas canvas, Size size) {
    if (tapPosition == Offset.zero) return;
    Paint paint = Paint();

    beginDraw2(canvas, paint, tapPosition, maxLevel);
  }

  beginDraw2(Canvas canvas, Paint paint, Offset point, int level) {
    paint.color = Colors.black; //Colors.primaries[Random().nextInt(17)];
    paint.strokeWidth = level.toDouble();
    paint.style = PaintingStyle.stroke;
    paint.strokeCap = StrokeCap.round;

    /// 将原点设置到点击位置
    canvas.translate(point.dx, point.dy);

    ///树根
    canvas.drawLine(Offset.zero, Offset(0, mainLineLong.toDouble()), paint);

    canvas.save();
    treeDraw2(canvas, paint, Offset(0, mainLineLong.toDouble()), level, pi / (10.5 * duration));
    canvas.restore();

    canvas.save();
    treeDraw2(canvas, paint, Offset(0, mainLineLong.toDouble()), level, -(pi / (10.5 * duration)));
    canvas.restore();

    return;

    canvas.save();
    treeDraw2(canvas, paint, Offset(0, mainLineLong.toDouble()), level, pi / 4);
    // 测试坐标系
    // paint.color = Colors.blueAccent;
    // paint.strokeWidth = 10;
    // canvas.drawLine(Offset(0, 0), Offset(0, 100), paint);
    canvas.restore();

    canvas.save();
    treeDraw2(canvas, paint, Offset(0, mainLineLong.toDouble()), level, -pi / 4);
    // 测试坐标系
    // paint.color = Colors.cyanAccent;
    // paint.strokeWidth = 10;
    // canvas.drawLine(Offset(0, 0), Offset(0, 100), paint);
    canvas.restore();

    // 测试坐标系
    // paint.color = Colors.red;
    // paint.strokeWidth = 10;
    // canvas.drawLine(Offset(0, 0), Offset(0, 100), paint);
  }

  treeDraw2(Canvas canvas, Paint paint, Offset point, int level, double radis) {
    // canvas.save();
    paint.color = Colors.primaries[Random().nextInt(17)]; //Colors.primaries[level];
    paint.strokeWidth = level.toDouble();
    paint.style = PaintingStyle.stroke;
    canvas.translate(point.dx, point.dy);
    canvas.rotate(radis);
    Offset toPoint = Offset(0, 50); //Offset(0, (level / maxLevel) * point.dy);
    // print('level $level   line:${toPoint.dy}');
    canvas.drawLine(Offset(0, 0), toPoint, paint);
    // canvas.restore();
    if (level == 0) {
      return;
    } else {
      canvas.save();
      treeDraw2(canvas, paint, toPoint, level - 1, radis);
      canvas.restore();

      canvas.save();
      treeDraw2(canvas, paint, toPoint, level - 1, -radis);
      canvas.restore();
    }
  }

  // beginDraw(Canvas canvas, Paint paint, Offset point, int level) {
  //   paint.color = Colors.black; //Colors.primaries[Random().nextInt(17)];
  //   paint.strokeWidth = level.toDouble();
  //   paint.style = PaintingStyle.stroke;
  //   Offset toPoint = Offset(point.dx, point.dy + mainLineLong);
  //   canvas.drawLine(point, toPoint, paint);
  //   canvas.translate(toPoint.dx, toPoint.dy - mainLineLong);
  //   treeDraw(canvas, paint, Offset(0, mainLineLong.toDouble()), level, 0.4);
  //
  // }
  //
  // treeDraw(Canvas canvas, Paint paint, Offset point, int level, double radis) {
  //   paint.color = Colors.primaries[Random().nextInt(17)];//Colors.primaries[level];
  //   paint.strokeWidth = level.toDouble();
  //   paint.style = PaintingStyle.stroke;
  //   canvas.translate(point.dx, point.dy);
  //   canvas.rotate(radis);
  //   Offset toPoint = Offset(0, (level / maxLevel) * point.dy);
  //   print('level $level   line:${toPoint.dy}');
  //   canvas.drawLine(Offset(0, 0), toPoint, paint);
  //   if (level == 0) {
  //     return;
  //   } else {
  //     treeDraw(canvas, paint, toPoint, level - 1, radis);
  //   }
  // }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
