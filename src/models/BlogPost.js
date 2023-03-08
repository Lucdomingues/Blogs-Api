module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        published: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },

        {
            timestamps: true,
            createdAt: 'published',
            updatedAt: 'updated',
            underscored: true,
        },
    );

    BlogPost.associate = (model) => {
        BlogPost.belongsTo(model.User,
            { foreignKey: 'userId', as: 'user' });
    };

    return BlogPost;
};