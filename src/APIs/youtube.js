import axios from 'axios';



const KEY = 'AIzaSyAbNQfwEPruRq57AS5rEmKzxCbq2GgmtTE';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
