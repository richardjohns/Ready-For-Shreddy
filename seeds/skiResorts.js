
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('resorts').insert([
        {id: 1, ski_resort: 'Mount Lyford', url: 'http://www.lyfordholidayhomes.co.nz/Image/renamed/eco%20lodge/Mt-Lyford_holiday_homes_accommodation_eco_lodge_luxury_hot-tub_motel.JPG', area: 'Canterbury', description: 'Mount Lyford Alpine Resort is a family-run ski resort in South Island, New Zealand. 146 kilometres by road from Christchurch, the resort also includes Mount Terako.'},
        {id: 2, ski_resort: 'Turoa', url: 'https://www.subaru.co.nz/sites/default/files/styles/ratio_3_x_2__2x_small_/public/field/teaser_image/Subaru%20Top%20Weekend%20carpark%202015_0.jpg?itok=ZjcXfDfd', area: 'Mount Ruapehu', description: 'Turoa is a large skifield on the south western side of Mount Ruapehu, the highest mountain in the North Island of New Zealand, in Tongariro National Park.'},
        {id: 3, ski_resort: 'Whakapapa', url: 'http://www.lyfordholidayhomes.co.nz/Image/renamed/eco%20lodge/Mt-Lyford_holiday_homes_accommodation_eco_lodge_luxury_hot-tub_motel.JPG', area: 'Mount Ruapehu', description: 'Ski area offering facilities for all levels, including an extensive beginners area with a cafe.'},
        {id: 4, ski_resort: 'Treble Cone', url: 'https://nzfrenzysouth.files.wordpress.com/2013/02/view-down-from-the-top-of-treble-cone-road-over-rocky-mountain-to-lake-wanaka.jpg', area: 'Queenstown', description: 'Treble Cone is the closest ski area to Wanaka, New Zealand. Treble Cone is the largest ski area in the South Island, boasting the longest vertical rise in the Queenstown Southern Lakes District. '},
        {id: 5, ski_resort: 'Cardrona', url: 'https://www.cardrona.com/media/1310/cardrona-landscape-2.jpg?anchor=center&mode=crop&width=1920&height=900&rnd=131281002460000000', area: 'Queenstown', description: 'Cardrona Alpine Resort is an alpine resort in New Zealands South Island. The ski field ranges from 1,260m to 1, 860m.The distribution of slopes is 25 beginner, 25% intermediate, 30% advanced and 20% expert.'},
        {id: 6, ski_resort: 'Ohau', url: 'http://www.lyfordholidayhomes.co.nz/Image/renamed/eco%20lodge/Mt-Lyford_holiday_homes_accommodation_eco_lodge_luxury_hot-tub_motel.JPG', area: 'Canterbury', description: 'Ohau is a small commercial skifield in the foothills of New Zealands Southern Alps, near the boundary between the Otago and Canterbury regions, and close to the southwestern shore of the lake of the same name.'},
        {id: 7, ski_resort: 'Coronet Peak', url: 'http://conciergenz.co.nz/sites/default/files/coronet%20peak.jpg', area: 'Queenstown', description: 'Coronet Peak is a commercial skifield in Queenstown, New Zealand located seven kilometres west of Arrowtown, on the southern slopes of the 1,649 metre peak which shares its name.'},
        {id: 8, ski_resort: 'The Remarkables', url: 'http://www.planetbluetours.com/wp-content/uploads/2016/03/the-remarkables.jpg', area: 'Queenstown', description: 'Skiing & snowboarding mountain with varied trails & terrain parks, plus cafes & an on-mountain bar.'},
        {id: 9, ski_resort: 'Mount Cheeseman', url: 'http://www.christchurchnz.com/media/6123/cheeseman.jpg', area: 'Canterbury', description: 'Mount Cheeseman is a club snowfield in New Zealands South Island, near the town of Springfield, about an hour and a half from Christchurch.Situated in a south-east - facing basin, it features two T- bar lifts and one learner tow'}
      ])
    })
}
