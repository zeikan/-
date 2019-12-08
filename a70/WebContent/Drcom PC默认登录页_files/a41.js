/********************  公用配置参数  ********************/
var pageVersion=1;// 页面版本(1-标准版；2-商务版；3-二维码版；4-混合版；5-保活版；6-标准版(自适应)；7-商务版(自适应)；8-标准版(混合认证)；9-商务版(混合认证)；其他-未定义，保留)

var jsVersion="1.3.6";// eportal发布的js版本

var companyInfo="本宽带计费系统由城市热点提供";// 公司信息(底部文字)

var companyLink="http://www.doctorcom.com";// 公司链接

var redirectLink="http://www.2345.com/?k84544511";// 登录重定向

var rebackLink="";//返回重定向

var accountSuffix="";// 账号后缀

var enPortal=0;// 是否支持Portal协议，进行第三方AC认证(0-不支持；1-支持)

var enPerceive=0;// 是否支持快速登录(0-不支持；1-支持)

var autoPerceive=0;// 快速登录是否允许自提交(0-显示快速登陆；1-直接无感知)

var enHttps=0;// 是否需要Https(0-不需要；1-需要)

var enMd5=0;// 是否需要MD5(0-不需要；1-需要)

var enAdvert=0;// 是否显示广告(0-不显示；1-显示)

var enSlideshow=0;// 是否显示幻灯片(0-不显示；1-显示)

var regURL="";// 短信自服务地址，如:http://cloud.doctorcom.com/CloudSelf/

var machineno="";// 设备编号

var networkModeArr = new Array(3);//网络格式后缀数组:校园网上传给2166验证的账号后不加域后缀，电信需加@telecom,移动加@cmcc,联通加@unicom.
networkModeArr[0]="";
networkModeArr[1]="";
networkModeArr[2]="@unicom";
networkModeArr[3]="@telecom";

var enVisitLink=0;//访客链接(0-不显示；1-显示)

var onlineMonitor=0;//是否在线监听(0-9002端口监听；1-在线接口监听)

var registerMode=1;//开户方式(0-私有云开户，1-BS开户)

var radiusIP="";//RADIUS服务器IP

var cvlanid="";//绑定CVLANID(用户首次登陆时强制修改密码)

var queryACIP=0;//多AC认证是否存储参数(0-不存储，1-存储)

var enWeChatCertified=0;//微信一键认证(只作用于手机页:0-不显示，1-显示)
var com_username="";// 临时账号
var com_password="";// 临时密码

/********************  登录页匹配参数  ********************/
var loginMatchMode=0;// // VLAN登录页匹配模式：0-默认；1-VLAN ID；2-IP；3-SSID；4-AREAID；5-AC NAME

var matchVlanArr = new Array(4);// VLAN ID匹配数组
matchVlanArr[0]="1|2";
matchVlanArr[1]="3|4";
matchVlanArr[2]="5|6";
matchVlanArr[3]="7|8";

var matchIPArr = new Array(4);// IP匹配数组
matchIPArr[0]="192.168.1.1|192.168.1.2";
matchIPArr[1]="192.168.1.3|192.168.1.4";
matchIPArr[2]="192.168.1.5|192.168.1.6";
matchIPArr[3]="192.168.1.7|192.168.1.8";

var matchSSIDArr = new Array(4);// SSID匹配数组(多SSID匹配同一页面可用"|"分隔)
matchSSIDArr[0]="";
matchSSIDArr[1]="";
matchSSIDArr[2]="";
matchSSIDArr[3]="";

var matchAreaIDArr = new Array(4);// 地区id匹配数组(多地区id匹配同一页面可用"|"分隔)
matchAreaIDArr[0]="";
matchAreaIDArr[1]="";
matchAreaIDArr[2]="";
matchAreaIDArr[3]="";

var matchACNameArr = new Array(4);// AC名称匹配数组(多AC匹配同一页面可用"|"分隔)
matchACNameArr[0]="";
matchACNameArr[1]="";
matchACNameArr[2]="";
matchACNameArr[3]="";

/********************  幻灯片参数  ********************/
var advertNum=3;// 广告个数(最少1个，最大5个，默认3个)

var rvtPCImgArr = new Array(5);// 广告图片(PC)
rvtPCImgArr[0]="a04.jpg";
rvtPCImgArr[1]="a05.jpg";
rvtPCImgArr[2]="a06.jpg";
rvtPCImgArr[3]="";
rvtPCImgArr[4]="";

var rvtMobileImgArr = new Array(5);// 广告图片(手机)
rvtMobileImgArr[0]="a34.jpg";
rvtMobileImgArr[1]="a35.jpg";
rvtMobileImgArr[2]="a36.jpg";
rvtMobileImgArr[3]="";
rvtMobileImgArr[4]="";

var rvtTextArr = new Array(5);// 广告文字
rvtTextArr[0]="广告测试图1";
rvtTextArr[1]="广告测试图2";
rvtTextArr[2]="广告测试图3";
rvtTextArr[3]="";
rvtTextArr[4]="";

var rvtLinkArr = new Array(5);// 广告链接
rvtLinkArr[0]="http://www.doctorcom.com";
rvtLinkArr[1]="http://www.doctorcom.com";
rvtLinkArr[2]="http://www.doctorcom.com";
rvtLinkArr[3]="";
rvtLinkArr[4]="";

/********************  VLAN广告参数  ********************/
var vlanTitleArr = new Array(4);// VLAN层说明
vlanTitleArr[0]="F1";
vlanTitleArr[1]="F2";
vlanTitleArr[2]="F3";
vlanTitleArr[3]="F4";

var matchAdvertNumArr = new Array(4);// VLAN层广告个数
matchAdvertNumArr[0]=4;
matchAdvertNumArr[1]=4;
matchAdvertNumArr[2]=4;
matchAdvertNumArr[3]=4;

var firstImgArr = new Array(4);// 首层图片
firstImgArr[0]="a47.jpg";
firstImgArr[1]="a48.jpg";
firstImgArr[2]="a49.jpg";
firstImgArr[3]="a50.jpg";

var firstTextArr = new Array(4);// 首层文字
firstTextArr[0]="H&M";
firstTextArr[1]="VIGOSS";
firstTextArr[2]="Pull&Bear";
firstTextArr[3]="ONLY";

var firstHrefArr = new Array(4);// 首层链接
firstHrefArr[0]="http://www.doctorcom.com";
firstHrefArr[1]="http://www.doctorcom.com";
firstHrefArr[2]="http://www.doctorcom.com";
firstHrefArr[3]="http://www.doctorcom.com";

var secondImgArr = new Array(4);// 第2层图片
secondImgArr[0]="a51.jpg";
secondImgArr[1]="a52.jpg";
secondImgArr[2]="a53.jpg";
secondImgArr[3]="a54.jpg";

var secondTextArr = new Array(4);// 第2层文字
secondTextArr[0]="星巴克";
secondTextArr[1]="汉拿山";
secondTextArr[2]="必胜客";
secondTextArr[3]="和民居食屋";

var secondHrefArr = new Array(4);// 第2层链接
secondHrefArr[0]="http://www.doctorcom.com";
secondHrefArr[1]="http://www.doctorcom.com";
secondHrefArr[2]="http://www.doctorcom.com";
secondHrefArr[3]="http://www.doctorcom.com";

var thirdImgArr = new Array(4);// 第3层图片
thirdImgArr[0]="a55.jpg";
thirdImgArr[1]="a56.jpg";
thirdImgArr[2]="a57.jpg";
thirdImgArr[3]="a58.jpg";

var thirdTextArr = new Array(4);// 第3层文字
thirdTextArr[0]="GUESS";
thirdTextArr[1]="LEVIS";
thirdTextArr[2]="CK";
thirdTextArr[3]="NOVO百货";

var thirdHrefArr = new Array(4);// 第3层链接
thirdHrefArr[0]="http://www.doctorcom.com";
thirdHrefArr[1]="http://www.doctorcom.com";
thirdHrefArr[2]="http://www.doctorcom.com";
thirdHrefArr[3]="http://www.doctorcom.com";

var fourthImgArr = new Array(4);// 第4层图片
fourthImgArr[0]="a59.jpg";
fourthImgArr[1]="a60.jpg";
fourthImgArr[2]="a61.jpg";
fourthImgArr[3]="a62.jpg";

var fourthTextArr = new Array(4);// 第4层文字
fourthTextArr[0]="EMU服饰";
fourthTextArr[1]="HIM汉崇";
fourthTextArr[2]="汉堡王";
fourthTextArr[3]="华润万家";

var fourthHrefArr = new Array(4);// 第4层链接
fourthHrefArr[0]="http://www.doctorcom.com";
fourthHrefArr[1]="http://www.doctorcom.com";
fourthHrefArr[2]="http://www.doctorcom.com";
fourthHrefArr[3]="http://www.doctorcom.com";

var matchImgArr = new Array(4);// 图片匹配数组
matchImgArr[0]=firstImgArr;
matchImgArr[1]=secondImgArr;
matchImgArr[2]=thirdImgArr;
matchImgArr[3]=fourthImgArr;

var matchTextArr = new Array(4);// 文字匹配数组
matchTextArr[0]=firstTextArr;
matchTextArr[1]=secondTextArr;
matchTextArr[2]=thirdTextArr;
matchTextArr[3]=fourthTextArr;

var matchHrefArr = new Array(4);// 链接匹配数组
matchHrefArr[0]=firstHrefArr;
matchHrefArr[1]=secondHrefArr;
matchHrefArr[2]=thirdHrefArr;
matchHrefArr[3]=fourthHrefArr;


/********************  公用函数  ********************/
//提示框显示时间(默认3秒)
var display_time = 3000;

//重写alert方法
//window.alert = function(message){
//	ui.alert(message, display_time, true);
//};

//加载自定义提示框操作
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('8 F={1k:q(1R,2q,2F){7(1R.3Z){1R.3Z("1k"+2q,q(){2F.4n(1R,4o)})}G{1R.45(2q,2F,L)}},1v:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=O;14(8 i=0,l=1a.X;i<l;i++){7(1a[i]==H){c=L;1g}};7(c){d.1D=1a.2a(\' \')+\' \'+H};7(H==6.H){6.2n=O}},48:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=L;14(8 i=0,l=1a.X;i<l;i++){7(1a[i]==H){c=O;1g}};Z c},1t:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=[];14(8 i=0,l=1a.X;i<l;i++){7(1a[i]!=H){c.1w(1a[i])}};d.1D=c.2a(\' \')},H:\'4a\',1b:\'\',2n:L,2w:q(D){1y(\'8 2r = V 3b(/\'+D.I(\'1M\')+\'/)\');7(!2r.3a(D.U)){6.1v(D);6.1b+=6.1F(D,\'38！\')}G{6.1t(D)}},2t:q(D){7(D.1h==\'2s\'&&D.1Y==L){6.1v(D);6.1b+=\'4G\'+6.1F(D,\'\')+\'！<2D>\'}G 7(D.U.1i(/\\s/g,\'\')==\'\'||(J(D.I(\'1u\'))==\'W\'&&D.U==D.I(\'1u\'))){6.1v(D);6.1b+=6.1F(D,\'3v！\')}G 7(D.1h==\'2s\'&&D.1Y==O){6.1t(D)}G 7(D.U.1i(/\\s/g,\'\')!=\'\'){6.1t(D)}},2B:q(D){7(D.U!=\'\'){1y(\'8 2r = V 3b(/\'+D.I(\'1M\')+\'/)\');7(2r.3a(D.U)){6.1t(D);6.1b+=6.1F(D,\'38！\')}G{6.1v(D)}}G{6.1t(D)}},35:q(D){7(D.U==\'\'){D.U=D.I(\'1u\');7(J(D.1j.I(\'2h\'))==\'W\'){6.1v(D,D.1j.I(\'2h\'))}}},3q:q(D){7(D.U==D.I(\'1u\')){D.U=\'\';7(J(D.1j.I(\'2h\'))==\'W\'){6.1t(D,D.1j.I(\'2h\'))}}},1F:q(a,b){7(J(a.I(\'1b\'))==\'W\'){8 s=a.I(\'1b\');7(s){Z s+\'<2D>\'}G{Z\'\'}}G{Z A.s(a.1p).11+b+\'<2D>\'}},4O:q(){8 K=R.2I;14(8 a=0,l=K.X;a<l;a++){7(J(K[a].f)!=\'1f\'){4w};K[a].f=L;14(8 b=0,j=K[a].X;b<j;b++){7(J(K[a][b])!=\'1f\'){7(J(K[a][b].I(\'2j\'))==\'W\'&&K[a][b].I(\'2j\')=="O"){7(J(K[a][b].I(\'1M\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.2w(6)})}G{6.1k(K[a][b],\'2f\',q(){F.2t(6)})}}G 7(J(K[a][b].I(\'1M\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.2B(6)})};7(J(K[a][b].I(\'3t\'))==\'W\'){6.3i(K[a][b])};7(K[a][b]&&J(K[a][b].I(\'1u\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.35(6)});6.1k(K[a][b],\'3M\',q(){F.3q(6)})}}};6.1k(K[a],\'3s\',q(e){F.2n=L;F.1b=\'\';14(8 i=0,j=6.X;i<j;i++){7(J(6[i].I(\'2j\'))==\'W\'&&6[i].I(\'2j\')=="O"){7(6[i].1h==\'3g\'){8 1Z=6[6[i].1c],z=O;14(8 r=0;r<1Z.X;r++){7(1Z[r].1Y){z=L;1g}};7(z){F.1v(1Z[0]);F.1b+=F.1F(6[i],\'3v！\',O)};i+=(1Z.X-1)}G 7(J(6[i].I(\'1M\'))==\'W\'){F.2w(6[i])}G{F.2t(6[i])}}G 7(J(6[i].I(\'1M\'))==\'W\'){F.2B(6[i])};7(6[i]&&J(6[i].I(\'1u\'))==\'W\'){7(6[i].U==6[i].I(\'1u\')){6[i].U=\'\'}}};7(F.2n){7(F.1b){16.37(F.1b.1i(/：/g,\'\'))};7(e.2G)e.2G();G e.3e=L}G{6.f=O;7(6.1m){6.1m()}}});7(J(K[a].I(\'2Q\'))!=\'1f\'){K[a].1m=K[a].2Q;K[a].2Q=\'\'}}},3i:q(o){8 n=o.I(\'3t\');8 1m=o.I(\'4j\');8 3p=o.I(\'4H\')||L;8 u=o.I(\'4x\')||21.4y.4t;8 f=A.$$(\'S\');8 w=o.2L+4u;1e(f.Q){2K=\'1Q\';3D=3C;3r=\'1W\';1S=\'2m(1o=0)\';1o=\'0.0\';2k=\'2S\'};7(A.$(n+\'1I\')){A.d(A.$(n+\'1I\').1p)};f.11=\'<1j 4D="3w" 4C="4B/1j-1r" 4A="\'+u+\'" 4F="\'+n+\'1I" ><1G 1h="4E" 4z="6.1j.3s();F.2Z(\\\'\'+n+\'1I\\\',\\\'\'+1m+\'\\\',\'+3p+\');" 1c="\'+n+\'" Q="2W-1H:-4N;4S:4R; 1N:\'+w+\'Y;" /></1j><3o 1c="\'+n+\'1I" 4Q="\'+n+\'1I" Q="2k:2S"></3o>\';o.B=f;F.1k(o,\'4K\',q(){8 1B=A.1B(6);8 w=6.2L;8 h=6.1P;8 s=0,p=6.1p;3j(p&&p.3k.2u()!=\'18\'){7(p.1n)s+=4J(p.1n);p=p.1p};1e(6.B.Q){2k=\'4s\';1V=1B.y-s+\'Y\';1H=1B.x+\'Y\';1s=h+\'Y\';1N=w+\'Y\'};8 2T=6.B.E[0];1e(2T.Q){1s=h+\'Y\';1N=w+\'Y\';3r=\'1W\'};2T.E[0].Q.1s=h+\'Y\';8 1E=6;7(J(6.f)==\'1f\'||!6.f){6.f=49(q(){7(J(1E.1P)==\'1f\'||!1E.1P){1E.B.Q.2k=\'2S\';4c(1E.f);1E.f=\'\'}},2C)}});R.18.3E(f);f.E[0].f=O},2Z:q(a,b,f){7(f){f()};2o{8 s=21.3d[a].R.18.11}2g(2q){8 s=\'\'};7(s){1y(\'s=\'+s);21.3d[a].R.18.11=\'\';7(J(b)==\'W\'){1y(b+\'(s)\')}G{b(s)}}G{1q(q(){F.2Z(a,b,L)},46)}}};8 A={$:q(a){Z R.44(a)},$$:q(a){7(a.22(\'<\')==-1){Z R.2M(a)}G{8 30=R.2M(\'S\');30.11=a;Z 30.E[0]}},r:q(n,m,f){7(f){Z 1x.34()*(m-n)+n}G{Z 1x.4m(1x.34()*(m-n)+n)}},d:q(a){a.1p.2H(a)},4q:q(n,v,h){8 25=V 3c((V 3c()).4i()+4h*h);25="; 4g="+25.4l();R.1J=n+"="+4k(v)+25},s:q(a){Z a.4T||a.5s},x:q(a){Z a.5w||a.5z},5x:q(n){8 v="";8 s=n+"=";7(R.1J.X>0){w=R.1J.22(s);7(w!=-1){w+=s.X;2b=R.1J.22(";",w);7(2b==-1)2b=R.1J.X;v=5B(R.1J.5v(w,2b))}};Z v},29:[],42:q(2O,1r,f,2N){8 13=6;8 k=2O.1i(/[^\\w]/g,\'\');7(J(13.29[k])==\'1f\'){13.29[k]=O;7(21.36){8 15=V 36()}G{8 M=[\'2d.1O\',\'2c.1O\',\'2d.1O.5.0\',\'2d.1O.4.0\',\'2d.1O.3.0\'];14(n=0;n<M.X;n++){2o{8 15=V 5y(M[n]);1g}2g(e){}}};15.5r("3w",2O,O);15.3f("5t","1");15.5u=q(){7(15.5C==4){7(15.5I==5J){3P 13.29[k];7(f){7(J(f)==\'W\')A.$(f).11=15.2R;G{7(2N&&2N==\'5D\'){1y(\'8 3u=\'+15.2R);1y(f(3u))}G 1y(f(15.2R))}}}}};15.3f("5F-5K","5q/x-54-1j-52;");15.53(1r)}},1B:q(a){8 y=a.3m;8 x=a.31;e=a.3l;3j(e){y+=e.3m;x+=e.31;e=e.3l};Z{\'y\':y,\'x\':x}},2J:q(f){8 s=[];14(8 i=0,l=f.X;i<l;i++){7(f[i].1c&&f[i].1c!=\'\'){3n(f[i].3k.2u()){2A\'58\':14(8 a=0;a<f[i].X;a++){7(f[i][a].59){s.1w(f[i].1c+\'=\'+28(f[i][a].U))}};1g;3h:3n(f[i].1h.2u()){2A\'3g\':8 1L=f[f[i].1c];14(8 a=0;a<1L.X;a++){7(1L[a].1Y){s.1w(1L[a].1c+\'=\'+28(1L[a].U));1g}};i+=(1L.X-1);1g;2A\'2s\':7(f[i].1Y){s.1w(f[i].1c+\'=\'+28(f[i].U))};1g;3h:s.1w(f[i].1c+\'=\'+28(f[i].U));1g}}}};Z s.2a(\'&\')},4Y:q(K){8 s=[];14(8 i=0,l=K.X;i<l;i++){7(J(K[i])==\'2U\'){s.1w(6.2J(K[i]))}G{7(R.2I[K[i]]){s.1w(6.2J(R.2I[K[i]]))}}};Z s.2a(\'&\')}};(q(w){8 d=w.R;8 16=w.16={};8 m=L,2Y=L;16.37=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5j\',\'t\':t})};16.5o=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5p\',\'t\':t})};16.5m=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5n\',\'t\':t})};16.5c=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5a\',\'t\':t})};16.5b=q(s,f,c){7(c){m=V S({\'c\':L})}G{m=L};V S({\'c\':L,\'s\':s,\'H\':\'3H\',\'f\':f})};16.5g=q(s,f,c){7(c){m=V S({\'c\':L})}G{m=L};V S({\'c\':L,\'s\':s,\'H\':\'3O\',\'f\':f})};16.5h=q(24,1l,1r,c,f,19){7(c){m=V S({\'c\':L})}G{m=L};Z 2Y=V S({\'c\':L,\'24\':24,\'1l\':1l,\'H\':\'1T\',\'1r\':1r,\'1m\':f,\'19\':19})};16.3J=q(B,17,1C){q a(B,17,1C){8 13=6;13.17=17;13.B=B;B.5e=q(e){8 e=e||32;8 w=A.1B(6);13.x=e.3Y-w.x;8 23=1C==\'1Q\'?R.18.1n+R.1d.1n:0;13.y=e.33+23-w.y;13.17.Q.2K=1C;2o{e.2G()}2g(o){e.3e=L};R.40=q(e){8 e=e||32;8 23=1C==\'1Q\'?R.18.1n+R.1d.1n:0;13.17.Q.1V=e.33+23-13.y+\'Y\';13.17.Q.1H=e.3Y-13.x+\'Y\'}};B.5f=q(){R.40=\'\'}};7(J(B)!=\'2U\'){B=A.$(B)};7(J(17)==\'W\'){17=A.$(17)};V a(B,17||B.1p,1C||\'1Q\')};8 1X=R.5d(\'5i\');14(8 i=0;i<1X.X;i++){7(1X[i].I(\'2l\')&&1X[i].I(\'2l\').22(\'5l.5k\')>-1){8 3N=1X[i].I(\'2l\').1i(/\\/[^\\/]*$/,\'\').1i(/(\\/?)[^\\/]*$/,\'$1\');1g}};q S(B){6.3X=q(){6.C=d.2M(\'S\');1e(6.C.Q){2K=\'1Q\';3D=3C;1V=\'1K\';1H=\'1K\';1S=\'2m(1o=0)\';1o=0;1N=1x.2p(d.1d.4Z,d.1d.3V)+\'Y\';1s=1x.2p(d.1d.51,d.1d.3U)+\'Y\';2W=\'1K\';50=\'1K\';2P=\'#4V\'};6.1U=\'\';d.18.3E(6.C);7(J(B.H)==\'W\'){7(d.3W&&B.H!=\'1T\'){6.1U=\' 2y:2x.2c.3G(3F=4, 3y=3x, 3z="#3B",3A=1) 2y:2x.2c.4U(4X="#4W", 57="#56")\';7(B.H==\'1T\'){6.1U=\' 2y:2x.2c.3G(3F=4, 3y=3x, 3z="#3B",3A=1)\'}};1e(6.C.Q){1N=\'2e\';1s=\'2e\';2P=\'55\'};6.C.1D=B.H;7(B.H==\'3H\'){6.C.11=\'<p 12="41">\'+B.s+\'</p><p 12="3R"><1G 1h="26" 12="27" U="3Q" /><1G 1h="26" 12="27 3I" U="3K" /></p>\';8 N=6.C.E[1];N.E[0].C=6.C;N.E[0].P=6.P;N.E[0].f=B.f;7(m){N.E[0].c=m};N.E[0].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(O)};N.E[1].C=6.C;N.E[1].P=6.P;N.E[1].f=B.f;7(m){N.E[1].c=m};N.E[1].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(L)}}G 7(B.H==\'3O\'){6.C.11=\'<p 12="5G">\'+B.s+\'</p><p 12="5H"><1G 1h="5E" 12="5L" /></p><p 12="3R"><1G 1h="26" 12="27" U="3Q" /><1G 1h="26" 12="27 3I" U="3K" /></p>\';8 N=6.C.E[2];N.E[0].C=6.C;N.E[0].P=6.P;N.E[0].f=B.f;7(m){N.E[0].c=m};N.E[0].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(6.1p.1p.E[1].E[0].U)};N.E[1].C=6.C;N.E[1].P=6.P;N.E[1].f=B.f;7(m){N.E[1].c=m};N.E[1].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(L)};6.C.E[1].E[0].3M()}G 7(B.H==\'1T\'){6.C.11=\'<S 12="5A"><3L></3L></S><S 12="4p"></S><2V 12="2V"></2V>\';6.C.Q.2P=\'#4r\';8 N=6.C.E[0];16.3J(N);8 1z=6.C.E[1];N.E[0].11=B.24;6.C.E[2].C=6.C;6.C.E[2].P=6.P;7(m){6.C.E[2].c=m};6.C.E[2].1A=q(){6.P(1);7(6.c){6.c.P(0.5)}};6.47=q(){6.C.E[2].1A();2o{3P 6}2g(e){}};7(J(B.1l)==\'2U\'){1z.11=B.1l.11}G 7(B.1l.4d(/(<[^>]+>)+/)){1z.11=B.1l}G{1z.11=\'<4e 2l="\'+3N+\'4b/4L.4I" 4M="4P" Q="2W:4v 4f;" />\';A.42(B.1l,B.1r||\'\',q(2X){7(B.1m){B.1m(2X,1z)}G{1z.11=2X};2Y.2z()})}}G{6.C.11=\'<p 12="41">\'+B.s+\'</p>\'};6.2z(B.19)};6.2i(0.1)};6.2z=q(19){8 19=19||[L,L];6.C.Q.1V=\'1K\';6.C.Q.1H=\'1K\';8 h=d.1d.3U;8 w=d.1d.3V;7(19[0]){1e(6.C.E[1].Q){1N=19[0]+\'Y\';2v=\'1W\'}};7(19[1]){1e(6.C.E[1].Q){1s=19[1]+\'Y\';2v=\'1W\';3S=\'2e\'}}G 7(h-20<6.C.1P){1e(6.C.E[1].Q){1s=h-20-39+\'Y\';2v=\'1W\';3S=\'2e\'}};6.C.Q.1V=(h-6.C.1P)/2+1x.2p(d.1d.1n,d.18.1n)+\'Y\';6.C.Q.1H=(w-6.C.2L)/2+1x.2p(d.1d.3T,d.18.3T)+\'Y\'};6.2i=q(i){8 T=6;1e(6.C.Q){1S=\'2m(1o=\'+(i*2C)+\')\'+6.1U;1o=i};7(d.3W&&i>0.9&&B.H==\'1T\'){6.C.Q.1S=\'\'};7(J(B.H)==\'W\'){7(i<1){1q(q(){T.2i(i+0.1)},5)}G 7(B.c){1q(q(){T.P(1)},B.t||43)}}G{7(i<0.3){1q(q(){T.2i(i+0.2)},5)}G 7(B.c){1q(q(){T.P(0.3)},B.t||43)}}};6.P=q(i){8 T=6;1e(6.C.Q){1S=\'2m(1o=\'+(i*2C)+\')\'+6.1U;1o=i};7(J(B.H)==\'W\'){7(i>0){1q(q(){T.P(i-0.4)},5)}G{d.18.2H(6.C)}}G{7(i>0){1q(q(){T.P(i-0.1)},10)}G{d.18.2H(6.C)}}};6.3X()}})(21);',62,358,'||||||this|if|var||||||||||||||||||function|||||||||||ob|G_d|em|children||else|css|getAttribute|typeof|fs|false||ad|true|yc|style|document|div||value|new|string|length|px|return||innerHTML|class|self|for|xm|ui|yb|body|wh|cs|ts|name|documentElement|with|undefined|break|type|replace|form|on|obj|fun|scrollTop|opacity|parentNode|setTimeout|data|height|remove|def|addcss|push|Math|eval|bd|onclick|wz|fd|className|sel|tsf|input|left|_i|cookie|0px|fo|exp|width|XMLHTTP|offsetHeight|absolute|el|filter|ui_box|iecss|top|hidden|sp|checked|rs||window|indexOf|tj|title|_e|button|ui_button|encodeURIComponent|ajone|join|end|Microsoft|MSXML2|auto|blur|catch|dcss|xs|req|display|src|alpha|zt|try|max|ev|re|checkbox|st2|toLowerCase|overflowX|st1|DXImageTransform|progid|ct|case|st3|100|br|split|fn|preventDefault|removeChild|forms|fnr|position|offsetWidth|createElement|gs|url|backgroundColor|onsubmit|responseText|none|fm|object|span|margin|da|zi|upimg|_1|offsetLeft|event|clientY|random|st4|XMLHttpRequest|alert|格式不正确||test|RegExp|Date|frames|returnValue|setRequestHeader|radio|default|aimg|while|tagName|offsetParent|offsetTop|switch|iframe|sf|st5|overflow|submit|fname|_j|不能为空|post|135|Direction|Color|positive|CCCCCC|99|zIndex|appendChild|Strength|Shadow|ui_confirm|ui_button_r|move|取消|strong|focus|PATH|ui_prompt|delete|确认|ui_p|overflowY|scrollLeft|clientHeight|clientWidth|all|cj|clientX|attachEvent|onmousemove|ui_msg|aj|2000|getElementById|addEventListener|500|close|hascss|setInterval|F_css|images|clearInterval|match|img|30px|expires|1000|getTime|funbak|escape|toGMTString|round|apply|arguments|ui_box_content|wc|FFFFFF|block|href|140|10px|continue|furl|location|onchange|action|multipart|enctype|method|file|target|请选择|funstr|gif|parseInt|mouseover|ui_load|alt|140px|st|加载中|id|pointer|cursor|previousElementSibling|gradient|999999|FAFAFA|startColorstr|fsnr|scrollWidth|padding|scrollHeight|urlencoded|send|www|#fff|E3E3E3|endColorstr|select|selected|ui_notice|confirm|notice|getElementsByTagName|onmousedown|onmouseup|prompt|box|script|ui_alert|js|yu|success|ui_success|error|ui_error|application|open|previousSibling|is_ajax|onreadystatechange|substring|nextElementSibling|rc|ActiveXObject|nextSibling|ui_box_title|unescape|readyState|json|text|Content|ui_p1|ui_p2|status|200|Type|ui_text'.split('|'),0,{}));

ps=1;pid='1';calg='12345678';
function safe_add(x,y){
	var lsw=(x&0xFFFF)+(y&0xFFFF)
	var msw=(x>>16)+(y>>16)+(lsw>>16)
	return(msw<<16)|(lsw&0xFFFF)
}
function rol(num,cnt){
	return(num<<cnt)|(num>>>(32-cnt));
}
function cmn(q,a,b,x,s,t){
	return safe_add(rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);
}
function ff(a,b,c,d,x,s,t){
	return cmn((b&c)|((~b)&d),a,b,x,s,t);
}
function gg(a,b,c,d,x,s,t){
	return cmn((b&d)|(c&(~d)),a,b,x,s,t);
}
function hh(a,b,c,d,x,s,t){
	return cmn(b^c^d,a,b,x,s,t);
}
function ii(a,b,c,d,x,s,t){
	return cmn(c^(b|(~d)),a,b,x,s,t);
}
function coreMD5(x){
	var a=1732584193;
	var b=-271733879;
	var c=-1732584194;
	var d=271733878;
	for(i=0; i < x.length; i+=16){
		var olda=a;
		var oldb=b;
		var oldc=c;
		var oldd=d;
		a=ff(a,b,c,d,x[i+0],7,-680876936)
		d=ff(d,a,b,c,x[i+1],12,-389564586)
		c=ff(c,d,a,b,x[i+2],17,606105819)
		b=ff(b,c,d,a,x[i+3],22,-1044525330)
		a=ff(a,b,c,d,x[i+4],7,-176418897)
		d=ff(d,a,b,c,x[i+5],12,1200080426)
		c=ff(c,d,a,b,x[i+6],17,-1473231341)
		b=ff(b,c,d,a,x[i+7],22,-45705983)
		a=ff(a,b,c,d,x[i+8],7,1770035416)
		d=ff(d,a,b,c,x[i+9],12,-1958414417)
		c=ff(c,d,a,b,x[i+10],17,-42063)
		b=ff(b,c,d,a,x[i+11],22,-1990404162)
		a=ff(a,b,c,d,x[i+12],7,1804603682)
		d=ff(d,a,b,c,x[i+13],12,-40341101)
		c=ff(c,d,a,b,x[i+14],17,-1502002290)
		b=ff(b,c,d,a,x[i+15],22,1236535329)
		a=gg(a,b,c,d,x[i+1],5,-165796510)
		d=gg(d,a,b,c,x[i+6],9,-1069501632)
		c=gg(c,d,a,b,x[i+11],14,643717713)
		b=gg(b,c,d,a,x[i+0],20,-373897302)
		a=gg(a,b,c,d,x[i+5],5,-701558691)
		d=gg(d,a,b,c,x[i+10],9,38016083)
		c=gg(c,d,a,b,x[i+15],14,-660478335)
		b=gg(b,c,d,a,x[i+4],20,-405537848)
		a=gg(a,b,c,d,x[i+9],5,568446438)
		d=gg(d,a,b,c,x[i+14],9,-1019803690)
		c=gg(c,d,a,b,x[i+3],14,-187363961)
		b=gg(b,c,d,a,x[i+8],20,1163531501)
		a=gg(a,b,c,d,x[i+13],5,-1444681467)
		d=gg(d,a,b,c,x[i+2],9,-51403784)
		c=gg(c,d,a,b,x[i+7],14,1735328473)
		b=gg(b,c,d,a,x[i+12],20,-1926607734)
		a=hh(a,b,c,d,x[i+5],4,-378558)
		d=hh(d,a,b,c,x[i+8],11,-2022574463)
		c=hh(c,d,a,b,x[i+11],16,1839030562)
		b=hh(b,c,d,a,x[i+14],23,-35309556)
		a=hh(a,b,c,d,x[i+1],4,-1530992060)
		d=hh(d,a,b,c,x[i+4],11,1272893353)
		c=hh(c,d,a,b,x[i+7],16,-155497632)
		b=hh(b,c,d,a,x[i+10],23,-1094730640)
		a=hh(a,b,c,d,x[i+13],4,681279174)
		d=hh(d,a,b,c,x[i+0],11,-358537222)
		c=hh(c,d,a,b,x[i+3],16,-722521979)
		b=hh(b,c,d,a,x[i+6],23,76029189)
		a=hh(a,b,c,d,x[i+9],4,-640364487)
		d=hh(d,a,b,c,x[i+12],11,-421815835)
		c=hh(c,d,a,b,x[i+15],16,530742520)
		b=hh(b,c,d,a,x[i+2],23,-995338651)
		a=ii(a,b,c,d,x[i+0],6,-198630844)
		d=ii(d,a,b,c,x[i+7],10,1126891415)
		c=ii(c,d,a,b,x[i+14],15,-1416354905)
		b=ii(b,c,d,a,x[i+5],21,-57434055)
		a=ii(a,b,c,d,x[i+12],6,1700485571)
		d=ii(d,a,b,c,x[i+3],10,-1894986606)
		c=ii(c,d,a,b,x[i+10],15,-1051523)
		b=ii(b,c,d,a,x[i+1],21,-2054922799)
		a=ii(a,b,c,d,x[i+8],6,1873313359)
		d=ii(d,a,b,c,x[i+15],10,-30611744)
		c=ii(c,d,a,b,x[i+6],15,-1560198380)
		b=ii(b,c,d,a,x[i+13],21,1309151649)
		a=ii(a,b,c,d,x[i+4],6,-145523070)
		d=ii(d,a,b,c,x[i+11],10,-1120210379)
		c=ii(c,d,a,b,x[i+2],15,718787259)
		b=ii(b,c,d,a,x[i+9],21,-343485551)
		a=safe_add(a,olda);
		b=safe_add(b,oldb);
		c=safe_add(c,oldc);
		d=safe_add(d,oldd);
	}
	return [a,b,c,d];
}
function binl2hex(binarray){
	var hex_tab="0123456789abcdef"
	var str=""
	for(var i=0; i < binarray.length * 4; i++){
		str+=hex_tab.charAt((binarray[i>>2] >>((i%4)*8+4))&0xF)+
		hex_tab.charAt((binarray[i>>2] >>((i%4)*8))&0xF)
	}
	return str;
}
function binl2b64(binarray){
	var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
	var str="";
	for(var i=0; i < binarray.length * 32; i+=6){
		str+=tab.charAt(((binarray[i>>5] <<(i%32))&0x3F)|((binarray[i>>5+1] >>(32-i%32))&0x3F))
	}
	return str;
}
function str2binl(str){
	var nblk=((str.length+8)>>6)+1 // number of 16-word blocks
	var blks=new Array(nblk * 16)
	for(var i=0; i < nblk * 16; i++) 
		blks[i]=0
	for(var i=0; i < str.length; i++)
		blks[i>>2]|=(str.charCodeAt(i)&0xFF) <<((i%4) * 8)
  blks[i>>2]|=0x80 <<((i%4) * 8)
  blks[nblk*16-2]=str.length * 8
  return blks;
}
function strw2binl(str){
	var nblk=((str.length+4)>>5)+1 // number of 16-word blocks
	var blks=new Array(nblk * 16)
	for(var i=0; i < nblk * 16; i++) blks[i]=0
		for(var i=0; i < str.length; i++)
			blks[i>>1]|=str.charCodeAt(i) <<((i%2) * 16)
	blks[i>>1]|=0x80 <<((i%2) * 16)
	blks[nblk*16-2]=str.length * 16
	return blks;
}
function hexMD5(str){
	return binl2hex(coreMD5( str2binl(str)));
}
function hexMD5w(str){
	return binl2hex(coreMD5(strw2binl(str)));
}
function b64MD5(str){
	return binl2b64(coreMD5( str2binl(str)));
}
function b64MD5w(str){
	return binl2b64(coreMD5(strw2binl(str)));
}
function calcMD5(str){
	return binl2hex(coreMD5( str2binl(str)));
}
function xproc1(str){
	var EChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var out,i,len,c1,c2,c3;
	len=str.length;
	i=0;
	out = "";
	while(i<len){
		c1=str.charCodeAt(i++)&0xff;
		if(i==len){
			out+=EChars.charAt(c1>>2);
			out+=EChars.charAt((c1&0x3)<<4);
			out+= "==";
			break;
		}
		c2=str.charCodeAt(i++);
		if(i==len){
			out+=EChars.charAt(c1>>2);
			out+=EChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
			out+=EChars.charAt((c2&0xF)<<2);
			out+="=";
			break;
		}
		c3=str.charCodeAt(i++);
		out+=EChars.charAt(c1>>2);
		out+=EChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
		out+=EChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));
		out+=EChars.charAt(c3&0x3F);
	}
	return out;
}
function cc(ss){
	f0.R1.value=ss;
}

// 登录认证事件(form_id为自定义表单id: 1-表单f1;2-表单f2;3-表单f3)
function ee(form_id){
	if(form_id == 1){// 会员认证
		document.getElementById("login").disabled = true;
		
		/** 验证会员登录表单 */
		if(document.f1.DDDDD.value==""){
			alert("请输入会员账号！ Please enter your VIP Number");
			document.getElementById("login").disabled=false;
			return false;
		}
		if(document.f1.upass.value==""){
			alert("请输入会员密码！ Please enter your VIP Password");
			document.getElementById("login").disabled=false;
			return false;
		}
		
		/** 设置会员数据到隐藏表单 */
		var select = document.getElementById('network_mode').value;
		document.f0.DDDDD.value=document.f1.DDDDD.value+ networkModeArr[select];// + accountSuffix;// 增加账号后缀
		if(enMd5 == 1){// 支持MD5
			tmpchar=pid+document.f1.upass.value+calg;
			document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
			document.f0.R2.value=1;
		}
		else{
//			document.f0.upass.value=xproc1(document.f1.upass.value);
			document.f0.upass.value=document.f1.upass.value;
			document.f0.R2.value="";
		}
		
		if(typeof(document.getElementsByName("save_me")[0]) == "object"){
			if(document.getElementsByName("save_me")[0].checked){
				var uname = document.f1.DDDDD.value;
				var pass = document.f1.upass.value;
				setCookie("md5_login",uname+"|"+pass);
			}
			else {
				delCookie("md5_login");
			}
		}
		
		document.getElementById("login").disabled=false;
	}
	else if(form_id == 2){// 手机认证
		document.getElementById("login2").disabled = true;
		
		/** 验证手机登录表单 */
		if(document.f2.DDDDD.value==""){
			alert("请输入手机号！ Please enter your Phone Number");
			document.getElementById("login2").disabled=false;
			return false;
		}
		if(!IsValidMobile(document.f2.DDDDD.value)){
			alert("手机号请输入正确！");
			document.getElementById("login2").disabled=false;
			return false;
		}
		if(document.f2.upass.value==""){
			alert("请输入短信验证码！ Please enter your SMS Code");
			document.getElementById("login2").disabled=false;
			return false;
		}
		
		/** 设置手机数据到隐藏表单 */
		var select = document.getElementById('network_mode').value;
		document.f0.DDDDD.value=document.f2.DDDDD.value + networkModeArr[select];// + accountSuffix;// 增加账号后缀
		if(enMd5 == 1){// 支持MD5
			tmpchar=pid+document.f2.upass.value+calg;
			document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
			document.f0.R2.value=1;
		}
		else{
//			document.f0.upass.value=xproc1(document.f2.upass.value);
			document.f0.upass.value=document.f2.upass.value;
			document.f0.R2.value="";
		}
		
		document.getElementById("login2").disabled=false;
	}
	else{// 二维码认证
		/** 设置二维码数据到隐藏表单 */
		document.f0.DDDDD.value=document.f3.DDDDD.value + accountSuffix;// 增加账号后缀
		if(enMd5 == 1){// 支持MD5
			tmpchar=pid+document.f3.upass.value+calg;
			document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
			document.f0.R2.value=1;
		}
		else{
//			document.f0.upass.value=xproc1(document.f3.upass.value);
			document.f0.upass.value=document.f3.upass.value;
			document.f0.R2.value="";
		}
	}
	
	if(enPortal == 1){//支持Portal协议,进行第三方AC认证
		var vlan = "";
		if(getQueryString('vlanid') != null && getQueryString('vlanid') != ''){
			vlan = getQueryString('vlanid');
		}
		else{
			vlan = vlanid;
		}
		
		if(enHttps == 1){//需要Https(需要EPOrtal另置接口支持)
			document.f0.action = "https://" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Login&wlanuserip="
								+ getQueryString('wlanuserip') +"&wlanacip="+ getQueryString('wlanacip') 
								+ "&wlanacname="+ getQueryString('wlanacname') +"&redirect="+ getQueryString('redirect') 
								+ "&session="+ getQueryString('session') +"&vlanid="+ vlan +"&ssid="+ getQueryString('ssid') 
								+ "&port="+ window.location.port +"&iTermType="+ getTermType() 
								+ "&protocol=https:&queryACIP="+queryACIP;
		}
		else{
			document.f0.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Login&wlanuserip="
								+ getQueryString('wlanuserip') +"&wlanacip="+ getQueryString('wlanacip') 
								+ "&wlanacname="+ getQueryString('wlanacname') +"&redirect="+ getQueryString('redirect') 
								+ "&session="+ getQueryString('session') +"&vlanid="+ vlan +"&ssid="+ getQueryString('ssid') 
								+ "&port="+ window.location.port +"&iTermType="+ getTermType() 
								+ "&protocol="+ window.location.protocol+"&queryACIP="+queryACIP;
		}
	}
	else{//本地认证
		if(enHttps == 1){//需要Https
			document.f0.action = "https://"+v4serip;
		}
	}

	document.f0.submit();
	return false;
}

// 注销事件
function wc(){
	// 自定义confirm
	if(window.confirm("确定注销? Logout Confirmed?")){
	//ui.confirm('确定注销? Logout Confirmed?', function(func){
		//if(func){
			if(enPortal == 1){//启用Portal协议,进行第三方AC认证
				if(enHttps == 1){//需要Https(需要EPOrtal另置接口支持)
					document.f1.action = "https://" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Logout&wlanuserip="
									+ getQueryString('wlanuserip') +"&wlanacip="+ getQueryString('wlanacip') 
									+ "&session="+ getQueryString('session') +"&vlanid="+ getQueryString('vlanid') +"&ssid="+ getQueryString('ssid')  
									+ "&port="+ window.location.port +"&iTermType="+ getTermType() 
									+ "&protocol=https:&queryACIP="+queryACIP;
				}
				else{
					document.f1.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Logout&wlanuserip="
									+ getQueryString('wlanuserip')+ "&wlanacip="+ getQueryString('wlanacip') 
									+ "&session="+getQueryString('session')+ "&vlanid="+ getQueryString('vlanid') +"&ssid="+ getQueryString('ssid') 
									+ "&port="+ window.location.port+ "&iTermType="+ getTermType()
									+ "&protocol="+ window.location.protocol+"&queryACIP="+queryACIP;
				}
				//alert("document.f1.action:"+document.f1.action);
				document.f1.submit();
			}
			else{//本地认证
				s2=1;
				if(enHttps == 1){//需要Https
					window.location = "https://" + window.location.hostname + "/F.htm";
				}
				else{
					window.location = window.location.protocol + "//" + window.location.hostname + "/F.htm";
				}
			}
		//}
	//}, true);
	}
}

//获取访问设备
function getTermType(){
	// 访问设备:0-其他；1-PC；2-手机；3-平板
	var iTermType = 0;
	//alert("navigator.userAgent:"+navigator.userAgent);
	if(navigator.userAgent.indexOf('Android') > 0){// 安卓
		if(navigator.userAgent.indexOf('PAD for Mobile') > 0){
			iTermType = 3;
		}
		else{
			iTermType = 2;
		}
	}
	else if(navigator.userAgent.indexOf('BlackBerry') > 0){// 蓝莓
		if(navigator.userAgent.indexOf('RIM Table OS') > 0){
			iTermType = 3;
		}
		else{
			iTermType = 2;
		}
	}
	else if(navigator.userAgent.indexOf('Mac OS') > 0){// 苹果
		if(navigator.userAgent.indexOf('iPad') > 0){
			iTermType = 3;
		}
		else if(navigator.userAgent.indexOf('iPhone') > 0){
			iTermType = 2;
		}	
		else{
			iTermType = 1;
		}
	}
	else if(navigator.userAgent.indexOf('X11') > 0){// Linux
		iTermType = 1;
	}
	else if(navigator.userAgent.indexOf('SymbOS') > 0){// 塞班
		iTermType = 2;
	}
	else if(navigator.userAgent.indexOf('Windows') > 0){// Windows
		if(navigator.userAgent.indexOf('Windows RT') > 0){
			iTermType = 3;
		}
		else if(navigator.userAgent.indexOf('Windows Phone') > 0){
			iTermType = 2;
		}	
		else{
			iTermType = 1;
		}
	}
	else{
		iTermType = 2;
	}
	return iTermType;
}

function goto_services(){
	document.f1.action="do_services.php";
	document.f1.target="_blank";
	document.f1.submit();
	//document.location.reload();
}

function post(){
	if((f1.DDDDD.value=="")||(f1.upass.value=="")){
		window.location.href='http://202.113.13.126:8080/Self/'
	}
	else{
		//write cookies
		if(document.getElementsByName("save_me")[0].checked){
			var uname = document.getElementById("username").value;
			var pass = document.getElementById("password").value;
			setCookie("md5_login",uname+"|"+pass);
		} else {
			delCookie("md5_login");
		}
		//--end write
		var tmpchar=pid+f1.upass.value+calg;
		f1.upass.value=calcMD5(tmpchar)+calg+pid;
		document.f1.action="http://202.113.13.126:8080/Self/LoginFromGatewayAction";
	
		document.f1.submit();
		return false;
	}
}

// 登录页聚焦
function setFormFocus() {
	if((navigator.userAgent.indexOf('MSIE') > 0) || (navigator.userAgent.indexOf('Firefox') > 0))return;
	document.f1.DDDDD.focus(); 
	document.f1.DDDDD.select();
}

// Cookie保存用户输入的账号和密码
function setCookie(name,value){
	var Days = 360; 
	var exp  = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

// 获取用户保存Cookie的账号和密码
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) 
		return unescape(arr[2]); 
	return null;
}

// 删除用户保存Cookie的账号和密码
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) 
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

// 获取Html传递的参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return trim(unescape(r[2]));
	}
	return "";
}

// 验证手机号码
function IsValidMobile(value) {
	var str = new String(value);
	if (str == "") {
		return false;
	}
	if (str.length != 11) {
		return false;
	}	
	var NUM = new String("0123456789");
	for (var I = 0; I < str.length; I++) {
		if (NUM.indexOf(str.charAt(I)) < 0)
			return false;
	}
	return true;
}

/** 获取验证码倒数操作 start */
var iWaitSMSTime = 60;// 获取验证码倒数，单位
var wait = iWaitSMSTime * 1000;
function timer() {
	document.getElementById("applyBtn").disabled = false;
	document.getElementById("applyBtn").value = "获取验证码(SMS)";
}
function update(num) {
	if(num == (wait/1000)) {
		document.getElementById("applyBtn").value = "获取验证码(SMS)";
	} else{
		var printnr = (wait / 1000) - num;
		document.getElementById("applyBtn").value = "短信发送中(" + printnr + ")";
	}
}
/** 获取验证码倒数操作 end */

/** 绑定MAC倒数操作 start */
var iWaitBindTime = 10;// 绑定MAC倒数，单位
var wait2 = iWaitBindTime * 1000;
function timer2() {
	document.getElementById("login").disabled = false;
	document.getElementById("login").value = "免费上网 (Free)";
}
function update2(num2) {
	if(num2 == (wait2/1000)) {
			document.getElementById("login").value = "免费上网 (Free)";
	} else{
			printnr2 = (wait2 / 1000) - num2;
			document.getElementById("login").value = "会员号绑定中(" + printnr2 + ")";
	}
}
/** 绑定MAC倒数操作 end */

/** AJAX页面定义 start */
var Global_XMLHttpReq = false;
//创建Global_XMLHttpReq对象；
function createGlobalXMLHttpRequest() {
	if(window.XMLHttpRequest) { 
		Global_XMLHttpReq = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		try {
			Global_XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				Global_XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
}
/** AJAX页面定义 end */

// 获取短信验证码
function gotoCreate(pagename, vlanid, ip, mac){
	document.getElementById("applyBtn").disabled=true;
	var telephone = document.getElementById("username").value;
	if(telephone==null || telephone.length==0 ){
		alert("手机号不能为空！");
		document.getElementById("applyBtn").disabled=false;
		document.getElementById("username").focus();
		return false;
	}	
	if(!IsValidMobile(telephone)){
		alert("请输入正确的手机号！");
		document.getElementById("applyBtn").disabled=false;
		document.getElementById("username").focus();
		return false;
	}
			
	var reg=/http:\/\/([^']*):/g;
	var reg2=/http:\/\/([^']*)\//g;
	var temp="";
	var tempURL="";
	
	// 此段注释为获取忽视端口的自服务地址 
	//	if((temp=reg.exec(regURL))  != null){
	//		tempURL = temp[1];
	//	}
	//	else 
	if((temp=reg2.exec(regURL)) != null){
		tempURL = temp[1].split("\/")[0];
	}
	else{
		alert("自服务地址无法获取");
		document.getElementById("applyBtn").disabled=false;
		return false;
	}
	
	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php";
	//console.log("url:"+url);
	var data="telephone="+ telephone +"&machineno="+ machineno +"&mac="+ mac +"&regURL="+tempURL+"&registerMode="+registerMode;
	//console.log("data:"+data);
	
	createGlobalXMLHttpRequest();
	Global_XMLHttpReq.open("POST", url, true);
	Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Global_XMLHttpReq.onreadystatechange=function(){
		if(Global_XMLHttpReq.readyState==4){
			if(Global_XMLHttpReq.status==200){
				var responseText = Global_XMLHttpReq.responseText;
				var json =eval("(" +responseText +")");
				if(json.result == 'ok'){
					alert("验证码正下发，请注意查收！");
					//ui.success("验证码正下发，请注意查收！", display_time, true);
				}
				else{
					alert(json.msg);
					//ui.error(json.msg, display_time, true);
				}
			}
		}
	}
	Global_XMLHttpReq.send(data);
	
	//短信下发倒数
	document.getElementById("applyBtn").value = "验证码获取中(" + iWaitSMSTime + ")";
	document.getElementById("applyBtn").disabled = true;
	for(i = 1; i <= iWaitSMSTime; i++) {
		window.setTimeout("update(" + i + ")", i * 1000);
	}
	window.setTimeout("timer()", wait);
}

//匹配VLAN获取配置登录页
function setVLANPage(iTermType){
	var url = window.location.search;	
	if(enPortal == 1){//Portal协议认证
		if(url.indexOf("?") > 0) url = url.substr(url.indexOf("?"));

		if(loginMatchMode == 1){//VLAN ID方式匹配(SSID共用)
			if(matchVlanArr[0]!="" && matchVlanArr[0]!="0|0" && isMatchVlan(getQueryString("vlanid"), matchVlanArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchVlanArr[1]!="" && matchVlanArr[1]!="0|0" && isMatchVlan(getQueryString("vlanid"), matchVlanArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchVlanArr[2]!="" && matchVlanArr[2]!="0|0" && isMatchVlan(getQueryString("vlanid"), matchVlanArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}
			}
			else if(matchVlanArr[3]!="" && matchVlanArr[3]!="0|0" && isMatchVlan(getQueryString("vlanid"), matchVlanArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 2){//IP方式匹配	
			if(matchIPArr[0]!="" && matchIPArr[0]!="|" && isMatchIP(getQueryString("wlanuserip"), matchIPArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchIPArr[1]!="" && matchIPArr[1]!="|" && isMatchIP(getQueryString("wlanuserip"), matchIPArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchIPArr[2]!="" && matchIPArr[2]!="|" && isMatchIP(getQueryString("wlanuserip"), matchIPArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchIPArr[3]!="" && matchIPArr[3]!="|" && isMatchIP(getQueryString("wlanuserip"), matchIPArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 3){//SSID方式匹配
			if(matchSSIDArr[0]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchSSIDArr[1]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchSSIDArr[2]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchSSIDArr[3]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 4){//地区ID匹配
			if(matchAreaIDArr[0]!="" && isMatchAreaID(getQueryString("areaid"), matchAreaIDArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchAreaIDArr[1]!="" && isMatchAreaID(getQueryString("areaid"), matchAreaIDArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchAreaIDArr[2]!="" && isMatchAreaID(getQueryString("areaid"), matchAreaIDArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchAreaIDArr[3]!="" && isMatchAreaID(getQueryString("areaid"), matchAreaIDArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 5){//AC名称方式匹配
			if(matchACNameArr[0]!="" && isMatchACName(getQueryString("wlanacname"), matchACNameArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchACNameArr[1]!="" && isMatchACName(getQueryString("wlanacname"), matchACNameArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchACNameArr[2]!="" && isMatchACName(getQueryString("wlanacname"), matchACNameArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchACNameArr[3]!="" && isMatchACName(getQueryString("wlanacname"), matchACNameArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
	}
	else{//本地认证
		url = "?vlanid="+ vlanid +"&ip="+ ss5 +"&mac="+ ss4 +"&ssid="+ getQueryString("ssid");
		
		if(loginMatchMode == 1){//VLAN ID方式匹配(SSID共用)
			if(matchVlanArr[0]!="" && matchVlanArr[0]!="0|0" && isMatchVlan(vlanid, matchVlanArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchVlanArr[1]!="" && matchVlanArr[1]!="0|0" && isMatchVlan(vlanid, matchVlanArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchVlanArr[2]!="" && matchVlanArr[2]!="0|0" && isMatchVlan(vlanid, matchVlanArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}
			}
			else if(matchVlanArr[3]!="" && matchVlanArr[3]!="0|0" && isMatchVlan(vlanid, matchVlanArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 2){//IP方式匹配	
			if(matchIPArr[0]!="" && matchIPArr[0]!="|" && isMatchIP(ss5, matchIPArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchIPArr[1]!="" && matchIPArr[1]!="|" && isMatchIP(ss5, matchIPArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchIPArr[2]!="" && matchIPArr[2]!="|" && isMatchIP(ss5, matchIPArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchIPArr[3]!="" && matchIPArr[3]!="|" && isMatchIP(ss5, matchIPArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
		else if(loginMatchMode == 3){//SSID方式匹配
			if(matchSSIDArr[0]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[0])){
				if(iTermType == 2){// 手机
					window.location.href = "a42.htm" + url;
				}
				else{
					window.location.href = "a37.htm" + url;					
				}
			}
			else if(matchSSIDArr[1]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[1])){
				if(iTermType == 2){// 手机
					window.location.href = "a43.htm" + url;
				}
				else{
					window.location.href = "a38.htm" + url;					
				}
			}
			else if(matchSSIDArr[2]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[2])){
				if(iTermType == 2){// 手机
					window.location.href = "a44.htm" + url;
				}
				else{
					window.location.href = "a39.htm" + url;					
				}			
			}
			else if(matchSSIDArr[3]!="" && isMatchSSID(getQueryString("ssid"), matchSSIDArr[3])){
				if(iTermType == 2){// 手机
					window.location.href = "a45.htm" + url;
				}
				else{
					window.location.href = "a40.htm" + url;					
				}
			}
		}
	}
	
	if(document.getElementById("loading")){
		document.getElementById("loading").style.display = "block";
	}
	if(document.getElementById("loading2")){
		document.getElementById("loading2").style.display = "none";
	}
}

// 设置VLAN广告图片(作废)
function setVLANImg(){
	var matchNum = 0;
	if(loginMatchMode == 1){// VLANID匹配
		for(var i=0; i< matchVlanArr.length; i++){
			if(matchVlanArr[i]!="" && matchVlanArr[i]!="0|0" && isMatchVlan(vlanid, matchVlanArr[i])){
				matchNum = i;
				break;
			}
		}
	}
	else if(loginMatchMode == 1){// IP匹配
		for(var i=0; i< matchIPArr.length; i++){
			if(matchIPArr[i]!="" && matchIPArr[i]!="0|0" && isMatchIP(ss5, matchIPArr[i])){
				matchNum = i;
				break;
			}
		}
	}

	var tempImgArr = matchImgArr[matchNum];
	var tempTextArr = matchTextArr[matchNum];
	var tempHrefArr = matchHrefArr[matchNum];
	for(var j=0; j<tempImgArr.length; j++){
		if(document.getElementById("vlanAdvert"+j)){
			if(j < parseInt(matchAdvertNumArr[matchNum]) ){
				var imgHtml = "<a href='"+tempHrefArr[j]+"' title='"+tempTextArr[j]+"' target='_blank'>" + "<img src='"+tempImgArr[j]+"' style='CURSOR: hand' title='"+tempTextArr[j]+"' width='130' height='173'>"+"</a>";
				//var textHtml = "<h1><a href='"+tempHrefArr[j]+"' target='_blank'>"+tempTextArr[j]+"</a></h1>";
				var textHtml = "";
				document.getElementById("vlanAdvert"+j).innerHTML=imgHtml + textHtml;
			}
			else{
				document.getElementById("vlanAdvert"+j).innerHTML="";
			}
		}
	}
//	if(document.getElementById("vlanLayer")){
//		document.getElementById("vlanLayer").innerHTML=vlanTitleArr[i];
//	}
}

// 匹配VLAN ID
function isMatchVlan(val, val2){
	if(trim(val) == "" || trim(val2) == "" || val2 == "|") return false;
	
	var minVlan = val2.split("|")[0];
	var maxVlan = val2.split("|")[1];
	if(parseInt(val) >= parseInt(minVlan) && parseInt(val) <= parseInt(maxVlan)){
		return true;
	}	
	return false;
}

// 匹配IP
function isMatchIP(val, val2){
	if(trim(val) == "" || trim(val2) == "" || val2 == "|") return false;
	
	var startIP = val2.split("|")[0];
	var endIP = val2.split("|")[1];
	if(compareIP(val, startIP) == -1 || compareIP(val, endIP) == 1){
		return false;
	}	
	return true;
}

// 比较两个ip的大小,如果大于，返回1，等于返回0，小于返回-1
function compareIP(ipBegin, ipEnd){
	if(ipBegin == '' && ipEnd == '') return 0;
	var temp1;
	var temp2;
	temp1 = ipBegin.split(".");
	temp2 = ipEnd.split(".");
	for (var i = 0; i < 4; i++){
		if (parseInt(temp1[i])>parseInt(temp2[i])){
			return 1;
		}  
		else if (parseInt(temp1[i])<parseInt(temp2[i])){
			return -1;
		}
	}
	return 0;
}

//匹配SSID
function isMatchSSID(ssid_id, ssid_arr){
	if(trim(ssid_id) == "" || trim(ssid_arr) == "") return false;
	
	var result = false;
	var temp_ary = ssid_arr.split("|");
	for(var i=0; i<temp_ary.length; i++){
		if(ssid_id == temp_ary[i]){
			result = true;
			break;
		}
	}
	return result;
}

//匹配地区id
function isMatchAredID(area_id, area_arr){
	if(trim(area_id) == "" || trim(area_arr) == "") return false;

	var result = false;
	var temp_ary = area_arr.split("|");
	for(var i=0; i<temp_ary.length; i++){
		if(area_id == temp_ary[i]){
			result = true;
			break;
		}
	}
	return result;
}

//匹配AC名称
function isMatchACName(ac_name, ac_arr){
	if(trim(ac_name) == "" || trim(ac_arr) == "") return false;
	
	var result = false;
	var temp_ary = ac_arr.split("|");
	for(var i=0; i<temp_ary.length; i++){
		if(ac_name == temp_ary[i]){
			result = true;
			break;
		}
	}
	return result;
}

// 运行幻灯片广告
function startAdvert(type){
	// 不显示则停止
//	if(enSlideshow == 0) return false;
	
	var isIE = (document.all) ? true : false;

	var $ = function (id) {
		return "string" == typeof id ? document.getElementById(id) : id;
	};

	var Class = {
		create: function() {
			return function() { this.initialize.apply(this, arguments); }
		}
	}

	var Extend = function(destination, source) {
		for (var property in source) {
			destination[property] = source[property];
		}
	}

	var Bind = function(object, fun) {
		return function() {
			return fun.apply(object, arguments);
		}
	}

	var Each = function(list, fun){
		for (var i = 0, len = list.length; i < len; i++) { fun(list[i], i); }
	};

	//ie only
	var RevealTrans = Class.create();
	RevealTrans.prototype = {
		initialize: function(container, options) {
			this._img = document.createElement("img");
			this._a = document.createElement("a");

			this._timer = null;//计时器
			this.Index = 0;//显示索引
			this._onIndex = -1;//当前索引
			
			this.SetOptions(options);

			this.Auto = !!this.options.Auto;
			this.Pause = Math.abs(this.options.Pause);
			this.Duration = Math.abs(this.options.Duration);
			this.Transition = parseInt(this.options.Transition);
			this.List = this.options.List;
			this.onShow = this.options.onShow;

			//初始化显示区域
			this._img.style.visibility = "hidden";//第一次变换时不显示红x图
			this._img.style.width = this._img.style.height = "100%"; this._img.style.border = 0;
			this._img.onmouseover = Bind(this, this.Stop);
			this._img.onmouseout = Bind(this, this.Start);
			isIE && (this._img.style.filter = "revealTrans()");

			this._a.target = "_blank";

			$(container).appendChild(this._a).appendChild(this._img);
		},
		//设置默认属性
		SetOptions: function(options) {
			this.options = {//默认值
				Auto: true,//是否自动切换
				Pause: 5000,//停顿时间(微妙)
				Duration: 2,//变换持续时间(秒)
				Transition: 	23,//变换效果(23为随机)
				List: [],//数据集合,如果这里不设置可以用Add方法添加
				onShow:		function(){}//变换时执行
			};
			Extend(this.options, options || {});
		},
		Start: function() {
			clearTimeout(this._timer);
			//如果没有数据就返回
			if(!this.List.length) return;
			//修正Index
			if(this.Index < 0 || this.Index >= this.List.length){ this.Index = 0; }
			//如果当前索引不是显示索引就设置显示
			if(this._onIndex != this.Index){ this._onIndex = this.Index; this.Show(this.List[this.Index]); }
			//如果要自动切换
			if(this.Auto){
				this._timer = setTimeout(Bind(this, function(){ this.Index++; this.Start(); }), this.Duration * 1000 + this.Pause);
			}
		},
		//显示
		Show: function(list) {
			if(isIE){
				//设置变换参数
				with(this._img.filters.revealTrans){
					Transition = this.Transition; Duration = this.Duration; 
					apply(); 
					play();
				}
			}
			this._img.style.visibility = "";
			//设置图片属性
			this._img.src = list.img; this._img.alt = list.text;
			//设置链接
			!!list["url"] ? (this._a.href = list["url"]) : this._a.removeAttribute("href");
			//附加函数
			this.onShow();
		},
		//添加变换对象
		Add: function(sIimg, sText, sUrl) {
			this.List.push({ img: sIimg, text: sText, url: sUrl });
		},
		//停止
		Stop: function() {
			clearTimeout(this._timer);
		}
	};

	var rvt = new RevealTrans("idPicShow");
	//添加变换对象
	if(type == 2){ // 手机
		for(var i=0; i<advertNum; i++){
			rvt.Add(rvtMobileImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
		}
	}
	else{
		for(var i=0; i<advertNum; i++){
			rvt.Add(rvtPCImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
		}
	}
	var oList = $("idPicList"), oText = $("idPicText"), arrImg = [];
	var oNum = $("idNum"), arrNum = [];
	//设置图片列表
	Each(rvt.List, function(list, i){	
		//按钮式
		var li = document.createElement("li");
		li.innerHTML = i + 1;
		arrNum[i] = li;
		oNum.appendChild(li);
		//事件设置
		rvt.onmouseover = li.onmouseover = function(){ rvt.Auto = false; rvt.Index = i; rvt.Start(); };
		rvt.onmouseout = li.onmouseout = function(){ rvt.Auto = true; rvt.Start(); };
	});

	//设置图片列表样式 文本显示区域
	rvt.onShow = function(){
		var i = this.Index, list = this.List[i];
		Each(arrNum, function(o){
			o.className = ""; 
		}); 
		arrNum[i].className = "on";
	}
	rvt.Start();
}

//页面的定时刷新
var timeID; 
function timingRefresh(){
	//Portal协议认证
	if(enPortal == 1 ){
		if(getQueryString('wlanuserip') == ""){
			document.getElementById("loading").innerHTML="AC重定向的访客终端IP获取失败，请关闭浏览器重试 .<br>Failed to get the IP, please close the browser try again.";
			return;
		}
		//加载二维码
		LoadQRcode(getQueryString('wlanuserip'));
	}
	//本地认证
	else {
		if(getQueryString('ip') == ""){
			document.getElementById("loading").innerHTML="本地认证的访客终端IP获取失败，请关闭浏览器重试 .<br>Failed to get the IP, please close the browser try again.";
			return;
		}
		//加载二维码
		LoadQRcode(getQueryString('ip'));
	}

	//运行保活定时器
	if(timeID != null) window.clearInterval(timeID);//每次调用该方法前先将原先那个定时器取消
	timeID = window.setInterval("startKeepAlive()", 5000);//每5秒自动刷新一次
}

//加载二维码
function LoadQRcode(wlanuserip){	
	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/CreateQRcode.php";
	
	var data = "data="+ window.location.protocol + "//" + window.location.host + "/a74.htm?wlanuserip="+ wlanuserip 
				+"&wlanacip="+ getQueryString('wlanacip') +"&wlanacname="+ getQueryString('wlanacname') 
				+"&redirect="+ getQueryString('redirect') +"&session="+ getQueryString('session') 
				+"&vlanid="+ getQueryString('vlanid') +"&loginMethod="+ enPortal 
			+"&registerMode="+ registerMode;
	//alert("data:"+data);
	createGlobalXMLHttpRequest();
	Global_XMLHttpReq.open('POST', url, true);
	Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

	Global_XMLHttpReq.onreadystatechange=function(){
		if(Global_XMLHttpReq.readyState==4){
			if(Global_XMLHttpReq.status==200){
				var responseText = Global_XMLHttpReq.responseText;
				var json =eval("(" +responseText +")");
				//alert("json.conetent:"+json.content);
				if(document.getElementById("loading")){
					document.getElementById("loading").style.display = "block";
				}
				if(document.getElementById("loading2")){
					document.getElementById("loading2").style.display = "none";
				}
				var imgpath = window.location.protocol + "//" + window.location.hostname + ":801/eportal/images/"+json.src;
				//alert("imgpath:"+imgpath);
				var imgstr = "<img src='"+imgpath+"' />";
				document.getElementById("loading").innerHTML = imgstr;
			}
		}
	}
	Global_XMLHttpReq.send(data.replace(/\&/g,"%26"));
}

//获取保活状态
var disconnectCount = 0;
function startKeepAlive(){
	if(onlineMonitor){
		var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=checkScanIP";		
		var data = "radiusip="+ radiusIP + "&";
		//Portal协议认证
		if(enPortal == 1){
			data += "wlanuserip="+ getQueryString('wlanuserip');
		}
		//本地认证
		else{
			data += "wlanuserip="+ getQueryString('ip');		
		}

		createGlobalXMLHttpRequest();
		Global_XMLHttpReq.open("POST", url, true);
		Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Global_XMLHttpReq.onreadystatechange=function(){
			if(Global_XMLHttpReq.readyState==4){
				if(Global_XMLHttpReq.status==200){			
					var responseText = Global_XMLHttpReq.responseText;
					var json = eval("("+ responseText +")");
					if(json.result == 'ok'){
						if(timeID != null) window.clearInterval(timeID);
						var url = window.location.search;	
						
						var iTermType = getTermType();
						if(iTermType == 2){
							window.location.href= window.location.protocol + "//" + window.location.host + "/a33.htm" + url;
						}
						else{
							window.location.href= window.location.protocol + "//" + window.location.host + "/3.htm" + url;
						}
					}
					else{
						//检测IP未在线
					}
				}
			}
		}
		Global_XMLHttpReq.send(data);
	}
	else{
		var url = window.location.protocol + "//" + window.location.hostname + ":9002";		
		createGlobalXMLHttpRequest();
		Global_XMLHttpReq.open("GET", url, true);
		Global_XMLHttpReq.onreadystatechange=function(){
			if(Global_XMLHttpReq.readyState==4){
				if(Global_XMLHttpReq.status==200&&Global_XMLHttpReq.responseText.length<1000){
					if(timeID != null) window.clearInterval(timeID);
					
					var url = window.location.search;	
					
					var iTermType = getTermType();
					if(iTermType == 2){
						window.location.href= window.location.protocol + "//" + window.location.host + "/a33.htm" + url;
					}
					else{
						window.location.href= window.location.protocol + "//" + window.location.host + "/3.htm" + url;
					}
				}
			}
		}
		Global_XMLHttpReq.send(null);
	}
}

//自动提交快速登录页(form_id为自定义表单id: 1-表单f1;2-表单f2;3-表单f3)
function autoPerceiveSubmit(){
	if(autoPerceive!=1) return;
	//document.f1.submit();
	fast_login();
}

//快速登录
function fast_login(){
	var iTermType = getTermType();
	if(iTermType == 2){//手机
		document.f1.R6.value = 1;
	}
	else{
		document.f1.R6.value = 0;
	}
	
	if(enPortal == 1){// 支持Portal协议,进行第三方AC认证
		var vlan = "";
		if(getQueryString('vlanid') != null && getQueryString('vlanid') != ''){
			vlan = getQueryString('vlanid');
		}
		else{
			vlan = vlanid;
		}
		
		if(enHttps == 1){//需要Https(需要EPOrtal另置接口支持)
			document.f1.action = "https://" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Login&wlanuserip="
								+ getQueryString('wlanuserip') +"&wlanacip="+ getQueryString('wlanacip') 
								+ "&wlanacname="+ getQueryString('wlanacname') +"&redirect="+ getQueryString('redirect') 
								+ "&session="+ getQueryString('session') +"&vlanid="+ vlan +"&ssid="+ getQueryString('ssid') 
								+ "&port="+ window.location.port +"&iTermType="+ getTermType() 
								+ "&protocol=https:";
		}
		else{
			document.f1.action = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=Login&wlanuserip="
								+ getQueryString('wlanuserip') +"&wlanacip="+ getQueryString('wlanacip') 
								+ "&wlanacname="+ getQueryString('wlanacname') +"&redirect="+ getQueryString('redirect') 
								+ "&session="+ getQueryString('session') +"&vlanid="+ vlan +"&ssid="+ getQueryString('ssid') 
								+ "&port="+ window.location.port +"&iTermType="+ getTermType() 
								+ "&protocol="+ window.location.protocol;
		}
		
		//根据终端Mac获取认证账号和密码		
		var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=ACSetting&a=getAccountByMac";
		//console.log("url:"+url);
		var data = "wlanuserip="+ getQueryString('wlanuserip') +"&mac="+ getQueryString('mac');
		//console.log("data:"+data);
		createGlobalXMLHttpRequest();
		Global_XMLHttpReq.open("POST", url, true);
		Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Global_XMLHttpReq.onreadystatechange=function(){
			if(Global_XMLHttpReq.readyState==4){
				if(Global_XMLHttpReq.status==200){
					var responseText = Global_XMLHttpReq.responseText;
					var json = eval("(" +responseText +")");
					if(json.result == 'ok'){
						//alert("根据终端获取认证账号和密码");
						document.f1.DDDDD.value = json.account;
						document.f1.upass.value = json.password;
						document.f1.submit();
					}
					else{
						alert(json.msg);
						//ui.error(json.msg, display_time, true);
					}
				}
			}
		}
		Global_XMLHttpReq.send(data);
	}
	else{
		if(enHttps == 1){//需要Https
			document.f1.action = "https://"+v4serip;
		}
		document.f1.submit();
	}
	
	return false;
}

//返回功能重定向
function ac_forward(){
	if(rebackLink != null && rebackLink != '' && rebackLink != 'null') {//返回重定向地址已设置
		window.location.href = rebackLink;
	}
	else{
		if(enPortal == 1){//支持Portal协议,进行第三方AC认证
			if(getQueryString('wlanacip') == null || getQueryString('wlanacip') == ''){//指向AC地址
				window.location.href = window.location.protocol + "//" + "1.1.1.1";
			}
			else{//指向虚拟地址
				window.location.href = window.location.protocol + "//" + getQueryString('wlanacip');
			}
		}
		else{//本地认证指向网关
			window.location.href = window.location.protocol + "//" + window.location.hostname;
		}
	}
}

//获取当前时间(YYYY-MM-DD hh:mm:ss)
function getDatetime(){
	var dt = new Date();
	return (dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()).replace(/([\-\: ])(\d{1})(?!\d)/g,'$10$2');
}

//去掉字串左边的空格
function lTrim(str) {
	if (str.charAt(0) == " ") {
		// 如果字串左边第一个字符为空格
		str = str.slice(1);
		str = lTrim(str); // 递归调用
	}
	return str;
}
// 去掉字串右边的空格
function rTrim(str) {
	var iLength;
	iLength = str.length;
	if (str.charAt(iLength - 1) == " ") {
		// 如果字串右边第一个字符为空格
		str = str.slice(0, iLength - 1);// 将空格从字串中去掉
		str = rTrim(str); // 递归调用
	}
	return str;
}
// 去掉字串两边的空格
function trim(str) {
	return lTrim(rTrim(str));
}

//UTF-8编码的汉字转换为字符，特殊字符未处理，
function chineseFromUtf8Url(strUtf8){
	var bstr = ""; 
	var nOffset = 0; //processing   point   on   strUtf8 
	if(strUtf8 == "") return ""; 

	//strUtf8 = strUtf8.toLowerCase();

	nOffset = strUtf8.indexOf("%E");
	if( nOffset == -1)
		return strUtf8;
	while( nOffset != -1 ){
		bstr += strUtf8.substr(0, nOffset);
		strUtf8   = strUtf8.substr(nOffset,   strUtf8.length - nOffset);
		if(   strUtf8 == "" || strUtf8.length < 9 )// bad   string 
			return bstr;
		bstr += utf8CodeToChineseChar(strUtf8.substr(0, 9));
		strUtf8 = strUtf8.substr(9, strUtf8.length - 9);
		nOffset   =   strUtf8.indexOf("%E"); 
	}
	return bstr + strUtf8;
}
function unicodeFromUtf8(strUtf8){
	var bstr = ""; 
	var nTotalChars = strUtf8.length; //   total   chars   to   be   processed. 
	var nOffset = 0; //   processing   point   on   strUtf8 
	var nRemainingBytes = nTotalChars; //   how   many   bytes   left   to   be   converted 
	var nOutputPosition = 0; 
	var iCode, iCode1, iCode2; //   the   value   of   the   unicode. 

	while (nOffset < nTotalChars){
		iCode = strUtf8.charCodeAt(nOffset);
		if ((iCode & 0x80) == 0) { 
			if (nRemainingBytes < 1 ) //   not   enough   data
				break; 
			bstr += String.fromCharCode(iCode & 0x7F);
			nOffset ++;
			nRemainingBytes -= 1;
		}
		else if ((iCode & 0xE0) ==   0xC0) // 2   bytes 
		{
			iCode1 = strUtf8.charCodeAt(nOffset + 1); 
			if ( nRemainingBytes < 2 || //   not   enough   data 
			(iCode1   &   0xC0)   !=   0x80   ) //   invalid   pattern 
			{
				break; 
			}

			bstr += String.fromCharCode(((iCode & 0x3F) << 6) | ( iCode1 & 0x3F));
			nOffset += 2; 
			nRemainingBytes -= 2;
		} 
		else if ((iCode & 0xF0) == 0xE0) //   3   bytes 
		{
			iCode1 = strUtf8.charCodeAt(nOffset + 1);
			iCode2 = strUtf8.charCodeAt(nOffset + 2);
			if ( nRemainingBytes < 3 || //   not   enough   data 
			(iCode1 & 0xC0) != 0x80 || //   invalid   pattern 
			(iCode2 & 0xC0) != 0x80) 
			{ 
				break; 
			}
			bstr += String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F)); 
			nOffset += 3;
			nRemainingBytes -= 3; 
		}
		else //   4   or   more   bytes   --   unsupported 
		break;
	}

	if (nRemainingBytes != 0){
		// bad UTF8 string.
		return ""; 
	}
	return bstr;
}

function utf8CodeToChineseChar(strUtf8) {
	var iCode, iCode1, iCode2; 
	iCode = parseInt("0x" + strUtf8.substr(1, 2));
	iCode1 = parseInt("0x" + strUtf8.substr(4, 2));
	iCode2 = parseInt("0x" + strUtf8.substr(7, 2));

	return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F)); 
}

//获取Html传递的参数(UTF-8中文)
function getChineseQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	
	var r = chineseFromUtf8Url(window.location.search).substr(1).match(reg);
	
	if (r != null) {
		return unescape(r[2]);
	}
	return "";
}

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";  
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);  
/** 
 * base64编码 
 * @param {Object} str 
 */  
function base64encode(str){  
    var out, i, len;  
    var c1, c2, c3;  
    len = str.length;  
    i = 0;  
    out = "";  
    while (i < len) {  
        c1 = str.charCodeAt(i++) & 0xff;  
        if (i == len) {  
            out += base64EncodeChars.charAt(c1 >> 2);  
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);  
            out += "==";  
            break;  
        }  
        c2 = str.charCodeAt(i++);  
        if (i == len) {  
            out += base64EncodeChars.charAt(c1 >> 2);  
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);  
            out += "=";  
            break;  
        }  
        c3 = str.charCodeAt(i++);  
        out += base64EncodeChars.charAt(c1 >> 2);  
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));  
        out += base64EncodeChars.charAt(c3 & 0x3F);  
    }  
    return out;  
}  
/** 
 * base64解码 
 * @param {Object} str 
 */  
function base64decode(str){  
    var c1, c2, c3, c4;  
    var i, len, out;  
    len = str.length;  
    i = 0;  
    out = "";  
    while (i < len) {  
        /* c1 */  
        do {  
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
        }  
        while (i < len && c1 == -1);  
        if (c1 == -1)   
            break;  
        /* c2 */  
        do {  
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
        }  
        while (i < len && c2 == -1);  
        if (c2 == -1)   
            break;  
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));  
        /* c3 */  
        do {  
            c3 = str.charCodeAt(i++) & 0xff;  
            if (c3 == 61)   
                return out;  
            c3 = base64DecodeChars[c3];  
        }  
        while (i < len && c3 == -1);  
        if (c3 == -1)   
            break;  
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));  
        /* c4 */  
        do {  
            c4 = str.charCodeAt(i++) & 0xff;  
            if (c4 == 61)   
                return out;  
            c4 = base64DecodeChars[c4];  
        }  
        while (i < len && c4 == -1);  
        if (c4 == -1)   
            break;  
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);  
    }  
    return out;  
}  
/** 
 * utf16转utf8 
 * @param {Object} str 
 */  
function utf16to8(str){  
    var out, i, len, c;  
    out = "";  
    len = str.length;  
    for (i = 0; i < len; i++) {  
        c = str.charCodeAt(i);  
        if ((c >= 0x0001) && (c <= 0x007F)) {  
            out += str.charAt(i);  
        }  
        else   
            if (c > 0x07FF) {  
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            }  
            else {  
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            }  
    }  
    return out;  
}  
/** 
 * utf8转utf16 
 * @param {Object} str 
 */  
function utf8to16(str){  
    var out, i, len, c;  
    var char2, char3;  
    out = "";  
    len = str.length;  
    i = 0;  
    while (i < len) {  
        c = str.charCodeAt(i++);  
        switch (c >> 4) {  
            case 0:  
            case 1:  
            case 2:  
            case 3:  
            case 4:  
            case 5:  
            case 6:  
            case 7:  
                // 0xxxxxxx  
                out += str.charAt(i - 1);  
                break;  
            case 12:  
            case 13:  
                // 110x xxxx 10xx xxxx  
                char2 = str.charCodeAt(i++);  
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));  
                break;  
            case 14:  
                // 1110 xxxx10xx xxxx10xx xxxx  
                char2 = str.charCodeAt(i++);  
                char3 = str.charCodeAt(i++);  
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));  
                break;  
        }  
    }  
    return out;  
}

//判断url是否是合法http(s)
function checkURL(URL){
	var str = URL;
	//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	var objExp = new RegExp(Expression);
	if(objExp.test(str) == true){
		return true;
	}else{
		return false;
	}
}

//获取http(s)协议头的url
function getHttpURL(URL){
	var str = URL;
	if(!checkURL(str)){
		str = "http://" + str;
	}
	return str;
}

//将点分十进制串IP转为16进制
function stringToHex16(strIP){
	var hex16IP = "";
	var ip = strIP.split(".");
	for(var i=0; i<ip.length; i++){
		hex16IP += parseInt(ip[i], 10).toString(16);
	}
	return hex16IP;
}

//将16进制IP转为点分十进制串
function hex16ToString(hex16IP){
	var stringIP = parseInt(hex16IP.substr(0, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(2, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(4, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(6, 2), 16).toString(10);
	return stringIP;
}

//跳转到二维码页面
function goToPage(){
	var url = window.location.search;
	
	//Portal协议认证
	if(enPortal == 1){
		if(url.indexOf("?") > 0) url = url.substr(url.indexOf("?"));	
	}
	//本地认证
	else{
		//设置终端参数
		var vlan = "";
		if(getQueryString('vlan') != null && getQueryString('vlan') != ''){
			vlan = getQueryString('vlan');
		}
		else if(getQueryString('vlanid') != null && getQueryString('vlanid') != ''){
			vlan = getQueryString('vlanid');
		}
		else if(getQueryString('ssid') != null && getQueryString('ssid') != ''){
			vlan = getQueryString('ssid');
		}
		else{
			vlan = vlanid;
		}
		
		var ip = "";
		if(getQueryString('ip') != null && getQueryString('ip') != ''){
			ip = getQueryString('ip');
		}
		/*
		else if(wlanuserip != null && wlanuserip != ''){//终端IP由AC传递
			ip = wlanuserip;
		}
		*/
		else{
			ip = ss5;
		}
		
		var mac = "";
		if(getQueryString('mac') != null && getQueryString('mac') != ''){
			mac = getQueryString('mac');
		}
		else{
			mac = ss4;
		}
		
		url = "?vlanid="+ vlan +"&ip="+ ip +"&mac="+ ss5;
	}
	
	var iTermType = getTermType();
	if(iTermType == 2){//手机
		window.location.href = window.location.protocol + "//" + window.location.host + "/a73.htm" + url;
	}
	else{
		window.location.href = window.location.protocol + "//" + window.location.host + "/a72.htm" + url;
	}
}


var wechatLogin = {
	extend: 				"",
	bssid: 					"ff:ff:ff:ff:ff:ff",
	mac: 					"aa:aa:aa:aa:aa:aa",
	protocol: 				window.location.protocol,
	hostname: 				window.location.hostname,
	port: 					window.location.port,
	iTermType: 				"",

	initialize: function(){
		
		//设置基本参数
		this.iTermType     = getTermType();						//终端类型
		
		//mac
		if(getQueryString('mac') == null && "undefined" != typeof(ss4)){
			this.mac = ss4[0]+ss4[1]+":"+ss4[2]+ss4[3]+":"+ss4[4]+ss4[5]+":"+ss4[6]+ss4[7]+":"+ss4[8]+ss4[9]+":"+ss4[10]+ss4[11];
		}else{
			this.mac = getQueryString('mac');
		}

		//设置微信扩展参数
		var extendSource = "";

		if(enPortal == 1){

			extendSource = this.setPortalExtend();

		}else{

			extendSource = this.setLocalExtend();

		}
		//base64编码 
		this.extend = myutils.base64encode(extendSource);
		
		var me      = this;
		var wechat  = document.getElementById("wechat");
		if(enWeChatCertified && wechat){
			wechat.style.display = "block";
			wechat.onclick = me.callWechatBrowser;
		}
	
	},
	// 设置本地认证微信扩展参数
	setLocalExtend: function(){

		var extend = "";

		//认证方式■后缀■临时账号■临时密码
		extend = "0"+"\t"+accountSuffix+"\t"+com_username+"\t"+com_password;
		return extend;
	},
	//设置portal认证微信扩展参数
	setPortalExtend: function(){

		var extend = "";

		var wlanuserip = getQueryString('wlanuserip');			                    //portal协议终端ip
		var	wlanacip   = getQueryString('wlanacip');			                    //ac ip
		var	wlanacname = getQueryString('wlanacname');			                    //ac name
		var vlan       = getQueryString("vlan");									//vlan
		var session    = getQueryString("session");									//session
		
		//方案名■页面类型■页面索引■ip■vlan■ssid■认证方式■后缀■临时账号■临时密码■wlanuserip■wlanacname■wlanacip■vlan■session
		extend = "1"+"\t"+accountSuffix+"\t"+com_username+"\t"+com_password+"\t"+wlanuserip+"\t"+wlanacname+"\t"+wlanacip+"\t"+vlan+"\t"+session;
		return extend;
	},
	setLoginUrl: function(){
		var gusetUrl;
		var server = this.protocol + "//" + this.hostname;
		// 支持Portal协议,guest账号进行第三方AC认证
		if(enPortal == 1){
			var param = {
				c: 				"ACSetting",
				a: 				"Login",
				protocol: 		this.protocol,
				hostname: 		this.hostname,
				port: 			this.port,
				iTermType: 		this.iTermType,
				loginMethod: 	newComm.loginMethod
			};
			param.wlanuserip  = getQueryString('wlanuserip');
			param.wlanacip    = getQueryString('wlanacip');
			param.wlanacname  = getQueryString('wlanacname');
			param.session     = getQueryString('session');

			guestUrl = server + ":801/eportal/?" + myutils.obj2Param(param);
		}

		//guest账号本地认证
		else{
			guestUrl = server + "/login";
		}
		return guestUrl;
	},
	isFromA79:function(){
		return newComm.kind == 'pc_79' || newComm.kind == 'mobile_79';
	},
	isiPhone:function(){
		var ua = navigator.userAgent;              
		if (ua.indexOf("iPhone") != -1 || ua.indexOf("iPod")!=-1 || ua.indexOf("iPad") != -1) return true;
		return false;
	},
	//临时账号登录
	tempLogin: function(fn){
		var me          = this;
		var data = {
			DDDDD: 	com_username,
			upass: 	com_password,
			rtype: 	"1",
			R1: 	"0",
			R2: 	"",
			R6: 	"1",
			para: 	"00"
		}
		$.ajax({
			type: 		"POST",
			data: 		myutils.obj2Param(data)+"&0MKKey=123456",
			url: 		me.setLoginUrl(),
			success: 	function(result){
							if(result.indexOf("Dr.COMWebLoginID_3.htm")>-1){
								fn();
							}else{
								box.show({content:"临时账号上线失败", timeout:2});
							}
						},
			error: 		function(xhr, errMsg, errObj) {
							box.show({content:"临时账号上线失败", timeout:2});
	        			}
		});
	},

	callWechatBrowser: function(){

		var me = wechatLogin;
		box.show({
			title: 		"正在跳转微信...",
			timeout: 	5,
			content: 	"<div style='text-align:center;'><img src='a71.gif' width=90 height=90 style='margin-left:auto;margin-right:auto;'></div>"
		});
		setTimeout(function() {
			if(com_username && com_password){
				me.tempLogin(function(){
					if(me.isiPhone()){
						var applesDomains = [
							"http://www.appleiphonecell.com/",
							"http://captive.apple.com/",
							"http://www.itools.info/",
							"http://www.ibook.info/",
							"http://www.aiport.us/",
							"http://www.thinkdifferent.us/",
							"http://www.apple.com/"
						];
						for(var i in applesDomains){
							var id = "apple_"+i;
							if(document.getElementById(id) == null){
								var iframe           = document.createElement("iframe");
								iframe.id            = id;
								iframe.style.cssText = "display:none;width:0px;height:0px;";
								iframe.src           = applesDomains[i];
							    document.body.appendChild(iframe);
							}
						}
					}
					setTimeout(me.wechatSign, 1000);
				});
			}else{
				me.wechatSign();
			}
		}, 1500);
		
	},

	wechatSign: function(){
		var me        = wechatLogin;
		var signUrl   = me.protocol+"//"+me.hostname+":801/eportal/?c=ACSetting&a=sign";
		var timestamp = (new Date()).getTime();							//时间戳

		var signDataObj = {
			timestamp: 					timestamp,
			extend: 					me.extend,
			mac: 						me.mac,
			bssid: 						me.bssid,
			protocol: 					me.protocol,
			hostname: 					me.hostname,
			port: 						me.port
		};

		$.ajax({
			type: 					"POST",
			url: 					signUrl,
			data: 					myutils.obj2Param(signDataObj),
			dataType: 				"json",
			success: function(json){
				if(json.success){

					me.Wechat_GotoRedirect(json.appId, me.extend, timestamp, json.sign, json.shopId, json.authUrl, me.mac, json.ssid, me.bssid);
				}
				else{
					box.show({content:"参数签名失败"});
				}
			},
			error: function(xhr, errMsg, errObj) {
	            box.show({content:"网络错误"});
	        }
		});
	},
	Wechat_GotoRedirect: function(appId, extend, timestamp, sign,shopId, authUrl, mac, ssid, bssid){
		
		var url = "https://wifi.weixin.qq.com/operator/callWechatBrowser.xhtml?appId=" + appId 
																			+ "&extend=" + extend 
																			+ "&timestamp=" + timestamp 
																			+ "&sign=" + sign;	
		
		//如果sign后面的参数有值，则是新3.1发起的流程
		if(authUrl && shopId && mac && ssid && bssid){
			url = "https://wifi.weixin.qq.com/operator/callWechat.xhtml?appId=" + appId 
																			+ "&extend=" + extend 
																			+ "&timestamp=" + timestamp 
																			+ "&sign=" + sign
																			+ "&shopId=" + shopId
																			+ "&authUrl=" + encodeURIComponent(authUrl)
																			+ "&mac=" + mac
																			+ "&ssid=" + ssid
																			+ "&bssid=" + bssid;
		}else{
			box.show({content:"缺少参数配置"});
		}			
		
		//通过dom操作创建script节点实现异步请求  
		var script = document.createElement('script');  
		script.setAttribute('src', url);  
		document.getElementsByTagName('head')[0].appendChild(script);
	}
}

/**
 * 微信连Wi-Fi协议3.1供运营商portal呼起微信浏览器使用
 */
var loadIframe = null;
var noResponse = null;
var callUpTimestamp = 0;
 
function putNoResponse(ev){
	 clearTimeout(noResponse);
}	

 function errorJump()
 {
	 var now = new Date().getTime();
	 if((now - callUpTimestamp) > 4*1000){
		 return;
	 }
	 box.show({
		content: '该浏览器不支持自动跳转微信请手动打开微信\n如果已跳转请忽略此提示',
		timeout: 3
	 });
 }
 
 myHandler = function(error) {
	 errorJump();
 };
 
 function createIframe(){
	 var iframe = document.createElement("iframe");
     iframe.style.cssText = "display:none;width:0px;height:0px;";
     document.body.appendChild(iframe);
     loadIframe = iframe;
 }
//注册回调函数
function jsonpCallback(result){  
	if(result && result.success){
	    var ua=navigator.userAgent;              
		if (ua.indexOf("iPhone") != -1 ||ua.indexOf("iPod")!=-1||ua.indexOf("iPad") != -1) {   //iPhone             
			document.location = result.data;
		}else{
			
			if('false'=='true'){
				alert('[强制]该浏览器不支持自动跳转微信请手动打开微信\n如果已跳转请忽略此提示');
				return;
			}
			
		    createIframe();
		    callUpTimestamp = new Date().getTime();
		    loadIframe.src=result.data;
			noResponse = setTimeout(function(){
				errorJump();
	      	},3000);
		}			    
	}else if(result && !result.success){
		alert(result.data);
	}
}

var myutils = {
	base64EncodeChars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	base64DecodeChars:new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
	/** 
	 * base64编码 
	 * @param {Object} str 
	 */
	base64encode:function(str){
		var base64EncodeChars=this.base64EncodeChars;
		var out, i, len;  
	    var c1, c2, c3;  
	    len = str.length;  
	    i = 0;  
	    out = "";  
	    while (i < len) {  
	        c1 = str.charCodeAt(i++) & 0xff;  
	        if (i == len) {  
	            out += base64EncodeChars.charAt(c1 >> 2);  
	            out += base64EncodeChars.charAt((c1 & 0x3) << 4);  
	            out += "==";  
	            break;  
	        }  
	        c2 = str.charCodeAt(i++);  
	        if (i == len) {  
	            out += base64EncodeChars.charAt(c1 >> 2);  
	            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
	            out += base64EncodeChars.charAt((c2 & 0xF) << 2);  
	            out += "=";  
	            break;  
	        }  
	        c3 = str.charCodeAt(i++);  
	        out += base64EncodeChars.charAt(c1 >> 2);  
	        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
	        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));  
	        out += base64EncodeChars.charAt(c3 & 0x3F);  
	    }  
	    return out;  
	},

	/** 
	 * base64解码 
	 * @param {Object} str 
	 */
	base64decode:function (str){  
		var base64DecodeChars=this.base64DecodeChars;
	    var c1, c2, c3, c4;  
	    var i, len, out;  
	    len = str.length;  
	    i = 0;  
	    out = "";  
	    while (i < len) {  
	        /* c1 */  
	        do {  
	            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
	        }  
	        while (i < len && c1 == -1);  
	        if (c1 == -1)   
	            break;  
	        /* c2 */  
	        do {  
	            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
	        }  
	        while (i < len && c2 == -1);  
	        if (c2 == -1)   
	            break;  
	        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));  
	        /* c3 */  
	        do {  
	            c3 = str.charCodeAt(i++) & 0xff;  
	            if (c3 == 61)   
	                return out;  
	            c3 = base64DecodeChars[c3];  
	        }  
	        while (i < len && c3 == -1);  
	        if (c3 == -1)   
	            break;  
	        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));  
	        /* c4 */  
	        do {  
	            c4 = str.charCodeAt(i++) & 0xff;  
	            if (c4 == 61)   
	                return out;  
	            c4 = base64DecodeChars[c4];  
	        }  
	        while (i < len && c4 == -1);  
	        if (c4 == -1)   
	            break;  
	        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);  
	    }  
	    return out;  
	},

	ajax:function(config){
		var Global_XMLHttpReq;
		var httpType=config.type || 'POST';

		//创建http对象
		if(window.XMLHttpRequest) { 
			Global_XMLHttpReq = new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
			try {
				Global_XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					Global_XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {}
			}
		}

		Global_XMLHttpReq.open(httpType, config.url, true);
		Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

		Global_XMLHttpReq.onreadystatechange=function(){
			if(Global_XMLHttpReq.readyState==4){
				if(Global_XMLHttpReq.status==200){
					var response = null;
					if(config.dataType == "json"){
						response = eval("("+Global_XMLHttpReq.responseText+")");
					}else{
						response = Global_XMLHttpReq.responseText;
					}
					config.success(response);
				}
			}
		}
		Global_XMLHttpReq.send(config.data);

	},

	// 转换对象：key=value
	obj2Param:function(obj){
		var s = "";
		if(typeof obj == "object"){
			for(var k in obj){
				if(typeof obj[k] == "number" || (typeof obj[k] == "string" && this.trim(obj[k]) != "")){
					s += k+"="+this.trim(obj[k])+"&";
				}
			}
			if(s.substr(-1) == "&"){
				s = s.substr(0, s.length-1);
			}
		}
		return s;
	},
	trim:function(s){
		if(typeof s == "string")
			return s.replace(/(^\s*)|(\s*$)/g, "");
		else 
			return s;
	}
}

/**
 * 微信弹窗
 * @type {Object}
 */
var box = {
    timeout: null,
    show: function(settings){
        var me = this;
        // 默认参数
        var defaults = {
            title:                     "提示",
            content:                   "",
            timeout:                   0,
            buttons:                   ["close"], //["confirm", "cancel", "close"]
            bgClickClose:              0,
            timeoutClose:              function(){},
            confirm:                   function(){me.close()},
            cancel:                    function(){me.close()},
            close:                     function(){me.close()}
        };
        settings = $.extend(defaults, settings);
         
        // 把原来的tipBox移除
        if($("#tipBox").length > 0){
			this.close();
		}
 
        // 构造新的tipBox
        var tipBox = $("<div></div>", {
            id:    "tipBox",
            'class':     "tip-box"
        }).appendTo($("body"));
         
        // bootstrap排版
        var container = $("<div></div>", {
            'class': "container"
        }).appendTo(tipBox);
        var row = $("<div></div>", {
            'class': "row"
        }).appendTo(container);
        var col = $("<div></div>", {
            'class': "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
        }).appendTo(row);
         
        // 弹出窗
        var tipBoxBody = $("<div></div>", {
            'class': "panel panel-default tip-box-body"
        }).appendTo(col);
        // 动画显示
        tipBoxBody.animate({
            marginTop:     "250px",
            opacity:   "1"
        },"fast");
 
        // title
        var title = $("<div></div>", {
            'class': "panel-heading tip-box-title"
        }).appendTo(tipBoxBody);
        title.html("<h3 class='panel-title'>"+settings.title+"<h3>");
 
        // 内容
        var content = $("<div></div>", {
            'class': "panel-body"
        }).appendTo(tipBoxBody);
        content.html(settings.content);
         
        // 底部按钮
        if(settings.buttons.length > 0){
            var footer = $("<div></div>", {
                'class': "panel-footer tip-box-footer"
            }).appendTo(tipBoxBody);
            $.each(settings.buttons, function(key,value){
                switch(value){
                    case "confirm":
                        var confirmButton = $("<button class='btn btn-danger tip-box-footer-btn'>确定</button>");
                        confirmButton.on("click",function(){
                            settings.confirm();
                        });
                        confirmButton.appendTo(footer);
                        break;
                    case "cancel":
                        var cancelButton = $("<button class='btn btn-danger tip-box-footer-btn'>取消</button>");
                        cancelButton.on("click", function(){
                            settings.cancel();
                        });
                        cancelButton.appendTo(footer);
                        break;
                    case "close":
                        var closeButton = $("<button class='btn btn-danger tip-box-footer-btn'>关闭</button>");
                        closeButton.on("click", function(){
                            settings.close();
                        });
                        closeButton.appendTo(footer);
                        break;
                    default:
                        break;
                }
            });
        }
 
        // 去除到时触发
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        // 增加倒计时触发
        if(settings.timeout != 0){
            this.timeout = setTimeout(function(){
                me.close();
                settings.timeoutClose();
            }, settings.timeout*1000);
        }
        // 是否点击空白关闭弹窗
        if(settings.bgClickClose == 1){
            tipBox.on("click",function(){
                me.close();
            });
            tipBoxBody.click(function(event){
                event.stopPropagation();
            });
        }
    },
    close: function(){
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        $("#tipBox").fadeOut(1000,function(){
            $(this).remove();
        })
    }
}

/* 错误信息获取，显示
 * @type {Object}
 */
var errorMsgObj = {
	errorMsg:null,
	wantToAutoLogin:false,

	//后台响应信息
	strACLogOut:null,
	strACLogIn:null,

	acLogout:function(){
		var me = this;
		switch(parseInt(me.strACLogOut)){
			case 0:
				me.errorMsg =  "二维码扫描终端认证成功<br/>Scan terminal authentication success";
				break;
			case -1:
				me.errorMsg =  "二维码扫描终端认证失败<br/>Scan terminal authentication failed";
				break;			
			case 1:
				me.errorMsg =  "注销成功<br/>Logout successfully";
				break;
			case 2:
				me.errorMsg =  "此IP禁止登陆<br/>IP is not allowed";
				break;
			case 3:
				me.errorMsg =  "扫描终端已离线<br/>The scan terminal is offline";
				break;
			case 4:
				me.errorMsg =  "此IP未被列入白名单<br/>This IP is not whitelisted";
				break;
			case 5:
				//me.errorMsg =  normalFun.getChineseQueryString('ErrorMsg');
				me.errorMsg =  "二维码扫描终端开户失败<br/>Scan terminal register failed";
				break;
			case 6:
				me.errorMsg =  "账号或密码不对，请重新输入<br/>Ivalid account or password, please login again";
				break;
			default:
				//Portal协议认证,通过radius获取认证信息//本地认证
				enPortal == 1?me.accoutStatus():me.defaultAuth();
		}
	},

	acLogin:function(){
		var me = this;
		// 返回值说明:0-成功 1帐户密码不对 2IP已经在线 3系统忙 4未知错误
		// 5-REQ_CHALLENGE失败 6-REQ_CHALLENGE超时 7-认证失败 8-认证超时 9-下线失败 10-下线超时 11-其他错误
		// 998-格式错误(一般是DRCOM协议下没有session)
		switch(parseInt(me.strACLogIn)){
			case 1:
				// me.errorMsg =  "账号验证失败，请检查：<br>1、帐号密码是否错误。<br>2、帐号是否已在其他地方登录。<br>3、帐号是否在上课时间。<br>4、帐号是否停机。";
				me.errorMsg =  "账号或密码不对，请重新输入<br/>Ivalid account or password, please login again";
				break;
			case 2:
				me.errorMsg =  "IP 已经在线<br/>IP already online";
				break;
			case 3:
				me.errorMsg =  "系统繁忙，请稍后再试<br>The system is busy, please try again later";
				break;
			case 4:
				me.errorMsg =  "发生未知错误，请稍后再试<br>An unknown error occurred, please try again later";
				break;
			case 5:
				me.errorMsg =  "REQ_CHALLENGE失败<br>REQ_CHALLENGE failure";
				break;
			case 6:
				me.errorMsg =  "REQ_CHALLENGE超时<br>REQ_CHALLENGE timeout";
				break;
			case 7:
				me.errorMsg =  "认证失败<br>Authentication failure";
				break;
			case 8:
				me.errorMsg =  "认证超时<br>Authentication timeout";
				break;
			case 9:
				me.errorMsg =  "下线失败<br>Logout failure";
				break;
			case 10:
				me.errorMsg =  "下线超时<br>Logout timeout";
				break;
			case 11:
				me.errorMsg =  "发生其他错误，请稍后再试<br>Other error occurred, please try again later";
				break;
			case 998:
				me.errorMsg =  "Portal协议参数不全，请稍后再试<br>Parameter number is not enough";
				break;
		}
	},
	defaultAuth:function(){
		var me = this;
		switch(Msg){
			case 0:case 1:
				switch(msga){
					case null: case '':
						me.errorMsg = "账号或密码不对，请重新输入<br/>Ivalid account or password, please login again";
						break;
					case 'error0':
						me.errorMsg = "本IP不允许Web方式登录<br>The IP does not allow Web-log";
						break;
					case 'error1':
						me.errorMsg = "本账号不允许Web方式登录<br>The account does not allow Web-log";
						break;
					case 'error2':
						me.errorMsg = "本账号不允许修改密码<br>This account does not allow change password";
						break;
					case '[01], 本帐号只能在指定VLANID使用(0.'+ cvlanid +')':
						me.errorMsg="用户首次登录需强制修改密码";
						alert(me.errorMsg);
						changePass();
						break;
					default :
						me.errorMsg = msga;
				}
				break;
			case 2:
				me.errorMsg = "该账号正在使用中，请您与网管联系<br>This account is tie up, please contact network adminstration"+pp+xip+pp+mac;
				break;
			case 3:
				me.errorMsg = "本账号只能在指定地址使用<br>This account can be used on the appointed address only."+pp+xip;
				break;
			case 4:
				me.errorMsg = "本账号费用超支或时长流量超过限制<br>This account overspent or over time limit";
				break;
			case 5:
				me.errorMsg = "本账号暂停使用<br>This account has been suspended";
				break;
			case 6:
				me.errorMsg = "系统缓存太满<br>System buffer full";
				break;
			case 7:
				me.errorMsg = UT+UF+UM;
				break;
			case 8:
				me.errorMsg = "本账号正在使用,不能修改<br>This account is in use. Unable to change";
				break;
			case 9:
				me.errorMsg = "新密码与确认新密码不匹配,不能修改<br>New password and confirmation do not match. Unable to change";
				break;
			case 10:
				me.errorMsg = "密码修改成功<br>Password Changed Successfully";
				break;
			case 11:
				me.errorMsg = "本账号只能在指定地址使用<br>This account can be used on the appointed address only :"+pp+mac;
				break;
			case 14:
				wantToAutoLogin=true;
				me.errorMsg = "注销成功<br>Logout successfully"+pp+UT+UF+UM;
				break;
			case 15:
				wantToAutoLogin=true;
				me.errorMsg = "登录成功<br>Login successfully"+pp+UT+UF+UM;
				break;
			default:
				me.errorMsg = "无线网络问题，请联系管理员<br/>Wireless network problems, please contact the administrator";
		}
	},

	DispTFM:function(){
		var me = this;
		var divMessage = document.getElementById("message");
		me.strACLogOut = getQueryString('ACLogOut');
		me.strACLogIn  = getQueryString('ACLogIn');

		//错误信息从Portal协议认证时获取
		if(radiusIP == "" && me.strACLogIn != ""){
			me.acLogin();
		}
		//Portal验证信息返回或错误信息从Radius服务器读取	
		else{
			me.acLogout();
		}

		divMessage.innerHTML = me.errorMsg;
	},

	//=====================================================================
	//===================================================================== lidengfeng above
	//=====================================================================
	//Radius服务器(连接设备内网口)，显示更多认证失败信息
	accoutStatus:function(){
		var me = this;
		
		me.errorMsg = "无线网络问题，请联系管理员<br/>Wireless network problems, please contact the administrator";
		
		var url = window.location.protocol + "//" + window.location.hostname + "/errcode";
		if(radiusIP != null && radiusIP.length > 0){
		  url = window.location.protocol + "//" + radiusIP + "/errcode";
		}
		//console.log("url:"+url);
		createGlobalXMLHttpRequest();
		Global_XMLHttpReq.open("GET", url, false);
		Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Global_XMLHttpReq.onreadystatechange=function(){
			if(Global_XMLHttpReq.readyState==4){
				if(Global_XMLHttpReq.status==200){
					var responseText = Global_XMLHttpReq.responseText;
					//console.log("responseText:"+responseText);

					for(var i=0; i<RadiusErrorAry.length; i++){
						var option_array = RadiusErrorAry[i].split("|");
						var regx = option_array[1];
						if(responseText.indexOf(regx) != -1){
							me.errorMsg = option_array[2] + "<br/>" + option_array[3];
							break;
						}
					}
					/*
					//账号停机
					var regx05="Rpost=2;ret='Authentication Fail ErrCode=05'";
					if(responseText.indexOf(regx05)>0){
						me.errorMsg="您的账号已停机，造成停机的可能原因："+pp+"1、用户欠费停机"+pp+"2、用户报停"+pp+"需要了解具体原因，请访问自助服务系统。";
					}
					
					//绑定VLANID为4095
					var regx4095="[01], 本帐号只能在指定VLANID使用(0."+ cvlanid +")";
					var regx4095_2="Mac, IP, NASip, PORT err(6)";
					if(responseText.indexOf(regx4095)>0 || responseText.indexOf(regx4095_2)>0){
						me.errorMsg="本帐号只能在指定VLANID使用";
					}
					
					//VLAN范围控制账号的接入数量超出限制
					var reg=/Rpost=2;ret='wuxian OLno ([^']*)>=/g;
					var temp="";
					var tempURL="";
					if((temp=reg.exec(responseText))  != null){
						me.errorMsg = "VLAN范围控制账号的接入数量超出限制[" + normalFun.trim(temp[1]) +"]";
					}
					*/
					//console.log("me.errorMsg:"+me.errorMsg);
					
					//document.getElementById("message").innerHTML=errorMsg;
				}
				else if(Global_XMLHttpReq.status==404){
					me.errorMsg="AC认证异常<br>AC authentication exception";
					
					//document.getElementById("message").innerHTML=errorMsg;
				}
			}
		}
		Global_XMLHttpReq.send();
	}
}

//获取自服务修改密码页地址及相关参数
function changePass(){
	var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/?c=UpdatePwd&a=changePass";
	//alert("url:"+url);

	var uname = "";
	var cook = getCookie("md5_login2");
	if(cook != null){
		var arr = cook.split("|");
		uname = arr[0];
	}
	else{
		alert("无法获取用户认证账号！");
		return false;
	}
	var data = "DDDDD="+uname;
	//alert("data:"+data);
	
	$.ajax({
		type: "get", // 或者 "get"
		url: url,
		data: data,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(json) {
			if(json.result == 'ok'){
				window.location.href = json.reback_url;							
			}
			else{
				alert(json.msg);
			}
		},
	    error:function(){
	        alert("获取自服务修改密码页地址及相关参数时出现异常！");
	    }
	});	
	
	return false;
}