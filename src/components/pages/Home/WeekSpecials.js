import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: (
      <>
        The famous Greek Salad features crispy lettuce, peppers, olives, and
        our Chicago-style feta cheese. It's garnished with crunchy garlic and
        rosemary croutons for a delightful burst of flavors.
      </>
    ),
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: (
      <>
        Our Bruschetta is a delicious treat made from grilled bread that's been
        smeared with garlic and seasoned with salt and olive oil.
      </>
    ),
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: (
      <>
        Our Lemon Dessert is a delightful and nostalgic treat straight from
        grandma's recipe book. Every ingredient has been carefully sourced to
        ensure an authentic and mouthwatering experience.
      </>
    ),
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This Week's Specials</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Explore Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
