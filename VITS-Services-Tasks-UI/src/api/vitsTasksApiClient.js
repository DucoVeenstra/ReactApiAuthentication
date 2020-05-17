import axios from 'axios';

const vitsTasksApiClient = () => {
  const defaultOptions = {
    'Content-Type': 'application/json'
  }

  let instance = axios.create(defaultOptions);

  return instance;
}

export default vitsTasksApiClient();