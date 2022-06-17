/**
 * 快手极速版
 * 
 * ！！！仅支持青龙！！！
 * 
 * 使用说明
 * 1、不要再问脚本能跑 6W 还是10W，搜索【冲啊】看看为啥
 * 2、定时配置【1 2-8 * * *】表示脚本将会在 2:01、3:01 一直到 8:01每小时跑一次，一般 5、6 次即可跑满（金币为0）
 * 跑满之后还可以逛街和开宝箱，一共才多少金币，没必要跑对吧。不会写得看下这个，两分钟就能学会：https://www.matools.com/crontab
 * 搜索【原地爆炸】看看大佬是怎么想得
 * 
 * 异常排查
 * 1、金币为0       --- 今天已经跑满了，明天在试试
 * 2、签名校验失败  --- 手机登录账号刷几个视频试试，不行就重抓 CK
 * 
 * 修改内容
 * 1. 去掉 ks.json，完全不做邀请/助力任务
 * 2. 不需要环境变量，直接将 CK 填在脚本中，方便不同CK做不同管理(比如新号可以跑完就全部自动提现；老号保守些不自动提现)
 * 3. 所有方法增加 try-catch，顺畅到底不断流
 */

// 根据自己信息填好
// const ksjsb_guanggao = "http://127.0.0.1:50600/ksjsbjk.json"; // 你的广告列表地址，json地址，必须设置，可以从其他脚本复制
const ksjsb_guanggao = "https://ghproxy.com/https://raw.githubusercontent.com/HarbourJ/Temp/main/ksjsbjk.json"
const ksjsb_cookie = "kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAH8W5km_dfQJrN2sWY7f5kpzIGwxY-V3mbta2_Qm--5ITMpeyGL4uG6ZBGUu8LWkGKW2r80jvNpjpC1mtjNqbLTFnZTx7nzeP1QBqM2Um9lXDiLOLh18BCb98JAQ3EjzIQdreEoUHnHfMNlvR6tYYwPFb4yO6kITngWCl0f8eHSQwtYP9G76tFzqe0_CH7rlHkBfxRlbUfNqSuCwer6pCypGhKBn81trpJKB6BrmlxeXw7Wm2EiINpoisaQlK1a1ept0yma4MZwwBr1PC2YhrVs_ru9vEufKAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAH8W5km_dfQJrN2sWY7f5kpzIGwxY-V3mbta2_Qm--5ITMpeyGL4uG6ZBGUu8LWkGKW2r80jvNpjpC1mtjNqbLTFnZTx7nzeP1QBqM2Um9lXDiLOLh18BCb98JAQ3EjzIQdreEoUHnHfMNlvR6tYYwPFb4yO6kITngWCl0f8eHSQwtYP9G76tFzqe0_CH7rlHkBfxRlbUfNqSuCwer6pCypGhKBn81trpJKB6BrmlxeXw7Wm2EiINpoisaQlK1a1ept0yma4MZwwBr1PC2YhrVs_ru9vEufKAUwAQ; __NSWJ=muNdN5LFHecX5zucVm1FicJwT%2Bxl4FpvI4vfUybHxycis4am5R7ZtgboKcMEpOxBAAAAAg%3D%3D;" 
// const ksjsb_cookie = "kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAGxUlIBRvKL-fZjDKA82TfxRK1UlhWtljFNL439XryI39ZFT4yEfPpV8--KmZuePEyQamjELBO9p-z3fq1ad1affmjYFvfn6UcJP4EuWRhzSza2hbil72NlzPWIQK1VWFKfxi0OI93_ZZ5vPd0FuAccZ31UZe-u3TXxYpq7UCshRTNWP-AMrpFcKAMphxkYkQboopgLWdFuUC5mBqcLUkYpGhJey_IdJfJMt4oIXuVy7QAVNNEiIPZShr3eMyKpFgD74u3gn1qmkv6kltavQBPSBBV0hD5OKAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAGxUlIBRvKL-fZjDKA82TfxRK1UlhWtljFNL439XryI39ZFT4yEfPpV8--KmZuePEyQamjELBO9p-z3fq1ad1affmjYFvfn6UcJP4EuWRhzSza2hbil72NlzPWIQK1VWFKfxi0OI93_ZZ5vPd0FuAccZ31UZe-u3TXxYpq7UCshRTNWP-AMrpFcKAMphxkYkQboopgLWdFuUC5mBqcLUkYpGhJey_IdJfJMt4oIXuVy7QAVNNEiIPZShr3eMyKpFgD74u3gn1qmkv6kltavQBPSBBV0hD5OKAUwAQ; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAY_1WmRs4mwrszBaTyz-u4Wml3lX_amcCd1T5eK7b08ivlfcVB_zSOZy2APl3nT3LgmJO2fkwBhiyUk2ZknlEPKxIX4QwvCJr66ecnrpg-1NakUATay3pskBV1KJQRBYl8PH-DPtVOOpMn6Dq54s9D46SHpnvFeDcWbOkdsMrDp8h-AtXa655moDvzvDWynr_RoSxaoHlrlMnKywvJUnqam2Vk5JIiCOjS0hEnmfCchsQ7NZIKeCexSUwlPgCXBHxnpVwEZpCCgFMAE; sid=f45d0eed-fafd-42cd-ad6c-b53c62040d48; __NSWJ=%2FBIchsguQ%2Byw2CTDKlEgp%2FXDj8dBrocLnykamYByVT%2FRgLRozLat9y5grCVCBe8rAAAACw%3D%3D;"

// 你的CK，标准写法 kuaishou.api_st=xxx;@kuaishou.api_st=yyy; <--- 看到最后的英文分号(;)了么，不要省略
const ksjsb_money = ""; // 提现金额，整数字符串，留空表示按照快手返回的金额列表提现。比如'3'，表示每次提现 3 块。【建议留空】
const ksjsb_hour = 16; // 提现时间，整数，精确到小时。比如 8 就是早上 8 点提现，如果在 8：00-8：59 这一个小时内，脚本没跑，那就是不自动提现【建议改掉】
const ksjsb_allMoneyOut = 0; // 是否尝试全部提现，0 不全部提现, 1 全部提现。【建议0，配置成1小心黑号】
const ksjsb_channel = "ALIPAY" // 提现渠道，ALIPAY 支付宝, WECHAT 微信【只有账号同时绑定了支付宝和微信时才生效，只绑定了支付宝咋提现到微信，对吧】

// 以下跟各位老板无关，不用看啦
// 不过想看的话，关键点都用三个井号(###)标出来了，可以搜索下，减少黑号风险
const scriptTitle = "快手极速版";
const selfScript = new chaosConst(scriptTitle);
let runDate = new Date(),
  runHour = runDate["getHours"](),
  accountSeparator = "@", // CK分割符
  runMessage = '',
  runResponse,
  runChannel = ksjsb_channel,
  runCookie = ksjsb_cookie,
  runCookieArr = [],
  runWithrawCash = ksjsb_money,
  runWithrawTime = ksjsb_hour,
  runWithrawAggressive = ksjsb_allMoneyOut,
  runKsjsbNotify = 0, // 0 不通知 1 提现时通知 2 每次都通知【### 保持 0 即可】
  cookiePointer = 0,
  stepNumber = 12; // 任务步长,向下取整。比如任务供10个，则每次完成1个，任务是60个，则每次完成5个。【### 这个配置只是看看而已，实际是写死的】

// 广告视频配置
const adCfg = {
    'ad1': {
      'id': 0,
      'name': '广告视频-0'
    },
    'ad2': {
      'id': 49,
      'name': "广告视频-49"
    },
    'box': {
      'id': 77,
      'name': "宝箱翻倍视频-77"
    },
    'sign': {
      'id': 136,
      'name': "签到翻倍视频-136"
    },
    'unknown1': {
      'id': 151,
      'name': "未知视频-151"
    }
  },

  // 任务 ID
  // 例如：广告任务ID是49(ad:49)
  taskIDCfg = {
    'ad': 49,
    'live': 75,
    'luckydraw': 161,
    'gj': 217,
    'invite': 2008
  },

  // 【### 冲啊】
  // 看视频的金币配置，大佬已经配置好的，无论啥脚本，核心就是这些配置，你觉得那些引流的会配置这个
  reward_sign = {
    'extParams': "56dfe31594b858e69ef613f5e97227fb03493544e59e2b2a726006e2852ec1040cd969d4748c460ecf574cc487214a91f70592aa8b2225630027c39ca2c544027efa65815d1acea23cb503034b12641c",
    'businessId': 161,
    'pageId': 11101,
    'posId': 4683,
    'subPageId': 100013628,
    'name': "获取抽奖次数视频"
  },
  reward990 = {
    'extParams': "56dfe31594b858e69ef613f5e97227fbe9979240d7caecf84db127b47a4a8bb0a744376361788e9d4f8341978842c3a723b72e4befa3dc60a2c580bf4fc43399f798f286e2c8c3069effa1db27aa45bd",
    'businessId': 161,
    'pageId': 11101,
    'posId': 4685,
    'subPageId': 100013630,
    'name': "抽奖视频990+"
  },
  reward100 = {
    'extParams': "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
    'businessId': 161,
    'pageId': 11101,
    'posId': 4684,
    'subPageId': 100013629,
    'name': '抽奖视频100+'
  },
  reward_2_990 = {
    'extParams': "56dfe31594b858e69ef613f5e97227fbe9979240d7caecf84db127b47a4a8bb0a744376361788e9d4f8341978842c3a723b72e4befa3dc60a2c580bf4fc43399f798f286e2c8c3069effa1db27aa45bd",
    'businessId': 11,
    'pageId': 11101,
    'posId': 4684,
    'subPageId': 100013629,
    'name': "抽奖视频990+"
  },
  reward_80 = {
    'extParams': '56dfe31594b858e69ef613f5e97227fbcb18b65ce67342c03fd16da46f5dd52b0b37201ad9cf67cdfd05f8c9a5234ae7b24624bc881a52c3c7e6ab22e32f6fd2c0e52c6c0e9b7e312f021e0d41162e7f',
    'businessId': 11,
    'pageId': 11101,
    'posId': 4684,
    'subPageId': 100013629,
    'name': "抽奖视频80+"
  },
  reward_invite_100 = {
    'extParams': "60869a9fd2ab63f5e0b1725d059da31f7d3ed3046658438ee204a153c3bc47189ccf268b22e603b6750780c9647e7a12b3027381e11da27b234311bccfd4a67bb892f889a4020ceae4f4e102cc50c327",
    'businessId': 2008,
    'pageId': 100012068,
    'posId': 6765,
    'subPageId': 100015089,
    'name': "邀请页视频100金币"
  },
  reward_live = {
    'extParams': "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
    'businessId': 75,
    'pageId': 100012068,
    'posId': 6765,
    'subPageId': 100015089,
    'name': '直播任务'
  },
  reward_sign_double = {
    'extParams': "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
    'businessId': 168,
    'pageId': 100012068,
    'posId': 6765,
    'subPageId': 100015089,
    'name': "签到翻倍视频2"
  },
  luckVideoCfg = {
    'luckdrawNum_161': reward_sign,
    'luckdrawVideo_161_213': reward990,
    'luckdrawVideo_161_100': reward100,
    'luckdrawVideo_11_213': reward_2_990,
    'luckdrawVideo_11_100': reward_80,
    'inviteVideo_2008': reward_invite_100,
    'liveVideo_75': reward_live,
    'signVideo_168': reward_sign_double
  };

// 核心类,定义了所有需要的操作
class cookieEntityClass {
  constructor(T) {
    // ### 注意这里的写法
    let p = T["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    this["index"] = ++cookiePointer;
    // ### 【建议自己抓下包，对着字段改下，不然大家都一样】
    // this["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_" + randomDid(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + p;    this["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_" + randomDid(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + p;
    this["cookie"] = "kpn=NEBULA; kpf=IPHONE_PHONE; did=IPHONE_" + randomDid(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + p;

    this["name"] = this["index"];
    this["valid"] = false; // 默认无效,调用过用户信息后则变为有效
    this["bindAlipay"] = false;
    this["alipay"] = '';
    this["bindWechat"] = false;
    this["wechat"] = '';
    this["needSms"] = false;
    this["hasLuckydraw"] = true;

    // 配置需要做哪些任务
    // 【 ### num 就是每次运行的任务的数量，所以前面说 stepNumber 配置只是看看的】
    const C = {
        'num': 2,
        'needRun': true
      },
      S = {
        'num': 1,
        'needRun': true
      },
      a = {
        'num': 5,
        'needRun': true
      },
      Y = {
        'num': 1,
        'needRun': true
      },
      j = {
        'num': 5,
        'needRun': false // 不做邀请任务【相关代码已删除，改成 true 也没用】
      },
      Z = {
        '49': C, // 广告任务
        '75': S, // 直播任务
        '161': a, // 抽奖任务
        '217': Y, // 逛街任务
        '2008': j // 邀请任务
      };
    this["task"] = Z;
  }

  // 查询账号详情
  async ["getUserInfo"]() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      S["result"] == 1 ? (this["valid"] = true, this["name"] = S["data"]["userData"]["nickname"], this["cashBalance"] = S["data"]["totalCash"], this["coinBalance"] = S["data"]["totalCoin"], this["allCash"] = S["data"]["allCash"], console["log"]("账号[" + this["name"] + "]账号余额" + this["cashBalance"] + '元，' + this["coinBalance"] + "金币，未审核余额" + Math["floor"](parseFloat(this["allCash"]) - parseFloat(this["cashBalance"])) + '元')) : console["log"]("账号[" + this["name"] + "]查询账号信息失败：" + S["error_msg"]);
    } catch (E) {
      console['log']("获取用户详情(getUserInfo)异常:" + E)
    }
  }

  // 分享得金币任务
  async ['setShare']() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare",
        p = '',
        C = prepareRequestEntity(c, this['cookie'], p);
      await doRequest("post", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      S["result"] == 1 ? (console["log"]("账号[" + this["name"] + "]准备分享得金币"), await selfScript["wait"](200), await this["taskShareReward"](122)) : console["log"]("账号[" + this["name"] + "]分享失败：" + S["error_msg"]);
    } catch (E) {
      console['log']("准备分享得金币异常:" + E)
    }
  }

  // 执行分享得金币任务
  async ["taskShareReward"](T) {
    try {
      let p = "https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=" + T,
        C = '',
        S = prepareRequestEntity(p, this["cookie"], C);

      await doRequest("get", S);
      let a = runResponse;

      if (!a) {
        return;
      }

      a["result"] == 1 ? console["log"]("账号[" + this["name"] + "]完成任务[" + T + "]成功，获得" + a["data"]['amount'] + '金币') : console["log"]("账号[" + this["name"] + "]完成任务[" + T + "]失败：" + a["error_msg"]);
    } catch (E) {
      console['log']("执行分享得金币任务异常:" + E)
    }
  }

  // 获取签到信息
  async ['getSignInfo']() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      S["result"] == 1 ? (console['log']("账号[" + this["name"] + "]今天" + (S["data"]["nebulaSignInPopup"]["todaySigned"] ? '已' : '未') + '签到'), !S["data"]["nebulaSignInPopup"]["todaySigned"] && (await selfScript["wait"](200), await this["doSign"](), await selfScript["wait"](200), await this["setShare"]())) : console["log"]("账号[" + this["name"] + "]查询签到信息失败：" + S["error_msg"]);
    } catch (E) {
      console['log']("获取签到信息异常:" + E)
    }
  }

  // 执行签到操作
  async ["doSign"]() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        console['log']("账号[" + this["name"] + "]签到成功：" + S["data"]["toast"]);
        await selfScript["wait"](200);
        await this["ksNeoAdParam"](adCfg["sign"]);
        await selfScript["wait"](200);
        await this["ksNeoAdParam"](luckVideoCfg["signVideo_168"]);
      } else {
        console["log"]("账号[" + this['name'] + "]签到失败：" + S["error_msg"]);
      }
    } catch (E) {
      console['log']("签到异常:" + E)
    }
  }

  // 查询任务列表
  async ['taskList']() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest('get', C);
      let S = runResponse;
      if (!S) {
        return;
      }

      if (S["result"] == 1) {
        console["log"]("账号[" + this["name"] + "]任务完成情况：");
        for (let a of S["data"]["dailyTasks"]) {
          for (let Y in taskIDCfg) {
            if (a["taskId"] == taskIDCfg[Y]) {
              let Z = parseInt(a["completedStages"]),
                Q = parseInt(a["stages"]),
                B = Math["ceil"](Q / stepNumber),
                b = Z < Q;
              const U = {
                'num': B,
                'needRun': b
              };
              this["task"][a["taskId"]] = U;
              console["log"]('【' + a["name"] + "】 " + Z + '/' + Q + '，' + (b ? "未完成" : "已完成") + "，每次运行完成" + B + "次任务");
              continue;
            }
          }
        }
      } else {
        console["log"]("账号[" + this["name"] + "]查询任务列表失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询任务列表异常：" + E);
    }
  }

  // 逛街任务
  async ['ksgj']() {
    try {
      let c = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward",
        p = "activityId=148&client_key=ksgjbody",
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("post", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      S["result"] == 1 ? console["log"]("账号[" + this["name"] + ']逛街获得' + S["data"]["amount"] + '金币') : console["log"]("账号[" + this['name'] + "]逛街失败：" + S["error_msg"]);
    } catch (E) {
      console["log"]("执行逛街任务异常：" + E);
    }
  }

  // 开宝箱任务
  async ["openBox"](T) {
    try {
      let p = 'https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=' + T + "&isReadyOfAdPlay=true",
        C = '',
        S = prepareRequestEntity(p, this["cookie"], C);
      await doRequest("get", S);
      let a = runResponse;
      if (!a) {
        return;
      }
      a["result"] == 1 ? T == true ? a["data"]["commonAwardPopup"] && a["data"]["commonAwardPopup"]["awardAmount"] ? (console["log"]("账号[" + this["name"] + "]开宝箱获得" + a["data"]["commonAwardPopup"]["awardAmount"] + '金币'), await selfScript["wait"](200), await this["ksNeoAdParam"](adCfg["box"])) : console["log"]("账号[" + this["name"] + "]开宝箱没有获得金币") : a['data']["openTime"] > -1 ? (console["log"]("账号[" + this["name"] + "]开宝箱冷却时间还有" + Math["floor"](a["data"]["openTime"] / 1000) + '秒'), a["data"]['openTime'] == 0 && (await selfScript["wait"](200), await this["openBox"](true))) : console["log"]("账号[" + this["name"] + "]开宝箱次数已用完") : T == true ? console["log"]('账号[' + this["name"] + "]开宝箱失败：" + a["error_msg"]) : console["log"]("账号[" + this["name"] + "]查询宝箱状态失败：" + a["error_msg"]);
    } catch (E) {
      console['log']("开宝箱异常:" + E)
    }
  }

  // 提现任务
  async ["withdraw"](T) {
    try {

      // 检查是否绑定了提现渠道
      if (!this["bindAlipay"] && !this["bindWechat"]) {
        justLogAndAppend("账号[" + this["name"] + "]未绑定提现账号，不执行提现");
        return;
      }

      // 默认支付宝
      let channel = "ALIPAY"

      // 同时绑定的话使用配置的提现通道
      if (this["bindAlipay"] && this["bindWechat"]) {
        channel = runChannel
      } else if (this["bindWechat"]) {
        channel = "WECHAT"
      }
      let channelName = channel == "ALIPAY" ? "支付宝" : '微信';
      justLogAndAppend("账号[" + this["name"] + "]提现渠道：" + channelName);

      let p = parseInt(T * 100),
        C = channel,
        S = channelName,
        a = C == "ALIPAY" ? this["alipay"] : this["wechat"],
        Y = "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
        j = "account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=" + p + "&provider=" + C + "&total_fen=" + p + "&commission_fen=0&third_account=" + C + "&attach=&biz_content=&session_id=",
        Z = prepareRequestEntity(Y, this['cookie'], j);
      await doRequest("post", Z);
      let Q = runResponse;
      if (!Q) {
        return;
      }
      Q["result"] == "SUCCESS" ? justLogAndAppend('账号' + this["index"] + '[' + this["name"] + "]提现" + T + '元到' + S + '[' + a + "]成功") : justLogAndAppend('账号' + this["index"] + '[' + this["name"] + "]提现" + T + '元到' + S + '[' + a + "]失败：" + Q["msg"]);
    } catch (E) {
      console["log"]("执行提现(withdraw)异常:" + E);
    }
  }

  // 执行尝试操作
  async ["withdrawOverview"]() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/overview?appver=10.2.20.2021",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }

      if (S["result"] == 1) {

        // 已提现
        if (S["data"]["isLimit"] == true) {
          console["log"]("账号[" + this["name"] + "]今天已经提现过喽");
          return;
        }

        let a = parseFloat(this["cashBalance"]);

        // 全部提现
        if (runWithrawAggressive == 1) {
          if (a < 0.3) {
            justLogAndAppend("账号[" + this["name"] + "]余额不足0.3元，不提现");
          } else {
            let Y = Math["floor"](a * 10) / 10;
            Y = Y > 50 ? 50 : Y;
            justLogAndAppend("账号[" + this["name"] + "]准备全部提现(最大化提现)" + Y + '元');
            await selfScript["wait"](200);
            await this["withdraw"](Y);
          }
        } else {

          // 没有配置提现金额时按照提现列表提现
          if (!runWithrawCash) {
            for (let Z of S["data"]["enWithdrawList"]["sort"](function (Q, B) {
                return B - Q;
              })) {
              if (a >= parseFloat(Z)) {
                justLogAndAppend("账号[" + this["name"] + "]准备提现" + Z + '元');
                await selfScript["wait"](200);
                await this["withdraw"](Z);
                return;
              }
            }
            justLogAndAppend("账号[" + this["name"] + "]余额不足，可提现额度：" + S["data"]["enWithdrawList"]["join"](','));
          } else {
            // 否则按照配置的值提现
            a >= parseFloat(runWithrawCash) ? (justLogAndAppend("账号[" + this["name"] + "]准备提现" + runWithrawCash + '元'), await selfScript["wait"](200), await this["withdraw"](runWithrawCash)) : justLogAndAppend("账号[" + this["name"] + "]余额不足" + runWithrawCash + "元，不提现");
          }
        }
      } else {
        console["log"]("账号[" + this["name"] + "]查询提现列表失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("尝试提现(withdrawOverview)异常:" + E);
    }
  }

  // 查询账号详情
  async ["accountOverview"]() {
    try {
      let c = "https://nebula.kuaishou.com/rest/n/nebula/account/overview",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        this["coinBalance"] = S["data"]["coinBalance"];
        this["cashBalance"] = S["data"]["cashBalance"];
        let a = S["data"]["exchangeCoinState"];

        justLogAndAppend("账号[" + this["name"] + "]账号余额" + this["cashBalance"] + '元，' + this["coinBalance"] + '金币');

        // 更改金币兑换方式为自动
        a == 2 && (await selfScript["wait"](200), await this["changeExchangeType"](0));
      } else {
        console["log"]("账号[" + this["name"] + "]查询账号信息失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询账号信息异常:" + E);
    }
  }

  // 更改金币兑换方式
  async ['changeExchangeType'](T) {
    try {
      let p = "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
        C = "{\"type\":" + T + '}',
        S = prepareRequestEntity(p, this["cookie"], C);
      S["headers"]["Content-Type"] = "application/json";
      await doRequest("post", S);
      let a = runResponse;
      if (!a) {
        return;
      }
      let Y = T == 0 ? "自动兑换" : '手动兑换';
      a["result"] == 1 ? console["log"]("账号[" + this["name"] + "]兑换方式更改成功，目前兑换方式为：" + Y) : console["log"]("账号[" + this["name"] + "]兑换方式更改失败：" + a["error_msg"]);
    } catch (E) {
      console["log"]("更改金币兑换方式异常:" + E);
    }
  }

  // 兑换金币
  async ["exchangeCoin"]() {
    try {

      if (this["coinBalance"] < 100) {
        console["log"]("账号[" + this["name"] + "]金币余额不足100，不执行兑换");
        return;
      }

      let c = "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
        p = "{\"coinAmount\":" + this["coinBalance"] + ",\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\"}",
        C = prepareRequestEntity(c, this["cookie"], p);

      C['headers']["Content-Type"] = "application/json";
      await doRequest("post", C);
      let S = runResponse;

      if (!S) {
        return;
      }

      if (S["result"] == 1) {
        let j = Math["floor"](this['coinBalance'] / 100) * 100,
          Z = Math["floor"](this["coinBalance"] / 100) / 100;
        console["log"]("账号[" + this["name"] + "]兑换金币成功，将" + j + "金币兑换成" + Z + '元');
      } else {
        console["log"]("账号[" + this["name"] + "]兑换金币失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("兑换金币异常:" + E);
    }
  }

  // 拉取奖励视频列表
  // ### 就是这里拉取的广告列表
  async ["ksNeoAdParam"](T) {
    try {

      if (!ksjsb_guanggao) {
        console["log"]("广告列表为空，请到脚本中配置【ksjsb_guanggao】参数");
        return false
      }

      const p = {
        'url': ksjsb_guanggao,
        'headers': ''
      };
      await doRequest("get", p);
      let C = runResponse[Math["floor"](Math["random"]() * runResponse["length"] - 1)];
      if (!C) {
        return;
      }
      C["result"] == 1 ? C["impAdInfo"] && C['impAdInfo']["length"] > 0 && C["impAdInfo"][0]["adInfo"] && C["impAdInfo"][0]['adInfo']["length"] > 0 && C["impAdInfo"][0]["adInfo"][0]["adBaseInfo"] && (await selfScript["wait"](200), await this["ksNeoAdReward"](C["llsid"], C["impAdInfo"][0]["adInfo"][0]['adBaseInfo']["creativeId"], T)) : console["log"]("账号[" + this['name'] + "]获取" + T["name"] + "参数失败：" + C["error_msg"]);
    } catch (E) {
      console["log"]("拉取广告列表异常:" + E);
    }
  }

  // 执行看奖励视频
  async ["ksNeoAdReward"](T, c, p) {
    try {
      let S = new Date()["getTime"](),
        a = Math["floor"](Math["random"]() * 30000) + 45000,
        Y = S - a,
        j = "https://api.e.kuaishou.com/rest/r/ad/task/report",
        Z = "bizStr={\"businessId\":" + p["businessId"] + ",\"endTime\":" + S + ",\"extParams\":\"" + p["extParams"] + "\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + c + ",\"extInfo\":\"\",\"llsid\":" + T + ",\"taskType\":1}],\"pageId\":" + p["pageId"] + ",\"posId\":" + p["posId"] + ",\"startTime\":" + Y + ",\"subPageId\":" + p["subPageId"] + '}',
        Q = prepareRequestEntity(j, this["cookie"], Z);

      await doRequest("post", Q);
      let B = runResponse;

      if (!B) {
        return;
      }

      if (B["result"] == 1) {
        let b = B["data"]["neoAmount"] + '金币';

        if (B["data"]["neoToH5Data"]) {
          try {
            let U = JSON["parse"](encoderDecoder["decode"](B["data"]["neoToH5Data"])["replace"](/\0/g, ''));
            U["extraCoin"] && (b += '+' + U["extraCoin"] + '金币');
          } catch (q) {
            console["log"](B["data"]["neoToH5Data"]);
          } finally {}
        }

        console["log"]("账号[" + this["name"] + ']看' + p["name"] + '获得' + b);

        if (this["hasLuckydraw"]) {
          await this['luckdrawTasks']();
        }
      } else {
        console["log"]("账号[" + this["name"] + ']看' + p["name"] + "失败：" + B["error_msg"]);
      }
    } catch (E) {
      console["log"]("看奖励视频异常:" + E);
    }
  }

  // 查询抽奖次数
  async ["luckdrawInfo"]() {
    try {
      let c = "https://activity.e.kuaishou.com/rest/r/game/user/info",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        console["log"]("账号[" + this["name"] + "]现有" + S["data"]['userDiamondResult']["diamondPercent"] + "钻石，剩余抽奖次数：" + S["data"]["userDailyLotteryTimesResult"]["remainTimes"]);

        for (let Y = 0; Y < S["data"]["userDailyLotteryTimesResult"]["remainTimes"]; Y++) {
          await selfScript["wait"](200);
          await this["luckydraw"]();
        }
      } else {
        console["log"]("账号[" + this["name"] + "]查询抽奖次数失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询抽奖次数异常：" + E)
    }
  }

  // 抽奖
  async ["luckydraw"]() {
    try {
      let c = "https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=1",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("post", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        let a = S["data"]["coinCount"] ? S["data"]["coinCount"] + '金币' : S["data"]["diamondCount"] ? S["data"]["diamondCount"] + '钻石' : '空气';
        console["log"]("账号[" + this["name"] + "]抽奖获得" + a);
        S["data"]["videoCoinCount"] && console["log"]("额外奖励：" + S["data"]["videoCoinCount"]);
        if (S["data"]["schema"]) {
          try {
            console["log"](encoderDecoder["decode"](S["data"]["schema"]));
          } catch (Y) {
            console["log"](S["data"]["schema"]);
          }
        }
        // 继续抽奖直到完成
        this["hasLuckydraw"] && (await this["luckdrawTasks"]());
      } else {
        console["log"]('账号[' + this["name"] + "]抽奖失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("抽奖异常：" + E)
    }
  }

  // 抽奖签到
  async ["luckydrawSign"]() {
    try {
      let c = "https://activity.e.kuaishou.com/rest/r/game/sign-in",
        p = '',
        C = prepareRequestEntity(c, this['cookie'], p);

      await doRequest("get", C);
      let S = runResponse;

      if (!S) {
        return;
      }

      S["result"] == 1 ? S['data']["isShow"] && console["log"]("账号[" + this["name"] + "]抽奖页签到成功") : (console["log"]("账号[" + this["name"] + "]查询抽奖签到情况失败：" + S["error_msg"]), S["error_msg"]["indexOf"]('激励游戏未在运营') > -1 && (this["hasLuckydraw"] = false));
    } catch (E) {
      console["log"]("抽奖页签到异常：" + E)
    }
  }

  // 查询抽奖详情
  async ["luckdrawTimerInfo"]() {
    try {
      let c = "https://activity.e.kuaishou.com/rest/r/game/timer-reward/info",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        if (S["data"]) {
          let a = new Date()["getTime"](),
            Y = S["data"]["lastTimerTime"],
            j = S["data"]["minutesInterval"] * 60 * 1000,
            Z = Y + j;
          a < Z ? console["log"]("账号[" + this["name"] + "]抽奖页奖励冷却时间还有" + (Z - a) / 1000 + '秒') : (await selfScript["wait"](200), await this["luckdrawTimerReward"](S["data"]["goldNum"]));
        } else {
          console["log"]("账号[" + this["name"] + "]抽奖页定时奖励次数已用完");
        }
      } else {
        console["log"]("账号[" + this["name"] + "]查询抽奖页定时奖励情况失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询抽奖页定时奖励异常：" + E)
    }
  }

  // 执行抽奖操作
  async ["luckdrawTimerReward"](T) {
    try {
      let p = "https://activity.e.kuaishou.com/rest/r/game/timer-reward",
        C = '',
        S = prepareRequestEntity(p, this["cookie"], C);

      await doRequest("post", S);
      let a = runResponse;

      if (!a) {
        return;
      }

      a["result"] == 1 ? console['log']("账号[" + this["name"] + "]领取抽奖页定时奖励获得" + T + '金币') : console["log"]("账号[" + this["name"] + "]领取抽奖页定时奖励失败：" + a["error_msg"]);
    } catch (E) {
      console["log"]("领取抽奖页定时奖励异常：" + E)
    }
  }

  // 查询抽奖任务
  async ["luckdrawTasks"]() {
    try {
      let c = "https://activity.e.kuaishou.com/rest/r/game/tasks",
        p = '',
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("get", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      if (S["result"] == 1) {
        for (let Y of S["data"]["dailyTasks"]) {
          Y["taskState"] == 1 && (await selfScript["wait"](200), await this["luckdrawTasksReward"](Y));
        }
        for (let j of S["data"]["growthTasks"]) {
          j["taskState"] == 1 && (await selfScript["wait"](200), await this["luckdrawTasksReward"](j));
        }
      } else {
        console["log"]("账号[" + this['name'] + "]查询抽奖页任务失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询抽奖页任务异常:" + E);
    }
  }

  // 领取抽奖任务奖励
  async ["luckdrawTasksReward"](T) {
    try {
      let p = "https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=" + T["taskName"],
        C = '',
        S = prepareRequestEntity(p, this["cookie"], C);
      await doRequest("get", S);
      let a = runResponse;
      if (!a) {
        return;
      }
      a['result'] == 1 ? console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + T["taskTitle"] + "]奖励获得" + a["data"]["popUp"]["taskRewardName"]) : console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + T["taskTitle"] + "]奖励失败：" + a["error_msg"]);
    } catch (E) {
      console["log"]("领取任务奖励异常:" + E);
    }
  }

  // 查询账号绑定信息
  async ["bindInfo"]() {
    try {
      let c = "https://www.kuaishoupay.com/pay/account/h5/provider/bind_info",
        p = "account_group_key=NEBULA_CASH_ACCOUNT&bind_page_type=3",
        C = prepareRequestEntity(c, this["cookie"], p);

      await doRequest("post", C);
      let S = runResponse;

      if (!S) {
        return;
      }

      if (S["result"] == "SUCCESS") {
        let Y = "未绑定支付宝",
          j = "未绑定微信";
        S["alipay_bind"] == true && (this["bindAlipay"] = true, this["alipay"] = S['alipay_nick_name'], Y = "已绑定支付宝[" + S["alipay_nick_name"] + ']');
        S["wechat_bind"] == true && (this["bindWechat"] = true, this["wechat"] = S["wechat_nick_name"], j = "已绑定微信[" + S["wechat_nick_name"] + ']');
        console["log"]("账号[" + this["name"] + ']' + j + '，' + Y);
      } else {
        console["log"]("账号[" + this["name"] + "]查询提现账号绑定情况失败：" + S["error_msg"]);
      }
    } catch (E) {
      console["log"]("查询提现账号绑定情况异常:" + E);
    }
  }

  // 查询账号提现详情
  async ['accountInfo']() {
    try {
      let c = "https://www.kuaishoupay.com/pay/account/h5/withdraw/account_info",
        p = "account_group_key=NEBULA_CASH_ACCOUNT&providers=",
        C = prepareRequestEntity(c, this["cookie"], p);
      await doRequest("post", C);
      let S = runResponse;
      if (!S) {
        return;
      }
      S["result"] == "SUCCESS" ? this["needSms"] = S["need_mobile_code"] : console["log"]("账号[" + this["name"] + "]查询账号提现情况失败：" + S["error_msg"]);
    } catch (E) {
      console["log"]("查询账号提现情况异常:" + E);
    }
  }
}

//### 脚本开始
!(async () => {

  // TODO 这里没看懂
  if (typeof $request !== "undefined") {
    await matchScriptCookie();
  } else {

    // 未能解析 Cookie 的话退出脚本
    if (!(await analyseCookie())) {
      return;
    }

    console["log"]("\n============== 看起来一切正常，准备登录 ==============");

    // 查询账号详情(校验账号是否有效)
    for (let a of runCookieArr) {
      await a["getUserInfo"]();
      await selfScript["wait"](500);
    }

    // 全部脚本失效则退出脚本
    let p = runCookieArr["filter"](j => j["valid"] == true);
    if (p["length"] == 0) {
      console["log"]("\n============== 哦哦，所有账号都失效喽，退出 ==============");
      return;
    }

    for (let Z of p) {
      console['log']("\n=========== 账号【" + Z["name"] + "】开始做任务啦 ===========");

      // 查询签到信息并尝试签到
      await Z["getSignInfo"]();
      await selfScript["wait"](200);

      // 开宝箱
      await Z["openBox"](false);
      await selfScript["wait"](200);

      // 查询任务列表
      await Z["taskList"]();
      await selfScript["wait"](200);

      // 抽奖页签到
      await Z["luckydrawSign"]();
      await selfScript["wait"](200);

      // 账号天选时刻(有奖励任务)
      if (Z["hasLuckydraw"] == true) {

        // 查询抽奖任务
        await Z["luckdrawTimerInfo"]();
        await selfScript["wait"](200);

        // 领取抽奖奖励
        await Z["luckdrawTasks"]();
        await selfScript["wait"](200);

        // 查询抽奖次数
        await Z["luckdrawInfo"]();
        await selfScript["wait"](200);
      }

      // 运行奖励任务
      if (Z["task"][taskIDCfg["luckydraw"]]["needRun"]) {
        // 根据配置的运行次数(num值)去运行
        for (let U = 0; U < Z["task"][taskIDCfg["luckydraw"]]["num"]; U++) {
          // 【原地爆炸】
          // 理论上将下面所有 luckVideoCfg[xxx] 换成你想要的级别就行，实际上这已经是最大化收益了，6W 和 10 W 都是这个配置
          // 脚本中 13 点前和 13 点后看不同的视频获取不同的收益，这应该是大佬尝试过的给出的最优解，一般上午跑满几万就不必再跑了
          // 13点前每次运行任务看两个广告，每个广告都是 990 收益【实际上每个账号都不同，这可以理解的吧】
          // 13点之后每次运行看两个广告，分别是 100 和 80 奖励【不会真以为每个账号都这么幸运把】
          runHour < 13 ? (await Z["ksNeoAdParam"](luckVideoCfg["luckdrawVideo_161_213"]), await selfScript["wait"](200), await Z["ksNeoAdParam"](luckVideoCfg["luckdrawVideo_11_213"]), await selfScript["wait"](200)) : (await Z["ksNeoAdParam"](luckVideoCfg["luckdrawVideo_161_100"]), await selfScript["wait"](200), await Z["ksNeoAdParam"](luckVideoCfg["luckdrawVideo_11_100"]), await selfScript['wait'](200));
        }
      }

      // 运行广告任务
      if (Z["task"][taskIDCfg['ad']]['needRun']) {
        for (let J = 0; J < Z["task"][taskIDCfg['ad']]["num"]; J++) {
          await Z["ksNeoAdParam"](adCfg["ad1"]);
          await selfScript["wait"](200);
          J != Z["task"][taskIDCfg['ad']]["num"] - 1 && (await selfScript["wait"](2000));
        }
      }

      // 运行逛街任务
      if (Z["task"][taskIDCfg['gj']]["needRun"]) {
        for (let V = 0; V < Z["task"][taskIDCfg['gj']]["num"]; V++) {
          await Z["ksgj"]()[[]];
          await selfScript["wait"](200);
        }
      }

      // 运行看直播任务
      if (Z["task"][taskIDCfg["live"]]["needRun"]) {
        for (let E = 0; E < Z["task"][taskIDCfg["live"]]["num"]; E++) {
          await Z["ksNeoAdParam"](luckVideoCfg["liveVideo_75"]);
          await selfScript['wait'](200);
        }
      }
    }

    console["log"]("\n============== 账号汇总 ==============");
    for (let O of p) {

      // 账号详情
      await O["accountOverview"]();
      await selfScript["wait"](200);

      // 账号绑定详情
      await O["bindInfo"]();
      await selfScript["wait"](200);

      // 账号提现详情
      await O["accountInfo"]();
      await selfScript['wait'](200);
    }

    console["log"]("\n============== 准备自动提现 ==============");
    let C = "按提现列表自动提现";
    runWithrawCash && (C = "自动提现" + runWithrawCash + '元');
    if (runWithrawAggressive) {
      C = "全部提现（据说可能黑号哦）";
    }

    // 运行时间是配置的提现时间
    if (runHour == runWithrawTime) {
      console["log"]("开始提现啦，提现方式为：" + C);
      for (let d of p) {
        await d['withdrawOverview'](), await selfScript["wait"](200);
      }
    } else {
      console["log"]("本次运行不提现，提现时间：" + runWithrawTime + '点，提现方式：' + C);
    }

    // 执行通知
    runKsjsbNotify == 2 ? await doNotifyRunMessage() : runKsjsbNotify == 1 && runHour == runWithrawTime && (await doNotifyRunMessage());
  }
})()["catch"](T => selfScript["logErr"](T))['finally'](() => selfScript["done"]());

// ### 大概意思是按照 cookie 执行任务，暂时没搞懂
async function matchScriptCookie() {
  if ($request["url"]["indexOf"]("appsupport/yoda/biz/info") > -1) {
    let c = $request["headers"]["Cookie"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    runCookie ? runCookie["indexOf"](c) == -1 && (runCookie = runCookie + "\n" + c, selfScript["setdata"](runCookie, "ksjsbCookie"), ckList = runCookie["split"]("\n"), selfScript["msg"](scriptTitle + (" 获取第" + ckList["length"] + "个ck成功: " + c))) : (selfScript["setdata"](c, "ksjsbCookie"), selfScript["msg"](scriptTitle + (" 获取第1个ck成功: " + c)));
  }

  if ($request["url"]["indexOf"]("ksapp/client/package/renew") > -1) {
    let p = $request["url"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    runCookie ? runCookie["indexOf"](p) == -1 && (runCookie = runCookie + "\n" + p, selfScript["setdata"](runCookie, "ksjsbCookie"), ckList = runCookie["split"]("\n"), selfScript["msg"](scriptTitle + (" 获取第" + ckList["length"] + "个ck成功: " + p))) : (selfScript["setdata"](p, "ksjsbCookie"), selfScript["msg"](scriptTitle + (" 获取第1个ck成功: " + p)));
  }
}

// 解析 cookie
async function analyseCookie() {
  if (runCookie) {
    for (let a of runCookie["split"](accountSeparator)) {
      a && runCookieArr["push"](new cookieEntityClass(a));
    }
    console["log"]("共找到" + runCookieArr["length"] + "个账号");
    return true;
  }
  console["log"]("CK 列表为空，请将 CK 从环境变量移到脚本，并配置到【ksjsb_cookie】字段");
  return false;
}

// 运行通知
async function doNotifyRunMessage() {
  try {
    if (!runMessage) {
      return;
    }
    notifyBody = "快手极速版运行通知\n\n" + runMessage;
    if (runKsjsbNotify > 0) {
      selfScript["msg"](notifyBody);
      if (selfScript["isNode"]()) {
        var c = require("./sendNotify");
        await c['sendNotify'](selfScript["name"], notifyBody);
      }
    } else {
      console["log"](notifyBody);
    }
  } catch (E) {
    console["log"]("执行通知异常了，不过完全OJBK");
  }
}

function justLogAndAppend(T) {
  console["log"](T);
  runMessage += T;
  runMessage += "\n";
}

// 准备请求实体
// T 是 URL, c 是 cookie, p 是参数
function prepareRequestEntity(T, c, p = '') {
  let S = T['replace']('//', '/')["split"]('/')[1];
  const a = {
      'Host': S,
      'Cookie': c
    },
    Y = {
      'url': T,
      'headers': a
    };
  p && (Y["body"] = p, Y['headers']["Content-Type"] = "application/x-www-form-urlencoded", Y["headers"]["Content-Length"] = Y["body"] ? Y["body"]["length"] : 0);
  return Y;
}

// 发起请求
// T 是请求方式, c是请求实体,即 prepareRequestEntity 的响应
async function doRequest(T, c) {
  runResponse = null;
  return new Promise(C => {
    selfScript[T](c, async (a, Y, j) => {
      try {
        if (a) {
          console["log"](T + "请求失败");
          console["log"](JSON["stringify"](a));
          selfScript["logErr"](a);
        } else {
          catchServerResponseError(j) && (runResponse = JSON["parse"](j));
        }
      } catch (B) {
        selfScript["logErr"](B, Y);
      } finally {
        C();
      }
    });
  });
}

function catchServerResponseError(T) {
  try {
    if (typeof JSON["parse"](T) == 'object') {
      return true;
    } else {
      console["log"](T);
    }
  } catch (p) {
    console["log"]("请求服务器异常" + p);
    return false;
  }
}

// 随机生成 did
function randomDid(T = 12) {
  let p = "abcdefghijklmnopqrstuvwxyZ0123456789",
    C = p["length"],
    S = '';

  for (i = 0; i < T; i++) {
    S += p["charAt"](Math["floor"](Math["random"]() * C));
  }

  return S;
}

// TODO 看起来是用来编码/解码的
var encoderDecoder = {
  '_keyStr': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  'encode': function (T) {
    var p = '',
      C,
      S,
      a,
      Y,
      j,
      Z,
      Q,
      B = 0;
    T = encoderDecoder["_utf8_encode"](T);

    while (B < T["length"]) {
      C = T["charCodeAt"](B++);
      S = T["charCodeAt"](B++);
      a = T["charCodeAt"](B++);
      Y = C >> 2;
      j = (C & 3) << 4 | S >> 4;
      Z = (S & 15) << 2 | a >> 6;
      Q = a & 63;

      if (isNaN(S)) {
        Z = Q = 64;
      } else {
        isNaN(a) && (Q = 64);
      }

      p = p + this["_keyStr"]["charAt"](Y) + this["_keyStr"]["charAt"](j) + this["_keyStr"]["charAt"](Z) + this["_keyStr"]["charAt"](Q);
    }

    return p;
  },

  'decode': function (T) {
    var U = '';
    var S,
      a,
      Y,
      j,
      Z,
      Q,
      B,
      b = 0;
    T = T["replace"](/[^A-Za-z0-9+/=]/g, '');

    while (b < T["length"]) {
      j = this["_keyStr"]["indexOf"](T["charAt"](b++));
      Z = this["_keyStr"]["indexOf"](T["charAt"](b++));
      Q = this["_keyStr"]["indexOf"](T["charAt"](b++));
      B = this["_keyStr"]["indexOf"](T["charAt"](b++));
      S = j << 2 | Z >> 4;
      a = (Z & 15) << 4 | Q >> 2;
      Y = (Q & 3) << 6 | B;
      U = U + String["fromCharCode"](S);
      Q != 64 && (U = U + String["fromCharCode"](a));
      B != 64 && (U = U + String['fromCharCode'](Y));
    }

    U = encoderDecoder["_utf8_decode"](U);
    return U;
  },

  '_utf8_encode': function (T) {
    T = T["replace"](/rn/g, 'n');
    var p = '';

    for (var C = 0; C < T["length"]; C++) {
      var S = T["charCodeAt"](C);
      S < 128 ? p += String["fromCharCode"](S) : S > 127 && S < 2048 ? (p += String["fromCharCode"](S >> 6 | 192), p += String["fromCharCode"](S & 63 | 128)) : (p += String["fromCharCode"](S >> 12 | 224), p += String["fromCharCode"](S >> 6 & 63 | 128), p += String["fromCharCode"](S & 63 | 128));
    }

    return p;
  },

  '_utf8_decode': function (T) {
    var p = '',
      C = 0,
      S = c1 = c2 = 0;

    while (C < T["length"]) {
      S = T["charCodeAt"](C);

      if (S < 128) {
        p += String["fromCharCode"](S);
        C++;
      } else {
        S > 191 && S < 224 ? (c2 = T["charCodeAt"](C + 1), p += String["fromCharCode"]((S & 31) << 6 | c2 & 63), C += 2) : (c2 = T["charCodeAt"](C + 1), c3 = T["charCodeAt"](C + 2), p += String["fromCharCode"]((S & 15) << 12 | (c2 & 63) << 6 | c3 & 63), C += 3);
      }
    }

    return p;
  }
};

// 仅仅是为了让代码看起来乱糟糟的混淆函数
// fxck
function chaosConst(T, c) {
  const p = {
    'vUthb': function (S, a) {
      return S + a;
    },
    'xansl': '自动提现',
    'zYPmU': function (S, a) {
      return S(a);
    },
    'eJcPH': function (S, a) {
      return S === a;
    },
    'Ffwdi': 'SdDDo',
    'TZDtX': "call",
    'LLmyY': function (S, a) {
      return S == a;
    },
    'YiGml': 'string',
    'ObOPk': 'get',
    'QMUHn': function (S, a) {
      return S === a;
    },
    'zHSSq': "POST",
    'nKUNb': "PUT",
    'BUgao': 'put',
    'yEKyH': "send",
    'vahvK': "env",
    'dpfdF': function (S, a) {
      return S !== a;
    },
    'eyKhd': 'qrpCi',
    'EUGLY': "exec",
    'JrMHo': "getval",
    'YTTpc': 'parse',
    'laqkM': "lodash_get",
    'nyIyV': 'sFSUj',
    'tTZNr': "http",
    'pWUNv': 'logs',
    'PSfXw': "isMute",
    'gfRMI': "isNeedRewrite",
    'zYZMh': "logSeparator",
    'GpvDT': "startTime",
    'rwkXM': "getTime",
    'XlxAL': "assign",
    'EpagF': 'log',
    'fSfdS': function (S, a) {
      return S + a;
    },
    'gqCJK': function (S, a) {
      return S + a;
    },
    'Gfcja': "name",
    'hekcr': ", 开始!",
    'mPAYK': function (S, a) {
      return S > a;
    },
    'PllJg': "fromCharCode",
    'iqado': function (S, a) {
      return S | a;
    },
    'MzGTf': function (S, a) {
      return S & a;
    },
    'TKgVx': function (S, a) {
      return S !== a;
    },
    'olIIK': "ITvHD",
    'HHxsA': function (S, a) {
      return S != a;
    },
    'CQFuU': "exports",
    'uPIiE': function (S, a) {
      return S === a;
    },
    'moxoN': 'yRWdM',
    'ndkrr': "undefined",
    'abQqZ': function (S, a) {
      return S == a;
    },
    'yNHJl': "object",
    'OakBY': 'length',
    'JeirW': function (S, a) {
      return S - a;
    },
    'QXdUA': function (S, a) {
      return S !== a;
    },
    'OEsXl': function (S, a) {
      return S === a;
    },
    'UAHdw': 'ILxfY',
    'PnEQd': 'SLhlf',
    'BkkNj': function (S, a) {
      return S > a;
    },
    'njcCW': function (S, a) {
      return S < a;
    },
    'OaFOK': 'charCodeAt',
    'FqswT': function (S, a) {
      return S | a;
    },
    'GzHCj': function (S, a) {
      return S << a;
    },
    'HqOfP': function (S, a) {
      return S & a;
    },
    'YvJVr': function (S, a) {
      return S + a;
    },
    'cPawj': function (S, a) {
      return S << a;
    },
    'kVVAm': function (S, a) {
      return S << a;
    },
    'MUUEt': "eRzSJ",
    'RCuQp': "stringify",
    'WigGt': 'UVTpF',
    'nkjIw': "replace",
    'EHEwT': function (S, a) {
      return S < a;
    },
    'ELjRv': function (S, a) {
      return S | a;
    },
    'hiJrK': function (S, a) {
      return S >> a;
    },
    'wSNNM': function (S, a) {
      return S | a;
    },
    'icCLE': function (S, a) {
      return S | a;
    },
    'TbLse': "getdata",
    'OECAm': function (S, a) {
      return S === a;
    },
    'lKqWU': 'XDylR',
    'nkxqU': "OZDut",
    'pvYcm': function (S, a) {
      return S !== a;
    },
    'RtLih': "fecFj",
    'OdOgo': "setdata",
    'pYeKT': function (S, a) {
      return S !== a;
    },
    'Hvrfl': "RfVYF",
    'ojkaK': "url",
    'lwNtd': "openUrl",
    'fkYsv': "media-url",
    'QiEkZ': "mediaUrl",
    'bpiZV': "rqroY",
    'WeMSp': "AwQOv",
    'QOfCX': '@chavy_boxjs_userCfgs.httpapi',
    'YNSwh': "@chavy_boxjs_userCfgs.httpapi_timeout",
    'WJSeA': "timeout",
    'UyCjF': "cron",
    'evLIU': "split",
    'stalv': "*/*",
    'TMZRE': "catch",
    'KrjuT': "isNode",
    'gKGOw': "path",
    'zezEm': function (S, a) {
      return S(a);
    },
    'RjPnH': "resolve",
    'xXhjZ': 'dataFile',
    'lkrOZ': 'existsSync',
    'UXuFw': function (S, a) {
      return S && a;
    },
    'KoZWa': "BwDxP",
    'fPWUS': "tcvnO",
    'yOzYr': "readFileSync",
    'tMFnY': function (S, a) {
      return S(a);
    },
    'LqimL': function (S, a) {
      return S(a);
    },
    'rqfCP': "cwd",
    'Bktev': "data",
    'MSCAv': "writeFileSync",
    'VBFSP': 'jCvBn',
    'sQUUP': 'VtzwK',
    'kdHtp': ".$1",
    'mKOJb': "open-url",
    'XReEV': function (S, a) {
      return S !== a;
    },
    'whlcJ': "tAHnY",
    'bACgC': 'WYytN',
    'EenlS': function (S, a) {
      return S !== a;
    },
    'rGDJj': "toString",
    'zkpOW': 'match',
    'nWjqV': "slice",
    'BoyEO': "reduce",
    'BRBwt': function (S, a) {
      return S - a;
    },
    'Tosyp': "最大化提现",
    'BzvSr': "VFxhh",
    'eTTEO': function (S, a) {
      return S === a;
    },
    'UTTFk': "YehTV",
    'IBedw': "isDirectory",
    'YBFrW': function (S, a, Y) {
      return S(a, Y);
    },
    'avqsd': "rmdirSync",
    'XaBsU': "test",
    'kBRzH': "null",
    'XGvRG': 'lodash_set',
    'OuTOW': "setval",
    'ZGhoB': "IWXJI",
    'NvGvD': "isSurge",
    'gXLLg': "isLoon",
    'QEklD': "read",
    'JilvT': "valueForKey",
    'GvmCb': "loaddata",
    'Erjln': "write",
    'TEhQN': "isQuanX",
    'SItKq': "writedata",
    'mAQuS': "JRiyX",
    'wJEVG': "VnxND",
    'UnUmH': "got",
    'VWREu': function (S, a) {
      return S(a);
    },
    'UfFmc': 'cktough',
    'KUpZH': 'ckjar',
    'wbhLH': 'CookieJar',
    'Ufsfg': "headers",
    'EYucJ': "Cookie",
    'EwYhm': 'cookieJar',
    'XxBGY': function (S, a) {
      return S && a;
    },
    'uZTTG': 'body',
    'RacES': "statusCode",
    'PWoQA': 'status',
    'hwvxW': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'WqVMM': "unlinkSync",
    'jZbbI': "forEach",
    'fruUq': "rEDBj",
    'ZCHSn': "utuzS",
    'jBBop': "map",
    'zyxAx': "setCookieSync",
    'mcwDC': "XerNB",
    'bdYaD': "logErr",
    'RKyIx': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'mGhWK': "opts",
    'pswtb': 'initGotEnv',
    'uZRAe': "redirect",
    'rMFJs': "then",
    'pYoPM': function (S, a) {
      return S && a;
    },
    'YiNrA': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'wdjsG': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'jSddq': function (S, a) {
      return S - a;
    },
    'wQqon': function (S, a) {
      return S + a;
    },
    'FZjHX': function (S, a) {
      return S + a;
    },
    'QFjSh': ", 结束! 🕛 ",
    'kOHbb': "method",
    'fdBtA': "fetch",
    'XMRkJ': "http://",
    'awTOK': "/v1/scripting/evaluate",
    'EtYHG': "uuOFb",
    'WFTAO': "Content-Type",
    'UWYCE': "application/x-www-form-urlencoded",
    'JBlns': "post",
    'Wlkha': "atBfJ",
    'OgVdL': "nJAlO",
    'tKavq': 'VVpAe',
    'skKHu': 'YhuYF',
    'qmHBe': function (S) {
      return S();
    },
    'qpgdd': function (S, a) {
      return S === a;
    },
    'nPTxz': "EqePu",
    'yRDNE': "ESIAN",
    'gwRAk': function (S, a) {
      return S && a;
    },
    'GCFnt': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'nnECN': function (S, a) {
      return S != a;
    },
    'sEkOb': function (S, a) {
      return S != a;
    },
    'ztCQh': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'oxxEd': "BQivw",
    'ClDME': "HZhXn",
    'NSZIb': function (S, a) {
      return S === a;
    },
    'CmwsV': "Socns",
    'vMYsg': 'AyGnU',
    'UIfGT': "SmdtB",
    'feAfW': "XnTUH",
    'hLLKO': function (S, a) {
      return S === a;
    },
    'OEkKP': 'getMonth',
    'TAFtK': "getDate",
    'QECaO': "getSeconds",
    'nxqaa': 'floor',
    'WqjEM': function (S, a) {
      return S / a;
    },
    'txpGr': function (S, a) {
      return S + a;
    },
    'jMDGH': "getMilliseconds",
    'vLoad': "getFullYear",
    'dPlSl': "substr",
    'ZlJQz': function (S, a) {
      return S + a;
    },
    'eEfWA': function (S, a) {
      return S + a;
    },
    'RlKZK': "2|3|0|6|1|4|5",
    'PpyVH': function (S, a) {
      return S * a;
    },
    'wPjul': function (S, a) {
      return S % a;
    },
    'KRplz': function (S, a) {
      return S * a;
    },
    'YJetv': function (S, a) {
      return S / a;
    },
    'ShnvD': function (S, a) {
      return S - a;
    },
    'HyRKw': function (S, a) {
      return S << a;
    },
    'qWGQE': function (S, a) {
      return S >>> a;
    },
    'xDXpN': function (S, a) {
      return S << a;
    },
    'izmSL': "isArray",
    'PEJul': function (S, a, Y, j, Z) {
      return S(a, Y, j, Z);
    },
    'BBKJc': function (S, a) {
      return S(a);
    },
    'BRCNQ': "==============📣系统通知📣==============",
    'Knwkb': 'push',
    'XgvQO': "join",
    'thwoM': "concat",
    'TDfto': function (S, a) {
      return S > a;
    },
    'zjgDG': function (S, a) {
      return S !== a;
    },
    'GBjsa': "TrFlN",
    'gDsfN': "indexOf",
    'AjAMi': "GITHUB",
    'xFdEV': 'exit',
    'TsxVh': "toObj",
    'fmALu': 'toStr',
    'uJdHd': 'getjson',
    'lwMvm': 'setjson',
    'yYKzB': "getScript",
    'YJGsn': "runScript",
    'JIeBo': "time",
    'eQYiN': "msg",
    'OOTUt': "wait"
  };

  p["sEkOb"](p["ndkrr"], typeof process) && JSON[p["RCuQp"]](process["env"])[p['gDsfN']](p['AjAMi']) > -1 && process[p["xFdEV"]](0);

  class C {
    constructor(S) {
      this["env"] = S;
    }

    [p["yEKyH"]](S, a = "GET") {
      const Y = {
        'wNCsl': function (Z, Q) {
          return p["vUthb"](Z, Q);
        },
        'oaUpP': p["xansl"],
        'xczlT': function (Z, Q) {
          return p['zYPmU'](Z, Q);
        },
        'EhzfP': function (Z, Q) {
          return p["eJcPH"](Z, Q);
        },
        'HIbzq': p["Ffwdi"],
        'PQCMA': p["TZDtX"]
      };
      S = p["LLmyY"](p['YiGml'], typeof S) ? {
        'url': S
      } : S;
      let j = this[p["ObOPk"]];
      p["QMUHn"](p["zHSSq"], a) && (j = this["post"]);
      p["QMUHn"](p["nKUNb"], a) && (j = this[p["BUgao"]]);
      return new Promise((Z, Q) => {
        Y["EhzfP"]("Jrbjx", Y["HIbzq"]) ? p = Y["wNCsl"](Y["oaUpP"], C) + '元' : j[Y['PQCMA']](this, S, (U, q, i) => {
          U ? Q(U) : Z(q);
        });
      });
    }

    [p["ObOPk"]](S) {
      return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S);
    }

    ["post"](S) {
      if (p["dpfdF"](p["eyKhd"], p["eyKhd"])) {
        a ? p["zYPmU"](Y, j) : Z(Q);
      } else {
        return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S, p["zHSSq"]);
      }
    }

    [p["BUgao"]](S) {
      return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S, p['nKUNb']);
    }

  }

  return new class {
    constructor(S, a) {
      if (p["dpfdF"]("rZDwk", p["nyIyV"])) {
        this["name"] = S;
        this[p["tTZNr"]] = new C(this);
        this["data"] = null;
        this["dataFile"] = "box.dat";
        this[p["pWUNv"]] = [];
        this[p["PSfXw"]] = false;
        this[p["gfRMI"]] = false;
        this[p["zYZMh"]] = "\n";
        this[p["GpvDT"]] = new Date()[p["rwkXM"]]();
        Object[p["XlxAL"]](this, a);
        this[p["EpagF"]]('', p['fSfdS'](p["gqCJK"]('🔔', this[p["Gfcja"]]), p["hekcr"]));
      } else {
        const [, j, Z] = /^@(.*?)\.(.*?)$/ [p["EUGLY"]](a),
        Q = j ? this[p["JrMHo"]](j) : '';

        if (Q) {
          try {
            const B = i[p["YTTpc"]](Q);
            J = B ? this[p["laqkM"]](B, Z, '') : I;
          } catch (b) {
            E = '';
          }
        }
      }
    }

    [p["KrjuT"]]() {
      const S = {
        'UrvWd': function (a, Y) {
          return p["mPAYK"](a, Y);
        },
        'PyjmZ': function (a, Y) {
          return a + Y;
        },
        'ncOmw': p["PllJg"],
        'tKtOU': function (a, Y) {
          return p["iqado"](a, Y);
        },
        'qbEpB': function (a, Y) {
          return a << Y;
        },
        'RAqSi': function (a, Y) {
          return p["MzGTf"](a, Y);
        },
        'yipdK': "charCodeAt",
        'tCyJQ': function (a, Y) {
          return a | Y;
        },
        'Bhpih': function (a, Y) {
          return a << Y;
        },
        'SEuhA': function (a, Y) {
          return p["MzGTf"](a, Y);
        },
        'bPdms': function (a, Y) {
          return p['MzGTf'](a, Y);
        }
      };

      if (p["TKgVx"](p["olIIK"], "ITvHD")) {
        S["UrvWd"](h, 191) && z < 224 ? (v = M["charCodeAt"](S['PyjmZ'](d, 1)), u += e[S["ncOmw"]](S["tKtOU"](S['qbEpB'](S["RAqSi"](A, 31), 6), S["RAqSi"](k, 63))), o += 2) : (g = t['charCodeAt'](S["PyjmZ"](L, 1)), X = m[S["yipdK"]](n + 2), F += w[S["ncOmw"]](S['tCyJQ'](S["Bhpih"](S['SEuhA'](G, 15), 12) | S['RAqSi'](s, 63) << 6, S["bPdms"](N, 63))), l += 3);
      } else {
        return p['HHxsA']("undefined", typeof module) && !!module[p["CQFuU"]];
      }
    }

    [p["TEhQN"]]() {
      if (p["uPIiE"](p['moxoN'], "yRWdM")) {
        return p["HHxsA"](p["ndkrr"], typeof $task);
      } else {
        throw c;
      }
    }

    ["isSurge"]() {
      return p["ndkrr"] != typeof $httpClient && p['abQqZ'](p["ndkrr"], typeof $loon);
    }

    ["isLoon"]() {
      return p['HHxsA'](p['ndkrr'], typeof $loon);
    }

    [p['TsxVh']](S, a = null) {
      if (p["QXdUA"]('cYZmG', "wVRvr")) {
        try {
          if (p["OEsXl"](p["UAHdw"], "ILxfY")) {
            return JSON[p['YTTpc']](S);
          } else {
            if (typeof S[p["YTTpc"]](a) == p["yNHJl"]) {
              return true;
            } else {
              Z[p["EpagF"]](Q);
            }
          }
        } catch {
          if (p["eJcPH"](p["PnEQd"], p["PnEQd"])) {
            return a;
          } else {
            return;
          }
        }
      } else {
        let Q = p['zYPmU'](a, Y),
          B = p["mPAYK"](j, Q[p["OakBY"]]) ? p["JeirW"](Z, Q["length"]) : 0,
          b = '';

        for (let I = 0; I < B; I++) {
          b += b;
        }

        b += Q;
        return b;
      }
    }

    [p["fmALu"]](S, a = null) {
      const Y = {
        'alGFV': function (j, Z) {
          return j < Z;
        },
        'KpmMK': p["PllJg"],
        'qVGng': function (j, Z) {
          return p["BkkNj"](j, Z);
        },
        'ghuQL': function (j, Z) {
          return p["njcCW"](j, Z);
        },
        'SuDaC': p['OaFOK'],
        'jZCnT': function (j, Z) {
          return j + Z;
        },
        'whgdf': function (j, Z) {
          return p["FqswT"](j, Z);
        },
        'BqmoY': function (j, Z) {
          return p["GzHCj"](j, Z);
        },
        'HpgvJ': function (j, Z) {
          return p["HqOfP"](j, Z);
        },
        'xuUjQ': function (j, Z) {
          return p["YvJVr"](j, Z);
        },
        'RcLsT': function (j, Z) {
          return p["FqswT"](j, Z);
        },
        'tNIKw': function (j, Z) {
          return p["iqado"](j, Z);
        },
        'pyVIl': function (j, Z) {
          return p["cPawj"](j, Z);
        },
        'JFGjI': function (j, Z) {
          return j & Z;
        },
        'wjotr': function (j, Z) {
          return p["kVVAm"](j, Z);
        },
        'MBIYn': function (j, Z) {
          return p['HqOfP'](j, Z);
        }
      };

      if (p['uPIiE']("ddyeK", p["MUUEt"])) {
        k = o["charCodeAt"](g);
        Y["alGFV"](t, 128) ? (xx += xf[Y["KpmMK"]](xT), xc++) : Y['qVGng'](xp, 191) && Y['ghuQL'](xC, 224) ? (xS = xa[Y["SuDaC"]](Y['jZCnT'](xY, 1)), xj += xZ[Y["KpmMK"]](Y["whgdf"](Y["BqmoY"](xQ & 31, 6), Y["HpgvJ"](xB, 63))), xb += 2) : (xU = xq['charCodeAt'](Y["xuUjQ"](xi, 1)), xJ = xI['charCodeAt'](Y["xuUjQ"](xV, 2)), xE += xW[Y["KpmMK"]](Y['RcLsT'](Y["tNIKw"](Y["pyVIl"](Y["JFGjI"](xO, 15), 12), Y["wjotr"](xP & 63, 6)), Y["MBIYn"](xh, 63))), xz += 3);
      } else {
        try {
          return JSON[p["RCuQp"]](S);
        } catch {
          if (p["QMUHn"](p["WigGt"], "UVTpF")) {
            return a;
          } else {
            return;
          }
        }
      }
    }

    [p["uJdHd"]](S, a) {
      const Y = {
        'UQUOE': p['nkjIw'],
        'jThwJ': function (Q, B) {
          return p["EHEwT"](Q, B);
        },
        'fWywc': p['OakBY'],
        'SULhX': p["OaFOK"],
        'hDQRt': function (Q, B) {
          return Q > B;
        },
        'sLeeH': "fromCharCode",
        'vyFmv': function (Q, B) {
          return p["ELjRv"](Q, B);
        },
        'NdAJz': function (Q, B) {
          return Q >> B;
        },
        'BsAjT': function (Q, B) {
          return Q | B;
        },
        'vIoXg': function (Q, B) {
          return p["hiJrK"](Q, B);
        },
        'aCRNx': function (Q, B) {
          return p["wSNNM"](Q, B);
        },
        'VoirO': function (Q, B) {
          return p["hiJrK"](Q, B);
        },
        'imHel': function (Q, B) {
          return p["icCLE"](Q, B);
        }
      };
      let j = a;
      const Z = this[p["TbLse"]](S);

      if (Z) {
        try {
          if (p["OECAm"](p['lKqWU'], p['lKqWU'])) {
            j = JSON[p['YTTpc']](this[p["TbLse"]](S));
          } else {
            B = b[Y['UQUOE']](/\r\n/g, "\n");

            for (var B = '', b = 0; Y['jThwJ'](b, U[Y['fWywc']]); b++) {
              var U = O[Y["SULhX"]](b);
              Y["hDQRt"](128, U) ? B += P[Y["sLeeH"]](U) : U > 127 && Y["hDQRt"](2048, U) ? (B += h[Y["sLeeH"]](Y['vyFmv'](Y["NdAJz"](U, 6), 192)), B += z["fromCharCode"](Y["BsAjT"](63 & U, 128))) : (B += v["fromCharCode"](Y['vIoXg'](U, 12) | 224), B += M[Y["sLeeH"]](Y['aCRNx'](Y["VoirO"](U, 6) & 63, 128)), B += d["fromCharCode"](Y["imHel"](63 & U, 128)));
            }

            return B;
          }
        } catch {}
      }

      return j;
    }

    [p["lwMvm"]](S, a) {
      if (p['OEsXl'](p['nkxqU'], p["nkxqU"])) {
        try {
          if (p['pvYcm']("fecFj", p["RtLih"])) {
            try {
              return this["setdata"](Y[p["RCuQp"]](j), Z);
            } catch {
              return false;
            }
          } else {
            return this[p['OdOgo']](JSON[p["RCuQp"]](S), a);
          }
        } catch {
          if (p["pYeKT"](p["Hvrfl"], "RfVYF")) {
            return;
          } else {
            return false;
          }
        }
      } else {
        const Q = a[p['YTTpc']](Y);
        j = Q ? this[p["laqkM"]](Q, Z, '') : Q;
      }
    }

    [p['yYKzB']](S) {
      const a = {
        'WoSnn': "open-url",
        'OrVME': p["ojkaK"],
        'UaXFA': p["lwNtd"],
        'TYShR': p["fkYsv"],
        'WNVFV': p["QiEkZ"],
        'VuVat': p["EpagF"],
        'LDUQX': "schema",
        'ncDwn': function (Y, j) {
          return Y === j;
        },
        'PiBtZ': p["bpiZV"],
        'lXfah': p["ObOPk"]
      };

      if (p["WeMSp"] !== p["WeMSp"]) {
        let j = a[a["WoSnn"]] || Y[a["OrVME"]] || j[a["UaXFA"]],
          Z = Z[a["TYShR"]] || Q[a["WNVFV"]];
        const Q = {
          'open-url': j,
          'media-url': Z
        };
        return Q;
      } else {
        return new Promise(j => {
          const Z = {
            'htHBs': a["VuVat"],
            'tITiE': "data",
            'UUGem': a["LDUQX"]
          };

          if (a["ncDwn"](a["PiBtZ"], 'rqroY')) {
            const Q = {
              'url': S
            };
            this[a["lXfah"]](Q, (B, b, U) => j(U));
          } else {
            p[Z["htHBs"]](C[Z['tITiE']][Z['UUGem']]);
          }
        });
      }
    }

    [p['YJGsn']](S, a) {
      const Y = {
        'FKsLv': p['TbLse'],
        'wmhsU': p["QOfCX"],
        'NuBUr': "replace",
        'kqUAs': "trim",
        'xFIlW': p['YNSwh'],
        'thNNu': function (j, Z) {
          return j * Z;
        },
        'lDoah': p['WJSeA'],
        'bzLsy': p["UyCjF"],
        'ecJhK': p['evLIU'],
        'crVNv': function (j, Z) {
          return j + Z;
        },
        'ObJqR': "http://",
        'oQCmg': "/v1/scripting/evaluate",
        'vUuKS': p["stalv"],
        'mlLyF': "post"
      };
      return new Promise(j => {
        let Z = this[Y['FKsLv']](Y["wmhsU"]);
        Z = Z ? Z[Y["NuBUr"]](/\n/g, '')[Y["kqUAs"]]() : Z;
        let Q = this[Y["FKsLv"]](Y["xFIlW"]);
        Q = Q ? Y["thNNu"](1, Q) : 20;
        Q = a && a[Y['lDoah']] ? a[Y["lDoah"]] : Q;
        const B = {
            'script_text': S,
            'mock_type': Y["bzLsy"],
            'timeout': Q
          },
          [b, U] = Z[Y["ecJhK"]]('@'),
          q = {
            'url': Y["crVNv"](Y["ObJqR"] + U, Y["oQCmg"]),
            'body': B,
            'headers': {
              'X-Key': b,
              'Accept': Y["vUuKS"]
            }
          };
        this[Y["mlLyF"]](q, (i, J, I) => j(I));
      })[p["TMZRE"]](j => this["logErr"](j));
    }

    ["loaddata"]() {
      const S = {
        'XPczb': function (a, Y) {
          return a ^ Y;
        }
      };

      if (p["pYeKT"]("FCVVc", "fnQxC")) {
        if (!this[p["KrjuT"]]()) {
          return {};
        }

        {
          this['fs'] = this['fs'] ? this['fs'] : require('fs');
          this[p["gKGOw"]] = this['path'] ? this["path"] : p["zezEm"](require, "path");
          const a = this[p['gKGOw']][p["RjPnH"]](this[p["xXhjZ"]]),
            Y = this[p["gKGOw"]][p["RjPnH"]](process['cwd'](), this["dataFile"]),
            j = this['fs']['existsSync'](a),
            Z = !j && this['fs'][p["lkrOZ"]](Y);

          if (p["UXuFw"](!j, !Z)) {
            return {};
          }

          {
            if (p["KoZWa"] !== 'Ptvnk') {
              const Q = j ? a : Y;

              try {
                return p['QMUHn'](p["fPWUS"], p["fPWUS"]) ? JSON[p["YTTpc"]](this['fs'][p['yOzYr']](Q)) : C ^ (S | ~a);
              } catch (b) {
                return {};
              }
            } else {
              return;
            }
          }
        }
      } else {
        return new C(i => Y(i, j));
      }
    }

    [p["SItKq"]]() {
      if (this["isNode"]()) {
        this['fs'] = this['fs'] ? this['fs'] : p["tMFnY"](require, 'fs');
        this[p["gKGOw"]] = this[p["gKGOw"]] ? this[p["gKGOw"]] : p["LqimL"](require, p["gKGOw"]);
        const S = this[p["gKGOw"]]["resolve"](this[p["xXhjZ"]]),
          a = this[p["gKGOw"]]["resolve"](process[p['rqfCP']](), this['dataFile']),
          Y = this['fs'][p['lkrOZ']](S),
          j = !Y && this['fs'][p['lkrOZ']](a),
          Z = JSON['stringify'](this[p["Bktev"]]);
        Y ? this['fs']['writeFileSync'](S, Z) : j ? this['fs'][p["MSCAv"]](a, Z) : this['fs'][p['MSCAv']](S, Z);
      }
    }

    [p["laqkM"]](S, a, Y) {
      const j = {
        'SJdFF': p["YTTpc"]
      };

      if (p["OECAm"](p["VBFSP"], p['sQUUP'])) {
        return p[j['SJdFF']](C);
      } else {
        const Q = a[p["nkjIw"]](/\[(\d+)\]/g, p["kdHtp"])[p['evLIU']]('.');
        let B = S;

        for (const b of Q)
          if (B = p["zYPmU"](Object, B)[b], p["eJcPH"](void 0, B)) {
            return Y;
          }

        return B;
      }
    }

    ['lodash_set'](S, a, Y) {
      if (p["XReEV"](p["whlcJ"], p["bACgC"])) {
        return p["EenlS"](p["LqimL"](Object, S), S) ? S : (Array['isArray'](a) || (a = a[p['rGDJj']]()[p['zkpOW']](/[^.[\]]+/g) || []), a[p["nWjqV"]](0, -1)[p["BoyEO"]]((j, Z, Q) => Object(j[Z]) === j[Z] ? j[Z] : j[Z] = Math["abs"](a[Q + 1]) >> 0 == +a[Q + 1] ? [] : {}, S)[a[p['BRBwt'](a[p["OakBY"]], 1)]] = Y, S);
      } else {
        let Z = C[p["ojkaK"]] || S[p["lwNtd"]] || a[p["mKOJb"]];
        const Q = {
          'url': Z
        };
        return Q;
      }
    }

    ["getdata"](S) {
      const a = {
        'MuiXv': p["Tosyp"]
      };

      if (p["uPIiE"](p["BzvSr"], "XtKaZ")) {
        return;
      } else {
        let j = this['getval'](S);

        if (/^@/ ['test'](S)) {
          const [, Z, Q] = /^@(.*?)\.(.*?)$/ [p['EUGLY']](S),
          B = Z ? this[p["JrMHo"]](Z) : '';

          if (B) {
            try {
              const b = JSON[p["YTTpc"]](B);
              j = b ? this[p["laqkM"]](b, Q, '') : j;
            } catch (U) {
              p["eTTEO"](p["UTTFk"], "YehTV") ? j = '' : c = a["MuiXv"];
            }
          }
        }

        return j;
      }
    }

    [p['OdOgo']](S, a) {
      const Y = {
        'sWlbw': function (Z, Q) {
          return p["gqCJK"](Z, Q);
        },
        'loGzU': "statSync",
        'NrKmO': p["IBedw"],
        'xSVpL': function (Z, Q, B) {
          return p['YBFrW'](Z, Q, B);
        },
        'SXmIJ': "forEach",
        'VLHNY': p['avqsd']
      };
      let j = false;

      if (/^@/ [p["XaBsU"]](a)) {
        const [, Z, Q] = /^@(.*?)\.(.*?)$/ [p["EUGLY"]](a),
        B = this[p["JrMHo"]](Z),
          b = Z ? p["OEsXl"](p["kBRzH"], B) ? null : B || '{}' : '{}';

        try {
          const U = JSON[p["YTTpc"]](b);
          this[p['XGvRG']](U, Q, S);
          j = this[p["OuTOW"]](JSON[p['RCuQp']](U), Z);
        } catch (q) {
          if (p["QXdUA"](p["ZGhoB"], "IWXJI")) {
            const J = {
              'sjjjj': function (I, V) {
                return Y["sWlbw"](I, V);
              },
              'jzopb': Y["loGzU"],
              'jKnzC': Y["NrKmO"],
              'fzMdl': function (I, V, E) {
                return Y['xSVpL'](I, V, E);
              }
            };
            b[Y["SXmIJ"]](function (A) {
              h++;
              var k = J["sjjjj"](J["sjjjj"](z, '/'), A);
              v[J["jzopb"]](k)[J["jKnzC"]]() ? J["fzMdl"](M, k, true) : d['unlinkSync'](k);
            });
            V == E && W && O[Y["VLHNY"]](P);
          } else {
            const J = {};
            this[p['XGvRG']](J, Q, S);
            j = this[p["OuTOW"]](JSON[p["RCuQp"]](J), Z);
          }
        }
      } else {
        j = this["setval"](S, a);
      }

      return j;
    }

    [p["JrMHo"]](S) {
      return this[p['NvGvD']]() || this[p["gXLLg"]]() ? $persistentStore[p["QEklD"]](S) : this["isQuanX"]() ? $prefs[p["JilvT"]](S) : this[p['KrjuT']]() ? (this[p["Bktev"]] = this[p["GvmCb"]](), this[p["Bktev"]][S]) : this[p['Bktev']] && this[p["Bktev"]][S] || null;
    }

    ['setval'](S, a) {
      return this["isSurge"]() || this[p['gXLLg']]() ? $persistentStore[p["Erjln"]](S, a) : this[p["TEhQN"]]() ? $prefs["setValueForKey"](S, a) : this[p['KrjuT']]() ? (this["data"] = this[p["GvmCb"]](), this[p["Bktev"]][a] = S, this[p["SItKq"]](), true) : this[p["Bktev"]] && this[p["Bktev"]][a] || null;
    }

    [p["pswtb"]](S) {
      if (p["eTTEO"](p["mAQuS"], p["wJEVG"])) {
        return;
      } else {
        this[p["UnUmH"]] = this[p["UnUmH"]] ? this[p['UnUmH']] : p["VWREu"](require, p['UnUmH']);
        this[p["UfFmc"]] = this[p["UfFmc"]] ? this[p["UfFmc"]] : p['LqimL'](require, "tough-cookie");
        this["ckjar"] = this[p['KUpZH']] ? this[p["KUpZH"]] : new this[p['UfFmc']][p["wbhLH"]]();
        S && (S[p["Ufsfg"]] = S["headers"] ? S[p["Ufsfg"]] : {}, p["eTTEO"](void 0, S[p['Ufsfg']][p["EYucJ"]]) && p["eTTEO"](void 0, S['cookieJar']) && (S[p["EwYhm"]] = this["ckjar"]));
      }
    }

    [p["ObOPk"]](S, a = () => {}) {
      const j = {
          'X-Surge-Skip-Scripting': false
        },
        Z = {
          'hints': false
        };
      S[p["Ufsfg"]] && (delete S[p["Ufsfg"]]['Content-Type'], delete S[p['Ufsfg']]["Content-Length"]);
      this[p["NvGvD"]]() || this[p["gXLLg"]]() ? (this[p["NvGvD"]]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object[p['XlxAL']](S["headers"], j)), $httpClient[p["ObOPk"]](S, (Q, B, b) => {
        if (p["pYeKT"]("IitXF", "DdGjk")) {
          p["XxBGY"](!Q, B) && (B[p["uZTTG"]] = b, B[p["RacES"]] = B[p['PWoQA']]);
          p["hwvxW"](a, Q, B, b);
        } else {
          return;
        }
      })) : this[p["TEhQN"]]() ? (this[p["gfRMI"]] && (S[p["mGhWK"]] = S[p["mGhWK"]] || {}, Object[p["XlxAL"]](S[p["mGhWK"]], Z)), $task['fetch'](S)['then'](Q => {
        const {
          'statusCode': B,
          'statusCode': b,
          'headers': U,
          'body': q
        } = Q,
        i = {
          'status': B,
          'statusCode': b,
          'headers': U,
          'body': q
        };
        a(null, i, q);
      }, Q => a(Q))) : this[p['KrjuT']]() && (this[p["pswtb"]](S), this['got'](S)['on'](p["uZRAe"], (Q, B) => {
        const b = {
          'xrYJU': function (U, q, i) {
            return p["YBFrW"](U, q, i);
          },
          'ddLYY': p['WqVMM'],
          'QvLaM': "length",
          'AjWNp': p["jZbbI"],
          'YAnmU': function (U, q) {
            return p["LLmyY"](U, q);
          },
          'RIjTK': "rmdirSync"
        };

        try {
          if (Q['headers']["set-cookie"]) {
            if (p["fruUq"] !== p["ZCHSn"]) {
              const U = Q["headers"]["set-cookie"][p["jBBop"]](this[p['UfFmc']]['Cookie'][p["YTTpc"]])["toString"]();
              this[p["KUpZH"]][p["zyxAx"]](U, null);
              B[p["EwYhm"]] = this[p["KUpZH"]];
            } else {
              const i = {
                'wxwCX': function (E, W, O) {
                  return b['xrYJU'](E, W, O);
                },
                'HllKf': b["ddLYY"]
              };
              var J = U["readdirSync"](q),
                I = J[b["QvLaM"]],
                V = 0;
              I > 0 ? (J[b["AjWNp"]](function (w) {
                V++;
                var G = o + '/' + w;
                g['statSync'](G)["isDirectory"]() ? i["wxwCX"](t, G, true) : J[i["HllKf"]](G);
              }), b["YAnmU"](I, V) && e && A[b["RIjTK"]](k)) : I == 0 && o && g[b['RIjTK']](t);
            }
          }
        } catch (i) {
          p["mcwDC"] === p["mcwDC"] ? this[p['bdYaD']](i) : p['unlinkSync'](C);
        }
      })[p["rMFJs"]](Q => {
        const {
          'statusCode': B,
          'statusCode': b,
          'headers': U,
          'body': q
        } = Q,
        i = {
          'status': B,
          'statusCode': b,
          'headers': U,
          'body': q
        };
        p['RKyIx'](a, null, i, q);
      }, Q => {
        const {
          'message': B,
          'response': b
        } = Q;
        p["RKyIx"](a, B, b, b && b[p['uZTTG']]);
      }));
    }

    [p['JBlns']](S, a = () => {}) {
      const Y = {
        'zaYxC': p["YTTpc"],
        'TOgZX': 'getdata',
        'ohScP': '@chavy_boxjs_userCfgs.httpapi',
        'WWQur': p["nkjIw"],
        'LEVtq': p["WJSeA"],
        'jcOBp': p["evLIU"],
        'ZRqwK': p['XMRkJ'],
        'JjtpA': p["awTOK"],
        'HOEmq': p["stalv"],
        'fQPWQ': function (j, Z) {
          return p["OECAm"](j, Z);
        },
        'fmOEc': p['EtYHG'],
        'fmpOD': "sVRtC",
        'GQodK': function (j, Z, Q, B) {
          return p["hwvxW"](j, Z, Q, B);
        }
      };
      const j = {
          'X-Surge-Skip-Scripting': false
        },
        Z = {
          'hints': false
        };

      if (S[p["uZTTG"]] && S[p["Ufsfg"]] && !S[p["Ufsfg"]]["Content-Type"] && (S[p["Ufsfg"]][p["WFTAO"]] = p['UWYCE']), S[p['Ufsfg']] && delete S["headers"]["Content-Length"], this[p['NvGvD']]() || this[p['gXLLg']]()) {
        this["isSurge"]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object["assign"](S[p['Ufsfg']], j));
        $httpClient[p["JBlns"]](S, (Q, B, b) => {
          p["pYoPM"](!Q, B) && (B["body"] = b, B["statusCode"] = B[p["PWoQA"]]);
          p['YiNrA'](a, Q, B, b);
        });
      } else {
        if (p["Wlkha"] !== p["OgVdL"]) {
          if (this[p['TEhQN']]()) {
            S[p["kOHbb"]] = p["zHSSq"];
            this[p['gfRMI']] && (S[p['mGhWK']] = S['opts'] || {}, Object[p["XlxAL"]](S["opts"], Z));
            $task[p["fdBtA"]](S)[p['rMFJs']](Q => {
              const {
                'statusCode': B,
                'statusCode': b,
                'headers': U,
                'body': q
              } = Q,
              i = {
                'status': B,
                'statusCode': b,
                'headers': U,
                'body': q
              };
              a(null, i, q);
            }, Q => a(Q));
          } else {
            if ('XZGLm' === p['tKavq']) {
              try {
                Y = j[Y["zaYxC"]](this[Y["TOgZX"]](Z));
              } catch {}
            } else {
              if (this[p["KrjuT"]]()) {
                if (p["EenlS"](p['skKHu'], "oWXez")) {
                  this[p["pswtb"]](S);
                  const {
                    'url': B,
                    ...b
                  } = S;
                  this[p["UnUmH"]]["post"](B, b)[p["rMFJs"]](U => {
                    const q = {
                      'wEyUS': "getdata",
                      'iZCwa': Y["ohScP"],
                      'pRYGo': Y["WWQur"],
                      'WWpqJ': "trim",
                      'vXtIs': Y["LEVtq"],
                      'WgwrY': 'cron',
                      'rghXN': Y["jcOBp"],
                      'rbIKF': function (i, J) {
                        return i + J;
                      },
                      'cebFV': Y["ZRqwK"],
                      'Jaljl': Y["JjtpA"],
                      'rPJFm': Y['HOEmq']
                    };

                    if (Y["fQPWQ"](Y["fmOEc"], Y["fmpOD"])) {
                      let I = this[q["wEyUS"]](q["iZCwa"]);
                      I = I ? I[q["pRYGo"]](/\n/g, '')[q["WWpqJ"]]() : I;
                      let V = this[q["wEyUS"]]("@chavy_boxjs_userCfgs.httpapi_timeout");
                      V = V ? 1 * V : 20;
                      V = a && Y[q['vXtIs']] ? j["timeout"] : V;
                      const E = {
                          'script_text': Z,
                          'mock_type': q["WgwrY"],
                          'timeout': V
                        },
                        [W, O] = I[q["rghXN"]]('@'),
                        P = {
                          'url': q["rbIKF"](q["rbIKF"](q["cebFV"], O), q["Jaljl"]),
                          'body': E,
                          'headers': {
                            'X-Key': W,
                            'Accept': q['rPJFm']
                          }
                        };
                      this["post"](P, (h, z, v) => I(v));
                    } else {
                      const {
                        'statusCode': J,
                        'statusCode': I,
                        'headers': V,
                        'body': E
                      } = U,
                      W = {
                        'status': J,
                        'statusCode': I,
                        'headers': V,
                        'body': E
                      };
                      a(null, W, E);
                    }
                  }, U => {
                    const {
                      'message': q,
                      'response': i
                    } = U;
                    p['wdjsG'](a, q, i, i && i[p["uZTTG"]]);
                  });
                } else {
                  return {};
                }
              }
            }
          }
        } else {
          const i = new C()[p["rwkXM"]](),
            J = p["jSddq"](i, this[p["GpvDT"]]) / 1000;
          this['log']('', p["wQqon"](p["FZjHX"](p['fSfdS']('🔔', this["name"]), p["QFjSh"]), J) + " 秒");
          this[p["EpagF"]]();
          (this["isSurge"]() || this[p["TEhQN"]]() || this[p["gXLLg"]]()) && S(a);
        }
      }
    }

    [p["BUgao"]](S, a = () => {}) {
      const Y = {
          'nNtGF': function (Q, B) {
            return p["sEkOb"](Q, B);
          },
          'mTITD': p["ndkrr"],
          'oaObh': function (Q, B, b, U) {
            return p['ztCQh'](Q, B, b, U);
          },
          'gIylR': p["PllJg"],
          'Uuxwi': p["oxxEd"],
          'QSGzX': p["ClDME"],
          'rrTpo': p["UnUmH"],
          'UnXkB': p["UfFmc"],
          'cAMVP': function (Q, B) {
            return Q(B);
          },
          'mFpUE': p["KUpZH"],
          'LTxZc': "CookieJar",
          'VJjUU': p["Ufsfg"],
          'vrsHI': function (Q, B) {
            return p['qpgdd'](Q, B);
          },
          'QOMQZ': p["EYucJ"],
          'SoJiS': function (Q, B) {
            return p["NSZIb"](Q, B);
          },
          'yJigh': "cookieJar"
        },
        j = {
          'X-Surge-Skip-Scripting': false
        },
        Z = {
          'hints': false
        };

      if (S[p["uZTTG"]] && S[p["Ufsfg"]] && !S['headers']["Content-Type"] && (S[p['Ufsfg']][p["WFTAO"]] = p["UWYCE"]), S[p['Ufsfg']] && delete S["headers"]['Content-Length'], this[p['NvGvD']]() || this[p['gXLLg']]()) {
        if (p["CmwsV"] !== p["vMYsg"]) {
          this[p["NvGvD"]]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object[p["XlxAL"]](S[p["Ufsfg"]], j));
          $httpClient[p["BUgao"]](S, (Q, B, b) => {
            p['qpgdd'](p["nPTxz"], p['yRDNE']) ? c() : (p["gwRAk"](!Q, B) && (B[p["uZTTG"]] = b, B[p["RacES"]] = B[p["PWoQA"]]), p["GCFnt"](a, Q, B, b));
          });
        } else {
          return Y["nNtGF"](Y["mTITD"], typeof c);
        }
      } else {
        if (p['dpfdF'](p["UIfGT"], p['feAfW'])) {
          if (this["isQuanX"]()) {
            S[p["kOHbb"]] = p['nKUNb'];
            this[p["gfRMI"]] && (S[p["mGhWK"]] = S[p["mGhWK"]] || {}, Object[p["XlxAL"]](S[p["mGhWK"]], Z));
            $task["fetch"](S)[p['rMFJs']](B => {
              const {
                'statusCode': b,
                'statusCode': U,
                'headers': q,
                'body': i
              } = B,
              J = {
                'status': b,
                'statusCode': U,
                'headers': q,
                'body': i
              };
              Y['oaObh'](a, null, J, i);
            }, B => a(B));
          } else {
            if (p["hLLKO"]("eulTN", "qGPjT")) {
              return p['nnECN'](p["ndkrr"], typeof c);
            } else {
              if (this['isNode']()) {
                this[p['pswtb']](S);
                const {
                  'url': b,
                  ...U
                } = S;
                this[p["UnUmH"]]["put"](b, U)[p["rMFJs"]](q => {
                  const i = {
                    'Mhphk': Y["gIylR"]
                  };

                  if (Y["Uuxwi"] === Y['QSGzX']) {
                    C += S[i['Mhphk']](a);
                  } else {
                    const {
                      'statusCode': I,
                      'statusCode': V,
                      'headers': E,
                      'body': W
                    } = q,
                    O = {
                      'status': I,
                      'statusCode': V,
                      'headers': E,
                      'body': W
                    };
                    Y['oaObh'](a, null, O, W);
                  }
                }, q => {
                  const {
                    'message': i,
                    'response': J
                  } = q;
                  a(i, J, J && J[p["uZTTG"]]);
                });
              }
            }
          }
        } else {
          this[Y['rrTpo']] = this[Y["rrTpo"]] ? this[Y['rrTpo']] : Q(Y["rrTpo"]);
          this[Y["UnXkB"]] = this[Y["UnXkB"]] ? this["cktough"] : Y["cAMVP"](B, "tough-cookie");
          this[Y["mFpUE"]] = this[Y["mFpUE"]] ? this[Y["mFpUE"]] : new this[Y["UnXkB"]][Y["LTxZc"]]();
          b && (U[Y["VJjUU"]] = q[Y["VJjUU"]] ? i[Y["VJjUU"]] : {}, Y['vrsHI'](void 0, J[Y['VJjUU']][Y["QOMQZ"]]) && Y["SoJiS"](void 0, I[Y['yJigh']]) && (V[Y["yJigh"]] = this[Y['mFpUE']]));
        }
      }
    }

    [p["JIeBo"]](S) {
      let a = {
        'M+': p["fSfdS"](new Date()[p["OEkKP"]](), 1),
        'd+': new Date()[p["TAFtK"]](),
        'H+': new Date()["getHours"](),
        'm+': new Date()["getMinutes"](),
        's+': new Date()[p["QECaO"]](),
        'q+': Math[p["nxqaa"]](p["WqjEM"](p["txpGr"](new Date()["getMonth"](), 3), 3)),
        'S': new Date()[p["jMDGH"]]()
      };
      /(y+)/ [p['XaBsU']](S) && (S = S['replace'](RegExp['$1'], p["wQqon"](new Date()[p["vLoad"]](), '')[p["dPlSl"]](p['JeirW'](4, RegExp['$1'][p['OakBY']]))));

      for (let Y in a) new RegExp(p['vUthb']('(' + Y, ')'))[p['XaBsU']](S) && (S = S["replace"](RegExp['$1'], p["LLmyY"](1, RegExp['$1'][p["OakBY"]]) ? a[Y] : p['ZlJQz']('00', a[Y])["substr"](p["eEfWA"]('', a[Y])[p["OakBY"]])));

      return S;
    }

    [p["eQYiN"]](S = T, a = '', Y = '', j) {
      const Z = {
          'wMqeN': p["RlKZK"],
          'WCRGY': function (b, U) {
            return p["PpyVH"](b, U);
          },
          'iUZhn': function (b, U) {
            return b % U;
          },
          'qffcN': function (b, U) {
            return p["jSddq"](b, U);
          },
          'aOhEf': function (b, U) {
            return p["kVVAm"](b, U);
          },
          'MiEod': p['OakBY'],
          'zvDrH': function (b, U) {
            return p["wPjul"](b, U);
          },
          'KDQsK': function (b, U) {
            return p['KRplz'](b, U);
          },
          'DjhXb': function (b, U) {
            return p["wQqon"](b, U);
          },
          'zHrJR': function (b, U) {
            return p["mPAYK"](b, U);
          },
          'MJnpc': function (b, U) {
            return p["YJetv"](b, U);
          },
          'jUtTe': function (b, U) {
            return p["ShnvD"](b, U);
          },
          'hhLSV': function (b, U) {
            return p['ELjRv'](b, U);
          },
          'dmtuI': function (b, U) {
            return p["HyRKw"](b, U);
          },
          'ldZhU': p["OaFOK"],
          'VTwAq': function (b, U) {
            return b - U;
          },
          'hPmmG': function (b, U) {
            return p['qWGQE'](b, U);
          },
          'YDHRy': function (b, U) {
            return p['xDXpN'](b, U);
          },
          'bKDWx': function (b, U) {
            return b !== U;
          },
          'LZHXt': p["izmSL"],
          'EoLOn': "toString",
          'hwIWL': p["zkpOW"],
          'EfgPP': p["nWjqV"],
          'dGjDt': p['BoyEO'],
          'OGhYm': function (b, U) {
            return b == U;
          },
          'cnJkv': function (b, U) {
            return b === U;
          },
          'teEEH': "xISDc",
          'OxMya': p["gXLLg"],
          'JlvfM': "isQuanX",
          'bfFaI': p["NvGvD"],
          'ITWFr': p["yNHJl"],
          'qMTjB': p['lwNtd'],
          'TwJbk': p["ojkaK"],
          'yzszi': p["mKOJb"],
          'Dxbdp': p["QiEkZ"],
          'JqtGl': "CaRgg",
          'dnnui': p["fkYsv"]
        },
        Q = b => {
          if (!b) {
            return b;
          }

          if (Z["OGhYm"]("string", typeof b)) {
            if (Z["cnJkv"](Z["teEEH"], "lwRTd")) {
              const J = Z["wMqeN"]["split"]('|');
              let I = 0;

              while (true) {
                switch (J[I++]) {
                  case '0':
                    z = Z["WCRGY"](Z["iUZhn"](v, 4), 8);
                    continue;

                  case '1':
                    h[Z["qffcN"](P, 2)] = Z['aOhEf'](E, 3);
                    continue;

                  case '2':
                    for (var V, E = C[Z['MiEod']], W = E + 8, O = Z["qffcN"](W, Z['zvDrH'](W, 64)) / 64, P = Z["KDQsK"](16, Z["DjhXb"](O, 1)), h = new S(P - 1), z = 0, v = 0; Z['zHrJR'](E, v);) {
                      V = Z["MJnpc"](Z["jUtTe"](v, Z["zvDrH"](v, 4)), 4);
                      z = Z["WCRGY"](Z["zvDrH"](v, 4), 8);
                      h[V] = Z['hhLSV'](h[V], Z["dmtuI"](Y[Z["ldZhU"]](v), z));
                      v++;
                    }

                    continue;

                  case '3':
                    V = Z["MJnpc"](Z["VTwAq"](v, v % 4), 4);
                    continue;

                  case '4':
                    h[Z["qffcN"](P, 1)] = Z["hPmmG"](E, 29);
                    continue;

                  case '5':
                    return h;

                  case '6':
                    h[V] = Z["hhLSV"](h[V], Z["YDHRy"](128, z));
                    continue;
                }

                break;
              }
            } else {
              return this[Z["OxMya"]]() ? b : this[Z['JlvfM']]() ? {
                'open-url': b
              } : this[Z['bfFaI']]() ? {
                'url': b
              } : void 0;
            }
          }

          if (Z["OGhYm"](Z["ITWFr"], typeof b)) {
            if (this["isLoon"]()) {
              let q = b[Z["qMTjB"]] || b[Z['TwJbk']] || b[Z["yzszi"]],
                i = b[Z["Dxbdp"]] || b["media-url"];
              const J = {
                'openUrl': q,
                'mediaUrl': i
              };
              return J;
            }

            if (this["isQuanX"]()) {
              if (Z["cnJkv"](Z["JqtGl"], "CaRgg")) {
                let I = b[Z["yzszi"]] || b[Z["TwJbk"]] || b["openUrl"],
                  V = b[Z["dnnui"]] || b["mediaUrl"];
                const E = {
                  'open-url': I,
                  'media-url': V
                };
                return E;
              } else {
                return Z["bKDWx"](E(W), O) ? P : (h[Z["LZHXt"]](z) || (v = M[Z['EoLOn']]()[Z['hwIWL']](/[^.[\]]+/g) || []), d[Z["EfgPP"]](0, -1)[Z['dGjDt']]((l, R, r) => m(l[R]) === l[R] ? l[R] : l[R] = n["abs"](F[r + 1]) >> 0 == +w[r + 1] ? [] : {}, o)[g[t["length"] - 1]] = L, X);
              }
            }

            if (this["isSurge"]()) {
              let O = b[Z["TwJbk"]] || b[Z["qMTjB"]] || b["open-url"];
              const P = {
                'url': O
              };
              return P;
            }
          }
        };

      this["isMute"] || (this[p['NvGvD']]() || this['isLoon']() ? $notification[p["JBlns"]](S, a, Y, p["zYPmU"](Q, j)) : this["isQuanX"]() && p["PEJul"]($notify, S, a, Y, p["BBKJc"](Q, j)));
      let B = ['', p["BRCNQ"]];
      B["push"](S);
      a && B[p["Knwkb"]](a);
      Y && B[p["Knwkb"]](Y);
      console["log"](B[p["XgvQO"]]("\n"));
      this[p["pWUNv"]] = this[p["pWUNv"]][p["thwoM"]](B);
    }

    [p["EpagF"]](...S) {
      p["TDfto"](S[p["OakBY"]], 0) && (this[p["pWUNv"]] = [...this[p["pWUNv"]], ...S]);
      console[p["EpagF"]](S[p["XgvQO"]](this["logSeparator"]));
    }

    [p["bdYaD"]](S, a) {
      const Y = !this[p["NvGvD"]]() && !this[p["TEhQN"]]() && !this[p["gXLLg"]]();
      Y ? this["log"]('', p["wQqon"]('❗️', this[p["Gfcja"]]) + ", 错误!", S["stack"]) : this["log"]('', p["gqCJK"]('❗️' + this[p["Gfcja"]], ", 错误!"), S);
    }

    [p["OOTUt"]](S) {
      if (p['zjgDG'](p["GBjsa"], p["GBjsa"])) {
        this[p['vahvK']] = c;
      } else {
        return new Promise(Y => setTimeout(Y, S));
      }
    }

    ["done"](S = {}) {
      const a = new Date()[p["rwkXM"]](),
        Y = p['YJetv'](p['BRBwt'](a, this[p["GpvDT"]]), 1000);
      this[p["EpagF"]]('', p['vUthb'](p["YvJVr"](p['wQqon']('🔔' + this[p["Gfcja"]], p["QFjSh"]), Y), " 秒"));
      this[p["EpagF"]]();
      (this[p['NvGvD']]() || this[p["TEhQN"]]() || this[p["gXLLg"]]()) && $done(S);
    }

  }(T, c);
}