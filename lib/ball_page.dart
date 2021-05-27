import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class BallPage extends StatefulWidget {
  @override
  _BallPageState createState() => _BallPageState();
}

class _BallPageState extends State<BallPage> with SingleTickerProviderStateMixin {
  static const Duration _duration = Duration(seconds: 1);
  late AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(vsync: this, duration: _duration)
      ..addListener(() {
        setState(() {});
      });
  }

  play() {
    balls = getEnoughBall(100, 150, 135);
    controller.value = 0.0;
    controller.forward();

    // （X-42951.20)/X = 0.3932
    //  X-42951.20 = 0.3932X
    //  X-0.3932X = 42951.20
    //  1X-0.3932X = 42951.20
    //  (1-0.3932)X = 42951.20
    //  0.6068X = 42951.20
    //  X = 42951.20/(1-0.3932)
    //  70783.12
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
        child: Center(
          child: CustomPaint(
            foregroundPainter: new _MyPaint(controller.value),
            size: Size(360, 470),
          ),
        ),
      ),
      floatingActionButton: IconButton(
        icon: Container(
          width: 50,
          height: 50,
          color: Colors.redAccent,
          child: Icon(Icons.ac_unit),
        ),
        onPressed: () {
          play();
        },
      ),
    );
  }
}

List<Ball> balls = [];

List<int> ballColors = [0XFF3CC2FF, 0XFFFFB512, 0XFFff1212];

// 获取一定数量的圆球
// num: 圆的数量，centerX：出现圆的x轴，centerY：出现圆的y轴
List<Ball> getEnoughBall(int num, double centerX, double centerY) {
  List<Ball> balls = [];
  for (int i = 0; i < num; i++) {
    Ball ball = new Ball(centerX, centerY, Random().nextDouble() * 10 + 5, ballColors[Random().nextInt(3)]);
    ball.x = centerX + Random().nextDouble() * 10 - Random().nextDouble() * 10;
    ball.y = centerY + Random().nextDouble() * 10 - Random().nextDouble() * 10;
    // 计算最终位置
    double x = centerX - ball.x;
    double y = centerY - ball.y;
    double scale = (x / y).abs();
    ball.dx = (x < 0 ? 1 : -1) * 70 / sqrt(scale * scale + 1) * Random().nextDouble() * scale + centerX;
    ball.dy = (y < 0 ? 1 : -1) * 70 / sqrt(scale * scale + 1) * Random().nextDouble() + centerY;
    balls.add(ball);
  }
  return balls;
}

class _MyPaint extends CustomPainter {
  _MyPaint(
    this.value,
  );

  double value;

  @override
  void paint(Canvas canvas, Size size) {
    makeBalls(canvas, value);
  }

  makeBalls(Canvas canvas, double value) {
    // Ball ball = new Ball(150, 35, Random().nextDouble() * 10 + 5, ballColors[Random().nextInt(3)]);
    // ball.draw(canvas, 'fill');
    //
    // print('balls  $ball');

    // 缓动动画
    balls.forEach((item) {
      // print('balls  $balls');
      item.vx = (item.dx - item.x) * value;
      item.vy = (item.dy - item.y) * value;
      item.x += item.vx;
      item.y += item.vy;
      item.sx += -item.sx * value;
      item.sy += -item.sy * value;
      item.draw(canvas, 'fill');
    });
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return oldDelegate != this;
  }
}

class Ball {
  double x, y, vx, vy, sx, sy, dx, dy, radius;
  int color = 0XFFFFFF;
  Ball(
    this.x, // 圆心x
    this.y, // 圆心y
    this.radius,
    this.color, {
    this.vx = 0,
    this.vy = 0,
    this.sx = 1, //缩放x
    this.sy = 1, //缩放y
    this.dx = 1,
    this.dy = 1,
  });

  toString() {
    return 'x: $x, y: $y, radius: $radius, vx: $vx, vy: $vy, sx: $sx, sy: $sy, dx: $dx, dy: $dy,';
  }

  draw(Canvas canvas, String type) {
    canvas.save();
    canvas.translate(this.x, this.y);
    canvas.scale(this.sx, this.sy);

    var paint = Paint()
      ..strokeWidth = 6
      ..strokeCap = StrokeCap.round
      ..color = Color(color)
      ..style = type == 'fill' ? PaintingStyle.fill : PaintingStyle.stroke;

    canvas.drawCircle(Offset(0, 0), this.radius, paint);
    canvas.restore();
  }
}
