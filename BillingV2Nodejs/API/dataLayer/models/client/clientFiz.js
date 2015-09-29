var ModelBase = require('../base/modelBase');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('underscore');
var phones = require(_modelsPath + 'client/phones').definition;
//var clientCounters = require(_modelsPath + 'client/clientCounters').definition;
var tariff = require(_modelsPath + 'tariff/tariff').definition;
var clientType = require(_modelsPath + 'client/clientTypeFiz').definition;
var clientPipelines = require(_modelsPath + 'client/clientPipelines').definition;

exports.definition = _.extend({
	accountNumber: {type: String},
	number: {type: String},
	name: {type: String, required: "#name required"},
	bin: {type: String, required: "#bin required"},
	rnn: {type: String},

	addressId: {type: Schema.Types.ObjectId, required: true},
	address: {type: String, required: "#address required"},
	phone: {type: String},
	email: {type: String},
	period: {type: Number},
	pipelines: clientPipelines,

	controllerId: {type: Schema.Types.ObjectId, required: true},
	clientType: clientType,
	kskId: {type: Schema.Types.ObjectId, ref: 'ksk'},
	abonentEntryDate: {type: Date},

	abonentAreaNumber: {type: String }

}, ModelBase);