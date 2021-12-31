import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:my_demo/utils/sp_util.dart';
import 'package:my_demo/web/web_login_page.dart';
import 'ball_page.dart';
import 'berser_path_page.dart';
import 'dart_custom_tree_page.dart';
import 'margLayer_page.dart';
import 'popmenu_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SpUtil.getInstance();
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      builder: BotToastInit(),
      navigatorObservers: [BotToastNavigatorObserver()],
      theme: ThemeData.from(
        colorScheme: const ColorScheme.light(),
      ).copyWith(
        pageTransitionsTheme: const PageTransitionsTheme(
          builders: <TargetPlatform, PageTransitionsBuilder>{
            TargetPlatform.android: ZoomPageTransitionsBuilder(),
          },
        ),
      ),
      home: _TransitionsHomePage(),
    ),
  );
}

class _TransitionsHomePage extends StatefulWidget {
  @override
  _TransitionsHomePageState createState() => _TransitionsHomePageState();
}

class _TransitionsHomePageState extends State<_TransitionsHomePage> {
  bool _slowAnimations = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Material Transitions')),
      body: Column(
        children: <Widget>[
          Expanded(
            child: ListView(
              children: <Widget>[
                _TransitionListTile(
                  title: '贝塞尔曲线',
                  subtitle: '2阶与3阶贝塞尔曲线',
                  onTap: () {
                    pushPage(Path2());
                  },
                ),
                _TransitionListTile(
                  title: 'layer painter',
                  subtitle: 'painter custom Layer ',
                  onTap: () {
                    pushPage(MargerLayerPage(MediaQuery.of(context).size));
                  },
                ),
                _TransitionListTile(
                  title: 'ball painter',
                  subtitle: 'painter custom balls ',
                  onTap: () {
                    pushPage(BallPage());
                  },
                ),
                _TransitionListTile(
                  title: 'pop menumpage ',
                  subtitle: 'test popmenum page ',
                  onTap: () {
                    pushPage(PopMenuPage());
                  },
                ),
                _TransitionListTile(
                  title: 'dart tree',
                  subtitle: 'test popmenum page ',
                  onTap: () {
                    pushPage(DartTreePage());
                  },
                ),
                _TransitionListTile(
                  title: 'web page',
                  subtitle: 'test web page ',
                  onTap: () {
                    pushPage(WebLoginPage());
                  },
                ),
              ],
            ),
          ),
          Divider(height: 0.0),
          SafeArea(
            child: SwitchListTile(
              value: _slowAnimations,
              onChanged: (bool value) async {
                setState(() {
                  _slowAnimations = value;
                });
                // Wait until the Switch is done animating before actually slowing
                // down time.
                if (_slowAnimations) {
                  await Future<void>.delayed(const Duration(milliseconds: 300));
                }
                timeDilation = _slowAnimations ? 20.0 : 1.0;
              },
              title: const Text('Slow animations'),
            ),
          ),
        ],
      ),
    );
  }

  pushPage(Widget page) {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return page;
        },
      ),
    );
  }
}

class _TransitionListTile extends StatelessWidget {
  const _TransitionListTile({
    required this.onTap,
    required this.title,
    required this.subtitle,
  });

  final GestureTapCallback onTap;
  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(
        horizontal: 15.0,
      ),
      // leading: Container(
      //   width: 40.0,
      //   height: 40.0,
      //   decoration: BoxDecoration(
      //     borderRadius: BorderRadius.circular(20.0),
      //     border: Border.all(
      //       color: Colors.black54,
      //     ),
      //   ),
      //   child: const Icon(
      //     Icons.play_arrow,
      //     size: 35,
      //   ),
      // ),
      onTap: onTap,
      title: Text(title),
      subtitle: Text(subtitle),
    );
  }
}
