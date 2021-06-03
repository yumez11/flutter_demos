import 'package:flutter/material.dart';
import 'package:photo_view/photo_view.dart';

/*
  查看视频图片的
 */
class LookPictureVideoPage extends StatefulWidget {
  LookPictureVideoPage({Key? key, required this.url}) : super(key: key);
  String url;

  @override
  _LookPictureVideoPageState createState() => _LookPictureVideoPageState();
}

class _LookPictureVideoPageState extends State<LookPictureVideoPage> {
  @override
  Widget build(BuildContext context) {
    return picture();
  }

  Widget picture() {
    return GestureDetector(
      onTap: () {
        Navigator.of(context).pop();
      },
      child: PhotoView(
        imageProvider: NetworkImage(widget.url),
      ),
    );
  }
}
