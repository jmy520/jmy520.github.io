
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"StartPage":"resource/skins/StartPage.exml","MissionPage":"resource/skins/MissionPage.exml","GamePage":"resource/skins/GamePage.exml"};generateEUI.paths['resource/skins/GamePage.exml'] = window.GamePageSkin = (function (_super) {
	__extends(GamePageSkin, _super);
	function GamePageSkin() {
		_super.call(this);
		this.skinParts = ["imageBackground","groupCanvas","imageBox","labelExpressText","groupExpressionWrapper","groupExpressBox","labelAnswerA","groupAnswerA","labelAnswerB","groupAnswerB","labelAnswerC","groupAnswerC","labelAnswerD","groupAnswerD","groupAnswers","groupRoot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.groupRoot_i()];
	}
	var _proto = GamePageSkin.prototype;

	_proto.groupRoot_i = function () {
		var t = new eui.Group();
		this.groupRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.imageBackground_i(),this.groupCanvas_i(),this.groupExpressBox_i(),this.groupAnswers_i()];
		return t;
	};
	_proto.imageBackground_i = function () {
		var t = new eui.Image();
		this.imageBackground = t;
		t.source = "game_background_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupCanvas_i = function () {
		var t = new eui.Group();
		this.groupCanvas = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.groupExpressBox_i = function () {
		var t = new eui.Group();
		this.groupExpressBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 424;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 642;
		t.elementsContent = [this.imageBox_i(),this.groupExpressionWrapper_i()];
		return t;
	};
	_proto.imageBox_i = function () {
		var t = new eui.Image();
		this.imageBox = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "express_container_png";
		t.top = 0;
		return t;
	};
	_proto.groupExpressionWrapper_i = function () {
		var t = new eui.Group();
		this.groupExpressionWrapper = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 166;
		t.elementsContent = [this.labelExpressText_i()];
		return t;
	};
	_proto.labelExpressText_i = function () {
		var t = new eui.BitmapLabel();
		this.labelExpressText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "1 + 1";
		t.verticalCenter = 0;
		t.x = 186.0000000000001;
		t.y = -3;
		return t;
	};
	_proto.groupAnswers_i = function () {
		var t = new eui.Group();
		this.groupAnswers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 320;
		t.width = 1920;
		t.x = 0;
		t.elementsContent = [this.groupAnswerA_i(),this.groupAnswerB_i(),this.groupAnswerC_i(),this.groupAnswerD_i()];
		return t;
	};
	_proto.groupAnswerA_i = function () {
		var t = new eui.Group();
		this.groupAnswerA = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.width = 360;
		t.elementsContent = [this._Image1_i(),this.labelAnswerA_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "answer_background_png";
		t.top = 0;
		return t;
	};
	_proto.labelAnswerA_i = function () {
		var t = new eui.BitmapLabel();
		this.labelAnswerA = t;
		t.anchorOffsetY = 25;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 114;
		return t;
	};
	_proto.groupAnswerB_i = function () {
		var t = new eui.Group();
		this.groupAnswerB = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.top = 0;
		t.width = 360;
		t.x = 520;
		t.elementsContent = [this._Image2_i(),this.labelAnswerB_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "answer_background_png";
		t.top = 0;
		return t;
	};
	_proto.labelAnswerB_i = function () {
		var t = new eui.BitmapLabel();
		this.labelAnswerB = t;
		t.anchorOffsetY = 25;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 114;
		return t;
	};
	_proto.groupAnswerC_i = function () {
		var t = new eui.Group();
		this.groupAnswerC = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.top = 0;
		t.width = 360;
		t.x = 1040;
		t.elementsContent = [this._Image3_i(),this.labelAnswerC_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "answer_background_png";
		t.top = 0;
		return t;
	};
	_proto.labelAnswerC_i = function () {
		var t = new eui.BitmapLabel();
		this.labelAnswerC = t;
		t.anchorOffsetY = 25;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 114;
		return t;
	};
	_proto.groupAnswerD_i = function () {
		var t = new eui.Group();
		this.groupAnswerD = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.right = 0;
		t.top = 0;
		t.width = 360;
		t.elementsContent = [this._Image4_i(),this.labelAnswerD_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "answer_background_png";
		t.top = 0;
		return t;
	};
	_proto.labelAnswerD_i = function () {
		var t = new eui.BitmapLabel();
		this.labelAnswerD = t;
		t.anchorOffsetY = 25;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 114;
		return t;
	};
	return GamePageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MissionPage.exml'] = window.MissionPageSkin = (function (_super) {
	__extends(MissionPageSkin, _super);
	function MissionPageSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 1920;
	}
	var _proto = MissionPageSkin.prototype;

	return MissionPageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartPage.exml'] = window.StartPageSkin = (function (_super) {
	__extends(StartPageSkin, _super);
	var StartPageSkin$Skin1 = 	(function (_super) {
		__extends(StartPageSkin$Skin1, _super);
		function StartPageSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPageSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
			t.percentWidth = 100;
			return t;
		};
		return StartPageSkin$Skin1;
	})(eui.Skin);

	function StartPageSkin() {
		_super.call(this);
		this.skinParts = ["imageBackground","buttonStartGame","groupRoot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.groupRoot_i()];
	}
	var _proto = StartPageSkin.prototype;

	_proto.groupRoot_i = function () {
		var t = new eui.Group();
		this.groupRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.imageBackground_i(),this.buttonStartGame_i()];
		return t;
	};
	_proto.imageBackground_i = function () {
		var t = new eui.Image();
		this.imageBackground = t;
		t.source = "start_game_background_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buttonStartGame_i = function () {
		var t = new eui.Button();
		this.buttonStartGame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148;
		t.width = 360;
		t.x = 780;
		t.y = 880;
		t.skinName = StartPageSkin$Skin1;
		return t;
	};
	return StartPageSkin;
})(eui.Skin);