// src/services/employeeService.js
import api from './api';

const getAllEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};

const getEmployeeById = async (id) => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

const createEmployee = async (employeeData) => {
  const response = await api.post('/employees', employeeData);
  return response.data;
};

const updateEmployee = async (id, employeeData) => {
  const response = await api.put(`/employees/${id}`, employeeData);
  return response.data;
};

const deleteEmployee = async (id) => {
  await api.delete(`/employees/${id}`);
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
