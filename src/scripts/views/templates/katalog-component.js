import API_ENDPOINT from '../../globals/api-endpoint';

const katalogComponent = (cardItem) => `
    <div class="card" tabindex="0">
      <div class="card-image">
        <div class="city">
            ${cardItem.city}
        </div>
        <img class="lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + cardItem.pictureId}" alt="Gambar Restaurant" />
      </div>

      <div class="card-content">
        <p class="card-rating">Rating : ${cardItem.rating}</p>
        <h1><a class="card-name" href="#/detail/${cardItem.id}">${
  cardItem.name}</a></h1>
        <p class="card-description">
            ${cardItem.description.substring(0, 120)}...
        </p>
      </div>
    </div>
`;

export default katalogComponent;
