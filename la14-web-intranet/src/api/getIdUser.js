import storage from '../storage';
import { API_URL } from '../config';

async function getUserId() {
  const token = storage.load('lbtoken');
  const data = await fetch(
    `${API_URL}/users/${token.id}/user-by-token?access_token=${token.id}`
  );
  await data.json();
}
export default getUserId;
