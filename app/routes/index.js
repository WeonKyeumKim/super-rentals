import Route from '@ember/routing/route';

export default Route.extend({
  //* user 가 root url ( / ) enter 시에 rentals 로
  //* transition 하게 한다.
    beforeModel() {
      this.replaceWith('rentals');
    },
});
