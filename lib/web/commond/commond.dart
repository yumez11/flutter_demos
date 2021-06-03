import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_demo/web/commond/look_pick.dart';

class BackGroundImgWidget extends StatelessWidget {
  BackGroundImgWidget({Key? key, this.backImg, this.child, this.fit = BoxFit.cover, this.useHero = false})
      : super(key: key);
  final String? backImg;
  final Widget? child;
  final BoxFit fit;
  final bool useHero;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        children: [
          Positioned.fill(
              child: BaseImage(
            fit: fit,
            imgUrl: backImg,
            useHero: useHero,
          )),
          Positioned.fill(child: child!),
        ],
      ),
    );
  }
}

class BaseImage extends StatelessWidget {
  const BaseImage({Key? key, this.imgUrl, this.fit = BoxFit.cover, this.width, this.height, this.useHero = false})
      : super(key: key);
  final String? imgUrl;
  final BoxFit fit;
  final double? width;
  final double? height;
  final bool useHero;

  @override
  Widget build(BuildContext context) {
    if (useHero) {
      return Hero(
          tag: imgUrl!,
          child: new Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () {
                Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
                  return LookPictureVideoPage(url: imgUrl!);
                }));
              },
              child: FadeInImage.assetNetwork(
                fit: fit,
                placeholderErrorBuilder: (xtx, err, st) {
                  return placeHolder(width: 40, height: 40);
                },
                image: imgUrl!,
                width: width,
                height: height,
                placeholder: '....',
              ),
            ),
          ));
    } else {
      return InkWell(
        onTap: () {
          Navigator.of(context).push(MaterialPageRoute(builder: (ctx) {
            return LookPictureVideoPage(url: imgUrl!);
          }));
        },
        child: image(),
      );
    }
  }

  Widget image() {
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
