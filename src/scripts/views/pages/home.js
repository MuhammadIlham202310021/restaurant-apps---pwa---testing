import RestaurantData from '../../data/restaurant-data';
import cardComponent from '../templates/katalog-component';
import '../../components/carousel';

const Home = {
  async render() {
    return `
    <carou-sel></carou-sel>
    <div class='explore'>
        <h1>Explore Restaurant</h1>
      </div>
        <div class='katalog'></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantData();
    const restaurantList = document.querySelector('.katalog');
    restaurants.forEach((item) => {
      console.log();
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Home;
