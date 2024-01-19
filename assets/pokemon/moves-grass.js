let MoveList;
if(!MoveList) MoveList = []; 
module.exports.MoveList = MoveList;

Array.prototype.push.apply(MoveList, [
	{
		"name": "吸取", "alias": "すいとる|Absorb",
		"power": "1",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 1",
		"effect": "使用者回復等同於造成傷害一半的HP（尾數捨去）。",
		"desc": "使用者從敵人身上吸取其生命能量。"
	},
	{
		"name": "蘋果酸", "alias": "りんごさん|Apple Acid",
		"power": "3",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|特防|down|1"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 3",
		"effect": "降低敵人的特防。",
		"desc": "寶可夢從牠培育的酸蘋果中提取一種汁液，這種酸性汁液會使人蛀牙。"
	},
	{
		"name": "芳香治療", "alias": "アロマセラピー|Aromatherapy",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|allally"],
		"accuracy": "洞察 + 自然",
		"damage": "-",
		"effect": "治療使用者和所有隊友的「灼傷」、「冰凍」、「麻痺」、「中毒」、「劇毒」、或「睡眠」狀態。",
		"desc": "寶可夢散發出藥劑般的氣味和煙霧來回復使用者和友方的狀態。"
	},
	{
		"name": "木枝突刺", "alias": "えだづき|Branch Poke",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 2",
		"desc": "寶可夢胡亂地使用樹枝來戳刺牠的敵人。"
	},
	{
		"name": "種子機關槍", "alias": "タネマシンガン|Bullet Seed",
		"power": "1",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|sact_5"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 1",
		"effect": "遠程攻擊。連續行動。",
		"desc": "寶可夢迅速地射出種子，就彷彿它們是子彈一樣。"
	},
	{
		"name": "棉花防守", "alias": "コットンガード|Cotton Guard",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|self", "frame|self|防禦|up|3"],
		"accuracy": "洞察 + 導引",
		"damage": "-",
		"effect": "提升使用者的防禦。",
		"desc": "使用者用棉花團將自己覆蓋起來，從而大幅減少物理攻擊的衝擊。"
	},
	{
		"name": "棉孢子", "alias": "わたほうし|Cotton Spore",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|靈巧|down|2"],
		"accuracy": "洞察 + 導引",
		"damage": "-",
		"effect": "降低敵人的靈巧。",
		"desc": "寶可夢用棉花罩住敵人，干擾對方的移動速度。"
	},
	{
		"name": "鼓擊", "alias": "ドラムアタック|Drum Beating",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|靈巧|down|1"],
		"accuracy": "靈巧 + 表演",
		"damage": "力量 + 3",
		"effect": "降低敵人的靈巧。",
		"desc": "寶可夢擁有一面很棒的鼓，你或許以為牠會拿它來打鼓。但牠沒這麼做，而是把敵人當鼓敲。"
	},
	{
		"name": "能量球", "alias": "エナジーボール|Energy Ball",
		"power": "3",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "dice|l|1", "frame|target|特防|down|1"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 3",
		"effect": "骰 1 顆機率骰以降低敵人的特防。",
		"desc": "寶可夢將自然能量匯聚成球並扔向敵人。樹木和草叢可能會因此失去生機並枯萎。"
	},
	{
		"name": "森林詛咒", "alias": "もりののろい|Forest's Curse",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "意志 + 自然",
		"damage": "-",
		"effect": "使目標的屬性追加草屬性（例如：尼多蘭的屬性將變為「毒/草」；赫拉克羅斯的屬性將變為「蟲/格鬥/草」）。如果該寶可夢已經擁有第三個屬性，則將該屬性取代為草屬性。",
		"desc": "使用者呼求森林對目標施放詛咒，使牠身體周圍長出藤蔓和植被。這個詛咒在沒有靈媒的協助下無法被輕易解除。"
	},
	{
		"name": "瘋狂植物", "alias": "ハードプラント|Frenzy Plant",
		"power": "6",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "effect|l|recharge"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 6",
		"effect": "必須重新充能。",
		"desc": "使用者紮下根並召喚植物在敵人的周圍瘋狂生長，然而這將會使使用者精疲力盡。"
	},
	{
		"name": "終極吸取", "alias": "ギガドレイン|Giga Drain",
		"power": "3",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 3",
		"effect": "使用者回復等同於造成傷害一半的HP（尾數捨去）。",
		"desc": "寶可夢從敵人的體內汲取出巨量的生命能量。"
	},
	{
		"name": "打草結", "alias": "くさむすび|Grass Knot",
		"power": "1*",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 1*",
		"effect": "敵人的體重每有 50公斤 ，這個招式的傷害骰池就能額外增加 1 顆骰子。你最多可以透過這個方式增加 4 顆骰子。",
		"desc": "使用者用一根草繩纏住目標的腳，將牠絆倒。敵人的體型越大，摔得越重。"
	},
	{
		"name": "草之誓約", "alias": "くさのちかい|Grass Pledge",
		"power": "2",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|area", "target|l|field", "frame|self|靈巧|down|1", "frame|target|靈巧|down|1"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 2",
		"effect": "範圍攻擊。降低所有目標的防禦。任何被換上場且在地面上的寶可夢也都將被降低 1 點防禦，持續直到該場景結束。",
		"desc": "寶可夢吟唱召喚草之力量的咒語。牠的誓言得到回應，土壤鬆動、地面開裂，長出的植被將所有人都困在場地中。"
	},
	{
		"name": "草笛", "alias": "くさぶえ|Grass Whistle",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|3", "effect|l|sound", "frame|sleep||always"],
		"accuracy": "特殊 + 表演",
		"damage": "-",
		"effect": "聲音類招式。使敵人陷入「睡眠」狀態。",
		"desc": "使用者演奏出優美舒緩的旋律，使目標進入平靜的夢鄉。"
	},
	{
		"name": "青草場地", "alias": "グラスフィールド|Grassy Terrain",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|field", "frame|heal||heal|1"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "若成功，則消耗 1 點意志點以使其生效。所有地面上的友方都將在戰鬥輪結束時回復 1 點HP。所有草屬性攻擊的傷害骰池都將額外增加 1 顆骰子。持續 4 輪。",
		"desc": "寶可夢召喚出自然的療癒之力，使戰場的一側長出一大片不可思議的青草。"
	},
	{
		"name": "萬有引力", "alias": "Ｇのちから|Grav Apple",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|防禦|down|1"],
		"accuracy": "靈巧 + 導引",
		"damage": "力量 + 3",
		"effect": "遠程攻擊。降低敵人的防禦。",
		"desc": "寶可夢飛到敵人的正上方並朝牠的頭丟下一顆蘋果。敵人會忍不住去吃掉蘋果，在戰鬥中分心。"
	},
	{
		"name": "木角", "alias": "ウッドホーン|Horn Leech",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "使用者回復等同於造成傷害一半的HP（尾數捨去）。",
		"desc": "使用者用牠的角撞擊敵人並透過犄角吸取一些生命能量。"
	},
	{
		"name": "扎根", "alias": "ねをはる|Ingrain",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|self", "frame|heal||heal|1", "effect|l|block"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "若成功，則消耗 1 點意志點以使其生效。使用者在每個戰鬥輪結束回復 1 點HP。使用者將因此被阻擋。",
		"desc": "寶可夢將自己扎根在地，吸取營養並回復體力。"
	},
	{
		"name": "葉刃", "alias": "リーフブレード|Leaf Blade",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|lethal", "effect|l|crit"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "致命傷害。容易擊中要害。",
		"desc": "寶可夢使用身上鋒利的葉片來切割敵人。"
	},
	{
		"name": "飛葉風暴", "alias": "リーフストーム|Leaf Storm",
		"power": "6",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "frame|self|特殊|down|2"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 6",
		"effect": "降低使用者的特殊。",
		"desc": "大量鋒利葉片旋轉形成的狂猛風暴將把目標切成碎片，也會讓使用者精疲力盡。"
	},
	{
		"name": "青草攪拌器", "alias": "グラスミキサー|Leaf Tornado",
		"power": "2",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "dice|l|5", "frame|target|命中|down|1"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 2",
		"effect": "骰 5 顆機率骰以降低敵人的命中。",
		"desc": "一叢叢鋒利的尖葉圍繞著敵人旋轉，使牠難以瞄準並攻擊。"
	},
	{
		"name": "樹葉", "alias": "このは|Leafage",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 導引",
		"damage": "力量 + 2",
		"effect": "遠程攻擊。",
		"desc": "使用者向敵人投擲飛鏢一般的樹葉。"
	},
	{
		"name": "寄生種子", "alias": "やどりぎのタネ|Leech Seed",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|1", "frame|heal||heal|1"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "若成功，則消耗 1 點意志點以使其生效。每個戰鬥輪結束時，骰 1 顆傷害骰以對敵人造成傷害，且使用者將為每一點用這種方式造成的傷害而回復 1 點HP。草屬性的寶可夢免疫於這個招式。",
		"desc": "使用者在目標身上植入一些種子。種子發芽後，將會吸收敵人的能量來恢復使用者的體力。"
	},
	{
		"name": "魔法葉", "alias": "マジカルリーフ|Magical Leaf",
		"power": "2",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|neverfail"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 2",
		"effect": "必中",
		"desc": "使用者放出一片飄浮在空中的葉子，它會追蹤目標直至命中。"
	},
	{
		"name": "超級吸取", "alias": "メガドレイン|Mega Drain",
		"power": "2",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 導引",
		"damage": "特殊 + 2",
		"effect": "使用者回復等同於造成傷害一半的HP（尾數捨去）。",
		"desc": "寶可夢從敵人的身體中汲取出大量的生命能量。"
	},
	{
		"name": "尖刺臂", "alias": "ニードルアーム|Needle Arm",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|flinch||number|d3"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 2",
		"effect": "骰 3 顆機率骰以使敵人陷入「畏縮」狀態。",
		"desc": "寶可夢用牠揮舞的手臂攻擊敵人，一些刺可能會像針一樣紮在目標上。"
	},
	{
		"name": "落英繽紛", "alias": "はなふぶき|Petal Blizzard",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|area"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "範圍攻擊。",
		"desc": "寶可夢用漫天飛舞的花瓣和樹葉籠罩整個場地，任何接近使用者的人都會受到攻擊。"
	},
	{
		"name": "花瓣舞", "alias": "はなびらのまい|Petal Dance",
		"power": "5",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|rfoe", "effect|l|rampage"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 5",
		"effect": "狂暴。以隨機敵人為目標。",
		"desc": "寶可夢開始讓花瓣環繞在身邊，展示大自然真正的力量，花瓣會隨著狂風攻擊敵人。"
	},
	{
		"name": "強力鞭打", "alias": "パワーウィップ|Power Whip",
		"power": "5",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|2"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 5",
		"desc": "寶可夢把牠的藤蔓或身體部位當作一根強而有力的鞭子猛烈地抽打敵人。"
	},
	{
		"name": "飛葉快刀", "alias": "はっぱカッター|Razor Leaf",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|allfoe", "effect|l|crit"],
		"accuracy": "靈巧 + 導引",
		"damage": "力量 + 2",
		"effect": "以所有範圍內的敵人為目標。遠程攻擊。容易擊中要害。",
		"desc": "寶可夢射出一片或更多的鋒利葉片，彷彿飛刀一樣把所有的目標都切開。"
	},
	{
		"name": "茁茁轟炸", "alias": "すくすくボンバー|Sappy Seed",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|1"],
		"accuracy": "特殊 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "每個戰鬥輪結束時，骰 1 顆傷害骰以對敵人造成傷害，且使用者將為每一點用這種方式造成的傷害而回復 1 點HP。如果這個招式的使用者處於最終進化階段，則這個招式自動失敗。",
		"desc": "使用者讓一顆魔法種子長出可愛的嫩莖並附在距離牠最近的目標上。一旦它紮根，它就會長啊長啊長啊，直到衝破天際。"
	},
	{
		"name": "種子炸彈", "alias": "タネばくだん|Seed Bomb",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "遠程攻擊。",
		"desc": "使用者丟出一顆大型的種子，會在接觸到敵人時爆炸。"
	},
	{
		"name": "種子閃光", "alias": "シードフレア|Seed Flare",
		"power": "5",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|lethal", "dice|l|4", "frame|target|特防|down|2"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 5",
		"effect": "致命傷害。骰 4 顆機率骰以降低敵人的特防。",
		"desc": "謝米噴出一大片敵人無法擺脫的花粉和種子，使其變得虛弱。隨著時間流逝，這些種子將會長成參天大樹。"
	},
	{
		"name": "催眠粉", "alias": "ねむりごな|Sleep Powder",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|2", "frame|sleep||always"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "使敵人陷入「睡眠」狀態。",
		"desc": "使用者讓催眠粉散佈在自己身邊，任何接觸到它們的人都會睡著。"
	},
	{
		"name": "捕獸夾", "alias": "トラバサミ|Snap Trap",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|block"],
		"accuracy": "靈巧 + 隱匿",
		"damage": "力量 + 2",
		"effect": "目標在接下來 4 個戰鬥輪期間將被阻擋。",
		"desc": "使用者實在太扁平了，以至於你在高草叢中難以發現牠的存在。牠只是靜靜等待牠的敵人靠近，然後將自己的身體如同捕獸夾一樣夾住對方。"
	},
	{
		"name": "日光束", "alias": "ソーラービーム|Solar Beam",
		"power": "5",
		"category": "special",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|charge"],
		"accuracy": "特殊 + 導引",
		"damage": "特殊 + 5",
		"effect": "蓄力招式。如果當前天氣狀態為大晴天，則跳過這個招式的蓄力行動。如果當前天氣狀態為下雨、沙暴、或冰雹，則這個招式需要花費兩個蓄力行動。",
		"desc": "使用者將牠吸收的陽光匯聚成一束強大且具有毀滅性的光束。"
	},
	{
		"name": "日光刃", "alias": "ソーラーブレード|Solar Blade",
		"power": "5",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|charge"],
		"accuracy": "力量 + 鬥毆",
		"damage": "力量 + 5",
		"effect": "蓄力招式。如果當前天氣狀態為大晴天，則跳過這個招式的蓄力行動。如果當前天氣狀態為下雨、沙暴、或冰雹，則這個招式需要花費兩個蓄力行動。",
		"desc": "使用者將陽光匯聚在其鋒利的葉片上，然後釋放出一道具有毀滅性的能量飛刃。"
	},
	{
		"name": "尖刺防守", "alias": "ニードルガード|Spiky Shield",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|self", "frame|priority||up|3", "effect|l|shield"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "-",
		"effect": "先制招式。護盾。傷害類招式對使用者造成的傷害減少 3 點。如果敵人對使用者使用了非遠程的物理攻擊招式，則骰 2 顆傷害骰以對敵人造成傷害。",
		"desc": "寶可夢用滿是尖刺的外殼蓋住自己，如果敵人直接擊中外殼，那牠將會反過來受傷。"
	},
	{
		"name": "蘑菇孢子", "alias": "キノコのほうし|Spore",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|sleep||always"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "使敵人陷入「睡眠」狀態。",
		"desc": "一種強效的催眠孢子被射向目標，以使其安然入睡。"
	},
	{
		"name": "吸取力量", "alias": "ちからをすいとる|Strength Sap",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|力量|down|1", "frame|heal||heal|?"],
		"accuracy": "洞察 + 自然",
		"damage": "-",
		"effect": "降低敵人的力量。使用者將回復等同於敵人當前力量數值的HP。在戰鬥中治療的限制仍會如常適用。",
		"desc": "寶可夢尋找牠敵人身上的弱點，然後吸取牠的生命能量，讓敵人感到虛弱。"
	},
	{
		"name": "麻痺粉", "alias": "しびれごな|Stun Spore",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|accuracy||down|2", "frame|paralysis||always"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "使敵人陷入「麻痺」狀態。",
		"desc": "一陣能使目標立刻麻痺，使其肌肉痙攣的粉塵。"
	},
	{
		"name": "光合作用", "alias": "こうごうせい|Synthesis",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|self", "effect|l|heal"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "基礎治癒。若成功，則消耗 1 點意志點以使其生效。如果當前天氣狀態為大晴天，則這個招式變為 強效治癒。如果當前天氣狀態為下雨或沙暴，則這個招式只會回復 1 點HP。",
		"desc": "寶可夢將陽光轉化為能量來恢復自己的活力。"
	},
	{
		"name": "熱帶踢", "alias": "トロピカルキック|Trop Kick",
		"power": "3",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "frame|target|力量|down|1"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 3",
		"effect": "降低敵人的力量。",
		"desc": "使用者使出一記熱情而有魅力的踢擊。"
	},
	{
		"name": "藤鞭", "alias": "つるのムチ|Vine Whip",
		"power": "2",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "靈巧 + 鬥毆",
		"damage": "力量 + 2",
		"desc": "寶可夢用牠細長的藤蔓作為鞭子來對付敵人。這些藤蔓可以長達20英尺。"
	},
	{
		"name": "木槌", "alias": "ウッドハンマー|Wood Hammer",
		"power": "5",
		"category": "physical",
		"type": "Grass",
		"tags": ["target|l|foe", "effect|l|recoil"],
		"accuracy": "力量 + 鬥毆",
		"damage": "力量 + 5",
		"effect": "反作用力傷害。",
		"desc": "寶可夢不顧一切地用其堅硬軀體的一部分猛擊敵人，使用者也會在這個過程中受到傷害。"
	},
	{
		"name": "煩惱種子", "alias": "なやみのタネ|Worry Seed",
		"power": "-",
		"category": "support",
		"type": "Grass",
		"tags": ["target|l|foe"],
		"accuracy": "特殊 + 自然",
		"damage": "-",
		"effect": "直到這個場景結束前，目標的特性將變為「不眠」。",
		"desc": "使用者在敵人身上種下一粒種子，使其感到不安和焦慮，讓目標在晚上睡不著覺。"
	}
]);