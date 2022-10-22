import RestaurantDataIDB from '../../data/restaurant-idb';
import cardComponent from '../templates/katalog-component';
import '../../components/carousel';

const Favorite = {
  async render() {
    return `
    <carou-sel></carou-sel>
    <h1 class='favorit'>Favorite Cafe</h1>
        <div class='katalog'></div>        
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector('.katalog');
    restaurants.forEach((item) => {
      console.log(item);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Favorite;
