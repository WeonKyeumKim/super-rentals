import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.rental = EmberObject.create({
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  });

  test('should display rental details', async function(assert) {
    /* component 의 output 을 just verify 한다. */
    await render(hbs`{{rental-listing rental=rental}}`);
    /* expected result from querySelector is 'test-title' */
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title');
    /* trim() removes space between Owner: and test-owner */
    assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner:test-owner');
  });

  test('should toggle wide class on click', async function(assert) {
    /* component 의 output 을 verify 한다. */
    await render(hbs`{{rental-listing rental=rental}}`);
    /* expected result 는 small image 이다. */
    assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
    await click('.image');
    /* expected result 는 wide image 이다. */
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');

  });

});
