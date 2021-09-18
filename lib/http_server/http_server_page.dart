import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class HttpServerPage extends StatefulWidget {
  const HttpServerPage({Key? key}) : super(key: key);

  @override
  _HttpServerPageState createState() => _HttpServerPageState();
}

class _HttpServerPageState extends State<HttpServerPage> {
  String _httpStr = 'none';
  late HttpServer _httpServer;

  @override
  void initState() {
    super.initState();
    startServer();
  }

  Future<void> startServer() async {
    print("Starting server on Port : 8088");
    print("Attempting bind");

    final server = await HttpServer.bind("0.0.0.0", 8080);
    print("Server running on IP : ${server.address} On Port : ${server.port}");

    await for (final request in server) {
      print(request.requestedUri);

      request.response
        ..headers.contentType = ContentType("text", "plain", charset: "utf-8")
        ..write("hello world 6666");
      await request.response.flush();
      await request.response.close();
      print("Response served\n");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('http server'),
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.white,
        child: SingleChildScrollView(child: Center(child: Text(_httpStr))),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          IconButton(
            icon: Container(
              width: 100,
              height: 50,
              color: Colors.redAccent,
              child: Icon(Icons.electrical_services_sharp),
            ),
            onPressed: () {
              mainServerStart();
            },
          ),
          IconButton(
            icon: Container(
              width: 100,
              height: 50,
              color: Colors.cyanAccent,
              child: Icon(Icons.read_more),
            ),
            onPressed: () {
              sendMessageToServer();
            },
          ),
        ],
      ),
    );
  }

  /// 1   接受服务器信息请求
  Future<void> mainServerStart() async {
    logg('开启服务');
    // await for (var request in _httpServer) {
    //   processRequest(request);
    // }
  }

  /// 处理服务器信息
  void processRequest(HttpRequest request) {
    print('Got request for ${request.uri.path}');
    final response = request.response;
    logg('on.response:');
    logg(response.toString());
    if (request.uri.path == '/dart') {
      response
        ..headers.contentType = ContentType(
          'text',
          'plain',
        )
        ..write('Hello from the server ${response.toString()}');
      logg('on.response2:');
    } else {
      response.statusCode = HttpStatus.notFound;
    }
    response.close();
  }

  /// 2   向服务器发送信息
  sendMessageToServer() async {
    var url = Uri.parse('http://192.168.2.4:9527/dart');
    logg('on.request: $url');

    try {
      var httpClient = HttpClient();
      var request = await httpClient.getUrl(url);
      var response = await request.close();
      var data = await utf8.decoder.bind(response).toList();
      print('Response ${response.statusCode}: $data');
      logg('on.request succsess: ${data.toString()}');
      httpClient.close();
    } catch (err) {
      logg('on.request  errror: ${err.toString()}');
    }
  }

  // /// 2   向服务器发送信息
  // sendMessageToServer() async {
  //   var url = Uri.parse('http://192.168.2.4:8080/dart');
  //   print('on.request: $url');
  //   try {
  //     var httpClient = HttpClient();
  //     var request = await httpClient.getUrl(url);
  //     var response = await request.close();
  //     var data = await utf8.decoder.bind(response).toList();
  //     print('Response ${response.statusCode}: $data');
  //     print('on.request succsess: ${data.toString()}');
  //     httpClient.close();
  //   } catch (err) {
  //     print('on.request  errror: ${err.toString()}');
  //   }
  // }

  logg(String str) {
    print(str);

    setState(() {
      _httpStr += (str + '\n');
    });
  }
}
