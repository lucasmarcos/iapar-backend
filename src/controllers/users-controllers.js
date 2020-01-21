const Usuario = require('../models/Usuario');
const token = require('jsonwebtoken');
const validatorCadastro = require('../validators/cadastro/validators-cadastro');
const enviarEmail = require('../services/email-service');
const Builder = require('./BuilderUser/BuilderUser');

module.exports = {
  async index(req, res) {
    const users = await Usuario.findAll();

    return res.json(users);
  },

  async buscarUsuario(req, res) {
    const user = await Usuario.findOne({ where: { email } });
    return res.json(user);
  },

  async logar(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;
    const user = await Usuario.findOne({ where: { email, senha } });

    //aqui precisa ser conferido o tipo do usuário
    if (!user) {

    }
    return res.json(user);
  },

  async cadastrarUsuario(req, res) {
    const {
      nome, email, senha, cpf, cidade,
      rua, numero, bairro, cep, telefone, tipo_usuario
    } = req.body;

    //validar se usuário já existe
    console.log(tipo_usuario);
    const errors = await validatorCadastro.verificaBaseDados(email, cpf);
    if (errors.length === 0) {
      const user = await Usuario.create({
        nome, email, senha, cpf, cidade,
        rua, numero, bairro, cep, telefone, 
        tipo_usuario, token: 'false'
      });

      //enviar email de confirmação
      //enviarEmail.send('marcomattospetry@gmail.com');
      const tecnico = await Builder.construirTipoUsuario(req.body, user.id);

      return res.json({ user, tecnico });
    } else {
      return res.json(errors);
    }
  }, 
};