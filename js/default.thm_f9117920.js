
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
		this.skinParts = ["imageBackground","groupBackground","groupCanvas","imageBox","labelExpressionText","groupExpressionWrapper","groupExpressionBox","labelAnswerA","groupAnswerA","labelAnswerB","groupAnswerB","labelAnswerC","groupAnswerC","labelAnswerD","groupAnswerD","groupAnswers","groupContent","groupDecorationWrapper","groupRoot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.groupRoot_i()];
	}
	var _proto = GamePageSkin.prototype;

	_proto.groupRoot_i = function () {
		var t = new eui.Group();
		this.groupRoot = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.groupBackground_i(),this.groupCanvas_i(),this.groupContent_i(),this.groupDecorationWrapper_i()];
		return t;
	};
	_proto.groupBackground_i = function () {
		var t = new eui.Group();
		this.groupBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.imageBackground_i()];
		return t;
	};
	_proto.imageBackground_i = function () {
		var t = new eui.Image();
		this.imageBackground = t;
		t.bottom = 0;
		t.fillMode = "clip";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_background_png";
		t.top = 0;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.groupContent_i = function () {
		var t = new eui.Group();
		this.groupContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.x = 0;
		t.elementsContent = [this.groupExpressionBox_i(),this.groupAnswers_i()];
		return t;
	};
	_proto.groupExpressionBox_i = function () {
		var t = new eui.Group();
		this.groupExpressionBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 364;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 480;
		t.elementsContent = [this.imageBox_i(),this.groupExpressionWrapper_i()];
		return t;
	};
	_proto.imageBox_i = function () {
		var t = new eui.Image();
		this.imageBox = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
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
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.labelExpressionText_i()];
		return t;
	};
	_proto.labelExpressionText_i = function () {
		var t = new eui.BitmapLabel();
		this.labelExpressionText = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "1 + 1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupAnswers_i = function () {
		var t = new eui.Group();
		this.groupAnswers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 300;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this.groupAnswerA_i(),this.groupAnswerB_i(),this.groupAnswerC_i(),this.groupAnswerD_i()];
		return t;
	};
	_proto.groupAnswerA_i = function () {
		var t = new eui.Group();
		this.groupAnswerA = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 260;
		t.horizontalCenter = -580;
		t.width = 300;
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
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupAnswerB_i = function () {
		var t = new eui.Group();
		this.groupAnswerB = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 260;
		t.horizontalCenter = -200;
		t.width = 300;
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
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupAnswerC_i = function () {
		var t = new eui.Group();
		this.groupAnswerC = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 260;
		t.horizontalCenter = 200;
		t.width = 300;
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
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupAnswerD_i = function () {
		var t = new eui.Group();
		this.groupAnswerD = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 260;
		t.horizontalCenter = 580;
		t.width = 300;
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
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupDecorationWrapper_i = function () {
		var t = new eui.Group();
		this.groupDecorationWrapper = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	return GamePageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MissionPage.exml'] = window.MissionPageSkin = (function (_super) {
	__extends(MissionPageSkin, _super);
	var MissionPageSkin$Skin1 = 	(function (_super) {
		__extends(MissionPageSkin$Skin1, _super);
		function MissionPageSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin1;
	})(eui.Skin);

	var MissionPageSkin$Skin2 = 	(function (_super) {
		__extends(MissionPageSkin$Skin2, _super);
		function MissionPageSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin2;
	})(eui.Skin);

	var MissionPageSkin$Skin3 = 	(function (_super) {
		__extends(MissionPageSkin$Skin3, _super);
		function MissionPageSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin3;
	})(eui.Skin);

	var MissionPageSkin$Skin4 = 	(function (_super) {
		__extends(MissionPageSkin$Skin4, _super);
		function MissionPageSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin4;
	})(eui.Skin);

	var MissionPageSkin$Skin5 = 	(function (_super) {
		__extends(MissionPageSkin$Skin5, _super);
		function MissionPageSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin5;
	})(eui.Skin);

	var MissionPageSkin$Skin6 = 	(function (_super) {
		__extends(MissionPageSkin$Skin6, _super);
		function MissionPageSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin6;
	})(eui.Skin);

	var MissionPageSkin$Skin7 = 	(function (_super) {
		__extends(MissionPageSkin$Skin7, _super);
		function MissionPageSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin7;
	})(eui.Skin);

	var MissionPageSkin$Skin8 = 	(function (_super) {
		__extends(MissionPageSkin$Skin8, _super);
		function MissionPageSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin8;
	})(eui.Skin);

	var MissionPageSkin$Skin9 = 	(function (_super) {
		__extends(MissionPageSkin$Skin9, _super);
		function MissionPageSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin9;
	})(eui.Skin);

	var MissionPageSkin$Skin10 = 	(function (_super) {
		__extends(MissionPageSkin$Skin10, _super);
		function MissionPageSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mission_button_success_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MissionPageSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mission_button_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MissionPageSkin$Skin10;
	})(eui.Skin);

	function MissionPageSkin() {
		_super.call(this);
		this.skinParts = ["imageBackground","groupBackground","toggleMission01","imageMission01Star01","imageMission01Star02","imageMission01Star3","labelMission01Text","groupMission01","toggleMission02","imageMission02Star01","imageMission02Star02","imageMission02Star03","labelMission02Text","groupMission02","toggleMission03","imageMission03Star01","imageMission03Star02","imageMission03Star03","labelMission03Text","groupMission03","toggleMission04","imageMission04Star01","imageMission04Star02","imageMission04Star03","labelMission04Text","groupMission04","toggleMission05","imageMission05Star01","imageMission05Star02","imageMission05Star03","labelMission05Text","groupMission05","toggleMission06","imageMission06Star01","imageMission06Star02","imageMission06Star03","labelMission06Text","groupMission06","toggleMission07","imageMission07Star01","imageMission07Star02","imageMission07Star03","labelMission07Text","groupMission07","toggleMission08","imageMission08Star01","imageMission08Star02","imageMission08Star03","labelMission08Text","groupMission08","toggleMission09","imageMission09Star01","imageMission09Star02","imageMission09Star03","labelMission09Text","groupMission09","toggleMission10","imageMission10Star01","imageMission10Star02","imageMission10Star03","labelMission10Text","groupMission10","groupMissionList","groupContent","groupRoot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.groupRoot_i()];
	}
	var _proto = MissionPageSkin.prototype;

	_proto.groupRoot_i = function () {
		var t = new eui.Group();
		this.groupRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.groupBackground_i(),this.groupContent_i()];
		return t;
	};
	_proto.groupBackground_i = function () {
		var t = new eui.Group();
		this.groupBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.imageBackground_i()];
		return t;
	};
	_proto.imageBackground_i = function () {
		var t = new eui.Image();
		this.imageBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "mission_background_png";
		t.top = 0;
		return t;
	};
	_proto.groupContent_i = function () {
		var t = new eui.Group();
		this.groupContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.groupMissionList_i()];
		return t;
	};
	_proto.groupMissionList_i = function () {
		var t = new eui.Group();
		this.groupMissionList = t;
		t.anchorOffsetX = 0;
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.groupMission01_i(),this.groupMission02_i(),this.groupMission03_i(),this.groupMission04_i(),this.groupMission05_i(),this.groupMission06_i(),this.groupMission07_i(),this.groupMission08_i(),this.groupMission09_i(),this.groupMission10_i()];
		return t;
	};
	_proto.groupMission01_i = function () {
		var t = new eui.Group();
		this.groupMission01 = t;
		t.height = 240;
		t.horizontalCenter = -480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.width = 240;
		t.elementsContent = [this.toggleMission01_i(),this.imageMission01Star01_i(),this.imageMission01Star02_i(),this.imageMission01Star3_i(),this.labelMission01Text_i()];
		return t;
	};
	_proto.toggleMission01_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission01 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin1;
		return t;
	};
	_proto.imageMission01Star01_i = function () {
		var t = new eui.Image();
		this.imageMission01Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission01Star02_i = function () {
		var t = new eui.Image();
		this.imageMission01Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission01Star3_i = function () {
		var t = new eui.Image();
		this.imageMission01Star3 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission01Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission01Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission02_i = function () {
		var t = new eui.Group();
		this.groupMission02 = t;
		t.height = 240;
		t.horizontalCenter = -240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.width = 240;
		t.x = 430;
		t.y = 290;
		t.elementsContent = [this.toggleMission02_i(),this.imageMission02Star01_i(),this.imageMission02Star02_i(),this.imageMission02Star03_i(),this.labelMission02Text_i()];
		return t;
	};
	_proto.toggleMission02_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission02 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin2;
		return t;
	};
	_proto.imageMission02Star01_i = function () {
		var t = new eui.Image();
		this.imageMission02Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission02Star02_i = function () {
		var t = new eui.Image();
		this.imageMission02Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission02Star03_i = function () {
		var t = new eui.Image();
		this.imageMission02Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission02Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission02Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission03_i = function () {
		var t = new eui.Group();
		this.groupMission03 = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.width = 240;
		t.x = 440;
		t.y = 300;
		t.elementsContent = [this.toggleMission03_i(),this.imageMission03Star01_i(),this.imageMission03Star02_i(),this.imageMission03Star03_i(),this.labelMission03Text_i()];
		return t;
	};
	_proto.toggleMission03_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission03 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin3;
		return t;
	};
	_proto.imageMission03Star01_i = function () {
		var t = new eui.Image();
		this.imageMission03Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission03Star02_i = function () {
		var t = new eui.Image();
		this.imageMission03Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission03Star03_i = function () {
		var t = new eui.Image();
		this.imageMission03Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission03Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission03Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission04_i = function () {
		var t = new eui.Group();
		this.groupMission04 = t;
		t.height = 240;
		t.horizontalCenter = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.width = 240;
		t.x = 450;
		t.y = 310;
		t.elementsContent = [this.toggleMission04_i(),this.imageMission04Star01_i(),this.imageMission04Star02_i(),this.imageMission04Star03_i(),this.labelMission04Text_i()];
		return t;
	};
	_proto.toggleMission04_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission04 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin4;
		return t;
	};
	_proto.imageMission04Star01_i = function () {
		var t = new eui.Image();
		this.imageMission04Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission04Star02_i = function () {
		var t = new eui.Image();
		this.imageMission04Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission04Star03_i = function () {
		var t = new eui.Image();
		this.imageMission04Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission04Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission04Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission05_i = function () {
		var t = new eui.Group();
		this.groupMission05 = t;
		t.height = 240;
		t.horizontalCenter = 480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.width = 240;
		t.x = 460;
		t.y = 320;
		t.elementsContent = [this.toggleMission05_i(),this.imageMission05Star01_i(),this.imageMission05Star02_i(),this.imageMission05Star03_i(),this.labelMission05Text_i()];
		return t;
	};
	_proto.toggleMission05_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission05 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin5;
		return t;
	};
	_proto.imageMission05Star01_i = function () {
		var t = new eui.Image();
		this.imageMission05Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission05Star02_i = function () {
		var t = new eui.Image();
		this.imageMission05Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission05Star03_i = function () {
		var t = new eui.Image();
		this.imageMission05Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission05Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission05Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission06_i = function () {
		var t = new eui.Group();
		this.groupMission06 = t;
		t.height = 240;
		t.horizontalCenter = -480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.width = 240;
		t.x = 470;
		t.y = 330;
		t.elementsContent = [this.toggleMission06_i(),this.imageMission06Star01_i(),this.imageMission06Star02_i(),this.imageMission06Star03_i(),this.labelMission06Text_i()];
		return t;
	};
	_proto.toggleMission06_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission06 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin6;
		return t;
	};
	_proto.imageMission06Star01_i = function () {
		var t = new eui.Image();
		this.imageMission06Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission06Star02_i = function () {
		var t = new eui.Image();
		this.imageMission06Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission06Star03_i = function () {
		var t = new eui.Image();
		this.imageMission06Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission06Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission06Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission07_i = function () {
		var t = new eui.Group();
		this.groupMission07 = t;
		t.height = 240;
		t.horizontalCenter = -240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.width = 240;
		t.x = 480;
		t.y = 340;
		t.elementsContent = [this.toggleMission07_i(),this.imageMission07Star01_i(),this.imageMission07Star02_i(),this.imageMission07Star03_i(),this.labelMission07Text_i()];
		return t;
	};
	_proto.toggleMission07_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission07 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin7;
		return t;
	};
	_proto.imageMission07Star01_i = function () {
		var t = new eui.Image();
		this.imageMission07Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission07Star02_i = function () {
		var t = new eui.Image();
		this.imageMission07Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission07Star03_i = function () {
		var t = new eui.Image();
		this.imageMission07Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission07Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission07Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission08_i = function () {
		var t = new eui.Group();
		this.groupMission08 = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.width = 240;
		t.x = 490;
		t.y = 350;
		t.elementsContent = [this.toggleMission08_i(),this.imageMission08Star01_i(),this.imageMission08Star02_i(),this.imageMission08Star03_i(),this.labelMission08Text_i()];
		return t;
	};
	_proto.toggleMission08_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission08 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin8;
		return t;
	};
	_proto.imageMission08Star01_i = function () {
		var t = new eui.Image();
		this.imageMission08Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission08Star02_i = function () {
		var t = new eui.Image();
		this.imageMission08Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission08Star03_i = function () {
		var t = new eui.Image();
		this.imageMission08Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission08Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission08Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission09_i = function () {
		var t = new eui.Group();
		this.groupMission09 = t;
		t.height = 240;
		t.horizontalCenter = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.width = 240;
		t.x = 500;
		t.y = 360;
		t.elementsContent = [this.toggleMission09_i(),this.imageMission09Star01_i(),this.imageMission09Star02_i(),this.imageMission09Star03_i(),this.labelMission09Text_i()];
		return t;
	};
	_proto.toggleMission09_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission09 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin9;
		return t;
	};
	_proto.imageMission09Star01_i = function () {
		var t = new eui.Image();
		this.imageMission09Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission09Star02_i = function () {
		var t = new eui.Image();
		this.imageMission09Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission09Star03_i = function () {
		var t = new eui.Image();
		this.imageMission09Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission09Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission09Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupMission10_i = function () {
		var t = new eui.Group();
		this.groupMission10 = t;
		t.height = 240;
		t.horizontalCenter = 480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.width = 240;
		t.x = 510;
		t.y = 370;
		t.elementsContent = [this.toggleMission10_i(),this.imageMission10Star01_i(),this.imageMission10Star02_i(),this.imageMission10Star03_i(),this.labelMission10Text_i()];
		return t;
	};
	_proto.toggleMission10_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleMission10 = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.skinName = MissionPageSkin$Skin10;
		return t;
	};
	_proto.imageMission10Star01_i = function () {
		var t = new eui.Image();
		this.imageMission10Star01 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = -50;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.imageMission10Star02_i = function () {
		var t = new eui.Image();
		this.imageMission10Star02 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 70;
		t.y = 10;
		return t;
	};
	_proto.imageMission10Star03_i = function () {
		var t = new eui.Image();
		this.imageMission10Star03 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.horizontalCenter = 50;
		t.rotation = 0;
		t.source = "star_png";
		t.top = 0;
		t.width = 40;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.labelMission10Text_i = function () {
		var t = new eui.BitmapLabel();
		this.labelMission10Text = t;
		t.font = "cube_fonts_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	return MissionPageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartPage.exml'] = window.StartPageSkin = (function (_super) {
	__extends(StartPageSkin, _super);
	function StartPageSkin() {
		_super.call(this);
		this.skinParts = ["imageBackground","groupBackground","imageStartGame","groupContent","groupRoot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.groupRoot_i()];
	}
	var _proto = StartPageSkin.prototype;

	_proto.groupRoot_i = function () {
		var t = new eui.Group();
		this.groupRoot = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.groupBackground_i(),this.groupContent_i()];
		return t;
	};
	_proto.groupBackground_i = function () {
		var t = new eui.Group();
		this.groupBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.imageBackground_i()];
		return t;
	};
	_proto.imageBackground_i = function () {
		var t = new eui.Image();
		this.imageBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "start_game_background_png";
		t.top = 0;
		return t;
	};
	_proto.groupContent_i = function () {
		var t = new eui.Group();
		this.groupContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.imageStartGame_i()];
		return t;
	};
	_proto.imageStartGame_i = function () {
		var t = new eui.Image();
		this.imageStartGame = t;
		t.bottom = 40;
		t.height = 93;
		t.horizontalCenter = 0;
		t.source = "start_png";
		t.width = 226;
		return t;
	};
	return StartPageSkin;
})(eui.Skin);