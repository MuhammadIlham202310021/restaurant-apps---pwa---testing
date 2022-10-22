Feature('Liking Restaurant');

Scenario('Liked one of the restaurants & Cancel liking the restaurant.', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card-content');
  I.seeElement('.card-name');
  await I.grabTextFrom(locate('.card-name').first());
  I.click(locate('.card-name').first());
  I.waitForElement('.detail');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.click(locate('.card-name').first());
  I.waitForElement('.detail');

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card-name');
});

// Scenario('Menyukai salah satu restaurant dan membatalkannya', async ({ I }) => {
//   I.amOnPage('/');
//   I.wait(2);
//   I.seeElement('.card-name');
//   await I.grabTextFrom(locate('.card-name').first());
//   I.click(locate('.card-name').first());
//   I.wait(2);
//   I.click('#likeButton');
//   I.amOnPage('/#/favorite');
//   I.click(locate('.card-name').first());
//   I.wait(2);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');
//   I.amOnPage('/#/favorite');
//   I.dontSeeElement('.card-name');
// });
