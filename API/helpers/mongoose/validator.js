
module.exports = function(name, definition, obj, done){
	var model = new require('./modelBuilder')(name, definition);
	model(obj).validate(function(err){
       if (err) done({operationResult:1, result: err})
       else done({operationResult:0});
    });
}
