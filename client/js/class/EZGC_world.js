export default class EZGC_world extends EZG_core_module.EZGC_core_class{
	constructor(name, hp, assets) {
		super()
		this.name = name || 'EZG_world'
		this.gravity = 1
		this.assets = assets || {
			ground : {
				path : "/assets/World/Ground/",
				seq : ["ground"],
				ext : ".png"
			}
		}


	}

	createGround(data = {w: 100, h:100, assets : null},  callback = false){
		data.assets = this.assets
		if(callback){
			callback(data)
		}
		else{

			return data
		}
	}

	render(bodify = false, callback = false){
		if(callback){
			return callback(this.assets)
		}
		else{
			return this.assets
		}
	}
}