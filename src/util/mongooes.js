module.exports = {
	mutilValueToObject : function(mongooes){
		return mongooes.map(mongooes => mongooes.toObject());
	},

	mongooesToObject : function(mongooes) {
		return mongooes ? mongooes.toObject() : mongooes;
	}
}