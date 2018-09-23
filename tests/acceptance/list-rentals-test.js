import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
/* for mirage */
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  /* for mirage */
  setupMirage(hooks);

  /* test('visiting /list-rentals', async function(assert) {
    // given URL 을 load 한다.
    await visit('/list-rentals');
    // screen 의 specific part 를 click 한다
    // await click(".menu-about");
    assert.equal(currentURL(), '/list-rentals');
    // get current URL
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
  */

  test('visiting /', async function(assert) {
      await visit('/');
      assert.equal(currentURL(), '/rentals');
  })

  test('visiting /about', async function(assert) {
      await visit('/about');
      assert.equal(currentURL(), '/about');
  })

  test('visiting /contact', async function(assert) {
      await visit('/contact');
      assert.equal(currentURL(), '/contact');
  })

  test('should list available rentals', async function(assert) {
      await visit('/');
      assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  })

  //test('should filter the list of rentals by city.', async function (assert) {
  //});

  //test('should show details for a selected rental', async function (assert) {
  //});
});
