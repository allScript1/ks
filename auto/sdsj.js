/*

安卓软件名称:闪电世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/5 0-23 * * *

脚本地址:https://ghproxy.com/https://raw.githubusercontent.com/allScript1/ks/main/auto/sdsj.js
变量配置文件地址:https://ghproxy.com/https://raw.githubusercontent.com/allScript1/ks/main/auto/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改


脚本需要 node-rsa 依赖库,自行进依赖管理里面添加,不会就自行使用 ssh 安装 命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

*/


const $ = new Env('【闪电世界22/04/14_0】');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';
let variable_num = '' //脚本对应的配置文件序号,没有留空



var _0xodz = 'jsjiami.com.v6',
  _0xodz_ = ['‮_0xodz'],
  _0x3ba2 = [_0xodz, 'wpZNwqwKwoY=', 'K21TTA==', 'UsKaw7BXfw==', '5bqx5ZCr44GEwpEz', 'wpAQGMKqGA==', 'w6rDoFBYVA==', 'V8KGasKXMA==', 'bcOTbj4=', 'w7BwMcOB', 'wqooEsKpNg==', 'w78YAsO8Cw==', 'w6fjg4tAwq9S6Ie05p+c5o2n56aBesOCw57ot7/lj5PDiQ==', '5bu/5ZOu44CVCCU=', 'w7/CtcOeU8KEcQY=', 'f8K4w7jDsWA=', 'w5TDo3FFag==', 'Z8OwWQcr', 'A8KlGA/DkMK6', 'w6/DtlFDdw==', 'w45qw7PCrsKX', 'UMKdRMKnCw==', 'wo3Ds8Khw4Yhw49H', 'J31pwoHDrE5wEiZrLU13bcK4RlfDrkUhHiTDi0/DoHjCoH/CssOeKsOfGDRSeg/DqcKuwrjDuARpbGpcwolNwonCpsKXPMKCccK4ZAwmw5nCicKbw57Du1jDqGnClQUqch90w74WCwrCtGJxwqDDgw==', 'wonDgMKhw4gr', 'Q0jCtApkwrEuwoHCtwI0YA==', 'J21zWMOL', 'OG1EXQ==', 'OsO7fSY+', 'CMKaRQJv', 'RcOtaC3Dug==', 'NzB8EMKv', 'w6nCqMKTwrbCsQsq', 'wpVMwoQPwpc=', 'DMKhVDVt', 'w4XCtFgMw4A=', 'woETwpstwqE=', 'AcKUw5khw7U=', 'fC96wp/Dt3A=', 'B8KsVD5v', 'w7zlu4blkJLkvpjphrPmj4bnjrvjg7LCqHXmiIbli6I=', 'w74WAcOSLw==', 'w6PCqcKTwrY=', 'wqcNEcOYZg==', 'w47CqMKwwr/CiA==', 'QMKPw7jCmcOhJsKQ', 'w7F3w6PCrMKX', '44GBw57CmuesvOWKneaLn+WIlhTloqLliqfooY3li7zlibTvvKs=', 'w6JGw4PCkMK5LcOow6g=', 'w6tkw53CmsKPIE0=', 'ZMKtw4lc', 'w60fEcOFD8Ov', 'aC4zwoFBYcOjC8OsPXg=', 'w6fDj8KtQiw=', '44Cjw7XCmue/que7peissuawkOWnu+i1kA==', 'w7DjgKccMk3ohpPmnaXmjrrnprIsw6nDmui2kuWNscO0', '44Gxw6ZI57y257mp6Ky/5rG+5ae96La4', 'wp1iNQxc', 'w70TA8OBRsO5w7vDt8OgwoDDhMO3dER3', 'C8K5DRfCmMKpUMKlw6ss', 'w6bDj8OEUD53w75O', 'wqrDqcOd', 'IHZDWcKCZMKmwoU3w5jCgsK0VGDCrMKGTBpcwp3CmRrDjSTDnQ==', 'wr/DizfCiBE7eMKKw6Yw', 'wogfeR/Cs8OQXWEmCcOuw4jDu8KBDTtAwpvCqcKvcsOCdxlXSg==', 'eCxjwofCviLDlHgiwrpYFMO7wqfDvWDCnw==', 'wq06GhJgX8OLwpfDp8KRK8KnVHcMQRMow6TCsnNFOXQjFcObw7oWcsKjYMOFChY=', 'w6XDhsKLXgU=', 'wrJjwpUEwq8=', 'w4HCtcO1RMKS', 'Z07CssK0AsKywotHw75/LXIzw6HCqMOJcMOIQ8OcwpQLZ3pdw4JTUFUI', 'NsKqw4Iow58=', 'fjI/w41eYMOHRsOuIHMuJ8Odw7DDlcKC', 'wqXDv8KJw64W', 'wr/DlirCiA==', 'w7fCvcOdVMKc', 'bC9vwrnDkw==', 'w4vChsKAwolo', 'dMOxXAvDig==', 'TcOuw7DDk8Oyw5sJVcOCwqRew7Irw63DmkLDucOgVcOiWm7DkQg=', 'KiNXDcOUOzYBw6fCosOpKsKYw6lL', 'wp7DpsKhw4Ypw49DccKRwoowasKbZsO6BcKnwoXDqRTDqmhvfQHCpnDCqcOqwqY=', 'AsKvKg==', 'O8OjTSVxLA/Ch8O9wodzw7TCizjCsnjDgE3DpsOCGHLChcOgOg==', 'UsOoLcKuZMOkw45iw7/DnVoew7jDh8KeeBTDtMKOwr5ifV3Dt8KpYjTDmcOPUsKUAkrDhzQ=', 'w69lLMOFYsOdwqLDiQHDp3vCmMOUG1omw7FIY2LCqE0twr7DssKQXw==', 'UXPCtMKcMw==', 'wosOaB/CpMKeHns0Hw==', 'wpUddgRt', 'wozDpsKWw6Ar', 'AcO8w5cMwqA=', 'woRrwpcJwrI=', 'w6XCrcKJw7FeO8K6wqViwrRUwqrDqcOrDBHDrg==', 'LsKqTAdXJMONwoBvwrY=', 'w5fChsKcwo14', 'IFwVw4TDrw==', 'wo/DvcKyw5l4woFScMKawok3Jg==', 'Kl88w4TCmAo=', 'KiJQKMKKPDcPw6fCtQ==', 'wo59Gg1N', 'wqcMJcOEYcKUw67CpF0=', 'WcONbzTDtQ==', 'wqsPNsOZasKQw5E=', 'QMKGw49FSA==', 'w7geFcOc', 'Y8OaVg==', 'w6ZyO8OQNMKXw7/CnEzCrGvCkcOX', 'blbCrxd+wqRyw4E=', 'ScOTawPDig==', 'BMOHw4Eqwr7ClyvDq3jCnw==', 'Z8OXRj4KaiLCvVw=', 'TMKGw6c=', 'w7PDkGVAcQ==', 'wp7Cr0HCqUXCicKZw5HDgg==', 'w7PDkHZba0tWYH4=', 'Qnc7Ri7Cp23DsGA=', 'w6/CrMKAwrpVEMKr', 'JiAaK8O7', 'wokYXxXDug==', 'wrDDnDbCnBZ+', 'wolCDS5Aw7sgBMOv', 'wrXDigrCgRE=', 'w6ISHsOMHMOi', 'wp7Dh8KZw6sj', 'w6HCkMK/wpHCqg==', 'I2NmWMO1', 'amTCu8KfHA==', 'wpEnXQR/', 'JyobDsOv', 'IsKzw6kxw7c=', 'PcOPbiAv', 'CsKwUQ5D', 'Jui0k+S6sumCi+WEnOODgMOQE+e/hue7jOiutOawn+WlqOi2tw==', 'wq/otKDku47pgqzlhrbjgYQaM+e8lue5ieivtuazhuWkvei0qQ==', 'WsKIw6DDr0M=', 'w7h/w5fCi8KkE0l/IsOGeMOqbw==', 'w7zDj8Kc', 'w57Cs1Erw67Cig0=', 'U8Ksw47DklbCq3DDsEU=', 'wqbDtRXCvTI=', 'AgzCuAljwqsvw5HDtlV8OAs=', 'Y8KyUA==', 'w7w0McOoEg==', 'w6DCk8OsY8Kf', 'DnddfMOp', 'Q33CmMKgGw==', 'W8Kmw7LCrsOB', 'wq7DnCjClwN1bg==', 'QsKLw7VnIg==', 'Ols/w43Dj13CrA==', 'wprCqVrCtE7CqMKZw5vDngTClsKdwro=', 'woQ8VhdI', 'emgTchw=', 'w43Do8KzSy8=', 'w6DCtcOdTMKEdQY=', 'RMOzeg03', 'w5RdHA==', 'w4HCvsOMZsKD', 'dMK6w5DDrmg=', 'woQVwp07woo=', 'ZkbCuA94', 'w5lDw6vCuMKg', 'fnUvwo3CrwhrQXQ=', 'w6zDrHzDusOhwp4mR8OBSA7Dmg==', 'fsOXaSjCiQ==', 'w6dGw53CkMOGdw==', 'wrYrwoUQwoM=', 'JW1TXMOULsKnwpMrw5vCh8KlTHrCv8KOBh9Two3CjxbClA==', 'wpk7HsOYcg==', 'wqrDisKdNGo=', 'JWl0TsOX', 'QcOCaCQD', 'w4PDtFfCt1jChMOew5TDlDnCicKawr4=', 'AsO9djEo', 'Z8KNw41PJg==', 'w7LChMKmwrJa', 'bjlFwqbDiw==', 'ClpHwqHDrg==', 'w7bCssO1bsKn', 'wqDkuobpqrTlraLjgJQWH+e9l+e7m+isr+azoOWlk+i0oA==', 'w4x1w6zCscKy', 'w6NwLMOU', 'IcK9TRNQYQ==', 'PXFSW8OnL8OowoIy', 'YsOZZDzDjMOs', 'fcOFWsKZcw==', 'w6DDjsKew7BC', 'YknCscKyNMKnwotBw75xITE8w43Co8OGP8OK', 'w7sEFcOZN8Ouw7LDosOv', 'wp/CilzCh04=', 'wqnDij3CiT1yasKXw7M=', 'XcOzZcKfdcKBw7A=', 'w7RlKsOcNsKVw6TCm0E=', 'w7h/w5fCi8KkE0l/Ig==', 'ZhErw5bDnVTDp8OhIMK2VMKPMg==', 'KFTCsQ==', 'wqjDo8KPHXY=', 'ZWwKTDQ=', 'L0NHW8Ou', 'IXt3wpLDrQ==', 'w7RhNMOcLA==', 'wrFpwocawq/Cq8O3w75aw63DqcOLKXfDu8OEfwkRw4spw6glFcKMWXDCmcK3AsOhw7VNwq8eb8O4eng/HjHCqMKfw5zCjwlFw5pMwoVGw4bCo1TCsC85w7VUCmdzw5Ntwo9oHMKow6I6EcO2wp7Cv3lbwrlfT0QkMcK1w5zCuU3CtcKfUn4DwpFKw6/CrMOVJUk6GMK7OcKvfSLCsMKKw4rDnALCiRPCtBRfMcK+RMOVcsOodHjCvMO5W0rDp8ODY3gZw6rDm0jDmcKaw6dnVU4LRyRcw7kiOcKDV8OXw4gebcOfI8K1wqvDoAhZMllzA1xfYAzDocKYbRYDwpLCoMKAw640w7PCqnxyYUBDwqrCnMK1wql0HAtrfiMRXcOTNkx/NsKOwp4/w7E+Rx3CtEMOPUk=', 'wo7DoQ7CkS8=', 'dVvCtsKXG8KlwoNcw7lj', 'QcKjw47CucOH', 'SU3CvwxpwrF1', 'w5/Dl8KK', 'w6vCp8KXwqxMOMKo', 'HH1Iwr7Dkw==', 'w5jDkVXDisKj', 'SUHCsT1i', 'K0p1woTDlQ==', 'IsKDw70jw5o=', 'wqbDjMKVw5gM', 'w7DDkXda', 'wolTwqUOwr3CjsKmw414', 'wo9ECi9rw4AN', 'BMOaw5otwrPCuDLCpSc=', 'w4DCq8K/AHzCm8OLw5xmw5zCv8KWwpo=', 'TsK2Gw==', 'w6XDj8KNRjNxwrhObWrCtBrDvGDCtUPDuUrDs3nDrGvCmg==', 'w6BSLcOeDw==', 'EMOdw6ofwpE=', 'BsObw5YrwonCmjrCvSM=', 'w5nCpUQ1w5DCoCw=', 'OsOkdzovZg==', 'w6xUw6DCmsKUJg==', 'wqFnw40=', 'wpgBwqcxwqBE', 'w6Fiw5rCmsOsJ1Ny', 'wr3DlTQ=', 'acK7QcKdNw==', 'wrjDuADCgzM=', 'TMK2w5NMIA==', 'wrs9UA==', 'worjg5bChMK8wrDohZ7mnaDmlpDkuJjlhITot4blorfmm6HjgqDvvq7DpkJ+beiHl+acjuaUpuS7kuWOjeeXveS6veWFk+i1ouS7r+a2ocOZw4PDi0Loh7PmnpPmlZXkubrkuqzkvrrkurrkuLjlvpznlrrkuILlla7kuazkua3ljaTpnIrmsqbnlZnpgoMnIi1A6IaX5p+t5pWq5LqM5Lm86L256K6y55eP5ZCVYxTlsq7ml47lh4voh6LooJXlipvpm4oVCULCmOWalOS+nOeWt+iEpeafoeaUguS5oumDruaJruS+peeXiOiBvuS5t+WPr+S5qeS+jee8puernuW5ieWNtOebuOS4rOWJnOaOheWkrOeZheeVguS/kueUseiBouaKneaJnnYTwp0u6IWV5p+b5pSo5LqH5aaD5p+r5LuB5oSW6KGt56Gf6KWK5oui5Lyo5pe555ix5p+t56Cc6KST5oqS5L+F5peE6IOH5oiN5oqvacONKEjlp6jkuaDmj7/ljqLmr6DmnrjmrbzorofnqI3ljbLliJDpm53ohovmnrLmlZvkuK0=', 'wo8tEg==', 'DMKJD2pF6ISe5pys5oug6KChw7IJwofljbfkupnmlKnpl4Lvv6k=', 'w79uw7XCqMKY', 'L2dDfcORJsOs', 'w77CjcKUwpx5', 'worCvkfClELCg8KVw43DlDnCisK8wr9CwprCtGA=', 'JMKLw7Ytw47CrsOlXW9zcz3CgVY=', 'wo7CtFfCpQ==', 'G8Kyw5IXw6E=', 'w5TDn3XDrMKg', 'w7vDssK+w49t', 'DMKzDw==', 'w7XjgobCosOFOeiGtuacjuaPleenguODtO+9hOmEiOe+n+aWkuS5o+aUm+aPsuafr+itrlnora/nobXkv5fphYTnvZLmlbTku5LnmavmrqTno7DmgbA=', 'NShD', 'wpHDqxzjgZflh77DiQ==', 'w401LEHCucOdaV0W', 'w6t6w43ClcKeI0FhLsO0Y8OoaVNNwqIBDQ==', 'BMKrGw3DqsK+XcK+w7Qow4gpfnPCoA1bNA==', 'NyhQDsKZLQ==', 'e8OMbjrDjMOh', 'wrjDjivCkT1gasKRw7s0dBEDwpx6woQBw6Y=', 'OihKAcKTLw==', 'wpUFwpo0wptXZW17wp8VEMOhw53CnMKiDsK1', 'worDpcK0w5gfw4hDccKZ', 'TMOpw4rDjMOlwoQ=', 'w45EaRjDusKVXHEtFMOiw4LDsA==', 'wqAdAw==', 'K8O6w6QpwqI=', 'w6oePcOyHA==', 'wqPCl1/ClUo=', 'w4PDicK7RSU=', 'w7XDl2FAWkhecmY=', 'w4vDksKYVgg=', 'wr4SwqsNwrg=', 'w5wxOlnCucOPaVseZMK3w65Bw7HCiMOXw5t7', 'wpvDt8K+BVDClcKEw4to', 'TlbCpSF2wqhzw5c=', 'PTBXDcKlPj8Sw6DCp8O8aMKew5lCwqfDjUs=', 'wp5SAzxNw6wt', 'LDRBFcKlLD8Uw6g=', 'cHctXTXCp23DpGZ5w4rDlMKY', 'woQBwowswptFZWtz', 'w6nDtHrDu8KGw5c3RsOC', 'woQCbgrDlsKMG2o=', 'w7DCpcK8woTCkA==', 'VsK4w4nDkWbCszPCuBw4DcOSwrp0VsO8w50q', 'WVDCuQxPwqVgw4bDuA==', 'CWZTW8OdOMO6', 'ZMK7w45XL8KgcMO8XMOZw7ZMwp9cwr9vwpjDrA==', 'TcKnw4FtWcOlL3zDig==', 'KndOdsOcIsOqwpM=', 'w7PCscKBwq1yO8Ksw79u', 'woleCDNAw6AkDw==', 'N8OgSj8UdUHChsOwwpV7w7vCgg7DuGrDnE0=', 'TsOpcsKI', 'w6TCscKEwrnCljItZcKHKMKHK8KKw67DkMKNGzI=', 'JcKXw58ww7LCq8OoTF0=', 'wpjCqFbCsnTCisKRw4PDmg==', 'w7V0L8OUKsKWw5LCi1HCrSzDhA==', 'w6NmK8OfB8KEw6zCj1HCqCvDh8KCagxzwrMH', 'dcK/w5hPL8KycMO6VA==', 'aMKTw4jDs3Bnw5Y=', 'ScKdw7jCgMOfN8KUwrZLLRLDhG9UN8KXOsKh', 'wpUYaB3DlsKbE2Yj', 'wpYxEMKdAMO0Rw==', 'XMKjw5d1WcO3L3rDgisiworDhi00w7RRfg==', 'w7JiPcOHB8K7w4k=', 'WcK0w5nDrEZ9w5PDlMKtw53DtsKJwrx2wqrChEZF', 'WuW/pOWlseOBkueugcOv', 'wozku7zotIfljrDkubTliYjjgbk=', 'eyF5wp3DjXTDkW8twrdbDMO7w5TCuWPCmSg=', 'SMKww4/DtEZvw5PDksKl', 'KcKYGwHDuw==', 'wqTDtijCuDY=', 'V8O7w6rDh8Ouwow=', 'PihIA8KlKzEJw6fCtQ==', 'WcKiw57Dpw==', 'wotPwrIPworCg8K3', 'wpUTwp0/', 'Z13CocK9B8K0wphSw6N1', 'w6REw5rCnMKfLQ==', 'wphXwrMWwr3CnMKmw4tww5/DusOgH2HDvcKWTzk=', 'e8OPbynDp8OgCsOJJQ==', 'wr/DljbCjwt4fsKGw7Y=', 'wpkAPMO+WA==', 'wrXCq3/CmW4=', 'wowXJcOpdA==', 'd8OdThXDkw==', 'YsO1ai80', 'wr3DnwjCvCc=', 'QEzCuw==', 'DOOCpEE4HOiEnuacrOaNl+ell8O/CcKK6LWG5Y+Cw78=', 'Peimn+edmQ==', '5buw5ZGH44Kvw4XDoQ==', 'wpFFwrMPwoPCjcKi', 'RcOqYg7DtA==', 'W8OVQC7Dmg==', 'w7/DgsKDw7Ja', 'U8Kiw4fDow==', 'YsOWw7DDgsO4', 'cTI1', 'QcOuZMKIUg==', 'w5bjgqkrwpQb6ISM5pyn5oyz56aoeDtQ6LWA5Yy0Pg==', 'RMKEw6/Cj8O4', 'LuW5humAquW6oeevqeOClVHCnee8lee6oOisruawrOWntei3ng==', 'wp8mwo0Iwoo=', 'I2Z6wrTDrQY=', 'wpcbwoc/wqhNfQ==', 'WcKsw4TDow==', 'wpjDrcK+AA==', 'w67Co1Iuw6HCjBt1', 'PsOAOCfCjcO4WMOBcADDrxLDtQ==', 'w7vDomvDhMKww50jRsOGVw==', 'w4jCpMOjc8K8', 'wromO8K7Nw==', 'wo4XwroBwqU=', 'dsKVw4/DjFE=', 'XsKsw47Dow==', 'fsKuVMKO', '5Ya/a+a4mFnDkumEg+aWqw==', 'asObVQ==', 'IuOCkHPCglPoh5Lmnpjmj5rnp77CgUoD6Lew5YyJwpI=', 'w4PluL3lkL/ml5nnmpXjgqw5wrs=', 'Y8OZeSjDmcOjDg==', 'PcKuZBFi', 'AMOBw5Q3', 'SGzCs8KXLw==', 'MsOxeAQJ', 'wpMCagE=', 'wpZYCA==', 'QuOArjzDjsOX6ISk5p+l5o2S56W1w7Ufw4votbPljaHDgA==', 'acKiw5lYCA==', 'LGNDSA==', 'KGhwwpTDlho5Ug==', 'w7XCv8OBRA==', 'DemEu+W6ig==', 'WsKLw6LCng==', 'wr3DnxnCqiA=', 'dHTCksK2Pg==', 'wprCulrCtA==', 'wrDDp8Khw7wU', 'w7XCs8OeesK1', 'JMO2UCE=', 'w7TCokgrw4U=', 'D8KvDzPDug==', 'BsOHw7oDwpQ=', 'wog3McOpVA==', 'w4rCm8KJwql8', 'wqTCmHrCkU4=', 'JFEo', 'w5E3Ln7Cvg==', 'RWM4WCo=', 'QcK/w5bDkk0=', 'IU8ow6zDtg==', 'PW1+c8O6', 'SsKiw4PDsg==', 'wqvDmDHCjw==', 'QHUbci0=', 'wq3DjhrCvBU=', 'cV/Cq8Ks', 'asKAw47Dklc=', 'w7HCo8KNwqs=', 'w7/DgcKARw==', 'w73Ds3TDhsKj', 'w6fCtsKPwpBX', 'w7JGw4fCgQ==', 'csKNw7B1Mg==', 'd8Ktw5RJ', 'wrNfPRtT', 'w6/DrmFxaA==', 'S1TCpMKXLQ==', 'woDCgnDCpH4=', 'IsOZw6sTwpk=', 'WcKEw43DknI=', 'LShR', 'ZsKHw7tYKg==', 'N8KBw44Ww4TCosOs', 'YcO6ShpHK8KE', 'wpEtGcKDD8OSasO1w7U=', 'A8OHw4At', 'wqbjg4ZSKMO26Iez5p2E5o+W56akw4cMwq3ot6HljbRU', 'wpVOwqQZwpo=', 'EeS4oOmrqeWtpeOBi8OvJOe/j+e7m+ivuuazoeWmiui3kw==', 'w6cZFMOOEA==', 'COS6oumqsOWuveOAu8OywpTnvZvnuJjorZvmsKXlpJ/ot7M=', 'asOycAvDnA==', 'wpAKfxzDrA==', 'S8OvZMKI', 'woEcRyJj', 'X2XCtzFd', 'w6rCrcKD', 'CuODnMOOUgnoh4zmnL3mjZ7npI/ClcK5Dei3nOWPtMO7', 'wr48UzRW', '44K9w6wB5pKK5L+T5ou55Yu3Kua6m+majuS6p8Kg', 'b0rCp8K1LsK3woxWw7Rk', 'w5zmobvlrqk=', 'woLDq8K8', 'wpbjgpdsw6bCoOiGqeaduuaPouemmQlKwpTotrTlj4fCqw==', 'c+S6temqieWsheOBmjkA6I2D5byOw5Q=', 'wo0EewrDjMKJF3w2', 'w47phZXlu5o=', 'OsK5SgA=', 'eMKFw6bChsOO', 'wqAzXiU=', 'ewcnwoZk', 'LlhCTMOx', 'w4vDkFTDgMKS', 'TsOhZMKvYg==', 'QcO7w7DDgg==', 'c03Cp8Kq', 'w6oeE8OOJsO/w74=', 'PU4sw4TDnQ==', 'w4PCocO1asKq', 'ajw7wpc=', 'w6vCo8KowrFm', 'w7VTw4XCn8Kb', 'wrc5HsOpSw==', 'w6rjgbt+AMOw6Iel5p2e5o+C56W4V8KpwobotrHljJ8D', 'WGw9UCI=', 'X8Kqw4nDiFjCojc=', 'woExwq0mwpI=', 'w5ZFFMObMw==', 'wogZJsOgUQ==', 'w6rCrlIMw40=', 'wpXDpcKjw6wI', 'ecKgRMKK', 'OGh0woU=', 'LuS6numquuWsi+OCqcK+Sw==', 'w7HDomzDusK4w5Qz', 'wowEag==', 'DhcJCMOD', 'w6IYFw==', 'WuODtMOJLcOU6IeV5p6l5o+o56SGKix56LeJ5Y+Gwos=', 'b+W7s+mAveW4i+evjuOBpWUd', 'RcOlc8KeS8Kvw5E=', 'S8KEw7/Djng=', 'OiEiM8OO', 'w4U6BsOvPQ==', 'wpIvBcKGLA==', 'GsKXWiNB', 'wrwxBsORag==', 'RMO5w7DDisOuwo8EQMKB', 'w7XCtcOZdMKMewY=', 'w7vChnFbYQ4F', 'fMOGw5Msw47DrcKz', 'VMOZw5fDu8Ok', 'w4DCg2A0w5w=', 'B8K6GS7Dow==', 'w5LDucKLw7ln', 'w4DCuUY=', 'woTjgacDw4QR6IaQ5p6/5o2G56a0w4nCnsO06LSx5Y+cOg==', 'Z8OSbj7DgA==', '44CgOHnnvaTnuoborKLmsYblpq/otKI=', 'wo/jgLfDncKawonohZnmnqLmjZfnpYAkw5/Cnei2puWPuio=', 'dDM2woZV', '44KiwoLDjee/kue7luitvuaxgOWnl+i3vQ==', 'wqptDT5x', 'IcOkw7o3wrM=', 'wp3DoDbCoiM=', 'czlt', 'wozjg5LCl8KwVOiFheafoeaNm+ektcO2F8Oi6La25YyyTw==', 'wrXDlzzCnho=', 'c+WPkOe6nuW6r+esmuOAkhrDlA==', 'dsKgRw==', 'w6HDjsKNVic=', 'wrnjgqjCnsOsc+iGk+acruaMtuenogNvX+i0h+WPkgE=', 'wofDqsK/Enc=', '44C5wrog576857u26Ky/5rO25aS76Leh', 'wqvDmcK3w7kY', 'RcOxfB/DrQ==', 'alHCpQ==', 'RU3CuBto', '44OgSMOJ', 'wpwXwpotwqVGYQ==', 'QcKFw6w=', 'woXjgJ3DjcKQwrjohY/mnIzmj4Pnpb3CuCzCqei0quWPuwk=', 'wpbDuMK1w484', '44Cpw67ChOaTkuS9muaKkeWLkSTmuq7pmK7ku4bDhg==', 'VGQ/UDnCoU3DsGNow5vDiA==', 'wp8AFMO6Vw==', 'XsKgw50=', 'worjg5bChMK8wrDohZ7mnaDmj4fnp5Rkw4hq6LeJ5Y2GwpQ=', '44KRw7zDlw==', 'wpQ2GcKKCg==', 'EsOLw4cwwrnCkHnDs3M=', 'WsKYw6LCnsOlB8KcwqhHHwnDhmk=', 'wqUQXz9j', 'wpcWwpQZwq0=', 'w74EAsOpDg==', 'woTCmGfClGw=', 'QMKPw6fCiMO1', 'wpBPwqc=', 'NcKQbhBW', 'w6TjgpTCqBh26Ier5p+J5o2v56Szwp/DtMOS6Leb5Y2Uw7E=', 'w43opJnnnLjlur/lkaHjg7/DisKX6KW5552c5bqQ5ZK56LyN5Zu65paZ5o6/5byW5bub', 'QUzCuAt8wqQvw5fDoUt1IxjCkTQZwqzDhRp9V8K9woQ=', 'QcK9w6BaVA==', 'QsKYwoNpw6A=', 'P8KMOmvCiQ==', 'w4TDsnzDo8Ke', 'ScOLZynDvw==', 'YsOUwopywpw=', 'wrs1XDdY', 'w5zCtMOrRzg=', 'ayF+wrbDgg==', 'fTktw4HCqg==', 'w5TDvnFaSg==', '5L2C55er6Led6YWL5pyj', 'w5HDgcKqRS4=', 'wqrCr3zCpnw=', 'w5jDscKcw7dg', 'w6kSBMO/AcOnw7Y=', 'e8Ouw4hUFMO0Kw==', 'w51Qwoo2wqVPanp+w5xNTMKowqDClMKsHcK9w4FHw5rCncO1JcKfwowVBg9/fcK4cFQ=', 'w5PCtMK4w4Qjwo4Y', 'JsK1w6Aow6k=', 'wqkAOMOOPMKFw4vCtVY2YMKXw4DDsw==', 'wqYeQiVk', 'wp4LAMOcVQ==', 'XcKEw6/Dg28=', 'Wg0YwrdC', 'GMOASx8u', 'w4PCicKdwpbCmg==', 'CyhjA8Kx', 'VMKmw7nDkVE=', 'aHcUV8OO', 'wqHDqMKXJVU=', 'w6jCklg1w54=', 'w6LDj8KmVR4=', 'wr03JcOJYQ==', 'w7kzK0vCiw==', 'csKew5dUYQ==', 'BWtpwr3Djg==', 'L21iw5Mb', 'w4rDhnB+VA==', 'w6HDj8KOw5ZN', 'Y8OpWA7DgA==', 'w6PCpsKUwqpY', 'NcOTQTQo', 'wo1zwqQWwqc=', 'eW4IURM=', 'bWzCphtI', 'w4fDl1ZFcQ==', 'w4h+w6zCiMK1', 'w6l/w53Ck8KT', 'wokSB8OcZw==', 'w4HCscK2wqhZ', 'D00dw5bDmg==', 'WsKFw6TDoXc=', 'w4IeI8ODLw==', 'QsKkw4VaCQ==', 'w7fCssKtwoVh', 'a8KHw6TCr8OP', 'fcKcaMKAKA==', 'w59dw5XCksKn', 'eXfCryZZ', 'YsKlw6/DjH8=', 'JsO8w4ABwp8=', '5L6R55as5rue5oic6L2p', 'NcKIGz/DvA==', 'w7B9EMOYLQ==', 'aMKXw5nDnlA=', 'ehBiwp7DsA==', 'w71Ew5HCkcKs', 'fWMffTg=', 'w5sjA8OzIQ==', 'RsKjw7rCnsOq', 'wqIlAMKbNA==', 'BOOCrHk0w4Hohp7mnYfmja3npb5Rw7RD6Lei5YyMHQ==', 'XGcqRjvCsmE=', 'wo/DucKiw54=', 'w6Z3w4bClMKA', 'J3siw5XDow==', 'w6LCt1QKw64=', 'e3UURgA=', 'HW9fccOL', 'IHpMwoHDiQ==', 'wq3DlznCmQ8=', 'wpxmORFx', 'worjgrR3XXzohLbmnJPmj5bnpL3DtcKPT+i0o+WNrxo=', 'ReOAmW7CnsOm6IWu5p2z5o+t56W9NmlN6LSw5Y+5w7s=', '44O8w6ET576R57u36KyZ5rKy5aaG6Lae', 'b8KUw6nDqnE=', 'RMKqw67Dg0s=', 'SsKfw4duVg==', 'OmJVwrTDqQ==', 'Kh0oHg==', 'wr/CtHTCpGA=', 'wp5WGzw=', 'w47Co0grw6vCgAZhw5zCn0fDpg==', 'wp4mwpoAwpLCqMO2Xw==', 'wpMTwoo1wrRAZ3Q=', 'N8O2TTQ=', 'enY6fjs=', 'wpgmwo0K', 'wr7DmDvCkBJ3aMKI', 'RRBFwpnDlg==', 'F8OJw4c4', 'MsKFw5kpw53CrsOqUw==', 'w5fDmcKZw6I=', 'TcKnw4Ft', 'ScKLw7/Ciw==', 'w7XDl2FA', 'worDvcKZw682', 'wqoAIcOK', 'wo4hwqwCwoY=', 'w5jChcOrZ8Ku', 'OMK7cABo', 'wrrDnz7CiSs=', 'w4gnO0DCgw==', 'w6Zjw5rCmsK5', 'YsOVRjY=', 'VcKuw5fDnnDCqzTCpQ==', 'wp9IwqESwoXCjw==', 'VcKgw5bDnw==', 'MuODhMOXcH/ohpvmnaLmj5jnppFnbcOL6LaF5Y6FcA==', 'djhuwpLDqg==', 'w57DncKew7Brw65n', 'EcOaeiYH', 'w6/CisKcwrXCiA==', 'XEQ4eSo=', 'w6njgZIGwoAm6Ian5pyv5o2L56a7wobDisKS6Lam5Y+nwp8=', 'IVArw4TDlg==', 'wpPov5Toto3jgpIwwqk=', 'wpLDs8Kiw5khw4tH', 'GsKwMMOdHQ==', 'a3jCo8KUGw==', 'dsKNw6fDkUA=', 'wpNZCzhM', 'wrzov6votb/jgpjDo8KT', 'wqnDv8KZw7ww', 'w5PCu8K1wq93', 'w6bDgcK8w7NQ', 'w4rCk8KxwpTCgg==', 'RMKCw4RpNA==', 'w4/Ckm8Ew6I=', 'QcKYwoNpw6M=', 'w7wjL0nCnw==', 'wrdWwqsawpM=', 'wrcxwpINwpM=', 'wo8KwoPDmOW+o+WIjg==', 'wrLDmDXCng==', 'w7TCp8KSwrpDKsKow7g=', 'w6lDw5/CuMKm', 'DMK4GSrDow==', 'wp0dwo4=', 'w5EoLVbCng==', 'eeW6veetteWTq+mCqeWEv+eLqOaBoeOCmMO8wr4Ow5bCqwvlvpXli7TmiarlnJjkvoDnvorvvqI=', 'D+WNh+ijv+WLseavt+aWju+9gQ==', 'wrLlj6rotrrmnpHvvIk=', 'wqDot47phpXmn4Hvvbg=', 'HOiEtuWvsuS4rumoheWumO+8pg==', 'J8OHwqbDh+W5uueskOeJg+aDheS9r+e8ou+9quefqOeBoTE=', 'NOaNoeWcgOi1jumfjAQ=', 'w7nmjbjln6HluI/nrqF5', 'c8KhRMKKOw==', 'wpPluYLnrrzni6rnirzmgojjgJPDnMO45bec5p2L5bqI562w54mM552h54Cj', 'OERTwpDDvQ==', 'WhthwoXDug==', 'HG4Nw7HDnw==', 'woXDjAHClig=', 'w7bDnsKaw5tC', 'Cm9qwqnDlw==', 'wrUIwrAzwoM=', 'AmsJw6bDpQ==', 'RcKLw4jCvsOI', 'O+OAkipaI+iHj+acqOaNjuekvSDCjsKW6LeQ5Y6Dw6M=', 'EeS4oG/ngozpq6rlroXjgJXCpCc=', 'w53DmcK4QwU=', 'w4LDssKKWik=', 'B1Y6w6zDlw==', 'w7cuPH7Cnw==', 'JMOjw4EzwpA=', 'w6PCvlQKw7Y=', 'X8KGw7nDoWs=', 'wrUrPcK5Lw==', 'BV1PwrvDmg==', 'MRwHCsOY', 'asKFw53Dolw=', 'wpbDqzvCkhQ=', 'wq0oPsOEfA==', 'wosKwp4hwoA=', 'w6nDhml8ag==', 'wo8LwqAlwq4=', 'wqEMF8KjFQ==', 'YMOvehXDmw==', 'wrM8wosSwo4=', 'w4oRKF7Ciw==', 'wrkpMsOdRw==', 'wopWHS5R', 'RsO1w6DDhg==', 'w4XCuEUiw7c=', 'OcKKw54nw5U=', 'wpdSHC5Vw64s', 'ExN2LcK/', 'wrYVwpoCwpQ=', 'wpzDk8K6GmI=', 'AcO/w5I0wrs=', 'w6Zow4vCs8Ko', 'RcKtw6HDt0o=', 'wq8XOMOhew==', 'VMKDw7BUUA==', 'wrQdUhd2', 'fXHCjhpK', 'W8Kbw4FZXg==', 'wqrDssK3LX8=', 'YMO6Vi4w', 'w7nCp8K2wqXCpA==', 'w7VVBcOCDMKowqk=', 'wqMvw5fCkcKlMFgxfcKkMMKoLnhQwrMQThLDmTHDiMOLw4vDicKZwrwnwrY2', 'ZVAlFcOow4vDmA==', 'wrkAPMOf', 'wpVkNQtQ', 'asKqaMKoMw==', 'aDdjwoM=', 'RFvCpT9c', 'PW9kwrnDug==', 'w4nDrU5LSA==', 'wpAowp4=', 'PhMlDw==', 'wrrDrMKTw6wU', 'wol2eQPDkA==', 'OsODQTwb', 'w7zCgWgtw6Q=', 'wrnCkMOZA2k=', '5L2i55W15rea6ZuR6L2L', 'w4RDLMO8Cw==', 'M8K8w4wFw6o=', 'wo/DqsKqJEk=', 'w65YMMOAGw==', 'w4PClMKDwprCmg==', 'GMOjWh4q', 'w48nIEc=', 'wrgXeR5q', 'Q8O2w5F2YsKjdA==', 'w7twXj9NUcKL', 'wr9ywrQ1wrE=', 'w47CpsOhwpp3', 'w6sSAHrCgA==', 'w79UK8OBHg==', 'W8Khw57DnkE=', 'wpPluYLnrrzlkI/pgZnlh77nirTmg6fjg4kUYngMCAzlvJvliazmiqHlnpzkvrXnv5/vvYQ=', 'w7TljY/ooqXlipvmrb7mlaTvvow=', 'wo8KwoPDmOmCo+WEtOaXvumFiEDljoLotJ3mnorvvpo=', 'Jea5guaJj+i8ge+/oA==', 'wpHotqzph77mn7rvvLE=', 'YeiGt+WviOS6qumqneWtlO++qg==', 'w6fDth7DreW7keeuv+eJhuaCtuS/tue8ue+/teees+eCsh4=', 'w7LnppjmsYTCkQ==', 'wpHmjoTlnbzluLrnrbrDlA==', 'VcKvw7jCnsOG', 'GMKyIxbDpg==', 'HzBXMcK2', 'I2Z6', 'Mea7neaJiOi8ku+8vg==', 'Uei2nemFhuafkO++mg==', 'cuelk+awvmE=', 'woDmjb/lno/otpPpnoDDkA==', 'w6vDpnbDvQ==', 'ZxN5woPDlA==', 'wofDk8Kiw54G', 'wqfnlLnmia/lnbvluZrkvJPmg6Ljg6wCw6nnvJjnubforJDmsbflpZnotLc=', 'czNkwpDDpmo=', 'f8OzcMKmTg==', 'w7DCs8KEwrs=', 'w6FQw53Cn8KvNcOvw7UTaMKQw5zDpVJuwqh7ew==', 'w73Dk8KMQQBdw5I=', 'acK7UsKGLVrCrsK1XA==', 'w7fCtMKewqfCrAIle8KL', 'DsKIIQnDjQ==', 'wpIXUzJ/', 'wrUlJMKlLg==', 'bjsTwo1X', 'w6PCgsK5wpDCpA==', 'woLjgrDCmlwm6ISO5p665o+756SvN8O2Rei2ruWPpMKo', 'GsOGw5c8wq4=', 'wrQLwrEbwrE=', 'w53jgYJEPlfohanmnp3mjK/np6bDjTvCuui1nOWOuQA=', 'w65/PMOQIA==', 'wqDov4jotaTjgKM/DA==', 'w5UjOkDCh8OebQ==', 'w7vjgaLCmjHCveiEu+acqOaPj+ekqMOTWlHotqLljbXDmA==', 'IOi+oOi3neOArErDtg==', 'wrHDnCvCiANxbg==', 'w5TCuGo2w5w=', 'wqA4fjpI', 'BGVfwpDDjw==', 'c8K7w73DgVs=', 'w4HDt8Kvw45T', 'wrjDujHCvBg=', 'SsKPw7/CvsOpLMKQ', 'dAQ6wqpA', 'MX88wpZAJsKKWcKvbWkyLsKWwrHCjsOGVsKMw7LCugbDvR7DhA==', 'w4LCpsKyGWzDk8Of', 'Kks2w6jDmlvCpA==', 'QsKuw4rCgsOo', 'K1J2TsOs', 'RcO7Wy83', 'w7HDq8KGw5Vc', 'wo7CrF7CjkI=', 'wq5EwpIewpA=', 'w6LCv8OeVA==', 'wo3DlcKZw5wk', 'IcKoLx3Dlw==', 'w6TDj8KO', 'WeOCh0o6MuiEmeacjOaMpOemo8OZNMK66LeB5Y6mwrw=', '44CXBMOi5Ym46YG05ouB5Ym1', 'wq0gMMKKGA==', 'acOlfycJ', 'UMOVWMKLfg==', 'wpjjg4DDnk/CnOiEjOadj+aNkueltREHw5Lot6/ljLB7', 'w47otqnkuqvpgKTlhbjjg6DDn8Kf572Y57mu6Kyu5rK95aeM6LaG', 'wqbot6/kupTpgozlhZrjgY7Dt8Kr572e57iH6K+N5rKN5aah6Leg', 'w57DhsKFex0=', 'LGZ5wpQ=', 'w6lIw4k=', 'eeOCuMOANsKv6Iek5p235oyZ56W4woPDssO76LWL5Y+RwqM=', 'Zea3uui1tQ==', 'w4jCt1Um', 'SsKLw6bCj8OJL8KTwqs=', 'wpzDvsKww4Qnw4k=', 'woPDr8KsDmc=', 'c+i2uuS5iemAhuWEvOOAkhrDlA==', 'w6XDhcKaQD5zw7M=', 'w7kWGcOf', 'beWOn+e6hOW6juetteOAmMKEw4nnvYrnuI/orarmsIzlpbPot5Q=', 'WMK4w7nChMOT', 'd8K2dcK+Fw==', 'dMKIw7zDkV0=', 'QsO/w7DDt8OowoxD', 'wpUYZj9P', 'EcOhw57Dr3RuwpDCnA==', 'YsK5a8K7Ng==', 'w5LDnMKJw41vw75AwpPCsUImG09C', 'Lnkdw5fDpw==', 'JlFWwoHDqw==', 'bMK1w4h+Mg==', 'aMKMw6bDkUM=', 'EMKzGxM=', 'T8OzUw89', 'w5BOw4vCmMK1', 'J8Ohw7USwo4=', 'w5J1w77CoMKc', 'VMKgw7RlFA==', 'wroWNMOEdQ==', 'GOW4rumChOW7peetl+OCkHQo57+657qW6K635rKk5aaS6LWX', 'wrzlub3pgL/lubPnrojjgqJsEue/sue7uOiukOazu+Wmo+i0lQ==', 'XMOnYzI0', 'VcO7w7bDkMOk', 'w6MNM8OqLA==', 'w6XCrcKAwro=', 'bMKjw5o=', 'wo3jgIErw5oh6Ieo5p6h5oyt56SCw6Rkwobot4Hlj4JI', 'OuW4temAgOW4leeskuOArMO9w7PoipTku7dj', 'w7bCscOZQQ==', 'S0LCsRtZwq9nw50=', 'UcKnw5vDlV7CoA==', 'KGZxwpU=', 'b+mHmOW4nA==', 'R+ODiFAbXeiEk+aekuaMueekocO+wrBj6LWk5YyGw5k=', 'wpjlurzpganlu4nnrrfjgqgyCQ==', 'bcKpw45OEcKxdA==', 'RMKyw4DCmsO0', 'e3ItWzA=', 'NiRsJcKR', 'JG1Q', 'w6zCqcKQ', 'wrw8bzdp', 'SUnCm8KWMg==', 'UCFTwrnDiw==', 'S0rCsxp8', 'ZGs8WB8=', 'b8OWYcKeeA==', 'wpjDlMKlw44F', '5qyE5L6R57yG5rOG5p685biy562t', 'w7kHJnfCgQ==', 'HTRJFcKz', 'w7fDlMKjw6do', 'woQnAcK7NsOQZg==', 'w4LCpsKvHmLClMOHwoU=', 'w4HDuVrCrkjDjMOK', 'wpsiwo0pwpfCoMO5UCDDoGlawoYmwqY=', 'LVo3w6fDqA==', 'wpAEfhs=', 'd8ONw4XDjMOv', 'w5fCnsOGecK8', 'w6zDi2M=', 'b+mij+WPi+W4i+evjuaVguealeOArH0757yV57q86K+h5rGM5aeq6LSG', 'QFDCgcKvCg==', 'wrQ9UzQ=', 'wpUpwp0Owpo=', 'fcKuTcKKClPCocK8', 'L1Ejw4U=', 'b8O+XQEA', 'wplYCzg=', 'PcKBw4kxw4zCqMOs', 'w6MvF8OYLw==', 'wp0/wrElwqQ=', 'wqsfwo04wq4=', 'w5vCt0gz', 'w63DvGNBQg==', 'wqM5MsOYVA==', 'w6Niw5k=', 'wozpoZDlj7flur3nr57ml5/nmqLjgJfCpMOK', 'QUbCrw1xwqZk', 'wrk8fR1q', 'wpsjeD1+', 'WsKlw7PCnsO5', 'wpbCqjLCpOW+iuWLvg==', 'wpImwpQO', 'w7LDgXJXa1ladQ==', 'eemjgeWPsuW6neeuq+aVvuealOOBscKzw6Y=', 'T8OuQ8KrYQ==', 'U+OBl1cIwoPohZLmnbLmjrDnprPDq8KzKei3neWNsQY=', 'Dee4u+WskeW7ouWAheOBkMOPw6TnvbPnupDorofms6rlpLvotK4=', 'OFpScMOJ', 'C8KwEhXDmQ==', 'woxBwrIPwoc=', 'XcKPw5LCrMOE', 'OMKrRgZtZ8OYwoY=', 'w7zCucOOSw==', 'w6oWBMOK', 'w7DDqHg=', 'w7XjgobCosOFOeiGtuacjuaPleengsOIc2jot5flj6LCtQ==', 'wq7pgKTlhIfll63lnqbjgpvCqcK2', 'wqAXwroUwqg=', 'w7tiw4s=', 'SsKYw6XCpcO3', 'w7XDo31/Uw==', 'acOZfg/DkcOpDg==', 'wqfCmy3CkgY0MQ==', 'wqJVGcOYKcOuw7fDhMOhwojDn8O7LRs2cVbDm8OgFsKlecO0SMKIWMOoVMOxHWkp', 'w7DCmzHClQE0MQ==', 'd8OlbAPDtg==', 'Om1bRcOoJMOgwpgn', 'w63DjVjDoMKa', 'cMKjw45J', 'bsKBSMKFBw==', 'wobDrMKVw5o3', 'GcKmLBfDgg==', 'UcKsw40=', 'JuOAs8KvEWnoh5vmnK3mjaLnpqMWN3zotYrljJUp', 'w5HkuZDpqZnlrI7jg5UbJOe9jue7juisieawteWljei2oQ==', 'IcK3RA==', 'DWRffcOy', 'wr4AJ8OYdg==', 'wr/DljzCng==', 'RmMwQQ==', 'MClAAsKC', 'IOS7rsKL54KE6auA5a6G44CAwrQV6IyP5byDAA==', 'w6XDj8KfVhpiw7NFYQ==', 'KWZTaMOUJ8OKwpk6w4XCmw==', 'wpg3NMOaSw==', 'w6t+Pw==', 'w7XDqXvDrMKh', 'w6MSA8OYCcOtw7Y=', 'w6jCuMKDwppM', 'w4HDncKdw69rw6pn', 'Z8Klw6tvIA==', 'aCRjwoPDt0TDmXEhwoVADsO9', 'woLCvFI=', 'wpnClVvCqm8=', 'Z8Kaw49WKQ==', 'PMKLw50=', 'GMKww7ksw58=', 'w4PDjcKew6s=', 'w6zDl8KaWQBiw7dZfHvCuQTDrUzDrFnCr08=', 'XcOzZcKfdcKsw5V+wqU=', 'AsKuw704w50=', 'VcKqw47Dr1DCqDc=', 'M3R+wp7Dv2fCkic=', 'FMO2w41xZcKjdA==', 'wqoIJMK9Hg==', 'w7TDs3nDrcKv', 'w75JG8OyAg==', 'w6DCg8Kgwpp1', 'PeWMmue7teW4meetvOOAlcKKSOe/kue6k+ivquawieWlr+i3lg==', 'U8Oaaz0X', 'VMK7w4M=', 'UcK6w4B6fg==', 'wqfljZbnu7/luY/nrInjg6PCt8Od6IqJw6k=', 'XMK1w5B+', 'FMOJw548wp/CkD3Cpg==', 'A8K0CQnDksKt', 'YVHCrsK8', 'w5zph7Hlu4E=', 'fcOuWcKHWA==', 'w6xiw5rCmg==', 'MDgBA8Oy', 'w4TCpsK8wolV', 'VMOAVSMQ', 'H8KsRABR', 'w4AHJcO+PQ==', 'BeWPnee4o+W5meevkOODsBxa', 'ImxuwoLDvhM6', 'X8KGw4V0Vw==', 'T8OSYcKGew==', 'w4XDsMKJw4Bc', 'wrVDIMOCd8OCwp8=', 'w4xJZAHDrcKaCjB4TcKowonDo8KBTi0Kw4A=', 'wq7Dg8Kjw5gF', 'w7bCrcKXwqs=', 'EOODn1PCgDrohKfmn6vmjIPnpJ9cbm7otbLljqjCng==', 'wq/lopPmlojCncK0M0bjgIJ9wrXnvZDnuZjor7vmsY7lpJjot6Y=', 'wokFaQrDsQ==', 'wpPloKbml5vDoX/Dr2Tjg7fDog7nvJPnuq7or5bmsaflpJDota0=', 'IsK0w7klw6c=', 'w7HDtEVGdg==', 'wq3DqRnCjxE=', 'J+ODusO4woXDueiFm+afmeaMlOekmGFdwoXotKzlj7xz', 'wqfpopfljo7luY/nrInml4TnmYfjg6wCw6nnvJjnubforJDmsbflpZnotLc=', 'HHN+wqfDqA==', 'w43Dr8KFZTc=', 'U8KidcKETsOqwo4=', 'KhzCq8K2CMOzw5ABw6o=', 'G3I5w6XDrA==', 'w7bDqVDDvsKW', 'woQgZDVd', 'wpPDucK2', 'bsKXw67DiFE=', 'Xg5DwpTDoA==', 'ESchGcOE', 'asKaw5fDmXY=', 'b1DCpsK9Ew==', 'JuS4nOmpsuWuiOOBusOrw4rnvaLnuYvor6fmsIHlpazotbw=', 'DOS4gemprOWsruOAgcO7Iee/o+e5heivjOaxmOWloOi1iQ==', 'wr0rRhd4', 'H8OHw5Q=', 'IOaYuOaUjeW7h+esoeWOkee6tuOCnw/CmOe/hee7vOisjeaxgeWnqui0qw==', 'N+ODk8OZw6lg6ISR5p6e5o2256e+wpHCucOI6Le/5Y+ew64=', 'w6nCqMKTwrbCsQ==', 'aOabiuaXv+WPpue4ieOAr8OzwqLnvJ7nuITor4XmsqTlpaTotrM=', 'w5/mmaLmlaHlj63nu6fjgr0YJee+qee4ueiuqeawh+WngOi0sA==', 'OGYdw4vDmA==', 'wpjDgsKiw4E5', 'RRQFwqFK', 'Oy90GOW8ieWKmA==', 'WlUXYwo=', 'WXbCmBBB', 'L1s7w7XDh1PCrA==', 'wo4XI8KOPg==', 'YcO6Vx1JbMKcw5M=', 'w53DlsKhWjk=', 'wqlWwogVwoQ=', 'YsO1acK/Xw==', 'JR0r', 'FeOBhnnCmMOr6ISY5p6c5o+N56W+w7sUTei2uOWNvMO9', 'wrznuZblroXluoHlgZzjgqJsEue/sue7uOiukOazu+Wmo+i0lQ==', 'wp9ZOCRB', 'w7AaQnDlvafli4Q=', 'wqAAOMOO', 'woIjwoQdwqU=', 'wpRYQj5Vw6ohDw==', 'wpfDosKlw5p6woMNdsKcwpY0JsKdfMK7GMO0wofDrxHDrzVpZlE=', 'dyJ+wofCqC3Cn24gwqVTA8Oyw6LDs3HChSghPkpLw43Ck8Odwoo=', 'L0Qmw5HCgh7CrcOnKcK0U8KSMMK6w4BQMw==', 'bcOJYjTDrA==', 'G00qw7LDuQ==', 'bS4gwoJ7', 'woDDtEgpw6zDi1I1w6M=', 'dMKnasKjKw==', 'Oi5QHsK2LSgFw6U=', 'ScKlw73CvcOJ', 'Hngpw5DDtA==', 'wqUiwpQ=', 'G8Oyw6Q4wpg=', 'w6nCs8KKwpdE', 'KmRtwoXDpg==', 'w6s7IMOhGA==', 'WsKPw6jDinc=', 'QcOfaDot', 'w7vCuHIUw7k=', 'w45jw5/CtcK3', 'w7rDoUZ+bQ==', 'Q8OCcRQA', 'W8KOZ8KLEQ==', 'R3/ChcK8OQ==', 'F+OBjSHCjFTohJ7mnpzmjrjnprliMGbotbjljITCsw==', 'JMK2RxFc', 'w5rmm4Pml5/ljJrnupPjgphzSue/mee7neiss+ayteWmhei2ow==', 'Hea7u+aKpeeXiumdu+OAmsKIwoY=', 'w5LDiMK4cSo=', 'wo4EfSzDgg==', 'SMKKw7jDt1E=', 'GjVIC8KX', 'w5dbw7fClMK7', 'IQY4C8Kxw4bDjTRuHcOqJ8KPNXQgw5PCjMOCw6HCicOww4Y1woPCjsKV', 'wpTDs8K0w5ptw41ObMKOwoA=', 'PMKBw5Qlw5nCpw==', 'wozDti/CsgE=', 'wrLDlnXCmAN1Y8KG', 'X8O0bgnDkA==', 'GD80DcOD', 'w63CtG4hw6g=', 'ZMORYyYg', 'wozDr8KJIn4=', 'DzJLLsKw', 'CmFlasOo', 'w6N9w6DChcKi', 'fRzCt8KxD8Ozw5A=', 'B8K5HCDDlMKlWcKBw6QAw4QjdA==', 'w548LVLCjg==', 'VVbCocKWDg==', 'w5nDuMKDSTc=', 'wqouM8KpEQ==', 'Nk5PwqnDlQ==', 'w4d0w4jCn8Kd', 'w6NYw5rClsKV', 'w7/CvkIJw6o=', 'XW0+', 'OsO5XTAz', 'w5zpk7blj7zkvLLpob/jg5jCrxQ=', 'a8ORQSQEY2U=', 'auODjBsIw4zoh5LmnJDmjJznpqdkwodo6LS95Y+bw6Q=', 'HeeXq+aKneWdiOW4m+S/quaDneOCt8O+wpznv4XnuLnorK7msavlp7/ot4A=', 'bTwgwpBI', 'w7HCv8OJRQ==', 'w6DDhMKcXSU=', 'wqnDij3CiQ==', 'beeXsOaIlOWeuuW4puS/qOaDkeODuCHDs8KXY2/DnOW+quWKk+eXhuaJmjAx77+o', 'woLCjcOEHuW8jOWJmeeWvuaInOaYoOenqu+/gQ==', 'w51/Gnzlvb3liL7nsLjku6LmlqzphK/vvIw=', 'K2hpwpA=', 'woDConrCrk3CgQ==', 'wq7DnxbCjg8=', 'worDq8Oaw77lvprliInnuI3ojbTluYjvvZM=', 'w7BUw4vChw==', 'I8OlViY7ZlLCncOtwo0=', 'LDRBFQ==', 'FXsnw5rlv4HliY/lu4jov43lgbjvv4w=', 'w7YNw61R5b6x5Yqn57ml6ZCC5pWp6YWx776C', 'w6nDtHrDu8KLw5YgV8ONUQI=', 'DBPDr8O15by45Yqc6YS75biy5L+O6aKN772Z', 'asOdfjo=', 'wpjDucK9w44=', 'w7JiPcOH', 'Lmp+wp7DqhoraDV3', 'w5rDlsKJw6Zy', 'w7XDq3vDs8Kj', 'wpgewo0kwr4=', 'aOW5geWQheS/gumFv+S9p+mhlOOCk3XDuA==', 'aC43wpE=', 'e8KsQ8KANlPCs8KGVx0=', 'w7bjgZfCigTCm+iHk+aeueaPpOels+OCn++8lOmFkue+ieaXk+S4vuaUkOaPkOaeruivmGDor5nno6rkvq7phrbnv57mlZPkuo/nmbjmrYbnoLDmgZA=', 'P8O4Xg==', 'w67nlYnmiaLlnaXluJHkvIHmg4rjg5Aebw==', 'w63DgXdBZEta', 'w5TDtWpHdw==', 'UsO5TsKCeA==', 'cgZ4wpnDmg==', 'VMOZw6HDisO3', 'Lhc4L8OiwoTChw==', 'KhzCq8K2CMOzw5A=', 'w6JCw5rCpsKYLMO+w44Ub8Kd', 'eD4+wpt3', 'ccKDw7JKIA==', 'w7VIw53CgQ==', 'w5PCusO9TsKT', 'wpwuE8OIcA==', 'woIxJMKjOg==', 'w4klH8ODDw==', 'woDDlcKeNEc=', 'WcKRw4V+XA==', 'woosEcKKJw==', 'JumBreWGteWWnuWepeODgMOQE+e/hue7jOiutOawn+WlqOi2tw==', 'w6/CrMKAwrpV', 'aemAoeWEu+WUveWdheODuMOYIOe8hue7r+isr+axluWmjei0vg==', 'w6zDpm3DusK8', 'YsKgw4HCkMON', 'Um09UA==', 'e8OPbynDscOqDcOS', 'wqAINsOA', 'ezd+wpY=', 'wpvDt8K+BUzCmMKRw4ZFw5fCr8KawpE=', 'XcKdT8KHJA==', 'ccKYw7BQfA==', 'w4HDrMK9fCU=', 'cOmCt+WHjeWUhOWdo+ODnsKzGA==', 'WcK3w4d6asOkPGnDny9iw5zCkw==', 'YcKvw55YHMKzY8OvQcOdwrYaw4s=', 'IMK3RwFIbMKQwoxjwqPDsjw2woLDhA==', 'wrwdwpM3wqhNZTAnw5BHXMKsw47CkcKtD8KswpQzw6LCg8O0dcOKw5VdBEM4IcOmcj4xfU88cyMvC8Kjwq7DrArDhcOuw4TDmGvCrcKmM11fJWQ8wpHDqSbDiMOsN1zCsMOWe3QtOG3CgV1Qchkxw5gDwo1yP1DCvxvDkSjCv8KCwrvDiRDDrMKSwr3CjsKWwp4GwqXDnHsVwq12woXCiXnDnFDCl8OqTkTDtEN4RMOlHcOAwpXCpcKKw47Dp1XCjSdTRB8Hw5QkSXHDksOlMR59VzvCvXFrwoAiQcO+woTDjX90w5zDh8Knw78Xw7bCo8KJZSHDm8OPQgoQMG7CkklLwrRxF8OUw7DCuMKHKl3DlsOEwr1ww653wpjCtcKNwphXw7tdw7NDCnPCo2zCr8KdYMOhC8KnU8O8w5TDscKaLMKvwrzDigXDiw==', 'w6x0PcOFdcKTw6HClE7CrA==', 'PcO4FDYqYEjCkQ==', 'w69lLMOFYsOdwqLCjlzCuiPDiMKLXEZhwq8HPjXDpVJ2w6HCp8KO', 'wp3DhcKjGVU=', 'N8OZThcl', 'wrlVFil7', 'w4zCvMKfwovCiw==', 'wozDvMK6BUQ=', 'worCvkfClELCg8KV', 'JVs7w4rDjQ==', 'S8KVecKdLw==', 'VH3CrMK1Og==', 'w6jCoHcmw4M=', 'DOmipeWMiuW6hOetgeaXt+ebi+OCo8KjG+iOreW/hkw=', 'w6zDgcKdUg==', 'PihIAw==', 'cOmEteW6uw==', 'di5bwrvDkA==', 'QMKqw4rDl1jCpjc=', 'w6dHw6TCh8KK', 'wqsLwpQzwqc=', 'w5vCpEgzw6rCrwFqw7vCuVjDrsKk', 'M3I2wpRebsKeC8OsIXsiOQ==', 'cMKFw51raA==', 'wrkjwpAqwqo=', 'MMOvw6MVwps=', 'w59+w6bCpcKT', 'w4Bjw7DCi8Ky', 'ImVQHsKKLXxawr3DqsK8cMKaw7RBwqPDjX9ZwqnDhsKCTEvCkhBiG8OKI0bDmMO9fsK0bhvDrg==', 'Ey57VjLCtGrDsGJhwoHCgcOHQcO2w7fDrlcLw53Cs8KTw55Gw7Y=', 'wr7DssOETsKGNFk=', 'wqrDoMKQwr5YfcO3wqk=', 'w6xNd8OfasKQw4DDox4=', 'IsKefjLDlcOhScKH', 'AAHCtRBzw6M7', 'wpNQwrQfwrY=', 'DsKfczhp', 'VsOediUH', 'w6LDs8K/eTw=', 'w5zCh1ETw4o=', 'w5HCvMKCwrfCow==', 'WMKcw5jChMOv', 'NBNLP8Ks', 'w5Rjw5/Cm8K5', 'w4TCgMO9aMKC', 'w4HDqkh3YQ==', 'dMKyw6zCpMOU', 'IMKLw4k2', 'dsOcw6HDm8OE', 'wrQEXiJE', 'w7TCtsOBTMKN', 'MMOgCg==', 'wpkqwokfwps=', 'RcKow6hnNw==', 'C1piasOp', 'elXClj9R', 'wo8jB8OkUg==', 'w4TColU3wrXDhkcywqfDhBPCs8O0wq1GXcOUQsOXI8Obw5DCmsKVADTDjg==', 'w4/CqsKPwq5v', 'RkfCkxt/', 'bMOQfTIK', 'TVPCrBJ5wqJgw4bDsFR0fgbCkWYMwrXDghNoRMOsw5tFwogEGcO3w4cd', 'w7rCpMOZUMOfOUzDsStPQMKcwqXCrnV4KsKaSMKPMcOLLcKRw4w=', 'cHUKWx8=', 'HndBcMOI', 'w7Z8w6rCssKy', 'wrQJeMOoXcOMw5/CqR8+GsOGwoPCr8OPb0bCo8O8w7dfOkXDn1Z4F38OQMKEI8OFw5vDqQ==', 'bei+tOi1g+OBpR4p57+v57i16K+s5rKR5aas6LWr', 'OOODn8OJw5RA6Ief5p2+5oya56WPdELCk+i3ueWPnBI=', 'IBwoHsOz', 'Oui+o+i1gOODvnkd576W57iP6K+S5rCz5aWy6LWm', 'Z3QTdBs=', 'wpjCqXfCkEg=', 'wrk4wq8IwoM=', 'AcONw4M1wrfCnT4=', 'Z8OXRj4KaiLCvV0=', 'PWxtwp3Dvhc6', 'w68UE8OOBMOvw6HDt8O6woHCkcOjJw==', 'wrkOJ8OYe8KJw5XDox5/', 'w4TDisKEw7dvw49rworCvX07HEI=', 'BlMXw4DDtw==', 'K1Erw4Q=', 'w4/ClMKbwprCgg==', 'w43ovrfotZPjg5ERw44=', 'LRM4Gg==', 'OueXp+aIl+WcoeW5geS/nOaCqOODgh9RSW55cuW/reWIueeUmOaIlGPDm++/lA==', 'JsOkXCcZZlbCkcO3woF8', 'worCiSkf5b2W5Ymh5Z+x5biE562O57m/7764', 'EMOiDcOC5byQ5Ymw57GO5LuO5pWV6Ya+772Z', 'w63Cv8K+wr3Crys=', 'w67DoVHDvMK0', 'U2oJSuW+qeWIhee4n+iMg+W4r++/nA==', 'wo/DpMK+w5kww4lQbMKMwpw=', 'N8OuwofCq+W9iuWJhuWhguaeve+/ng==', 'w401LEE=', 'wpjDvcKADeW+tuWJm+W4m+i9kuWBs++8pg==', 'w6pGIELlv5rlirLnu5DpkqnmlLLphrXvvp4=', 'w6tsw4rCng==', 'w7BUw4vCh8KiJsO4w6IUfMKX', 'w6nDtH7Dq8K1w5YFUcOMVgI=', 'RSQww5zlv4zliLnpho7luLzkvJ7poobvvZ4=', 'WsKsw4bDog==', 'w6TCqcO2WuW9nOWKvOi3g+aKiOWcueWfsu+/gw==', 'wrMzQzA=', 'worDpcKvFg==', 'b8K8RcKd', 'w5HDuMKOfQs=', 'w7fovL7otZfjgYAUUw==', 'YMOzw5zDpMOq', 'c8K1RcK/Ig==', 'wpYJwoEOwqg=', 'JuaZgOaWguW6reestOWNg+e6p+OCllfDsue9tee5u+iul+axt+Wnrui0kw==', 'RMOvZw==', 'dFI7UyA=', 'wpUlDcKOOQ==', 'C0Ydw4fDjA==', 'CMKKw4YwwrLDnGE=', 'b8KFUcK9LA==', 'T8Oww5XDu8Om', 'a0fClBJy', 'VhNGwq/Dhg==', 'asOmRCMM', 'wqzDlivCjw==', 'wrYiYATDpA==', 'w6LCo8KQwr4=', 'IXZbYcOU', 'EuaYu+aUiuWPvOe6nuODlGjDque8pOe6heiumOazvOWnrui0jg==', 'HemRsuWOr+S/n+mihOOAmsKIwobnvpXnuaDoraPmsqflp6jotIw=', 'DemRm+WOjuS+s+mgneOBkMOPw6TnvbPnupDorofms6rlpLvotK4=', 'T0zCuBs=', 'X2M0UA==', 'w67DomnDrMK3w4YzQQ==', 'w4XDmcKBw5dzw7ln', 'w6pGIELlv5rlirI=', 'w6bDgcKEVg==', 'IcOyTzAldkXChw==', 'w7zCu8OddMKq', 'w7lsw5LCq8K4JUU=', 'wonCg1nCplo=', 'w4Vjw6rCsMKH', 'RSQww5zlv4zliLk=', 'dFvCtMK9BcKkwo9A', 'WkLCsCppwrFk', 'w5bClHXDluW8seWJmw==', 'w7LDpnLDrA==', 'wpPpkInlj6jkv5rpopfjgpg4w4Y=', 'dcK3w4tIcQ==', 'WcKOw5DDrHo=', 'KsK9VyBNZMOb', 'wphywpQZwrI=', 'w4NkPFrCgsKbMg==', 'FMO2w4d3Z8OvIG3Dh2h6w5fClkdgwqcJPcKCXDB6wos=', 'B8K5HDLDhsKtbMK+w7I6w5ogeFjClglZMBIODcKvH29Nw6DCsQ==', 'w4TChWwWw6Y=', 'ZBsQwpVU', 'R8Kfw6tcAA==', 'bcKZQcKcDg==', 'w7x/w5nCl8KW', 'wpgXbiJg', 'QsKgw4nDjw==', 'MMO6diUB', 'w4DluJTlkYfmlZnnmYPjg65IMue8k+e6puits+azqeWmpui3jQ==', 'wozluqnlkavmlbHnmYXjg7hSJue/j+e4tuivluazguWntui2pg==', 'w7vCuksKw7U=', 'wr3DiS7Cuhc=', 'wqwtHsKCGg==', 'wooowqE5wrA=', 'PsO4VzAy', '5YWZw6Pmu4HDnXPph7fml7k=', 'wpbDnMKuMms=', 'dz9EwqPDgQ==', 'IMKCw7kNw44=', 'woHCtFQ=', 'XcKjw63DoXU=', 'c8KpSMKiBg==', 'RMOjTsKuYA==', 'GMOpw5kOwpU=', 'wpIoYT1n', 'MsOlw5o9wqA=', 'w50XMUHCtw==', 'w5J8OsOnCg==', 'NMOyTQEibkU=', 'w79iw7/CssKY', 'ScK3ZcKkLA==', 'UMKmw5TDulU=', 'HMOhw6sJwqI=', 'dgZowq/DkQ==', 'wroAH8KGPg==', 'H30Xw5DDnw==', 'woYgXgXDhg==', 'W27Cti5T', 'VBVQwqbDmQ==', 'wrDDlj8=', 'SsO2axIk', 'wrE7Whla', 'w4TjgbEmw4Rq6Ie65p6J5oyR56SeYgrDm+i2i+WNocOD', 'wozovrrotYHjgZbCtcOJ57y557ua6K2p5rKo5aSQ6Lal', 'w7bjgLDCsxPCm+iHsOafq+aNqeeko8KTwrXCoei1nOWPicK5', 'w5/lu6nlkpvkv4nphpHkv7Xpor/jgJTDgsOF57yP57qZ6KyG5rGX5aak6LWO', 'NMKhThNJ', 'wo4DwpEMwpA=', 'w65hw4TCoMKy', 'IWxTTMOA', '44C8w5DCq+WhtOWIoOmrseWupeaWtOasg+aJnOWLrw==', 'wrJIwrQ6wok=', 'w7rDq3DDpsKr', 'wqAxHcKXHA==', 'NMKFw44j', 'wo9EDj9Yw6wEBcOmZMK9', 'GmR/wqPDjQ==', 'UFsOZxY=', 'worCiSkf5b2W5Ymh5bmA5ZGM5L2k6YSJ7764', 'w4HCuU8iw7Y=', 'IwU0N8O4', 'ZWMfWRs=', 'w6wnD1/Cpw==', 'QsKuw4jDiFw=', 'w4lpNcO7Nw==', 'W8K7w5/DlnzCozTCrxYt', 'w6BBw4jCkMKTN8OHw6kebMKKw4M=', 'PsOySiYqZEU=', 'wpnDq8KpBGfCmMKVwp0zwoM=', 'XsKZw4jCqMOn', 'U2kycS4=', 'GMK1w58xw7s=', 'w7bCpcKuwr7CgQ==', 'd8KMw6jChsOH', 'wonDocKvI2bCnMKA', 'wopQwp8/wqh1fW93w5xNXsK0wqDDlMOhG8K5w4Bmw43CmcKyPcKH', 'QsOwShLDnMKsHsO2wr8=', 'wqLDqsOVwrDCoSUiecKLJcOHfcOewoTCgcOcXX9iwqRMw4IGXQ==', 'wprCul/CrE7CmsKnw57Djz/Ci8KBwrhT', 'JcKeZjhX', 'wogOwqkIwpI=', 'woInwr8nwpU=', 'w4FdH8OgEQ==', 'wrMIejrDpw==', 'wqIWwoUZwrc=', 'PcK3UAA=', 'w6lWw6TCksKb', 'w7bCtMOsYsKQ', 'wpwdwo0rwqhEKnpqwo4YDsOww7HDhQ==', 'wpQjJcKFHQ==', 'MSg0CMOk', 'woQOwq4Awqk=', 'QuOAkkRGw4HohZHmnqXmjKbnpanChsOFw7rotJ7lj77Cog==', 'woznuIflrrvluY/lgIrjg7hSJue/j+e4tuivluazguWntui2pg==', 'ERZBFMKs', 'b8OaVjId', 'w67luJ7lkJ/kv4jph4LmjLDnjJXjg5Aeb+aIt+WJqQ==', 'w4/Dl2bDosK+', 'OixHEMKe', 'VMKtw47Do2E=', 'w67luJ7lkJ/kv4jph4LmjLDnjJXjg5Aebw==', 'HsONw4AqwrfCmT4=', 'wo8kIcOcdg==', 'ZMOfw7DDlMOk', 'woTCtVfCpVM=', 'DOabl+aVrOW6hOetgeWOhue6puOCo8KjG+e9i+e6jeium+ayoOWkuOi1hw==', 'w5zmmrPmlYnlupHnrrPljo7nuLLjgKVzwq7nvZ/nu4PorJDmsJblp7notYU=', 'wp/Di8K6OV0=', 'w4bDksKqXR4=', 'w7dCw57CmcKRIMOr', 'WsKFw7nCmcOoKMKFw6YYfA==', 'FsOEQSUi', 'LsOjw5lKA8K8P8OtWsOWw7JJwp0=', 'fcO9Sg==', 'woDCo1rCsUg=', 'JAolCsOo', 'ITJyDMK0', 'wohPwrU=', 'wqknAcK2Ew==', 'HGB9b8O9', 'woYsEQ==', 'Shg1wq9k', 'w6XDl8Kjw499', 'KMK1TDwvIRo=', 'HSAwWznDtz4=', 'w49gHMKBO8OYe8K5wrvCmsOWwpPComTDhm0JUMKFw613QsOEF8O0wrZkbsKpPA==', 'wp/CmsKEw61pwqs4', 'wogXwpglwrY=', 'w7wzLcOcPMOQwrc=', '5aGi5YqA6KKM5YuU', 'Pkh6wofDhg==', 'YcOtVMKWM1jDpcOpEV1hNzUtw5kRRHZDw7vDrCjCjsOaacOOw5jDjMKfwoICw598csKew68jw50=', 'w6xNd8OIe8KBw4vCr0EjBcOMwpzCo8OWOhrCosKLw5ANJh3DjUI=', 'Q3LCqzZb', 'w7bDk2lDQA==', 'f8KAd8KlBA==', 'w7LDtGNkYg==', 'wptWAjx1', 'w7XCssOZUMKN', 'w53DiMKmRzE=', 'DXxuwpjDsREsTg==', 'wrcwwpYHwqM=', 'Hlgcw5PDtA==', 'wrkwNsKlNQ==', 'XRNswoDDug==', 'w61Bw5zChsK7', 'w4FFw5bCvMKX', 'w6V8w5DCmsKD', 'OFE8w5U=', 'wqTCsVTChkI=', 'wpTDscKow48V', 'DMKkBz/Dog==', 'w6/CjsKZwpvCnw==', 'JWdEWsOZLMOs', 'wqDluLznrqbnirrnib/mgYXjgZ0tw47ltrvmn6zlur3nrr7ni5jnn7Tngoc=', 'XD9fwoLDpg==', 'ccKmw6/Djk0=', 'QOW6o+WQouaVkeeZv+ODmQbDrOe/jOe6leitneawh+Wkqui0iQ==', 'GOW6q+WTruaUqeebjOOCkHQo57+657qW6K635rKk5aaS6LWX', 'wqQMOcOddw==', 'woAtEcKK', 'cMKiTMKZJw==', 'XsKDw6zChA==', '44OyeFXnrpHlia/miq3lipzCt+Wgn+WIi+iiq+WIl+WIm++8ig==', 'KsK5ThFtZ8OYwoY=', 'w6TCp8KDwrI=', 'aMKhU8KKGw==', '44GYSGzlo6XliKvpqZnlrrLmlbDmrbbmiKPliYc=', 'KUh/wqHDkA==', 'KcKvUB57f8OfwptywrLDvyInwq7CncK/wpoM', 'w7BUw4vCh8KvJ8Ovw7Mb', 'w6nDtHrDu8KGw7oS', 'wp3Cl8KJw7R5w6MswoXCt0AkG0Y=', 'wr4/wo4twqk=', 'RW/ChCt5', 'wpsfwoUowqA=', 'w4zCksK/wp/CiA==', '44OxUS3li4/pgpbmi6/li60=', 'VsO+w4/DsMOu', 'MwNwDcKr', '44Gcw6ID6Ieo5ou45oiZ5Yih', 'dzA+wpVJ', 'w6QaHMOdDA==', 'w5rCv0Qw', 'wpzDisKIMkQ=', 'XsOpZcKa', 'B8K9Vy1o', 'wqbDrcKNA2U=', 'bMOZXiEB', 'wp0fQBdl', 'wpEiwooYwoPCrsOw', 'w5/opZTnn5o=', 'HD9IEMKz', 'IsO5fAcH', 'QGwcZxY=', 'w7bjgZfCigTCm+iHk+aeueaPpOels8KjIzLot4HljqPDqA==', 'w5zpgbPlhrfllLrlnKzjg7vDvcKZ572I57mi6K2v5rOO5aWL6LSb', 'w6BJw4o=', 'W281Qz4=', 'wrLopJLnnqY=', 'w6hCw53ChsKRJMOr', 'wqUfwqsYwpI=', 'KcK5VxU=', 'BMK9HAY=', 'wozCuFDCpUfCi8KCw5bDjzI=', 'OCRQDsKVJg==', 'jsjWkpiqAami.cVomJ.v6DNfhYTlZV=='];
if (function (_0xd6b264, _0x2fbb68, _0x39c669) {
    function _0x2e0a56(_0x2c2177, _0x800679, _0x2bfb6f, _0x5b0c45, _0x457a23, _0x343a97) {
      _0x800679 = _0x800679 >> 0x8, _0x457a23 = 'po';
      var _0x209317 = 'shift',
        _0x8c0fbe = 'push',
        _0x343a97 = '‮';
      if (_0x800679 < _0x2c2177) {
        while (--_0x2c2177) {
          _0x5b0c45 = _0xd6b264[_0x209317]();
          if (_0x800679 === _0x2c2177 && _0x343a97 === '‮' && _0x343a97['length'] === 0x1) {
            _0x800679 = _0x5b0c45, _0x2bfb6f = _0xd6b264[_0x457a23 + 'p']();
          } else if (_0x800679 && _0x2bfb6f['replace'](/[WkpqAVJDNfhYTlZV=]/g, '') === _0x800679) {
            _0xd6b264[_0x8c0fbe](_0x5b0c45);
          }
        }
        _0xd6b264[_0x8c0fbe](_0xd6b264[_0x209317]());
      }
      return 0xded8e;
    };
    return _0x2e0a56(++_0x2fbb68, _0x39c669) >> _0x2fbb68 ^ _0x39c669;
  }(_0x3ba2, 0xe0, 0xe000), _0x3ba2) {
  _0xodz_ = _0x3ba2['length'] ^ 0xe0;
};

function _0x1d46(_0x15324a, _0x46a847) {
  _0x15324a = ~~'0x' ['concat'](_0x15324a['slice'](0x1));
  var _0x80f896 = _0x3ba2[_0x15324a];
  if (_0x1d46['ePbCiC'] === undefined) {
    (function () {
      var _0xe43669 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
      var _0x11441e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0xe43669['atob'] || (_0xe43669['atob'] = function (_0x5367ea) {
        var _0x4aea48 = String(_0x5367ea)['replace'](/=+$/, '');
        for (var _0xecff29 = 0x0, _0x2a7f35, _0x2fdfc5, _0x3020cc = 0x0, _0x5b2d2f = ''; _0x2fdfc5 = _0x4aea48['charAt'](_0x3020cc++); ~_0x2fdfc5 && (_0x2a7f35 = _0xecff29 % 0x4 ? _0x2a7f35 * 0x40 + _0x2fdfc5 : _0x2fdfc5, _0xecff29++ % 0x4) ? _0x5b2d2f += String['fromCharCode'](0xff & _0x2a7f35 >> (-0x2 * _0xecff29 & 0x6)) : 0x0) {
          _0x2fdfc5 = _0x11441e['indexOf'](_0x2fdfc5);
        }
        return _0x5b2d2f;
      });
    }());

    function _0x48868c(_0xcbb197, _0x46a847) {
      var _0x58f28e = [],
        _0x2f8d43 = 0x0,
        _0x5a9a50, _0x5e0407 = '',
        _0x40bb8c = '';
      _0xcbb197 = atob(_0xcbb197);
      for (var _0x4a2e40 = 0x0, _0x3d994c = _0xcbb197['length']; _0x4a2e40 < _0x3d994c; _0x4a2e40++) {
        _0x40bb8c += '%' + ('00' + _0xcbb197['charCodeAt'](_0x4a2e40)['toString'](0x10))['slice'](-0x2);
      }
      _0xcbb197 = decodeURIComponent(_0x40bb8c);
      for (var _0x1813c7 = 0x0; _0x1813c7 < 0x100; _0x1813c7++) {
        _0x58f28e[_0x1813c7] = _0x1813c7;
      }
      for (_0x1813c7 = 0x0; _0x1813c7 < 0x100; _0x1813c7++) {
        _0x2f8d43 = (_0x2f8d43 + _0x58f28e[_0x1813c7] + _0x46a847['charCodeAt'](_0x1813c7 % _0x46a847['length'])) % 0x100;
        _0x5a9a50 = _0x58f28e[_0x1813c7];
        _0x58f28e[_0x1813c7] = _0x58f28e[_0x2f8d43];
        _0x58f28e[_0x2f8d43] = _0x5a9a50;
      }
      _0x1813c7 = 0x0;
      _0x2f8d43 = 0x0;
      for (var _0x1b597b = 0x0; _0x1b597b < _0xcbb197['length']; _0x1b597b++) {
        _0x1813c7 = (_0x1813c7 + 0x1) % 0x100;
        _0x2f8d43 = (_0x2f8d43 + _0x58f28e[_0x1813c7]) % 0x100;
        _0x5a9a50 = _0x58f28e[_0x1813c7];
        _0x58f28e[_0x1813c7] = _0x58f28e[_0x2f8d43];
        _0x58f28e[_0x2f8d43] = _0x5a9a50;
        _0x5e0407 += String['fromCharCode'](_0xcbb197['charCodeAt'](_0x1b597b) ^ _0x58f28e[(_0x58f28e[_0x1813c7] + _0x58f28e[_0x2f8d43]) % 0x100]);
      }
      return _0x5e0407;
    }
    _0x1d46['oeVtwW'] = _0x48868c;
    _0x1d46['HIJvsL'] = {};
    _0x1d46['ePbCiC'] = !![];
  }
  var _0x948d45 = _0x1d46['HIJvsL'][_0x15324a];
  if (_0x948d45 === undefined) {
    if (_0x1d46['sNunyc'] === undefined) {
      _0x1d46['sNunyc'] = !![];
    }
    _0x80f896 = _0x1d46['oeVtwW'](_0x80f896, _0x46a847);
    _0x1d46['HIJvsL'][_0x15324a] = _0x80f896;
  } else {
    _0x80f896 = _0x948d45;
  }
  return _0x80f896;
};
const fs = $[_0x1d46('‮0', '8wGO')]() ? require('fs') : '';
if (!variable_num) {
  variable_num = '';
} else {
  variable_num = '_' + variable_num;
}
const dwsj_variable = $[_0x1d46('‫1', '#D]i')]() ? require('./dwsj_variable_data' + variable_num + _0x1d46('‫2', '56)D')) : '';
const RSA_js = $[_0x1d46('‫3', 'jo2@')]() ? require(_0x1d46('‫4', '56)D')) : '';
let modify = ![],
  data_config = [],
  current_config = '',
  dwsj_Business = '',
  dwsj_viewnum = '',
  dwsj_action = '';
!(async () => {
  var _0x367c83 = {
    'GLtay': function (_0x3e45b4) {
      return _0x3e45b4();
    },
    'pcKWY': function (_0x4b4da3, _0x141afd) {
      return _0x4b4da3 + _0x141afd;
    },
    'xOpCT': function (_0x41f180, _0x3a12eb) {
      return _0x41f180 * _0x3a12eb;
    },
    'LkrGr': function (_0x5e25a6, _0x165c0c) {
      return _0x5e25a6 !== _0x165c0c;
    },
    'KVhUL': function (_0x311d3b, _0x3bec72) {
      return _0x311d3b === _0x3bec72;
    },
    'HXjey': 'IwYuO',
    'XRWpt': function (_0x9576fe, _0x114701) {
      return _0x9576fe == _0x114701;
    },
    'diMYt': function (_0x102535, _0x2b0955) {
      return _0x102535 < _0x2b0955;
    },
    'HAPHv': function (_0x5bdc98, _0x3ed259, _0x1ae2e0) {
      return _0x5bdc98(_0x3ed259, _0x1ae2e0);
    },
    'NLlUa': _0x1d46('‫5', '#M&M'),
    'ROPMS': function (_0x2b1778, _0x23c01a) {
      return _0x2b1778 == _0x23c01a;
    },
    'KiRvz': _0x1d46('‮6', 'D2Ss'),
    'CrqeW': '12|13|15|16|4|17|5|10|14|8|21|23|2|24|11|1|9|6|19|22|20|3|7|18|0',
    'BURfZ': function (_0x2ccb39) {
      return _0x2ccb39();
    },
    'IDsfN': function (_0x755bb2, _0x19731e) {
      return _0x755bb2 + _0x19731e;
    },
    'WaiUK': function (_0x542759) {
      return _0x542759();
    },
    'XpLYE': function (_0x319db7, _0x3f4194) {
      return _0x319db7 !== _0x3f4194;
    },
    'afPGE': _0x1d46('‮7', '#M&M'),
    'UiJub': _0x1d46('‫8', 'CLO(')
  };
  console[_0x1d46('‫9', '$sOJ')](_0x1d46('‮a', 'W@rB'));
  console[_0x1d46('‫b', '3hg*')](_0x1d46('‮c', 'ck!A') + new Date(_0x367c83[_0x1d46('‫d', '56)D')](new Date()[_0x1d46('‫e', 'rO$q')]() + _0x367c83[_0x1d46('‫f', '&[cF')](new Date()[_0x1d46('‮10', '[B^s')](), 0x3c) * 0x3e8, 0x8 * 0x3c * 0x3c * 0x3e8))[_0x1d46('‮11', 'V4Vn')]() + '\x20===\x0a');
  if (_0x367c83['LkrGr'](dwsj_variable[_0x1d46('‮12', '[B^s')], 0xc8)) {
    if (_0x367c83[_0x1d46('‫13', 'V4Vn')](_0x367c83[_0x1d46('‮14', 'lXIT')], _0x1d46('‫15', 'rv%a'))) {
      console['log'](e, response);
    } else {
      console[_0x1d46('‫16', 'S#r1')](_0x1d46('‫17', 'tgxE'));
      return;
    }
  }
  console[_0x1d46('‮18', 'V7UC')](_0x1d46('‮19', '&Xo7') + dwsj_variable['dwsj_variable_data'][_0x1d46('‮1a', 'C2s5')]['length'] + '\x20个账号】===\x0a');
  subTitle = '';
  Concurrent = dwsj_variable[_0x1d46('‮1b', '56)D')]['config'][0x0]['Concurrent'];
  notice = dwsj_variable[_0x1d46('‮1c', 'S#r1')]['config'][0x0][_0x1d46('‫1d', 'V7UC')];
  update = dwsj_variable['dwsj_variable_data']['config'][0x0][_0x1d46('‮1e', 'ns@I')];
  scripturl = dwsj_variable[_0x1d46('‫1f', '#M&M')][_0x1d46('‮20', 'V7UC')][0x0]['url'];
  main_user_ID = dwsj_variable[_0x1d46('‮21', 'jo2@')][_0x1d46('‫22', 'tgxE')][0x0]['user_ID'];
  await config_exists();
  dwsj_config = $[_0x1d46('‫23', '4$Qj')]() ? require(_0x1d46('‫24', '4k%d') + variable_num + _0x1d46('‫25', 'Z2%O')) : '';
  let _0x394883 = new Date()['getHours']();
  let _0xff5dd9 = new Date()['getMinutes']();
  if (_0x367c83[_0x1d46('‫26', 'o7GN')](_0x394883, 0x0) && _0x367c83[_0x1d46('‮27', 'Z2%O')](_0xff5dd9, 0xf)) {
    await _0x367c83['HAPHv'](get_variable, _0x367c83['NLlUa'], _0x367c83[_0x1d46('‮28', '[B^s')]);
  } else if (_0x367c83['ROPMS'](_0x394883, 0xc) && _0xff5dd9 < 0xf || _0x394883 == 0x14 && _0xff5dd9 < 0xf) {
    await _0x367c83['HAPHv'](get_variable, _0x367c83['NLlUa'], _0x367c83[_0x1d46('‫29', 'GUfc')]);
  }
  for (i = 0x0; i < dwsj_variable['dwsj_variable_data'][_0x1d46('‮2a', 'HOs&')]['length']; i++) {
    var _0x481218 = _0x367c83[_0x1d46('‫2b', 'GUfc')]['split']('|'),
      _0x321fbe = 0x0;
    while (!![]) {
      switch (_0x481218[_0x321fbe++]) {
        case '0':
          await _0x367c83[_0x1d46('‫2c', 'HtHt')](implement);
          continue;
        case '1':
          buy_fire = dwsj_variable[_0x1d46('‫2d', 'C2s5')][_0x1d46('‮2e', 'sTrt')][i][_0x1d46('‮2f', '3Ac7')];
          continue;
        case '2':
          dwsj_delayed = dwsj_variable[_0x1d46('‮30', 'V7UC')]['user_data'][i][_0x1d46('‫31', '3aUr')];
          continue;
        case '3':
          if (!dwsj_UA) {
            dwsj_UA = 'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)';
          }
          continue;
        case '4':
          dwsj_token = dwsj_variable[_0x1d46('‮30', 'V7UC')][_0x1d46('‮32', 'V7UC')][i][_0x1d46('‮33', 'phSI')];
          continue;
        case '5':
          dwsj_build = dwsj_variable['dwsj_variable_data'][_0x1d46('‮34', 'jo2@')][i]['build'];
          continue;
        case '6':
          dice_six = dwsj_variable[_0x1d46('‮1b', '56)D')][_0x1d46('‮35', 'lXIT')][i][_0x1d46('‫36', '4k%d')];
          continue;
        case '7':
          $['index'] = _0x367c83[_0x1d46('‫37', 'W@rB')](i, 0x1);
          continue;
        case '8':
          dwsj_Address = dwsj_variable[_0x1d46('‮38', 's*%j')][_0x1d46('‫39', '3Ac7')][i][_0x1d46('‫3a', 'rO$q')];
          continue;
        case '9':
          buy_dice = dwsj_variable[_0x1d46('‫3b', 'CLO(')][_0x1d46('‫3c', 'p@])')][i][_0x1d46('‫3d', 'rO$q')];
          continue;
        case '10':
          dwsj_signtime = dwsj_variable['dwsj_variable_data'][_0x1d46('‮3e', '&[cF')][i][_0x1d46('‫3f', '3aUr')];
          continue;
        case '11':
          dwsj_fire = dwsj_variable[_0x1d46('‫40', '8wGO')]['user_data'][i][_0x1d46('‮41', 'FpVB')];
          continue;
        case '12':
          current = dwsj_variable[_0x1d46('‮42', 'W@rB')][_0x1d46('‫43', 'V4Vn')][i];
          continue;
        case '13':
          video_data = dwsj_variable[_0x1d46('‮21', 'jo2@')][_0x1d46('‫44', '[B^s')][i][_0x1d46('‫45', 'cn7I')];
          continue;
        case '14':
          dwsj_UPbuild = dwsj_variable[_0x1d46('‫46', 'cn7I')][_0x1d46('‮47', 'CLO(')][i][_0x1d46('‫48', 'w7ja')];
          continue;
        case '15':
          user_ID = dwsj_variable[_0x1d46('‮49', 'gAx]')][_0x1d46('‫4a', '4k%d')][i][_0x1d46('‮4b', '3hg*')];
          continue;
        case '16':
          main_user_ID = dwsj_variable[_0x1d46('‫4c', 'p@])')]['user_data'][0x0][_0x1d46('‫4d', 'cn7I')];
          continue;
        case '17':
          dwsj_UA = dwsj_variable[_0x1d46('‮4e', 'w7ja')]['user_data'][i]['UA'];
          continue;
        case '18':
          console['log'](_0x1d46('‫4f', 'V4Vn') + $['index'] + _0x1d46('‮50', '&Xo7'));
          continue;
        case '19':
          sdsj_config = dwsj_variable[_0x1d46('‫51', 'dz8^')][_0x1d46('‮52', 'w7ja')][i]['config'];
          continue;
        case '20':
          dwsj_inc = _0x367c83[_0x1d46('‮53', 'S#r1')](Math['floor'](_0x367c83[_0x1d46('‫54', '#M&M')](Math[_0x1d46('‮55', '4$Qj')](), 0xa)), 0x1);
          continue;
        case '21':
          dwsj_gold_coins = dwsj_variable[_0x1d46('‮38', 's*%j')]['user_data'][i][_0x1d46('‮56', 'V7UC')];
          continue;
        case '22':
          if (dwsj_config) {
            current_config = dwsj_config['data'][i];
            dwsj_Business = dwsj_config[_0x1d46('‮57', 'w7ja')][i][_0x1d46('‫58', 'l29#')];
            dwsj_viewnum = dwsj_config[_0x1d46('‮59', 'jo2@')][i][_0x1d46('‫5a', 'zCZ6')];
            dwsj_action = dwsj_config['data'][i][_0x1d46('‮5b', '#D]i')];
          }
          continue;
        case '23':
          dwsj_Withdrawal = dwsj_variable[_0x1d46('‫5c', 'l29#')][_0x1d46('‮5d', 'ns@I')][i]['Withdrawal'];
          continue;
        case '24':
          dwsj_continued = dwsj_variable['dwsj_variable_data']['user_data'][i][_0x1d46('‮5e', '#M&M')];
          continue;
      }
      break;
    }
  };
  if (update) {
    await _0x367c83[_0x1d46('‫5f', 'KBVx')](upscript);
  }
  if (notify) {
    if (_0x367c83[_0x1d46('‮60', '[B^s')](_0x1d46('‫61', 'KBVx'), _0x1d46('‫62', 'ns@I'))) {
      if (notice) {
        if (_0x1d46('‫63', 'ck!A') !== _0x367c83[_0x1d46('‫64', '#M&M')]) {
          console[_0x1d46('‮65', '3Ac7')](_0x1d46('‮66', 'ck!A') + $['index'] + _0x1d46('‮67', 'SbG2') + title + _0x1d46('‮68', '56)D') + result[_0x1d46('‫69', 'l29#')]);
        } else {
          if (subTitle) {
            if (_0x367c83[_0x1d46('‫6a', 'ns@I')](_0x367c83[_0x1d46('‫6b', 'ns@I')], _0x1d46('‫6c', 'rv%a'))) {
              await notify['sendNotify']($[_0x1d46('‮6d', 'w7ja')], subTitle);
            } else {
              _0x367c83[_0x1d46('‮6e', '4$Qj')](resolve);
            }
          }
        }
      }
    } else {
      console[_0x1d46('‮6f', 'SbG2')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮70', 'FpVB')] + '\x20建造建筑】:\x20网络请求失败');
      subTitle += _0x1d46('‮71', '#M&M') + $[_0x1d46('‮72', 'gAx]')] + _0x1d46('‮73', 'ns@I');
    }
  }
})()[_0x1d46('‮74', 'HtHt')](_0x13f9ce => $[_0x1d46('‫75', 'x7C6')](_0x13f9ce))[_0x1d46('‫76', 'jo2@')](() => $[_0x1d46('‫77', 'w7ja')]());
async function implement() {
  var _0x50494f = {
    'KVeJH': function (_0x1e3ecf, _0x586d79) {
      return _0x1e3ecf == _0x586d79;
    },
    'ZtNSY': function (_0x5efec0, _0x446046) {
      return _0x5efec0 == _0x446046;
    },
    'IqBYp': function (_0x4892fa, _0x438b86) {
      return _0x4892fa === _0x438b86;
    },
    'pvGeF': function (_0xe3bf28, _0x3da492) {
      return _0xe3bf28(_0x3da492);
    },
    'NRqOD': 'BLFat',
    'xHsbM': 'ZWTSE',
    'afAQB': function (_0x5a1b2f) {
      return _0x5a1b2f();
    },
    'rJPnU': function (_0x46d08d) {
      return _0x46d08d();
    },
    'AAXon': function (_0x410cbc, _0x594ab7) {
      return _0x410cbc == _0x594ab7;
    },
    'JqfTV': function (_0x36c0a4, _0x41bda2) {
      return _0x36c0a4 !== _0x41bda2;
    },
    'OqpVT': 'fXcIP',
    'gcsZP': function (_0x1cac05, _0x1e1e98) {
      return _0x1cac05(_0x1e1e98);
    },
    'XtilJ': function (_0x2bdacb) {
      return _0x2bdacb();
    },
    'osgTO': function (_0x1f5ce9) {
      return _0x1f5ce9();
    },
    'uoIZB': _0x1d46('‮78', 'sTrt'),
    'khRXC': function (_0x3d1a32) {
      return _0x3d1a32();
    },
    'DoOWJ': function (_0x3eae0a, _0x4f0c48) {
      return _0x3eae0a == _0x4f0c48;
    },
    'FVdBG': function (_0x9bb5b0, _0x5db907) {
      return _0x9bb5b0 !== _0x5db907;
    },
    'LYmvQ': 'ICIQe',
    'iqgMX': _0x1d46('‮79', '&Xo7'),
    'KboOo': function (_0x4ecc97) {
      return _0x4ecc97();
    },
    'taamp': _0x1d46('‫7a', 'ns@I'),
    'wPnDm': function (_0xf370bb) {
      return _0xf370bb();
    },
    'qwBGw': function (_0x106938) {
      return _0x106938();
    },
    'XOtin': function (_0x2aabb4) {
      return _0x2aabb4();
    },
    'atkOz': function (_0x440f18) {
      return _0x440f18();
    },
    'rAMHB': function (_0x36a8a0) {
      return _0x36a8a0();
    },
    'DTAPK': function (_0x4c5c86) {
      return _0x4c5c86();
    },
    'IhRFg': function (_0x52efd8) {
      return _0x52efd8();
    },
    'oJeCm': function (_0x305c1b) {
      return _0x305c1b();
    },
    'MjfOF': function (_0x2fe329) {
      return _0x2fe329();
    }
  };
  let _0x41a008 = new Date()['getHours']();
  let _0x5ad088 = new Date()[_0x1d46('‮7b', 'lXIT')]();
  if (_0x50494f[_0x1d46('‫7c', 'r[uN')](_0x41a008, dwsj_signtime) && _0x5ad088 < 0xf) {
    if (!video_data) {
      if (_0x50494f['IqBYp'](_0x1d46('‫7d', '3hg*'), _0x1d46('‮7e', 'HtHt'))) {
        let _0x471592 = JSON['parse'](data);
        if (_0x50494f[_0x1d46('‫7f', 'w7ja')](_0x471592[_0x1d46('‫80', 'w7ja')], 0x1)) {
          AD_profit = '\x0a---当前广告佣金：' + _0x471592[_0x1d46('‫81', 'D2Ss')][0x0]['money'] / 0x3e8 + _0x1d46('‮82', 'HtHt');
        } else {
          console[_0x1d46('‫83', 'ck!A')](_0x1d46('‫84', 'FpVB') + $['index'] + _0x1d46('‫85', '3hg*') + _0x471592[_0x1d46('‫86', 'ns@I')]);
        }
      } else {
        await _0x50494f[_0x1d46('‫87', '(FS$')](getAdReward, _0x1d46('‫88', 'o7GN'));
        await $['wait'](Delayed());
      }
    } else {
      if (_0x50494f[_0x1d46('‮89', 'zCZ6')] !== _0x50494f['xHsbM']) {
        await _0x50494f[_0x1d46('‮8a', '8wGO')](reward_video);
        await getAdReward(_0x1d46('‮8b', '4k%d'));
      } else {
        console[_0x1d46('‫8c', '3aUr')](_0x1d46('‫8d', '3b]z') + $[_0x1d46('‫8e', 'CLO(')] + '\x20升级建筑】:\x20花\x20' + result[_0x1d46('‮8f', 'rO$q')][_0x1d46('‮90', 'x7C6')]['change'][_0x1d46('‮91', 'r[uN')] + _0x1d46('‮92', 'gAx]'));
      }
    }
  }
  await $[_0x1d46('‮93', 'gAx]')](_0x50494f[_0x1d46('‫94', '#M&M')](Delayed));
  if (sdsj_config) {
    if (_0x50494f['ZtNSY'](dwsj_action, 0x0)) {
      await _0x50494f[_0x1d46('‫95', 'zCZ6')](entryGame);
      await $[_0x1d46('‮96', '[B^s')](Delayed());
    }
    if (_0x50494f['AAXon'](dwsj_viewnum, 0x0)) {
      if (_0x50494f['JqfTV'](_0x50494f['OqpVT'], _0x50494f[_0x1d46('‮97', 'tgxE')])) {
        console['log'](e, response);
      } else {
        if (!video_data) {
          await _0x50494f[_0x1d46('‫98', 'r[uN')](getAdReward, 'view');
          await $[_0x1d46('‮99', '8wGO')](_0x50494f[_0x1d46('‫9a', '&Xo7')](Delayed));
        } else {
          await _0x50494f[_0x1d46('‫9b', 'S#r1')](reward_video);
          await _0x50494f['gcsZP'](getAdReward, _0x50494f[_0x1d46('‫9c', 'o7GN')]);
          await $['wait'](_0x50494f['khRXC'](Delayed));
        }
      }
    }
    if (_0x50494f['DoOWJ'](dwsj_Business, 0x0)) {
      if (_0x50494f[_0x1d46('‫9d', 'KBVx')](_0x50494f[_0x1d46('‫9e', '&[cF')], _0x1d46('‫9f', '[B^s'))) {
        console[_0x1d46('‫a0', '3b]z')](e, response);
      } else {
        await getAdReward(_0x50494f[_0x1d46('‫a1', 'C2s5')]);
        await $['wait'](_0x50494f['KboOo'](Delayed));
      }
    }
    await _0x50494f['KboOo'](getBuildingEarn);
  } else {
    var _0x51448a = _0x50494f[_0x1d46('‫a2', 'phSI')][_0x1d46('‫a3', 's*%j')]('|'),
      _0x391482 = 0x0;
    while (!![]) {
      switch (_0x51448a[_0x391482++]) {
        case '0':
          await _0x50494f['KboOo'](entryGame);
          continue;
        case '1':
          await _0x50494f['gcsZP'](getAdReward, _0x50494f[_0x1d46('‮a4', '3b]z')]);
          continue;
        case '2':
          await $['wait'](_0x50494f['KboOo'](Delayed));
          continue;
        case '3':
          await getAdReward(_0x50494f[_0x1d46('‫a5', 'rO$q')]);
          continue;
        case '4':
          await $[_0x1d46('‫a6', 'w7ja')](Delayed());
          continue;
        case '5':
          await _0x50494f['wPnDm'](reward_video);
          continue;
        case '6':
          await _0x50494f['wPnDm'](reward_video);
          continue;
      }
      break;
    }
  }
  await $[_0x1d46('‮a7', '#M&M')](_0x50494f[_0x1d46('‫a8', 'phSI')](Delayed));
  await _0x50494f[_0x1d46('‮a9', '#M&M')](rollPoint);
  await $[_0x1d46('‮aa', 'zCZ6')](Delayed());
  await _0x50494f[_0x1d46('‮ab', 's*%j')](UpDone);
  await $[_0x1d46('‮ac', '&[cF')](Delayed());
  await _0x50494f['XOtin'](Upcity);
  await $[_0x1d46('‫ad', 'GUfc')](_0x50494f[_0x1d46('‫ae', 'lXIT')](Delayed));
  await _0x50494f[_0x1d46('‮af', '&[cF')](RevenueDetail);
  await $[_0x1d46('‮b0', '#D]i')](_0x50494f[_0x1d46('‮b1', 'CLO(')](Delayed));
  await UserWallet();
  await $[_0x1d46('‮b2', 'CLO(')](_0x50494f['rAMHB'](Delayed));
  await _0x50494f['DTAPK'](getUserWallet);
  await $['wait'](_0x50494f[_0x1d46('‮b3', '3aUr')](Delayed));
  await getShopInfo();
  await $['wait'](_0x50494f[_0x1d46('‫b4', 'HOs&')](Delayed));
  await _0x50494f[_0x1d46('‫b5', 'zCZ6')](getMyInfo);
}

function rollPoint() {
  var _0x55a335 = {
    'dNzPd': function (_0x2dc9cd, _0x149849) {
      return _0x2dc9cd + _0x149849;
    },
    'Ailqf': function (_0x582092, _0x5965f9) {
      return _0x582092 == _0x5965f9;
    },
    'VNpsM': 'ZazFn',
    'sFkOM': _0x1d46('‮b6', '[B^s'),
    'UomlN': function (_0x4d4e7a) {
      return _0x4d4e7a();
    },
    'fZueI': function (_0x444004) {
      return _0x444004();
    },
    'WWKIK': function (_0x57051a) {
      return _0x57051a();
    },
    'fadBH': function (_0x19cd8d, _0x456ab2) {
      return _0x19cd8d > _0x456ab2;
    },
    'htLuA': function (_0x2aba03, _0x281fca) {
      return _0x2aba03 === _0x281fca;
    },
    'upces': _0x1d46('‮b7', 'o7GN'),
    'maLnK': function (_0x148945) {
      return _0x148945();
    },
    'ptkjk': function (_0x44dc6c, _0x2cc219) {
      return _0x44dc6c == _0x2cc219;
    },
    'yXKBX': _0x1d46('‫b8', 's*%j'),
    'pCDxV': function (_0x78a0f4, _0x5d8960) {
      return _0x78a0f4 !== _0x5d8960;
    },
    'ODlql': 'oVbYs',
    'QTLnk': function (_0x33ca43) {
      return _0x33ca43();
    },
    'FxsKB': function (_0x387a68, _0x17bb13) {
      return _0x387a68(_0x17bb13);
    },
    'jsrFH': _0x1d46('‮b9', 'V7UC'),
    'QgDXS': function (_0x473c2e, _0x306a76) {
      return _0x473c2e !== _0x306a76;
    },
    'hXjFF': _0x1d46('‮ba', 'CLO('),
    'GeEsH': function (_0x4dc120) {
      return _0x4dc120();
    }
  };
  let _0x58761d = new Date()[_0x1d46('‫bb', 'V4Vn')]();
  let _0xb6f2af = RSA_encryption('{\x22uid\x22:' + user_ID + ',\x22isAddRoll\x22:0,\x22time\x22:' + _0x58761d + _0x1d46('‮bc', '(FS$') + (dwsj_inc += 0x1) + '}');
  let _0x5d98f3 = Post_request(_0x1d46('‫bd', '3hg*'), _0xb6f2af);
  return new Promise((_0x47e1e7, _0x549389) => {
    $[_0x1d46('‮be', 'o7GN')](_0x5d98f3, async (_0x5c4be4, _0x251539, _0x36325c) => {
      try {
        if (_0x5c4be4) {
          console['log'](_0x1d46('‮bf', '&Xo7') + $[_0x1d46('‫c0', 'l29#')] + _0x1d46('‮c1', 'phSI'));
          subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫c2', 'Z2%O')] + _0x1d46('‮c3', 'FpVB');
          console['log'](_0x55a335[_0x1d46('‫c4', 'ns@I')](_0x5c4be4, '\x0a'));
        } else {
          let _0x5b9f1d = JSON[_0x1d46('‮c5', '4k%d')](_0x36325c);
          if (_0x55a335['Ailqf'](_0x5b9f1d[_0x1d46('‫c6', 'FpVB')], 0x1)) {
            if (_0x55a335[_0x1d46('‫c7', '$sOJ')] === _0x55a335[_0x1d46('‮c8', '3Ac7')]) {
              console[_0x1d46('‫c9', '&[cF')](_0x1d46('‫ca', 'CLO(') + $[_0x1d46('‮cb', '$sOJ')] + '\x20' + title + _0x1d46('‫cc', '&Xo7') + _0x5b9f1d['data'][_0x1d46('‮cd', 'zCZ6')]['effectIndexs'] + _0x1d46('‮ce', 'HtHt'));
            } else {
              console[_0x1d46('‮cf', 'sTrt')](_0x1d46('‫d0', 'lXIT') + $['index'] + _0x1d46('‮d1', '8wGO') + _0x5b9f1d['data'][_0x1d46('‮d2', '4k%d')]['addAllCoins'] + _0x1d46('‫d3', 'sTrt'));
              await $[_0x1d46('‫d4', '(FS$')](_0x55a335[_0x1d46('‮d5', 'gAx]')](Delayed));
              await _0x55a335['fZueI'](addGoodsBuff);
              await $[_0x1d46('‮d6', '$sOJ')](_0x55a335[_0x1d46('‮d7', 'SbG2')](Delayed));
              await _0x55a335[_0x1d46('‮d8', 'rO$q')](getBuildingEarn);
              if (dwsj_UPbuild) {
                await $[_0x1d46('‮a7', '#M&M')](_0x55a335['WWKIK'](Delayed));
                await _0x55a335[_0x1d46('‮d9', 'lXIT')](buildingLevelUp);
              }
              if (dwsj_continued) {
                if (_0x55a335[_0x1d46('‫da', 'FpVB')](_0x5b9f1d[_0x1d46('‫db', '4$Qj')][_0x1d46('‫dc', 'zCZ6')][_0x1d46('‫dd', 'Z2%O')], 0x0)) {
                  if (_0x55a335['htLuA'](_0x55a335[_0x1d46('‮de', '3b]z')], _0x1d46('‮df', 'r[uN'))) {
                    await $[_0x1d46('‮e0', 'SbG2')](_0x55a335['maLnK'](Delayed));
                    await _0x55a335[_0x1d46('‮e1', '&[cF')](rollPoint);
                  } else {
                    _0x47e1e7();
                  }
                }
              }
            }
          } else if (_0x55a335[_0x1d46('‮e2', '#D]i')](_0x5b9f1d['code'], 0x515)) {
            if ('kKwiK' === _0x55a335[_0x1d46('‫e3', 'KBVx')]) {
              console[_0x1d46('‫a0', '3b]z')](_0x1d46('‫e4', '4k%d') + $[_0x1d46('‫e5', 'phSI')] + '\x20丢骰子】:\x20' + _0x5b9f1d[_0x1d46('‫e6', 's*%j')]);
              if (!video_data) {
                if (_0x55a335[_0x1d46('‫e7', 'jo2@')]('oVbYs', _0x55a335['ODlql'])) {
                  type = 0x2;
                } else {
                  await $[_0x1d46('‮b2', 'CLO(')](_0x55a335[_0x1d46('‮e8', 'cn7I')](Delayed));
                  await _0x55a335[_0x1d46('‫e9', 'KBVx')](getAdReward, 'tou');
                }
              } else {
                await _0x55a335['QTLnk'](reward_video);
                await _0x55a335[_0x1d46('‮ea', '&Xo7')](getAdReward, _0x55a335[_0x1d46('‮eb', 'tgxE')]);
              }
            } else {
              if (dwsj_delayed == 0x0) {
                return 0x1f4;
              } else {
                return Delayed_value = dwsj_delayed * 0x3e8;
              }
            }
          } else if (_0x5b9f1d[_0x1d46('‫ec', 'D2Ss')] == 0x517) {
            await $[_0x1d46('‫ed', 'x7C6')](Delayed());
            await rollPoint_6();
          } else {
            console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮72', 'gAx]')] + _0x1d46('‮ee', 'ns@I') + _0x5b9f1d[_0x1d46('‮ef', 'lXIT')]);
          }
        }
      } catch (_0x161d16) {
        console[_0x1d46('‫f0', '4k%d')](_0x161d16, _0x251539);
      } finally {
        if (_0x55a335['QgDXS']('nePFo', _0x55a335['hXjFF'])) {
          _0x55a335[_0x1d46('‫f1', 'e1n#')](_0x47e1e7);
        } else {
          console[_0x1d46('‫f2', 'Z2%O')](_0x1d46('‫f3', 'V4Vn') + $['index'] + _0x1d46('‮f4', 'x7C6') + result[_0x1d46('‮f5', 'FpVB')]);
        }
      }
    });
  });
}

function useItem(_0x43b0f1, _0x6f04fd) {
  var _0x4034e4 = {
    'PZbcE': function (_0x18ea07) {
      return _0x18ea07();
    },
    'RLIne': function (_0x4fe519, _0x43d3ae) {
      return _0x4fe519 === _0x43d3ae;
    },
    'mcIvh': _0x1d46('‮f6', 's*%j'),
    'AYnYA': _0x1d46('‫f7', 'e1n#'),
    'TOfSX': function (_0x19f5a9, _0x101337) {
      return _0x19f5a9 !== _0x101337;
    },
    'quFXA': _0x1d46('‮f8', 'Z2%O'),
    'TxMOQ': function (_0x4ffcba, _0x2fd9a5) {
      return _0x4ffcba !== _0x2fd9a5;
    },
    'mATka': _0x1d46('‮f9', '3hg*'),
    'iCTTG': _0x1d46('‫fa', '(FS$'),
    'lCMkJ': _0x1d46('‫fb', 'KBVx'),
    'xHMdr': 'eRUTX',
    'qCSXe': _0x1d46('‫fc', '4$Qj'),
    'lUAsS': function (_0xfc101b, _0x39dd3d) {
      return _0xfc101b + _0x39dd3d;
    },
    'gfqIV': function (_0x209f22, _0xeb0c51) {
      return _0x209f22 === _0xeb0c51;
    },
    'WhOSq': function (_0x596add, _0x4d7ade) {
      return _0x596add(_0x4d7ade);
    },
    'waTEW': function (_0x43e8e0, _0xe322b5, _0x1c20c1) {
      return _0x43e8e0(_0xe322b5, _0x1c20c1);
    }
  };
  let _0x4005b3 = new Date()[_0x1d46('‮fd', 'r[uN')]();
  let _0x9ce7c7 = _0x4034e4['WhOSq'](RSA_encryption, _0x1d46('‫fe', 'HOs&') + user_ID + ',\x22itemId\x22:' + _0x43b0f1 + ',\x22time\x22:' + _0x4005b3 + _0x1d46('‫ff', 'V4Vn') + (dwsj_inc += 0x1) + '}');
  let _0x52bda9 = _0x4034e4['waTEW'](Post_request, 'useItem', _0x9ce7c7);
  return new Promise((_0x4df6cb, _0xbfd80) => {
    var _0x49605a = {
      'wtleU': _0x4034e4[_0x1d46('‮100', '4$Qj')],
      'rBhnM': function (_0x1564f8, _0x9830ed) {
        return _0x4034e4[_0x1d46('‫101', '&Xo7')](_0x1564f8, _0x9830ed);
      },
      'kQmrO': function (_0xf2ada7, _0x1307f5) {
        return _0x4034e4['lUAsS'](_0xf2ada7, _0x1307f5);
      },
      'psrBf': 'module.exports='
    };
    if (_0x4034e4[_0x1d46('‮102', 'S#r1')](_0x1d46('‫103', 'rv%a'), 'inhNl')) {
      console[_0x1d46('‮104', '&Xo7')](_0x1d46('‮105', 'Z2%O') + $[_0x1d46('‫106', 'ns@I')] + '\x20' + _0x6f04fd + _0x1d46('‫107', 'phSI'));
      subTitle += _0x1d46('‫108', '#D]i') + $[_0x1d46('‮109', 'SbG2')] + '\x20' + _0x6f04fd + _0x1d46('‮10a', 'rv%a');
    } else {
      $['post'](_0x52bda9, async (_0x314c75, _0x1eccd1, _0xc0f8cc) => {
        var _0x3363f6 = {
          'melbu': function (_0x493aeb) {
            return _0x4034e4[_0x1d46('‫10b', '3aUr')](_0x493aeb);
          }
        };
        try {
          if (_0x314c75) {
            if (_0x4034e4[_0x1d46('‫10c', 'o7GN')](_0x4034e4['mcIvh'], _0x4034e4[_0x1d46('‫10d', '#M&M')])) {
              console[_0x1d46('‮10e', 'dz8^')](_0x1d46('‮10f', '&[cF') + $[_0x1d46('‮110', '#M&M')] + _0x1d46('‫111', '8wGO') + result['message']);
            } else {
              console[_0x1d46('‮112', 'D2Ss')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮113', 'GUfc')] + '\x20' + _0x6f04fd + '】:\x20网络请求失败');
              subTitle += _0x1d46('‮114', 'rv%a') + $[_0x1d46('‫115', 'sTrt')] + '\x20' + _0x6f04fd + _0x1d46('‫116', 'FpVB');
            }
          } else {
            if (_0x4034e4[_0x1d46('‮117', 'tgxE')](_0x1d46('‫118', 'ns@I'), _0x4034e4['quFXA'])) {
              console[_0x1d46('‫119', 'zCZ6')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫11a', '3Ac7')] + '\x20' + _0x6f04fd + _0x1d46('‮11b', 'jo2@') + result[_0x1d46('‫11c', 'jo2@')]);
            } else {
              let _0x2c26f9 = JSON['parse'](_0xc0f8cc);
              if (_0x2c26f9['code'] == 0x1) {
                console[_0x1d46('‫11d', 'gAx]')](_0x1d46('‮11e', '56)D') + $[_0x1d46('‫11f', 'tgxE')] + '\x20' + _0x6f04fd + _0x1d46('‫120', 'p@])') + _0x2c26f9['data']['itemEffect'][_0x1d46('‮121', 'phSI')] + '\x20格子');
              } else {
                if (_0x4034e4['TxMOQ'](_0x4034e4['mATka'], _0x1d46('‫122', 'KBVx'))) {
                  console[_0x1d46('‮123', 's*%j')](_0x1d46('‫124', 'W@rB') + $[_0x1d46('‫e5', 'phSI')] + '\x20' + _0x6f04fd + _0x1d46('‮125', 'W@rB') + _0x2c26f9['message']);
                } else {
                  preservation = use_current['replace'](new RegExp(_0x49605a[_0x1d46('‮126', '3hg*')], 'gi'), _0x1d46('‫127', 'o7GN'));
                  fs[_0x1d46('‮128', 'gAx]')]('./dwsj.config' + variable_num + '.js', _0x49605a[_0x1d46('‫129', '$sOJ')](_0x49605a['rBhnM'](_0x49605a[_0x1d46('‫12a', 'HtHt')](_0x49605a[_0x1d46('‫12b', 'Z2%O')], variable_left), preservation), variable_right));
                }
              }
            }
          }
        } catch (_0x41e4f8) {
          if (_0x4034e4['iCTTG'] !== _0x4034e4[_0x1d46('‮12c', '[B^s')]) {
            _0x3363f6[_0x1d46('‮12d', 'gAx]')](_0x4df6cb);
          } else {
            console[_0x1d46('‫12e', 'l29#')](_0x41e4f8, _0x1eccd1);
          }
        } finally {
          if (_0x4034e4['TxMOQ'](_0x4034e4['lCMkJ'], _0x4034e4[_0x1d46('‫12f', '(FS$')])) {
            _0x4df6cb();
          } else {
            console[_0x1d46('‫8c', '3aUr')](_0x1d46('‫130', 'sTrt') + $['index'] + _0x1d46('‫131', '[B^s'));
          }
        }
      });
    }
  });
}

function entryGame() {
  var _0x358b7a = {
    'qLutJ': function (_0x4b379d) {
      return _0x4b379d();
    },
    'PjUwF': function (_0x36d754, _0x14a933) {
      return _0x36d754(_0x14a933);
    },
    'JJsKg': function (_0x426197, _0x5187fd) {
      return _0x426197 < _0x5187fd;
    },
    'dorvS': _0x1d46('‫132', '3Ac7'),
    'oKUxV': function (_0x5f0c75, _0x393bf0) {
      return _0x5f0c75 !== _0x393bf0;
    },
    'KWrJe': function (_0x481da8, _0x34c115) {
      return _0x481da8 === _0x34c115;
    },
    'COjES': _0x1d46('‫133', 'p@])'),
    'aUxpi': _0x1d46('‮134', 'o7GN'),
    'fiCjh': _0x1d46('‮135', 'ns@I'),
    'OlLRZ': '10005',
    'DDyrQ': '10007',
    'joOfA': _0x1d46('‮136', 'lXIT'),
    'CNEYB': function (_0x306d49) {
      return _0x306d49();
    },
    'sVpbr': function (_0x41b2be) {
      return _0x41b2be();
    },
    'NDaBc': _0x1d46('‮137', 'ns@I'),
    'Aubxm': _0x1d46('‫138', 'V4Vn'),
    'JbtLQ': function (_0x5ddec3, _0x4b91f5) {
      return _0x5ddec3 != _0x4b91f5;
    },
    'xlilG': _0x1d46('‮139', '$sOJ'),
    'qdgJZ': function (_0x26e31d, _0x2623de) {
      return _0x26e31d >= _0x2623de;
    },
    'RwcUG': function (_0x223f2e, _0x4f6d72) {
      return _0x223f2e >= _0x4f6d72;
    },
    'mURUx': function (_0x4deede, _0x5c920f) {
      return _0x4deede - _0x5c920f;
    },
    'hjwlL': function (_0x49497f, _0x2ba209) {
      return _0x49497f >= _0x2ba209;
    },
    'edpuu': _0x1d46('‫13a', 'sTrt'),
    'fDxac': _0x1d46('‮13b', 'dz8^'),
    'qSdjE': function (_0xa825c6, _0x5bc3a0) {
      return _0xa825c6 != _0x5bc3a0;
    },
    'fnfVE': function (_0x584dad, _0x4151b8) {
      return _0x584dad + _0x4151b8;
    },
    'HlQdI': function (_0x4194da, _0x1bcc88) {
      return _0x4194da - _0x1bcc88;
    },
    'AOzeX': function (_0x18d89a, _0x5bfa07) {
      return _0x18d89a >= _0x5bfa07;
    },
    'GsRwt': function (_0x163e90, _0x3f35e1) {
      return _0x163e90 + _0x3f35e1;
    },
    'frclR': function (_0x590ff9, _0x1a4a24) {
      return _0x590ff9 !== _0x1a4a24;
    },
    'gFNgn': function (_0x39948f, _0x5ae608) {
      return _0x39948f + _0x5ae608;
    },
    'LiShG': function (_0x4d87df, _0x5aa790) {
      return _0x4d87df + _0x5aa790;
    },
    'Bhxgy': function (_0x33d63b, _0x48b2d3) {
      return _0x33d63b - _0x48b2d3;
    },
    'qpIZL': function (_0x5a5fac, _0xe35a88) {
      return _0x5a5fac + _0xe35a88;
    },
    'FmoEO': 'abaEZ',
    'gBONb': _0x1d46('‫13c', 'x7C6'),
    'DxhTu': function (_0x348314) {
      return _0x348314();
    },
    'gSHok': function (_0x1c7725, _0x3132c6, _0x47f112) {
      return _0x1c7725(_0x3132c6, _0x47f112);
    },
    'UTsXI': function (_0x20cc39) {
      return _0x20cc39();
    },
    'HJyLQ': _0x1d46('‮13d', 'HOs&'),
    'wlHmu': _0x1d46('‮13e', 'w7ja'),
    'SVORQ': _0x1d46('‫13f', 'GUfc'),
    'eFhib': _0x1d46('‫140', '[B^s'),
    'rIonm': 'Miato',
    'LaFHb': 'XcSbC',
    'KYRJs': function (_0x557864, _0x263671) {
      return _0x557864 !== _0x263671;
    },
    'Agutk': _0x1d46('‫141', 'rv%a'),
    'eAZlm': function (_0x3e2092, _0x38cb37) {
      return _0x3e2092(_0x38cb37);
    },
    'vQZjD': function (_0x2fed98, _0x490379, _0x418327) {
      return _0x2fed98(_0x490379, _0x418327);
    }
  };
  let _0x2a715c = new Date()[_0x1d46('‮142', 'Z2%O')]();
  let _0x25aa09 = _0x358b7a['eAZlm'](RSA_encryption, _0x1d46('‫143', 'CLO(') + user_ID + _0x1d46('‫144', 'jo2@') + _0x2a715c + _0x1d46('‮145', 'tgxE') + (dwsj_inc += 0x1) + '}');
  let _0x2c8c92 = _0x358b7a[_0x1d46('‫146', 'V4Vn')](Post_request, _0x1d46('‮147', 'KBVx'), _0x25aa09);
  return new Promise((_0x2e04ff, _0x20da64) => {
    var _0x1570d6 = {
      'ukHEv': function (_0x4d6ab4, _0x4ca6e0) {
        return _0x4d6ab4 == _0x4ca6e0;
      },
      'oENOD': function (_0x26aeb2, _0x13fc8a) {
        return _0x26aeb2(_0x13fc8a);
      },
      'cPhap': function (_0x7bca21) {
        return _0x358b7a[_0x1d46('‮148', '$sOJ')](_0x7bca21);
      },
      'oEmtM': function (_0x3c59aa, _0x590a43) {
        return _0x358b7a[_0x1d46('‮149', 'KBVx')](_0x3c59aa, _0x590a43);
      },
      'NauMa': function (_0x1546fa, _0x46d992) {
        return _0x358b7a['JJsKg'](_0x1546fa, _0x46d992);
      },
      'JwMsZ': function (_0x3951d8, _0x277518) {
        return _0x3951d8 + _0x277518;
      },
      'UmhXs': _0x358b7a['dorvS'],
      'jePjG': 'osQpV',
      'qnabm': function (_0x17057e, _0x317b31) {
        return _0x358b7a[_0x1d46('‮14a', 's*%j')](_0x17057e, _0x317b31);
      },
      'fQVLE': _0x1d46('‮14b', 'SbG2'),
      'RWClh': function (_0x37fa4d, _0x512eb2) {
        return _0x358b7a[_0x1d46('‮14c', '8wGO')](_0x37fa4d, _0x512eb2);
      },
      'rKcqP': _0x358b7a[_0x1d46('‫14d', 'W@rB')],
      'JUFGK': function (_0x5eb970, _0x442b97) {
        return _0x358b7a['KWrJe'](_0x5eb970, _0x442b97);
      },
      'IehYJ': _0x1d46('‮14e', 'V7UC'),
      'nofid': _0x358b7a['aUxpi'],
      'uRJcy': _0x358b7a[_0x1d46('‫14f', 's*%j')],
      'KtcKa': _0x1d46('‮150', 'V7UC'),
      'ZFOnD': _0x358b7a[_0x1d46('‫151', 'sTrt')],
      'dpvtU': _0x358b7a[_0x1d46('‫152', '&Xo7')],
      'ucStL': _0x358b7a[_0x1d46('‮153', 'GUfc')],
      'BMCsL': function (_0x12e55c) {
        return _0x358b7a['CNEYB'](_0x12e55c);
      },
      'oLkfA': function (_0x14e66a) {
        return _0x358b7a[_0x1d46('‮154', 'KBVx')](_0x14e66a);
      },
      'SFayu': function (_0x4a324f) {
        return _0x4a324f();
      },
      'mFaLp': function (_0x1d4e6f, _0x11caa8) {
        return _0x1d4e6f < _0x11caa8;
      },
      'PndNO': function (_0x2f5aea, _0x34415f) {
        return _0x2f5aea != _0x34415f;
      },
      'CdqbU': 'UMNrj',
      'DLJNS': 'XZSSo',
      'KNMWY': _0x358b7a['NDaBc'],
      'ViHVp': _0x358b7a[_0x1d46('‮155', 'C2s5')],
      'UyQpZ': function (_0x407707, _0x4e6b99) {
        return _0x358b7a[_0x1d46('‮156', 'p@])')](_0x407707, _0x4e6b99);
      },
      'rCNew': function (_0xafa776, _0x13416e) {
        return _0x358b7a[_0x1d46('‮157', 'x7C6')](_0xafa776, _0x13416e);
      },
      'wHgvT': _0x1d46('‮158', 'SbG2'),
      'mlcFp': function (_0x2afc6b, _0x4c7efd) {
        return _0x358b7a[_0x1d46('‮159', 'HOs&')](_0x2afc6b, _0x4c7efd);
      },
      'Defzy': function (_0xbccbc8, _0x4f24d4) {
        return _0xbccbc8 !== _0x4f24d4;
      },
      'Kvkfq': _0x358b7a['xlilG'],
      'UoNWk': function (_0x4b879b, _0x502d31) {
        return _0x358b7a['qdgJZ'](_0x4b879b, _0x502d31);
      },
      'ldqMV': function (_0x1f427f, _0x4bf1da) {
        return _0x358b7a[_0x1d46('‫15a', 'rv%a')](_0x1f427f, _0x4bf1da);
      },
      'kvZvm': function (_0x51a6ad, _0x15aa75) {
        return _0x51a6ad >= _0x15aa75;
      },
      'wMNab': function (_0x2a9464, _0x5ed962) {
        return _0x2a9464 + _0x5ed962;
      },
      'YuYmJ': function (_0x5ef79a, _0x30b9f3) {
        return _0x358b7a[_0x1d46('‮15b', 'ns@I')](_0x5ef79a, _0x30b9f3);
      },
      'EMkrh': function (_0x141b63, _0x1ae457) {
        return _0x141b63 + _0x1ae457;
      },
      'EfwXH': function (_0xaec4bf, _0x18ca2a) {
        return _0xaec4bf + _0x18ca2a;
      },
      'TPBPq': function (_0xbb8464, _0x36a67b) {
        return _0x358b7a['hjwlL'](_0xbb8464, _0x36a67b);
      },
      'IOIXa': _0x358b7a[_0x1d46('‫15c', '&[cF')],
      'OFcJt': _0x358b7a[_0x1d46('‫15d', '8wGO')],
      'JRciv': function (_0x255707, _0x557087) {
        return _0x358b7a[_0x1d46('‫15e', 'l29#')](_0x255707, _0x557087);
      },
      'OhuMy': function (_0x3a5d81, _0x3c375d) {
        return _0x358b7a['fnfVE'](_0x3a5d81, _0x3c375d);
      },
      'lftfi': function (_0x1d96e3, _0x1e8030) {
        return _0x358b7a[_0x1d46('‫15f', 'phSI')](_0x1d96e3, _0x1e8030);
      },
      'WKrjF': function (_0x5203f6, _0x39b3bd) {
        return _0x358b7a[_0x1d46('‫160', '3Ac7')](_0x5203f6, _0x39b3bd);
      },
      'bESgr': function (_0x1d0445, _0x5ea2cf) {
        return _0x358b7a[_0x1d46('‫161', 'HOs&')](_0x1d0445, _0x5ea2cf);
      },
      'cIkoo': function (_0xfe71d7, _0x16fdf7) {
        return _0x358b7a[_0x1d46('‫162', '56)D')](_0xfe71d7, _0x16fdf7);
      },
      'JTRJE': function (_0xe2bc24, _0x2b6795) {
        return _0x358b7a['JJsKg'](_0xe2bc24, _0x2b6795);
      },
      'xnKqS': function (_0x402c4e, _0x8c8ae0) {
        return _0x358b7a[_0x1d46('‮163', '56)D')](_0x402c4e, _0x8c8ae0);
      },
      'XJgYe': 'JWIUA',
      'dhbcp': 'McOBQ',
      'sLYNL': function (_0x1f55ed, _0x13b02f) {
        return _0x1f55ed >= _0x13b02f;
      },
      'wMgJb': function (_0x4e65f8, _0x2ce242) {
        return _0x358b7a[_0x1d46('‮164', 'KBVx')](_0x4e65f8, _0x2ce242);
      },
      'mLCrO': function (_0xfbd029, _0x12be71) {
        return _0x358b7a[_0x1d46('‮165', '&[cF')](_0xfbd029, _0x12be71);
      },
      'ibmNo': function (_0x5736f3, _0x14911f) {
        return _0x358b7a[_0x1d46('‫166', '3b]z')](_0x5736f3, _0x14911f);
      },
      'IRyqD': function (_0x5c3079, _0x21a898) {
        return _0x358b7a[_0x1d46('‫167', 'w7ja')](_0x5c3079, _0x21a898);
      },
      'BNbLJ': function (_0x41750c, _0x1ce281) {
        return _0x358b7a[_0x1d46('‫168', 'Z2%O')](_0x41750c, _0x1ce281);
      },
      'nSpNc': function (_0x5aa1b7, _0x377013) {
        return _0x358b7a[_0x1d46('‮169', 'CLO(')](_0x5aa1b7, _0x377013);
      },
      'rWamm': function (_0x51e4a7, _0x2b40dc) {
        return _0x358b7a[_0x1d46('‫16a', '&[cF')](_0x51e4a7, _0x2b40dc);
      },
      'cOeFX': function (_0x3a8891, _0x14d821) {
        return _0x3a8891 + _0x14d821;
      },
      'lWTKV': _0x358b7a[_0x1d46('‮16b', 'gAx]')],
      'QRRdZ': function (_0x5d9337, _0x164c90) {
        return _0x5d9337 - _0x164c90;
      },
      'DvlZp': function (_0x170cac, _0x2f4299) {
        return _0x170cac + _0x2f4299;
      },
      'fNdyU': _0x358b7a['gBONb'],
      'zfVNG': function (_0x20dc3c) {
        return _0x358b7a['DxhTu'](_0x20dc3c);
      },
      'oSZVd': function (_0x208e0f, _0x525641, _0x5112dd) {
        return _0x358b7a[_0x1d46('‫16c', 'D2Ss')](_0x208e0f, _0x525641, _0x5112dd);
      },
      'peHGp': '使用消防车',
      'hxyAL': function (_0x155543, _0x1612b3) {
        return _0x155543 === _0x1612b3;
      },
      'rfyHe': _0x1d46('‮16d', '56)D'),
      'EzBFT': function (_0x4fb22f) {
        return _0x358b7a[_0x1d46('‫16e', '3Ac7')](_0x4fb22f);
      },
      'mFWLz': function (_0x73b473, _0x124260) {
        return _0x358b7a[_0x1d46('‮16f', 's*%j')](_0x73b473, _0x124260);
      },
      'iTxiP': function (_0xabad90) {
        return _0x358b7a[_0x1d46('‮170', 'o7GN')](_0xabad90);
      },
      'PWIjk': function (_0x2cbfe0, _0x35bc28, _0x45164e) {
        return _0x2cbfe0(_0x35bc28, _0x45164e);
      },
      'CRtIS': function (_0x98fa84, _0x4e0daf, _0x37db5c) {
        return _0x358b7a['gSHok'](_0x98fa84, _0x4e0daf, _0x37db5c);
      },
      'cXvGG': _0x1d46('‫171', 'sTrt'),
      'anqSF': function (_0x410fcc) {
        return _0x358b7a[_0x1d46('‫172', 'S#r1')](_0x410fcc);
      },
      'iIhuC': _0x358b7a['HJyLQ'],
      'STIIf': _0x358b7a[_0x1d46('‫173', 'cn7I')],
      'xEstF': function (_0x3eef7a) {
        return _0x358b7a[_0x1d46('‫174', 'w7ja')](_0x3eef7a);
      },
      'cYIOD': _0x358b7a['SVORQ'],
      'FwsVL': 'GhfOL',
      'zqLaZ': function (_0x4880d1, _0x2c9aed) {
        return _0x4880d1 === _0x2c9aed;
      },
      'VgQJq': _0x358b7a[_0x1d46('‮175', 'dz8^')],
      'sfAnz': _0x358b7a[_0x1d46('‮176', '56)D')],
      'wjIkf': _0x358b7a[_0x1d46('‫177', 'phSI')],
      'KlBaP': function (_0xdc1b4c) {
        return _0x358b7a[_0x1d46('‫178', 'Z2%O')](_0xdc1b4c);
      }
    };
    if (_0x358b7a['KYRJs'](_0x1d46('‫179', 'gAx]'), _0x358b7a[_0x1d46('‮17a', '3hg*')])) {
      console['log'](_0x1d46('‫17b', 'ns@I') + $[_0x1d46('‫e5', 'phSI')] + '\x20用户城市信息】:\x20' + result[_0x1d46('‫17c', 'phSI')]);
    } else {
      $[_0x1d46('‮17d', 'tgxE')](_0x2c8c92, async (_0x5305f5, _0x5e6fcf, _0xe93206) => {
        var _0x5d4e5c = {
          'cDNCm': function (_0x155e7c) {
            return _0x1570d6[_0x1d46('‫17e', '#D]i')](_0x155e7c);
          },
          'yaAvm': function (_0x2f1c96, _0xd9eb30) {
            return _0x1570d6[_0x1d46('‮17f', '3b]z')](_0x2f1c96, _0xd9eb30);
          },
          'WspKd': function (_0x31c2bc, _0x1b9dc2) {
            return _0x1570d6[_0x1d46('‮180', '&Xo7')](_0x31c2bc, _0x1b9dc2);
          },
          'nTInx': function (_0x479e78, _0x1e6be0) {
            return _0x1570d6[_0x1d46('‮181', 'phSI')](_0x479e78, _0x1e6be0);
          },
          'EEdcQ': _0x1570d6[_0x1d46('‫182', 'rO$q')],
          'HLHpS': function (_0x16f8ae, _0x219ca0) {
            return _0x16f8ae == _0x219ca0;
          }
        };
        try {
          if (_0x1570d6['jePjG'] !== _0x1d46('‫183', 'x7C6')) {
            _0x2e04ff();
          } else {
            if (_0x5305f5) {
              if (_0x1570d6[_0x1d46('‮184', '#M&M')]('GPJTo', _0x1570d6[_0x1d46('‫185', '3aUr')])) {
                console['log'](e, _0x5e6fcf);
              } else {
                console['log'](_0x1d46('‫186', 'HOs&') + $['index'] + '\x20' + title + _0x1d46('‮10a', 'rv%a'));
                subTitle += _0x1d46('‫187', 'x7C6') + $['index'] + '\x20' + title + _0x1d46('‮188', '[B^s');
              }
            } else {
              if (_0x1570d6[_0x1d46('‫189', 'w7ja')](_0x1d46('‫18a', 'w7ja'), _0x1570d6[_0x1d46('‮18b', 'p@])')])) {
                let _0x2979a0 = JSON['parse'](_0xe93206);
                if (_0x1570d6[_0x1d46('‫18c', 'x7C6')](_0x2979a0[_0x1d46('‫18d', 'e1n#')], 0x1)) {
                  if (_0x1570d6['JUFGK'](_0x1d46('‮18e', '[B^s'), _0x1570d6['IehYJ'])) {
                    let _0x44e91a = _0x2979a0[_0x1d46('‮18f', '3aUr')]['user'][_0x1d46('‫190', '&Xo7')];
                    let _0x71e1bf = _0x2979a0['data'][_0x1d46('‮191', 'HtHt')][_0x1570d6['nofid']];
                    let _0xccd01c = _0x2979a0['data'][_0x1d46('‮192', 'jo2@')][_0x1570d6['uRJcy']];
                    let _0x509418 = _0x2979a0[_0x1d46('‮193', '8wGO')]['backpack'][_0x1570d6[_0x1d46('‮194', 'phSI')]];
                    let _0x15ea5e = _0x2979a0[_0x1d46('‫195', 'HtHt')][_0x1d46('‫196', '#M&M')][_0x1570d6[_0x1d46('‫197', 'dz8^')]];
                    let _0x9ff697 = _0x2979a0[_0x1d46('‮198', 'o7GN')][_0x1d46('‫199', 'V4Vn')][_0x1570d6['dpvtU']];
                    let _0x7d3b7b = _0x2979a0[_0x1d46('‫19a', 'rv%a')][_0x1d46('‫19b', 'p@])')]['moveIndex'];
                    let _0xacafe6 = _0x2979a0[_0x1d46('‮19c', 'gAx]')][_0x1d46('‮19d', 'HOs&')]['diceNum'];
                    let _0x44fdb7 = -0x1;
                    let _0x5931fc = -0x1;
                    let _0x5b44e1 = -0x1;
                    let _0x418264 = -0x1;
                    let _0x7ae8b9 = 0x0;
                    let _0x5d00c6 = ![];
                    let _0x2e740a = ![],
                      _0x3ccd9c = ![],
                      _0x5c4781 = ![];
                    if (_0x1570d6[_0x1d46('‮19e', 'tgxE')](_0x2979a0[_0x1d46('‮19f', 'KBVx')][_0x1d46('‮1a0', 'HtHt')], null)) {
                      if (_0x1570d6[_0x1d46('‫1a1', 'r[uN')](_0x1570d6[_0x1d46('‫1a2', '(FS$')], _0x1d46('‫1a3', '#M&M'))) {
                        let _0x30b99b = JSON[_0x1d46('‫1a4', 'C2s5')](_0xe93206);
                        if (_0x30b99b['code'] == 0x1) {
                          console[_0x1d46('‮112', 'D2Ss')](_0x1d46('‮11e', '56)D') + $[_0x1d46('‮1a5', '56)D')] + '\x20建造建筑】:\x20花了\x20' + _0x30b99b[_0x1d46('‮1a6', 'ck!A')][_0x1d46('‮1a7', 's*%j')][_0x1d46('‮1a8', 'l29#')][_0x1d46('‮1a9', 's*%j')] + '\x20金币');
                        } else {
                          console[_0x1d46('‮cf', 'sTrt')](_0x1d46('‮1aa', 'p@])') + $[_0x1d46('‫1ab', 'dz8^')] + '\x20建造建筑】:\x20' + _0x30b99b[_0x1d46('‮1ac', 'rv%a')]);
                        }
                      } else {
                        await $['wait'](_0x1570d6[_0x1d46('‮1ad', '8wGO')](Delayed));
                        await _0x1570d6[_0x1d46('‫1ae', 'W@rB')](addRfUid);
                        await $[_0x1d46('‮a7', '#M&M')](_0x1570d6['SFayu'](Delayed));
                      }
                    }
                    for (let _0x3828f4 = 0x0; _0x1570d6[_0x1d46('‫1af', 'phSI')](_0x3828f4, 0x14); _0x3828f4++) {
                      if (_0x1570d6['PndNO'](_0x44e91a[_0x3828f4], undefined)) {
                        if (_0x1570d6['CdqbU'] !== 'UMNrj') {
                          console[_0x1d46('‫8c', '3aUr')](_0x1d46('‫1b0', '3hg*') + $[_0x1d46('‫1b1', '3b]z')] + _0x1d46('‮1b2', 'rv%a') + _0x2979a0[_0x1d46('‮1b3', 'tgxE')]);
                        } else {
                          if (_0x44e91a[_0x3828f4][_0x1d46('‫1b4', 'FpVB')]) {
                            _0x44fdb7 = _0x3828f4;
                            break;
                          }
                        }
                      }
                    }
                    for (let _0x21877a = 0x0; _0x1570d6[_0x1d46('‮1b5', 'zCZ6')](_0x21877a, 0x14); _0x21877a++) {
                      if (_0x1570d6['DLJNS'] === _0x1570d6[_0x1d46('‫1b6', 'w7ja')]) {
                        console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫1b7', '3aUr')] + _0x1d46('‫1b8', 'lXIT') + _0x2979a0[_0x1d46('‮f5', 'FpVB')]);
                      } else {
                        if (_0x44e91a[_0x21877a] != undefined) {
                          if (_0x44e91a[_0x21877a][_0x1570d6[_0x1d46('‮1b9', 'tgxE')]]) {
                            _0x5931fc = _0x21877a;
                            break;
                          }
                        }
                      }
                    }
                    for (let _0x56c79c = 0x0; _0x1570d6[_0x1d46('‮1ba', '&[cF')](_0x56c79c, 0x14); _0x56c79c++) {
                      if (_0x1570d6['rCNew'](_0x44e91a[_0x56c79c], undefined)) {
                        if (_0x44e91a[_0x56c79c][_0x1570d6['wHgvT']]) {
                          _0x5b44e1 = _0x56c79c;
                          break;
                        }
                      }
                    }
                    for (let _0xbc99e2 = 0x0; _0x1570d6[_0x1d46('‫1bb', 'rv%a')](_0xbc99e2, 0x14); _0xbc99e2++) {
                      if (_0x1570d6[_0x1d46('‫1bc', 'W@rB')](_0x1d46('‮1bd', 'CLO('), 'BkDdR')) {
                        _0x5d4e5c[_0x1d46('‮1be', '&Xo7')](_0x2e04ff);
                      } else {
                        if (_0x1570d6['mlcFp'](_0x44e91a[_0xbc99e2], undefined)) {
                          if (_0x44e91a[_0xbc99e2][_0x1d46('‮1bf', 'o7GN')]) {
                            if (_0x1570d6[_0x1d46('‫1c0', 'C2s5')](_0x1570d6[_0x1d46('‮1c1', 'l29#')], _0x1570d6[_0x1d46('‮1c2', 'HtHt')])) {
                              red = _0x1d46('‫1c3', '#D]i') + list[_0x1d46('‮1c4', '#M&M')] + '：' + list[_0x1d46('‮1c5', '&[cF')];
                            } else {
                              _0x418264 = _0xbc99e2;
                              break;
                            }
                          }
                        }
                      }
                    }
                    if (_0x1570d6['UoNWk'](_0x44fdb7, 0x0) || _0x418264 >= 0x0 || _0x1570d6[_0x1d46('‮1c6', '#D]i')](_0x5b44e1, 0x0) || _0x1570d6[_0x1d46('‮1c7', 'S#r1')](_0x5931fc, 0x0)) {
                      console[_0x1d46('‮1c8', 'jo2@')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫1c9', 'C2s5')] + _0x1d46('‮1ca', 'V7UC') + _0x7d3b7b + _0x1d46('‫1cb', 'o7GN') + _0xacafe6 + '\x0a---道具数量:消防车:' + _0x71e1bf + _0x1d46('‮1cc', 'KBVx') + _0x509418 + '|清扫车：' + _0x15ea5e + _0x1d46('‫1cd', '#M&M') + _0x9ff697 + _0x1d46('‮1ce', 'S#r1') + _0xccd01c + _0x1d46('‫1cf', 'gAx]') + _0x44fdb7 + '|积水:' + _0x5931fc + _0x1d46('‮1d0', '3b]z') + _0x5b44e1 + _0x1d46('‮1d1', '#D]i') + _0x418264);
                      subTitle += _0x1d46('‫186', 'HOs&') + $[_0x1d46('‫1d2', 'D2Ss')] + _0x1d46('‫1d3', 'rv%a');
                      for (let _0x47ed4d = 0x0; _0x47ed4d < 0x6; _0x47ed4d++) {
                        if (_0x44e91a[_0x1570d6['kvZvm'](_0x1570d6[_0x1d46('‮1d4', 'x7C6')](_0x7d3b7b + _0x47ed4d, 0x1), 0x14) ? _0x1570d6['YuYmJ'](_0x1570d6[_0x1d46('‮1d5', 'dz8^')](_0x7d3b7b + _0x47ed4d, 0x1), 0x14) : _0x1570d6['EfwXH'](_0x7d3b7b + _0x47ed4d, 0x1)] != undefined) {
                          if (_0x44e91a[_0x1570d6[_0x1d46('‮1d6', '3b]z')](_0x7d3b7b + _0x47ed4d + 0x1, 0x14) ? _0x1570d6[_0x1d46('‫1d7', '#M&M')](_0x1570d6[_0x1d46('‫1d8', 'rv%a')](_0x7d3b7b, _0x47ed4d) + 0x1, 0x14) : _0x1570d6[_0x1d46('‫1d9', 'x7C6')](_0x7d3b7b + _0x47ed4d, 0x1)][_0x1570d6[_0x1d46('‫1da', 'HtHt')]]) {
                            if (_0x1570d6[_0x1d46('‮1db', '3b]z')](_0x1570d6['OFcJt'], _0x1d46('‮1dc', 'gAx]'))) {
                              console[_0x1d46('‮cf', 'sTrt')](_0x1d46('‫1dd', 'phSI') + $['index'] + _0x1d46('‫1de', 'phSI') + _0x2979a0['message']);
                            } else {
                              _0x5d00c6 = !![];
                              break;
                            }
                          }
                        }
                      }
                      for (let _0x552e79 = 0x0; _0x1570d6[_0x1d46('‮1df', 'GUfc')](_0x552e79, 0x6); _0x552e79++) {
                        if (_0x1570d6[_0x1d46('‮1e0', 'GUfc')](_0x44e91a[_0x1570d6['EfwXH'](_0x1570d6['OhuMy'](_0x7d3b7b, _0x552e79), 0x1) >= 0x14 ? _0x1570d6['lftfi'](_0x1570d6[_0x1d46('‫1e1', '3b]z')](_0x7d3b7b, _0x552e79) + 0x1, 0x14) : _0x1570d6[_0x1d46('‮1e2', 'C2s5')](_0x1570d6[_0x1d46('‮1e2', 'C2s5')](_0x7d3b7b, _0x552e79), 0x1)], undefined)) {
                          if (_0x44e91a[_0x1570d6[_0x1d46('‫1e3', 'o7GN')](_0x1570d6[_0x1d46('‮1e4', '&Xo7')](_0x7d3b7b + _0x552e79, 0x1), 0x14) ? _0x1570d6['OhuMy'](_0x1570d6[_0x1d46('‫1e5', 'w7ja')](_0x7d3b7b, _0x552e79), 0x1) - 0x14 : _0x1570d6['cIkoo'](_0x7d3b7b, _0x552e79) + 0x1][_0x1570d6[_0x1d46('‮1e6', '3hg*')]]) {
                            _0x2e740a = !![];
                            break;
                          }
                        }
                      }
                      for (let _0x22b794 = 0x0; _0x1570d6[_0x1d46('‫1e7', 'x7C6')](_0x22b794, 0x6); _0x22b794++) {
                        if (_0x1570d6[_0x1d46('‮1e8', 'e1n#')](_0x1570d6[_0x1d46('‮1e9', 's*%j')], _0x1570d6['dhbcp'])) {
                          if (_0x1570d6[_0x1d46('‫1ea', '#M&M')](_0x44e91a[_0x1570d6['sLYNL'](_0x1570d6[_0x1d46('‮1eb', 'KBVx')](_0x1570d6[_0x1d46('‮1ec', 'HtHt')](_0x7d3b7b, _0x22b794), 0x1), 0x14) ? _0x1570d6['mLCrO'](_0x1570d6[_0x1d46('‮1ed', 'HOs&')](_0x7d3b7b, _0x22b794), 0x1) - 0x14 : _0x1570d6['ibmNo'](_0x1570d6['IRyqD'](_0x7d3b7b, _0x22b794), 0x1)], undefined)) {
                            if (_0x44e91a[_0x1570d6[_0x1d46('‮1ee', 'HtHt')](_0x1570d6[_0x1d46('‮1ef', '3hg*')](_0x7d3b7b, _0x22b794) + 0x1, 0x14) ? _0x1570d6[_0x1d46('‫1f0', 'ns@I')](_0x7d3b7b + _0x22b794 + 0x1, 0x14) : _0x1570d6[_0x1d46('‫1f1', 'jo2@')](_0x1570d6[_0x1d46('‫1f2', 'C2s5')](_0x7d3b7b, _0x22b794), 0x1)][_0x1570d6[_0x1d46('‫1f3', 'KBVx')]]) {
                              _0x5c4781 = !![];
                              break;
                            }
                          }
                        } else {
                          let _0x4bb40f = JSON[_0x1d46('‮1f4', '3aUr')](_0xe93206);
                          if (_0x1570d6['ukHEv'](_0x4bb40f[_0x1d46('‮1f5', '4$Qj')], 0x1)) {
                            console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮1f6', '&Xo7')] + '\x20广告佣金提现】:\x20成功');
                          } else {
                            console[_0x1d46('‫f2', 'Z2%O')](_0x1d46('‫d0', 'lXIT') + $[_0x1d46('‫1f7', 'V4Vn')] + '\x20广告佣金提现】:\x20' + _0x4bb40f[_0x1d46('‮1f8', '3aUr')]);
                          }
                        }
                      }
                      for (let _0x477988 = 0x0; _0x1570d6[_0x1d46('‫1f9', 'V7UC')](_0x477988, 0x6); _0x477988++) {
                        if (_0x1570d6[_0x1d46('‫1fa', 'HtHt')](_0x44e91a[_0x1570d6[_0x1d46('‮1fb', 'sTrt')](_0x7d3b7b, _0x477988) + 0x1 >= 0x14 ? _0x1570d6['nSpNc'](_0x1570d6['rWamm'](_0x1570d6[_0x1d46('‫1fc', 'o7GN')](_0x7d3b7b, _0x477988), 0x1), 0x14) : _0x1570d6[_0x1d46('‮1fd', '#D]i')](_0x7d3b7b + _0x477988, 0x1)], undefined)) {
                          if (_0x1570d6[_0x1d46('‮1fe', 'w7ja')](_0x1d46('‮1ff', 'KBVx'), _0x1570d6[_0x1d46('‫200', 'p@])')])) {
                            if (_0x44e91a[_0x1570d6['cOeFX'](_0x1570d6[_0x1d46('‮201', '$sOJ')](_0x7d3b7b, _0x477988), 0x1) >= 0x14 ? _0x1570d6[_0x1d46('‮202', '3Ac7')](_0x1570d6[_0x1d46('‫203', 'p@])')](_0x1570d6['cOeFX'](_0x7d3b7b, _0x477988), 0x1), 0x14) : _0x1570d6[_0x1d46('‫204', 'sTrt')](_0x7d3b7b + _0x477988, 0x1)][_0x1570d6[_0x1d46('‫205', 'ck!A')]]) {
                              _0x3ccd9c = !![];
                              break;
                            }
                          } else {
                            body_data = _0x5d4e5c[_0x1d46('‮206', 'W@rB')](RSA_encryption, _0x1d46('‫207', 'Z2%O') + user_ID + _0x1d46('‮208', '56)D') + _0x2a715c + _0x1d46('‮209', 'e1n#') + (dwsj_inc += 0x1) + '}');
                            title = '加速';
                          }
                        }
                      }
                      await $['wait'](Delayed());
                      if (dwsj_fire) {
                        if (_0x5d00c6) {
                          if (_0x71e1bf > 0x0) {
                            await $[_0x1d46('‫20a', 'KBVx')](_0x1570d6['zfVNG'](Delayed));
                            await _0x1570d6[_0x1d46('‮20b', '3aUr')](useItem, _0x1570d6['nofid'], _0x1570d6[_0x1d46('‮20c', 'D2Ss')]);
                            await $[_0x1d46('‫20d', 'dz8^')](Delayed());
                          } else {
                            if (_0x1570d6[_0x1d46('‫20e', '3Ac7')](_0x1570d6[_0x1d46('‮20f', 'x7C6')], _0x1d46('‫210', 'HOs&'))) {
                              console[_0x1d46('‫211', 'HtHt')](e, _0x5e6fcf);
                            } else {
                              if (buy_fire) {
                                await $[_0x1d46('‮212', 'e1n#')](_0x1570d6[_0x1d46('‫213', 'tgxE')](Delayed));
                                await _0x1570d6['mFWLz'](buyItem, _0x1d46('‫214', 'C2s5'));
                                await $[_0x1d46('‮e0', 'SbG2')](_0x1570d6[_0x1d46('‮215', '8wGO')](Delayed));
                                await _0x1570d6[_0x1d46('‮216', '&Xo7')](useItem, _0x1d46('‮217', 'GUfc'), _0x1d46('‫218', 'SbG2'));
                              }
                            }
                          }
                        }
                        if (_0x2e740a) {
                          if (_0x15ea5e) {
                            await _0x1570d6[_0x1d46('‮219', 'cn7I')](useItem, _0x1570d6['ZFOnD'], _0x1570d6[_0x1d46('‫21a', 'V4Vn')]);
                            await $['wait'](_0x1570d6[_0x1d46('‫21b', 'sTrt')](Delayed));
                          }
                        }
                        if (_0x5c4781) {
                          if (_0x1570d6[_0x1d46('‮21c', 'cn7I')] === _0x1570d6['iIhuC']) {
                            if (_0x509418) {
                              await _0x1570d6[_0x1d46('‫21d', 'W@rB')](useItem, _0x1570d6[_0x1d46('‮21e', '8wGO')], '使用压路机');
                              await $[_0x1d46('‫21f', 'C2s5')](Delayed());
                            }
                          } else {
                            body_data = _0x1570d6[_0x1d46('‮220', '$sOJ')](RSA_encryption, _0x1d46('‮221', 'p@])') + user_ID + ',\x22type\x22:\x221\x22,\x22time\x22:' + _0x2a715c + _0x1d46('‫222', '$sOJ') + (dwsj_inc += 0x1) + '}');
                            title = '签到';
                          }
                        }
                        if (_0x3ccd9c) {
                          if (_0x9ff697) {
                            await _0x1570d6[_0x1d46('‫223', 'l29#')](useItem, _0x1d46('‫224', 'tgxE'), _0x1570d6[_0x1d46('‮225', 'C2s5')]);
                            await $[_0x1d46('‮212', 'e1n#')](_0x1570d6[_0x1d46('‮226', 'cn7I')](Delayed));
                          }
                        }
                      } else {
                        console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫227', 's*%j')] + _0x1d46('‫228', 'rv%a') + _0x7d3b7b + _0x1d46('‫229', 'GUfc') + _0xacafe6 + _0x1d46('‫22a', '#D]i') + _0x509418 + _0x1d46('‮22b', 'V7UC') + _0x15ea5e + _0x1d46('‫22c', '[B^s') + _0x9ff697 + _0x1d46('‮22d', 'SbG2') + _0xccd01c + _0x1d46('‮22e', '[B^s') + _0x44fdb7 + _0x1d46('‮22f', 'Z2%O') + _0x5931fc + _0x1d46('‮1d0', '3b]z') + _0x5b44e1 + _0x1d46('‮230', '[B^s') + _0x418264);
                        await $['wait'](_0x1570d6['xEstF'](Delayed));
                        await _0x1570d6[_0x1d46('‫231', 'gAx]')](rollPoint);
                      }
                    } else {
                      if (_0x1570d6[_0x1d46('‫232', 'S#r1')](_0x1570d6['cYIOD'], _0x1570d6[_0x1d46('‫233', 'V7UC')])) {
                        console[_0x1d46('‮234', 'x7C6')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮109', 'SbG2')] + _0x1d46('‮1ca', 'V7UC') + _0x7d3b7b + _0x1d46('‫1cb', 'o7GN') + _0xacafe6 + '\x0a---道具数量:压路机：' + _0x509418 + _0x1d46('‮235', '(FS$') + _0x15ea5e + _0x1d46('‫236', 'gAx]') + _0x9ff697 + '|自定义骰子：' + _0xccd01c + '\x0a---建筑状态位置：着火:' + _0x44fdb7 + _0x1d46('‫237', 'ns@I') + _0x5931fc + _0x1d46('‮238', 'l29#') + _0x5b44e1 + '|损坏建筑:' + _0x418264);
                        await $[_0x1d46('‫239', 'lXIT')](_0x1570d6[_0x1d46('‮23a', 'dz8^')](Delayed));
                        await _0x1570d6[_0x1d46('‮23b', 'tgxE')](rollPoint);
                      } else {
                        console[_0x1d46('‫12e', 'l29#')](_0x1d46('‫187', 'x7C6') + $['index'] + '\x20用户城市信息】:\x20网络请求失败');
                        subTitle += _0x1d46('‫f3', 'V4Vn') + $[_0x1d46('‫1c9', 'C2s5')] + _0x1d46('‫23c', 'cn7I');
                      }
                    }
                  } else {
                    let _0x30a328 = dwsj_variable[_0x1d46('‮30', 'V7UC')]['user_data'][_0x1d46('‫23d', 'dz8^')];
                    for (let _0x354d43 = 0x0; _0x5d4e5c[_0x1d46('‮23e', 'FpVB')](_0x354d43, _0x30a328); _0x354d43++) {
                      data_config[_0x1d46('‫23f', 'W@rB')]({
                        'ID': dwsj_variable[_0x1d46('‮240', '#D]i')]['user_data'][_0x354d43][_0x1d46('‫241', 'GUfc')],
                        'action': 0x0,
                        'worship': 0x0,
                        'accelerate': 0x0
                      });
                    }
                    let _0x550d12 = JSON[_0x1d46('‫242', 'D2Ss')](data_config);
                    fs[_0x1d46('‮243', 'W@rB')]('./dwsj.config' + variable_num + _0x1d46('‫2', '56)D'), _0x5d4e5c[_0x1d46('‫244', 'S#r1')](_0x5d4e5c[_0x1d46('‮245', '$sOJ')] + _0x550d12, '}'), function (_0x5384bd) {
                      if (_0x5384bd) {
                        console['log'](_0x5384bd);
                      }
                    });
                  }
                } else {
                  if (_0x1570d6['zqLaZ'](_0x1570d6[_0x1d46('‫246', '3hg*')], _0x1570d6[_0x1d46('‫247', 'SbG2')])) {
                    _0x5d4e5c[_0x1d46('‫248', 'W@rB')](_0x2e04ff);
                  } else {
                    console[_0x1d46('‫16', 'S#r1')](_0x1d46('‮249', 'GUfc') + $[_0x1d46('‮24a', 'o7GN')] + '\x20游戏界面】:\x20' + _0x2979a0[_0x1d46('‮1ac', 'rv%a')]);
                  }
                }
              } else {
                let _0x365880 = JSON['parse'](_0xe93206);
                if (_0x5d4e5c[_0x1d46('‮24b', 'HtHt')](_0x365880['code'], 0x1)) {
                  console['log'](_0x1d46('‫24c', '$sOJ') + $[_0x1d46('‮24d', 'cn7I')] + _0x1d46('‫24e', 'HOs&') + _0x365880[_0x1d46('‮24f', 'C2s5')]);
                } else {
                  console['log'](_0x1d46('‫250', 'jo2@') + $[_0x1d46('‫1c9', 'C2s5')] + _0x1d46('‮251', 'CLO(') + _0x365880[_0x1d46('‮252', '#M&M')]);
                }
              }
            }
          }
        } catch (_0x3ebd09) {
          if (_0x1570d6[_0x1d46('‮253', '&Xo7')]('WSUed', _0x1570d6[_0x1d46('‫254', '$sOJ')])) {
            console[_0x1d46('‫83', 'ck!A')](_0x3ebd09, _0x5e6fcf);
          } else {
            console['log'](_0x3ebd09, _0x5e6fcf);
          }
        } finally {
          _0x1570d6[_0x1d46('‫255', 'x7C6')](_0x2e04ff);
        }
      });
    }
  });
}

function buyItem(_0x5207da) {
  var _0x56e1d4 = {
    'oDAhh': function (_0x35709c, _0x339d9a) {
      return _0x35709c !== _0x339d9a;
    },
    'cPAgT': _0x1d46('‮256', 's*%j'),
    'RfArZ': _0x1d46('‫257', 'rv%a'),
    'cwmNi': function (_0x27da56, _0x5e229b) {
      return _0x27da56 == _0x5e229b;
    },
    'RdRbr': function (_0x1a215a, _0x5ce4f7) {
      return _0x1a215a !== _0x5ce4f7;
    },
    'TAVpv': _0x1d46('‫258', '#M&M'),
    'iYhIm': function (_0x2b351b, _0x23df13) {
      return _0x2b351b(_0x23df13);
    }
  };
  let _0x25f00e = new Date()[_0x1d46('‮259', 'gAx]')]();
  let _0x396fbd = _0x56e1d4[_0x1d46('‫25a', 'SbG2')](RSA_encryption, '{\x22uid\x22:' + user_ID + ',\x22id\x22:' + _0x5207da + _0x1d46('‮25b', 'SbG2') + _0x25f00e + _0x1d46('‫25c', 'sTrt') + (dwsj_inc += 0x1) + '}');
  let _0x4a58b2 = Post_request(_0x1d46('‫25d', '3b]z'), _0x396fbd);
  return new Promise((_0x29a11f, _0x137cf7) => {
    var _0xd2a24c = {
      'NbEeG': function (_0x75015, _0x3d8e87) {
        return _0x56e1d4[_0x1d46('‫25e', 'gAx]')](_0x75015, _0x3d8e87);
      },
      'rCHvd': _0x56e1d4[_0x1d46('‫25f', 'rO$q')],
      'oQMpl': _0x56e1d4['RfArZ'],
      'RmbJg': _0x1d46('‫260', 'ck!A'),
      'cbFXN': function (_0x11beef, _0x414b2e) {
        return _0x11beef === _0x414b2e;
      },
      'TPXuh': _0x1d46('‫261', 'rv%a'),
      'VflHB': function (_0x623c73, _0xfae8e7) {
        return _0x56e1d4[_0x1d46('‫262', '[B^s')](_0x623c73, _0xfae8e7);
      },
      'RGajb': function (_0x41255b) {
        return _0x41255b();
      },
      'mkwyh': function (_0x4f7c05) {
        return _0x4f7c05();
      }
    };
    if (_0x56e1d4[_0x1d46('‫263', 'l29#')](_0x56e1d4['TAVpv'], 'XDhKv')) {
      $[_0x1d46('‮264', 'r[uN')](_0x4a58b2, async (_0x3b048f, _0x311a94, _0x4231b2) => {
        if (_0xd2a24c['NbEeG'](_0xd2a24c[_0x1d46('‫265', 'tgxE')], _0x1d46('‫266', 'S#r1'))) {
          console[_0x1d46('‮267', 'GUfc')](_0x1d46('‮268', '8wGO') + $['index'] + '\x20' + title + _0x1d46('‮269', 'zCZ6'));
        } else {
          try {
            if (_0xd2a24c[_0x1d46('‮26a', '3hg*')](_0xd2a24c[_0x1d46('‫26b', 'ck!A')], _0xd2a24c['RmbJg'])) {
              if (_0x3b048f) {
                if (_0xd2a24c['cbFXN'](_0xd2a24c['TPXuh'], _0x1d46('‮26c', 'FpVB'))) {
                  console[_0x1d46('‫f0', '4k%d')](e, _0x311a94);
                } else {
                  console['log'](_0x1d46('‮26d', 'r[uN') + $[_0x1d46('‮cb', '$sOJ')] + _0x1d46('‫26e', 'sTrt'));
                  subTitle += _0x1d46('‫108', '#D]i') + $['index'] + _0x1d46('‮26f', '&[cF');
                }
              } else {
                let _0x315872 = JSON['parse'](_0x4231b2);
                if (_0xd2a24c[_0x1d46('‮270', 'GUfc')](_0x315872[_0x1d46('‮271', 'x7C6')], 0x1)) {
                  console[_0x1d46('‮272', '#D]i')](_0x1d46('‮273', 'o7GN') + $[_0x1d46('‫11f', 'tgxE')] + '\x20购买道具】:\x20购买道具编号:' + _0x5207da + _0x1d46('‫274', 'e1n#') + _0x315872[_0x1d46('‮275', '&Xo7')][_0x1d46('‮276', 'gAx]')][_0x1d46('‫277', 'tgxE')]['gold'] + '金币');
                  await $[_0x1d46('‮d6', '$sOJ')](_0xd2a24c['RGajb'](Delayed));
                  await _0xd2a24c[_0x1d46('‫278', 'sTrt')](entryGame);
                } else {
                  console['log'](_0x1d46('‫24c', '$sOJ') + $[_0x1d46('‫c0', 'l29#')] + _0x1d46('‮279', '8wGO') + _0x315872[_0x1d46('‫27a', 'GUfc')]);
                  await $[_0x1d46('‮27b', 'Z2%O')](Delayed());
                  await rollPoint();
                }
              }
            } else {
              console[_0x1d46('‮65', '3Ac7')](_0x1d46('‫187', 'x7C6') + $['index'] + _0x1d46('‫27c', '(FS$'));
              subTitle += _0x1d46('‫186', 'HOs&') + $[_0x1d46('‫1d2', 'D2Ss')] + '\x20升级建筑】:\x20网络请求失败';
            }
          } catch (_0x3a7450) {
            console['log'](_0x3a7450, _0x311a94);
          } finally {
            _0x29a11f();
          }
        }
      });
    } else {
      console['log'](e, response);
    }
  });
}

function addNewBuilding() {
  var _0x3f9cc6 = {
    'IGaXX': function (_0x3ed044) {
      return _0x3ed044();
    },
    'UiemE': function (_0x5f1959) {
      return _0x5f1959();
    },
    'TIFKX': 'WRPUl',
    'iXKpt': function (_0x226c0f, _0x4929ab) {
      return _0x226c0f !== _0x4929ab;
    },
    'twaof': 'qxKEc',
    'OdsdA': _0x1d46('‮27d', 'gAx]'),
    'mzCAD': function (_0x2e4d76, _0x22c2e2) {
      return _0x2e4d76 == _0x22c2e2;
    },
    'ocHBk': 'PgBVS',
    'knXfG': function (_0x39ea21, _0x418bf3) {
      return _0x39ea21 === _0x418bf3;
    },
    'OwYNY': _0x1d46('‫27e', 'D2Ss'),
    'fGRvI': function (_0x750cee, _0x4e20d7) {
      return _0x750cee * _0x4e20d7;
    },
    'lyuCB': _0x1d46('‫27f', 'w7ja'),
    'BJQna': function (_0xa3851, _0x19139a) {
      return _0xa3851(_0x19139a);
    },
    'xvKTu': function (_0x23d553, _0x3c03ef, _0x51ed81) {
      return _0x23d553(_0x3c03ef, _0x51ed81);
    }
  };
  let _0x4e77a5 = new Date()[_0x1d46('‮280', '4$Qj')]();
  let _0x45a582 = _0x3f9cc6[_0x1d46('‮281', '$sOJ')](RSA_encryption, _0x1d46('‫fe', 'HOs&') + user_ID + _0x1d46('‮282', 'w7ja') + _0x4e77a5 + ',\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
  let _0x45e52a = _0x3f9cc6[_0x1d46('‮283', 'D2Ss')](Post_request, _0x1d46('‫284', 'rv%a'), _0x45a582);
  return new Promise((_0x5ee716, _0xb0d78) => {
    var _0x14bb5b = {
      'TlIXd': function (_0x14e7f6, _0xac2535) {
        return _0x3f9cc6[_0x1d46('‫285', '3b]z')](_0x14e7f6, _0xac2535);
      }
    };
    if (_0x3f9cc6[_0x1d46('‫286', 'x7C6')](_0x3f9cc6[_0x1d46('‫287', 'CLO(')], _0x1d46('‫288', 'w7ja'))) {
      $[_0x1d46('‫289', 'S#r1')](_0x45e52a, async (_0x2df87d, _0x503dfa, _0x1bd45e) => {
        var _0x5a3fd8 = {
          'ZSQeQ': function (_0x5a0f2c) {
            return _0x3f9cc6[_0x1d46('‫28a', 'ck!A')](_0x5a0f2c);
          },
          'giodl': function (_0x3b6234) {
            return _0x3f9cc6[_0x1d46('‫28b', '#D]i')](_0x3b6234);
          }
        };
        try {
          if (_0x3f9cc6[_0x1d46('‫28c', 'o7GN')] !== _0x1d46('‫28d', '#D]i')) {
            return Delayed_value = _0x14bb5b[_0x1d46('‫28e', 'CLO(')](dwsj_delayed, 0x3e8);
          } else {
            if (_0x2df87d) {
              if (_0x3f9cc6['iXKpt'](_0x3f9cc6[_0x1d46('‮28f', 'KBVx')], _0x3f9cc6['OdsdA'])) {
                console['log'](_0x1d46('‮105', 'Z2%O') + $['index'] + _0x1d46('‫290', 'p@])'));
                subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮24d', 'cn7I')] + _0x1d46('‮291', 'lXIT');
              } else {
                _0x5a3fd8[_0x1d46('‫292', 'ck!A')](_0x5ee716);
              }
            } else {
              let _0x1d2ac1 = JSON[_0x1d46('‮293', '4$Qj')](_0x1bd45e);
              if (_0x3f9cc6[_0x1d46('‫294', 'Z2%O')](_0x1d2ac1[_0x1d46('‫295', '&[cF')], 0x1)) {
                console[_0x1d46('‫296', 'CLO(')](_0x1d46('‫297', 'cn7I') + $['index'] + _0x1d46('‮298', 'D2Ss') + _0x1d2ac1[_0x1d46('‮299', 'r[uN')][_0x1d46('‮29a', '3Ac7')][_0x1d46('‫29b', 's*%j')][_0x1d46('‮29c', 'x7C6')] + _0x1d46('‮29d', 'x7C6'));
              } else {
                console[_0x1d46('‫c9', '&[cF')](_0x1d46('‫29e', '(FS$') + $[_0x1d46('‮109', 'SbG2')] + _0x1d46('‫29f', 'C2s5') + _0x1d2ac1[_0x1d46('‮2a0', 'CLO(')]);
              }
            }
          }
        } catch (_0xff0bab) {
          if (_0x3f9cc6[_0x1d46('‮2a1', 'gAx]')](_0x1d46('‫2a2', 'phSI'), _0x3f9cc6[_0x1d46('‮2a3', 'V7UC')])) {
            console[_0x1d46('‫2a4', 'rO$q')](_0xff0bab, _0x503dfa);
          } else {
            console[_0x1d46('‮2a5', 'W@rB')](_0xff0bab, _0x503dfa);
          }
        } finally {
          if (_0x3f9cc6[_0x1d46('‫2a6', '$sOJ')](_0x3f9cc6[_0x1d46('‮2a7', 'zCZ6')], _0x3f9cc6[_0x1d46('‫2a8', 'dz8^')])) {
            _0x5ee716();
          } else {
            _0x5a3fd8[_0x1d46('‮2a9', '3Ac7')](_0x5ee716);
          }
        }
      });
    } else {
      _0x3f9cc6[_0x1d46('‫2aa', 'phSI')](_0x5ee716);
    }
  });
}

function getBuildingEarn() {
  var _0x4865d2 = {
    'ebPAe': function (_0xa9e778) {
      return _0xa9e778();
    },
    'RWAon': _0x1d46('‮2ab', 'FpVB'),
    'ENkYY': 'MBWKd',
    'ShkcZ': _0x1d46('‮2ac', 'tgxE'),
    'CjqGz': function (_0x2b8693, _0x563dd9) {
      return _0x2b8693 == _0x563dd9;
    },
    'iJoVe': function (_0x1d779f, _0x52a5a6) {
      return _0x1d779f == _0x52a5a6;
    },
    'Zroch': function (_0x660d42, _0x1bd4c5) {
      return _0x660d42 == _0x1bd4c5;
    },
    'tjFeP': _0x1d46('‫2ad', 'S#r1'),
    'mXgsG': function (_0x4c59c2) {
      return _0x4c59c2();
    },
    'axHNF': function (_0x335e17, _0x45566e) {
      return _0x335e17 == _0x45566e;
    },
    'Shdfz': function (_0x4397d0, _0x14a9b7) {
      return _0x4397d0 !== _0x14a9b7;
    },
    'faFOz': 'WXtSL',
    'nnJLD': function (_0x59cba6, _0xf39077) {
      return _0x59cba6 === _0xf39077;
    },
    'LqOlP': _0x1d46('‮2ae', 'C2s5'),
    'fIKvF': function (_0x9d57e7, _0x4ca805) {
      return _0x9d57e7 !== _0x4ca805;
    },
    'pXeYq': _0x1d46('‮2af', 'V7UC'),
    'klzrl': function (_0x3f770a) {
      return _0x3f770a();
    },
    'HdhzU': function (_0x211f25, _0x5ee844) {
      return _0x211f25 == _0x5ee844;
    },
    'GDOcT': _0x1d46('‫2b0', 'rv%a'),
    'CwKBz': function (_0x15d2dc, _0x317aee) {
      return _0x15d2dc(_0x317aee);
    }
  };
  let _0x1fa9a2 = new Date()[_0x1d46('‫2b1', '3hg*')]();
  let _0x45c95a = _0x4865d2['CwKBz'](RSA_encryption, '{\x22uid\x22:' + user_ID + _0x1d46('‮2b2', 'sTrt') + _0x1fa9a2 + _0x1d46('‮2b3', '[B^s') + (dwsj_inc += 0x1) + '}');
  let _0x2805c4 = Post_request(_0x1d46('‫2b4', 'HtHt'), _0x45c95a);
  return new Promise((_0x70a65e, _0xfbfa9b) => {
    var _0x153583 = {
      'gnCFK': function (_0x25aa27) {
        return _0x4865d2['klzrl'](_0x25aa27);
      },
      'peYFD': function (_0x4b0730, _0x51da5f) {
        return _0x4865d2['HdhzU'](_0x4b0730, _0x51da5f);
      }
    };
    if (_0x4865d2['GDOcT'] !== _0x1d46('‮2b5', '3b]z')) {
      $[_0x1d46('‫2b6', '4k%d')](_0x2805c4, async (_0x218a96, _0x4bafa6, _0x17596e) => {
        var _0x3d01c7 = {
          'IUbML': function (_0x5d956c) {
            return _0x4865d2['ebPAe'](_0x5d956c);
          }
        };
        try {
          if (_0x4865d2[_0x1d46('‮2b7', '4$Qj')] !== _0x4865d2[_0x1d46('‫2b8', 'r[uN')]) {
            if (_0x218a96) {
              console[_0x1d46('‮2b9', 'HOs&')](_0x1d46('‮105', 'Z2%O') + $[_0x1d46('‫115', 'sTrt')] + '\x20领取建筑收益】:\x20网络请求失败');
              subTitle += _0x1d46('‫130', 'sTrt') + $['index'] + _0x1d46('‫2ba', 'x7C6');
            } else {
              if (_0x1d46('‮2bb', 'zCZ6') !== _0x4865d2['ShkcZ']) {
                let _0x515f09 = JSON['parse'](_0x17596e);
                if (_0x4865d2['CjqGz'](_0x515f09[_0x1d46('‮2bc', '$sOJ')], 0x1)) {
                  console[_0x1d46('‮104', '&Xo7')](_0x1d46('‮bf', '&Xo7') + $[_0x1d46('‫2bd', 'HtHt')] + '\x20领取建筑收益】:\x20获得\x20' + _0x515f09['data'][_0x1d46('‫2be', 'D2Ss')][_0x1d46('‫277', 'tgxE')][_0x1d46('‫2bf', '3b]z')] + '\x20金币');
                } else if (_0x4865d2[_0x1d46('‫2c0', 'ck!A')](_0x515f09[_0x1d46('‮2c1', '3aUr')], 0x4bf) || _0x4865d2['Zroch'](_0x515f09[_0x1d46('‮2c2', 'V4Vn')], _0x4865d2['tjFeP'])) {
                  if (dwsj_build) {
                    await $[_0x1d46('‫20a', 'KBVx')](Delayed());
                    await _0x4865d2[_0x1d46('‮2c3', 'Z2%O')](addNewBuilding);
                  }
                } else if (_0x4865d2[_0x1d46('‮2c4', 'HtHt')](_0x515f09['code'], 0x517)) {
                  if (_0x4865d2['Shdfz'](_0x1d46('‫2c5', 'HtHt'), _0x4865d2['faFOz'])) {
                    _0x3d01c7['IUbML'](_0x70a65e);
                  } else {
                    await $[_0x1d46('‫2c6', '&Xo7')](_0x4865d2[_0x1d46('‮2c7', 'HOs&')](Delayed));
                    await _0x4865d2[_0x1d46('‮2c8', 'KBVx')](rollPoint_6);
                  }
                } else if (_0x515f09['code'] == 0x57e) {
                  console[_0x1d46('‮2c9', '56)D')]('\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‮2ca', '&Xo7') + _0x515f09[_0x1d46('‮2cb', '3Ac7')]);
                  subTitle += _0x1d46('‮249', 'GUfc') + $[_0x1d46('‮24a', 'o7GN')] + '\x20建筑物状态】:\x20已有建筑物着火';
                } else {
                  if (_0x4865d2[_0x1d46('‮2cc', '$sOJ')](_0x4865d2[_0x1d46('‮2cd', '$sOJ')], _0x1d46('‫2ce', 'gAx]'))) {
                    order = _0x1d46('‮2cf', 'lXIT') + list[_0x1d46('‮2d0', 'HtHt')] + '：' + list[_0x1d46('‮2d1', 'HOs&')];
                  } else {
                    console[_0x1d46('‮6f', 'SbG2')](_0x1d46('‫29e', '(FS$') + $[_0x1d46('‮72', 'gAx]')] + _0x1d46('‫2d2', 'V7UC') + _0x515f09[_0x1d46('‮1ac', 'rv%a')]);
                  }
                }
              } else {
                _0x153583[_0x1d46('‮2d3', 'FpVB')](_0x70a65e);
              }
            }
          } else {
            if (_0x218a96) {
              console['log'](_0x1d46('‫2d4', 'V7UC') + $['index'] + _0x1d46('‫2d5', 'gAx]'));
              subTitle += _0x1d46('‫124', 'W@rB') + $[_0x1d46('‫1b7', '3aUr')] + _0x1d46('‫2d5', 'gAx]');
            } else {}
          }
        } catch (_0xa41392) {
          if (_0x4865d2['fIKvF'](_0x4865d2[_0x1d46('‮2d6', 'rO$q')], 'rSZsn')) {
            console[_0x1d46('‮10e', 'dz8^')](_0xa41392, _0x4bafa6);
          } else {
            main_user_account = dwsj_Address;
          }
        } finally {
          _0x4865d2[_0x1d46('‫2d7', 'S#r1')](_0x70a65e);
        }
      });
    } else {
      let _0x256429 = JSON[_0x1d46('‫2d8', 'l29#')](data);
      if (_0x153583[_0x1d46('‫2d9', 'gAx]')](_0x256429['code'], 0x1)) {
        nick = _0x256429[_0x1d46('‫81', 'D2Ss')][_0x1d46('‫2da', '(FS$')][_0x1d46('‮2db', 'r[uN')];
        userCityLevel = _0x256429[_0x1d46('‫2dc', 'Z2%O')]['userInfo']['userCityLevel'];
      } else {
        console[_0x1d46('‮2dd', 'lXIT')](_0x1d46('‫2de', 'tgxE') + $[_0x1d46('‫e5', 'phSI')] + _0x1d46('‮2df', 'Z2%O') + _0x256429['message']);
      }
    }
  });
}

function rollPoint_6() {
  var _0x11d499 = {
    'tNhjD': function (_0x4395b9, _0x105d34) {
      return _0x4395b9 === _0x105d34;
    },
    'yzDpw': 'acDar',
    'oaTuq': function (_0x12399f, _0xec2848) {
      return _0x12399f !== _0xec2848;
    },
    'fYuqM': _0x1d46('‫2e0', 'jo2@'),
    'EfhTJ': function (_0x20efc4, _0x34adac) {
      return _0x20efc4 + _0x34adac;
    },
    'suEpY': function (_0x2721c5, _0x99ece0) {
      return _0x2721c5 == _0x99ece0;
    },
    'muaRw': '2|4|0|1|3',
    'VVaqX': function (_0xdd943c) {
      return _0xdd943c();
    },
    'HTCnr': function (_0x4457f3) {
      return _0x4457f3();
    },
    'StBaw': function (_0x561ad3, _0x32ce60) {
      return _0x561ad3(_0x32ce60);
    },
    'nzgEa': _0x1d46('‫2e1', '56)D'),
    'MGnMt': _0x1d46('‮2e2', 'gAx]'),
    'gVrkY': _0x1d46('‮2e3', 'HOs&'),
    'qJGiC': _0x1d46('‫fc', '4$Qj'),
    'yYfXN': function (_0x711b21, _0x5c6e2d, _0x7ac884) {
      return _0x711b21(_0x5c6e2d, _0x7ac884);
    }
  };
  let _0x592c3a = new Date()[_0x1d46('‮2e4', 'ns@I')]();
  let _0x5a8b1a = RSA_encryption(_0x1d46('‮2e5', '#M&M') + user_ID + _0x1d46('‮2e6', 'Z2%O') + _0x592c3a + _0x1d46('‮2e7', '#M&M') + (dwsj_inc += 0x1) + '}');
  let _0x3ddd29 = _0x11d499[_0x1d46('‫2e8', 'ns@I')](Post_request, _0x1d46('‮2e9', 'rO$q'), _0x5a8b1a);
  return new Promise((_0x4e2097, _0x4ac9e6) => {
    var _0x5ad9f3 = {
      'giVRP': _0x11d499[_0x1d46('‮2ea', 'lXIT')]
    };
    $[_0x1d46('‫2eb', 'CLO(')](_0x3ddd29, async (_0x34737e, _0x45b2d4, _0x16843e) => {
      if (_0x11d499[_0x1d46('‮2ec', 'D2Ss')](_0x11d499[_0x1d46('‫2ed', 'tgxE')], _0x11d499[_0x1d46('‮2ee', 'S#r1')])) {
        try {
          if (_0x11d499['oaTuq'](_0x11d499['fYuqM'], 'TNzZH')) {
            if (_0x34737e) {
              console[_0x1d46('‮2ef', 'w7ja')](_0x1d46('‫2f0', '3Ac7') + $[_0x1d46('‮1f6', '&Xo7')] + _0x1d46('‮2f1', 'jo2@'));
              subTitle += '\x0a【soy脚本提示---账号\x20' + $['index'] + '\x20丢骰子】:\x20网络请求失败';
              console[_0x1d46('‮2f2', '(FS$')](_0x11d499[_0x1d46('‫2f3', 'rO$q')](_0x34737e, '\x0a'));
            } else {
              let _0x552c6c = JSON[_0x1d46('‫2f4', 'KBVx')](_0x16843e);
              if (_0x11d499['suEpY'](_0x552c6c[_0x1d46('‫2f5', '#M&M')], 0x1)) {
                var _0x12f14b = _0x11d499['muaRw']['split']('|'),
                  _0x1c384b = 0x0;
                while (!![]) {
                  switch (_0x12f14b[_0x1c384b++]) {
                    case '0':
                      await addGoodsBuff();
                      continue;
                    case '1':
                      await $[_0x1d46('‮2f6', 'phSI')](_0x11d499['VVaqX'](Delayed));
                      continue;
                    case '2':
                      console['log'](_0x1d46('‫2f0', '3Ac7') + $[_0x1d46('‫2f7', 'V7UC')] + _0x1d46('‮2f8', 'CLO(') + _0x552c6c[_0x1d46('‮8f', 'rO$q')][_0x1d46('‮2f9', 'GUfc')][_0x1d46('‫2fa', 'rO$q')] + '\x20金币');
                      continue;
                    case '3':
                      await getBuildingEarn();
                      continue;
                    case '4':
                      await $['wait'](_0x11d499[_0x1d46('‮2fb', 'KBVx')](Delayed));
                      continue;
                  }
                  break;
                }
              } else if (_0x552c6c['code'] == 0x515) {
                console[_0x1d46('‮2fc', 'cn7I')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮2fd', 'lXIT')] + '\x20丢6点骰子】:\x20' + _0x552c6c[_0x1d46('‫2fe', 'Z2%O')]);
                await $[_0x1d46('‮212', 'e1n#')](_0x11d499['HTCnr'](Delayed));
                await _0x11d499['StBaw'](getAdReward, _0x11d499[_0x1d46('‫2ff', '&[cF')]);
              } else {
                console[_0x1d46('‮6f', 'SbG2')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮109', 'SbG2')] + '\x20丢6点骰子】:\x20' + _0x552c6c['message']);
              }
            }
          } else {
            preservation = config_data[_0x1d46('‮300', 'rv%a')](/action\":1/g, _0x5ad9f3[_0x1d46('‫301', 'CLO(')]);
            fs[_0x1d46('‮302', 'dz8^')]('./dwsj.config' + variable_num + _0x1d46('‫303', '&Xo7'), 'module.exports=' + preservation);
          }
        } catch (_0xeabf50) {
          if (_0x11d499[_0x1d46('‮304', '[B^s')](_0x11d499['MGnMt'], _0x11d499[_0x1d46('‮305', 'CLO(')])) {
            console[_0x1d46('‮112', 'D2Ss')](_0xeabf50, _0x45b2d4);
          } else {
            console[_0x1d46('‫306', 'V4Vn')](_0xeabf50, _0x45b2d4);
          }
        } finally {
          _0x11d499[_0x1d46('‫307', 'V4Vn')](_0x4e2097);
        }
      } else {
        data_config[_0x1d46('‮308', 'rv%a')]({
          'ID': dwsj_variable[_0x1d46('‮309', 'GUfc')][_0x1d46('‫30a', 'FpVB')][num]['user_ID'],
          'action': 0x0,
          'worship': 0x0,
          'accelerate': 0x0
        });
      }
    });
  });
}

function buildingLevelUp() {
  var _0xbd4608 = {
    'UnYjr': function (_0x4df40a, _0x2282f4) {
      return _0x4df40a == _0x2282f4;
    },
    'yJMxy': function (_0x48d2ef, _0x12d4b0) {
      return _0x48d2ef == _0x12d4b0;
    },
    'BdXVx': function (_0x542371, _0x384c9e) {
      return _0x542371 !== _0x384c9e;
    },
    'Rtgtu': 'MxUqu',
    'NpUUU': function (_0xe0814) {
      return _0xe0814();
    },
    'gRakQ': function (_0x235c31) {
      return _0x235c31();
    },
    'htfdv': function (_0x433808, _0x5695f6) {
      return _0x433808 !== _0x5695f6;
    },
    'yXCGZ': 'hasnx',
    'fADEX': _0x1d46('‫30b', 'V4Vn'),
    'KbxGP': function (_0x56cf0b, _0x438942) {
      return _0x56cf0b(_0x438942);
    },
    'IJQRA': function (_0x2a2eaa, _0x5bcf91, _0x1b16e9) {
      return _0x2a2eaa(_0x5bcf91, _0x1b16e9);
    }
  };
  let _0x2a3452 = new Date()[_0x1d46('‮30c', 's*%j')]();
  let _0x256e7d = _0xbd4608['KbxGP'](RSA_encryption, '{\x22uid\x22:' + user_ID + _0x1d46('‮30d', 'dz8^') + _0x2a3452 + _0x1d46('‮30e', 'p@])') + (dwsj_inc += 0x1) + '}');
  let _0xb5617d = _0xbd4608[_0x1d46('‫30f', '3hg*')](Post_request, 'buildingLevelUp', _0x256e7d);
  return new Promise((_0x6ab378, _0x35ef68) => {
    if (_0xbd4608[_0x1d46('‮310', 'lXIT')](_0xbd4608[_0x1d46('‫311', 'cn7I')], _0xbd4608[_0x1d46('‫312', '&[cF')])) {
      $['post'](_0xb5617d, async (_0x401579, _0x22e96a, _0x3fcb74) => {
        try {
          if (_0x401579) {
            console['log'](_0x1d46('‫f3', 'V4Vn') + $['index'] + _0x1d46('‫313', 'SbG2'));
            subTitle += _0x1d46('‮66', 'ck!A') + $[_0x1d46('‫1d2', 'D2Ss')] + '\x20升级建筑】:\x20网络请求失败';
          } else {
            let _0x24d574 = JSON['parse'](_0x3fcb74);
            if (_0xbd4608[_0x1d46('‫314', 'ck!A')](_0x24d574['code'], 0x1)) {
              console[_0x1d46('‫315', 'p@])')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮316', 'p@])')] + _0x1d46('‫317', 'cn7I') + _0x24d574[_0x1d46('‫318', 'p@])')][_0x1d46('‫319', 'o7GN')][_0x1d46('‮31a', 'S#r1')][_0x1d46('‮31b', 'zCZ6')] + _0x1d46('‫31c', 'l29#'));
            } else if (_0xbd4608[_0x1d46('‫31d', 'FpVB')](_0x24d574[_0x1d46('‮31e', '56)D')], 0x4bf) || _0xbd4608[_0x1d46('‫31f', 'e1n#')](_0x24d574['message'], '此位置没有建筑')) {
              if (dwsj_build) {
                if (_0xbd4608[_0x1d46('‫320', '&[cF')](_0xbd4608[_0x1d46('‮321', 'ck!A')], _0xbd4608[_0x1d46('‮322', '(FS$')])) {
                  _0x6ab378();
                } else {
                  await $[_0x1d46('‮2f6', 'phSI')](_0xbd4608[_0x1d46('‫323', 'Z2%O')](Delayed));
                  await _0xbd4608['NpUUU'](addNewBuilding);
                }
              }
            } else {
              console[_0x1d46('‫a0', '3b]z')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮72', 'gAx]')] + _0x1d46('‫324', '4$Qj') + _0x24d574[_0x1d46('‫325', 'x7C6')]);
            }
          }
        } catch (_0x1b31b5) {
          console[_0x1d46('‮2b9', 'HOs&')](_0x1b31b5, _0x22e96a);
        } finally {
          _0xbd4608[_0x1d46('‮326', 'p@])')](_0x6ab378);
        }
      });
    } else {
      _0xbd4608[_0x1d46('‮327', 'FpVB')](_0x6ab378);
    }
  });
}

function addGoodsBuff() {
  var _0x25768b = {
    'rPCgJ': function (_0x1a797a, _0x1a8ede) {
      return _0x1a797a === _0x1a8ede;
    },
    'qPAts': _0x1d46('‮328', 'rv%a'),
    'SzcVw': function (_0x14fbb0) {
      return _0x14fbb0();
    },
    'QUrrE': function (_0x126b51, _0x691cea, _0x4f5dfb) {
      return _0x126b51(_0x691cea, _0x4f5dfb);
    }
  };
  let _0x22f5ac = new Date()[_0x1d46('‫2b1', '3hg*')]();
  let _0x340169 = RSA_encryption(_0x1d46('‫329', 'KBVx') + user_ID + _0x1d46('‮32a', '4k%d') + _0x22f5ac + ',\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
  let _0x51d8e9 = _0x25768b[_0x1d46('‫32b', 'tgxE')](Post_request, 'addGoodsBuff', _0x340169);
  return new Promise((_0x451bbb, _0x34b61e) => {
    $[_0x1d46('‮32c', '&[cF')](_0x51d8e9, async (_0x1d4fac, _0x25020a, _0x16307c) => {
      try {
        if (_0x1d4fac) {
          console[_0x1d46('‫119', 'zCZ6')](_0x1d46('‮32d', 'D2Ss') + $['index'] + _0x1d46('‫32e', '56)D'));
          subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫32f', '4k%d')] + _0x1d46('‮330', 'rv%a');
        } else {}
      } catch (_0x437f70) {
        if (_0x25768b[_0x1d46('‫331', 'V4Vn')](_0x25768b[_0x1d46('‫332', 'HOs&')], _0x25768b[_0x1d46('‮333', '#M&M')])) {
          console[_0x1d46('‫16', 'S#r1')](_0x437f70, _0x25020a);
        } else {
          console['log'](_0x1d46('‮10f', '&[cF') + $['index'] + '\x20领取建筑收益】:\x20网络请求失败');
          subTitle += _0x1d46('‮334', 'gAx]') + $['index'] + _0x1d46('‮335', 'cn7I');
        }
      } finally {
        _0x25768b[_0x1d46('‫336', 'x7C6')](_0x451bbb);
      }
    });
  });
}

function UpDone() {
  var _0x32ea3a = {
    'jnOwO': function (_0x232f3d, _0x5f3820) {
      return _0x232f3d === _0x5f3820;
    },
    'pXRjv': function (_0x47c4ff, _0x49f357) {
      return _0x47c4ff === _0x49f357;
    },
    'STDNH': _0x1d46('‮337', 'GUfc'),
    'AXIcr': function (_0xa8cc7d, _0x55b2e0) {
      return _0xa8cc7d !== _0x55b2e0;
    },
    'XUmbO': 'kEmQH',
    'gTsky': 'XIWBg',
    'SPZUi': function (_0x3813b5) {
      return _0x3813b5();
    },
    'SLvDB': function (_0x215baf, _0x52de79, _0x457d26) {
      return _0x215baf(_0x52de79, _0x457d26);
    }
  };
  let _0x6c727a = new Date()['getTime']();
  let _0x8534c0 = RSA_encryption(_0x1d46('‮338', 'FpVB') + user_ID + ',\x22time\x22:' + _0x6c727a + _0x1d46('‮339', 'zCZ6'));
  let _0x355871 = _0x32ea3a[_0x1d46('‫33a', '3b]z')](Post_request, 'buildingLevelUpDone', _0x8534c0);
  return new Promise((_0x1da4d7, _0x5ec52d) => {
    $[_0x1d46('‮264', 'r[uN')](_0x355871, async (_0x2080cf, _0x388319, _0x2f1d58) => {
      var _0x2f513c = {
        'jyqFV': function (_0x39b344, _0x5e56e5) {
          return _0x39b344 + _0x5e56e5;
        }
      };
      if (_0x32ea3a[_0x1d46('‮33b', 'lXIT')]('ZPnbM', _0x1d46('‮33c', '$sOJ'))) {
        console[_0x1d46('‫33d', 'tgxE')](e, _0x388319);
      } else {
        try {
          if (_0x32ea3a['pXRjv'](_0x32ea3a[_0x1d46('‮33e', 'w7ja')], 'EOlVh')) {
            if (_0x2080cf) {
              if (_0x32ea3a[_0x1d46('‫33f', 'dz8^')](_0x32ea3a[_0x1d46('‮340', 'e1n#')], _0x32ea3a[_0x1d46('‮341', 's*%j')])) {
                console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮342', 'zCZ6')] + _0x1d46('‫343', 'zCZ6'));
                subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮70', 'FpVB')] + _0x1d46('‫344', '3Ac7');
                console[_0x1d46('‫b', '3hg*')](_0x2f513c[_0x1d46('‮345', '$sOJ')](_0x2080cf, '\x0a'));
              } else {
                console[_0x1d46('‫346', 'o7GN')]('\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‫347', 'CLO('));
                subTitle += _0x1d46('‫348', 'w7ja') + $[_0x1d46('‮349', 'W@rB')] + '\x20更新建筑升级】:\x20网络请求失败';
              }
            } else {}
          } else {
            console[_0x1d46('‮2f2', '(FS$')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫c0', 'l29#')] + _0x1d46('‮34a', '3b]z'));
            subTitle += _0x1d46('‫108', '#D]i') + $[_0x1d46('‮349', 'W@rB')] + _0x1d46('‮34b', 'tgxE');
          }
        } catch (_0x3b96fa) {
          if (_0x32ea3a[_0x1d46('‮34c', '3b]z')](_0x32ea3a[_0x1d46('‮34d', 'tgxE')], _0x1d46('‫34e', 'SbG2'))) {
            console[_0x1d46('‫306', 'V4Vn')](_0x3b96fa, _0x388319);
          } else {
            platform = _0x1d46('‮34f', 'phSI') + list['name'] + '：' + list['revenues'];
          }
        } finally {
          _0x32ea3a['SPZUi'](_0x1da4d7);
        }
      }
    });
  });
}

function addRfUid() {
  var _0x541d06 = {
    'sQmCa': function (_0x1dce9b) {
      return _0x1dce9b();
    },
    'UvHif': _0x1d46('‮350', 'phSI'),
    'enWyu': function (_0x4d9a9e, _0x324c53) {
      return _0x4d9a9e === _0x324c53;
    },
    'FZlzp': _0x1d46('‮351', '3Ac7'),
    'mUVaa': function (_0x1e6726, _0x3068d0) {
      return _0x1e6726(_0x3068d0);
    },
    'GAzcy': function (_0x3de1bc, _0x455e2b, _0x4670c8) {
      return _0x3de1bc(_0x455e2b, _0x4670c8);
    }
  };
  let _0x4bc921 = new Date()[_0x1d46('‮352', '3b]z')]();
  let _0x1459f9 = _0x541d06[_0x1d46('‮353', '3hg*')](RSA_encryption, '{\x22rfUid\x22:29999597,\x22uid\x22:' + user_ID + _0x1d46('‮354', '(FS$') + _0x4bc921 + ',\x22inc\x22:1}');
  let _0x363c00 = _0x541d06['GAzcy'](Post_request, 'addRfUid?id=' + user_ID, _0x1459f9);
  return new Promise((_0x364cce, _0x3ae457) => {
    $['post'](_0x363c00, async (_0x4add88, _0x4ad5c9, _0xf10548) => {
      var _0x3584be = {
        'JuiRu': function (_0x4a0441) {
          return _0x541d06['sQmCa'](_0x4a0441);
        }
      };
      try {
        if (_0x4add88) {
          if (_0x541d06[_0x1d46('‮355', 'GUfc')] !== _0x541d06[_0x1d46('‮356', 'l29#')]) {
            _0x3584be[_0x1d46('‫357', 'FpVB')](_0x364cce);
          } else {
            console[_0x1d46('‮358', 'e1n#')](_0x1d46('‮359', 'dz8^') + $[_0x1d46('‮342', 'zCZ6')] + _0x1d46('‮35a', 'lXIT'));
            subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫1ab', 'dz8^')] + '\x20绑定师傅】:\x20网络请求失败';
          }
        } else {}
      } catch (_0x36c148) {
        if (_0x541d06[_0x1d46('‮35b', '3aUr')]('uUDnQ', _0x541d06['FZlzp'])) {
          console['log'](_0x36c148, _0x4ad5c9);
        } else {
          game = _0x1d46('‫35c', '3aUr') + list[_0x1d46('‫35d', 'KBVx')] + '：' + list['revenues'];
        }
      } finally {
        _0x541d06[_0x1d46('‮35e', 'jo2@')](_0x364cce);
      }
    });
  });
}

function Upcity() {
  var _0x41b277 = {
    'dOvWI': _0x1d46('‫35f', '3aUr'),
    'VFfqZ': 'application/json;charset=UTF-8',
    'hZWaN': _0x1d46('‮360', 'tgxE'),
    'oqnHi': 'com.sdw.money.cat',
    'eLPJp': _0x1d46('‫361', 'dz8^'),
    'gLBLn': _0x1d46('‫362', '3b]z'),
    'GkZmH': _0x1d46('‫363', 'ns@I'),
    'WnSSv': 'yYvnj',
    'AnaJv': _0x1d46('‫364', '3b]z'),
    'EvCCe': function (_0x3e9d22) {
      return _0x3e9d22();
    },
    'psraV': function (_0x5690c4, _0x51e341) {
      return _0x5690c4(_0x51e341);
    },
    'nhJLh': function (_0x6409b5, _0x1b62be, _0x1f51a2) {
      return _0x6409b5(_0x1b62be, _0x1f51a2);
    }
  };
  let _0x2b2260 = new Date()['getTime']();
  let _0x45b75f = _0x41b277[_0x1d46('‫365', 'SbG2')](RSA_encryption, '{\x22uid\x22:' + user_ID + _0x1d46('‮354', '(FS$') + _0x2b2260 + _0x1d46('‫366', '&Xo7'));
  let _0x640350 = _0x41b277[_0x1d46('‫367', 'D2Ss')](Post_request, _0x1d46('‮368', 'V7UC'), _0x45b75f);
  return new Promise((_0x4b38e3, _0x4417d8) => {
    var _0x275039 = {
      'POwIc': _0x41b277[_0x1d46('‮369', 'gAx]')],
      'QHdRh': _0x41b277[_0x1d46('‮36a', '3b]z')],
      'QMxvH': _0x1d46('‫36b', '56)D'),
      'uXErw': _0x41b277[_0x1d46('‮36c', 'o7GN')],
      'AbOfg': _0x41b277[_0x1d46('‮36d', '&[cF')],
      'beQqE': 'cross-site',
      'bkRUq': _0x1d46('‮36e', 'x7C6'),
      'XxlvY': _0x41b277[_0x1d46('‮36f', 'Z2%O')],
      'VuoIJ': _0x41b277[_0x1d46('‮370', 'w7ja')],
      'BcRCP': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
      'AAGdR': _0x41b277[_0x1d46('‮371', 'ck!A')],
      'ZhQBu': _0x41b277[_0x1d46('‮372', '&Xo7')],
      'nopCK': _0x41b277[_0x1d46('‫373', '56)D')],
      'Crllm': _0x1d46('‮374', 'HOs&'),
      'XVIkz': function (_0x23780d) {
        return _0x41b277[_0x1d46('‫375', 'ck!A')](_0x23780d);
      }
    };
    $['post'](_0x640350, async (_0x3e6289, _0x59cdfe, _0x39cc4e) => {
      try {
        if (_0x275039[_0x1d46('‮376', 'D2Ss')] === _0x275039[_0x1d46('‫377', 'zCZ6')]) {
          if (_0x3e6289) {
            console[_0x1d46('‮2fc', 'cn7I')](_0x1d46('‫378', 'SbG2') + $[_0x1d46('‮379', '(FS$')] + '\x20更新升级】:\x20网络请求失败');
            subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮cb', '$sOJ')] + _0x1d46('‫37a', '3aUr');
          } else {}
        } else {
          console['log'](_0x1d46('‫f3', 'V4Vn') + $[_0x1d46('‫11f', 'tgxE')] + _0x1d46('‮37b', 'w7ja') + result[_0x1d46('‮ef', 'lXIT')]);
        }
      } catch (_0x9d0c0d) {
        if (_0x275039[_0x1d46('‫37c', 'GUfc')] !== _0x275039[_0x1d46('‫37d', '4k%d')]) {
          console['log'](_0x9d0c0d, _0x59cdfe);
        } else {
          console[_0x1d46('‮104', '&Xo7')](_0x9d0c0d, _0x59cdfe);
        }
      } finally {
        if (_0x1d46('‫37e', 's*%j') === _0x275039[_0x1d46('‮37f', 'V7UC')]) {
          _0x275039[_0x1d46('‮380', '56)D')](_0x4b38e3);
        } else {
          return {
            'url': _0x1d46('‫381', 'e1n#') + url,
            'headers': {
              'Host': 'sdsj.shandw.com',
              'Connection': _0x1d46('‮382', 'tgxE'),
              'Content-Length': _0x45b75f[_0x1d46('‮383', 'V4Vn')],
              'Pragma': _0x275039[_0x1d46('‮384', '#M&M')],
              'Cache-Control': _0x1d46('‮385', '#M&M'),
              'authId': user_ID,
              'Authorization': dwsj_token,
              'User-Agent': dwsj_UA,
              'Content-Type': _0x275039[_0x1d46('‮386', 'ns@I')],
              'Accept': _0x275039[_0x1d46('‫387', 'e1n#')],
              'Origin': _0x275039['uXErw'],
              'X-Requested-With': _0x275039[_0x1d46('‮388', '&Xo7')],
              'Sec-Fetch-Site': _0x275039[_0x1d46('‫389', 'ck!A')],
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Dest': _0x275039[_0x1d46('‫38a', 'sTrt')],
              'Referer': _0x275039['XxlvY'],
              'Accept-Encoding': _0x275039[_0x1d46('‮38b', 'V7UC')],
              'Accept-Language': _0x275039[_0x1d46('‮38c', 'rO$q')]
            },
            'body': _0x45b75f
          };
        }
      }
    });
  });
}

function getMyInfo() {
  var _0x16b090 = {
    'fzdah': function (_0x7b2193, _0x370397) {
      return _0x7b2193 !== _0x370397;
    },
    'QXjzh': _0x1d46('‫38d', '#D]i'),
    'yGRXJ': function (_0x2ba572) {
      return _0x2ba572();
    },
    'iBPZq': function (_0x1f5332, _0x3941b7) {
      return _0x1f5332(_0x3941b7);
    }
  };
  let _0x235150 = new Date()['getTime']();
  let _0x4b9f74 = _0x16b090['iBPZq'](RSA_encryption, _0x1d46('‫38e', 'zCZ6') + user_ID + ',\x22time\x22:' + _0x235150 + ',\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
  let _0x27ab96 = Post_request(_0x1d46('‮38f', 'S#r1'), _0x4b9f74);
  return new Promise((_0x31dcb8, _0xc50833) => {
    var _0x1e4165 = {
      'BSfjm': function (_0x2af2d2, _0x101659) {
        return _0x16b090[_0x1d46('‫390', 'C2s5')](_0x2af2d2, _0x101659);
      },
      'lUdiT': _0x1d46('‫391', 'zCZ6'),
      'yHMHh': _0x16b090[_0x1d46('‫392', 'GUfc')],
      'ildzz': _0x1d46('‫393', '3hg*'),
      'CvAgw': function (_0xda89c0) {
        return _0x16b090[_0x1d46('‫394', 'x7C6')](_0xda89c0);
      }
    };
    $['post'](_0x27ab96, async (_0x871b56, _0x5f1182, _0x373e99) => {
      try {
        if (_0x1e4165[_0x1d46('‮395', '#D]i')](_0x1e4165[_0x1d46('‮396', '56)D')], _0x1d46('‫397', '&Xo7'))) {
          console[_0x1d46('‫398', 'phSI')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮399', '8wGO')] + _0x1d46('‮39a', 'HtHt') + result[_0x1d46('‮39b', 'ck!A')]);
        } else {
          if (_0x871b56) {
            console['log'](_0x1d46('‫39c', 'S#r1') + $[_0x1d46('‫11f', 'tgxE')] + '\x20用户城市信息】:\x20网络请求失败');
            subTitle += _0x1d46('‫24c', '$sOJ') + $[_0x1d46('‫11a', '3Ac7')] + _0x1d46('‮39d', 'w7ja');
          } else {
            let _0x5f4ad9 = JSON[_0x1d46('‮39e', 'SbG2')](_0x373e99);
            if (_0x5f4ad9[_0x1d46('‮39f', 'r[uN')] == 0x1) {
              if (_0x1d46('‮3a0', 'GUfc') !== _0x1e4165['yHMHh']) {
                user_gold = _0x5f4ad9['data'][_0x1d46('‫3a1', '#M&M')]['gold'];
                console['log'](_0x1d46('‮10f', '&[cF') + $['index'] + _0x1d46('‫3a2', '(FS$') + _0x5f4ad9['data']['userRevenue']['uid'] + _0x1d46('‫3a3', 'GUfc') + nick + '\x0a---当前城市等级：' + userCityLevel + _0x1d46('‮3a4', '$sOJ') + _0x5f4ad9[_0x1d46('‫3a5', 'x7C6')][_0x1d46('‫3a6', '[B^s')][_0x1d46('‮3a7', '#M&M')] + _0x1d46('‮3a8', 'W@rB') + _0x5f4ad9['data'][_0x1d46('‫3a9', '#D]i')][_0x1d46('‮3aa', '8wGO')] + '\x0a---当前声望：' + _0x5f4ad9[_0x1d46('‮18f', '3aUr')][_0x1d46('‮3ab', 'V7UC')]['prestige'] + _0x1d46('‫3ac', 'dz8^') + _0x5f4ad9['data']['user']['lucky'] + _0x1d46('‮3ad', 'l29#') + _0x5f4ad9[_0x1d46('‮299', 'r[uN')][_0x1d46('‮3ae', 'lXIT')]['usableScore'] + _0x1d46('‫3af', 'zCZ6') + _0x5f4ad9[_0x1d46('‫3b0', 'ns@I')]['user'][_0x1d46('‫3b1', 'tgxE')] + order + game + red + platform + '\x0a---当前账户地址：' + _0x5f4ad9['data'][_0x1d46('‫3b2', 'cn7I')][_0x1d46('‫3b3', 'x7C6')] + AD_profit);
                if ($[_0x1d46('‫3b4', 'rv%a')] == 0x1) {
                  if (_0x1e4165['BSfjm'](_0x1e4165[_0x1d46('‮3b5', 'lXIT')], _0x1e4165[_0x1d46('‫3b6', 'jo2@')])) {
                    console[_0x1d46('‫f0', '4k%d')](_0x1d46('‫17b', 'ns@I') + $[_0x1d46('‮1f6', '&Xo7')] + _0x1d46('‮3b7', '3b]z') + _0x5f4ad9[_0x1d46('‮1b3', 'tgxE')]);
                  } else {
                    main_user_account = _0x5f4ad9[_0x1d46('‮275', '&Xo7')][_0x1d46('‮3b8', 'SbG2')][_0x1d46('‮3b9', 'D2Ss')];
                  }
                } else {}
              } else {
                console['log'](_0x1d46('‫3ba', 'HtHt'));
                return;
              }
            } else {
              console[_0x1d46('‮3bb', '8wGO')](_0x1d46('‫17b', 'ns@I') + $['index'] + _0x1d46('‫3bc', 'KBVx') + _0x5f4ad9[_0x1d46('‮3bd', 'HOs&')]);
            }
          }
        }
      } catch (_0x4f9b14) {
        console[_0x1d46('‮3bb', '8wGO')](_0x4f9b14, _0x5f1182);
      } finally {
        _0x1e4165['CvAgw'](_0x31dcb8);
      }
    });
  });
}

function getShopInfo() {
  var _0x1782b2 = {
    'AjPnv': function (_0x4238e6, _0x38f986) {
      return _0x4238e6 !== _0x38f986;
    },
    'asQLe': _0x1d46('‮3be', 'HOs&'),
    'GRohg': function (_0x291624, _0x2786c4) {
      return _0x291624 !== _0x2786c4;
    },
    'nQECH': 'PVpDz',
    'aEaaZ': 'CohfE',
    'OJJzM': function (_0x13eb6d, _0xc98bc2) {
      return _0x13eb6d == _0xc98bc2;
    },
    'ILTOz': _0x1d46('‮3bf', 'FpVB'),
    'lsTUp': function (_0x4b3631) {
      return _0x4b3631();
    },
    'eclxZ': function (_0x4d2260, _0xadeae3) {
      return _0x4d2260 === _0xadeae3;
    },
    'iVhpD': _0x1d46('‫3c0', 'dz8^'),
    'qOOwP': _0x1d46('‫3c1', '4$Qj')
  };
  let _0x2312cb = new Date()[_0x1d46('‫3c2', 'e1n#')]();
  let _0x118a8c = RSA_encryption('{\x22type\x22:2,\x22uid\x22:\x22' + user_ID + '\x22,\x22channel\x22:15502,\x22time\x22:' + _0x2312cb + _0x1d46('‫3c3', 'zCZ6') + (dwsj_inc += 0x1) + '}');
  let _0x232aee = Post_request(_0x1d46('‫3c4', '#D]i'), _0x118a8c);
  return new Promise((_0x1076b9, _0x5f0e5d) => {
    if (_0x1782b2[_0x1d46('‮3c5', 'SbG2')](_0x1782b2['iVhpD'], _0x1782b2[_0x1d46('‫3c6', 'CLO(')])) {
      variable_num = '_' + variable_num;
    } else {
      $[_0x1d46('‮3c7', '#D]i')](_0x232aee, async (_0x18db79, _0x223ec7, _0x1542a8) => {
        if (_0x1782b2[_0x1d46('‮3c8', 'r[uN')](_0x1d46('‫3c9', 'KBVx'), _0x1782b2[_0x1d46('‮3ca', '3hg*')])) {
          try {
            if (_0x1782b2[_0x1d46('‫3cb', 'Z2%O')](_0x1782b2[_0x1d46('‫3cc', 'sTrt')], _0x1782b2[_0x1d46('‫3cd', 'p@])')])) {
              nick = '';
              userCityLevel = '';
              if (_0x18db79) {
                console[_0x1d46('‫119', 'zCZ6')](_0x1d46('‮71', '#M&M') + $[_0x1d46('‫3ce', '3hg*')] + _0x1d46('‮3cf', 'zCZ6'));
                subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮3d0', '&[cF')] + _0x1d46('‮3d1', 'e1n#');
              } else {
                let _0x2fcb25 = JSON[_0x1d46('‫3d2', 'lXIT')](_0x1542a8);
                if (_0x1782b2[_0x1d46('‫3d3', 'gAx]')](_0x2fcb25[_0x1d46('‫3d4', 'phSI')], 0x1)) {
                  nick = _0x2fcb25['data'][_0x1d46('‮3d5', 'ns@I')][_0x1d46('‮3d6', 'KBVx')];
                  userCityLevel = _0x2fcb25[_0x1d46('‫3d7', 'dz8^')]['userInfo'][_0x1d46('‮3d8', 'sTrt')];
                } else {
                  if (_0x1782b2[_0x1d46('‫3d9', 'D2Ss')](_0x1782b2[_0x1d46('‮3da', 'p@])')], _0x1782b2[_0x1d46('‫3db', 'GUfc')])) {
                    console[_0x1d46('‫8c', '3aUr')](e, _0x223ec7);
                  } else {
                    console[_0x1d46('‮358', 'e1n#')]('\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‮3dc', 'V4Vn') + _0x2fcb25['message']);
                  }
                }
              }
            } else {
              console[_0x1d46('‫83', 'ck!A')](_0x1d46('‮11e', '56)D') + $[_0x1d46('‮113', 'GUfc')] + '\x20' + title + '】:\x20膜拜成功');
            }
          } catch (_0x10ed11) {
            console[_0x1d46('‫119', 'zCZ6')](_0x10ed11, _0x223ec7);
          } finally {
            _0x1782b2['lsTUp'](_0x1076b9);
          }
        } else {
          _0x1076b9();
        }
      });
    }
  });
}

function transferMoney(_0x11931d) {
  var _0x152955 = {
    'hJZxK': _0x1d46('‫3dd', 'p@])'),
    'WLmXE': _0x1d46('‫3de', 'CLO('),
    'HQytn': function (_0x22489d, _0x3264ae) {
      return _0x22489d + _0x3264ae;
    },
    'CGPLM': _0x1d46('‫3df', '(FS$'),
    'gsOiX': _0x1d46('‫3e0', 'jo2@'),
    'jYUNd': 'sdsj.shandw.com',
    'fxUqE': _0x1d46('‮3e1', 'cn7I'),
    'PjDrb': _0x1d46('‫3e2', '8wGO'),
    'QbkfZ': 'com.sdw.money.cat',
    'jSVJc': 'cross-site',
    'pQpTE': _0x1d46('‮3e3', 'cn7I'),
    'Qzudj': 'gzip,\x20deflate,\x20br',
    'wpArf': function (_0x32df48, _0x16dc49) {
      return _0x32df48 === _0x16dc49;
    },
    'mToXV': _0x1d46('‫3e4', 'sTrt'),
    'QDqnI': _0x1d46('‮3e5', '8wGO'),
    'VPPHg': _0x1d46('‮3e6', '3aUr'),
    'gOsLM': function (_0x28f372, _0x2b8816) {
      return _0x28f372 == _0x2b8816;
    },
    'btZMw': _0x1d46('‫3e7', 'W@rB'),
    'metkc': function (_0x34431a, _0x492988) {
      return _0x34431a == _0x492988;
    },
    'QZYrl': function (_0x286533, _0x4f57c0) {
      return _0x286533 !== _0x4f57c0;
    },
    'RCnmQ': 'MEnsA',
    'DvVaL': 'vzXvd',
    'ixQLB': function (_0x186cf5, _0x17211e) {
      return _0x186cf5 === _0x17211e;
    },
    'vWFqW': _0x1d46('‮3e8', 'sTrt'),
    'ZYHPc': function (_0x4f6317, _0x3b0b5a) {
      return _0x4f6317 !== _0x3b0b5a;
    },
    'optcT': function (_0x2647fb, _0x3f6e29, _0x458717) {
      return _0x2647fb(_0x3f6e29, _0x458717);
    }
  };
  let _0x54f98b = new Date()[_0x1d46('‫3e9', '[B^s')]();
  if (dwsj_Address) {
    main_user_account = dwsj_Address;
  }
  let _0x54132a = 0x1;
  if (_0x152955[_0x1d46('‮3ea', '3b]z')](dwsj_gold_coins, 0x5)) {
    if (_0x152955[_0x1d46('‫3eb', 'D2Ss')](_0x152955[_0x1d46('‮3ec', 'zCZ6')], _0x152955[_0x1d46('‮3ed', '&Xo7')])) {
      _0x54132a = 0x1;
    } else {
      console[_0x1d46('‮2a5', 'W@rB')](_0x1d46('‫2de', 'tgxE') + $['index'] + _0x1d46('‮3ee', '3Ac7') + result[_0x1d46('‮3ef', 'GUfc')]['gameInfo']['change'][_0x1d46('‮3f0', 'V7UC')] + _0x1d46('‮3f1', 'V4Vn'));
    }
  } else if (dwsj_gold_coins == 0xa) {
    if (_0x152955[_0x1d46('‮3f2', 'dz8^')](_0x152955['vWFqW'], 'bxarK')) {
      _0x54132a = 0x2;
    } else {
      preservation = use_current[_0x1d46('‫3f3', 's*%j')](new RegExp(_0x152955[_0x1d46('‮3f4', '56)D')], 'gi'), _0x152955[_0x1d46('‮3f5', 'HtHt')]);
      fs[_0x1d46('‫3f6', '&Xo7')](_0x1d46('‫3f7', 'SbG2') + variable_num + '.js', _0x152955[_0x1d46('‮3f8', 'p@])')](_0x152955[_0x1d46('‮3f9', 'jo2@')](_0x152955['HQytn'](_0x152955[_0x1d46('‫3fa', 'o7GN')], variable_left), preservation), variable_right));
    }
  } else if (dwsj_gold_coins == 0x14) {
    if (_0x152955[_0x1d46('‫3fb', '#D]i')](_0x1d46('‫3fc', '56)D'), 'OnNts')) {
      body_data = RSA_encryption(_0x1d46('‫3fd', 'V7UC') + user_ID + _0x1d46('‫3fe', 'phSI') + _0x54f98b + _0x1d46('‫3ff', 'r[uN') + (dwsj_inc += 0x1) + '}');
      title = '膜拜';
    } else {
      _0x54132a = 0x3;
    }
  }
  let _0x55ca15 = RSA_encryption('{\x22uid\x22:' + user_ID + _0x1d46('‮400', '&[cF') + main_user_account + _0x1d46('‫401', 'KBVx') + _0x54132a + _0x1d46('‮402', 'ns@I') + _0x54f98b + _0x1d46('‮403', '3Ac7') + (dwsj_inc += 0x1) + '}');
  let _0x42094d = _0x152955[_0x1d46('‮404', 'l29#')](Post_request, 'transferMoney', _0x55ca15);
  return new Promise((_0x3c2ab2, _0x57a973) => {
    var _0x4b20e0 = {
      'NmXaY': _0x152955[_0x1d46('‮405', '(FS$')],
      'EiXGk': _0x152955['gsOiX'],
      'SFexE': _0x152955['jYUNd'],
      'cVisj': _0x152955['fxUqE'],
      'ffllh': _0x152955[_0x1d46('‫406', 'ck!A')],
      'IOhQz': _0x152955['QbkfZ'],
      'eXSor': _0x152955[_0x1d46('‮407', 'GUfc')],
      'EdUZG': _0x152955[_0x1d46('‫408', '&Xo7')],
      'CXUCQ': _0x152955[_0x1d46('‫409', 'W@rB')],
      'VvJAA': function (_0x16717b, _0x1ba1e0) {
        return _0x152955['wpArf'](_0x16717b, _0x1ba1e0);
      },
      'CrXnt': _0x1d46('‮40a', 'gAx]'),
      'ABROA': _0x152955[_0x1d46('‫40b', 'V7UC')],
      'urDPc': _0x152955[_0x1d46('‮40c', '#D]i')],
      'HJFVG': _0x152955[_0x1d46('‮40d', 'r[uN')],
      'DuyRl': function (_0x74123e, _0x3b252d) {
        return _0x152955['gOsLM'](_0x74123e, _0x3b252d);
      },
      'XOazg': _0x1d46('‫40e', 'HOs&'),
      'ORlIK': _0x152955['btZMw'],
      'NDhPE': _0x1d46('‮40f', 'gAx]'),
      'jNxeJ': 'izePa'
    };
    $[_0x1d46('‫410', 'V4Vn')](_0x42094d, async (_0x447704, _0x58715a, _0xdf8dfc) => {
      var _0x4d47cc = {
        'qXmzD': _0x4b20e0[_0x1d46('‫411', '4$Qj')],
        'IhkqB': _0x4b20e0[_0x1d46('‮412', '$sOJ')],
        'jdOeo': _0x4b20e0[_0x1d46('‫413', 'r[uN')],
        'YZRzf': _0x1d46('‮414', 'D2Ss'),
        'MSgYh': _0x4b20e0['IOhQz'],
        'AwSnE': _0x4b20e0['eXSor'],
        'XhavW': 'cors',
        'VuvYp': _0x1d46('‮415', 'HtHt'),
        'cRKVA': _0x4b20e0[_0x1d46('‮416', 'CLO(')],
        'yqTMs': _0x4b20e0[_0x1d46('‮417', 'rO$q')]
      };
      if (_0x4b20e0[_0x1d46('‮418', '3Ac7')](_0x4b20e0['CrXnt'], _0x4b20e0[_0x1d46('‮419', 'KBVx')])) {
        let _0xe54ed7 = 'https://sdsj.shandw.com/';
        return {
          'url': _0x1d46('‮41a', '&Xo7') + url,
          'headers': {
            'Host': _0x4d47cc['qXmzD'],
            'Connection': _0x4d47cc[_0x1d46('‫41b', '&[cF')],
            'Content-Length': 0x0,
            'Pragma': _0x4d47cc[_0x1d46('‫41c', '3Ac7')],
            'Cache-Control': _0x4d47cc[_0x1d46('‫41d', 'ck!A')],
            'authId': user_ID,
            'Authorization': token,
            'User-Agent': dwsj_UA,
            'Content-Type': _0x1d46('‫41e', '3Ac7'),
            'Accept': _0x4d47cc['YZRzf'],
            'Origin': _0x1d46('‮41f', 'r[uN'),
            'X-Requested-With': _0x4d47cc['MSgYh'],
            'Sec-Fetch-Site': _0x4d47cc[_0x1d46('‮420', 'phSI')],
            'Sec-Fetch-Mode': _0x4d47cc['XhavW'],
            'Sec-Fetch-Dest': _0x4d47cc[_0x1d46('‮421', 'rO$q')],
            'Referer': _0x4d47cc['cRKVA'],
            'Accept-Encoding': _0x4d47cc[_0x1d46('‮422', '56)D')],
            'Accept-Language': _0x1d46('‫423', 'KBVx')
          }
        };
      } else {
        try {
          if (_0x447704) {
            console[_0x1d46('‮1c8', 'jo2@')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫32f', '4k%d')] + _0x1d46('‫424', '(FS$'));
            subTitle += _0x1d46('‫425', 's*%j') + $[_0x1d46('‫426', 'e1n#')] + _0x1d46('‫427', 'D2Ss');
          } else {
            if (_0x4b20e0[_0x1d46('‫428', 'phSI')](_0x4b20e0[_0x1d46('‫429', '[B^s')], _0x4b20e0[_0x1d46('‫42a', 'jo2@')])) {
              preservation = config_data[_0x1d46('‮42b', 'o7GN')](/action\":1/g, _0x1d46('‫42c', 'ck!A'))[_0x1d46('‫42d', 'x7C6')](/accelerate\":1/g, _0x1d46('‮42e', 'Z2%O'))[_0x1d46('‫3f3', 's*%j')](/worship\":1/g, _0x1d46('‫42f', 'KBVx'));
              fs[_0x1d46('‫430', 'rv%a')]('./dwsj.config' + variable_num + '.js', _0x4b20e0[_0x1d46('‮431', '3b]z')] + preservation);
            } else {
              let _0x45e72c = JSON['parse'](_0xdf8dfc);
              if (_0x4b20e0['DuyRl'](_0x45e72c[_0x1d46('‫432', '3b]z')], 0x1)) {
                if (_0x4b20e0['XOazg'] !== _0x4b20e0[_0x1d46('‮433', 'W@rB')]) {
                  console[_0x1d46('‫119', 'zCZ6')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮24a', 'o7GN')] + _0x1d46('‫434', '[B^s') + _0x45e72c[_0x1d46('‫e6', 's*%j')]);
                } else {
                  user_gold = _0x45e72c[_0x1d46('‮435', 'e1n#')]['user'][_0x1d46('‫3b1', 'tgxE')];
                  console[_0x1d46('‮3bb', '8wGO')](_0x1d46('‮114', 'rv%a') + $['index'] + _0x1d46('‮436', 'D2Ss') + _0x45e72c['data'][_0x1d46('‫437', '8wGO')]['uid'] + '\x0a---当前用户昵称：' + nick + _0x1d46('‫438', 'HOs&') + userCityLevel + _0x1d46('‮439', 'D2Ss') + _0x45e72c['data'][_0x1d46('‮43a', 'W@rB')][_0x1d46('‮43b', 'lXIT')] + _0x1d46('‮43c', 'V7UC') + _0x45e72c['data']['user'][_0x1d46('‮43d', 'tgxE')] + _0x1d46('‫43e', 'w7ja') + _0x45e72c['data'][_0x1d46('‮43f', 'C2s5')]['prestige'] + _0x1d46('‫440', 'r[uN') + _0x45e72c['data'][_0x1d46('‮3b8', 'SbG2')]['lucky'] + _0x1d46('‮441', '4k%d') + _0x45e72c[_0x1d46('‫442', '56)D')][_0x1d46('‫443', '#D]i')][_0x1d46('‫444', 'lXIT')] + _0x1d46('‮445', 'x7C6') + _0x45e72c['data'][_0x1d46('‮3ab', 'V7UC')][_0x1d46('‮446', 'w7ja')] + order + game + red + platform + _0x1d46('‫447', 'sTrt') + _0x45e72c[_0x1d46('‮448', '$sOJ')]['user'][_0x1d46('‫3b3', 'x7C6')] + AD_profit);
                  if ($[_0x1d46('‫227', 's*%j')] == 0x1) {
                    main_user_account = _0x45e72c[_0x1d46('‫449', 'sTrt')][_0x1d46('‫44a', 'D2Ss')]['accountUrl'];
                  } else {}
                }
              } else {
                if (_0x1d46('‫44b', 'GUfc') === _0x4b20e0['NDhPE']) {
                  console['log'](_0x1d46('‫297', 'cn7I') + $[_0x1d46('‫426', 'e1n#')] + _0x1d46('‮44c', '$sOJ') + _0x45e72c[_0x1d46('‫325', 'x7C6')]);
                } else {
                  dwsj_UA = _0x4b20e0[_0x1d46('‮44d', '4$Qj')];
                }
              }
            }
          }
        } catch (_0x376c4a) {
          if (_0x1d46('‮44e', 'D2Ss') !== _0x4b20e0[_0x1d46('‫44f', 'HtHt')]) {
            if (_0x447704) {
              console[_0x1d46('‮358', 'e1n#')]('\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‫450', 'ck!A'));
              subTitle += _0x1d46('‫2d4', 'V7UC') + $[_0x1d46('‮72', 'gAx]')] + '\x20更新建筑升级】:\x20网络请求失败';
            } else {}
          } else {
            console[_0x1d46('‮451', 'FpVB')](_0x376c4a, _0x58715a);
          }
        } finally {
          _0x3c2ab2();
        }
      }
    });
  });
}

function getUserWallet() {
  var _0x3af99a = {
    'jjQXg': _0x1d46('‫452', 'phSI'),
    'tgScf': 'itlHl',
    'lRvti': _0x1d46('‫453', '3hg*'),
    'CxRfb': function (_0x2f81c0, _0x16a7fe) {
      return _0x2f81c0(_0x16a7fe);
    },
    'uJqRo': function (_0x7d8e2e, _0x34655c, _0x54f0a7) {
      return _0x7d8e2e(_0x34655c, _0x54f0a7);
    }
  };
  let _0x27e3be = new Date()['getTime']();
  let _0x5a05df = _0x3af99a[_0x1d46('‫454', '3b]z')](RSA_encryption, _0x1d46('‫455', 'o7GN') + user_ID + ',\x22channel\x22:15502,\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
  let _0x290a6b = _0x3af99a[_0x1d46('‫456', 'D2Ss')](Post_request, 'getUserWalletPage', _0x5a05df);
  return new Promise((_0x129105, _0x1f2630) => {
    var _0x3b2d45 = {
      'OQYIP': _0x3af99a[_0x1d46('‮457', '4$Qj')],
      'VImkm': _0x1d46('‫458', '3Ac7'),
      'mByup': _0x3af99a['tgScf'],
      'nkpTO': function (_0x46cddf, _0x5d9c94) {
        return _0x46cddf == _0x5d9c94;
      },
      'dXjfq': _0x1d46('‮459', 'dz8^'),
      'JnTOF': _0x3af99a[_0x1d46('‮45a', 'ck!A')]
    };
    $[_0x1d46('‮45b', '#M&M')](_0x290a6b, async (_0x5284f0, _0x300320, _0x4a47a1) => {
      platform = '', order = '', game = '', red = '';
      try {
        if (_0x3b2d45['OQYIP'] === _0x3b2d45[_0x1d46('‫45c', '4k%d')]) {
          main_user_account = result[_0x1d46('‮45d', '&[cF')]['user']['accountUrl'];
        } else {
          if (_0x5284f0) {
            if (_0x1d46('‮45e', 'rO$q') !== _0x3b2d45['mByup']) {
              if (_0x5284f0) {
                console[_0x1d46('‮358', 'e1n#')](_0x1d46('‫2de', 'tgxE') + $['index'] + _0x1d46('‫37a', '3aUr'));
                subTitle += _0x1d46('‫378', 'SbG2') + $[_0x1d46('‮2fd', 'lXIT')] + _0x1d46('‫45f', 's*%j');
              } else {}
            } else {
              console[_0x1d46('‫398', 'phSI')](_0x1d46('‮32d', 'D2Ss') + $[_0x1d46('‫32f', '4k%d')] + _0x1d46('‮460', 'w7ja'));
              subTitle += '\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‮461', 'gAx]');
            }
          } else {
            let _0x497407 = JSON['parse'](_0x4a47a1);
            if (_0x3b2d45['nkpTO'](_0x497407[_0x1d46('‮462', '3Ac7')], 0x1)) {
              for (let _0x480cbf of _0x497407[_0x1d46('‮193', '8wGO')]) {
                if (_0x480cbf['valType'] == 0x0) {
                  platform = '\x0a---当前' + _0x480cbf[_0x1d46('‮463', 'phSI')] + '：' + _0x480cbf[_0x1d46('‮464', 'lXIT')];
                }
                if (_0x480cbf[_0x1d46('‫465', 'rv%a')] == 0x1) {
                  order = _0x1d46('‫466', '4k%d') + _0x480cbf[_0x1d46('‮467', 'GUfc')] + '：' + _0x480cbf[_0x1d46('‮468', '8wGO')];
                }
                if (_0x3b2d45[_0x1d46('‮469', 'r[uN')](_0x480cbf[_0x1d46('‮46a', '56)D')], 0x2)) {
                  if (_0x3b2d45[_0x1d46('‫46b', '[B^s')] !== _0x3b2d45[_0x1d46('‫46c', '56)D')]) {
                    game = _0x1d46('‮46d', 'x7C6') + _0x480cbf['name'] + '：' + _0x480cbf[_0x1d46('‮46e', 'zCZ6')];
                  } else {
                    variable_num = '';
                  }
                }
                if (_0x480cbf[_0x1d46('‫46f', '3Ac7')] == 0x3) {
                  red = _0x1d46('‮470', '#M&M') + _0x480cbf[_0x1d46('‫471', 'lXIT')] + '：' + _0x480cbf['revenues'];
                }
              }
            } else {
              console[_0x1d46('‫119', 'zCZ6')](_0x1d46('‮334', 'gAx]') + $['index'] + _0x1d46('‮472', 'rv%a') + _0x497407[_0x1d46('‮2c2', 'V4Vn')]);
            }
          }
        }
      } catch (_0x2f7243) {
        console[_0x1d46('‫16', 'S#r1')](_0x2f7243, _0x300320);
      } finally {
        _0x129105();
      }
    });
  });
}

function RevenueDetail() {
  var _0x565d2c = {
    'hSMQi': function (_0x30083c) {
      return _0x30083c();
    },
    'yFBvy': 'vATqY',
    'GSVap': function (_0x165e52, _0x53b812) {
      return _0x165e52 !== _0x53b812;
    },
    'wVasM': _0x1d46('‮473', 'p@])'),
    'rRDXl': function (_0x150b26, _0x28dc5e) {
      return _0x150b26 / _0x28dc5e;
    },
    'srghW': function (_0x14437f, _0x5dd05d) {
      return _0x14437f !== _0x5dd05d;
    },
    'OEYsN': _0x1d46('‮474', 's*%j'),
    'yBxhc': function (_0x476341) {
      return _0x476341();
    },
    'dRTeP': function (_0x37b7b2, _0x539bd9) {
      return _0x37b7b2(_0x539bd9);
    },
    'Qfoep': function (_0x3f2774, _0x300b0d, _0x1988c4) {
      return _0x3f2774(_0x300b0d, _0x1988c4);
    }
  };
  let _0x3cfd77 = new Date()[_0x1d46('‮475', '(FS$')]();
  let _0x467a4c = _0x565d2c[_0x1d46('‮476', 'l29#')](RSA_encryption, _0x1d46('‮477', 'C2s5') + user_ID + _0x1d46('‫478', 'p@])') + (dwsj_inc += 0x1) + '}');
  let _0x1866f5 = _0x565d2c['Qfoep'](Post_request, _0x1d46('‮479', 'S#r1'), _0x467a4c);
  AD_profit = '';
  return new Promise((_0x349744, _0x285169) => {
    var _0x390eae = {
      'pfCOc': function (_0x2ef5bf) {
        return _0x565d2c[_0x1d46('‫47a', '&Xo7')](_0x2ef5bf);
      },
      'cmOpJ': _0x565d2c[_0x1d46('‫47b', 'SbG2')],
      'IuYno': function (_0x5f4a71, _0x397d1d) {
        return _0x565d2c[_0x1d46('‮47c', 'CLO(')](_0x5f4a71, _0x397d1d);
      },
      'WljMz': _0x565d2c[_0x1d46('‫47d', 'D2Ss')],
      'OokmE': function (_0x379806, _0x26351c) {
        return _0x379806 == _0x26351c;
      },
      'voXRR': function (_0x3ceb54, _0x2a41f2) {
        return _0x565d2c['rRDXl'](_0x3ceb54, _0x2a41f2);
      },
      'xXuEd': function (_0x266010, _0x5307df) {
        return _0x266010 === _0x5307df;
      },
      'PnMtX': function (_0xc45f3e, _0x4d4780) {
        return _0x565d2c[_0x1d46('‮47e', '56)D')](_0xc45f3e, _0x4d4780);
      },
      'lcNCJ': _0x565d2c[_0x1d46('‫47f', '$sOJ')],
      'EzVlI': function (_0x34d943) {
        return _0x565d2c['yBxhc'](_0x34d943);
      }
    };
    $[_0x1d46('‫480', 's*%j')](_0x1866f5, async (_0x2121e7, _0x5aeb16, _0x4a8603) => {
      if (_0x390eae[_0x1d46('‮481', '8wGO')] !== _0x390eae['cmOpJ']) {
        return 0x1f4;
      } else {
        try {
          if (_0x2121e7) {
            console[_0x1d46('‮2fc', 'cn7I')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮2fd', 'lXIT')] + _0x1d46('‫482', '4k%d'));
            subTitle += _0x1d46('‫1b0', '3hg*') + $[_0x1d46('‮110', '#M&M')] + _0x1d46('‮483', '&Xo7');
          } else {
            if (_0x390eae['IuYno'](_0x390eae[_0x1d46('‫484', '&Xo7')], _0x1d46('‮485', '#M&M'))) {
              let _0x4af0a1 = JSON[_0x1d46('‫2f4', 'KBVx')](_0x4a8603);
              if (_0x390eae[_0x1d46('‮486', '3hg*')](_0x4af0a1[_0x1d46('‮31e', '56)D')], 0x1)) {
                AD_profit = '\x0a---当前广告佣金：' + _0x390eae[_0x1d46('‫487', 'HtHt')](_0x4af0a1['data'][0x0][_0x1d46('‫488', '8wGO')], 0x3e8) + _0x1d46('‫489', 'D2Ss');
              } else {
                if (_0x390eae[_0x1d46('‫48a', 'sTrt')]('tOgtz', _0x1d46('‫48b', 'dz8^'))) {
                  _0x390eae[_0x1d46('‫48c', 'V4Vn')](_0x349744);
                } else {
                  console[_0x1d46('‫48d', '[B^s')](_0x1d46('‫d0', 'lXIT') + $[_0x1d46('‮1f6', '&Xo7')] + '\x20广告收益】:\x20' + _0x4af0a1['message']);
                }
              }
            } else {
              if (err) {
                console[_0x1d46('‫306', 'V4Vn')](err);
              }
            }
          }
        } catch (_0x3335ed) {
          if (_0x390eae['xXuEd'](_0x1d46('‮48e', 's*%j'), _0x1d46('‮48f', 'D2Ss'))) {
            console[_0x1d46('‮272', '#D]i')](_0x3335ed, _0x5aeb16);
          } else {
            console['log'](_0x3335ed, _0x5aeb16);
          }
        } finally {
          if (_0x390eae['PnMtX'](_0x390eae[_0x1d46('‫490', 'FpVB')], _0x1d46('‫491', 'o7GN'))) {
            console['log'](err);
          } else {
            _0x390eae[_0x1d46('‮492', '$sOJ')](_0x349744);
          }
        }
      }
    });
  });
}

function UserWallet() {
  var _0x328796 = {
    'ZuVUX': function (_0x2210ad, _0xfcfec4) {
      return _0x2210ad == _0xfcfec4;
    },
    'SxEKo': _0x1d46('‫493', 'o7GN'),
    'oIXPt': _0x1d46('‫494', 'C2s5'),
    'iPbXC': 'LUqbT',
    'YBjia': function (_0x3853a1) {
      return _0x3853a1();
    },
    'poAMY': function (_0x118841, _0x46f812) {
      return _0x118841(_0x46f812);
    },
    'pjAlw': function (_0x1de0ca, _0x2e804c) {
      return _0x1de0ca * _0x2e804c;
    },
    'WCXqq': function (_0x3ae159, _0x2ef4d7) {
      return _0x3ae159 / _0x2ef4d7;
    },
    'rXQMe': _0x1d46('‫495', 'cn7I'),
    'JxEDq': function (_0x2bf837, _0x6664bf, _0x2b4d10) {
      return _0x2bf837(_0x6664bf, _0x2b4d10);
    }
  };
  let _0x3791f0 = new Date()[_0x1d46('‫496', '8wGO')]();
  let _0x370b4d = _0x328796[_0x1d46('‮497', '56)D')](RSA_encryption, '{\x22valType\x22:\x220\x22,\x22uid\x22:\x22' + user_ID + '\x22,\x22channel\x22:15502,\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
  let _0x48b11a = _0x328796['JxEDq'](Post_request, 'getUserWalletWithdrawPage', _0x370b4d);
  return new Promise((_0xa6413a, _0x10eefd) => {
    var _0x309df2 = {
      'NxmNo': function (_0x45e160, _0x1ef2b5) {
        return _0x328796['ZuVUX'](_0x45e160, _0x1ef2b5);
      },
      'fKSjO': function (_0x3e5f00, _0x362c55) {
        return _0x3e5f00 / _0x362c55;
      },
      'wMjPC': 'gJOuX',
      'KCZQK': _0x328796[_0x1d46('‫498', 'D2Ss')],
      'LBYEA': _0x1d46('‮499', 's*%j'),
      'fimHt': _0x328796[_0x1d46('‫49a', 'o7GN')],
      'yymgm': function (_0x3dd0c9, _0x18fce5) {
        return _0x3dd0c9 === _0x18fce5;
      },
      'rDhgr': _0x328796[_0x1d46('‫49b', 'dz8^')],
      'ONoNg': function (_0x28294e) {
        return _0x328796[_0x1d46('‫49c', '3hg*')](_0x28294e);
      },
      'NhtFk': function (_0xe720a7, _0x5f01c2) {
        return _0x328796['poAMY'](_0xe720a7, _0x5f01c2);
      },
      'noNVY': function (_0x23373f, _0x40cc80) {
        return _0x328796['pjAlw'](_0x23373f, _0x40cc80);
      },
      'CshxC': function (_0x1a6165, _0x4f6c41) {
        return _0x328796[_0x1d46('‮49d', '3b]z')](_0x1a6165, _0x4f6c41);
      },
      'aYWRL': _0x328796['rXQMe'],
      'jwxLs': function (_0x222286, _0xa89dd) {
        return _0x222286 !== _0xa89dd;
      }
    };
    $[_0x1d46('‮45b', '#M&M')](_0x48b11a, async (_0x313d1f, _0x2f487d, _0xc1002) => {
      var _0x58c34f = {
        'kssFG': function (_0x3a242f, _0x204245) {
          return _0x309df2[_0x1d46('‮49e', '4k%d')](_0x3a242f, _0x204245);
        }
      };
      if (_0x309df2[_0x1d46('‫49f', '3Ac7')] === _0x309df2[_0x1d46('‫4a0', 'dz8^')]) {
        console[_0x1d46('‫4a1', '#M&M')](e, _0x2f487d);
      } else {
        try {
          if (_0x309df2[_0x1d46('‮4a2', 'ck!A')] === _0x309df2[_0x1d46('‫4a3', '$sOJ')]) {
            console[_0x1d46('‫296', 'CLO(')](_0x1d46('‫4a4', 'KBVx') + $[_0x1d46('‫2bd', 'HtHt')] + _0x1d46('‫4a5', '&Xo7'));
            subTitle += _0x1d46('‫4a6', 'l29#') + $['index'] + '\x20转赠】:\x20网络请求失败';
          } else {
            if (_0x313d1f) {
              console[_0x1d46('‫c9', '&[cF')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮349', 'W@rB')] + _0x1d46('‫4a7', 'tgxE'));
              subTitle += _0x1d46('‫17b', 'ns@I') + $[_0x1d46('‫1f7', 'V4Vn')] + '\x20广告佣金余额】:\x20网络请求失败';
            } else {
              let _0x355fe1 = JSON[_0x1d46('‮39e', 'SbG2')](_0xc1002);
              if (_0x309df2['NxmNo'](_0x355fe1[_0x1d46('‮2c1', '3aUr')], 0x1)) {
                if (_0x309df2[_0x1d46('‮4a8', '(FS$')](_0x309df2[_0x1d46('‫4a9', 'HtHt')], _0x1d46('‫4aa', '#D]i'))) {
                  console['log'](_0x1d46('‫1dd', 'phSI') + $[_0x1d46('‮4ab', 'rO$q')] + '\x20' + title + _0x1d46('‮4ac', 'gAx]'));
                } else {
                  if (dwsj_Withdrawal) {
                    if (_0x355fe1['data']['usableMoney'] >= 0xa) {
                      await $[_0x1d46('‫21f', 'C2s5')](_0x309df2['ONoNg'](Delayed));
                      await _0x309df2[_0x1d46('‮4ad', 'l29#')](walletWithdraw, _0x309df2['noNVY'](Math[_0x1d46('‮4ae', 'lXIT')](_0x309df2[_0x1d46('‮4af', '3hg*')](_0x355fe1[_0x1d46('‫4b0', 'V4Vn')][_0x1d46('‮4b1', '3aUr')], 0xa)), 0xa));
                    }
                  }
                }
              } else {
                if (_0x1d46('‮4b2', 'x7C6') !== _0x309df2[_0x1d46('‫4b3', 'phSI')]) {
                  AD_profit = _0x1d46('‫4b4', 'HOs&') + _0x58c34f['kssFG'](_0x355fe1[_0x1d46('‫3d7', 'dz8^')][0x0][_0x1d46('‮4b5', '&Xo7')], 0x3e8) + '元,满20释放';
                } else {
                  console[_0x1d46('‫9', '$sOJ')](_0x1d46('‫24c', '$sOJ') + $['index'] + '\x20广告佣金余额】:\x20' + _0x355fe1['message']);
                }
              }
            }
          }
        } catch (_0x684272) {
          if (_0x309df2[_0x1d46('‫4b6', 'e1n#')](_0x1d46('‫4b7', 'phSI'), _0x1d46('‫4b8', 'C2s5'))) {
            let _0x582d8e = JSON[_0x1d46('‮4b9', 's*%j')](_0xc1002);
            if (_0x309df2[_0x1d46('‫4ba', 'cn7I')](_0x582d8e['code'], 0x1)) {
              console[_0x1d46('‮2f2', '(FS$')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮342', 'zCZ6')] + '\x20' + title + '】:\x20操作成功,清除了\x20' + _0x582d8e[_0x1d46('‫318', 'p@])')][_0x1d46('‮4bb', 's*%j')][_0x1d46('‮4bc', '#D]i')] + '\x20格子');
            } else {
              console['log'](_0x1d46('‫29e', '(FS$') + $[_0x1d46('‮342', 'zCZ6')] + '\x20' + title + '】:\x20' + _0x582d8e[_0x1d46('‮4bd', '8wGO')]);
            }
          } else {
            console['log'](_0x684272, _0x2f487d);
          }
        } finally {
          _0xa6413a();
        }
      }
    });
  });
}

function walletWithdraw(_0xe2e30d) {
  var _0x1056a7 = {
    'ucHXG': _0x1d46('‮4be', 'sTrt'),
    'TSALW': function (_0x483a91, _0x9e78c0) {
      return _0x483a91 + _0x9e78c0;
    },
    'bPwKC': _0x1d46('‫4bf', 'gAx]'),
    'hFELs': _0x1d46('‮4c0', 'phSI'),
    'tIPcp': _0x1d46('‫4c1', 'V4Vn'),
    'sUVyQ': _0x1d46('‫4c2', 'W@rB'),
    'ScwUn': function (_0xaf793a, _0x376700) {
      return _0xaf793a === _0x376700;
    },
    'SdlGs': _0x1d46('‮4c3', 'gAx]'),
    'TEWVz': function (_0x153b2a, _0x15d5d5, _0x1a8def) {
      return _0x153b2a(_0x15d5d5, _0x1a8def);
    }
  };
  let _0x1a0ea9 = new Date()[_0x1d46('‫4c4', 'sTrt')]();
  let _0x4088ce = RSA_encryption(_0x1d46('‮4c5', 'jo2@') + _0xe2e30d + _0x1d46('‮4c6', 'S#r1') + user_ID + _0x1d46('‮4c7', 'W@rB') + (dwsj_inc += 0x1) + '}');
  let _0x33d216 = _0x1056a7['TEWVz'](Post_request, _0x1d46('‫4c8', '[B^s'), _0x4088ce);
  return new Promise((_0x4cd49c, _0x4901df) => {
    var _0x34b643 = {
      'lqJgk': _0x1056a7['ucHXG'],
      'ddABu': function (_0x1d8c73, _0x4f7c82) {
        return _0x1056a7['TSALW'](_0x1d8c73, _0x4f7c82);
      },
      'waPjB': function (_0x7efdbc, _0x46d00b) {
        return _0x7efdbc === _0x46d00b;
      },
      'xZxso': _0x1056a7['bPwKC'],
      'xIWkK': _0x1056a7[_0x1d46('‮4c9', '(FS$')],
      'UJrWs': _0x1056a7[_0x1d46('‫4ca', 'HtHt')],
      'ckcwd': _0x1056a7[_0x1d46('‫4cb', 'jo2@')],
      'AEtwe': _0x1d46('‫4cc', 'cn7I'),
      'qOaNR': function (_0x45b013, _0x1e5e2b) {
        return _0x1056a7[_0x1d46('‫4cd', '4k%d')](_0x45b013, _0x1e5e2b);
      },
      'IOvRr': _0x1056a7[_0x1d46('‮4ce', 'jo2@')]
    };
    $[_0x1d46('‫4cf', '(FS$')](_0x33d216, async (_0x944c77, _0x8fa847, _0x1cac1d) => {
      var _0x2a3c20 = {
        'ESxpi': _0x34b643[_0x1d46('‫4d0', '#D]i')],
        'mxiqc': function (_0x27597e, _0x5df990) {
          return _0x34b643[_0x1d46('‮4d1', 'r[uN')](_0x27597e, _0x5df990);
        },
        'xuVkN': _0x1d46('‮4d2', 'jo2@')
      };
      try {
        if (_0x34b643[_0x1d46('‮4d3', '3hg*')](_0x34b643[_0x1d46('‮4d4', 'e1n#')], _0x34b643[_0x1d46('‫4d5', 'HtHt')])) {
          console[_0x1d46('‫f0', '4k%d')](_0x1d46('‮66', 'ck!A') + $[_0x1d46('‮4ab', 'rO$q')] + '\x20绑定师傅】:\x20网络请求失败');
          subTitle += _0x1d46('‮4d6', 'rO$q') + $[_0x1d46('‫1c9', 'C2s5')] + _0x1d46('‫4d7', '&Xo7');
        } else {
          if (_0x944c77) {
            console[_0x1d46('‫296', 'CLO(')](_0x1d46('‫186', 'HOs&') + $[_0x1d46('‮24d', 'cn7I')] + '\x20广告佣金提现】:\x20网络请求失败');
            subTitle += _0x1d46('‫84', 'FpVB') + $[_0x1d46('‮1f6', '&Xo7')] + '\x20广告佣金提现】:\x20网络请求失败';
          } else {
            if (_0x34b643['waPjB'](_0x34b643['UJrWs'], _0x1d46('‫4d8', 'V7UC'))) {
              let _0x35b9bc = JSON['parse'](_0x1cac1d);
              if (_0x35b9bc['code'] == 0x1) {
                console[_0x1d46('‮3bb', '8wGO')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮4d9', 'ck!A')] + _0x1d46('‫4da', 'KBVx'));
              } else {
                if (_0x1d46('‫4db', 'lXIT') === _0x34b643[_0x1d46('‫4dc', 'V7UC')]) {
                  console[_0x1d46('‫4a1', '#M&M')](e, _0x8fa847);
                } else {
                  console[_0x1d46('‮6f', 'SbG2')](_0x1d46('‮273', 'o7GN') + $[_0x1d46('‫4dd', 'w7ja')] + _0x1d46('‫4de', 'KBVx') + _0x35b9bc[_0x1d46('‫4df', 'o7GN')]);
                }
              }
            } else {
              _0x4cd49c();
            }
          }
        }
      } catch (_0x3340d1) {
        if (_0x34b643[_0x1d46('‮4e0', 'KBVx')] !== _0x34b643[_0x1d46('‮4e1', '4$Qj')]) {
          console['log'](_0x1d46('‫2d4', 'V7UC') + $[_0x1d46('‫4e2', '[B^s')] + _0x1d46('‮4e3', '3Ac7'));
          subTitle += _0x1d46('‫39c', 'S#r1') + $['index'] + _0x1d46('‮4e4', 'HtHt');
        } else {
          console[_0x1d46('‫f2', 'Z2%O')](_0x3340d1, _0x8fa847);
        }
      } finally {
        if (_0x34b643[_0x1d46('‫4e5', 'sTrt')](_0x34b643['IOvRr'], _0x1d46('‫4e6', 'GUfc'))) {
          preservation = use_current[_0x1d46('‫4e7', '#D]i')](new RegExp(_0x1d46('‫4e8', 'gAx]'), 'gi'), _0x2a3c20[_0x1d46('‫4e9', '8wGO')]);
          fs['writeFileSync'](_0x1d46('‮4ea', 'CLO(') + variable_num + _0x1d46('‫4eb', '8wGO'), _0x2a3c20[_0x1d46('‮4ec', '[B^s')](_0x2a3c20[_0x1d46('‮4ed', 'e1n#')](_0x2a3c20[_0x1d46('‮4ee', 'V7UC')], variable_left) + preservation, variable_right));
        } else {
          _0x4cd49c();
        }
      }
    });
  });
}

function getAdReward(_0x4b4992) {
  var _0x4d9d03 = {
    'ztVON': function (_0x67d7e, _0x36ef6c) {
      return _0x67d7e < _0x36ef6c;
    },
    'YyXdB': function (_0xed1877, _0xe8efa4) {
      return _0xed1877 + _0xe8efa4;
    },
    'vwmqE': function (_0x1176e5, _0x33e9c9) {
      return _0x1176e5 === _0x33e9c9;
    },
    'eOWJG': 'WqvsW',
    'rPgVg': 'PnVRj',
    'tPaNT': _0x1d46('‮4ef', 'l29#'),
    'yhtow': 'view',
    'gbtph': function (_0x1e8779, _0x1e7b95) {
      return _0x1e8779 !== _0x1e7b95;
    },
    'KwolA': function (_0x1cfe99, _0x4f682a) {
      return _0x1cfe99(_0x4f682a);
    },
    'VfSrZ': _0x1d46('‮4f0', '3hg*'),
    'IDHPq': _0x1d46('‫4f1', 'rO$q'),
    'ZrCJj': function (_0x82aa55, _0x302bce) {
      return _0x82aa55 !== _0x302bce;
    },
    'hfrsK': _0x1d46('‮4f2', '3hg*'),
    'DbxIg': function (_0xda52b1, _0x410d67) {
      return _0xda52b1 == _0x410d67;
    },
    'oQwHK': function (_0x268d6d, _0x1e2820, _0x36996d) {
      return _0x268d6d(_0x1e2820, _0x36996d);
    },
    'JIBYw': function (_0xd9fc75) {
      return _0xd9fc75();
    },
    'jqneB': _0x1d46('‫4f3', 'SbG2'),
    'VoNLw': 'sign',
    'qAgvY': function (_0x75d4f7, _0x1d1070) {
      return _0x75d4f7 == _0x1d1070;
    },
    'NtRYf': 'Business'
  };
  let _0x2decde = new Date()['getTime']();
  let _0x5c48bc = '';
  let _0x2cc2bd = '';
  if (_0x4b4992 == _0x4d9d03[_0x1d46('‫4f4', 'rv%a')]) {
    _0x5c48bc = _0x4d9d03['KwolA'](RSA_encryption, _0x1d46('‫4f5', '8wGO') + user_ID + ',\x22type\x22:\x221\x22,\x22time\x22:' + _0x2decde + _0x1d46('‮4f6', 'phSI') + (dwsj_inc += 0x1) + '}');
    _0x2cc2bd = '签到';
  } else if (_0x4b4992 == _0x4d9d03['yhtow']) {
    _0x5c48bc = RSA_encryption('{\x22uid\x22:' + user_ID + _0x1d46('‫4f7', '3hg*') + _0x2decde + _0x1d46('‮4f8', 'rv%a') + (dwsj_inc += 0x1) + '}');
    _0x2cc2bd = '加速';
  } else if (_0x4b4992 == _0x4d9d03[_0x1d46('‫4f9', 'HtHt')]) {
    _0x5c48bc = _0x4d9d03['KwolA'](RSA_encryption, _0x1d46('‫4fa', 'cn7I') + user_ID + ',\x22type\x22:\x222\x22,\x22time\x22:' + _0x2decde + _0x1d46('‮2e7', '#M&M') + (dwsj_inc += 0x1) + '}');
    _0x2cc2bd = _0x1d46('‮4fb', 'l29#');
  } else if (_0x4d9d03[_0x1d46('‫4fc', 'x7C6')](_0x4b4992, _0x4d9d03['NtRYf'])) {
    _0x5c48bc = RSA_encryption(_0x1d46('‫4fd', 'D2Ss') + user_ID + _0x1d46('‫4fe', 'KBVx') + _0x2decde + ',\x22inc\x22:' + (dwsj_inc += 0x1) + '}');
    _0x2cc2bd = '膜拜';
  }
  let _0x3b35e6 = _0x4d9d03[_0x1d46('‮4ff', '3Ac7')](Post_request, 'getAdReward', _0x5c48bc);
  return new Promise((_0x2d0989, _0x4eb4a7) => {
    var _0x3cf9e8 = {
      'fAbPO': function (_0x2bdce4, _0x563a80) {
        return _0x4d9d03['ztVON'](_0x2bdce4, _0x563a80);
      },
      'OMgsm': function (_0x477812, _0x1b0889) {
        return _0x4d9d03['YyXdB'](_0x477812, _0x1b0889);
      },
      'iLXUi': 'module.exports={\x22data\x22:',
      'sdKSo': function (_0x248264) {
        return _0x248264();
      },
      'IjgFi': function (_0x37ca0d, _0x21f1ae) {
        return _0x4d9d03[_0x1d46('‮500', 'HOs&')](_0x37ca0d, _0x21f1ae);
      },
      'lxoXW': _0x4d9d03[_0x1d46('‮501', 'D2Ss')],
      'oHnHV': _0x4d9d03[_0x1d46('‫502', 'HOs&')],
      'CiUut': _0x1d46('‮503', '3aUr'),
      'jmlvd': function (_0x27cfab, _0x19e2c7) {
        return _0x27cfab == _0x19e2c7;
      },
      'iIlDs': _0x4d9d03['tPaNT'],
      'dmcqc': 'wDmnG',
      'Behdh': _0x4d9d03['yhtow'],
      'LTHLA': function (_0x37686e, _0x136fbd) {
        return _0x4d9d03[_0x1d46('‮504', 'r[uN')](_0x37686e, _0x136fbd);
      },
      'IRzTm': _0x1d46('‮505', 'GUfc'),
      'jDTjQ': _0x1d46('‮506', 'x7C6'),
      'rNSEK': function (_0x35a14b, _0x2859e0) {
        return _0x4d9d03[_0x1d46('‮507', 'HtHt')](_0x35a14b, _0x2859e0);
      },
      'HiVtj': _0x4d9d03[_0x1d46('‫508', '3b]z')],
      'JMwFK': _0x4d9d03['IDHPq'],
      'ExlwI': function (_0x3c510e, _0x26a391) {
        return _0x4d9d03[_0x1d46('‫509', '3hg*')](_0x3c510e, _0x26a391);
      },
      'qnERL': _0x1d46('‮50a', 'dz8^'),
      'YXRsp': function (_0x35b0cb, _0x358bf2, _0xa0153d) {
        return _0x35b0cb(_0x358bf2, _0xa0153d);
      },
      'MIJxs': _0x4d9d03[_0x1d46('‫50b', '#D]i')],
      'jNTHy': function (_0x24ddbe, _0x421109) {
        return _0x4d9d03[_0x1d46('‫50c', '#D]i')](_0x24ddbe, _0x421109);
      },
      'sRmEG': function (_0x1a6cd4, _0x255828, _0x256f74) {
        return _0x4d9d03['oQwHK'](_0x1a6cd4, _0x255828, _0x256f74);
      },
      'MwBJY': function (_0x328d2f) {
        return _0x4d9d03['JIBYw'](_0x328d2f);
      },
      'qorWc': 'cCuUJ',
      'wIbtM': _0x4d9d03[_0x1d46('‮50d', '56)D')]
    };
    $[_0x1d46('‫50e', '3b]z')](_0x3b35e6, async (_0x4dc454, _0x4cdd7f, _0x5e3aaf) => {
      if (_0x3cf9e8[_0x1d46('‫50f', '[B^s')](_0x1d46('‫510', 'tgxE'), _0x3cf9e8[_0x1d46('‮511', 'S#r1')])) {
        console['log'](e, _0x4cdd7f);
      } else {
        try {
          if (_0x3cf9e8['oHnHV'] !== _0x3cf9e8[_0x1d46('‫512', 'W@rB')]) {
            console[_0x1d46('‮358', 'e1n#')](_0x1d46('‫186', 'HOs&') + $[_0x1d46('‮4ab', 'rO$q')] + '\x20领取建筑收益】:\x20' + result[_0x1d46('‮513', 'rO$q')]);
            subTitle += '\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫2f7', 'V7UC')] + _0x1d46('‮514', 'W@rB');
          } else {
            if (_0x4dc454) {} else {
              if (_0x3cf9e8[_0x1d46('‫515', 'dz8^')] !== _0x3cf9e8[_0x1d46('‫516', 's*%j')]) {
                console[_0x1d46('‫a0', '3b]z')](_0x1d46('‫1b0', '3hg*') + $['index'] + _0x1d46('‮517', 'S#r1'));
                subTitle += _0x1d46('‫378', 'SbG2') + $['index'] + _0x1d46('‮518', 'p@])');
              } else {
                let _0x34aee8 = JSON['parse'](_0x5e3aaf);
                if (_0x3cf9e8[_0x1d46('‮519', 'KBVx')](_0x34aee8[_0x1d46('‮51a', '3hg*')], 0x1)) {
                  if (_0x3cf9e8[_0x1d46('‫51b', 'D2Ss')](_0x4b4992, _0x1d46('‫51c', 'gAx]'))) {
                    console[_0x1d46('‫11d', 'gAx]')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫1ab', 'dz8^')] + '\x20' + _0x2cc2bd + _0x1d46('‫51d', '3hg*') + _0x34aee8['data'][_0x1d46('‫51e', '(FS$')]['change']['diceNum'] + ',增加钻石：' + _0x34aee8[_0x1d46('‫51f', 'W@rB')]['gameInfo']['change']['usableScore']);
                  } else if (_0x3cf9e8['jmlvd'](_0x4b4992, _0x3cf9e8['iIlDs'])) {
                    if (_0x3cf9e8['dmcqc'] !== _0x1d46('‮520', 'D2Ss')) {
                      console[_0x1d46('‮2b9', 'HOs&')](_0x1d46('‫d0', 'lXIT') + $[_0x1d46('‫106', 'ns@I')] + '\x20' + _0x2cc2bd + _0x1d46('‫521', 'e1n#'));
                    } else {
                      let _0x12103d = dwsj_variable['dwsj_variable_data']['user_data']['length'];
                      for (let _0x2a9834 = 0x0; _0x3cf9e8[_0x1d46('‫522', 'x7C6')](_0x2a9834, _0x12103d); _0x2a9834++) {
                        data_config['push']({
                          'ID': dwsj_variable[_0x1d46('‫523', '(FS$')][_0x1d46('‮524', '#D]i')][_0x2a9834][_0x1d46('‮525', 'lXIT')],
                          'action': 0x0,
                          'worship': 0x0,
                          'accelerate': 0x0
                        });
                      }
                      let _0x2496db = JSON['stringify'](data_config);
                      fs['writeFile'](_0x1d46('‫526', 'rv%a') + variable_num + '.js', _0x3cf9e8[_0x1d46('‮527', 'jo2@')](_0x3cf9e8[_0x1d46('‮528', '3Ac7')] + _0x2496db, '}'), function (_0x541995) {
                        if (_0x541995) {
                          console['log'](_0x541995);
                        }
                      });
                    }
                  } else if (_0x3cf9e8[_0x1d46('‮529', 'jo2@')](_0x4b4992, _0x3cf9e8['Behdh'])) {
                    if (_0x3cf9e8[_0x1d46('‫52a', 'W@rB')](_0x3cf9e8['IRzTm'], 'NbMJC')) {
                      console['log'](_0x1d46('‮66', 'ck!A') + $[_0x1d46('‮316', 'p@])')] + '\x20' + _0x2cc2bd + _0x1d46('‫52b', '4k%d'));
                    } else {
                      _0x3cf9e8[_0x1d46('‫52c', '4$Qj')](_0x2d0989);
                    }
                  } else if (_0x3cf9e8['jmlvd'](_0x4b4992, _0x3cf9e8[_0x1d46('‮52d', 'V7UC')])) {
                    console[_0x1d46('‫315', 'p@])')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮3d0', '&[cF')] + '\x20' + _0x2cc2bd + _0x1d46('‮52e', '(FS$'));
                  }
                } else if (_0x3cf9e8[_0x1d46('‮52f', 'SbG2')](_0x34aee8['code'], 0x76f) && _0x3cf9e8[_0x1d46('‮530', 'Z2%O')](_0x4b4992, _0x1d46('‫531', '&Xo7'))) {
                  await _0x3cf9e8[_0x1d46('‫532', 'sTrt')](reward_video, _0x1d46('‫533', 'FpVB'));
                } else if (_0x34aee8['code'] == 0x4b8) {
                  if (_0x1d46('‮534', '(FS$') === _0x3cf9e8[_0x1d46('‮535', 'sTrt')]) {
                    if (_0x3cf9e8[_0x1d46('‮536', 'ck!A')](_0x4b4992, _0x3cf9e8['Behdh'])) {
                      if (_0x3cf9e8[_0x1d46('‫537', '$sOJ')] !== _0x3cf9e8['JMwFK']) {
                        console[_0x1d46('‮2a5', 'W@rB')](_0x1d46('‫4a4', 'KBVx') + $['index'] + '\x20道具商城】:\x20' + _0x34aee8[_0x1d46('‫538', 'HtHt')]);
                      } else {
                        console[_0x1d46('‮123', 's*%j')](_0x1d46('‮359', 'dz8^') + $[_0x1d46('‮72', 'gAx]')] + _0x1d46('‫539', 'tgxE') + _0x2cc2bd + _0x1d46('‮68', '56)D') + _0x34aee8['message']);
                        if (sdsj_config) {
                          if (_0x3cf9e8[_0x1d46('‫53a', 'V7UC')](_0x3cf9e8[_0x1d46('‫53b', '8wGO')], _0x3cf9e8[_0x1d46('‫53c', 'phSI')])) {
                            console['log'](_0x1d46('‮53d', 'HtHt') + $[_0x1d46('‫1ab', 'dz8^')] + _0x1d46('‮53e', 'l29#'));
                            subTitle += _0x1d46('‮105', 'Z2%O') + $['index'] + '\x20道具商城】:\x20网络请求失败';
                          } else {
                            await _0x3cf9e8['YXRsp'](get_variable, _0x3cf9e8['Behdh'], _0x1d46('‮53f', '#D]i'));
                          }
                        }
                      }
                    }
                    if (_0x3cf9e8[_0x1d46('‮540', 'phSI')](_0x4b4992, _0x3cf9e8['iIlDs'])) {
                      console['log']('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‫1c9', 'C2s5')] + _0x1d46('‫541', 'r[uN') + _0x2cc2bd + '广告】:\x20' + _0x34aee8[_0x1d46('‮542', '#D]i')]);
                      if (sdsj_config) {
                        await _0x3cf9e8[_0x1d46('‫543', 'HtHt')](get_variable, 'tou', _0x3cf9e8['MIJxs']);
                      }
                    }
                  } else {
                    current_config = dwsj_config[_0x1d46('‫544', '(FS$')][i];
                    dwsj_Business = dwsj_config[_0x1d46('‮545', 'S#r1')][i]['worship'];
                    dwsj_viewnum = dwsj_config[_0x1d46('‮1a6', 'ck!A')][i][_0x1d46('‫546', '[B^s')];
                    dwsj_action = dwsj_config[_0x1d46('‮19c', 'gAx]')][i][_0x1d46('‮547', 'V7UC')];
                  }
                } else if (_0x3cf9e8[_0x1d46('‮548', 'l29#')](_0x34aee8[_0x1d46('‮549', 'rO$q')], 0x57f) && _0x3cf9e8[_0x1d46('‫54a', 'p@])')](_0x4b4992, _0x3cf9e8['jDTjQ'])) {
                  console[_0x1d46('‫b', '3hg*')](_0x1d46('‮114', 'rv%a') + $['index'] + '\x20观看' + _0x2cc2bd + _0x1d46('‫54b', 'KBVx') + _0x34aee8[_0x1d46('‮ef', 'lXIT')]);
                  if (sdsj_config) {
                    await _0x3cf9e8[_0x1d46('‫54c', '3hg*')](get_variable, _0x3cf9e8[_0x1d46('‫54d', 'HOs&')], _0x3cf9e8[_0x1d46('‮54e', 'D2Ss')]);
                  }
                } else if (_0x3cf9e8['jNTHy'](_0x34aee8[_0x1d46('‫54f', 'ns@I')], 0x76f) && _0x4b4992 == _0x3cf9e8['Behdh']) {
                  await $[_0x1d46('‮550', 'cn7I')](_0x3cf9e8['MwBJY'](Delayed));
                  await reward_video('view');
                } else {
                  if (_0x3cf9e8[_0x1d46('‫551', '3hg*')](_0x3cf9e8[_0x1d46('‫552', 'Z2%O')], _0x3cf9e8['wIbtM'])) {
                    console[_0x1d46('‫4a1', '#M&M')](e, _0x4cdd7f);
                  } else {
                    console[_0x1d46('‮3bb', '8wGO')](_0x1d46('‮553', '[B^s') + $['index'] + '\x20观看' + _0x2cc2bd + _0x1d46('‫554', 'HOs&') + _0x34aee8[_0x1d46('‫555', 'r[uN')]);
                  }
                }
              }
            }
          }
        } catch (_0x522235) {
          console[_0x1d46('‮10e', 'dz8^')](_0x522235, _0x4cdd7f);
        } finally {
          _0x3cf9e8[_0x1d46('‫556', 's*%j')](_0x2d0989);
        }
      }
    });
  });
}

function reward_video(_0x21bf3e) {
  var _0x5909ec = {
    'ilDsu': function (_0x2a6179, _0x52d353) {
      return _0x2a6179 === _0x52d353;
    },
    'EBfvK': 'Xmkvr',
    'KQbvB': function (_0x2a7fbf, _0x5ce688) {
      return _0x2a7fbf !== _0x5ce688;
    },
    'Eymur': _0x1d46('‫557', 'HOs&'),
    'nwXwU': _0x1d46('‫558', 'ck!A'),
    'cXFJs': _0x1d46('‮559', 'S#r1'),
    'AywAI': 'cHzGG',
    'ibyKO': 'oFsij',
    'QpccX': function (_0x1f7fb2, _0x104a13) {
      return _0x1f7fb2 == _0x104a13;
    },
    'PdWcg': function (_0x2bb9f4) {
      return _0x2bb9f4();
    },
    'JtwJK': function (_0x25545f, _0x55cc07) {
      return _0x25545f(_0x55cc07);
    },
    'bkZDC': _0x1d46('‮55a', 'HOs&'),
    'paqyG': function (_0x467bd5, _0x4cd8df) {
      return _0x467bd5 == _0x4cd8df;
    },
    'NnGlA': _0x1d46('‫55b', '56)D'),
    'duvbY': _0x1d46('‮55c', 'D2Ss'),
    'tPMYg': function (_0x11b6a2) {
      return _0x11b6a2();
    },
    'ooDqs': function (_0x49b317) {
      return _0x49b317();
    },
    'ZOijX': 'api-access.pangolin-sdk-toutiao.com',
    'JeLQf': 'application/json;charset=utf-8',
    'vVpbk': 'gzip'
  };
  if (!video_data) {} else {
    let _0xa894b2 = video_data[_0x1d46('‫55d', 'tgxE')](/[\r\n]/g, '');
    let _0x265543 = {
      'url': _0x1d46('‮55e', 'x7C6'),
      'headers': {
        'Host': _0x5909ec['ZOijX'],
        'Content-Type': _0x5909ec['JeLQf'],
        'Content-Length': _0xa894b2['length'],
        'Accept-Encoding': _0x5909ec[_0x1d46('‫55f', 'tgxE')],
        'User-Agent': _0x1d46('‮560', '3Ac7')
      },
      'body': _0xa894b2
    };
    return new Promise((_0x357da8, _0x2e48a1) => {
      var _0x4a3d81 = {
        'sQyNw': function (_0x362fed) {
          return _0x5909ec[_0x1d46('‮561', 'rO$q')](_0x362fed);
        }
      };
      $[_0x1d46('‮562', 'rO$q')](_0x265543, async (_0x1bb185, _0x506c77, _0x5226bf) => {
        if (_0x5909ec[_0x1d46('‮563', '8wGO')](_0x5909ec['EBfvK'], _0x5909ec[_0x1d46('‮564', '(FS$')])) {
          try {
            if (_0x5909ec[_0x1d46('‮565', 'ns@I')](_0x5909ec['Eymur'], _0x5909ec[_0x1d46('‮566', 'V7UC')])) {
              if (_0x1bb185) {} else {
                if (_0x5226bf[_0x1d46('‮567', 'W@rB')](_0x5909ec['cXFJs']) > -0x1) {
                  if (_0x5909ec[_0x1d46('‫568', 'l29#')](_0x5909ec[_0x1d46('‮569', '(FS$')], _0x5909ec[_0x1d46('‫56a', '&Xo7')])) {
                    _0x4a3d81['sQyNw'](_0x357da8);
                  } else {
                    let _0xf068f7 = JSON[_0x1d46('‫56b', 'jo2@')](_0x5226bf);
                    if (_0x5909ec[_0x1d46('‮56c', 'V4Vn')](_0xf068f7[_0x1d46('‮56d', 'dz8^')], 0x3)) {
                      await $['wait'](_0x5909ec['PdWcg'](Delayed));
                      await _0x5909ec[_0x1d46('‫56e', '(FS$')](getAdReward, _0x21bf3e);
                    } else {
                      console[_0x1d46('‮272', '#D]i')]('\x0a【soy脚本提示---账号\x20' + $[_0x1d46('‮1f6', '&Xo7')] + '\x20观看广告】:\x20观看广告返回数据异常');
                    }
                  }
                } else {
                  if (_0x5909ec['bkZDC'] !== 'oRUqr') {
                    console[_0x1d46('‮451', 'FpVB')](_0x1d46('‫187', 'x7C6') + $[_0x1d46('‫11a', '3Ac7')] + _0x1d46('‫56f', '#M&M'));
                  } else {
                    let _0x9dce80 = JSON['parse'](_0x5226bf);
                    if (_0x5909ec[_0x1d46('‮570', 'Z2%O')](_0x9dce80[_0x1d46('‮571', 'W@rB')], 0xea67)) {
                      if (_0x5909ec[_0x1d46('‫572', 'KBVx')](_0x5909ec[_0x1d46('‮573', 'W@rB')], _0x5909ec['duvbY'])) {
                        console['log'](_0x1d46('‮105', 'Z2%O') + $[_0x1d46('‫4e2', '[B^s')] + '\x20广告佣金提现】:\x20' + _0x9dce80[_0x1d46('‮574', 'gAx]')]);
                      } else {
                        await $['wait'](_0x5909ec[_0x1d46('‫575', '#D]i')](Delayed));
                        await getAdReward(_0x21bf3e);
                      }
                    } else {
                      console[_0x1d46('‮cf', 'sTrt')](_0x1d46('‫2de', 'tgxE') + $['index'] + '\x20观看广告】:\x20观看广告返回数据异常');
                    }
                  }
                }
              }
            } else {
              console[_0x1d46('‫398', 'phSI')](_0x1d46('‮4d6', 'rO$q') + $[_0x1d46('‫1ab', 'dz8^')] + '\x20' + title + _0x1d46('‮576', 'V4Vn') + result[_0x1d46('‮198', 'o7GN')][_0x1d46('‫577', '#D]i')]['change'][_0x1d46('‮578', '56)D')] + ',增加钻石：' + result[_0x1d46('‮579', 'CLO(')]['gameInfo'][_0x1d46('‮57a', 'Z2%O')][_0x1d46('‫57b', 'SbG2')]);
            }
          } catch (_0x1a01a5) {
            console['log'](_0x1a01a5, _0x506c77);
          } finally {
            _0x5909ec[_0x1d46('‮57c', 'GUfc')](_0x357da8);
          }
        } else {
          console[_0x1d46('‮234', 'x7C6')](_0x1d46('‫348', 'w7ja') + $['index'] + '\x20' + title + _0x1d46('‮57d', 's*%j'));
          subTitle += _0x1d46('‫57e', '3aUr') + $['index'] + '\x20' + title + _0x1d46('‫57f', 'S#r1');
        }
      });
    });
  }
}

function Delayed() {
  var _0x4b407c = {
    'gUZQh': function (_0x1945b0, _0x51633b) {
      return _0x1945b0 == _0x51633b;
    },
    'MzTDj': function (_0x28834e, _0x438e77) {
      return _0x28834e * _0x438e77;
    }
  };
  if (_0x4b407c[_0x1d46('‮580', '3aUr')](dwsj_delayed, 0x0)) {
    return 0x1f4;
  } else {
    return Delayed_value = _0x4b407c['MzTDj'](dwsj_delayed, 0x3e8);
  }
}

function Post_request(_0x18d730, _0xa85c5e, _0x259e86) {
  var _0x4d7966 = {
    'mfbmZ': _0x1d46('‫581', 'Z2%O'),
    'NCUxM': _0x1d46('‫582', 'S#r1'),
    'SeXdw': _0x1d46('‫583', 'GUfc'),
    'YVnNl': _0x1d46('‮584', 'W@rB'),
    'fNxjr': _0x1d46('‮585', 'rO$q'),
    'ZiXDV': _0x1d46('‫586', '#M&M'),
    'syeNA': _0x1d46('‫587', '4k%d'),
    'MDdVE': _0x1d46('‮588', 'dz8^'),
    'zMVPr': _0x1d46('‫589', '$sOJ')
  };
  return {
    'url': 'http://49.233.246.33:18081/' + _0x18d730,
    'headers': {
      'Host': _0x4d7966[_0x1d46('‫58a', 'GUfc')],
      'Connection': _0x4d7966[_0x1d46('‫58b', 'l29#')],
      'Content-Length': _0xa85c5e['length'],
      'Pragma': _0x4d7966['SeXdw'],
      'Cache-Control': _0x4d7966[_0x1d46('‫58c', 'r[uN')],
      'authId': user_ID,
      'Authorization': dwsj_token,
      'User-Agent': dwsj_UA,
      'Content-Type': _0x1d46('‮58d', 'zCZ6'),
      'Accept': _0x4d7966['YVnNl'],
      'Origin': _0x4d7966[_0x1d46('‮58e', 'V4Vn')],
      'X-Requested-With': _0x1d46('‫58f', 'SbG2'),
      'Sec-Fetch-Site': _0x4d7966[_0x1d46('‫590', 'tgxE')],
      'Sec-Fetch-Mode': _0x1d46('‮591', '#M&M'),
      'Sec-Fetch-Dest': _0x1d46('‫592', 'r[uN'),
      'Referer': _0x4d7966[_0x1d46('‮593', 'dz8^')],
      'Accept-Encoding': _0x4d7966[_0x1d46('‮594', '&[cF')],
      'Accept-Language': _0x4d7966[_0x1d46('‫595', 'ns@I')]
    },
    'body': _0xa85c5e
  };
};

function Get_request(_0x3e69c7) {
  var _0x1bea50 = {
    'HvMEa': _0x1d46('‮596', '4$Qj'),
    'WMvDX': _0x1d46('‫597', 'V7UC'),
    'BOAUC': 'no-cache',
    'spGJk': _0x1d46('‮598', 'tgxE'),
    'rTdUv': _0x1d46('‮599', 'FpVB'),
    'xKWuP': _0x1d46('‮59a', '8wGO'),
    'QDxRU': 'empty',
    'hbZeA': _0x1d46('‫59b', 'FpVB')
  };
  let _0x550055 = _0x1bea50['HvMEa'];
  return {
    'url': _0x1d46('‫59c', 'cn7I') + _0x3e69c7,
    'headers': {
      'Host': _0x1bea50[_0x1d46('‮59d', 'zCZ6')],
      'Connection': _0x1d46('‫59e', '4k%d'),
      'Content-Length': 0x0,
      'Pragma': _0x1bea50[_0x1d46('‮59f', '$sOJ')],
      'Cache-Control': _0x1bea50['BOAUC'],
      'authId': user_ID,
      'Authorization': token,
      'User-Agent': dwsj_UA,
      'Content-Type': _0x1bea50[_0x1d46('‮5a0', 'tgxE')],
      'Accept': _0x1bea50[_0x1d46('‫5a1', 'o7GN')],
      'Origin': _0x1bea50[_0x1d46('‮5a2', 'l29#')],
      'X-Requested-With': _0x1d46('‮5a3', '&[cF'),
      'Sec-Fetch-Site': _0x1d46('‮5a4', '(FS$'),
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': _0x1bea50[_0x1d46('‫5a5', '&[cF')],
      'Referer': 'http://sdsjcli.shandw.com/',
      'Accept-Encoding': 'gzip,\x20deflate,\x20br',
      'Accept-Language': _0x1bea50[_0x1d46('‫5a6', '3b]z')]
    }
  };
};

function RSA_encryption(_0x18cb7e) {
  var _0x5b7ef6 = {
    'tJuPy': 'pkcs1',
    'WqeoM': _0x1d46('‫5a7', 'tgxE'),
    'xRkZN': _0x1d46('‫5a8', '3b]z')
  };
  var _0x2b5d8d = new RSA_js();
  _0x2b5d8d[_0x1d46('‫5a9', 'V7UC')]({
    'encryptionScheme': _0x5b7ef6[_0x1d46('‮5aa', '3aUr')]
  });
  _0x2b5d8d[_0x1d46('‮5ab', 'KBVx')]('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQClTZpI7HtkzC/c+AHTsme1Zhrer7jax8GRgUpyYxXAvl/kuwjNCVBf1r78Ah4dFQonKwVE3jf3xfMmJT/2G2zM+JabjuHvc2WnynwXdXRUcs12oJUYWKtgh+oTmUdFH/YWLlHRfY9ByomuQ/khsrZR7aV11NXL8AD+7qQd5r7eOQIDAQAB', _0x5b7ef6[_0x1d46('‫5ac', 'ns@I')]);
  var _0x25f463 = _0x2b5d8d[_0x1d46('‮5ad', 'KBVx')](_0x18cb7e, _0x5b7ef6[_0x1d46('‮5ae', 'p@])')]);
  return _0x25f463;
}

function get_variable(_0x19c3c4, _0x41f84d) {
  var _0x3135fb = {
    'oRVPp': function (_0x5be9cd, _0x434735) {
      return _0x5be9cd - _0x434735;
    },
    'isRzs': function (_0xd74402, _0x383518) {
      return _0xd74402 - _0x383518;
    },
    'aQHAc': function (_0x4b8e1f, _0x51a364) {
      return _0x4b8e1f == _0x51a364;
    },
    'BZLep': _0x1d46('‮5af', 'Z2%O'),
    'nXWud': function (_0x14b729, _0x1a5578) {
      return _0x14b729 == _0x1a5578;
    },
    'aVHBc': _0x1d46('‮5b0', 'ck!A'),
    'kYXZP': _0x1d46('‫5b1', 'cn7I'),
    'kaQqM': 'accelerate\x22:1',
    'lZyGw': function (_0x46066e, _0x38b5c1) {
      return _0x46066e + _0x38b5c1;
    },
    'FujUQ': 'module.exports=',
    'rWSsZ': _0x1d46('‫5b2', '3Ac7'),
    'Ghrzg': _0x1d46('‫5b3', 'ns@I'),
    'hGZTz': _0x1d46('‫5b4', 'o7GN'),
    'vLyDA': function (_0x5087f2, _0x56011e) {
      return _0x5087f2 == _0x56011e;
    },
    'zLMFP': _0x1d46('‮5b5', 'ck!A'),
    'rCACz': function (_0x363322, _0xedac82) {
      return _0x363322 + _0xedac82;
    },
    'ECZxp': _0x1d46('‫5b6', 'gAx]'),
    'BGHZR': 'action\x22:0',
    'SnaFf': function (_0x21b073, _0xe07cc9) {
      return _0x21b073 + _0xe07cc9;
    },
    'KjJGF': function (_0x23fdd4, _0x2fc522) {
      return _0x23fdd4 == _0x2fc522;
    },
    'SgdKL': _0x1d46('‫5b7', 'HOs&')
  };
  let _0x291fed = JSON[_0x1d46('‮5b8', '[B^s')](dwsj_config);
  let _0x1c006b = JSON[_0x1d46('‫5b9', 'HOs&')](current_config);
  let _0x4bd3b7 = _0x291fed[_0x1d46('‮5ba', 'phSI')](0x0, _0x291fed[_0x1d46('‮5bb', '&[cF')](_0x1c006b));
  let _0x114929 = _0x3135fb[_0x1d46('‫5bc', 'e1n#')](_0x3135fb[_0x1d46('‮5bd', '4k%d')](_0x291fed['length'], _0x4bd3b7['length']), _0x1c006b[_0x1d46('‫5be', '#M&M')]);
  let _0x228597 = _0x291fed[_0x1d46('‫5bf', '3aUr')](_0x3135fb[_0x1d46('‫5c0', '#M&M')](_0x291fed['length'], _0x114929), _0x291fed[_0x1d46('‫5c1', 'Z2%O')]);
  let _0xf98034 = '';
  if (_0x3135fb[_0x1d46('‮5c2', 'tgxE')](_0x19c3c4, _0x3135fb['BZLep']) && _0x3135fb['nXWud'](_0x41f84d, _0x3135fb[_0x1d46('‫5c3', 'W@rB')])) {
    _0xf98034 = _0x1c006b['replace'](new RegExp(_0x3135fb['kYXZP'], 'gi'), _0x3135fb[_0x1d46('‮5c4', 'rO$q')]);
    fs[_0x1d46('‫430', 'rv%a')]('./dwsj.config' + variable_num + '.js', _0x3135fb[_0x1d46('‫5c5', 'zCZ6')](_0x3135fb['lZyGw'](_0x3135fb[_0x1d46('‫5c6', '$sOJ')] + _0x4bd3b7, _0xf98034), _0x228597));
  } else if (_0x3135fb[_0x1d46('‫5c7', 'e1n#')](_0x19c3c4, _0x3135fb[_0x1d46('‮5c8', 'V4Vn')]) && _0x3135fb[_0x1d46('‮5c9', '8wGO')](_0x41f84d, _0x3135fb['aVHBc'])) {
    if ('paBeo' === _0x3135fb[_0x1d46('‫5ca', '(FS$')]) {
      console[_0x1d46('‫48d', '[B^s')](_0x1d46('‫e4', '4k%d') + $[_0x1d46('‫2bd', 'HtHt')] + _0x1d46('‫5cb', 'zCZ6'));
      subTitle += _0x1d46('‫186', 'HOs&') + $[_0x1d46('‫32f', '4k%d')] + _0x1d46('‫5cc', '56)D');
    } else {
      _0xf98034 = _0x1c006b[_0x1d46('‫4e7', '#D]i')](new RegExp('worship\x22:0', 'gi'), _0x3135fb[_0x1d46('‮5cd', 's*%j')]);
      fs[_0x1d46('‫5ce', '56)D')](_0x1d46('‫526', 'rv%a') + variable_num + '.js', _0x3135fb['lZyGw'](_0x3135fb['lZyGw'](_0x3135fb['lZyGw'](_0x3135fb['FujUQ'], _0x4bd3b7), _0xf98034), _0x228597));
    }
  } else if (_0x19c3c4 == _0x1d46('‫5cf', 'GUfc') && _0x3135fb['vLyDA'](_0x41f84d, _0x3135fb['aVHBc'])) {
    _0xf98034 = _0x1c006b[_0x1d46('‫5d0', '&Xo7')](new RegExp(_0x1d46('‮5d1', 's*%j'), 'gi'), _0x3135fb[_0x1d46('‫5d2', '#M&M')]);
    fs['writeFileSync'](_0x1d46('‮5d3', '3Ac7') + variable_num + _0x1d46('‮5d4', '(FS$'), _0x3135fb[_0x1d46('‮5d5', 'Z2%O')](_0x3135fb[_0x1d46('‫5d6', 'r[uN')](_0x3135fb[_0x1d46('‫5d7', 'rO$q')] + _0x4bd3b7, _0xf98034), _0x228597));
  }
  if (_0x3135fb['vLyDA'](_0x19c3c4, _0x3135fb[_0x1d46('‫5d8', 'zCZ6')]) && _0x3135fb[_0x1d46('‮5d9', 'gAx]')](_0x41f84d, _0x3135fb['ECZxp'])) {
    _0xf98034 = _0x291fed[_0x1d46('‫5da', '#M&M')](/action\":1/g, _0x3135fb[_0x1d46('‫5db', 'CLO(')])['replace'](/accelerate\":1/g, 'accelerate\x22:0')[_0x1d46('‫5dc', '3b]z')](/worship\":1/g, 'worship\x22:0');
    fs[_0x1d46('‫5dd', '[B^s')](_0x1d46('‫526', 'rv%a') + variable_num + '.js', _0x3135fb[_0x1d46('‮5de', '$sOJ')](_0x3135fb['FujUQ'], _0xf98034));
  }
  if (_0x3135fb[_0x1d46('‮5df', 'phSI')](_0x19c3c4, _0x3135fb[_0x1d46('‮5e0', 'GUfc')]) && _0x41f84d == _0x3135fb['SgdKL']) {
    _0xf98034 = _0x291fed[_0x1d46('‫5e1', 'r[uN')](/action\":1/g, _0x3135fb[_0x1d46('‫5e2', 'ck!A')]);
    fs['writeFileSync'](_0x1d46('‫24', '4k%d') + variable_num + _0x1d46('‫5e3', '3aUr'), _0x3135fb[_0x1d46('‫5e4', 'r[uN')](_0x3135fb[_0x1d46('‮5e5', 's*%j')], _0xf98034));
  }
}
async function config_exists() {
  var _0x5fd8c8 = {
    'vefGi': function (_0x480acc, _0x590d52) {
      return _0x480acc + _0x590d52;
    },
    'SbsOF': function (_0xb95bae, _0x5739e1) {
      return _0xb95bae !== _0x5739e1;
    },
    'FgTjy': _0x1d46('‫5e6', 'jo2@'),
    'gAprV': function (_0x3e4931, _0x57d48b) {
      return _0x3e4931 !== _0x57d48b;
    },
    'YZDrL': function (_0x4ba265) {
      return _0x4ba265();
    },
    'zxGuT': function (_0x33723a, _0xe81e03) {
      return _0x33723a === _0xe81e03;
    },
    'gCukW': _0x1d46('‮5e7', '3Ac7'),
    'cuYFG': _0x1d46('‮5e8', '56)D'),
    'tyoXV': _0x1d46('‮5e9', 'x7C6'),
    'detlf': _0x1d46('‮5ea', 'lXIT'),
    'IBpbT': _0x1d46('‮5eb', 'ns@I'),
    'QjOdc': _0x1d46('‮5ec', '#D]i'),
    'ESZPq': function (_0x354bcc, _0x1f2ee3) {
      return _0x354bcc === _0x1f2ee3;
    },
    'dbXNB': 'undeJ',
    'IRBDB': function (_0x31d4ef, _0x2c84a1) {
      return _0x31d4ef != _0x2c84a1;
    },
    'UEZtY': _0x1d46('‫5ed', 'jo2@'),
    'SvssH': 'RyggN',
    'rQoGe': function (_0x1a1e1b, _0x50bf9d) {
      return _0x1a1e1b < _0x50bf9d;
    },
    'GaQsc': function (_0x544e94, _0x2dfb01) {
      return _0x544e94 + _0x2dfb01;
    },
    'KKkSt': _0x1d46('‫5ee', 'rO$q'),
    'StUOL': function (_0x25c3c0, _0x5c9fcd) {
      return _0x25c3c0 !== _0x5c9fcd;
    },
    'DVJCz': _0x1d46('‫5ef', 'KBVx'),
    'ebmCr': _0x1d46('‫5f0', 'sTrt'),
    'TavjI': function (_0x553039, _0x21ec6d) {
      return _0x553039 === _0x21ec6d;
    },
    'dChuJ': _0x1d46('‫5f1', 'rO$q'),
    'rgGaw': _0x1d46('‮5f2', 'ck!A')
  };
  fs['exists'](_0x1d46('‮5f3', '[B^s') + variable_num + _0x1d46('‫4eb', '8wGO'), function (_0x189d14) {
    var _0x4bf6fd = {
      'Ilhkn': _0x5fd8c8['tyoXV'],
      'RXVjM': _0x5fd8c8['detlf'],
      'lIESG': _0x5fd8c8['IBpbT'],
      'cLsTr': _0x5fd8c8[_0x1d46('‫5f4', '8wGO')]
    };
    if (_0x5fd8c8[_0x1d46('‫5f5', 'CLO(')](_0x1d46('‫5f6', '&[cF'), _0x1d46('‫5f7', 'dz8^'))) {
      if (_0x189d14) {
        if (_0x5fd8c8[_0x1d46('‮5f8', 'x7C6')]('GQjtC', _0x5fd8c8[_0x1d46('‫5f9', 'r[uN')])) {
          console[_0x1d46('‫398', 'phSI')](_0x1d46('‫ca', 'CLO(') + $[_0x1d46('‫227', 's*%j')] + '\x20丢骰子】:\x20网络请求失败');
          subTitle += '\x0a【soy脚本提示---账号\x20' + $['index'] + _0x1d46('‫5fa', 'HOs&');
          console[_0x1d46('‮112', 'D2Ss')](_0x5fd8c8['vefGi'](error, '\x0a'));
        } else {
          if (_0x5fd8c8[_0x1d46('‮5fb', '#D]i')](dwsj_config[_0x1d46('‮5fc', 'cn7I')][_0x1d46('‫5fd', '(FS$')], dwsj_variable[_0x1d46('‮30', 'V7UC')][_0x1d46('‮5fe', 'rO$q')][_0x1d46('‫5ff', 'ns@I')])) {
            if (_0x5fd8c8['ESZPq'](_0x5fd8c8[_0x1d46('‫600', 'FpVB')], _0x5fd8c8[_0x1d46('‫601', 'rv%a')])) {
              console['log'](e, response);
            } else {
              let _0xe3805a = dwsj_variable[_0x1d46('‫602', 'zCZ6')][_0x1d46('‮603', 'Z2%O')]['length'];
              for (let _0x9abdf3 = 0x0; _0x5fd8c8[_0x1d46('‫604', '[B^s')](_0x9abdf3, _0xe3805a); _0x9abdf3++) {
                data_config['push']({
                  'ID': dwsj_variable['dwsj_variable_data'][_0x1d46('‫605', '#M&M')][_0x9abdf3][_0x1d46('‮606', 'FpVB')],
                  'action': 0x0,
                  'worship': 0x0,
                  'accelerate': 0x0
                });
              }
              let _0x48dcd8 = JSON[_0x1d46('‫607', 'cn7I')](data_config);
              fs[_0x1d46('‫608', '56)D')](_0x1d46('‮609', '3b]z') + variable_num + _0x1d46('‮60a', 'zCZ6'), _0x5fd8c8['GaQsc'](_0x5fd8c8['KKkSt'] + _0x48dcd8, '}'), function (_0x50b500) {
                if (_0x5fd8c8['SbsOF'](_0x5fd8c8[_0x1d46('‫60b', 'sTrt')], _0x1d46('‮60c', 'phSI'))) {
                  if (_0x50b500) {
                    if (_0x5fd8c8[_0x1d46('‮60d', 'rO$q')](_0x1d46('‮60e', 'x7C6'), 'nrjcr')) {
                      var _0x55723b = _0x4bf6fd['Ilhkn'][_0x1d46('‫60f', 'cn7I')]('|'),
                        _0x4cab54 = 0x0;
                      while (!![]) {
                        switch (_0x55723b[_0x4cab54++]) {
                          case '0':
                            _0x3616ad['importKey'](_0x1d46('‮610', 'l29#'), _0x4bf6fd[_0x1d46('‫611', '#M&M')]);
                            continue;
                          case '1':
                            var _0x3616ad = new RSA_js();
                            continue;
                          case '2':
                            _0x3616ad[_0x1d46('‮612', 'zCZ6')]({
                              'encryptionScheme': _0x4bf6fd[_0x1d46('‮613', 'gAx]')]
                            });
                            continue;
                          case '3':
                            return _0x2ed85a;
                          case '4':
                            var _0x2ed85a = _0x3616ad[_0x1d46('‫614', '3Ac7')](message, _0x4bf6fd['cLsTr']);
                            continue;
                        }
                        break;
                      }
                    } else {
                      console['log'](_0x50b500);
                    }
                  }
                } else {
                  console[_0x1d46('‮615', 'rv%a')](_0x1d46('‫4a4', 'KBVx') + $[_0x1d46('‫11f', 'tgxE')] + '\x20丢骰子】:\x20' + _0x48dcd8[_0x1d46('‫616', '&[cF')]);
                }
              });
            }
          }
        }
      } else {
        if (_0x5fd8c8[_0x1d46('‫617', 'x7C6')](_0x5fd8c8[_0x1d46('‮618', 'lXIT')], _0x5fd8c8[_0x1d46('‮619', '3Ac7')])) {
          let _0xa4bcb8 = dwsj_variable['dwsj_variable_data'][_0x1d46('‫4a', '4k%d')][_0x1d46('‮383', 'V4Vn')];
          for (let _0x9abdf3 = 0x0; _0x9abdf3 < _0xa4bcb8; _0x9abdf3++) {
            if (_0x5fd8c8['TavjI'](_0x5fd8c8[_0x1d46('‮61a', 'x7C6')], _0x5fd8c8[_0x1d46('‮61b', 'V4Vn')])) {
              _0x5fd8c8[_0x1d46('‮61c', 'tgxE')](resolve);
            } else {
              data_config[_0x1d46('‫61d', 'HOs&')]({
                'ID': dwsj_variable['dwsj_variable_data'][_0x1d46('‮61e', 'l29#')][_0x9abdf3][_0x1d46('‫61f', '3aUr')],
                'action': 0x0,
                'worship': 0x0,
                'accelerate': 0x0
              });
            }
          }
          let _0x48dcd8 = JSON['stringify'](data_config);
          fs[_0x1d46('‮620', 'o7GN')](_0x1d46('‫621', 'sTrt') + variable_num + _0x1d46('‮622', 'S#r1'), _0x1d46('‮623', 'GUfc') + _0x48dcd8 + '}', function (_0x8a1e90) {
            if (_0x5fd8c8['zxGuT'](_0x5fd8c8[_0x1d46('‮624', 'cn7I')], _0x5fd8c8[_0x1d46('‫625', 'o7GN')])) {
              type = 0x1;
            } else {
              if (_0x8a1e90) {
                console['log'](_0x8a1e90);
              }
            }
          });
        } else {
          data_config[_0x1d46('‫23f', 'W@rB')]({
            'ID': dwsj_variable['dwsj_variable_data'][_0x1d46('‫626', 'o7GN')][num][_0x1d46('‮627', '&Xo7')],
            'action': 0x0,
            'worship': 0x0,
            'accelerate': 0x0
          });
        }
      }
    } else {
      console[_0x1d46('‮cf', 'sTrt')](e, response);
    }
  });
};
_0xodz = 'jsjiami.com.v6';



function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}