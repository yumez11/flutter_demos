import 'dart:io';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MargerLayerPage extends StatefulWidget {
  MargerLayerPage(this.scrrenSize);

  Size scrrenSize;

  @override
  _MargerLayerPageState createState() => _MargerLayerPageState();
}

class _MargerLayerPageState extends State<MargerLayerPage> with SingleTickerProviderStateMixin {
  late Offset point;
  late AnimationController _controller;
  bool beginDraw = false;

  @override
  void initState() {
    point = Offset(widget.scrrenSize.width, widget.scrrenSize.height);

    super.initState();
    _controller = AnimationController(duration: Duration(milliseconds: 500), vsync: this);
    _controller.addListener(() {
      double dx = point.dx + ((widget.scrrenSize.width + 1 - point.dx) * _controller.value);
      setState(() {
        point = Offset(dx, point.dy);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('layer painter'),
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.white,
        child: GestureDetector(
          onPanDown: _onPanDown,
          onPanUpdate: _onPanUpdate,
          // onPanCancel: _onPanCancel,
          onPanEnd: _onPanCancel,
          child: CustomPaint(
            painter: LayerPainter(point: beginDraw ? point : Offset.zero, scrrenSize: widget.scrrenSize),
          ),
        ),
      ),
    );
  }

  void _onPanDown(DragDownDetails details) {
    if (_controller.isAnimating) {
      return;
    }
    print('_onPanDown  glo:${details.globalPosition}    loc:${details.localPosition} ');
    Size scrrenSize = MediaQuery.of(context).size;
    // print('heheda   scrrenSize ${_controller.isAnimating} ');

    double width = scrrenSize.width;
    if (details.globalPosition.dx > width * 0.7) {
      beginDraw = true;
      point = details.localPosition;
    } else {
      print('没有从屏幕右侧开始');
    }
  }

  void _onPanUpdate(DragUpdateDetails detail) {
    // print(
    //     '_onPanUpdate  glo:${detail.globalPosition}    loc:${detail.localPosition} ');
    setState(() {
      point = detail.localPosition;
    });
  }

  void _onPanCancel(DragEndDetails details) {
    print('_onPanCancel  $point');
    // for (int x = point.dx.toInt(); x <= 360; x++) {
    //   sleep(Duration(milliseconds: (1000 / (360 - point.dx)).toInt()));

    //   setState(() {
    //     point = Offset(x.toDouble(), point.dy);
    //   });
    // }
    if (_controller.isAnimating) {
      return;
    }
    _controller.forward();
    Future.delayed(Duration(milliseconds: 500)).then((value) {
      _controller.value = 0;
      beginDraw = false;
    });
  }
}

class LayerPainter extends CustomPainter {
  LayerPainter({
    required this.point,
    required this.scrrenSize,
  });
  Offset point;
  Size scrrenSize;
  @override
  void paint(Canvas canvas, Size size) {
    if (point == Offset.zero) {
      return;
    }
    // print('LayerPainter. 画画()');

    Paint p = Paint()
      ..color = Colors.purple.withOpacity(0.1)
      ..style = PaintingStyle.fill
      ..strokeWidth = 2;

    double maxX = scrrenSize.width + 1;
    double maxy = scrrenSize.height;

    Path path = Path();
    path.moveTo(maxX, 0);
    double dx = point.dx;
    double dy = point.dy;

    Offset contPoint1 = Offset(dx + ((maxX - dx) * 0.9), dy * 0.8);
    Offset contPoint2 = Offset(dx + (0), dy - 50);

    path.cubicTo(contPoint1.dx, contPoint1.dy, contPoint2.dx, contPoint2.dy, dx, dy);

    Offset contPoint3 = Offset(dx + (0), dy + 50);
    Offset contPoint4 = Offset(dx + ((maxX - dx) * 0.9), dy + ((660 - dy) * 0.2));
    path.cubicTo(contPoint3.dx, contPoint3.dy, contPoint4.dx, contPoint4.dy, maxX, maxy);
    path.close();

    canvas.drawPath(path, p);
    p.style = PaintingStyle.stroke;
    p.color = Colors.purple.withOpacity(0.3);
    canvas.drawPath(path, p);

    // canvas.drawPoints(
    //   PointMode.points,
    //   [contPoint1, contPoint2, contPoint3, contPoint4],
    //   Paint()
    //     ..color = Colors.purple
    //     ..strokeWidth = 8
    //     ..strokeCap = StrokeCap.round,
    // );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    // print('判断是否重绘');
    return true;
  }
}
