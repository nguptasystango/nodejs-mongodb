const dorms = require('../../lib/places').dorms
///const uuid = require('uuid/v4')
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
        //type: DataTypes.UUID, 
        //defaultValue: DataTypes.UUIDV4
      }, 
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      taskType: {
        type: DataTypes.STRING,
        trim: true,
        lowercase: true,
        enum: ['yearly', 'monthly', 'weekly'],
        allowNull: true
      },  
      departmentType: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM([
            'deliveryAssociate',
            'salesAssociate',
            'customer',
            'admin'
          ])
        ),
        allowNull: false
      }, 
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    { timestamps: false }
  )  
  sequelizePaginate.paginate(User)
  return User
}