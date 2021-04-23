/* eslint-disable */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import faqs from './faqs';
import ccrs from './ccrs';
import committees from './committees';
import termsConditions from './termsConditions';
import privacyPolicy from './privacyPolicy';
import minutes from './minutes';
import treasurersReport from './treasurersReport';
import boardMembers from './boardMembers';
import OtherMembers from '../components/OtherMembers';
import Expenses from '../components/Expenses';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    boardMembers,
    faqs,
    ccrs,
    committees,
    termsConditions,
    privacyPolicy,
    minutes,
    treasurersReport,
    OtherMembers,
    Expenses,
  ]),
});
