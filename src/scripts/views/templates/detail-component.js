import API_ENDPOINT from '../../globals/api-endpoint';

const detailComponent = (restaurant) => `
<section class="detail">
<div class="main">
  <div class="detail-1">
    <div class="detail-image">
    <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}" alt="${
  restaurant.name
}">
    </div>
    <div class="detail-text">       
        <h1>${restaurant.name}</h1>
        <h3>Rating : ${restaurant.rating}</h3>
        <h3>Alamat : ${restaurant.address} ${restaurant.city}</h3>
        <p class="description">${restaurant.description.substring(0, 300)}...</p>
    </div>
    <div id="likeButtonContainer"></div>  
    </div>

    <h1 class="pilih-menu">Pilihan Menu</h1>

    <div class="menus">
        <div class="detail-food">
        <h2>Food</h2>
            <ul class="food-list">
            ${restaurant.menus.foods.map((food) => `
                <li>${food.name}</li> `).join('')}
            </ul>
        </div> 
        <div class="detail-drink">
        <h2>Drink</h2>
            <ul class="drink-list">
            ${restaurant.menus.drinks.map((drink) => `
                <li>${drink.name}</li>`).join('')}
            </ul>
        </div> 
    </div>

    <div class="reviews">
    <h2>Review</h2>
    <div class="review-list">
    ${restaurant.customerReviews.map((review) => `
    <div class="review-item">
      <p class="review-item-user">Ditulis Oleh : ${review.name}</p>
      <p class="review-item-date">${review.date}</p>
      <p class="review-item-text">${review.review}</p>      
    </div>`).join('')}
  </div>
    </div>
</div>
<div id="likeButtonContainer"></div>
</section>
`;

export default detailComponent;
