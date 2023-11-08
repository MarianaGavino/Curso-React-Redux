import axios from 'axios';

export const getElements = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch(err => console.log(err));
}

export const getElementDetails = (element) => {
    return axios.get(element.url)
    .then(res => res.data)
    .catch(err => console.log(err));
}