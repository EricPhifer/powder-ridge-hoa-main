// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import faqs from './faqs';
import ccrs from './ccrs';
import acc from './acc';
import minutes from './minutes';
import boardMembers from './boardMembers';
import MotionMade from '../components/MotionMade';
import OtherMembers from '../components/OtherMembers';
import AccMembers from '../components/AccMembers';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    boardMembers,
    acc,
    faqs,
    ccrs,
    minutes,
    MotionMade,
    OtherMembers,
    AccMembers,
  ]),
});
