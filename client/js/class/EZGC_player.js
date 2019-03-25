export default class EZGC_player{
	constructor(name, hp) {
		this.name = name || 'EZG_player'
		this.hp = hp || 20
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
	render(bodify = false){

	}
}