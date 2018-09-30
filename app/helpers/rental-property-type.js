import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

/*
  Ember Data models 로부터 user data 를 직접보여주지 않고
  our users 로 presenting 전에 data 를 manipulate 하기를
  원할때, our template 안에서 data 를 decorate 하기 위한
  handlebara template helpers 를 offer 한다.
*/

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';

}

export default helper(rentalPropertyType);
