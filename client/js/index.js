
//engine
((ctx)=>{
	let EZG_engine = {
		conf : EZG_core_module.conf,

		c_mod : ctx.EZG_core_module,
		mod : ctx.EZG_module,
		type : null,
		engine : null,
		app : {

		},
		init : ()=>{

			if(EZG_engine.conf.conf.engine === "pixi"){
				EZG_engine.engine = self.c_mod.PIXI
				EZG_engine.app = new EZG_engine.engine.Application({width: EZG_engine.conf.conf.screen.w, height: EZG_engine.conf.conf.screen.h});
				EZG_engine.type="webgl"
				EZG_engine.engine.utils.sayHello(EZG_engine.type)
				document.body.appendChild(EZG_engine.app.view);
			}
			self.mod.EZG_player.log()
			self.mod.EZG_player.render(false, (assets)=>{
				let animePack = self.c_mod.EZG_pixi_loadAnimatedSprite(assets)

				self.mod.EZG_player.stickProp({'animePack' : animePack})

			})
			self.mod.EZG_player.animePack.run.play()


			EZG_engine.app.stage.addChild(self.mod.EZG_player.animePack.run)


			let data = self.mod.EZG_world.createGround()
			let ground = self.c_mod.EZG_pixi_loadTillingSprite(data)
			EZG_engine.app.stage.addChild(ground)
		},
		render : ()=>{
			console.log(self.mod.EZG_player)
			if(EZG_engine.conf.conf.engine === "pixi"){

				EZG_engine.app.ticker.add((delta)=> {
					self.mod.EZG_player.animePack.run.position.y +=1
				});
			}
		}
	}
	ctx.EZG_engine = EZG_engine
	self = EZG_engine;
})(window)