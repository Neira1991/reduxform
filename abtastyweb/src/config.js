export const API_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
export const HOME_URL =
  process.env.REACT_APP_HOME_URL || 'http://localhost:3001';
export const AUTH_URL =
  process.env.REACT_APP_AUTH_URL || `${API_URL}/users/login`;
export const PATH_IMG = process.env.PATH_IMG || '/attachments/images/download/';
