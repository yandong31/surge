const __conf = String.raw`

[Remote]
// custom remote...


[Local]
// custom local...

##NobyDa

# 去微博应用内广告 (By yichahucha)
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 去微信公众号广告 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 知乎去广告 (By onewayticket255)
^https://api.zhihu.com/moments/recommend url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_zhihu_feed.js
^https://api.zhihu.com/topstory/recommend url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_zhihu_recommend.js
https://api.zhihu.com/v4/questions url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_zhihu_answer.js
^https://api.zhihu.com/people/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_zhihu_people.js
^https://api.zhihu.com/market/header url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Zhihu-ad-market.js

# 哔哩哔哩动画去广告 (By onewayticket255)
https://app.bilibili.com/x/v2/space\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_space.js
https://app.bilibili.com/x/resource/show/tab\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_tab.js
https://app.bilibili.com/x/v2/feed/index\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_feed.js
;https://app.bilibili.com/x/v2/account/mine\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_account.js
https://app.bilibili.com/x/v2/view\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_view_relate.js
https://api.bilibili.com/x/v2/reply/main\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/onewayticket255/surge_bilibili_live.js

# 抖音去广告去水印 (By Choler)
^https:\/\/.*\.amemv\.com\/aweme\/v.*\/(feed|post) url script-response-body https://raw.githubusercontent.com/Choler/Surge/master/Script/Aweme.js

# 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

# 小小影视Vip (By Meeta)
https:\/\/.*\.xiaoxiao.*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xxys.js

# 爱美剧Vip (by huihui）(官网：app.meiju2018.com)
#VIP&ads
^http(s)://mjapp.anlujia.com/index.php/app/ios/(vod/show|(user|vod|topic|type)/index) url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/aimeiju.js

# 网易蜗牛读书VIP (By yxiaocai and JO2EY)
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

# 看漫画极速版vip (By HoGer)
^https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/kmh.js

# 知音漫客VIP (By mieqq)
^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

# 哔哩哔哩番剧开启1080P+
^https?:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

# VSCO滤镜VIP
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

# 大片-视频编辑器 VIP
^https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js

# 91短视频
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/91.js

# 网易考拉 去广告 (By Choler)
^https://sp\.kaola\.com/api/openad$ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wykaola.js

# 腾讯新闻 去广告 (By Choler)
^https://r\.inews\.qq.com\/get(QQNewsUnreadList|RecommendList) url script-response-body https://raw.githubusercontent.com/Choler/Surge/master/Script/QQNews.js

# 香蕉视频VIP
^https?:\/\/.*\.(fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

# 用药助手解锁专业版 (By Primovist)
^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js

# 优乐美, 小米粒, 彩色直播三合一 解锁收费房
^https?:\/\/(.+)\.(\w{2,3})(:?\d*)\/(api\/public\/\?service=Live\.checkLive$|public\/\/\?service=Live\.roomCharge$|lg\/video\/loadVideoFees\.do$) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/zhibo.js

# 陆琪讲故事
^https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/luqi.js

# WPS (By eHpo)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# Gyroscope 解锁 pro (By Maasea)
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/gyroscope.js

# 水印精灵 vip (By Alex0510)
^https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/syjl.js

# 大千视界
^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/dqsj.js

# JibJab解锁pro
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/jibjab.js

# Termius 解锁本地pro  (By Maasea)
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Termius.js

# 小影 解锁Vip (By @hiepkimcdtk55)
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

# 彩云天气 Vip
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/QuantumultX/File/ColorWeather.js

# Keep 解锁私人课程和动作库 (QX存在bug 该脚本可能无法生效)
^https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Keep.js

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

# VUE pro
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

# NiChi 解锁素材
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/NiChi.js

# PicsArt美易 pro
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

# Splice 视频编辑器 pro
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Splice.js

#百度云倍速播放
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js

#皮皮虾 去广告去水印
^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list) url script-response-body https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js

##越南老哥langkhach270389
#vsco
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/vsco.js

#gyroscope
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Gyroscope.vip.js

#Termius 
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Terminus.js

#PicsArt
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/picsArt.vip.js

#Vivavideo
^https:\/\/viva-asia1\.vvbrd\.com\/api\/rest\/u\/vip* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/vivavideo.vip.js

#Undfold
^https:\/\/api\.unfold\.app\/v1\/ios\/receipts$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Unfold.vip.js

#Nhaccuatui
^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/nhaccuatui.js

#Memrise
^https:\/\/api\.memrise\.com\/.+\/(me\/$|dashboard\/$|leaderboards\/following\/) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/memrise.vip.js

# Jibjab
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/jibjab.vip.js

#buyhack
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/verify_receipt.js

#sync
^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/syn.me.js

#elsaresponse
^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/elsa-response.js

#drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com/.*/functions\/prod-4-syncPurchases\/invocations$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/drops.js

#mondly
^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/mondly.vip.js

#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/busuu.vip.js

#Videoshow
^https:\/\/owa\.videoshowiosglobalserver\.com\/.*\/iosPayClient url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/videoshow.vip.js

#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/elevate.vip.js

#beautyplus
^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/beautyplusvip.js

#camera360
^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/camera360.vip.js

#zingtv
^https?:\/\/api\.tv\.zing\.vn\/.*/user* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/zingtvvipv1.js

#calm
^https:\/\/api\.calm\.com\/me$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/calm.vip.js

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Lightroom.js

#Pdfexpert
^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Pdfexpert.vip.js

#productive&sleepzy&weather live
^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/productive.js

#Musixmatch
^https:\/\/apic\.musixmatch\.com\/ws\/.*\/config\.get url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/musixmatch.miao.js

#mimo
^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/mimo.vip.js

#mojo&noto
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[a-zA-Z0-9_-]*$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/revenuecat.js

#lingokids
^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/lingokids.vip.js

#musicalm
^https:\/\/www\.peacefulsoundsapp\.com\/api\/v1\/init$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/musicalm.js

#duolingo_test
^https:\/\/duolingo-leaderboards-prod\.duolingo\.com\/leaderboards* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/duolingo.js

#ulike
^https:\/\/commerce-i18n-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/ulike.js

#zingmp3
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getUserInfo\?data=* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/zingmp3.js

#Blinkist
^https:\/\/api\.blinkist\.com\/v4\/(me$|me.json$|me\/access$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/blinkist.js

#sololearn 
^https:\/\/api\.sololearn\.com\/(Profile\/GetProfile$|authenticateDevice$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/sololearn.js

#kinemaster
^https:\/\/api-kinemaster-assetstore\.(nexstreaming|kinemasters)\.com\/.*\/product\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/kinemaster.js

#pushover
^https:\/\/api\.pushover\.net\/1\/messages\.json* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/pushover.js

#CamScanner
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/CamScaner.js

#over
^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/over.vip.js

#speak&translate
^https:\/\/receipt-validator\.herewetest\.com\/apple\/verifyTransaction$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/speak&translate.js

#document
^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/documents.js

#workingcopy
^https:\/\/education\.github\.com\/api\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/workingcopy.js

#draft
^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/draft.js

#phothop&PSexpress
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/photoshop.js

#itranslate&lingo&voice&converse
^https:\/\/ssl-api\.itranslateapp\.com\/.*\/subscriptions\/.*\/ios$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/itranslate.js

#ulysses
^https:\/\/sk\.ulysses\.app\/api\/v1\/itunes_receipt_verify$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/ulysses.js

#dayone
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/dayone.js

#endel
^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/endel.js

#shred
^https:\/\/api\.shred\.app\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/shred.js

#nichi
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/nichi.js

#grammarly
^https:\/\/subscription\.grammarly\.com\/api\/v1$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/grammarly.js

#splice
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/splice.js

#planner5d
^https:\/\/planner5d\.com\/api\/sets url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/planner5d.js

^https:\/\/secure\.istreamer\.com\/backend$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/playerxtreme.js

#all apps monkey
^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/monkey.js

#textnow
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Textnow.js


##大雄脚本组

# 哔哩哔哩动画 精简去广告 (By @Kaya)
;^https:\/\/app\.bilibili\.com\/(search\/resource|x\/(resource\/show\/tab|v2\/(view|rank|feed|reply\/main|account\/mine))) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Bilibili.js

#哔哩哔哩个人排行榜
;^https:\/\/app\.bilibili\.com\/x\/v2\/space\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bilibili_space_qx.js
#哔哩哔哩番剧解锁
;^https:\/\/api\.bilibili\.com\/pgc\/view\/app\/season url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bilibili_season_qx.js
;^https:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bilibili_playurl_qx.js

# 驾校一点通 (by @superuv)
^https:\/\/vipapi\.jxedt\.com\/vip\/check url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/jxydt.js

# 彩云小译   (by @superuv)
^https:\/\/api\.interpreter\.caiyunai\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/cyxy.js

#Bear熊掌记  内购解锁
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bear.js

#Pocket list (by @superuv)
^https:\/\/pocketlists\.com\/api\/v1\/pocketlists.me.get url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/pock.js

#海豚记账 (by @superuv)
https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/HTJZ.js

#幕布 (by @superuv)
https:\/\/mubu\.com\/api\/app\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mb.js

#智能证件照相机 (by @superuv)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/znzj.js

#猫咪翻译(by @superuv)
http:\/\/miaow\.yiyongcad\.com\/api\/v4\/memprofile url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mmfy.js

#微商助手(by @superuv)
https:\/\/api\.lennou\.com\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/wszs.js

#gk扫描仪(by @superuv)
^https:\/\/api\.gkocr\.com\/api\/userlogin1.php url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/smy.js

#流利说.阅读 (by@火羽&@singee)
^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/llyd.js

#人人视频 (by@george Jiang & R)
^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/rrtv.js

#云盘解析（Made by Meeta)
^https?:\/\/pan\.baidu\.com\/s\/ url script-response-body https://raw.githubusercontent.com/nzw9314/MeetaRules/master/Surge/Scripting/yun_analyze.js

#abaenglish (未测试)
^https:\/\/api\.revenuecat\.com\/v1\/(receipts|\d{1,})$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/abaenglish.vip.js

#轻颜相机 & ulike & 蒸汽波相机(vaporcam)三合一 解锁VIP(By @s y & Alex0510)
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/qyxj.js


#CPU Dasher破解(需要ios13 恢复购买后禁用掉 By @s y)
;^https:\/\/p.+-buy\.itunes\.apple\.com\/WebObjects\/MZFinance.woa\/wa\/inAppRegrantPurchaseHistory url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/cupdasher.js

#酷我换肤(已经有的皮肤需要先从本地皮肤删除再换 By@ s y)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js

# 115离线 (请仔细阅读脚本内使用说明 By ikanam)
^http:\/\/115\.com\/lx.*$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/115lx.js

#lake
^https:\/\/api\.lakecoloring\.com\/v1\/receipt url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/lake.js

#人人影视字幕组(商店版)去广告,保留轮播推荐影片(By @Kaya)
^http://ctrl.playcvn.com/app/(init|ads) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/YYeTs.js

#每日英语阅读/每日外刊 解锁课程  (By chamberlen)
^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mryy.js

#联通营业厅 去轮播广告 (By Wangsc1)
^https?://m.client.10010.com/uniAdmsInterface/getHomePageAd url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/china_unicom.js

#哔咔漫画 屏蔽更新(By @FlintyLemming)
#iOS 2.1.2.1 屏蔽 2.1.2.2 的更新提示
^https:\/\/api\.wakamoment\.ga\/init\?platform\=ios url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/blockBikaUpdate.js

#第一弹 去广告+原画 (By Miao Miao)
^https:\/\/api\.diyidan\.net\/v0\.3\/(user\/personal_homepage|vip_user\/info|tv_series\/index\?appChanne) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Diyidan.js


#Fantastical 内购解锁 (By @sunshy)
^https:\/\/api\.flexibits\.com\/v1\/(auth|account)\/(device|details|appstore-receipt)\/$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/fantastical.js

#菜谱大全解锁vip (By @photonmang)
https?:\/\/api\.jiaonizuocai\.com url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/cpdq.js

#SoloLearn Unlock PRO & Platinum Moderator (By @sunshy)
https:\/\/api\.sololearn\.com\/(authenticateDevice|challenge\/GetContestFeed|Profile\/GetProfile)$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/sololearn.js

#头脑吃鸡
^https://tncj.hortorgames.com/chicken/fight/(answer|findQuiz) url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/tncj/tncj.min.js

#Pear 雪梨
^https:\/\/m\.pearkin\.com\/(api\/Movie\/WatchMovie|api\/Account\/CheckVip|api\/account\/IndexDetail) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/pear.js

#克拉壁纸  解锁付费壁纸 (By @Dachaw)
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/clarity.js

#洪恩双语绘本 (By 军哥哥)
https:\/\/bookapi\.ihuman\.com\/(v1\/get\_user\_info|v1\/get\_purchase\_list) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/hnsyhb.js

#中国体育直播unlock (By 军哥哥)
http:\/\/rest\.zhibo\.tv\/room\/get\-room\-info\-v430 url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/zgtyzb.js

# 有道云笔记VIP (ByAlex0510)
https://note.youdao.com/yws/(mapi/payment|api/self) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ydybj.js

#Peak 解锁Pro
^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/peak.js

# IT之家 去新闻列表广告
^https?:\/\/api\.ithome\.com\/json\/slide\/index url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js
^https?:\/\/api\.ithome\.com\/json\/(newslist|listpage)\/news url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js

# XMind思维导图 (by @JigsaWo)
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/XMind.js

# 万里影视 （by LTribe）
^http?:\/\/.*\.arten.cn/login/login url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Wanliyingshi.js

# 奇热小说 解锁收费章节(By @@ios4521)
^https://api.weiqire.com/api3/(visitor/|user/unlockCharpter) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/qrxs.js

# 石墨文档 (By Alex0510)
https://api.shimo.im/users/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/shimo.js

#VideoStar Unlock（by LTribe）
^https?:\/\/.*\.videostarapp\.com\/scripts\/subsNew\.php url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/VideoStar.js

# Pillow (By @CheeryTodo)
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/pillow.js

# 马卡龙 (By @CheeryTodo)
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mkl.js

# 韩剧TV (By 凉意)
# 下载地址请看脚本内说明
^https\:\/\/hjapi\.bjxkhc\.com\/v2d2\/users\/.*\/member url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/hanjuTV.js

# 手机硬件管家 (ByAlex0510)
http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/sjyjgj.js

#筋斗云tv (By 凉意)
^http\:\/\/jdytv\.cn\/login\/login\/veifys url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/jdyTV.js

# 花椒视频 (By Alex0510)
http://user.shywck.com/user/userinfo url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/hjsp.js

# 迅捷应用6合1 （by LTribe）
^https?:\/\/.*\.xunjie.*\.com\/api\/v\d\/* url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xunjie.js

# 小睡眠（by 黑黑酱）
^https:\/\/api\.psy-1\.com\/cosleep\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xiaoshuimian.js

#蜗牛睡眠会员（by黑黑酱）
^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/wnsm.js

# 可可英语会员
^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/kkyy.js

# 飒漫画 (By @u18888)
^https:\/\/m\.samh\.xndm\.tech\/userapi\/info\/v1\/getuserinfo url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Smh.js

# 闪电下载vip (By 凉意)
^http\:\/\/app\.flashdown365\.com\/ios\/login url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/sdxz.js

# 西窗烛 （By 黑黑酱）
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xcz.js

#JAV101无限观看 (By 凉意)
^https\:\/\/api\.gao1gps\.cn\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/JAV101.js
^https\:\/\/api\.jiu-wang\.cn\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/JAV101.js

#美颜相机一次性解锁内购（by黑黑酱）
^https:\/\/api\.meiyan\.com\/iap\/verify\.json url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/myxj.js

# Fit健身会员 （by黑黑酱）
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/fit.js

##以下为仅QX1.05+(TF188+)可用

# 动画疯 去广告(by NobyDa)
;https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js
;https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js

#京东历史比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

#淘宝历史比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js

#Netflix获取评分(by yichahucha)
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js


[Hostname]
// custom hostname...
bea.sportq.com, api.meiyan.com, api.gao1gps.cn, api.jiu-wang.cn, avoscloud.com, app.flashdown365.com, m.samh.xndm.tech, mob2015.kekenet.com, api.m.jd.com, ios.prod.ftl.netflix.com, vipapi.jxedt.com, api.interpreter.caiyunai.com, pocketlists.com, book.haitunwallet.com, mubu.com, app.xunjiepdf.com, miaow.yiyongcad.com, api.lennou.com, api.gkocr.com, vira.llsapp.com, commerce-.*api.faceu.mobi, commerce-api.faceu.mobi, pan.baidu.com, api.revenuecat.com, api.rr.tv, editorapi.115.com, api.lakecoloring.com, ctrl.playcvn.com, dict.eudic.net, m.client.10010.com, api.wakamoment.ga, *.bh3.com, api.diyidan.net, api.flexibits.com, api.jiaonizuocai.com, api.sololearn.com, tncj.hortorgames.com, m.pearkin.com, claritywallpaper.com, bookapi.ihuman.com, rest.zhibo.tv, note.youdao.com, billing.peakcloud.org, api.ithome.com, www.xmind.cn, *.arten.cn, api.weiqire.com, api.shimo.im, pay.wecut.com, *.videostarapp.com, app.api.versa-ai.com, *.bjxkhc.com, api.591master.com, jdytv.cn, user.shywck.com, *.xunjie*.com, api.psy-1.com, snailsleep.net, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, mp.weixin.qq.com, api.bilibili.com, app.bilibili.com, *.zhihu.com, aweme*.snssdk.com, *.kuwo.cn, vip1.kuwo.cn, *.xiaoxiao*.com, api*.tiktokv.com, *.musical.ly, *.amemv.com, p.du.163.com, getuserinfo.321mh.com, getuserinfo-globalapi.zymk.cn, ios.fuliapps.com, vsco.co, api.vnision.com, *.my10api.com, sp.kaola.com, r.inews.qq.com, apple.fuliapps.com, newdrugs.dxy.cn, app101.avictown.cc, api.hlo.xyz, api.ijo.xyz, www.luqijianggushi.com, account.wps.*, u.kanghuayun.com, api.gyrosco.pe, api1.dobenge.cn, api.mvmtv.com, mitaoapp.yeduapp.com, origin-prod-phoenix.jibjab.com, www.3ivf.com, pay.guoing.com, api.termius.com, api.bjxkhc.com, viva.v21xy.com, .com, biz.caiyunapp.com, api.gotokeep.com, ap*.intsig.net, mp.bybutter.com, api.vuevideo.net, api.picsart.c*, api.meiease.c*, splice.oracle.*.com, api.gamer.com.tw, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, api.gamer.com.tw, *.xiangxiangapps.com, avatar-nct.nixcdn.com, spclient.wg.spotify.com, oa.zalo.me, origin-prod-phoenix.jibjab.com, api.meiease.c*, api.unfold.app, viva-asia1.vvbrd.com, graph.nhaccuatui.com, api.memrise.com , api.sync.me, pool.elsanow.io, lambda.us-east-1.amazonaws.com, api.mondlylanguages.com, api.busuu.com, owa.videoshowiosglobalserver.com:0, accounts.elevateapp.net, purchases.ws.pho.to, api-intl.mr.meitu.com, bmall.camera360.com, api.tv.zing.vn, api.calm.com, www.calm.com, api.global.mp3.zing.vn, apimboom2.globaldelight.net, photos.adobe.io, license.pdfexpert.com, subs.platforms.team, apic.musixmatch.com, api.getmimo.com, api.revenuecat.com, engbright.com, api.lingokids.com, www.peacefulsoundsapp.com, duolingo-leaderboards-prod.duolingo.com, mobile-api.adguard.com, api.blinkist.com, api-kinemaster-assetstore.*, api.pushover.net, ap*.intsig.net, api.overhq.com, receipt-validator.herewetest.com, lcs-mobile-cops.adobe.io, education.github.com, backend.getdrafts.com, ssl-api.itranslateapp.com, sk.ulysses.app, dayone.me, license.enpass.io, mp.bybutter.com, *.grammarly.com, splice.oracle.*.com, api.keepkeep.com, planner5d.com, secure.istreamer.com, www.api.monkeyuni.net, api.textnow.me, 

`

// 是否更新 GitHub（如果开启 true，需配置 token 或 账号密码）
const __isUpdateGithub = false
// GitHub Token（如果使用账号密码 token 请设置为空 ""）
const __token = ""
// GitHub 账号
const __username = ""
// GitHub 密码
const __password = ""
// GitHub 用户名
const __owner = "yandong31"
// GitHub 仓库名
const __repo = "surge"
// GitHub 分支（不指定就使用默认分支）
const __branch = "master"
// GitHub 文件路径（没有文件新创建，已有文件覆盖更新，路径为空 "" 不更新）
const __quanxPath = "eval_script/qx_script_my.txt"
const __surgePath = "eval_script/sg_script_my.sgmodule"
// GitHub 更新日志
const __quanxCommit = "update"
const __surgeCommit = "update"

const __emojiDone = ""
const __emojiFail = "🙃"
const __emojiSuccess = "😀"
const __emojiTasks = "🕐"
const __emojiUpdateSuccess = "🟢"
const __emojiUpdateFail = "🟠 "
const __emojiGitHub = "🔵"
const __showLine = 15

const __log = false
const __debug = false
const __developmentMode = false
const __concurrencyLimit = 5

const __tool = new ____Tool()
const __base64 = new ____Base64()

if (__tool.isTask) {
    const ____getConf = (() => {
        return new Promise((resolve) => {
            const remoteConf = ____removeAnnotation(____extractConf(__conf, "Remote"))
            const localConf = ____removeAnnotation(____extractConf(__conf, "Local"))
            const hostnameConf = ____parseHostname(____removeAnnotation(____extractConf(__conf, "Hostname")))
            if (remoteConf.length > 0) {
                console.log("Start updating conf...")
                if (__debug) __tool.notify("", "", `Start updating ${remoteConf.length} confs...`)
                ____concurrentQueueLimit(remoteConf, __concurrencyLimit, (url) => {
                    return ____downloadFile(url)
                })
                    .then(results => {
                        console.log("Stop updating conf.")
                        let contents = []
                        let hostnames = []
                        results.forEach(data => {
                            const parseRemoteResult = ____parseRemoteConf(data.body)
                            if (data.body) {
                                contents = contents.concat(parseRemoteResult.contents)
                                hostnames = hostnames.concat(parseRemoteResult.hostnames)
                            }
                        });
                        contents = localConf.concat(contents)
                        hostnames = hostnameConf.concat(hostnames)
                        resolve({ contents, hostnames, results })
                    })
            } else {
                resolve({ contents: localConf, hostnames: hostnameConf, results: [] })
            }
        })
    })
    const begin = new Date()
    const storeObj = {}
    ____getConf()
        //check
        .then((conf) => {
            return new Promise((resolve, reject) => {
                if (conf.contents.length > 0) {
                    storeObj["confResults"] = conf.results
                    storeObj["confHostnames"] = conf.hostnames
                    if (__log) console.log(conf.contents)
                    resolve(conf.contents)
                } else {
                    let message = ""
                    conf.results.forEach(data => {
                        message += message.length > 0 ? "\n" + data.message : data.message
                    });
                    reject(message.length > 0 ? message : `Unavailable configuration! Please check!`)
                }
            })
        })
        //parse
        .then((contents) => {
            return new Promise((resolve, reject) => {
                const parseResult = ____parseConf(contents)
                if (parseResult.confMap) {
                    storeObj["confMap"] = parseResult.confMap
                    storeObj["quanxConfContents"] = parseResult.quanxConfContents
                    storeObj["surgeConfContents"] = parseResult.surgeConfContents
                    if (__log) console.log(parseResult.confMap)
                    if (__log) console.log("quanx\n" + parseResult.quanxConfContents.join("\n"));
                    if (__log) console.log("surge\n" + parseResult.surgeConfContents.join("\n"));
                    resolve(parseResult.confMap)
                } else {
                    reject(`Configuration information error: ${parseResult.error}`)
                }
            })
        })
        //download
        .then((confMap) => {
            const scriptUrls = Object.keys(confMap)
            __tool.notify("", "", `Start updating ${scriptUrls.length} scripts...`)
            console.log("Start updating script...")
            return ____concurrentQueueLimit(scriptUrls, __concurrencyLimit, (url) => {
                const urlRegex = /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/
                return new Promise((resolve) => {
                    if (urlRegex.test(url)) {
                        ____downloadFile(url).then((data) => {
                            if (data.code == 200) {
                                __tool.write(data.body, data.url)
                            }
                            resolve(data)
                        })
                    } else {
                        __tool.write(url, url)
                        resolve({ body: url, url, message: `${__emojiUpdateSuccess}${url} function set successfully` })
                    }
                })
            })
        })
        //write map
        .then((scriptResults) => {
            console.log("Stop updating script.")
            storeObj["scriptResults"] = scriptResults
            return __tool.write(JSON.stringify(storeObj.confMap), "ScriptConfObjKey")
        })
        //update github
        .then(() => {
            if (__isUpdateGithub) {
                const quanxHostname = `${storeObj.confHostnames.length > 0 ? `hostname = ${Array.from(new Set(storeObj.confHostnames)).join(",")}` : ""}`
                const surgeHostname = `${storeObj.confHostnames.length > 0 ? `hostname = %INSERT% ${Array.from(new Set(storeObj.confHostnames)).join(",")}` : ""}`
                const quanxUpdateContent = `${quanxHostname}\n\n${Array.from(new Set(storeObj.quanxConfContents)).join("\n\n")}`
                const surgeUpdateContent = `#!name=eval_script.js module\n\n[MITM]\n${surgeHostname}\n\n[Script]\n${Array.from(new Set(storeObj.surgeConfContents)).join("\n\n")}`
                const args = [{ path: __quanxPath, content: quanxUpdateContent, commit: __quanxCommit }, { path: __surgePath, content: surgeUpdateContent, commit: __surgeCommit }]
                console.log("Start updating github...")
                const update = async () => {
                    let results = []
                    for (let i = 0, len = args.length; i < len; i++) {
                        const arg = args[i]
                        if (arg.path.length > 0) {
                            const result = await ____updateGitHub(arg.path, arg.content, arg.commit)
                            results.push(result)
                        }
                    }
                    console.log("Stop updating github.")
                    return results
                }
                return update()
            } else {
                return null
            }
        })
        //notify
        .then((githubResults) => {
            const github = (() => {
                let message = ""
                if (githubResults && githubResults.length > 0) {
                    githubResults.forEach((result, index) => {
                        if (index == 0) message = result.message
                        message += message.length > 0 ? "\n" + __emojiGitHub + result.url : __emojiGitHub + result.url
                    });
                }
                return message
            })()
            const confResults = storeObj.confResults
            const scriptResults = storeObj.scriptResults
            const resultInfo = (() => {
                let message = ""
                let success = 0
                let fail = 0
                confResults.concat(scriptResults).forEach(data => {
                    if (data.message.match("success")) success++
                    if (data.message.match("fail")) fail++
                    message += message.length > 0 ? "\n" + data.message : data.message
                });
                return { message, count: { success, fail } }
            })()
            const messages = resultInfo.message.split("\n")
            const detail = `${messages.slice(0, __showLine).join("\n")}${messages.length > 20 ? `\n${__emojiUpdateSuccess}......` : ""}`
            const summary = `${__emojiSuccess}success: ${resultInfo.count.success}  ${__emojiFail}fail: ${resultInfo.count.fail}   ${__emojiTasks}tasks: ${____timeDiff(begin, new Date())}s`
            const nowDate = `${new Date().Format("yyyy-MM-dd HH:mm:ss")} last updated`
            const lastDate = __tool.read("ScriptLastUpdateDateKey")
            const date = `${__emojiTasks}${lastDate ? lastDate : nowDate}`
            console.log(`\n${summary}\n${resultInfo.message}${github.length > 0 ? `\n${github}` : ""}\n${date}`)
            __tool.notify(`${__emojiDone}Update Done`, summary, `${detail}${github.length > 0 ? `\n${github}` : ""}\n${date}`)
            __tool.write(nowDate, "ScriptLastUpdateDateKey")
            __tool.done({})
        })
        .catch((error) => {
            console.log(error)
            __tool.notify("[eval_script.js]", "", error)
            __tool.done({})
        })
}

if (!__tool.isTask) {
    const __url = $request.url
    const __confObj = (() => {
        if (__developmentMode) {
            return ____parseDevelopmentModeConf(__conf)
        } else {
            return JSON.parse(__tool.read("ScriptConfObjKey"))
        }
    })()
    const __script = (() => {
        let script = null
        const keys = Object.keys(__confObj)
        for (let i = 0, len = keys.length; i < len; i++) {
            if (script) break
            const key = keys[i]
            const value = __confObj[key]
            for (let j = 0, len = value.length; j < len; j++) {
                const match = value[j]
                const regular = new RegExp(match.regular)
                if (__debug) {
                    try {
                        if (regular.test(__url)) {
                            const type = match.type
                            if (type && type.length > 0) {
                                if (__tool.scriptType == type) {
                                    script = { url: key, match, content: __developmentMode ? key : __tool.read(key) }
                                    break
                                }
                            } else {
                                script = { url: key, match, content: __developmentMode ? key : __tool.read(key) }
                                break
                            }
                        }
                    } catch (error) {
                        if (__debug) __tool.notify("[eval_script.js]", "", `Error regular : ${match.regular}\nRequest: ${__url}`)
                        throw error
                    }
                } else {
                    if (regular.test(__url)) {
                        const type = match.type
                        if (type && type.length > 0) {
                            if (__tool.scriptType == type) {
                                script = { url: key, match, content: __developmentMode ? key : __tool.read(key) }
                                break
                            }
                        } else {
                            script = { url: key, match, content: __developmentMode ? key : __tool.read(key) }
                            break
                        }
                    }
                }
            }
        }
        return script
    })()
    if (__script) {
        if (__script.content) {
            const type = __script.match.type
            if (type && type.length > 0) {
                if (__tool.scriptType == type) {
                    if (__debug) {
                        try {
                            eval(__script.content)
                            if (__debug) __tool.notify("[eval_script.js]", `${__tool.method} ${__tool.scriptType}==${type}`, `Execute script: ${__script.url}\nRegular: ${__script.match.regular}\nRequest: ${__url}`)
                        } catch (error) {
                            if (__debug) __tool.notify("[eval_script.js]", `${__tool.method} ${__tool.scriptType}`, `Script execute error: ${error}\nScript: ${__script.url}\nRegular: ${__script.match}\nRequest: ${__url}\nContent: ${__script.content}`)
                            throw error
                        }
                    } else {
                        eval(__script.content)
                    }
                } else {
                    __tool.done({})
                    if (__debug) __tool.notify("[eval_script.js]", `${__tool.method} ${__tool.scriptType}!=${type}`, `Script types do not match! Don't execute script.\nScript: ${__script.url}\nRegular: ${__script.match.regular}\nRequest: ${__url}`)
                }
            } else {
                if (__debug) {
                    try {
                        eval(__script.content)
                        if (__debug) __tool.notify("[eval_script.js]", `${__tool.method} ${__tool.scriptType} ${"request&&response"}`, `Execute script: ${__script.url}\nRegular: ${__script.match.regular}\nRequest: ${__url}`)
                    } catch (error) {
                        if (__debug) __tool.notify("[eval_script.js]", `${__tool.method} ${__tool.scriptType}`, `Script execute error: ${error}\nScript: ${__script.url}\nRegular: ${__script.match.regular}\nRequest: ${__url}\nContent: ${__script.content}`)
                        throw error
                    }
                } else {
                    eval(__script.content)
                }
            }
        } else {
            __tool.done({})
            if (__log) console.log(`script not found: ${__script.url}\nregular: ${__script.match.regular}\nrequest: ${__url}`)
        }
    } else {
        __tool.done({})
        if (__log) console.log(`script not matched: ${__url}`)
    }
}

async function ____updateGitHub(path, content, message) {
    const url = `https://api.github.com/repos/${__owner}/${__repo}/contents/${path}`
    const options = {
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8", "User-Agent": "eval_script.js" }
    }
    if (__token.length > 0) {
        options.headers["Authorization"] = `Token ${__token}`
    } else {
        options.headers["Authorization"] = `Basic ${__base64.encode(`${__username}:${__password}`)}`
    }
    const getContent = () => {
        return new Promise(function (resolve, reject) {
            if (__branch.length > 0) options.url += `?ref=${__branch}`
            options["method"] = "GET"
            __tool.get(options, (error, response, body) => {
                if (!error) {
                    if (__log) console.log(`getContent: ${response.status}\n${body}`)
                    body = JSON.parse(body)
                    if (response.status == 200) {
                        resolve(body.sha)
                    } else if (response.status == 404) {
                        resolve(null)
                    } else {
                        reject("GitHub update failed: " + body.message)
                    }
                } else {
                    reject("GitHub update failed: " + error)
                }
            })
        })
    }
    const updateContent = (sha) => {
        return new Promise(function (resolve, reject) {
            const body = {
                message: message,
                content: __base64.encode(content)
            }
            if (__branch) body["branch"] = __branch
            if (sha) body["sha"] = sha
            options.url = url
            options["body"] = JSON.stringify(body)
            options["method"] = "PUT"
            __tool.put(options, (error, response, body) => {
                if (!error) {
                    if (__log) console.log(`updateContent: ${response.status}\n${body}`)
                    body = JSON.parse(body)
                    if (response.status == 200) {
                        resolve({ url: body.content.download_url, message: `${__emojiGitHub}GitHub updated successfully${sha != body.content.sha ? " (file changes)" : ""}` })
                    } else if (response.status == 201) {
                        resolve({ url: body.content.download_url, message: `${__emojiGitHub}GitHub file created successfully` })
                    } else {
                        reject("GitHub update failed: " + body.message)
                    }
                } else {
                    reject("GitHub update failed: " + error)
                }
            })
        })
    }
    const sha = await getContent()
    const result = await updateContent(sha)
    return result
}

function ____parseDevelopmentModeConf(conf) {
    const localConf = ____removeAnnotation(____extractConf(__conf, "eval_local"))
    const result = ____parseConf(localConf)
    return result.obj
}

function ____timeDiff(begin, end) {
    return Math.ceil((end.getTime() - begin.getTime()) / 1000)
}

function ____concurrentQueueLimit(list, limit, asyncHandle) {
    let results = []
    const recursion = (arr) => {
        return asyncHandle(arr.shift())
            .then((data) => {
                results.push(data)
                if (arr.length !== 0) return recursion(arr)
                else return 'finish'
            })
    };
    const listCopy = [].concat(list)
    let asyncList = []
    if (list.length < limit)
        limit = list.length
    while (limit--) {
        asyncList.push(recursion(listCopy))
    }
    return new Promise((resolve) => {
        Promise.all(asyncList).then(() => resolve(results))
    });
}

function ____downloadFile(url) {
    return new Promise((resolve) => {
        __tool.get(url, (error, response, body) => {
            const filename = url.match(/.*\/(.*?)$/)[1]
            if (!error) {
                const code = response.statusCode
                if (code == 200) {
                    console.log(`updated successfully: ${url}`)
                    resolve({ url, code, body, message: `${__emojiUpdateSuccess}${filename} updated successfully` })
                } else {
                    console.log(`update failed ${response.statusCode}: ${url}`)
                    resolve({ url, code, body, message: `${__emojiUpdateFail}${filename} update failed` })
                }
            } else {
                console.log(`updated faile ${error}`)
                resolve({ url, code: null, body: null, message: `${__emojiUpdateFail}${filename} update failed` })
            }
        })
    })
}

function ____parseHostname(hostnames) {
    if (hostnames.length > 0 && hostnames[0].length > 0) {
        hostnames = hostnames[0].replace(/\s/g, "").split(",")
    }
    return hostnames
}

function ____extractConf(conf, type) {
    const rex = new RegExp("\\[" + type + "\\](.|\\n)*?(?=\\n($|\\[))", "g")
    let result = rex.exec(conf)
    if (result) {
        result = result[0].split("\n")
        result.shift()
    } else {
        result = []
    }
    return result
}

function ____parseRemoteConf(conf) {
    const lines = conf.split("\n")
    let newLines = []
    let hostnames = []
    for (let i = 0, len = lines.length; i < len; i++) {
        const eval = /^(.+)\s+eval\s+(.+)$/
        const surge = /^http\s*-\s*(request|response)\s+(\S+)\s+(.+)$/
        const newSurge = /^\S+.js\s+=\s(.+)$/
        const quanx = /^(\S+)\s+url\s+script\s*-\s*(\S+)\s*-\s*(?:header|body)\s+(\S+)$/
        let line = lines[i].trim()
        if (line.length > 0) {
            if (/^#{4}/.test(line)) {
                line = line.replace(/^#*/, "")
                newLines.push(line)
            } else if (/^(?!;|#|\/\/).*/.test(line)) {
                if (eval.test(line) || surge.test(line) || newSurge.test(line)) {
                    newLines.push(line)
                }
                if (quanx.test(line)) {
                    const path = line.match(quanx)[3].trim()
                    if (/^https?:\/\/.+/.test(path)) {
                        newLines.push(line)
                    }
                }
                if (/^hostname\s*=\s*.+/.test(line)) {
                    hostnames = line.replace(/\s/g, "").replace(/hostname=/, "").split(",")
                }
            }
        }
    }
    return { contents: newLines, hostnames }
}

function ____parseConf(lines) {
    let confMap = {}
    let quanxConfContents = []
    let surgeConfContents = []
    for (let i = 0, len = lines.length; i < len; i++) {
        let line = lines[i].trim()
        if (line.length > 0 && line.substring(0, 2) != "//" && line.substring(0, 1) != "#") {
            const eval = /^(.+)\s+eval\s+(.+)$/
            const surge = /^http\s*-\s*(request|response)\s+(\S+)\s+(.+)$/
            const newSurge = /^\S+.js\s+=\s(.+)$/
            const quanx = /^(\S+)\s+url\s+script\s*-\s*(\S+)\s+(\S+\.js)$/
            if (surge.test(line)) {
                const result = line.match(surge)
                // content
                const requiresBody = ____surgeArg(result[3].trim()).requiresBody
                // surgeConfContents.splice(i, 0, `${line.replace(____surgeArg(result[3].trim()).scriptPath, "eval_script.js")}`);
                surgeConfContents.push(`eval_script.js = type=http-${result[1].trim()},${requiresBody ? `requires-body=${requiresBody},` : ""}pattern=${result[2].trim()},script-path=eval_script.js`)
                quanxConfContents.push(`${result[2].trim()} url script-${result[1].trim()}-${requiresBody == "1" ? "body" : "header"} eval_script.js`)
                // eval
                line = `${result[1].trim()} ${result[2].trim()} eval ${____surgeArg(result[3].trim()).scriptPath}`
            }
            else if (quanx.test(line)) {
                const result = line.match(quanx)
                const type = result[2].split("-")
                // content
                let requires = 0
                if (type[0].trim() == "response") {
                    requires = 1
                } else {
                    if (type[1].trim() == "body") {
                        requires = 1
                    }
                }
                // surgeConfContents.splice(i, 0, `http-${type[0].trim()} ${result[1].trim()} ${requires == 0 ? "" : `requires-body=${requires},`}script-path=eval_script.js`)
                surgeConfContents.push(`eval_script.js = type=http-${type[0].trim()},${requires == 0 ? "" : `requires-body=${requires},`}pattern=${result[1].trim()},script-path=eval_script.js`)
                quanxConfContents.push(`${line.replace(result[3].trim(), "eval_script.js")}`)
                // eval
                line = `${type[0].trim()} ${result[1].trim()} eval ${result[3].trim()}`
            }
            else if (newSurge.test(line)) {
                //content
                const result = line.match(newSurge)
                const surgeArg = ____surgeArg(result[1].trim())
                surgeConfContents.splice(i, 0, `${surgeArg.type} ${surgeArg.pattern} ${surgeArg.requiresBody ? `requires-body=${surgeArg.requiresBody},` : ""}script-path=eval_script.js`)
                surgeConfContents.push(`eval_script.js = ${result[1].replace(surgeArg.scriptPath, "eval_script.js")}`)
                quanxConfContents.push(`${surgeArg.pattern} url script-${surgeArg.type.replace("http-", "")}-${(surgeArg.requiresBody && surgeArg.requiresBody == "1") ? "body" : "header"} eval_script.js`)
                // eval
                line = `${surgeArg.type.replace("http-", "")} ${surgeArg.pattern} eval ${surgeArg.scriptPath}`
            }
            if (eval.test(line)) {
                const value = line.match(eval)
                const remote = value[2].trim()
                const match = ____parseMatch(value[1].trim())
                if (remote.length > 0 && match.length > 0) {
                    if (confMap.hasOwnProperty(remote)) {
                        confMap[remote] = confMap[remote].concat(match)
                    } else {
                        confMap[remote] = match
                    }
                } else {
                    return { confMap: null, quanxConfContents, surgeConfContents, error: line }
                }
            } else {
                return { confMap: null, quanxConfContents, surgeConfContents, error: line }
            }
        }
    }
    return { confMap, quanxConfContents, surgeConfContents, error: null }
}

function ____parseMatch(match) {
    let matchs = []
    const typeRegex = /(request|response)\s+\S+/g
    const typeItems = match.match(typeRegex)
    if (typeItems && typeItems.length > 0) {
        match = match.replace(typeRegex, "")
    }
    const normalItems = match.match(/\S+/g)
    const items = (typeItems ? typeItems : []).concat(normalItems ? normalItems : [])
    for (let i = 0, len = items.length; i < len; i++) {
        let item = items[i]
        item = item.match(/\S+/g)
        if (item.length > 1) {
            matchs.push({ type: item[0], regular: item[1] })
        } else {
            matchs.push({ type: "", regular: item[0] })
        }
    }
    return matchs
}

function ____surgeArg(arg) {
    let surgeArg = {}
    const args = arg.split(",")
    for (let i = 0, len = args.length; i < len; i++) {
        const item = args[i].trim()
        const path = /^script-path\s*=\s*(\S+)$/
        const requires = /^requires-body\s*=\s*(\S+)$/
        const pattern = /^pattern\s*=\s*(\S+)$/
        const type = /^type\s*=\s*(\S+)$/
        if (path.test(item)) {
            surgeArg["scriptPath"] = item.match(path)[1]
        }
        if (requires.test(item)) {
            surgeArg["requiresBody"] = item.match(requires)[1]
        }
        if (pattern.test(item)) {
            surgeArg["pattern"] = item.match(pattern)[1]
        }
        if (type.test(item)) {
            surgeArg["type"] = item.match(type)[1]
        }
    }
    return surgeArg
}

function ____removeAnnotation(lines) {
    if (lines.length > 0) {
        let i = lines.length;
        while (i--) {
            const line = lines[i].replace(/^\s*/, "")
            if (line.length == 0 || line.substring(0, 2) == "//" || line.substring(0, 1) == "#") {
                lines.splice(i, 1)
            }
        }
    }
    return lines
}

function ____Tool() {
    _node = (() => {
        if (typeof require == "function") {
            const request = require('request')
            return ({ request })
        } else {
            return (null)
        }
    })()
    _isSurge = typeof $httpClient != "undefined"
    _isQuanX = typeof $task != "undefined"
    _isTask = typeof $request == "undefined"
    _isResponse = typeof $response != "undefined"
    _isRequestBody = typeof $request != "undefined" && typeof $request.body != "undefined"
    this.isSurge = _isSurge
    this.isQuanX = _isQuanX
    this.isTask = _isTask
    this.isResponse = _isResponse
    this.isRequestBody = _isRequestBody
    this.method = (() => {
        if (!_isTask && (_isSurge || _isQuanX)) {
            return $request.method
        }
    })()
    this.scriptType = (() => {
        if (_isResponse) {
            return "response"
        } else {
            return "request"
        }
    })()
    this.done = (obj) => {
        if (_isQuanX) $done(obj)
        if (_isSurge) $done(obj)
        if (_node) console.log("script done.");
    }
    this.notify = (title, subtitle, message) => {
        if (_isQuanX) $notify(title, subtitle, message)
        if (_isSurge) $notification.post(title, subtitle, message)
        if (_node) console.log(JSON.stringify({ title, subtitle, message }));
    }
    this.write = (value, key) => {
        if (_isQuanX) return $prefs.setValueForKey(value, key)
        if (_isSurge) return $persistentStore.write(value, key)
        if (_node) console.log(`write success: ${key}`);
    }
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isSurge) return $persistentStore.read(key)
        if (_node) console.log(`read success: ${key}`);
    }
    this.get = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.get(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    this.put = (options, callback) => {
        if (_isQuanX) $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        if (_isSurge) $httpClient.put(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    this.post = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.post(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request.post(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    _status = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
}

function ____Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
