# Vampire Crawlers Guide - 交接文档

## 项目路径
`c:\Users\tk212\Desktop\CatPaw_History_Backup_20260716_232759\vampire-crawlers-guide\`

## 游戏信息（已通过 Steam API 核实）
- **App ID**: 3265700
- **中文名**: 吸血鬼爬行者: 屠戮地牢的吸血鬼幸存者
- **英文名**: Vampire Crawlers: The Turbo Wildcard from Vampire Survivors
- **开发者**: poncle, Nosebleed Interactive
- **发行商**: poncle
- **发售日**: 2026年4月21日
- **类型**: 回合制卡牌地牢探索 Rogue-lite (BLOBBER)
- **成就**: 161个 | **评价**: 17,927条
- **Steam API 数据获取方式**: `curl.exe -s "https://store.steampowered.com/api/appdetails?appids=3265700&l=schinese&cc=cn"`
- **评论 API**: `curl.exe -s "https://store.steampowered.com/appreviews/3265700?json=1&filter=summary&language=schinese&num_per_page=10"`
- **成就百分比 API（无需 key）**: `curl.exe -s "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=3265700"`

## 已完成的工作

### v2.1.0（第一轮修复）
1. 移除全站虚假 "数据核对 2026.07" ver-tag
2. 移除全站 [待核实] 标注
3. 连击计算器倍率修复（显示总倍率 totalMult 而非末步倍率）
4. 首页 hero 统计修正
5. robots.txt / sitemap.xml 占位域名 → `yxhtl.github.io/vampire-crawlers-guide`
6. 牌组模拟器蓝法曲线横轴标签（新增 ds-curve-labels）
7. SW 缓存版本递增

### v2.2.0（第二轮修复 - 基于 Steam 真实数据）
1. 全站 footer: `poncle` → `poncle & Nosebleed Interactive`（8个HTML文件）
2. index.html meta 描述/keywords 修正（使用官方中文名）
3. 地牢名: 图书馆 → **锦钿书库 (Inlaid Library)**（dungeons.html, items.html, common.js）
4. 免责声明: "社区推断" → "基于 Steam 商店页与玩家社区整理"
5. 新增 Boss 04: **门扉女王 (Door Queen)**（bosses.html + common.js 搜索索引）
6. common.js BUILD_DATA 新增 3 张真实卡牌: 空虚之心(Hollow Heart)、王冠(Crown)、指引之光(Guiding Light)
7. common.js BUILD_DATA 新增 3 颗真实宝石: 回手宝石(Recall)、复制宝石(Copy)、蓝法宝石(Mana)
8. 首页统计: 31 图鉴条目（21卡牌 + 10宝石）
9. changelog.html 新增 v2.1.0 和 v2.2.0 条目
10. sw.js CACHE_NAME → v2.2

### v2.3.0（第三轮修复 - 基于 161 成就完整列表）
1. **获取全部 161 成就** — 通过 GetGlobalAchievementPercentagesForApp API（无需 Steam Web API Key）
2. **地牢名全面修正** — 3 个编造名替换为成就确认的真实名，2 个缺失地牢补齐：
   - 地穴 (Crypt) → **疯狂森林 (Mad Forest)**
   - 血库 (Blood Vault) → **乳品厂 (Dairy Plant)**
   - 深渊底层 (Abyssal Depths) → **加洛塔 (Gallo Tower)**
   - 新增: **小桥 (Tiny Bridge)**、**大教堂 (Cappella Magna)**
   - 锦钿书库 (Inlaid Library) ✓ 已正确
3. **免责声明诚实化** — v2.2.0 把"社区推断"改成了"基于 Steam 商店页与玩家社区整理"，这反而更误导。v2.3.0 改回诚实措辞，明确区分"成就列表确认的名称"和"未经游戏内核实的推断数值"
4. **Boss disclaimer 精确化** — 明确仅门扉女王来自玩家评论确认，其余 Boss 名称和数值均为推断
5. **死链修复** — 删除 footer 中重复指向 changelog 的"关于本站"死链（8个HTML文件）
6. **首页统计** — 地牢类型 4→6
7. **SW 缓存版本** — v2.2 → v2.3
8. 更新了 dungeons.html（6个地牢卡片+敌人出没位置）、common.js 搜索索引、bosses.html Boss 区域名、items.html 卡牌获取来源

## 从 Steam 成就确认的真实游戏数据（161 成就完整列表）

### 真实地牢名（6个，从 Unlock_ 成就确认）
| 编号 | 真实英文名 | 中文名 | 成就名 | 解锁率 |
|---|---|---|---|---|
| 01 | Mad Forest | 疯狂森林 | Unlock_MadForest_02/03 | 78.8%/65.0% |
| 02 | Inlaid Library | 锦钿书库 | Unlock_InlaidLibrary_01/02/03 | 93.1%/74.9%/59.0% |
| 03 | Tiny Bridge | 小桥 | Unlock_TinyBridge_01/02/03 | 82.6%/53.9%/35.2% |
| 04 | Dairy Plant | 乳品厂 | Unlock_DairyPlant_01/02/03 | 61.5%/51.0%/41.7% |
| 05 | Gallo Tower | 加洛塔 | Unlock_GalloTower_01 | 42.2% |
| 06 | Cappella Magna | 大教堂 | Unlock_CappellaMagna_01/02 | 29.8%/24.9% |

### 角色（20个，从 Character_ 成就确认）
Antonio(99.1%), Gennaro(78.9%), Dommario(73.0%), Poe(72.1%), Pasqualina(60.8%), Pugnala(59.4%), Cavallo(59.3%), Arca(56.5%), Ramba(55.1%), Giovanna(52.8%), Clerici(49.0%), Krochi(43.2%), Poppea(42.2%), OSole(37.2%), Concetta(36.9%), Christine(34.8%), Gallo(32.8%), Mortuccio(32.2%), Porta(29.1%), Lama(27.1%)

### 遗物（13个，从 Relic_ 成就确认）
PancakeOfPower(99.7%), GemHammer(96.8%), GuidingLight(84.8%), Polentir(72.7%), Blacksmith(70.3%), GrimGrimoire(66.9%), Overkill(64.3%), BombaInfernale(53.9%), Randomazzo(53.9%), Jeweller(37.0%), UltimateOverkill(34.0%), SorcerersTears(33.5%), Ovenkilt(18.3%)

### 武器进化（17个，从 Evo_ 成就确认）
HolyWand(82.3%), HellFire(72.9%), ThousandEdge(63.9%), LaBorra(63.4%), DeathSpiral(63.1%), Thunderloop(54.7%), UnholyVespers(52.3%), BloodyTear(51.8%), NoFuture(50.1%), SoulEater(47.9%), Vandalier(46.4%), HeavenSword(42.9%), ViciousHunger(24.9%), Phierragi(16.5%), GorgeousMoon(16.3%), ValkyrieTurner(15.1%), Mannajja(10.3%)

### 宝石（47颗，从 Gems_ 成就确认）
Return(88.2%), Red(81.3%), Clone(80.2%), Leader(78.8%), CompIL1(77.9%), Steal(77.3%), Yellow(76.9%), Discharge(76.3%), Retain(74.7%), Spike(73.0%), Refresh(72.5%), Magnet(72.2%), Midas(71.8%), Blue(71.8%), Sprightly(70.8%), Rainbow(70.0%), Purple(68.5%), ManaPlusMinus(67.6%), Arcane(67.6%), Echo(66.1%), Charge(65.2%), Reverse(64.2%), TripleDamage(63.5%), Luck(62.2%), Duration(60.2%), Demi(59.8%), CompleteMF3(54.6%), Remote(54.4%), Hail(53.8%), Heal(53.4%), Wild(48.6%), ManaPlusMinus2(48.6%), Swift(48.5%), CompleteIL3(47.9%), Destroy(43.2%), Free(42.3%), Drain(40.5%), Thief(39.4%), Bombard(35.9%), CompleteDP3(33.1%), Jingle(30.4%), Slayer(27.9%), MagicHat(25.5%), Uncrackable(21.9%), Calcium(20.8%), XCost(14.3%), Mild(12.9%)

### 其他成就（50个）
Inn(94.1%), EmptyTome(93.5%), HollowHeart(93.1%), PowerUpShop(92.9%), Duplicator(87.1%), RelicMuseum(86.8%), Crown(85.3%), FireWand(84.6%), Garlic(81.4%), Bracer(81.1%), StoneMask(79.3%), Clover(76.8%), SharpMind(75.9%), Candelabrador(75.7%), Peachone(75.4%), AttractionOrb(73.5%), Boost(68.9%), OverTheTop(68.8%), ManaSython(67.5%), EbonyWing(67.2%), LightningRing(66.5%), Cross(65.5%), ClockLancet(63.5%), Pummarola(59.8%), YourShieldMyLiege(55.7%), Pentagram(55.0%), Carrello(54.4%), WildCombo(52.9%), Spellbinder(52.4%), Runetracer(52.0%), Plunder(50.6%), AndAnother(50.4%), MakeAScene(49.5%), EightTheSparrow(47.7%), Wings(45.6%), PhieraDerTuphello(45.6%), JestersHat(43.1%), WildDefence(36.5%), ChainLink(36.5%), CherryBomb(36.5%), WildAttack(33.4%), GattiAmari(32.5%), Tirajisu(25.1%), WildStrength(24.6%), SwollenFist(24.6%), Bone(23.0%), SongOfMana(21.8%), ShadowPinion(19.2%), CelestialDusting(16.3%), SkullOManiac(15.2%)

### 从玩家评论确认的机制
- **碎卡机制**: 针对沙雕无限，正向鼓励大卡组，可删掉升级时被迫拿的垃圾牌
- **Overkill**: 爆怪给额外金币
- **宝石效果**: 回手、复制、恢复法力（已添加为宝石）
- **门扉女王**: 玩家反映最恶心的 Boss 之一，有"超雄小怪"
- **老虎机特效风格**: 宝箱开箱动画
- **武器进化**: 与 Vampire Survivors 一脉相承
- **Turboturn**: 涡轮回合，核心机制
- **蓝法顺序连击**: 0费>1费>2费>3费>万能>0费>1费... 第一张3费效果×3，第二张2费×7
- **万能牌后可接任何牌**
- **铁匠、秘法牌、宝石匠**: 局外成长路径
- **多角色同时上场**: 后期可带多个 Crawler

### Steam 标签
Card Battler, Dungeon Crawler, Deckbuilding, Strategy, Roguelike, Card Game, Pixel Graphics, Action, Singleplayer, First-Person, Indie, Action Roguelike

## 关键文件
- `js/common.js` — 核心逻辑（IIFE），含 BUILD_DATA、SEARCH_INDEX、I18N、进度追踪、搜索、筛选
- `css/style.css` — 全站样式
- `sw.js` — Service Worker (当前 v2.3)
- `manifest.json` — PWA manifest
- `combat.html` — 连击系统 + 连击计算器
- `deckbuilding.html` — 牌组构筑 + 牌组模拟器
- `items.html` — 卡牌图鉴 + chip 筛选器
- `bosses.html` — Boss 攻略（4个Boss，仅门扉女王已确认）
- `dungeons.html` — 地牢类型（6个真实地牢）+ 敌人图鉴
- `index.html` — 首页
- `getting-started.html` — 新手攻略
- `changelog.html` — 更新日志

## 当前仍需继续的工作（按优先级）

### P0 - 数据准确性
1. **Boss 名验证**: 当前 3/4 Boss 名（地穴守护者、血族女族长、深渊泰坦）为推断，成就列表中无 Boss_ 前缀条目。需要 Steam Web API Key 调 GetSchemaForGame 获取成就显示名，或等社区 Wiki 整理
2. **卡牌数据验证**: 伤害数值、蓝法消耗等均为推断。BUILD_DATA 里只有 6 张卡牌名来自成就（空虚之心、王冠、指引之光等），其余为编造
3. **宝石数据扩充**: 成就显示有 47 颗宝石，网站只有 10 颗。需要补齐

### P1 - 内容补全
4. **角色页面**: 20 个角色完全未覆盖，需要新建角色页面或在现有页面补充
5. **遗物系统**: 13 个遗物完全未覆盖，这是 VS 系列的核心机制之一
6. **武器图鉴**: 成就显示 ~30 种武器，网站只有 4 种
7. **武器进化路线**: 成就显示 17 条进化路线，网站只有 4 条

### P2 - 技术债
8. **applyProgress() 不支持 settle 类型**: CONVENTIONS.md §6 定义了 settle 类型，但 common.js 代码只处理 boss/task/collect
9. **CSS f5/f6 类**: dungeons.html 新增了 .dfloor.f5 和 .dfloor.f6，需确认 CSS 是否有对应样式
10. **CONVENTIONS.md 合规检查**: 确保所有修改符合项目约定

## 注意事项
- `curl.exe` 在 PowerShell 中可用（不要用 `curl` 别名）
- Python 3.12 可用
- web_fetch 工具无法访问 Steam/SteamDB（被 Cloudflare 拦截），必须用 curl.exe
- Bing 搜索中文游戏名效果不好，直接用 Steam API 最可靠
- GetGlobalAchievementPercentagesForApp API 不需要 Steam Web API Key，但只返回内部名不返回显示名
- GetSchemaForGame API 需要 Steam Web API Key 才能获取成就显示名
- Steam 社区成就页和 SteamDB 均被 Cloudflare 拦截（curl.exe 也无法访问）
