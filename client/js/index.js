
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
			self.mod.EZG_player.render(false, (assets)=>{
				let textureArr = []
				for(i in assets.run.seq){
					let path = assets.run.path + assets.run.seq[i] + assets.run.ext
					let texture = EZG_engine.engine.Texture.from(path);

					textureArr.push(texture)
				}


				let animated = new EZG_engine.engine.AnimatedSprite(textureArr);

			})

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