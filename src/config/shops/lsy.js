export default  {
	menus:[
		{ 
			title: '荤菜类', 
			cats: [
				{ code:'A1', title:'牛肉串', price:220, mount:5, unit:'串' },
				{ code:'A2', title:'牛腰子', price:220, mount:5, unit:'串' },
				{ code:'A3', title:'羊肉串', price:220, mount:5, unit:'串' },
				{ code:'A4', title:'羊腰子', price:220, mount:1, unit:'串' },
				{ code:'A5', title:'猪肉串', price:220, mount:5, unit:'串' },
				{ code:'A6', title:'板筋', price:200, mount:5, unit:'串' },
				{ code:'A7', title:'油边', price:200, mount:5, unit:'串' },
				{ code:'A8', title:'麻辣排骨串', price:220, mount:5, unit:'串' },
				{ code:'A9', title:'五花肉金针菇', price:200, mount:2, unit:'串' },
				{ code:'A10', title:'鸡脆骨', price:280, mount:5, unit:'串' },
				{ code:'A11', title:'鸡胗', price:160, mount:5, unit:'串' },
				{ code:'A12', title:'鸡头', price:210, mount:3, unit:'串' },
				{ code:'A13', title:'翅中', price:100, mount:1, unit:'串' },
				{ code:'A14', title:'鸡架', price:200, mount:5, unit:'串' },
				{ code:'A15', title:'心管', price:180, mount:5, unit:'串' },
				{ code:'A16', title:'沙肝', price:220, mount:5, unit:'串' },
				{ code:'A17', title:'熟筋', price:220, mount:5, unit:'串' },
				{ code:'A18', title:'肥肠', price:200, mount:5, unit:'串' },
				{ code:'A19', title:'猪腰', price:120, mount:1, unit:'串' },
				{ code:'A20', title:'猪手', price:200, mount:1, unit:'份' },
				{ code:'A21', title:'肉皮', price:200, mount:5, unit:'串' },
			]
		},
		{ 
			title: '素菜类', 
			cats: [
				{ code:'B1', title:'辣椒', price:50, mount:1, unit:'串' },
				{ code:'B2', title:'大蒜', price:50, mount:1, unit:'串' },
				{ code:'B3', title:'面筋', price:100, mount:2, unit:'串' },
				{ code:'B4', title:'干豆腐', price:120, mount:2, unit:'串' },
				{ code:'B5', title:'台湾香肠', price:140, mount:2, unit:'串' },
				{ code:'B6', title:'菜卷', price:220, mount:1, unit:'份' },
				{ code:'B7', title:'花生米', price:150, mount:1, unit:'份' },
				{ code:'B8', title:'毛豆', price:150, mount:1, unit:'份' },
				{ code:'B9', title:'韭菜', price:160, mount:1, unit:'份' },
				{ code:'B10', title:'豆角', price:160, mount:1, unit:'份' },
				{ code:'B11', title:'土豆', price:160, mount:1, unit:'份' },
				{ code:'B12', title:'鱼豆腐', price:160, mount:1, unit:'份' },
			]
		},
		{ 
			title: '锡纸类', 
			cats: [
				{ code:'C1', title:'锡纸茄子', price:160, mount:1, unit:'份' },
				{ code:'C2', title:'锡纸金针菇', price:250, mount:1, unit:'份' },
				{ code:'C3', title:'锡纸娃娃菜', price:250, mount:1, unit:'份' },
				{ code:'C4', title:'锡纸油麦菜', price:360, mount:1, unit:'份' },
				{ code:'C5', title:'锡纸大虾', price:400, mount:1, unit:'份' },
				{ code:'C6', title:'锡纸牛肚', price:450, mount:1, unit:'份' },
				{ code:'C7', title:'锡纸猪脑花', price:450, mount:1, unit:'份' },
			]
		},
		{ 
			title: '预定类', 
			cats: [
				{ code:'D1', title:'猪排', price:3880, mount:1, unit:'份' },
				{ code:'D2', title:'羊排', price:3880, mount:1, unit:'份' },	
			]
		},
		{ 
			title: '海鲜类', 
			cats: [
				{ code:'E1', title:'鱿鱼', price:160, mount:2, unit:'串' },
				{ code:'E2', title:'秋刀鱼', price:120, mount:1, unit:'份' },
				{ code:'E3', title:'虾', price:280, mount:1, unit:'份' },
				{ code:'E4', title:'鱼丸', price:240, mount:1, unit:'份' },
				{ code:'E5', title:'生蚝', price:300, mount:1, unit:'份' },
				{ code:'E6', title:'扇贝', price:660, mount:1, unit:'份' },
			]
		},
		{ 
			title: '主食类', 
			cats: [
				{ code:'F1', title:'面包', price:50, mount:1, unit:'个' },
				{ code:'F2', title:'馒头', price:50, mount:1, unit:'个' },	
			]
		},
		{ 
			title: '酒水类', 
			cats: [
				{ code:'G1', title:'生力', price:100, mount:1, unit:'瓶' },
				{ code:'G2', title:'雪花', price:70, mount:1, unit:'瓶' },
				{ code:'G3', title:'青岛', price:70, mount:1, unit:'瓶' },
				{ code:'G4', title:'江小白', price:200, mount:1, unit:'瓶' },
				{ code:'G5', title:'牛栏山', price:200, mount:1, unit:'瓶' },
				{ code:'G6', title:'可乐', price:50, mount:1, unit:'瓶' },
				{ code:'G7', title:'雪碧', price:50, mount:1, unit:'瓶' },
				{ code:'G8', title:'芬达', price:50, mount:1, unit:'瓶' },
				{ code:'G9', title:'王老吉', price:50, mount:1, unit:'瓶' },
			]
		}
	],
	welware:[
		{ min: 1500, max: 3000, free: [

			{ code:' E4', title:'鱼丸', count:1, amount:'free', unit:'份' }

		] },
		{ min: 3000, max: 5000, free: [ 

			{ code:'A11', title:'鸡胗', count:1, amount:'free', unit:'串' },

			{ code:' G6', title:'可乐', count:3, amount:'free', unit:'瓶' },

		] },
		{ min: 5000, max: 1000000, free: [ 

			{ code:'A11', title:'鸡胗', count:1, amount:'free', unit:'串' },

			{ code:'B12', title:'鱼豆腐', count:1, amount:'free', unit:'份' },

			{ code:' G6', title:'可乐', count:3, amount:'free', unit:'瓶' },

		] }
	]
}