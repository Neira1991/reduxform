import { create } from 'apisauce';
import { API_URL } from '../config';
import storage from '../storage';
import getMonth from '../utils/getMonth';
import getDay from '../utils/getDay';

const token = storage.load('lbtoken');

const api = create({
  baseURL: API_URL,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  },
  timeout: 20000
});

class Api {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  static getComments = async () => {
    try {
      const response = await api.get(`/comments`);
      return response.data;
    } catch (error) {
      return new Error(error);
    }
  };

  static getUserBirthDay = async () => {
    const month = getMonth();
    const day = getDay();
    try {
      const response = await api.get(`/users?access_token=${token.id}`, {
        filter: { where: { birthDate: { regexp: `-${month}-${day}` } } }
      });
      return response.data;
    } catch (error) {
      return new Error(error);
    }
  };

  static emailUserExist = async email => {
    try {
      const response = await api.get(`/users?access_token=${token.id}`, {
        filter: { where: { email } }
      });
      return response.data;
    } catch (error) {
      return new Error(error);
    }
  };

  static postUser = async values => {
    const {
      firstName,
      lastName,
      email,
      password,
      Address,
      phone,
      typeId,
      idNumber
    } = values;

    const body = {
      email,
      password,
      firstName,
      lastName,
      address: Address,
      phone,
      typeId,
      idNumber
    };

    try {
      const response = await api.post(`/users`, body);
      return response.data;
    } catch (error) {
      return new Error(error);
    }
  };
}

export default Api;
