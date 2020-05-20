module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
      "address",
      {
        fullAddress: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
    );

    Address.associate = (models) => {
        // 1:N relation
        Address.belongsTo(models.User, {
            foreignKey: 'owner'
        })
        // M:N
        // belongsToMany
    }
  
    return Address;
};