const { Model, DataTypes } = require('sequelize')

class VendaAnimal extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        data_venda: DataTypes.DATE,
        motivo: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        destino: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animal, { foreignKey: 'id_animal', as: 'animal' })
  }
}

module.exports = VendaAnimal