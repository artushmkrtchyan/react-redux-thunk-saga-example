import { fetcher } from './fetch';
import { _axios } from './axios';

export const fetchTodos = (start, limit) => fetcher(`/todos?_start=${start}&_limit=${limit}`);
export const fetchUsers = () => fetcher("/users?_limit=7");
export const fetchUser = (userId) => fetcher(`/users/${userId}`);
export const getTodos = (start, limit) => _axios(`/todos?_start=${start}&_limit=${limit}`);
export const getUsers = () => _axios("/users?_limit=5");
export const getUser = (userId) => _axios(`/users/${userId}`);
export const login = credentials => fetcher('/login', 'POST', credentials);