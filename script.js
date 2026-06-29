const posts = [
  {
    id: "blog-01-mimimaomao",
    title: "米米茂茂",
    date: "2026.06.30",
    category: "随笔",
    excerpt: "米米茂茂",
    image: "assets/Blogs/01/296819472add45cbb8212447627c9633.jpg",
    images: [
      "assets/Blogs/01/296819472add45cbb8212447627c9633.jpg",
      "assets/Blogs/01/59f50d6d54958be9bda362a6d0777ace.jpg",
      "assets/Blogs/01/71007cf75f1e4dd4a45eb53728211150.jpg",
      "assets/Blogs/01/767f8cc59bb8363da38cc3c5e621187d.jpg",
      "assets/Blogs/01/a52abdf0a996c43fe6a3619a322bdf1c.jpg",
      "assets/Blogs/01/a7973809c9789ee2babe1773a38bd8e1.jpg",
    ],
    body: ["米米茂茂"],
  },
  {
    id: "nianduzongjie",
    title: "2025年度总结",
    date: "2025.12.31",
    category: "总结",
        excerpt: "2025年，于我而言大概也是充满了意义的一年",
    image: "assets/hero/desk-window.png",
    body: [
      
            "为人一世，本就是一场苦修。过去的20年里，我堪堪成长为了一个及格的人，然而却仍有很多不足。2025年，于我而言大概也是充满了意义的一年。这一年里，我的野心出现又消失，心气高涨又落回，如今到了年底，是平静的，或许无论结果如何，我都会欣然接受，平静面对了。我算计又算计，筹谋又筹谋，失败又失败，后悔又后悔，但好消息是，我也获得了成长和经验吧。我相比去年的我，或许增加了一些思考的能力，但丧失了一些勇气。",
            "我所羡慕的那些人生，因为起点不同，或许穷尽一生我也到达不了别人的起点，或许修心才是这场苦修的真谛。如今我不敢点进朋友圈，因为看见其他人鲜活的样子，那种羡慕的心情会让我不敢看下去，连忙退出，那种状态让我联想到丧家之犬。如今的痛苦麻木或许是为了未来的鲜活，但我现在的生活贫瘠，灵魂也同样贫瘠麻木，我需要滋养它，让自己找回生活的乐趣。",
            "但是话又说回来，痛苦便痛苦吧，反正也是痛苦着过来的，有什么可怕的，这场修行或许是为了偿还些什么，但无论如何，既然活着，那就接受这场游戏这场挑战，顺其自然的同时又不要接受命运的安排，大胆去挑战，走出舒适区。",
            "2026年，从表面上来看，希望你多获取一些知识，你不会的东西一定要积极探索积极学习。从内里来看，希望你多阅读一些经典，提升一下思维的高度和深度，希望你达到你的目标，希望你更加游刃有余地进入社会，希望你更能抓住人的本质，希望你在这场黑暗森林的博弈中初步找到一些门路，希望你的精力充沛，希望你的心气回归，希望你能够调整好自己的状态得到最好的结果。",
            "你要合理分配你的精力，你的精力很宝贵，要好好用在最有用的事上。你要学会运营贵人的资源，运营关系，帮助你自己。",
            "年底和年初，或许是很特殊的一天，但同样也是很平常的一天。你的人生是由无数个这样的一天组成的。所以接下来的每一天，都请加油吧。不要害怕，不管结果怎样，加油往前走吧。"
        
    ],
  },
  {
    id: "book-margins",
    title: "随笔一则",
    date: "2025.11.27",
    category: "随笔",
      excerpt: "纵然有成有败，但是不畏手畏脚",
    image: "assets/covers/book-echo.png",
    body: [
      "他们比我强在哪？是无畏。那种拼搏与无畏，是一个关键。少年心气，坦坦荡荡，纵然有成有败，但是不畏手畏脚，因此得到很多，其中多少是失败的我不知道，但我知道的是成功的人一定比我探索得多。",

    ],
  },
];

const shelfItems = [
  {
    id: "film-sherlock-s1",
    type: "影视",
    title: "神探夏洛克 第一季",
    year: "2010",
    score: "9.5",
    image: "assets/covers/影视/f7ebafbe2032d048d1889ee8330f856a.jpg",
    meta: ["BBC", "英剧 / 推理", "冷峻 / 高智感"],
    body: [
      "节奏像一组被压缩过的演算：信息密度很高，但真正迷人的不是炫技，而是人物之间那种不肯说透的依赖。",
      "伦敦被拍成一块冷色电路板，情绪在暗处跑线。它很锋利，也很会把孤独写成一种精密仪器。",
    ],
  },
  {
    id: "film-hannibal",
    type: "影视",
    title: "汉尼拔",
    year: "2013",
    score: "9.0",
    image: "assets/covers/影视/汉尼拔.jpg",
    meta: ["NBC", "心理 / 犯罪", "美学过载"],
    body: [
      "它最危险的地方不是血腥，而是把暴力拍得过分有秩序。每一帧都像冷藏柜里的花，漂亮、干净，也让人不舒服。",
      "Will 和 Hannibal 的关系像一场长期调试失败的系统：彼此读懂，彼此污染，最后谁也无法回到初始状态。",
    ],
  },
  {
    id: "film-xmen-first-class",
    type: "影视",
    title: "X-Men：第一战",
    year: "2011",
    score: "8.5",
    image: "assets/covers/影视/X-Men 第一战.jpg",
    meta: ["Matthew Vaughn", "超级英雄 / 前传", "Charles & Erik"],
    body: [
      "比起宏大的能力展示，我更喜欢它把分歧写得很早：理想主义和创伤经验从一开始就站在不同坐标上。",
      "年轻的 Charles 和 Erik 有一种危险的明亮感，像两条短暂同频的曲线，已经能看见之后必然分叉。",
    ],
  },
  {
    id: "film-xmen-days-of-future-past",
    type: "影视",
    title: "X-Men：逆转未来",
    year: "2014",
    score: "9.0",
    image: "assets/covers/影视/X-Men 逆转未来.jpg",
    meta: ["Bryan Singer", "时间线 / 变种人", "重写与告别"],
    body: [
      "它把时间旅行拍成一次情绪回滚：不是为了炫耀设定，而是为了给那些已经走坏的关系一个重新选择的接口。",
      "最动人的仍然是“改变未来”背后的疲惫感。重启并不等于抹掉痛苦，只是承认还有一点点可修复的余地。",
    ],
  },
  {
    id: "album-huichundan-time",
    type: "音乐",
    title: "大把时间璀璨",
    year: "回春丹",
    score: null,
    image: "assets/covers/专辑/回春丹-大把时间璀璨.jpg",
    meta: ["回春丹", "专辑", "摇滚 / 明亮噪点"],
    body: [
      "它有一种很直接的热度，不复杂，但很会把人从低电量状态里拽出来。吉他和人声都带着一点粗糙的光。",
      "适合在很累的傍晚听，不负责治愈，只负责把空气打开一点。",
    ],
  },
  {
    id: "album-hetu-qingjintianxia",
    type: "音乐",
    title: "倾尽天下",
    year: "河图",
    score: null,
    image: "assets/covers/专辑/河图-倾尽天下.jpg",
    meta: ["河图", "国风 / 古风", "叙事 / 盛放"],
    body: [
      "旋律带着很强的叙事感，像旧纸上压着的章回。它不冷淡，但有一种属于早期中文互联网的认真和浓度。",
      "再听会有时间回声，不只是歌曲本身，也包括曾经把歌词一行行读完的那种心情。",
    ],
  },
  {
    id: "album-sufjan-seven-swans",
    type: "音乐",
    title: "Seven Swans",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- Seven Swan.jpg",
    meta: ["Sufjan Stevens", "Folk / Indie", "木质 / 信仰感"],
    body: [
      "声音很轻，但不是脆弱；更像一间木屋里的烛光，被风推着晃，却没有熄灭。",
      "它适合独处时听。那些近乎耳语的段落，会让人把注意力从外面的世界收回来。",
    ],
  },
  {
    id: "album-sufjan-illinoise",
    type: "音乐",
    title: "Illinoise",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- Illinoise.jpg",
    meta: ["Sufjan Stevens", "Baroque pop", "庞大 / 精密"],
    body: [
      "信息量巨大，却不显得臃肿。它像一张展开的地图，城市、历史、传说和私人情绪被细密地缝在一起。",
      "我喜欢它的野心，也喜欢它偶尔突然安静下来的瞬间。宏大叙事里仍然有一个人在呼吸。",
    ],
  },
  {
    id: "album-sufjan-carrie-lowell",
    type: "音乐",
    title: "Carrie & Lowell",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- Carrie and Lowell.jpg",
    meta: ["Sufjan Stevens", "Folk / Grief", "低声 / 透明"],
    body: [
      "这张太安静了，安静到像在听一个人把伤口翻译成空气。没有夸张的爆发，只有持续下沉的真实。",
      "它让悲伤变得非常具体：房间、道路、名字、回忆。每个细节都很轻，但合起来很重。",
    ],
  },
  {
    id: "album-sufjan-carrie-lowell-anniversary",
    type: "音乐",
    title: "Carrie & Lowell 十周年重制版",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- Carrie and Lowell 十周年重制版.jpg",
    meta: ["Sufjan Stevens", "Anniversary edition", "回看 / 余温"],
    body: [
      "重制版像是隔了很久之后再次打开同一个抽屉。灰尘被擦掉了一点，但里面的东西还是旧的，仍然疼。",
      "比起新鲜感，它更像一次回访：确认某些歌没有被时间消解，只是换了一种方式留在那里。",
    ],
  },
  {
    id: "album-sufjan-age-of-adz",
    type: "音乐",
    title: "The Age of Adz（奥兹时代）",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- 奥兹时代.jpg",
    meta: ["Sufjan Stevens", "Electronic / Art pop", "失控 / 电流"],
    body: [
      "它不像一张被磨平的专辑，更像一个过热的系统现场崩溃。电流、噪声和情绪同时溢出。",
      "我喜欢这种不稳定。它不总是好听，但很诚实，像把整套线路板摊开给人看。",
    ],
  },
  {
    id: "album-sufjan-javelin",
    type: "音乐",
    title: "Javelin",
    year: "Sufjan Stevens",
    score: null,
    image: "assets/covers/专辑/Sufjan Stevens- Javelin.jpg",
    meta: ["Sufjan Stevens", "Indie folk", "温柔 / 回声"],
    body: [
      "它比想象中明亮，但明亮下面仍然有很深的暗流。旋律像折纸，漂亮的边缘里藏着折痕。",
      "听完会觉得复杂的情绪也可以被整理，只是不会被完全解决。",
    ],
  },
];

const travelSpots = [
  {
    id: "neimenggu-huhehaote",
    name: "呼和浩特",
    province: "内蒙古自治区",
    time: "2023.06.11 - 2023.06.12",
    dateKey: "20230611",
    tags: ["内蒙", "呼和浩特", "10 photos"],
    images: [
      "assets/travel/内蒙-呼和浩特/IMG_20230611_185512.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_091213.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_091404.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_092710.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_131045.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_133422.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_133456.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_153544.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_171403.jpg",
      "assets/travel/内蒙-呼和浩特/IMG_20230612_201831.jpg",
    ],
    diaryTitle: "呼和浩特 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2023.06.11 - 2023.06.12，共 10 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "heilongjiang-manzhouli",
    name: "满洲里",
    province: "黑龙江省",
    time: "2023.06.13",
    dateKey: "20230613",
    tags: ["黑龙江", "满洲里", "12 photos"],
    images: [
      "assets/travel/黑龙江-满洲里/IMG_20230613_093709.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_110611.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_111617.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_114949.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_183138.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_183911.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_185206.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_185319.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_185526.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_191128.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_191347.jpg",
      "assets/travel/黑龙江-满洲里/IMG_20230613_192856.jpg",
    ],
    diaryTitle: "满洲里 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2023.06.13，共 12 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "heilongjiang-aershan",
    name: "阿尔山",
    province: "黑龙江省",
    time: "2023.06.14 - 2023.06.15",
    dateKey: "20230614",
    tags: ["黑龙江", "阿尔山", "10 photos"],
    images: [
      "assets/travel/黑龙江-阿尔山/IMG_20230614_161922.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_095953.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_101850.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_123514.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_124016.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_141656.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_155512.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_164307_1.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_182026.jpg",
      "assets/travel/黑龙江-阿尔山/IMG_20230615_210542.jpg",
    ],
    diaryTitle: "阿尔山 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2023.06.14 - 2023.06.15，共 10 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "liaoning-changshandao",
    name: "长山岛",
    province: "辽宁省",
    time: "2023.07.09 - 2023.07.10",
    dateKey: "20230709",
    tags: ["辽宁", "长山岛", "4 photos"],
    images: [
      "assets/travel/辽宁-长山岛/IMG_20230709_153138.jpg",
      "assets/travel/辽宁-长山岛/IMG_20230709_161424.jpg",
      "assets/travel/辽宁-长山岛/IMG_20230709_195034.jpg",
      "assets/travel/辽宁-长山岛/IMG_20230710_195322.jpg",
    ],
    diaryTitle: "长山岛 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2023.07.09 - 2023.07.10，共 4 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "liaoning-dalian",
    name: "大连",
    province: "辽宁省",
    time: "2024.01.11",
    dateKey: "20240111",
    tags: ["辽宁", "大连", "2 photos"],
    images: [
      "assets/travel/辽宁-大连/IMG_20240111_115843.jpg",
      "assets/travel/辽宁-大连/IMG_20240111_121226.jpg",
    ],
    diaryTitle: "大连 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.11，共 2 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "jiangsu-nanjing",
    name: "南京",
    province: "江苏省",
    time: "2024.01.12 - 2024.01.13",
    dateKey: "20240112",
    tags: ["江苏", "南京", "11 photos"],
    images: [
      "assets/travel/江苏-南京/IMG_20240112_112610.jpg",
      "assets/travel/江苏-南京/IMG_20240112_123432.jpg",
      "assets/travel/江苏-南京/IMG_20240112_160718.jpg",
      "assets/travel/江苏-南京/IMG_20240112_162453.jpg",
      "assets/travel/江苏-南京/IMG_20240112_162820.jpg",
      "assets/travel/江苏-南京/IMG_20240112_165207.jpg",
      "assets/travel/江苏-南京/IMG_20240112_174939.jpg",
      "assets/travel/江苏-南京/IMG_20240112_184216.jpg",
      "assets/travel/江苏-南京/IMG_20240112_190655.jpg",
      "assets/travel/江苏-南京/IMG_20240112_191551.jpg",
      "assets/travel/江苏-南京/IMG_20240113_070630.jpg",
    ],
    diaryTitle: "南京 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.12 - 2024.01.13，共 11 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "anhui-huangshan",
    name: "黄山",
    province: "安徽省",
    time: "2024.01.13",
    dateKey: "20240113",
    tags: ["安徽", "黄山", "2 photos"],
    images: [
      "assets/travel/安徽-黄山/IMG_20240113_134730.jpg",
      "assets/travel/安徽-黄山/IMG_20240113_170407.jpg",
    ],
    diaryTitle: "黄山 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.13，共 2 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "jiangxi-jingdezhen",
    name: "景德镇",
    province: "江西省",
    time: "2024.01.13 - 2024.01.14",
    dateKey: "20240113",
    tags: ["江西", "景德镇", "6 photos"],
    images: [
      "assets/travel/江西-景德镇/IMG_20240113_185644.jpg",
      "assets/travel/江西-景德镇/IMG_20240114_102111.jpg",
      "assets/travel/江西-景德镇/IMG_20240114_103539.jpg",
      "assets/travel/江西-景德镇/IMG_20240114_105225.jpg",
      "assets/travel/江西-景德镇/IMG_20240114_121549.jpg",
      "assets/travel/江西-景德镇/IMG_20240114_141425.jpg",
    ],
    diaryTitle: "景德镇 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.13 - 2024.01.14，共 6 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "jiangxi-nanchang",
    name: "南昌",
    province: "江西省",
    time: "2024.01.15",
    dateKey: "20240115",
    tags: ["江西", "南昌", "6 photos"],
    images: [
      "assets/travel/江西-南昌/IMG_20240115_111635.jpg",
      "assets/travel/江西-南昌/IMG_20240115_111718.jpg",
      "assets/travel/江西-南昌/IMG_20240115_123906.jpg",
      "assets/travel/江西-南昌/IMG_20240115_141537.jpg",
      "assets/travel/江西-南昌/IMG_20240115_143244.jpg",
      "assets/travel/江西-南昌/IMG_20240115_143330.jpg",
    ],
    diaryTitle: "南昌 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.15，共 6 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "shandong-jinan",
    name: "济南",
    province: "山东省",
    time: "2024.01.16",
    dateKey: "20240116",
    tags: ["山东", "济南", "6 photos"],
    images: [
      "assets/travel/山东-济南/IMG_20240116_075506.jpg",
      "assets/travel/山东-济南/IMG_20240116_075718.jpg",
      "assets/travel/山东-济南/IMG_20240116_075930.jpg",
      "assets/travel/山东-济南/IMG_20240116_081224.jpg",
      "assets/travel/山东-济南/IMG_20240116_082813.jpg",
      "assets/travel/山东-济南/IMG_20240116_083007.jpg",
    ],
    diaryTitle: "济南 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.01.16，共 6 张；之后可以继续把这段替换成当时的旅行日记。",
  },
  {
    id: "jilin-meihekou",
    name: "梅河口",
    province: "吉林省",
    time: "2024.08.28",
    dateKey: "20240828",
    tags: ["吉林", "梅河口", "4 photos"],
    images: [
      "assets/travel/吉林-梅河口/IMG_20240828_180243.jpg",
      "assets/travel/吉林-梅河口/IMG_20240828_180338.jpg",
      "assets/travel/吉林-梅河口/IMG_20240828_180354.jpg",
      "assets/travel/吉林-梅河口/IMG_20240828_180718.jpg",
    ],
    diaryTitle: "梅河口 / photo log",
    diary: "这里先按照片建立旅行相册。拍摄日期：2024.08.28，共 4 张；之后可以继续把这段替换成当时的旅行日记。",
  },
];

const state = {
  postFilter: "全部",
  shelfType: "全部",
  shelfOpen: false,
  shelfExpanded: false,
  activeSpot: "neimenggu-huhehaote",
  bgmIndex: 0,
  bgmPlaying: false,
  bgmSeeking: false,
};

function hasScore(item) {
  return item.score !== null && item.score !== undefined && item.score !== "" && Number.isFinite(Number(item.score));
}

const bgmTracks = [
  {
    title: "Death with Dignity",
    src: "assets/music/Sufjan Stevens - Death with Dignity.mp3",
  },
  {
    title: "Mystery of Love",
    src: "assets/music/Sufjan Stevens - Mystery of Love.mp3",
  },
  {
    title: "Visions of Gideon",
    src: "assets/music/Sufjan Stevens - Visions of Gideon.mp3",
  },
  {
    title: "Fourth of July",
    src: "assets/music/Fourth of July-Sufjan Stevens.mp3",
  },
  {
    title: "Eugene",
    src: "assets/music/Eugene-Sufjan Stevens.mp3",
  },
  {
    title: "The Only Thing",
    src: "assets/music/The Only Thing-Sufjan Stevens.mp3",
  },
];

const postFiltersEl = document.querySelector("[data-post-filters]");
const postListEl = document.querySelector("[data-post-list]");
const archiveEl = document.querySelector("[data-archive]");
const categoryListEl = document.querySelector("[data-category-list]");
const profileStatsEl = document.querySelector("[data-profile-stats]");
const recentShelfEl = document.querySelector("[data-recent-shelf]");
const shelfTabsEl = document.querySelector("[data-shelf-tabs]");
const shelfPanelEl = document.querySelector("[data-shelf-panel]");
const shelfGridEl = document.querySelector("[data-shelf-grid]");
const shelfCountEl = document.querySelector("[data-shelf-count]");
const shelfToggleEl = document.querySelector("[data-shelf-toggle]");
const shelfCloseEl = document.querySelector("[data-shelf-close]");
const chinaMapEl = document.querySelector("[data-china-map]");
const travelCountEl = document.querySelector("[data-travel-count]");
const travelReaderEl = document.querySelector("[data-travel-reader]");
const modal = document.querySelector("[data-modal]");
const modalMedia = document.querySelector("[data-modal-media]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalCopy = document.querySelector("[data-modal-copy]");
const bgmAudioEl = document.querySelector("[data-bgm-audio]");
const bgmToggleEl = document.querySelector("[data-bgm-toggle]");
const bgmPrevEl = document.querySelector("[data-bgm-prev]");
const bgmNextEl = document.querySelector("[data-bgm-next]");
const bgmProgressEl = document.querySelector("[data-bgm-progress]");
const bgmCurrentEl = document.querySelector("[data-bgm-current]");
const bgmDurationEl = document.querySelector("[data-bgm-duration]");
const bgmTitleEl = document.querySelector("[data-bgm-title]");

let lastFocused = null;

const travelByProvince = travelSpots.reduce((map, spot) => {
  const provinceSpots = map.get(spot.province) || [];
  provinceSpots.push(spot);
  map.set(spot.province, provinceSpots);
  return map;
}, new Map());

function loadBgmTrack(index = state.bgmIndex) {
  const track = bgmTracks[index];
  if (!track) return;
  state.bgmIndex = index;
  state.bgmSeeking = false;
  bgmAudioEl.src = track.src;
  bgmAudioEl.load();
  bgmTitleEl.textContent = track.title;
  renderBgmProgress();
}

function formatBgmTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function renderBgmProgress() {
  const duration = Number.isFinite(bgmAudioEl.duration) ? bgmAudioEl.duration : 0;
  const current = Number.isFinite(bgmAudioEl.currentTime) ? bgmAudioEl.currentTime : 0;

  bgmProgressEl.max = duration || 100;
  if (!state.bgmSeeking) {
    bgmProgressEl.value = current;
  }
  bgmCurrentEl.textContent = formatBgmTime(state.bgmSeeking ? Number(bgmProgressEl.value) : current);
  bgmDurationEl.textContent = formatBgmTime(duration);
}

function renderBgmState() {
  const track = bgmTracks[state.bgmIndex];
  bgmToggleEl.textContent = state.bgmPlaying ? "BGM ON" : "BGM OFF";
  bgmToggleEl.setAttribute("aria-pressed", String(state.bgmPlaying));
  bgmTitleEl.textContent = track?.title || "background loop";
  renderBgmProgress();
}

async function playBgm() {
  if (!bgmAudioEl.src) {
    loadBgmTrack();
  }

  try {
    await bgmAudioEl.play();
    state.bgmPlaying = true;
  } catch (error) {
    state.bgmPlaying = false;
    bgmTitleEl.textContent = "click BGM to start";
  }
  renderBgmState();
}

function pauseBgm() {
  bgmAudioEl.pause();
  state.bgmPlaying = false;
  renderBgmState();
}

async function nextBgm({ autoplay = state.bgmPlaying } = {}) {
  loadBgmTrack((state.bgmIndex + 1) % bgmTracks.length);
  if (autoplay) {
    await playBgm();
    return;
  }
  renderBgmState();
}

async function previousBgm({ autoplay = state.bgmPlaying } = {}) {
  loadBgmTrack((state.bgmIndex - 1 + bgmTracks.length) % bgmTracks.length);
  if (autoplay) {
    await playBgm();
    return;
  }
  renderBgmState();
}

function commitBgmSeek() {
  state.bgmSeeking = false;
  const duration = Number.isFinite(bgmAudioEl.duration) ? bgmAudioEl.duration : 0;
  if (duration <= 0) {
    renderBgmProgress();
    return;
  }
  bgmAudioEl.currentTime = Math.min(Number(bgmProgressEl.value) || 0, duration);
  renderBgmProgress();
}

function renderPostFilters() {
  const filters = ["全部", ...new Set(posts.map((post) => post.category))];
  postFiltersEl.innerHTML = filters
    .map(
      (filter) => `
        <button type="button" data-filter="${filter}" aria-pressed="${filter === state.postFilter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderPosts() {
  const visiblePosts =
    state.postFilter === "全部"
      ? posts
      : posts.filter((post) => post.category === state.postFilter);

  postListEl.innerHTML = visiblePosts
    .map(
      (post) => `
        <button class="post-card" type="button" data-post-id="${post.id}">
          <span class="moment-avatar">
            <img src="assets/covers/cmbyn_peach.jpg" alt="" loading="lazy" />
          </span>
          <span class="moment-body">
            <span class="moment-head">
              <span>
                <strong>Plover</strong>
                <em>${post.date} / ${post.category}</em>
              </span>
              <span class="post-action">READ</span>
            </span>
            <h3>${post.title}</h3>
            <p class="moment-copy">${post.excerpt}</p>
            ${
              post.images?.length
                ? `<span class="moment-gallery">
                    ${post.images
                      .map(
                        (image, index) =>
                          `<img src="${image}" alt="${post.title}配图 ${index + 1}" data-post-image-index="${index}" loading="lazy" />`
                      )
                      .join("")}
                  </span>`
                : ""
            }
            <span class="moment-meta">
              <span class="post-tag">${post.category}</span>
              <span>${post.images?.length ? `${post.images.length} photos` : `${post.body.length} paragraphs`}</span>
            </span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderArchive() {
  const rows = posts.reduce((acc, post) => {
    const key = post.date.slice(0, 7);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  archiveEl.innerHTML = Object.entries(rows)
    .map(
      ([month, count]) => `
        <div class="archive-row">
          <span>${month}</span>
          <strong>${count}</strong>
        </div>
      `
    )
    .join("");
}

function renderCategoryList() {
  const rows = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  categoryListEl.innerHTML = Object.entries(rows)
    .map(
      ([category, count]) => `
        <button class="category-row" type="button" data-filter="${category}">
          <span>${category}</span>
          <strong>${count}</strong>
        </button>
      `
    )
    .join("");
}

function renderProfileStats() {
  profileStatsEl.innerHTML = `
    <span><strong>${posts.length}</strong>POSTS</span>
    <span><strong>${shelfItems.filter(hasScore).length}</strong>RATINGS</span>
    <span><strong>${travelSpots.length}</strong>PLACES</span>
  `;
}

function renderRecentShelf() {
  const recent = shelfItems.filter(hasScore).sort((a, b) => Number(b.score) - Number(a.score)).slice(0, 3);
  recentShelfEl.innerHTML = recent
    .map(
      (item) => `
        <button class="side-link" type="button" data-shelf-id="${item.id}">
          <span>${item.title}</span>
          <strong>${item.score}</strong>
        </button>
      `
    )
    .join("");
}

function renderShelfTabs() {
  const tabs = ["全部", "影视", "音乐"];
  shelfTabsEl.innerHTML = tabs
    .map(
      (tab) => `
        <button type="button" data-shelf-type="${tab}" aria-pressed="${tab === state.shelfType}">
          ${tab}
        </button>
      `
    )
    .join("");
}

function renderShelf() {
  const foldLimit = 6;
  const items =
    state.shelfType === "全部"
      ? shelfItems
      : shelfItems.filter((item) => item.type === state.shelfType);
  const shouldFold = items.length > foldLimit;

  if (!state.shelfOpen) {
    shelfPanelEl.hidden = true;
    shelfToggleEl.hidden = false;
    shelfCloseEl.hidden = true;
    shelfToggleEl.textContent = `展开影音书籍（${shelfItems.length} 件）`;
    shelfToggleEl.setAttribute("aria-expanded", "false");
    shelfToggleEl.classList.add("is-primary");
    return;
  }

  shelfPanelEl.hidden = false;
  shelfCloseEl.hidden = false;
  shelfToggleEl.classList.remove("is-primary");
  const visibleItems = state.shelfExpanded || !shouldFold ? items : items.slice(0, foldLimit);

  shelfCountEl.textContent =
    shouldFold && !state.shelfExpanded
      ? `展示 ${visibleItems.length}/${items.length} 件 / media_index`
      : `${items.length} 件收藏 / media_index`;
  shelfGridEl.innerHTML = visibleItems
    .map(
      (item) => `
        <button class="cover-card${item.id.startsWith("album-") ? " is-album" : ""}" type="button" data-shelf-id="${item.id}">
          <span class="cover-frame">
            <img src="${item.image}" alt="${item.title}封面" />
            ${hasScore(item) ? `<span class="cover-score">${item.score}</span>` : ""}
          </span>
          <h3>${item.title}</h3>
          <p>${item.type} / ${item.meta[2]}</p>
        </button>
      `
    )
    .join("");

  shelfToggleEl.hidden = !shouldFold;
  shelfToggleEl.textContent = state.shelfExpanded ? "收起书影音" : `展开全部 ${items.length} 件`;
  shelfToggleEl.setAttribute("aria-expanded", String(state.shelfExpanded));
}

function renderChinaMap() {
  const paths = window.CHINA_PROVINCE_PATHS || [];
  travelCountEl.textContent = `${travelByProvince.size} / 34`;
  chinaMapEl.innerHTML = paths
    .map((province) => {
      const provinceSpots = travelByProvince.get(province.name) || [];
      const isVisited = provinceSpots.length > 0;
      const activeSpot = provinceSpots.find((spot) => spot.id === state.activeSpot);
      const label = provinceSpots.length > 1
        ? `${provinceSpots[0].name}等${provinceSpots.length}处`
        : provinceSpots[0]?.name;
      return `
        <path
          class="province${isVisited ? " is-visited" : ""}${activeSpot ? " is-active" : ""}"
          d="${province.d}"
          data-province="${province.name}"
          ${isVisited ? 'tabindex="0" role="button"' : ""}
          aria-label="${isVisited ? `${province.name}：${label}` : province.name}"
        >
          <title>${province.name}${isVisited ? ` / ${label}` : ""}</title>
        </path>
      `;
    })
    .join("");
  renderProvinceLabels();
}

function renderProvinceLabels() {
  chinaMapEl.querySelectorAll(".province-label").forEach((label) => label.remove());
  chinaMapEl.querySelectorAll(".province.is-visited").forEach((path) => {
    const province = path.dataset.province;
    const provinceSpots = travelByProvince.get(province) || [];
    const activeSpot = provinceSpots.find((spot) => spot.id === state.activeSpot);
    const spot = activeSpot || provinceSpots[0];
    if (!spot) return;
    const box = path.getBBox();
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("class", "province-label");
    label.setAttribute("x", box.x + box.width / 2);
    label.setAttribute("y", box.y + box.height / 2);
    label.textContent = provinceSpots.length > 1 ? `${spot.name}+${provinceSpots.length - 1}` : spot.name;
    chinaMapEl.appendChild(label);
  });
}

function setActiveSpotByProvince(province) {
  const provinceSpots = travelByProvince.get(province) || [];
  if (!provinceSpots.length) return;
  const currentSpot = provinceSpots.find((spot) => spot.id === state.activeSpot);
  state.activeSpot = (currentSpot || provinceSpots[0]).id;
  renderChinaMap();
  renderTravelReader();
}

function renderTravelReader() {
  const spot = travelSpots.find((item) => item.id === state.activeSpot) || travelSpots[0];
  const provinceSpots = travelByProvince.get(spot.province) || [spot];
  travelReaderEl.innerHTML = `
    <h3>${spot.name}</h3>
    <div class="travel-meta">
      <span>${spot.province}</span>
      <span>${spot.time}</span>
      ${spot.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    ${
      provinceSpots.length > 1
        ? `<div class="travel-place-switch" aria-label="${spot.province}相册切换">
            ${provinceSpots
              .map(
                (item) => `
                  <button type="button" data-spot-switch="${item.id}" aria-pressed="${item.id === spot.id}">
                    ${item.name}
                  </button>
                `
              )
              .join("")}
          </div>`
        : ""
    }
    <div class="travel-album">
      ${spot.images
        .map(
          (image, index) => `
            <button
              class="travel-photo-button"
              type="button"
              data-travel-image-index="${index}"
              aria-label="打开${spot.name}旅行照片 ${index + 1}的大图"
            >
              <img src="${image}" alt="${spot.name}旅行相册 ${index + 1}" loading="lazy" />
            </button>
          `
        )
        .join("")}
    </div>
    <p class="diary-title">${spot.diaryTitle}</p>
    <p>${spot.diary}</p>
  `;
}

function openModal({ kicker, title, meta, image, images = [], body, variant = "default" }) {
  lastFocused = document.activeElement;
  modal.classList.toggle("is-photo-viewer", variant === "photo");
  modalMedia.innerHTML = image ? `<img src="${image}" alt="${title}" />` : "";
  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalMeta.innerHTML = meta.map((item) => `<span>${item}</span>`).join("");
  modalCopy.innerHTML = `
    ${
      images.length
        ? `<div class="modal-gallery">
            ${images.map((item, index) => `<img src="${item}" alt="${title}配图 ${index + 1}" loading="lazy" />`).join("")}
          </div>`
        : ""
    }
    ${body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector("[data-close-modal]").focus();
}

function closeModal() {
  modal.hidden = true;
  modal.classList.remove("is-photo-viewer");
  document.body.style.overflow = "";
  if (lastFocused) {
    lastFocused.focus();
  }
}

function openPost(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;
  openModal({
    kicker: `POST / ${post.category}`,
    title: post.title,
    meta: [post.date, post.category],
    image: post.image,
    images: post.images || [],
    body: post.body,
  });
}

function openShelfItem(itemId) {
  const item = shelfItems.find((entry) => entry.id === itemId);
  if (!item) return;
  openModal({
    kicker: `${item.type}${hasScore(item) ? ` / score ${item.score}` : ""}`,
    title: item.title,
    meta: [item.year, ...item.meta],
    image: item.image,
    body: item.body,
  });
}

function openPostImage(postId, imageIndex) {
  const post = posts.find((item) => item.id === postId);
  const image = post?.images?.[imageIndex];
  if (!post || !image) return;
  openModal({
    kicker: `POST PHOTO / ${post.category}`,
    title: `${post.title} · ${imageIndex + 1}`,
    meta: [post.date, post.category],
    image,
    body: post.body,
    variant: "photo",
  });
}

function openTravelImage(imageIndex) {
  const spot = travelSpots.find((item) => item.id === state.activeSpot) || travelSpots[0];
  const image = spot.images[imageIndex];
  if (!image) return;
  openModal({
    kicker: `TRAVEL PHOTO / ${spot.province}`,
    title: `${spot.name} · ${imageIndex + 1}`,
    meta: [spot.time, ...spot.tags],
    image,
    body: [spot.diary],
    variant: "photo",
  });
}

postFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.postFilter = button.dataset.filter;
  renderPostFilters();
  renderPosts();
});

categoryListEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.postFilter = button.dataset.filter;
  renderPostFilters();
  renderPosts();
  document.querySelector("#notes").scrollIntoView({ behavior: "smooth", block: "start" });
});

postListEl.addEventListener("click", (event) => {
  const photo = event.target.closest("[data-post-image-index]");
  if (photo) {
    const card = photo.closest("[data-post-id]");
    if (!card) return;
    openPostImage(card.dataset.postId, Number(photo.dataset.postImageIndex));
    return;
  }

  const button = event.target.closest("[data-post-id]");
  if (!button) return;
  openPost(button.dataset.postId);
});

shelfTabsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shelf-type]");
  if (!button) return;
  state.shelfType = button.dataset.shelfType;
  state.shelfExpanded = false;
  renderShelfTabs();
  renderShelf();
});

shelfToggleEl.addEventListener("click", () => {
  if (!state.shelfOpen) {
    state.shelfOpen = true;
    state.shelfExpanded = false;
    renderShelf();
    return;
  }

  state.shelfExpanded = !state.shelfExpanded;
  renderShelf();
});

shelfCloseEl.addEventListener("click", () => {
  state.shelfOpen = false;
  state.shelfExpanded = false;
  renderShelf();
});

shelfGridEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shelf-id]");
  if (!button) return;
  openShelfItem(button.dataset.shelfId);
});

recentShelfEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shelf-id]");
  if (!button) return;
  openShelfItem(button.dataset.shelfId);
});

chinaMapEl.addEventListener("click", (event) => {
  const path = event.target.closest(".province.is-visited");
  if (!path) return;
  setActiveSpotByProvince(path.dataset.province);
});

chinaMapEl.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const path = event.target.closest(".province.is-visited");
  if (!path) return;
  event.preventDefault();
  setActiveSpotByProvince(path.dataset.province);
});

travelReaderEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-spot-switch]");
  if (button) {
    state.activeSpot = button.dataset.spotSwitch;
    renderChinaMap();
    renderTravelReader();
    return;
  }

  const photoButton = event.target.closest("[data-travel-image-index]");
  if (!photoButton) return;
  openTravelImage(Number(photoButton.dataset.travelImageIndex));
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

bgmToggleEl.addEventListener("click", () => {
  if (state.bgmPlaying) {
    pauseBgm();
    return;
  }
  playBgm();
});

bgmPrevEl.addEventListener("click", () => {
  previousBgm();
});

bgmNextEl.addEventListener("click", () => {
  nextBgm();
});

bgmProgressEl.addEventListener("input", () => {
  state.bgmSeeking = true;
  bgmCurrentEl.textContent = formatBgmTime(Number(bgmProgressEl.value));
});

bgmProgressEl.addEventListener("change", () => {
  commitBgmSeek();
});

bgmProgressEl.addEventListener("pointerdown", () => {
  state.bgmSeeking = true;
});

bgmProgressEl.addEventListener("pointerup", () => {
  commitBgmSeek();
});

bgmAudioEl.addEventListener("loadedmetadata", () => {
  renderBgmProgress();
});

bgmAudioEl.addEventListener("durationchange", () => {
  renderBgmProgress();
});

bgmAudioEl.addEventListener("timeupdate", () => {
  renderBgmProgress();
});

bgmAudioEl.addEventListener("ended", () => {
  nextBgm({ autoplay: true });
});

bgmAudioEl.addEventListener("error", () => {
  nextBgm({ autoplay: state.bgmPlaying });
});

renderPostFilters();
renderPosts();
renderArchive();
renderCategoryList();
renderProfileStats();
renderRecentShelf();
renderShelfTabs();
renderShelf();
renderChinaMap();
renderTravelReader();
loadBgmTrack();
renderBgmState();
