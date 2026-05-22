// ============================================================
// CATI 数据文件 — 题目 & 猫咪类型
// ============================================================

// ---------- 猫咪类型定义 ----------
// 10x10 色块图案: T=透明 M=主色 D=深色 L=浅色 E=眼睛 N=鼻子 I=内耳 S=条纹 W=白

const CAT_TYPES = {
  ILH: {
    code: 'ILH',
    name: '缅因猫',
    title: '外表威严，内心温柔的巨人',
    description:
      '你像缅因猫一样，虽然外表看起来有些高冷和威严，但内心其实温柔而忠诚。你不喜欢嘈杂的环境，更享受安静的时光。你不需要时刻被关注，自给自足对你来说轻而易举。但真正懂你的人知道——在那份冷静之下，藏着一颗柔软的心。',
    tags: ['沉静', '独立', '威严', '忠诚', '内心柔软'],
    match: '适合独处或安静的工作环境。推荐职业：作家、程序员、艺术家。',
    palette: { T:null, M:'#3A3A3A', D:'#1A1A1A', L:'#F0F0F0', E:'#C8D880', N:'#D4A0A0', I:'#E8C0C0' },
    grid: [
      '..DD..DD..',
      '.DDIIDDII.',
      'DMMM..MMMD',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMMMMMMMMM',
      'MMMNNNNMMM',
      '.MMLLLLMM.',
      '..LLLLLL..',
    ],
  },
  ILC: {
    code: 'ILC',
    name: '布偶猫',
    title: '安静温柔，把最好的爱留给懂你的人',
    description:
      '你像布偶猫一样，外表安静优雅，对陌生人保持距离。但一旦认定了一个人，就会毫无保留地卸下心防，变成最粘人的小可爱。你不喜欢热闹喧哗，但在亲近的人怀里安安静静地待着，就是最幸福的时刻。',
    tags: ['温柔', '慢热', '忠诚', '优雅', '深情'],
    match: '适合小而精的社交圈。你的交友哲学：少而深，宁缺毋滥。',
    palette: { T:null, M:'#D4C0B0', D:'#5A4030', L:'#F5EDE3', E:'#88CCF0', N:'#E0B0B0', I:'#F0D8D0' },
    grid: [
      '..MM..MM..',
      '.MMIIDDII.',
      'MMMMDDMMMM',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMMMDDMMMM',
      'MMMNNNNMMM',
      '.MMLLLLMM.',
      '..LLLLLL..',
    ],
  },
  IAH: {
    code: 'IAH',
    name: '狸花猫',
    title: '独立矫健，自由不羁的灵魂',
    description:
      '你像狸花猫一样，野性未驯、独立自主。你精力充沛，但不喜欢被人管束。你喜欢按自己的节奏行事，不依赖任何人。你也许不是最粘人的，但你的忠诚和能力让人无比信赖。你不是冷漠——只是你的表达方式是行动而非撒娇。',
    tags: ['独立', '矫健', '自由', '自律', '可靠'],
    match: '适合自主性高的工作或生活。推荐：自由职业者、户外工作者、研究员。',
    palette: { T:null, M:'#B8A080', D:'#5A4030', L:'#F0E8D0', E:'#C8D880', N:'#D8A898', I:'#E8D0C0', S:'#3A2818' },
    grid: [
      '..MM..MM..',
      '.MMIIMMII.',
      'MSMS..SMSM',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMSMMMMSMM',
      'MMMNNNNMMM',
      '.MMLLLLMM.',
      '..LLLLLL..',
    ],
  },
  IAC: {
    code: 'IAC',
    name: '暹罗猫',
    title: '聪明好奇，只对一个人话多的小话痨',
    description:
      '你像暹罗猫一样，聪明灵动，对世界充满好奇。你喜欢独自钻研各种新鲜事物，拥有一颗探索的心。虽然在外人面前话不多，但在亲近的人面前却是个小话痨——你会把所有有趣的发现都分享给那个特别的人。',
    tags: ['聪明', '好奇', '灵动', '忠诚', '善于表达'],
    match: '适合需要创造力和专注力的工作。推荐：设计师、工程师、学者。',
    palette: { T:null, M:'#E8DDD0', D:'#5A4030', L:'#F5F0E8', E:'#88CCF0', N:'#D8A8B0', I:'#F0D8D8' },
    grid: [
      '..DD..DD..',
      '.DDDDDDDD.',
      'DDDDDDDDDD',
      'DDE.LL.ELL',
      'DDD.LL.LLL',
      'DDDD..LLLL',
      'DDDDDDLLLL',
      'DDDNNNNLLL',
      '.DDLLLLLL.',
      '..LLLLLL..',
    ],
  },
  ELH: {
    code: 'ELH',
    name: '英短',
    title: '优雅从容，慵懒而迷人的社交家',
    description:
      '你像英国短毛猫一样，友善但不失优雅，合群但不失自我。你在社交中游刃有余，大家喜欢围着你转，但你从不过度讨好任何人。你慵懒从容，有一种不怒自威的魅力。所有人都想亲近你，但能不能摸到——全看你心情。',
    tags: ['优雅', '从容', '友善', '有主见', '有魅力'],
    match: '适合需要社交魅力的工作。推荐：公关、管理、自媒体。',
    palette: { T:null, M:'#8A9DB0', D:'#6A7D90', L:'#B8C8D4', E:'#F0C878', N:'#D8B0B0', I:'#D0C8D8' },
    grid: [
      '..MM..MM..',
      '.MMIIMMII.',
      'MMMM..MMMM',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMMMMMMMMM',
      'MMMNNNNMMM',
      '.MMMLLMMM.',
      '..MMMMMM..',
    ],
  },
  ELC: {
    code: 'ELC',
    name: '三花猫',
    title: '温柔亲人，招人喜欢的治愈担当',
    description:
      '你像三花猫一样，温柔可爱，自带亲和力。你喜欢和人待在一起，性格温顺又贴心。你的存在本身就是一种治愈——不急不躁，软软糯糯，让人忍不住想要靠近和宠爱。你用自己的方式温暖着身边的每一个人。',
    tags: ['温柔', '亲人', '可爱', '治愈', '温暖'],
    match: '适合需要同理心和温度的工作。推荐：教师、心理咨询师、护理。',
    palette: { T:null, M:'#FFF8F4', D:'#3A3A3A', L:'#F0B878', E:'#88C868', N:'#E8B0A0', I:'#F0D0C0' },
    grid: [
      '..DL..DL..',
      '.DDIILLII.',
      'DLDL..DDLL',
      'DLE.DD.EDL',
      'LDL.DD.LDL',
      'DLDL..LDDL',
      'DDLDLLDDLL',
      'LLLNNNNMMM',
      '.LLLMMMLL.',
      '..MMMMMM..',
    ],
  },
  EAH: {
    code: 'EAH',
    name: '美短',
    title: '精力充沛，天生的行动派领袖',
    description:
      '你像美国短毛猫一样，精力旺盛，聪明自信。你是朋友群里的主心骨，做事果断、条理清晰。你看起来酷酷的不太表露情感，但大家都习惯跟着你的节奏走。你不轻易示弱，但你的可靠和能力让所有人都心服口服。',
    tags: ['自信', '果断', '精力充沛', '领导力', '可靠'],
    match: '适合需要决策力和执行力工作。推荐：创业者、管理者、导演。',
    palette: { T:null, M:'#C8C0B0', D:'#5A5040', L:'#F0EDE5', E:'#88C868', N:'#D8A898', I:'#E0D8D0', S:'#3A3028' },
    grid: [
      '..MM..MM..',
      '.MMIIMMII.',
      'MSMS..SMSM',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMMMMMMMMM',
      'MMMNNNNMMM',
      '.MMMLLMMM.',
      '..MMMMMM..',
    ],
  },
  EAC: {
    code: 'EAC',
    name: '橘猫',
    title: '天生乐天派，走到哪里哪里就有阳光',
    description:
      '你像橘猫一样，热情开朗、没心没肺地快乐着。你喜欢和人在一起，喜欢拥抱、欢笑、分享。你的快乐是会传染的，有你在的地方永远不会冷场。你不在乎什么高冷人设——吃好喝好、开开心心，就是你的人生哲学。',
    tags: ['开朗', '热情', '乐观', '感染力', '享受生活'],
    match: '适合需要能量和氛围感的工作。推荐：销售、主持人、演员。',
    palette: { T:null, M:'#F0B878', D:'#D89850', L:'#FFF0D8', E:'#C8A850', N:'#E8A898', I:'#F8D0B8', S:'#C08040' },
    grid: [
      '..MM..MM..',
      '.MMIIMMII.',
      'MSMS..SMSM',
      'MME.MM.EMM',
      'MMM.MM.MMM',
      'MMMM..MMMM',
      'MMMMMMMMMM',
      'MMMNNNNMMM',
      '.MMMLLMMM.',
      '..LLLLLL..',
    ],
  },
};

// ---------- 题目定义 ----------
// dimension: 'I/E' | 'L/A' | 'H/C'
// 每个选项的 score: 1 表示倾向该维度的右端 (E/A/C)

const QUESTIONS = [
  {
    id: 1,
    dimension: 'I/E',
    text: '一个美好的周末，你更想怎么度过？',
    options: [
      { text: '一个人待在家里，享受安静的独处时光', score: 0 },
      { text: '和最好的朋友一对一深度聊天', score: 0 },
      { text: '约三五好友一起出去逛街或吃饭', score: 1 },
      { text: '参加热闹的聚会，认识一些新朋友', score: 1 },
    ],
  },
  {
    id: 2,
    dimension: 'L/A',
    text: '假期没有安排的时候，你通常会？',
    options: [
      { text: '睡到自然醒，在床上赖一整天', score: 0 },
      { text: '慢悠悠地起来，喝杯茶晒晒太阳就好', score: 0 },
      { text: '给自己安排一些有意思的活动', score: 1 },
      { text: '早早起来，把一天排得满满当当', score: 1 },
    ],
  },
  {
    id: 3,
    dimension: 'H/C',
    text: '朋友心情不好找你倾诉，你会怎么做？',
    options: [
      { text: '安静地听着就好了，不太会安慰人', score: 0 },
      { text: '理性地帮忙分析问题，给一些建议', score: 0 },
      { text: '温柔地安慰对方，默默陪在身边', score: 1 },
      { text: '感同身受，和对方一起难过一起想办法', score: 1 },
    ],
  },
  {
    id: 4,
    dimension: 'I/E',
    text: '到一个陌生的新环境里，你的表现是？',
    options: [
      { text: '先找个角落默默观察周围的一切', score: 0 },
      { text: '和自己看起来比较合得来的人慢慢接触', score: 0 },
      { text: '主动和别人打招呼，自然地融入聊天', score: 1 },
      { text: '很快成为人群中的活跃分子', score: 1 },
    ],
  },
  {
    id: 5,
    dimension: 'L/A',
    text: '面对一个新鲜有趣但需要花时间学习的事物，你的态度是？',
    options: [
      { text: '看看就好了，没有太大动力去学', score: 0 },
      { text: '有点兴趣，但不太想费太多力气', score: 0 },
      { text: '挺感兴趣的，打算抽时间好好研究一下', score: 1 },
      { text: '迫不及待想要马上开始，全力投入', score: 1 },
    ],
  },
  {
    id: 6,
    dimension: 'H/C',
    text: '别人夸你的时候，你的反应最接近哪一种？',
    options: [
      { text: '面无表情，假装没听到，但心里可能有点高兴', score: 0 },
      { text: '淡淡地说声谢谢，没什么特别的反应', score: 0 },
      { text: '开心地笑，然后也真诚地夸回去', score: 1 },
      { text: '超级开心，蹭过去想要被多夸几句', score: 1 },
    ],
  },
  {
    id: 7,
    dimension: 'I/E',
    text: '当你感到疲惫或心情低落时，你更倾向于？',
    options: [
      { text: '一个人待着，慢慢消化自己的情绪', score: 0 },
      { text: '做点自己喜欢的事，比如听音乐或看书', score: 0 },
      { text: '找朋友聊聊天，倾诉一下心里的烦恼', score: 1 },
      { text: '约朋友出去玩，用热闹的气氛赶走低落', score: 1 },
    ],
  },
  {
    id: 8,
    dimension: 'L/A',
    text: '下面哪句话最符合你日常的状态？',
    options: [
      { text: '能躺着绝不坐着，省力气最重要', score: 0 },
      { text: '不紧不慢，顺其自然就好', score: 0 },
      { text: '喜欢给自己安排各种事情，生活充实才有趣', score: 1 },
      { text: '根本闲不下来，总是在折腾新的事情', score: 1 },
    ],
  },
  {
    id: 9,
    dimension: 'H/C',
    text: '你和喜欢的人在一起时，通常会怎么表达爱意？',
    options: [
      { text: '不太会主动表达，爱都藏在心里', score: 0 },
      { text: '用实际的行动来表达，而不是嘴上说说', score: 0 },
      { text: '经常说一些温暖的话或做一些贴心的小事', score: 1 },
      { text: '时刻想黏着对方，亲亲抱抱说不停', score: 1 },
    ],
  },
  {
    id: 10,
    dimension: 'I/E',
    text: '如果可以选择梦想中的住所，你更想要？',
    options: [
      { text: '远离人群的山间小屋，享受宁静', score: 0 },
      { text: '安静社区里的小院子，偶尔有邻居往来', score: 0 },
      { text: '城市中心的公寓，出门就是繁华的街景', score: 1 },
      { text: '热闹社区的开放式大平层，朋友随时来串门', score: 1 },
    ],
  },
];
