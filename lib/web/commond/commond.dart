import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class BackImageWidget extends StatelessWidget {
  BackImageWidget({Key? key, this.backImg, this.child, this.fit = BoxFit.cover}) : super(key: key);
  final String? backImg;
  final Widget? child;
  final BoxFit fit;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        children: [
          Positioned.fill(child: BaseImage(fit: fit, imgUrl: backImg)),
          Positioned.fill(child: child!),
        ],
      ),
    );
  }

  Widget placeHolder({double width = 40, double height = 40}) {
    return SizedBox(
      width: width,
      height: height,
      child: CupertinoActivityIndicator(
        radius: min(10.0, width / 3),
        // iOSVersionStyle: CupertinoActivityIndicatorIOSVersionStyle.iOS13,
      ),
    );
  }
}

class BaseImage extends StatelessWidget {
  const BaseImage({Key? key, this.imgUrl, this.fit = BoxFit.cover, this.width, this.height}) : super(key: key);
  final String? imgUrl;
  final BoxFit fit;
  final double? width;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return FadeInImage.assetNetwork(
      fit: fit,
      placeholderErrorBuilder: (xtx, err, st) {
        return placeHolder(width: 40, height: 40);
      },
      image: imgUrl!,
      width: width,
      height: height,
      placeholder: '....',
    );
  }

  Widget placeHolder({double width = 40, double height = 40}) {
    return SizedBox(
      width: width,
      height: height,
      child: CupertinoActivityIndicator(
        radius: min(10.0, width / 3),
        // iOSVersionStyle: CupertinoActivityIndicatorIOSVersionStyle.iOS13,
      ),
    );
  }
}
