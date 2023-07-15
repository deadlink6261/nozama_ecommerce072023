import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.jpg',
    price: 110,
    countInStock: 7,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 7,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.jpg',
    price: 110,
    countInStock: 15,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 8,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    category: 'Pants',
    image: '../images/p3.jpg',
    price: 200,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 5,
    description: 'high quality product',
  },
  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    category: 'Pants',
    image: '../images/p4.jpg',
    price: 75,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 15,
    description: 'high quality product',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
