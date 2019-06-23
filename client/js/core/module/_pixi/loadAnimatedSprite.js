export const EZG_pixi_loadAnimatedSprite = (assets)=>{

	let animePack = {}
	let props = Object.getOwnPropertyNames(assets)


	for(let i in props){
		var textureArr = []

		for(let j in assets[props[i]].seq){
			var path = assets[props[i]].path + assets[props[i]].seq[j] + assets[props[i]].ext
			var texture = EZG_engine.engine.Texture.from(path)
			textureArr.push(texture)
		}
		animePack[props[i]] = new EZG_engine.engine.AnimatedSprite(textureArr) 
		

	}
	return animePack
}