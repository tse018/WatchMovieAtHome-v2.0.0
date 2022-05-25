import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import movie from './documents/movie.js';
import contribute from './documents/contribute.js';
import genre from './documents/genre.js';
import nationality from './documents/nationality.js';
import company from './documents/company.js';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    movie,
    contribute,
    genre,
    nationality,
    company
  ]),
})
