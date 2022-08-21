import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Lily',
            email: 'decorativelily@gmail.com',
            password: bcrypt.hashSync('Decorativelily#1', 8),
            isAdmin: true,
        },
        {
            name: 'Dominique',
            email: 'dominiquemcastaneda@yahoo.com',
            password: bcrypt.hashSync('DominiqueCastaneda#1', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Name',
            category: 'Category',
            image: '/images/decorativelily.JPG',
            price: 1,
            countInStock: 1,
            brand: 'Brand',
            rating: 5,
            numReviews: 0,
            description: 'description',
        },
    ],
};
export default data;