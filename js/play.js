// 严格模式
"use strict";
// 必要信息
let gameInfo = {};
const urldata = window.location.href;
//游戏状态
let setgame = false;
const romurl = "https://storage.heheda.top/mdcd-rom/";
// 参数合法性
const urlerr = () => {
	alert('参数传入不合法');
	window.location.href = "/";
	return;
}
// 判断数据合法性
if (window.top != window) {
	alert('当您看到这条提示意味着：您所访问的网站正在恶意调用本站资源，本站对偷盗资源的行为0容忍，点击确认跳转正版体验。');
	window.open(urldata, '_self');
} else if (urldata.indexOf('?') > -1 && urldata.indexOf('.html') > -1) {
	const urlarrs = decodeURI(atob(urldata.substring(urldata.indexOf('?') + 1, urldata.indexOf('.html')))).split('&');
	for (let i = 0; i < urlarrs.length; i++) {
		let data = urlarrs[i].split('=');
		if (data == "") {
			urlerr();
		} else {
			gameInfo[data[0]] = data[1];
		}
	}
	cocoMessage.warning("正在配置资源！", 2000);
	const showload = document.getElementById('btn_load');
	//展示游戏名称
	document.getElementById('name').innerHTML = gameInfo.n;
	// 修改title
	document.title = gameInfo.n + ' - ' + 'MDCD游戏盒';
	window.gameName = gameInfo.n;
	// 联机服务
	window.netplayUrl = "https://game-online.heheda.top/";
	// 游戏ID
	window.gameId = gameInfo.i;
	// 封面
	window.backgroundImg = window.location.origin + '/imgs/' + gameInfo.i + '.png';
	//BIOS
	window.biosUrl = '../bios/' + gameInfo.b + '.7z';
	// ROM
	window.gameUrl = romurl + gameInfo.i + ".7z";
	// 初始化
	window.EJS_player = "#show_box";
	window.dataPath = "https://other.heheda.top/gamelib/";
	// 核心
	window.system = "segaCD";
	// 广告
	window.adUrl = "../ads/";
	// 光枪
	window.EJS_lightgun = true;
	// 全屏
	window.fullscreenOnLoad = true;
	// 广告时间
	window.adTimer = 5000;
	// 音量
	window.volume = 1;
	// 着色器
	window.shaders = Object.assign({}, window.EJS_SHADERS, window.EJS_shaders);
	// 菜单配置
	window.defaultOptions = {
		'shader': 'crt-easymode.glslp',
		'save-state-location': 'browser'
	}
	// 背景模糊
	window.backgroundBlur = true;
	// 背景颜色
	window.backgroundColor = "#ffffff00";
	window.langJson = {
		"0": "0",
		"1": "1",
		"2": "2",
		"3": "3",
		"4": "4",
		"5": "5",
		"6": "6",
		"7": "7",
		"8": "8",
		"9": "9",
		"Restart": "重新开始",
		"Pause": "暂停",
		"Play": "开始",
		"Save State": "存档",
		"Load State": "读档",
		"Control Settings": "控制设置",
		"Cheats": "作弊",
		"Cache Manager": "缓存管理器",
		"Export Save File": "导出存档文件",
		"Import Save File": "导入存档文件",
		"Netplay": "网络游玩",
		"Mute": "静音",
		"Unmute": "取消静音",
		"Settings": "设置",
		"Enter Fullscreen": "进入全屏",
		"Exit Fullscreen": "退出全屏",
		"Reset": "重置",
		"Clear": "清除",
		"Close": "关闭",
		"QUICK SAVE STATE": "快速存档",
		"QUICK LOAD STATE": "快速读档",
		"CHANGE STATE SLOT": "改变状态槽",
		"FAST FORWARD": "快进",
		"Player": "玩家",
		"Connected Gamepad": "连接游戏手柄",
		"Gamepad": "游戏手柄",
		"Keyboard": "键盘",
		"Set": "设置",
		"Add Cheat": "添加作弊",
		"Create a Room": "创建房间",
		"Rooms": "房间",
		"Start Game": "开始游戏",
		"Loading...": "正在加载...",
		"Download Game Core": "下载游戏核心",
		"Decompress Game Core": "解压游戏核心",
		"Download Game Data": "下载游戏数据",
		"Decompress Game Data": "解压游戏数据",
		"Context Menu": "菜单",
		"Shaders": "着色器",
		"Disabled": "禁用",
		"2xScaleHQ": "2xScaleHQ",
		"4xScaleHQ": "4xScaleHQ",
		"CRT easymode": "CRT简易模式",
		"CRT aperture": "CRT荫栅式",
		"CRT geom": "CRT几何",
		"CRT mattias": "CRT马蒂亚斯",
		"FPS": "FPS",
		"show": "展示",
		"hide": "隐藏",
		"Fast Forward Ratio": "快进速率",
		"unlimited": "无限",
		"Fast Forward": "快进",
		"Enabled": "启用",
		"Save State Slot": "保存状态槽",
		"Save State Location": "保存状态位置",
		"Download": "下载",
		"Keep in Browser": "保留在浏览器中",
		"fceumm region": "区域",
		"Auto": "自动",
		"NTSC": "NTSC",
		"PAL": "PAL",
		"Dendy": "Dendy",
		"fceumm aspect": "首选纵横比",
		"8:7 PAR": "8:7 PAR",
		"4:3": "4:3",
		"fceumm overscan h left": "左裁剪过扫描",
		"fceumm overscan h right": "右裁剪过扫描",
		"fceumm overscan v top": "上裁剪过扫描",
		"fceumm overscan v bottom": "下裁剪过扫描",
		"fceumm sndquality": "音质",
		"Low": "低",
		"High": "高",
		"Very High": "极高",
		"fceumm turbo enable": "Turbo启用",
		"None": "无",
		"Player 1": "玩家1",
		"Player 2": "玩家2",
		"Both": "两者",
		"fceumm turbo delay": "Turbo延迟",
		"SAVED STATE TO SLOT": "已将状态保存到插槽",
		"LOADED STATE FROM SLOT": "已从插槽加载状态",
		"SET SAVE STATE SLOT TO": "将保存状态槽设置为",
		"Network Error": "网络错误",
		"Submit": "提交",
		"Description": "描述",
		"Code": "代码",
		"Add Cheat Code": "添加作弊码",
		"Leave Room": "退出房间",
		"Password": "密码",
		"Password (optional)": "密码（可选）",
		"Max Players": "最大玩家数",
		"Room Name": "房间名称",
		"Join": "加入",
		"Player Name": "玩家名称",
		"Set Player Name": "设置玩家名称",
		"Left Handed Mode": "左手模式",
		"Virtual Gamepad": "虚拟手柄",
		"Disk": "磁盘",
		"Press Keyboard": "按键盘",
		"INSERT COIN": "投币",
		"Remove": "消除",
		"SAVE LOADED FROM BROWSER": "已从浏览器加载状态",
		"SAVE SAVED TO BROWSER": "已将状态保存到浏览器",
		"Join the discord": "加入discord",
		"View on GitHub": "在GitHub上查看",
		"Failed to start game": "无法开始游戏",
		"Download Game BIOS": "下载游戏BIOS",
		"Decompress Game BIOS": "解压游戏BIOS",
		"Download Game Parent": "下载游戏父级",
		"Decompress Game Parent": "解压游戏父级",
		"Download Game Patch": "下载游戏补丁",
		"Decompress Game Patch": "解压游戏补丁",
		"Download Game State": "下载游戏状态",
		"Check console": "检查控制台",
		"Error for site owner": "给站长的错误提醒",
		"EmulatorJS": "EmulatorJS",
		"Clear All": "全部清除",
		"Take Screenshot": "截图",
		"Start screen recording": "开始录屏",
		"Stop screen recording": "停止录屏",
		"Quick Save": "快速保存",
		"Quick Load": "快速加载",
		"REWIND": "快退",
		"Rewind Enabled (requires restart)": "已启用快退（需要重新启动）",
		"Rewind Granularity": "快退粒度",
		"Slow Motion Ratio": "慢动作比率",
		"Slow Motion": "慢动作",
		"Home": "主页",
		"EmulatorJS License": "EmulatorJS 许可证",
		"RetroArch License": "RetroArch 许可证",
		"SLOW MOTION": "慢动作",
		"A": "A",
		"B": "B",
		"SELECT": "选择",
		"START": "开始",
		"UP": "向上",
		"DOWN": "向下",
		"LEFT": "向左",
		"RIGHT": "向右",
		"BUTTON_1": "BUTTON_1",
		"BUTTON_2": "BUTTON_2",
		"up arrow": "up arrow",
		"down arrow": "down arrow",
		"left arrow": "left arrow",
		"right arrow": "right arrow",
		"L2": "L2",
		"R2": "R2",
		"L3": "L3",
		"R3": "R3",
		"L STICK UP": "左摇杆向上",
		"L STICK DOWN": "左摇杆向下",
		"L STICK LEFT": "左摇杆向左",
		"L STICK RIGHT": "左摇杆向右",
		"R STICK UP": "右摇杆向上",
		"R STICK DOWN": "右摇杆向下",
		"R STICK LEFT": "右摇杆向左",
		"R STICK RIGHT": "右摇杆向右",
		"Start": "开始",
		"Select": "选择",
		"Fast": "加速",
		"Slow": "减速",
		"a": "a",
		"b": "b",
		"c": "d",
		"d": "d",
		"e": "e",
		"f": "f",
		"g": "g",
		"h": "h",
		"i": "i",
		"j": "j",
		"k": "k",
		"l": "l",
		"m": "m",
		"n": "n",
		"o": "o",
		"p": "p",
		"q": "q",
		"r": "r",
		"s": "s",
		"t": "t",
		"u": "u",
		"v": "v",
		"w": "w",
		"x": "x",
		"y": "y",
		"z": "z",
		"enter": "回车",
		"escape": "Esc",
		"space": "空格",
		"tab": "Tab",
		"backspace": "退格",
		"delete": "删除",
		"arrowup": "向上箭头",
		"arrowdown": "向下箭头",
		"arrowleft": "向左箭头",
		"arrowright": "向右箭头",
		"f1": "f1",
		"f2": "f2",
		"f3": "f3",
		"f4": "f4",
		"f5": "f5",
		"f6": "f6",
		"f7": "f7",
		"f8": "f8",
		"f9": "f9",
		"f10": "f10",
		"f11": "f11",
		"f12": "F12",
		"shift": "Shift",
		"control": "Ctrl",
		"alt": "Alt",
		"meta": "Win",
		"capslock": "大写锁定",
		"insert": "Insert",
		"home": "Home",
		"end": "End",
		"pageup": "向上翻页",
		"pagedown": "向下翻页",
		"dash": "-",
		"equal sign": "+",
		"!": "！",
		"@": "@",
		"#": "#",
		"$": "$",
		"%": "%",
		"^": "^",
		"&": "&",
		"*": "*",
		"(": "（",
		")": "）",
		"-": "-",
		"_": "_",
		"+": "+",
		"=": "=",
		"[": "[",
		"]": "]",
		"{": "{",
		"}": "}",
		";": ";",
		":": ":",
		"'": "'",
		"\"": "”",
		",": ",",
		".": "。",
		"<": "<",
		">": ">",
		"/": "/",
		"?": "？",
		"LEFT_STICK_X": "LEFT_STICK_X",
		"LEFT_STICK_Y": "LEFT_STICK_Y",
		"RIGHT_STICK_X": "RIGHT_STICK_X",
		"RIGHT_STICK_Y": "RIGHT_STICK_Y",
		"LEFT_TRIGGER": "左扳机",
		"RIGHT_TRIGGER": "右扳机",
		"A_BUTTON": "按键A",
		"B_BUTTON": "按键B",
		"X_BUTTON": "按键X",
		"Y_BUTTON": "按键Y",
		"START_BUTTON": "开始键",
		"SELECT_BUTTON": "选择键",
		"L1_BUTTON": "L1键",
		"R1_BUTTON": "R1键",
		"L2_BUTTON": "L2键",
		"R2_BUTTON": "R2键",
		"LEFT_THUMB_BUTTON": "左拇指按键",
		"RIGHT_THUMB_BUTTON": "右拇指按键",
		"DPAD_UP": "十字键向上",
		"DPAD_DOWN": "十字键向下",
		"DPAD_LEFT": "十字键向左",
		"DPAD_RIGHT": "十字键向右"
	}
	// 按键映射
	// window.defaultControllers = {
	// 	0: {
	// 		0: {
	// 			'value': 'b',
	// 			'value2': 'BUTTON_2'
	// 		},
	// 		1: {
	// 			'value': 'h',
	// 			'value2': 'BUTTON_4'
	// 		},
	// 		2: {
	// 			'value': 'space',
	// 			'value2': 'SELECT'
	// 		},
	// 		3: {
	// 			'value': 'enter',
	// 			'value2': 'START'
	// 		},
	// 		4: {
	// 			'value': 'w',
	// 			'value2': 'DPAD_UP'
	// 		},
	// 		5: {
	// 			'value': 's',
	// 			'value2': 'DPAD_DOWN'
	// 		},
	// 		6: {
	// 			'value': 'a',
	// 			'value2': 'DPAD_LEFT'
	// 		},
	// 		7: {
	// 			'value': 'd',
	// 			'value2': 'DPAD_RIGHT'
	// 		},
	// 		8: {
	// 			'value': 'v',
	// 			'value2': 'BUTTON_1'
	// 		},
	// 		9: {
	// 			'value': 'g',
	// 			'value2': 'BUTTON_3'
	// 		},
	// 		21: {
	// 			'value2': 'RIGHT_STICK_X:-1'
	// 		},
	// 		22: {
	// 			'value2': 'RIGHT_STICK_Y:+1'
	// 		},
	// 		23: {
	// 			'value2': 'RIGHT_STICK_Y:-1'
	// 		},
	// 		24: {
	// 			'value': '1'
	// 		},
	// 		25: {
	// 			'value': '2'
	// 		},
	// 		26: {
	// 			'value': '3'
	// 		},
	// 	},
	// 	1: {
	// 		0: {
	// 			'value': 'l',
	// 			'value2': 'BUTTON_2'
	// 		},
	// 		1: {
	// 			'value': 'p',
	// 			'value2': 'BUTTON_4'
	// 		},
	// 		2: {
	// 			'value': 'dash',
	// 			'value2': 'SELECT'
	// 		},
	// 		3: {
	// 			'value': 'equal sign',
	// 			'value2': 'START'
	// 		},
	// 		4: {
	// 			'value': 'up arrow',
	// 			'value2': 'DPAD_UP'
	// 		},
	// 		5: {
	// 			'value': 'down arrow',
	// 			'value2': 'DPAD_DOWN'
	// 		},
	// 		6: {
	// 			'value': 'left arrow',
	// 			'value2': 'DPAD_LEFT'
	// 		},
	// 		7: {
	// 			'value': 'right arrow',
	// 			'value2': 'DPAD_RIGHT'
	// 		},
	// 		8: {
	// 			'value': 'k',
	// 			'value2': 'BUTTON_1'
	// 		},
	// 		9: {
	// 			'value': 'o',
	// 			'value2': 'BUTTON_3'
	// 		},
	// 		21: {
	// 			'value2': 'RIGHT_STICK_X:-1'
	// 		},
	// 		22: {
	// 			'value2': 'RIGHT_STICK_Y:+1'
	// 		},
	// 		23: {
	// 			'value2': 'RIGHT_STICK_Y:-1'
	// 		},
	// 		24: {
	// 			'value': '4'
	// 		},
	// 		25: {
	// 			'value': '5'
	// 		},
	// 		26: {
	// 			'value': '6'
	// 		},
	// 	},
	// 	2: {
	// 		0: {
	// 			'value2': 'BUTTON_2'
	// 		},
	// 		1: {
	// 			'value2': 'BUTTON_4'
	// 		},
	// 		2: {
	// 			'value2': 'SELECT'
	// 		},
	// 		3: {
	// 			'value2': 'START'
	// 		},
	// 		4: {
	// 			'value2': 'DPAD_UP'
	// 		},
	// 		5: {
	// 			'value2': 'DPAD_DOWN'
	// 		},
	// 		6: {
	// 			'value2': 'DPAD_LEFT'
	// 		},
	// 		7: {
	// 			'value2': 'DPAD_RIGHT'
	// 		},
	// 		8: {
	// 			'value2': 'BUTTON_1'
	// 		},
	// 		9: {
	// 			'value2': 'BUTTON_3'
	// 		},
	// 	},
	// 	3: {
	// 		0: {
	// 			'value2': 'BUTTON_2'
	// 		},
	// 		1: {
	// 			'value2': 'BUTTON_4'
	// 		},
	// 		2: {
	// 			'value2': 'SELECT'
	// 		},
	// 		3: {
	// 			'value2': 'START'
	// 		},
	// 		4: {
	// 			'value2': 'DPAD_UP'
	// 		},
	// 		5: {
	// 			'value2': 'DPAD_DOWN'
	// 		},
	// 		6: {
	// 			'value2': 'DPAD_LEFT'
	// 		},
	// 		7: {
	// 			'value2': 'DPAD_RIGHT'
	// 		},
	// 		8: {
	// 			'value2': 'BUTTON_1'
	// 		},
	// 		9: {
	// 			'value2': 'BUTTON_3'
	// 		},
	// 	}
	// }
	// 初始化模拟器		
	window.EJS_emulator = new EmulatorJS(EJS_player, window);
	// 监听游戏状态
	window.EJS_emulator.on("start", () => {
		cocoMessage.success("启动游戏引擎！", 2000);
		//隐藏鼠标和工具栏
		const hhtml = document.getElementsByTagName("html")[0];
		const pl1 = document.getElementById("player1");
		const pl2 = document.getElementById("player2");
		const gname = document.getElementById("name");
		const titler = document.getElementsByClassName("titler")[0];
		const titlel = document.getElementsByClassName("titlel")[0];
		let timer = null;
		let isshow = false;
		document.onmousemove = () => {
			if (isshow) {
				isshow = false;
				hhtml.style.cursor = "default";
				pl2.style.right = "20px";
				pl1.style.left = "20px";
				gname.style.top = "20px";
				titler.style.left = "20px";
				titlel.style.right = "20px";
			} else {
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					isshow = true;
					hhtml.style.cursor = "none";
					pl2.style.right = "-200px";
					pl1.style.left = "-200px";
					gname.style.top = "-120px";
					titler.style.left = "-220px";
					titlel.style.right = "-220px";
				}, 3000)
			}
		}
		setgame = true;
		// 卸载提示
		window.onbeforeunload = (bfe) => {
			bfe.preventDefault();
			bfe.returnValue = "退出前，别忘记保存游戏进度哦！";
		}
	})
	// 监听存档
	// window.EJS_emulator.on("save", (e) => console.log(e));
	// 监听读档
	// window.EJS_emulator.on("load", (e) => console.log(e));
	cocoMessage.success("资源配置完成！", 2000);
	showload.style.display = 'none';
	// 移除遮罩
	document.body.classList.remove('is-loading');
} else {
	urlerr();
}
// 设置按钮状态
if (navigator.share) {
	document.getElementById("share").style.display = "inline";
} else {
	console.log("分享功能禁用");
}
//获取设备类型
let isMobile = /(iPhone|iPod|Android|ios|iOS|iPad|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent);
//设置操作方式
const mobile = () => {
	const player1 = document.getElementById("player1");
	const player2 = document.getElementById("player2");
	if (isMobile) {
		player1.style.display = "none";
		player2.style.display = "none";
		isMobile = false;
	} else {
		player1.style.display = "block";
		player2.style.display = "block";
		isMobile = true;
	}

}
mobile();
//重置游戏配置
const chongzai = () => {
	window.location.reload();
}
// 分享
const share = () => {
	navigator.share({
		title: '在线玩《' + gameInfo.n + '》',
		url: urldata,
		text: '推荐使用电脑，运行更加流畅！在线免费畅玩或下载MDCD游戏，包括魂斗罗，超级玛丽，坦克大战等MDCD经典游戏，让我们一同找回童年的快乐！玩MDCD游戏，就认准MDCD游戏盒！'
	})
}
// 下载rom按钮
const dowrom = () => {
	const dorom = confirm('您要下载此游戏的ROM文件吗？');
	if (dorom == true) {
		cocoMessage.warning("即将开始下载！", 2000);
		window.open(romurl + gameInfo.i + '.7z');
	} else {
		cocoMessage.warning("您取消了下载！", 2000);
	}
}
// 截屏
const screenshot = () => {
	if (setgame) {
		const canvas = document.getElementsByClassName("ejs_canvas")[0];
		let data = canvas.toDataURL('image/png');
		let image = new Image();
		image.src = data;
		let w = window.open("", "_blank");
		w.document.write(image.outerHTML);
	} else {
		cocoMessage.warning("请先开始游戏！", 2000);
	}
}
// 初始化存档
// const savedata = () => {
// 	const savesh = document.getElementById("btn_load").style.display;
// 	if (savesh == "none") {
// 		const hnbut = document.getElementById("hnbut");
// 		const hnul = document.getElementById("hnul");
// 		if (sbts) {
// 			sbts = false;
// 			let code = gameInfo.i.toString();
// 			HDB.initDB().then(() => {
// 				HDB.getDataListByCode(code).then((data) => {
// 					let result = "";
// 					for (let j = 0; j < data.length; j++) {
// 						result += '<li class="hnli"><div class="hnimg"><img src="' + data[j]
// 							.pic +
// 							'"></div><div class="hndiv"><p>存档【' + Number(j + 1) +
// 							'】</p><p>' + data[j]
// 							.time +
// 							'</p><button type="button" class="hnsbut" onclick="nessave(\'a\',\'' +
// 							data[j].code + '\',this,' + data[j].id +
// 							')">覆盖</button><button type="button" class="hndbut" onclick="nessave(\'c\',\'' +
// 							data[j].code + '\',this,' + data[j].id +
// 							')">删除</button><button type="button" class="hnlbut" onclick="nessave(\'b\',\'' +
// 							data[j].code + '\',this,' + data[j].id +
// 							')">读取</button></div></li>';
// 					}
// 					for (let k = 0; k < 5 - data.length; k++) {
// 						result +=
// 							'<li class="hnli"><div class="hnimg"></div><div class="hndiv"><p>存档【' +
// 							Number(data.length + k + 1) +
// 							'】</p><p>无记录</p><button type="button" class="hnsbut" onclick="nessave(\'a\',\'' +
// 							code + '\',this)">保存</button></div></li>';
// 					}
// 					//获取存档列表
// 					hnul.innerHTML = result;
// 					hnul.style.display = "inline";
// 				})
// 			})
// 		} else {
// 			document.onclick = () => {
// 				let cobj = event.srcElement;
// 				if (cobj.id === "hnul") {
// 					sbts = false;
// 				} else {
// 					hnul.style.display = "none";
// 					sbts = true;
// 				}
// 			}
// 		}
// 	} else {
// 		cocoMessage.warning("请先开始游戏！", 2000);
// 	}
// }
//禁止双击缩放
window.addEventListener('dblclick', (dbe) => {
	dbe.preventDefault();
}, {
	passive: true
})