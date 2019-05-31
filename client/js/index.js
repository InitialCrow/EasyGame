
//engine
((ctx)=>{
	let EZG_engine = {
		conf : {
			physicEngine : 'pixi',
			screenWidth : 500,
			screenHeight : 500,


		},
		mod : ctx.EZG_module,
		type : null,
		engine : null,
		app : {

		},
		init : ()=>{
			if(EZG_engine.conf.physicEngine === "pixi"){

				EZG_engine.engine = self.mod.PIXI
				EZG_engine.app = new EZG_engine.engine.Application({width: EZG_engine.conf.screenWidth, height: EZG_engine.conf.screenHeight});
				EZG_engine.type="webgl"
				EZG_engine.engine.utils.sayHello(EZG_engine.type)
				document.body.appendChild(EZG_engine.app.view);
			}
			self.mod.EZG_player.log()


		},
		render : ()=>{
			if(EZG_engine.conf.physicEngine === "pixi"){
				EZG_engine.engine.ticker.add(()=>{

				})
			}
		}
	}
	ctx.EZG_engine = EZG_engine
	self = EZG_engine;
})(window)