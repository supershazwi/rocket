import sequelizePackage from 'sequelize';
import db from './models/index.mjs';

const { DatabaseError } = sequelizePackage;

const violateDbConstraint = async () => {
  try {
    const category = await db.Category.findOne({
      where: {
        name: [process.argv[2]],
      },
    });
    const associatedItem = await db.Item.create({
      name: process.argv[3],
      categoryId: category.id,
    });
    console.log(associatedItem);
  } catch (error) {
    if (error instanceof DatabaseError) {
      console.error('This is a database error!');
      console.error(error);
    } else {
      console.error(error);
    }
  }
};

violateDbConstraint();