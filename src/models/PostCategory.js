module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                foreignKey: true,
            },
            categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                foreignKey: true,
            }
        },

        {
            timestamps: false,
            underscored: true,
        },
    );

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogposts',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId'
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId'
        });
    };

    return PostCategory;
};