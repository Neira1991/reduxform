import { GET_LIST, GET_ONE, CREATE } from 'admin-on-rest';
import storage from './storage';
import { API_URL } from './config';

const getUserByToken = async () => {
  const token = storage.load('lbtoken');
  const response = await fetch(
    `${API_URL}/users/user-by-token?access_token=${token.id}`
  );
  const data = await response.json();
  return data;
};

const addFiltersCapabilities = requestHandler => async (
  type,
  resource,
  params
) => {
  const userByToken = await getUserByToken();
  const newParams = params;
  switch (type) {
    case GET_LIST:
      if (
        resource === 'Notices' &&
        params.filter.name !== undefined &&
        type === 'GET_LIST'
      ) {
        return requestHandler('GET_LIST', 'Notices', {
          pagination: {},
          sort: {},
          filter: { name: { regexp: `.*${params.filter.name}.*` } }
        });
      }
      return requestHandler(type, resource, params);
    case GET_ONE:
      return requestHandler(type, resource, params);
    case CREATE:
      if (
        resource === 'Notices' ||
        'Classifieds' ||
        'Comments' ||
        'Surveys' ||
        'Events' ||
        'Galeries' ||
        'Requests' ||
        'Suggestions' ||
        'Links'
      ) {
        newParams.data.userId = userByToken.id;
      }
      return requestHandler(type, resource, newParams);

    default:
      return requestHandler(type, resource, params);
  }
};
export default addFiltersCapabilities;
