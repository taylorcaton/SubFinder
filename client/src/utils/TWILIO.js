import axios from 'axios';

export default {
  sendText: number => {
    return axios.post("/api/twilio/", number);
  }
};
