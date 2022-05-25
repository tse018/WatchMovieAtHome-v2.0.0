export default {
   title: 'Movies',
   name: 'movie',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
         description: 'Offical english movie title ',
         validation: Rule => Rule.required().min(1).max(80).error('Please type in movie title')
      },
      {
         title: 'Slug',
         name: 'slug',
         type: 'slug',
         description: 'Click on generate or type in prefered slug',
         options: {
            source: 'title',
         },
         validation: Rule => Rule.required().error('need to fill in this slug')
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
         description: 'Fill in details about the movie plot'
      },
      {
         title: 'Length',
         name: 'length',
         type: 'string',
         description: 'format example: 1h 32m',
      },
      {
         title: 'Trailer URL',
         name: 'trailerUrl',
         type: 'string',
         description: 'Please use youtube video id, by going to youtube share and find this video ID',
         validation: Rule => Rule.required().warning('fill this only if you want this movie trailer at the front page')
      },
      {
         title: 'Image',
         name: 'image',
         type: 'image',
         description: 'Product image',
         options: {
            hotspot: true // option to edit picture size in sanity 
         },
      },
      {
         title: 'Nationalities',
         name: 'nationalities',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'nationality'}]
         }]
      },
      {
         title: 'Directors',
         name: 'directors',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'contribute'}]
         }]
      },
      {
         title: 'Producers',
         name: 'producers',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'contribute'}]
         }],
      },
      {
         title: 'Writers',
         name: 'writers',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'contribute'}]
         }]
      },
      {
         title: 'Casts',
         name: 'casts',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'contribute'}]
         }]
      },
      {
         title: 'Genres',
         name: 'genres',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'genre'}]
         }]
      },
      {
         title: 'Age limit',
         name: 'ageLimit',
         type: 'number',
         description: 'Please type in number between 1-18',
         validation: Rule => Rule.warning().min(1).max(18).error('Age most be between 3-18')
      },
      {
         title: 'Rating',
         name: 'rating',
         type: 'number',
         description: 'Rating value 1-10, 1 is low satisfied and 10 is super satisfied'
      },
      {
         title: 'Price',
         name: 'price',
         type: 'number',
         description: 'NOK'
      },
      {
         title: 'Release Date',
         name: 'releaseDate',
         type: 'date',
         description: 'United States',
         options: {
            dateFormat: 'DD-MMM-YYYY',
            calenderTodayLabel: 'Today'
         }
      },
      {
         title: 'Production Company',
         name: 'productionCompany',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'company'}]
         }]
      },
      {
         title: 'Distributor Company',
         name: 'distributorCompany',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'company'}]
         }]
      },
   ],
}