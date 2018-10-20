import { module, test } from 'qunit';
import { click, visit, currentURL, fillIn, triggerKeyEvent } from '@ember/test-helpers';
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

  /*
    fillIn helper 는 주어진 selector 에 match 하는 input field 안에
    주어진 text 를 fills in 한다.
    selector .list-filter input 을 사용하여 component 안에 search input 을
    locate 한다.
    search input 안에 search criteria 안에 search criteria 로써 Seattle 을
    fill 하고, user typing 을 simulate 하는 69 ('e' key) 의 code 로
    same field 로 keyup event 를 send 한다.
  */

  test('should filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });

  //test('should filter the list of rentals by city.', async function (assert) {
  //});

  //test('should show details for a selected rental', async function (assert) {
  //});
});
