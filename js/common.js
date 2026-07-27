/* ===== Vampire Crawlers Guide - Common JS ===== */
/* Dark mode / Language / Global Search / Burger / Back-to-top
   SVG Sprite / Progress Tracking / Filter Chips / PWA / Prefetch */

(function () {
  "use strict";

  /* ---------- SVG icons ---------- */
  var ICON_SEARCH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  var ICON_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var ICON_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  /* ---------- SVG sprite (centralised icon definitions) ---------- */
  var SVG_SPRITE = '<svg style="display:none" aria-hidden="true">'
    + '<symbol id="i-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></symbol>'
    + '<symbol id="i-gem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M12 22V9"/></symbol>'
    + '<symbol id="i-sword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6 3 3-6 6z"/></symbol>'
    + '<symbol id="i-skull" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3 1 5 2 6v3h12v-3c1-1 2-3 2-6a8 8 0 0 0-8-8z"/><path d="M9 11h.01M15 11h.01M9 15h6"/></symbol>'
    + '<symbol id="i-castle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V8l3-3v3l4-4 4 4V5l3 3v13M9 21v-4h6v4"/></symbol>'
    + '<symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></symbol>'
    + '<symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>'
    + '<symbol id="i-fire" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.14-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></symbol>'
    + '<symbol id="i-blood" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></symbol>'
    + '<symbol id="i-hammer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4l6 6-4 4-6-6z"/><path d="M10 8L4 14l2 2 6-6"/></symbol>'
    + '<symbol id="i-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></symbol>'
    + '<symbol id="i-blade" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l6-6M14 4l6 6-8 8H6v-6z"/></symbol>'
    + '<symbol id="i-wand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M17.8 6.2L19 5M3 21l9-9"/></symbol>'
    + '<symbol id="i-ghost" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8v12l3-3 3 3 2-2 2 2 3-3 3 3V10a8 8 0 0 0-8-8z"/></symbol>'
    + '<symbol id="i-chest" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13H3z"/><path d="M3 11h18M12 7v4M7 11v9M17 11v9"/></symbol>'
    + '<symbol id="i-shovel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22l6-6M8 16l-2-2 8-8 4 4-8 8z"/><path d="M14 6l4 4 4-4-4-4z"/></symbol>'
    + '<symbol id="i-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z"/></symbol>'
    + '</svg>';

  /* ---------- i18n dictionary (UI framework) ---------- */
  var I18N = {
    "nav.getting-started": { zh: "新手入门", en: "Beginner" },
    "nav.combat": { zh: "卡牌战斗", en: "Combat" },
    "nav.deckbuilding": { zh: "牌组构筑", en: "Deck Building" },
    "nav.dungeons": { zh: "地牢探索", en: "Dungeons" },
    "nav.items": { zh: "图鉴速查", en: "Codex" },
    "nav.bosses": { zh: "Boss攻略", en: "Bosses" },
    "nav.cta.start": { zh: "开始攻略", en: "Start Guide" },
    "nav.cta.home": { zh: "返回首页", en: "Home" },
    "brand": { zh: "吸血鬼爬行者攻略站", en: "Vampire Crawlers Guide" },
    "search.placeholder": { zh: "搜索攻略、卡牌、机制…", en: "Search guides, cards, mechanics…" },
    "search.empty": { zh: "没有找到相关内容", en: "No results found" },
    "search.hint": { zh: "输入关键词搜索全站攻略", en: "Type to search the whole site" },
    "search.history": { zh: "最近搜索", en: "Recent" },
    "search.clear": { zh: "清除", en: "Clear" },
    "foot.nav": { zh: "攻略导航", en: "Guides" },
    "foot.systems": { zh: "系统与图鉴", en: "Systems & Codex" },
    "foot.about": { zh: "关于", en: "About" },
    "foot.aboutus": { zh: "关于本站", en: "About" },
    "foot.feedback": { zh: "投稿反馈", en: "Feedback" },
    "foot.changelog": { zh: "更新日志", en: "Changelog" },
    "foot.branddesc": { zh: "《Vampire Crawlers》中文玩家攻略站，原创整理，持续更新。", en: "A player-made Vampire Crawlers guide site, original content, updated regularly." },
    "foot.copy": { zh: "© 2026 Vampire Crawlers 攻略站 · 中文攻略 · 仅供学习交流", en: "© 2026 Vampire Crawlers Guide · Fan-made · For learning only" },
    /* progress UI */
    "progress.collected": { zh: "已收集", en: "Collected" },
    "progress.notcollected": { zh: "未收集", en: "Not Collected" },
    "progress.defeated": { zh: "已击败", en: "Defeated" },
    "progress.notdefeated": { zh: "未挑战", en: "Not Fought" },
    "progress.completed": { zh: "已完成", en: "Completed" },
    "progress.notcompleted": { zh: "未完成", en: "Incomplete" },
    "progress.export": { zh: "导出进度", en: "Export Progress" },
    "progress.import": { zh: "导入进度", en: "Import Progress" },
    "progress.exported": { zh: "进度已复制到剪贴板！", en: "Progress copied to clipboard!" },
    "progress.reset": { zh: "重置全部进度", en: "Reset All Progress" },
    "progress.resetconfirm": { zh: "确定要清空全部进度数据吗？此操作不可撤销。", en: "Reset ALL progress data? This cannot be undone." },
    "progress.overview": { zh: "我的进度总览", en: "My Progress Overview" },
    /* filter chips */
    "filter.all": { zh: "全部", en: "All" },
    "filter.type": { zh: "类型", en: "Type" },
    "filter.rarity": { zh: "稀有度", en: "Rarity" },
    "filter.mana": { zh: "蓝法", en: "Mana" },
    /* combo calculator */
    "calc.title": { zh: "连击链计算器", en: "Combo Chain Calculator" },
    "calc.addCard": { zh: "添加卡牌", en: "Add Card" },
    "calc.clearChain": { zh: "清空连击", en: "Clear Chain" },
    "calc.turboturn": { zh: "涡轮回合", en: "Turboturn" },
    "calc.chainLength": { zh: "链长度", en: "Chain Length" },
    "calc.totalDamage": { zh: "总伤害", en: "Total Damage" },
    "calc.multiplier": { zh: "倍率", en: "Multiplier" },
    "calc.cascade": { zh: "连锁奖励", en: "Cascade Bonus" },
    "calc.selectCard": { zh: "选择卡牌", en: "Select Card" },
    "calc.none": { zh: "无", en: "None" },
    "calc.manaOrder": { zh: "蓝法升序", en: "Mana Order" },
    "calc.broken": { zh: "连击中断！", en: "Chain Broken!" },
    "calc.ok": { zh: "连击有效", en: "Chain Valid" },
    /* deck planner */
    "deck.title": { zh: "牌组构筑模拟器", en: "Deck Planner" },
    "deck.add": { zh: "加入牌组", en: "Add to Deck" },
    "deck.remove": { zh: "移除", en: "Remove" },
    "deck.clear": { zh: "清空牌组", en: "Clear Deck" },
    "deck.save": { zh: "保存牌组", en: "Save Deck" },
    "deck.saved": { zh: "牌组已保存！", en: "Deck saved!" },
    "deck.manaCurve": { zh: "蓝法曲线", en: "Mana Curve" },
    "deck.typeDist": { zh: "类型分布", en: "Type Distribution" },
    "deck.wildCount": { zh: "万能牌数", en: "Wild Count" },
    "deck.synergy": { zh: "联动分析", en: "Synergy Analysis" },
    "deck.empty": { zh: "牌组为空，从下方卡牌库选择卡牌加入", en: "Deck is empty. Add cards from the card pool below." }
  };

  /* ---------- Search index (with anchors + pinyin) ---------- */
  var SEARCH_INDEX = [
    { page:"首页",pageEn:"Home",url:"index.html",title:"Vampire Crawlers 攻略站",titleEn:"Vampire Crawlers Guide",tags:"Vampire Crawlers 吸血鬼 爬行者 攻略 首页 卡牌 地牢",tagsEn:"Vampire Crawlers guide home cards dungeon",py:"gongluezhuan shouye Vampire Crawlers" },
    { page:"新手入门",pageEn:"Beginner",url:"getting-started.html#characters",title:"可玩角色（20个）",titleEn:"Playable Characters (20)",tags:"角色 安东尼奥 詹纳罗 多马里奥 波 帕斯夸琳娜 普格纳拉 卡瓦洛 阿尔卡 兰巴 乔万娜",tagsEn:"characters antonio gennaro dommario poe pasqualina pugnala cavallo arca ramba giovanna",py:"juese andongniuo zhannaluo duomaliuo bo pasikualinna pugnala kawaluo a'erka lanba qiaowanna" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#relics",title:"遗物系统（13个）",titleEn:"Relic System (13)",tags:"遗物 煎饼之力 宝石锤子 指引之光 铁匠 暗黑魔典 过度击杀 地狱炸弹 随机大师 宝石匠",tagsEn:"relics pancake gem-hammer guiding-light blacksmith grimoire overkill bomba randomazzo jeweller",py:"yiwu jianbingzhili baoshichuizi zhiyuzhiguang tiejiang anheimodian guodujiisha diyuzhadan suijidashi baoshijiang" },
    { page:"新手入门",pageEn:"Beginner",url:"getting-started.html",title:"从零开始到通关地牢",titleEn:"From Zero to Dungeon Clear",tags:"新手 入门 教程 第一局 回合 卡牌 蓝法 顺序 连击 万能牌 涡轮",tagsEn:"beginner guide tutorial first run turn card mana order combo wild turboturn",py:"xinshou rumen jiaocheng diyiju huihe kapai lanfa shunxu lianji wannengpai wolun" },
    { page:"卡牌战斗",pageEn:"Combat",url:"combat.html#combo",title:"连击系统（Combo Chain）",titleEn:"Combo Chain System",tags:"连击 combo 蓝法 顺序 倍率 乘数 升序",tagsEn:"combo chain mana order multiplier ascending",py:"lianji combo lanfa shunxu beilv chengshu shengxu" },
    { page:"卡牌战斗",pageEn:"Combat",url:"combat.html#wilds",title:"万能牌（Wilds）",titleEn:"Wilds",tags:"万能牌 Wild 延长 连击 30张 任意蓝法",tagsEn:"wild extend combo 30 cards any mana",py:"wannengpai Wild yanchang lianji 30zhang renyilanfa" },
    { page:"卡牌战斗",pageEn:"Combat",url:"combat.html#turboturn",title:"涡轮回合（Turboturn）",titleEn:"Turboturn",tags:"涡轮 Turboturn 快速 雪球 节奏 连锁 召唤",tagsEn:"turboturn fast snowball pace cascade summon",py:"wolun Turboturn kuaisu xueqiu jiezou liansuo zhaohuan" },
    { page:"卡牌战斗",pageEn:"Combat",url:"combat.html#calculator",title:"连击链计算器",titleEn:"Combo Chain Calculator",tags:"计算器 连击 伤害 倍率 模拟",tagsEn:"calculator combo damage multiplier simulator",py:"jisuanqi lianji shanghai beilv moni" },
    { page:"卡牌战斗",pageEn:"Combat",url:"combat.html",title:"连击系统与Turboturn详解",titleEn:"Combo System & Turboturn Guide",tags:"战斗 连击 combo 蓝法 mana 顺序 Wild 万能牌 倍率 Turboturn 涡轮回合",tagsEn:"combat combo mana order wild multiplier turboturn",py:"zhandou lianji combo lanfa shunxu Wild wannengpai beilv Turboturn wolunhuihe" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#card-types",title:"卡牌类型与定位",titleEn:"Card Types & Roles",tags:"卡牌类型 攻击牌 增益牌 召唤牌 万能牌 功能牌 武器牌",tagsEn:"card type attack buff summon wild utility weapon",py:"kapailleixing gongjipai zengyipai zhaohuanpai wannengpai gongnengpai wuqipai" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#gems",title:"宝石强化系统",titleEn:"Gem Augment System",tags:"宝石 强化 增幅 卡牌 升级 力量 减费 连锁 进化",tagsEn:"gem augment upgrade card power cost cascade evolution",py:"baoshi qianghua zengfu kapai shengji liliang jianfei liansuo jinhua" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#evolutions",title:"武器进化",titleEn:"Weapon Evolutions",tags:"武器 进化 传说 装备 飞刀 鞭子 魔杖 斧头",tagsEn:"weapon evolution legendary equipment knife whip wand axe",py:"wuqi jinhua chuanshuo zhuangbei feidao bianzi mozhang futou" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#archetypes",title:"牌组流派",titleEn:"Deck Archetypes",tags:"流派 滚雪球 召唤流 进化流 混合流",tagsEn:"archetype snowball summoner evolver hybrid",py:"liupai gunxueqiu zhaohuanliu jinhualiu hunheliu" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html#planner",title:"牌组构筑模拟器",titleEn:"Deck Planner",tags:"牌组 模拟器 构筑 蓝法曲线 联动",tagsEn:"deck planner simulator mana curve synergy",py:"paizu moniqi gouzhu lanfaquxian liandong" },
    { page:"牌组构筑",pageEn:"Deck Building",url:"deckbuilding.html",title:"牌组搭配与强化路线",titleEn:"Deck Synergy & Upgrade Paths",tags:"牌组 构筑 搭配 卡牌类型 宝石 强化 武器进化 召唤",tagsEn:"deck building synergy card type gem augment weapon evolution summon",py:"paizu gouzhu dapei kapailleixing baoshi qianghua wuqijinhua zhaohuan" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html#dungeon-types",title:"地牢类型",titleEn:"Dungeon Types",tags:"地牢类型 疯狂森林 锦钿书库 小桥 乳品厂 加洛塔 大教堂",tagsEn:"dungeon type mad-forest inlaid-library tiny-bridge dairy-plant gallo-tower cappella-magna",py:"dilaoleixing fengkuangsenlin jindianshuku xiaoqiao ruchang jialuota dajiaotang" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html#floors",title:"楼层进阶机制",titleEn:"Floor Progression",tags:"楼层 铁锹 挖掘 下一层 进阶 Boss",tagsEn:"floor shovel dig next floor progression boss",py:"louceng tieshao wajue xiayiceng jinjie Boss" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html#treasures",title:"宝物与宝箱",titleEn:"Treasures & Chests",tags:"宝箱 宝物 木箱 铁箱 金箱 血箱 头撞",tagsEn:"chest treasure wooden iron golden blood headbutt",py:"baoxiang baowu muxiang tiexiang jinxiang xuexiang touzhuang" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html#walls",title:"功能墙壁系统",titleEn:"Functioning Walls",tags:"墙壁 功能 裂缝 暗道 交互 破坏",tagsEn:"wall functioning crack secret interactive break",py:"qiangbi gongneng liefeng andao jiaohu pohuai" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html#enemies",title:"敌人图鉴",titleEn:"Enemy Codex",tags:"敌人 图鉴 骷髅 蝙蝠 幽魂 石巨人 吸血鬼骑士 暗黑法师",tagsEn:"enemy codex skeleton bat wraith golem vampire-knight dark-mage",py:"diren tujian kulou bianfian youhun shijuren xixueguiqishi anheifashi" },
    { page:"地牢探索",pageEn:"Dungeons",url:"dungeons.html",title:"地牢类型与楼层机制",titleEn:"Dungeon Types & Floor Mechanics",tags:"地牢 楼层 宝箱 铁锹 挖掘 墙壁 宝藏 探索",tagsEn:"dungeon floor chest shovel dig wall treasure explore",py:"dilou louceng baoxiang tieshao wajue qiangbi baozang tansuo" },
    { page:"Boss攻略",pageEn:"Bosses",url:"bosses.html#crypt-warden",title:"地穴守护者",titleEn:"Crypt Warden",tags:"Boss1 地穴守护者 骷髅 召唤 群体攻击",tagsEn:"boss1 crypt-warden skeleton summon AoE",py:"Boss1 dixueshouhuzhe kulou zhaohuan quntigongji" },
    { page:"Boss攻略",pageEn:"Bosses",url:"bosses.html#blood-matriarch",title:"血族女族长",titleEn:"Blood Matriarch",tags:"Boss2 血族女族长 吸血 蝙蝠 暗影",tagsEn:"boss2 blood-matriarch lifesteal bat shadow",py:"Boss2 xuezunvzuzhang xixue bianfian anying" },
    { page:"Boss攻略",pageEn:"Bosses",url:"bosses.html#abyssal-titan",title:"深渊泰坦",titleEn:"Abyssal Titan",tags:"Boss3 深渊泰坦 巨型 地震 护甲",tagsEn:"boss3 abyssal-titan giant earthquake armor",py:"Boss3 shenyuantaitan juxing dizhen huojia" },
{ page:"Boss攻略",pageEn:"Bosses",url:"bosses.html#door-queen",title:"门扉女王",titleEn:"Door Queen",tags:"Boss4 门扉女王 超雄小怪 伏击 楼层",tagsEn:"boss4 door-queen aggressive-minions ambush floor",py:"Boss4 menfeinvhuang chaoxiongxiaoguai fuji louceng" },
    { page:"Boss攻略",pageEn:"Bosses",url:"bosses.html",title:"Boss战攻略与机制详解",titleEn:"Boss Fight Strategies",tags:"Boss 攻略 机制 弱点 阶段 掉落",tagsEn:"boss guide mechanics weakness phase drops",py:"Boss gonglue jizhi ruodian jieduan diaoluo" },
    { page:"图鉴速查",pageEn:"Codex",url:"items.html#cards",title:"卡牌图鉴",titleEn:"Card Codex",tags:"卡牌 图鉴 攻击牌 增益牌 召唤牌 万能牌 功能牌",tagsEn:"card codex attack buff summon wild utility",py:"kapai tujian gongjipai zengyipai zhaohuanpai wannengpai gongnengpai" },
    { page:"图鉴速查",pageEn:"Codex",url:"items.html#gems",title:"宝石图鉴",titleEn:"Gem Codex",tags:"宝石 图鉴 力量 减费 连锁 进化 万能 多重",tagsEn:"gem codex power cost cascade evolution wild multistrike",py:"baoshi tujian liliang jianfei liansuo jinhua wanneng duochong" },
    { page:"图鉴速查",pageEn:"Codex",url:"items.html#weapons",title:"武器图鉴",titleEn:"Weapon Codex",tags:"武器 图鉴 飞刀 鞭子 魔杖 斧头 进化",tagsEn:"weapon codex knife whip wand axe evolution",py:"wuqi tujian feidao bianzi mozhang futou jinhua" },
    { page:"图鉴速查",pageEn:"Codex",url:"items.html",title:"全卡牌图鉴与数据表",titleEn:"Card Codex & Data Tables",tags:"图鉴 卡牌 数据 宝石 武器 道具 速查表 筛选",tagsEn:"codex card data gem weapon item table filter",py:"tujian kapai shuju baoshi wuqi daoju suchabiao shaixuan" },
    { page:"更新日志",pageEn:"Changelog",url:"changelog.html",title:"站点更新历史",titleEn:"Site Update History",tags:"更新日志 changelog 版本 记录",tagsEn:"changelog version history",py:"gengxinrizhi changelog banben jilu" }
  ];

  /* ---------- Build data (cards, gems, weapons) ---------- */
  var BUILD_DATA = {
    cards: [
      { id:"quick-slash",  type:"attack",  mana:1, zh:"快斩",      en:"Quick Slash",     dmg:10,  rarity:1, tag:"攻击" },
      { id:"power-slash",  type:"attack",  mana:2, zh:"强力斩",    en:"Power Slash",     dmg:25,  rarity:2, tag:"攻击" },
      { id:"arcane-nova",  type:"attack",  mana:3, zh:"奥术新星",  en:"Arcane Nova",     dmg:30,  rarity:3, tag:"攻击", aoe:true },
      { id:"blood-lance",  type:"attack",  mana:4, zh:"血矛",      en:"Blood Lance",     dmg:80,  rarity:4, tag:"攻击", ignoreArmor:true },
      { id:"apocalypse",   type:"attack",  mana:5, zh:"末日审判",  en:"Apocalypse",      dmg:200, rarity:4, tag:"攻击" },
      { id:"power-buff",   type:"buff",    mana:2, zh:"力量增益",  en:"Power Buff",      dmg:0,   rarity:2, tag:"增益", mult:1.5 },
      { id:"elem-infuse",  type:"buff",    mana:3, zh:"元素灌注",  en:"Elemental Infusion", dmg:0, rarity:3, tag:"增益", mult:1.8 },
      { id:"blood-frenzy", type:"buff",    mana:4, zh:"血腥狂暴",  en:"Blood Frenzy",    dmg:0,   rarity:4, tag:"增益", mult:2.0 },
      { id:"summon-surv",  type:"summon",  mana:3, zh:"召唤幸存者",en:"Summon Survivor", dmg:15,  rarity:3, tag:"召唤" },
      { id:"summon-horde", type:"summon",  mana:5, zh:"召唤军团",  en:"Summon Horde",    dmg:45,  rarity:4, tag:"召唤" },
      { id:"wild-card",    type:"wild",    mana:0, zh:"万能牌",    en:"Wild Card",       dmg:0,   rarity:3, tag:"万能", isWild:true },
      { id:"quick-draw",   type:"utility", mana:1, zh:"快速抽牌",  en:"Quick Draw",      dmg:0,   rarity:2, tag:"功能", drawCards:2 },
      { id:"mana-surge",   type:"utility", mana:2, zh:"蓝法涌动",  en:"Mana Surge",      dmg:0,   rarity:3, tag:"功能", gainMana:3 },
      { id:"vamp-shield",  type:"utility", mana:3, zh:"吸血护盾",  en:"Vampiric Shield", dmg:0,   rarity:3, tag:"功能" },
      { id:"knife",        type:"weapon",  mana:2, zh:"飞刀",      en:"Knife",           dmg:15,  rarity:2, tag:"武器", evolution:"thousand-edge" },
      { id:"whip",         type:"weapon",  mana:3, zh:"鞭子",      en:"Whip",            dmg:20,  rarity:3, tag:"武器", evolution:"bloody-tear" },
      { id:"fire-wand",    type:"weapon",  mana:3, zh:"火杖",      en:"Fire Wand",        dmg:25,  rarity:3, tag:"武器", evolution:"holy-wand" },
      { id:"cross",        type:"weapon",  mana:4, zh:"十字架",    en:"Cross",            dmg:50,  rarity:4, tag:"武器", evolution:"unholy-vespers" },
      { id:"garlic",       type:"weapon",  mana:2, zh:"大蒜",      en:"Garlic",           dmg:15,  rarity:2, tag:"武器", evolution:"soul-eater" },
      { id:"lightning-ring",type:"weapon",  mana:4, zh:"闪电戒指",  en:"Lightning Ring",   dmg:45,  rarity:4, tag:"武器", evolution:"thunder-loop" },
      { id:"runetracer",   type:"weapon",  mana:3, zh:"符文追踪者",en:"Runetracer",       dmg:20,  rarity:3, tag:"武器", evolution:"no-future" },
      { id:"hollow-heart",  type:"buff",    mana:2, zh:"空虚之心",  en:"Hollow Heart",    dmg:0,   rarity:3, tag:"增益", mult:1.3, note:"成就解锁" },
      { id:"crown",         type:"buff",    mana:3, zh:"王冠",      en:"Crown",           dmg:0,   rarity:4, tag:"增益", mult:1.5, note:"成就解锁" },
      { id:"guiding-light", type:"utility", mana:1, zh:"指引之光",  en:"Guiding Light",   dmg:0,   rarity:2, tag:"功能", drawCards:1, note:"成就解锁" }
    ],
    gems: [
      { id:"none",           zh:"无",       en:"None",            effectZh:"—",                    effectEn:"—",                    tag:"无" },
      { id:"triple-damage",  zh:"三倍伤害宝石", en:"Triple Damage Gem", effectZh:"卡牌伤害 ×3",       effectEn:"Card damage ×3",        tag:"攻击" },
      { id:"free",           zh:"免费宝石", en:"Free Gem",        effectZh:"下一张牌免费打出",       effectEn:"Next card is free",     tag:"功能" },
      { id:"echo",           zh:"回声宝石", en:"Echo Gem",        effectZh:"重复上一个卡牌效果",     effectEn:"Repeat last card effect", tag:"召唤" },
      { id:"wild-gem",       zh:"万能宝石", en:"Wild Gem",        effectZh:"+1 万能牌抽率",          effectEn:"+1 Wild draw chance",   tag:"万能" },
      { id:"heal",           zh:"治疗宝石", en:"Heal Gem",        effectZh:"回复生命",               effectEn:"Restore HP",            tag:"功能" },
      { id:"drain",          zh:"吸血宝石", en:"Drain Gem",       effectZh:"伤害吸血",               effectEn:"Lifesteal",             tag:"攻击" },
      { id:"recall-gem",     zh:"回手宝石", en:"Recall Gem",      effectZh:"将牌收回手牌",             effectEn:"Return card to hand",   tag:"功能" },
      { id:"copy-gem",       zh:"复制宝石", en:"Copy Gem",        effectZh:"复制一张牌",               effectEn:"Copy a card",           tag:"功能" },
      { id:"mana-gem",       zh:"蓝法宝石", en:"Mana Gem",        effectZh:"恢复 2 点蓝法",             effectEn:"Restore 2 mana",        tag:"功能" },
      { id:"steal-gem",      zh:"偷取宝石", en:"Steal Gem",       effectZh:"偷取敌方一张牌",           effectEn:"Steal an enemy card",   tag:"功能" },
      { id:"retain-gem",     zh:"保留宝石", en:"Retain Gem",      effectZh:"回合结束保留手牌",         effectEn:"Keep hand at end of turn", tag:"功能" },
      { id:"refresh-gem",    zh:"刷新宝石", en:"Refresh Gem",     effectZh:"刷新手牌",               effectEn:"Refresh hand",          tag:"功能" }
    ]
  };

  /* ---------- State ---------- */
  var lang = localStorage.getItem("vc-lang") || "zh";
  var dark = localStorage.getItem("vc-dark") === "1";

  function t(key){ return I18N[key] ? (I18N[key][lang] || I18N[key].zh) : key; }

  /* ---------- Apply language ---------- */
  function applyLang(l){
    lang = l;
    localStorage.setItem("vc-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";

    /* 1) UI framework elements via data-i18n dictionary */
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(I18N[key] && I18N[key][l]){
        if(el.hasAttribute("data-i18n-ph")) el.setAttribute("placeholder", I18N[key][l]);
        else el.textContent = I18N[key][l];
      }
    });

    /* 2) Page content elements via data-en attribute */
    document.querySelectorAll("[data-en]").forEach(function(el){
      if(l === "en"){
        if(!el.hasAttribute("data-zh")) el.setAttribute("data-zh", el.innerHTML);
        el.innerHTML = el.getAttribute("data-en");
      } else {
        if(el.hasAttribute("data-zh")) el.innerHTML = el.getAttribute("data-zh");
      }
    });

    var langBtn = document.querySelector(".lang-btn");
    if(langBtn) langBtn.textContent = l === "zh" ? "English" : "中文";

    /* 3) Update aria-labels */
    var ariaMap = {
      ".search-btn": {zh:"搜索",en:"Search"},
      ".dark-btn": {zh:"暗色模式",en:"Toggle dark mode"},
      ".lang-btn": {zh:"语言",en:"Switch language"},
      "#burger": {zh:"菜单",en:"Menu"},
      "#toTop": {zh:"返回顶部",en:"Back to top"},
      ".search-close": {zh:"关闭",en:"Close"}
    };
    Object.keys(ariaMap).forEach(function(sel){
      var el = document.querySelector(sel);
      if(el) el.setAttribute("aria-label", ariaMap[sel][l]);
    });

    /* 4) Re-render search results if overlay is open */
    var ov = document.getElementById("searchOverlay");
    if(ov && ov.classList.contains("show")){
      var inp = ov.querySelector("input");
      renderSearch(inp ? inp.value : "");
    }

    /* 5) Re-apply progress tracking state (after innerHTML rewrite) */
    applyProgress();

    /* 6) Re-apply filter chips state */
    applyFilters();

    /* 7) Re-render combo calculator if present */
    if(window.VC_recalcCombo) window.VC_recalcCombo();

    /* 8) Re-render deck planner if present */
    if(window.VC_recalcDeck) window.VC_recalcDeck();
  }

  /* ---------- Apply dark ---------- */
  function applyDark(d){
    dark = d;
    localStorage.setItem("vc-dark", d ? "1" : "0");
    document.body.classList.toggle("dark", d);
    var db = document.querySelector(".dark-btn");
    if(db) db.innerHTML = d ? ICON_SUN : ICON_MOON;
  }

  /* ====== PROGRESS TRACKING SYSTEM ====== */
  var PROGRESS_KEY = "vc-progress";

  function getProgress(){
    try{ return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
    catch(e){ return {}; }
  }
  function saveProgress(p){
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }
  function toggleProgress(id){
    var p = getProgress();
    p[id] = !p[id];
    if(!p[id]) delete p[id];
    saveProgress(p);
    applyProgress();
    updateProgressBars();
  }
  function applyProgress(){
    var p = getProgress();
    document.querySelectorAll("[data-track]").forEach(function(el){
      if(!el.querySelector(".track-toggle")){
        var btn = document.createElement("button");
        btn.className = "track-toggle";
        btn.type = "button";
        btn.setAttribute("aria-label", "toggle tracking");
        btn.innerHTML = ICON_CHECK;
        el.appendChild(btn);
      }
      var id = el.getAttribute("data-track");
      var done = !!p[id];
      el.classList.toggle("collected", done);
      el.classList.toggle("defeated", done);
      var label = el.querySelector(".track-label");
      if(label){
        var type = el.getAttribute("data-track-type") || "collect";
        var key = type === "boss" ? (done ? "progress.defeated" : "progress.notdefeated")
                : type === "task" ? (done ? "progress.completed" : "progress.notcompleted")
                : (done ? "progress.collected" : "progress.notcollected");
        label.textContent = t(key);
        label.setAttribute("data-i18n", key);
      }
    });
  }
  function updateProgressBars(){
    var groups = {};
    document.querySelectorAll("[data-track]").forEach(function(el){
      var g = el.getAttribute("data-track-group") || "default";
      if(!groups[g]) groups[g] = { total:0, done:0 };
      groups[g].total++;
      if(el.classList.contains("collected") || el.classList.contains("defeated")) groups[g].done++;
    });
    Object.keys(groups).forEach(function(g){
      var info = groups[g];
      document.querySelectorAll('[data-progress-bar="'+g+'"]').forEach(function(bar){
        var fill = bar.querySelector(".pbar-fill");
        var text = bar.querySelector(".pbar-text");
        var pct = info.total > 0 ? Math.round(info.done / info.total * 100) : 0;
        if(fill) fill.style.width = pct + "%";
        if(text) text.textContent = info.done + " / " + info.total + "  (" + pct + "%)";
      });
    });
    var totalAll = 0, doneAll = 0;
    Object.keys(groups).forEach(function(g){ totalAll += groups[g].total; doneAll += groups[g].done; });
    document.querySelectorAll('[data-progress-bar="overall"]').forEach(function(bar){
      var fill = bar.querySelector(".pbar-fill");
      var text = bar.querySelector(".pbar-text");
      var pct = totalAll > 0 ? Math.round(doneAll / totalAll * 100) : 0;
      if(fill) fill.style.width = pct + "%";
      if(text) text.textContent = doneAll + " / " + totalAll + "  (" + pct + "%)";
    });
  }
  function exportProgress(){
    var data = JSON.stringify(getProgress(), null, 2);
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(data).then(function(){
        alert(t("progress.exported"));
      });
    } else {
      alert(data);
    }
  }
  function importProgress(jsonStr){
    try{
      var obj = JSON.parse(jsonStr);
      saveProgress(obj);
      applyProgress();
      updateProgressBars();
      return true;
    }catch(e){ return false; }
  }
  function resetProgress(){
    if(confirm(t("progress.resetconfirm"))){
      localStorage.removeItem(PROGRESS_KEY);
      applyProgress();
      updateProgressBars();
    }
  }

  /* ====== SEARCH (enhanced) ====== */
  var searchSelIdx = -1;
  var searchHits = [];

  function openSearch(){
    var ov = document.getElementById("searchOverlay");
    if(!ov) return;
    ov.classList.add("show");
    var inp = ov.querySelector("input");
    if(inp){ inp.value = ""; inp.focus(); renderSearch(""); }
  }
  function closeSearch(){
    var ov = document.getElementById("searchOverlay");
    if(ov) ov.classList.remove("show");
  }
  function getSearchHistory(){
    try{ return JSON.parse(localStorage.getItem("vc-search-history")) || []; }
    catch(e){ return []; }
  }
  function saveSearchHistory(q){
    var h = getSearchHistory();
    h = h.filter(function(x){ return x !== q; });
    h.unshift(q);
    h = h.slice(0, 6);
    localStorage.setItem("vc-search-history", JSON.stringify(h));
  }
  function renderSearch(q){
    var box = document.querySelector("#searchOverlay .search-results");
    if(!box) return;
    q = (q || "").trim().toLowerCase();
    searchHits = [];
    searchSelIdx = -1;
    var isEn = lang === "en";

    if(!q){
      var hist = getSearchHistory();
      if(hist.length){
        var html = '<div class="sr-label">'+t("search.history")+' <button class="sr-clear" data-action="clear-history">'+t("search.clear")+'</button></div>';
        html += hist.map(function(h){
          return '<a class="sr-item sr-history" href="#" data-query="'+h+'"><div class="sr-title">'+h+'</div></a>';
        }).join("");
        box.innerHTML = html;
        applyLang(lang);
        var clearBtn = box.querySelector('[data-action="clear-history"]');
        if(clearBtn) clearBtn.addEventListener("click", function(){
          localStorage.removeItem("vc-search-history");
          renderSearch("");
        });
        box.querySelectorAll(".sr-history").forEach(function(el){
          el.addEventListener("click", function(e){
            e.preventDefault();
            var inp = document.querySelector("#searchOverlay input");
            if(inp){ inp.value = el.getAttribute("data-query"); renderSearch(inp.value); }
          });
        });
      } else {
        box.innerHTML = '<div class="sr-empty">'+t("search.hint")+'</div>';
      }
      return;
    }

    SEARCH_INDEX.forEach(function(e){
      var hay = (e.page + " " + e.title + " " + e.tags + " " +
                 (e.pageEn||"") + " " + (e.titleEn||"") + " " + (e.tagsEn||"") + " " + (e.py||"")
      ).toLowerCase();
      if(hay.indexOf(q) !== -1){ searchHits.push(e); }
    });

    if(!searchHits.length){
      box.innerHTML = '<div class="sr-empty">'+t("search.empty")+'</div>';
      return;
    }
    box.innerHTML = searchHits.map(function(e, i){
      var pg = isEn ? (e.pageEn||e.page) : e.page;
      var ti = isEn ? (e.titleEn||e.title) : e.title;
      var tg = isEn ? (e.tagsEn||e.tags) : e.tags;
      var snip = tg.split(" ").slice(0, 6).join(" · ");
      return '<a class="sr-item'+(i===searchSelIdx?' selected':'')+'" href="'+e.url+'" data-idx="'+i+'">'+
        '<div class="sr-page">'+pg+'</div>'+
        '<div class="sr-title">'+ti+'</div>'+
        '<div class="sr-snippet">'+snip+'</div></a>';
    }).join("");
  }
  function moveSearchSel(dir){
    if(!searchHits.length) return;
    searchSelIdx = (searchSelIdx + dir + searchHits.length) % searchHits.length;
    var box = document.querySelector("#searchOverlay .search-results");
    if(!box) return;
    box.querySelectorAll(".sr-item").forEach(function(el, i){
      el.classList.toggle("selected", i === searchSelIdx);
      if(i === searchSelIdx) el.scrollIntoView({block:"nearest"});
    });
  }
  function confirmSearch(){
    if(searchSelIdx >= 0 && searchHits[searchSelIdx]){
      var inp = document.querySelector("#searchOverlay input");
      if(inp) saveSearchHistory(inp.value.trim());
      var url = searchHits[searchSelIdx].url;
      closeSearch();
      window.location.href = url;
    }
  }
  function highlightAnchor(){
    var hash = window.location.hash;
    if(!hash) return;
    var el = document.querySelector(hash);
    if(!el) return;
    setTimeout(function(){
      el.scrollIntoView({block:"start", behavior:"smooth"});
      el.classList.add("search-hit");
      setTimeout(function(){ el.classList.remove("search-hit"); }, 2800);
    }, 200);
  }

  /* ====== FILTER CHIPS ====== */
  var chipState = {};
  function applyFilters(){
    document.querySelectorAll("[data-chip-group]").forEach(function(group){
      var gname = group.getAttribute("data-chip-group");
      var active = chipState[gname] || "all";
      group.querySelectorAll("[data-chip]").forEach(function(chip){
        var val = chip.getAttribute("data-chip");
        chip.classList.toggle("active", val === active);
      });
      var targetSel = group.getAttribute("data-chip-target");
      if(targetSel){
        var container = document.querySelector(targetSel);
        if(container){
          container.querySelectorAll("[data-chip-tags]").forEach(function(item){
            if(active === "all"){
              item.style.display = "";
            } else {
              var tags = item.getAttribute("data-chip-tags");
              item.style.display = (tags && tags.indexOf(active) !== -1) ? "" : "none";
            }
          });
        }
      }
    });
  }

  /* ====== INIT ====== */
  function init(){
    applyDark(dark);
    applyLang(lang);

    /* set search button icon */
    var sb = document.querySelector(".search-btn");
    if(sb) sb.innerHTML = ICON_SEARCH;

    /* inject SVG sprite into body (once per page load) */
    if(!document.getElementById("vc-sprite")){
      var spriteDiv = document.createElement("div");
      spriteDiv.id = "vc-sprite";
      spriteDiv.style.display = "none";
      spriteDiv.innerHTML = SVG_SPRITE;
      document.body.insertBefore(spriteDiv, document.body.firstChild);
    }

    var sico = document.querySelector(".s-ico");
    if(sico) sico.innerHTML = ICON_SEARCH;

    /* burger - toggle + auto-close on nav click */
    var burger = document.getElementById("burger");
    var navLinks = document.getElementById("navLinks");
    if(burger && navLinks){
      burger.addEventListener("click", function(){ navLinks.classList.toggle("open"); });
      navLinks.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
      });
    }

    /* dark toggle */
    var db = document.querySelector(".dark-btn");
    if(db) db.addEventListener("click", function(){ applyDark(!dark); });

    /* lang toggle */
    var lb = document.querySelector(".lang-btn");
    if(lb) lb.addEventListener("click", function(){ applyLang(lang === "zh" ? "en" : "zh"); });

    /* back to top */
    var toTop = document.getElementById("toTop");
    if(toTop){
      window.addEventListener("scroll", function(){ toTop.classList.toggle("show", window.scrollY > 400); });
      toTop.addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });
    }

    /* search */
    var ov = document.getElementById("searchOverlay");
    if(sb) sb.addEventListener("click", openSearch);
    if(ov){
      var close = ov.querySelector(".search-close");
      if(close) close.addEventListener("click", closeSearch);
      ov.addEventListener("click", function(e){ if(e.target === ov) closeSearch(); });
      var inp = ov.querySelector("input");
      if(inp){
        inp.setAttribute("data-i18n","search.placeholder");
        inp.setAttribute("data-i18n-ph","1");
        inp.addEventListener("input", function(){ renderSearch(inp.value); });
      }
      ov.addEventListener("click", function(e){
        var item = e.target.closest(".sr-item");
        if(item && item.hasAttribute("href") && item.getAttribute("href") !== "#"){
          if(inp) saveSearchHistory(inp.value.trim());
        }
      });
      document.addEventListener("keydown", function(e){
        if(e.key === "Escape") closeSearch();
        if((e.ctrlKey || e.metaKey) && e.key === "k"){ e.preventDefault(); openSearch(); }
        if(ov.classList.contains("show")){
          if(e.key === "ArrowDown"){ e.preventDefault(); moveSearchSel(1); }
          if(e.key === "ArrowUp"){ e.preventDefault(); moveSearchSel(-1); }
          if(e.key === "Enter"){ e.preventDefault(); confirmSearch(); }
        }
      });
    }

    /* progress tracking — bind clicks */
    document.querySelectorAll("[data-track]").forEach(function(el){
      el.addEventListener("click", function(e){
        if(e.target.closest("a") && !e.target.closest("[data-track-toggle]")) return;
        var id = el.getAttribute("data-track");
        toggleProgress(id);
      });
      el.style.cursor = "pointer";
    });
    applyProgress();
    updateProgressBars();

    /* progress export / import / reset buttons */
    document.querySelectorAll("[data-action='export-progress']").forEach(function(b){
      b.addEventListener("click", exportProgress);
    });
    document.querySelectorAll("[data-action='import-progress']").forEach(function(b){
      b.addEventListener("click", function(){
        var jsonStr = prompt("Paste progress JSON:");
        if(jsonStr && importProgress(jsonStr)) alert("OK");
        else if(jsonStr) alert("Invalid JSON");
      });
    });
    document.querySelectorAll("[data-action='reset-progress']").forEach(function(b){
      b.addEventListener("click", resetProgress);
    });

    /* filter chips */
    document.querySelectorAll("[data-chip-group]").forEach(function(group){
      group.querySelectorAll("[data-chip]").forEach(function(chip){
        chip.addEventListener("click", function(){
          var gname = group.getAttribute("data-chip-group");
          var val = chip.getAttribute("data-chip");
          chipState[gname] = val;
          applyFilters();
        });
      });
    });
    applyFilters();

    /* highlight anchor on load */
    highlightAnchor();
    window.addEventListener("hashchange", highlightAnchor);

    /* page prefetch — preload all nav links */
    if(!window.VC_NO_PREFETCH){
      var pages = ["index.html","getting-started.html","combat.html","deckbuilding.html","dungeons.html","items.html","bosses.html","changelog.html"];
      pages.forEach(function(p){
        var link = document.createElement("link");
        link.rel = "prefetch";
        link.href = p;
        document.head.appendChild(link);
      });
    }

    /* re-apply progress after a delay (catches late-rendered dynamic content) */
    setTimeout(function(){ applyProgress(); updateProgressBars(); }, 100);

    applyLang(lang);
  }

  /* expose for page scripts */
  window.VC_BUILD = BUILD_DATA;
  window.VC_I18N = I18N;
  window.VC_t = t;
  window.VC_lang = function(){ return lang; };
  window.VC_exportProgress = exportProgress;
  window.VC_importProgress = importProgress;
  window.VC_resetProgress = resetProgress;
  window.VC_getProgress = getProgress;
  window.VC_toggleProgress = toggleProgress;

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
