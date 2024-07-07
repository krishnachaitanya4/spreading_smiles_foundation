import childrensDay from '../../assets/img/events/childrensDay.jpg'
import career from '../../assets/img/events/career.jpg'
import food from '../../assets/img/events/food.jpg'
import books from '../../assets/img/events/books.jpg'
import { StaticImageData } from 'next/image'

interface Data{
    photo:StaticImageData,
    heading:string,
    description:string,
    link:string
}

const events:Data[] = [
    {
        'photo':childrensDay,
        'heading':"Children's Day Celebration",
        description:"A Day of Joy and Learning for Young Minds - Our annual Children's Day celebration is a heartwarming event filled with fun, games, and educational activities. We believe in nurturing the potential of every child and creating a day of pure happiness for our young stars.",
        link:'/childrens_day'
    },
    {
        photo:career,
        heading:"Career Guidance",
        description:"Guiding Futures, Inspiring Success - Join us for our career guidance and motivational programs, where we empower individuals to dream big and provide them with the tools and inspiration to achieve their career goals.",
        link:'/career_guidance'
    },
    {
        photo:food,
        heading:"Food Donation Initiatives",
        description:"Feeding Hope, One Meal at a Time - Our food donation initiatives are dedicated to addressing hunger and food insecurity in our community. Together, we provide nourishment and support to those in need.",
        link:'/food_donation'
    },
    {
        photo:books,
        heading:"Book Donation Camps",
        description:"Promoting Education Through the Gift of Knowledge - Join us in our mission to promote education by donating books to underserved individuals and communities. Together, we are enriching minds and expanding horizons.",
        link:'/book_donation'
    }
]
export default events;