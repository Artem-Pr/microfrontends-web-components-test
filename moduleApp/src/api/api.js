import axios from 'axios';


const getCustomers = request => params => request.post('/api/module/alfa/customers', params);


export const api = {
    getCustomers: getCustomers(axios)
};