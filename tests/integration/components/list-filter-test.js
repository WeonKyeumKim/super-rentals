import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
  const FILTERED_ITEMS = [{city: 'San Francisco'}];
  /*
    we want our actions to return promises,
    since they are potentially fetching data asynchronously
  */
  test('should initially load all listings', async function(assert) {
    /*
      we want our actions to return promises, since they
      potentially fetching data asynchronously
    */
    assert.expect(2);
    this.set('filterByCity', () => resolve({ results: ITEMS }));

    /*
      you can set up and use your component in the same way your application
      will use it.
    */
    await render(hbs`
      {{#list-filter filter=(action filterByCity) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);

    /*
      settled helper 는 result 를 assert 하기 위하여 our test 의 끝에
      call 한다.
      settled helper 는 주어진 function callback 을 running 전에
      complete 하기 위한 모든 asynchronously tasks 에 대하여 wait 한다.
      .city is HTML class name
    */
    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 3);
      assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
    });
  });

  test('should update with matching listings', async function (assert) {
    this.set('filterByCity', (val) =>  {
      if (val === '') {
        return resolve({
          query: val,
          results: ITEMS });
      } else {
        return resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });

    await render(hbs`
      {{#list-filter filter=(action filterByCity) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);

    // keyup event to invoke an action that will cause the list to be filtered
    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 83);

    return settled().then(() => {
      assert.ok(this.element.querySelectorAll('.city'), 'One result returned');
      assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
    });
  });

});
