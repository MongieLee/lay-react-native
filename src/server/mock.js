const express = require('express');
const bodyParser = require('body-parser');
const Mock = require('mockjs');
const server = express();
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});
server.use(bodyParser.json());

server.use('/user/login', (req, res) => {
  console.log(`req.body`);
  console.log(req.body);
  res.json({code: 1000, msg: '请求成功', data: '短信验证码：8888'});
});

server.use('/user/loginVerification', (req, res) => {
  console.log(`req.body`);
  console.log(req.body);
  const json =
    req.body.phone === '13232251122'
      ? {
          code: 10000,
          isNew: true,
          msg: '请求成功',
          token: 'token',
          data: '短信验证码：8888',
        }
      : {
          code: 1000,
          isNew: false,
          token: 'token2',
          msg: '请求成功',
          data: '短信验证码：8888',
        };
  const failed = {
    code: 5001,
    msg: '验证码错误',
    dat: 'error vcode',
  };
  console.log(typeof req.body.vcode);
  if (req.body.vcode === '888888') {
    console.log(`验证码对了`);
    res.json(json);
  } else {
    res.json(failed);
  }
});

server.use('/user/mock', (request, response) => {
  response.json(
    Mock.mock({
      status: 200,
      'dataSource|1-9': [
        //生成|个dataSourece格式的数据
        {
          'key|+1': 1, //数字从当前数开始依次向后+1
          name: '@cname', //随机中文名字
          'age|18-30': 25, //年龄为18-30之间的随机数
          'sex|1': ['男', '女'],
          'mockTitle|1': ['肆无忌惮'],
          'ListInfo|5': [
            {
              img: Mock.Random.image('200x100'),
            },
          ],
          'mockContent|1': [
            '角色精湛主题略荒诞',
            '理由太短 是让人不安',
            '疑信参半 却无比期盼',
            '你的惯犯 圆满',
            '别让纠缠 显得 孤单',
          ],
          'mockAction|1': ['下载', '试听', '喜欢'],
        },
      ],
    }),
  );
});

server.listen('6666', () => {
  console.log('监听端口6666');
});
