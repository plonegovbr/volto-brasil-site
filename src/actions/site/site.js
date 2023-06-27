import { GET_SITE } from '../../constants/ActionTypes';

/**
 * Get the Site information.
 * @function getSite
 * @returns {Object} site info
 */
export function getSite() {
  return {
    type: GET_SITE,
    request: {
      op: 'get',
      path: '/@site',
    },
  };
}
