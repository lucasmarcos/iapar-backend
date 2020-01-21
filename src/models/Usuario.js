const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      foto: DataTypes.BLOB,
      cpf: DataTypes.STRING,
      cidade: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cep: DataTypes.STRING,
      telefone: DataTypes.STRING,
      tipo_usuario: DataTypes.STRING,
      token: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = Usuario;
