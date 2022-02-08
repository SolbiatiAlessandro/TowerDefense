export default class NumberBox extends Phaser.Group {
	constructor(game, bgasset, val, x, y, parent){
		super(game, parent);
		this.create(x, y, bgasset);
		var style = {
			font: "30px arial",
			align: "center",
			fill: "#fff"
		};
		this.txtValue = new Phaser.Text(
			this.game,
			x + 35,
			y + 45,
			val.toString(),
			style
		);
		this.txtValue.anchor.setTo(.5,.5);
		this.add(this.txtValue);
	}

	setValue(val){
		this.txtValue.text = val.toString();
	}
}
