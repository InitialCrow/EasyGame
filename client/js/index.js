
//engine
((ctx)=>{
	let EZG_engine = {
		conf : {
			physicEngine : 'pixi',
			screenWidth : 500,
			screenHeight : 500,


		},

		c_mod : ctx.EZG_core_module,
		mod : ctx.EZG_module,
		type : null,
		engine : null,
		app : {

		},
		init : ()=>{
			if(EZG_engine.conf.physicEngine === "pixi"){

				EZG_engine.engine = self.c_mod.PIXI
				EZG_engine.app = new EZG_engine.engine.Application({width: EZG_engine.conf.screenWidth, height: EZG_engine.conf.screenHeight});
				EZG_engine.type="webgl"
				EZG_engine.engine.utils.sayHello(EZG_engine.type)
				document.body.appendChild(EZG_engine.app.view);
			}
			self.mod.EZG_player.log()
			self.mod.EZG_player.render(false, (assets)=>{
				let animePack = self.c_mod.EZG_pixi_loadSprite(assets)				

				self.mod.EZG_player.stickProp({'animePack' : animePack})
				
			})
			self.mod.EZG_player.animePack.run.play()
			EZG_engine.app.stage.addChild(self.mod.EZG_player.animePack.run)

		},
		render : ()=>{
			if(EZG_engine.conf.physicEngine === "pixi"){
				console.log(EZG_engine.app.stage)
			}
		}
	}
	ctx.EZG_engine = EZG_engine
	self = EZG_engine;
})(window)