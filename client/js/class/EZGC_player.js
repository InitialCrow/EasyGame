export default class EZGC_player{
	constructor(name, hp, assets) {
		this.name = name || 'EZG_player'
		this.hp = hp || 20
		this.assets = assets || {
			run  : {
				path : "/assets/EZGC_player/Fox/Run/",
				seq : ["1","2","3","4","5","6"],
				ext : ".png"
			}
		}

	}
	/**
	 * @return {[log]} [return data class in log]
	 */
	log(){
		console.log('name of player -> ',this.name )
		console.log('hp : ', this.hp)
	}

	/**
	 * [render player class in canvas]
	 * @param  {Boolean} [needed for create hit box]
	 * @return {[object]} [EZG_body]
	 */
	render(bodify = false, callback = false){
		if(callback){
			return callback(this.assets)
		}
		else{

		}
	}
}