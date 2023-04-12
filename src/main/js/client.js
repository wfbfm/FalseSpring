'use strict';

import { wrap } from 'rest';
import defaultRequest from 'rest/interceptor/defaultRequest';
import mime from 'rest/interceptor/mime';
import { child } from 'rest/mime/registry';
import { hal } from 'rest/mime/type/application/hal';

const registry = child();

registry.register('application/hal+json', hal);

export default wrap(mime, { registry: registry })
	.wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' } });