exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Accomodation').del()
    .then(function () {
      // Inserts seed entries
      return knex('Accomodation').insert([
        {id: 1, name: 'Coronation Lodge', intro: 'Coronation Lodge offers quality accommodation that is centrally located in Queenstown, NZ. We offer clean and comfortable lodge rooms.', image: '/images/coronation-lodge.jpg', website: 'http://www.coronationlodge.co.nz/'},
        {id: 2, name: 'Blue Peaks Lodge', intro: 'Motel accommodation in studio, 1 & 2 bedroom units most with kitchen facilities an easy 5 minutes walk from the centre of Queenstown.', image: '/images/blue-peaks-lodge.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/blue-peaks-lodge'},
        {id: 3, name: 'Four Seasons Motel', intro: 'Central friendly,clean and warm units.', image: '/images/four-seasons-motel.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/four-seasons-motel'},
        {id: 4, name: 'Autoline Motel', intro: 'These recently renovated studios, one and two bedroom apartments are self-contained, stylishly appointed and all fitted with the latest appliances.', image: '/images/autoline-motel.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/autoline-motel'},
        {id: 5, name: 'Glenorchy Motel', intro: 'Glenorchy Motel located 45 mins from Queenstown sits nestled in this picturesque small tow in the midst of the most stunning natural scenery.', image: '/images/glenorchy-motels.jpg', website: 'https://www.queenstownnz.co.nz/assets/Tourism-Operators/images/_resampled/CroppedFocusedImageWzE0NjAsMTE3MiwieCIsNTIwXQ/Glenorchy-Motels-2.JPG'},
        {id: 6, name: 'The Lofts', intro: 'The Lofts Queenstown is located in the heart of Queenstown, within walking distance to all major attractions, bars and cafes.', image: '/images/the-lofts.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/the-lofts'},
        {id: 7, name: 'Settlers Cottage Motel', intro: 'Settlers Cottage Motel, Arrowtown, offers attractive, comfortable motel cottage accommodation in a tranquil setting.', image: '/images/settlers-cottage-motel.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/settlers-cottage-motel'},
        {id: 8, name: 'Earnslaw Lodge Motel', intro: 'Fantastic views from our lake facing rooms. Spacious and comfortable. Warm, friendly NZ managers. 1km walk to centre of town.', image: '/images/earnslaw-lodge-motel.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/earnslaw-lodge-motel'},
        {id: 9, name: 'Shades of Arrowtown', intro: 'Shades of Arrowtown offers you a relaxing stay at a convenient central location only a minutes stroll from Arrowtowns main street.', image: '/images/shades-of-arrowtown.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/shades-of-arrowtown'},
        {id: 10, name: 'Shotover Lodge', intro: 'Comfortable self-contained units with a private balcony or patio, just a 7 minutes drive from central Queenstown', image: '/images/shotover-lodge.jpg', website: 'https://www.queenstownnz.co.nz/accommodation/motels/listing/shotover-lodge'}
              ])
            })
        }
