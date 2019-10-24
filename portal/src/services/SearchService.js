import axios from 'axios';

var apiClient = axios.create({
  baseURL: 'https://search-nextgen-poc-3ngoun6ibbyui33nev4doun6g4.us-west-2.es.amazonaws.com/swagger/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  search(query) {
    const data = {
      "_source": ["id", "name", "description", "url"],
      "query": {
        "query_string": {
          "query": "*" + query + "*"
        }
      },
      "size": 10000
    };
    return apiClient.post('_search', data);
  }
}
