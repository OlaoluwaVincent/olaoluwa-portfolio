import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import pageInfo from './pageInfo';
import social from './social';
import skill from './skill';
import project from './project';
import experience from './experience';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([pageInfo, skill, experience, project, social]),
});
