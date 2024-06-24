import axios from 'axios';
import { getGameIdentifier } from './utils';

const BASE_URL = 'http://localhost:8080/api';
const api = axios.create({
  baseURL: BASE_URL,
});

// Interceptors for logging
api.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

api.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response.data, null, 2));
  return response;
}, error => {
  console.error('Error:', JSON.stringify(error.response?.data || error.message, null, 2));
  return Promise.reject(error);
});

export const createGame = async () => {
  const response = await api.post('/games');
  localStorage.setItem('gameIdentifier', response.data.identifier);
  return response.data;
};

export const joinGame = async (identifier: string, name: string) => {
  const response = await api.post(`/games/${identifier}/join`, { name });
  localStorage.setItem('gameIdentifier', identifier);
  return response.data;
};

export const submitScore = async (playerName: string, hole: number, score: number) => {
  const identifier = getGameIdentifier();
  const response = await api.post(`/games/${identifier}/players/${playerName}/score`, {
    hole: hole,
    score: score
  });
  return response.data;
};

export const getPlayers = async () => {
  const identifier = getGameIdentifier();
  const response = await api.get(`/games/${identifier}/players`);
  return response.data;
};
