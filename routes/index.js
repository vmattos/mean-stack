
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/post');
var Schema = mongoose.Schema;

var contatoSchema = new Schema({
	nome: { type: String, required: true },
	telefone: { type: String, required: true }
});

var Contato = mongoose.model('contato', contatoSchema);
var conexoes = 0;

exports.index = function(req, res){
	conexoes++;
	console.log(conexoes);
	res.render('index', { title: 'Express' });
};

exports.adicionaContato = function(req, res) {
	var contato = new Contato(req.body);
	contato.save(function(error, contato) {
		if(error) res.send(500);

		res.send(201);
	});
}

exports.listaContatos = function(req, res) {
	Contato.find({}, function(error, contatos) {
		if(error) res.send(500);

		res.json({ contatos: contatos });
	});
}