const { Model, DataTypes } = require('sequelize');

class Tecnico extends Model {
    static init(sequelize) {
        super.init({
            //id: DataTypes.INTEGER,
            ano_formatura: DataTypes.STRING,
            tipo_registro: DataTypes.ENUM('CRMV', 'CREA'),
            registro_profissional: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'id', as: 'usuarios' });
        this.belongsToMany(models.Propriedade, { foreignKey: 'id_tecnico', through: 'propriedade_tecnicos', as: 'propriedades' });
    }
}

module.exports = Tecnico;
