import Component from '@ember/component';

export default Component.extend({
  //* want the image to be smaller at first
  isWide: false,
  actions: {
    toggleImageSize() {
      //* isWide 의 value 를 on/off 한다.
      this.toggleProperty('isWide');
    }
  }
});
