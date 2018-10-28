export default function() {
  /* defined into adapter */
  this.namespace = '/api';
  /* rentals: route name */
  let rentals =
      [{
  /* async
  this.get('rentals', function() {
    return {
      data: [{
  */
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'M-Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'M-Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'M-Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];
  /* async
    };
  });
  */

  /* added for sync */
  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
        /* filter: method */
        let filteredRentals = rentals.filter(function(i) {
          /*
            filter: filtered array 를 return 하는 enumerable function
            -1: array 에서 찾지 못한 경우
          */
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        })
        return { data: filteredRentals }
    } else {
      return { data: rentals }
    }
  });
}
