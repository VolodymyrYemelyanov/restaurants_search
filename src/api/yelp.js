import axios from 'axios';

export default axios.create({
  baseUrl: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authhorization:
      'Bearer jRoTkT_FjjUR9zezOLWCBZS2cI9m8_Qlj1ZSZ03Q_1GnE3P5FnzAgYNWHhfPUAAlrygwP-4OsDAxTMM-NDJWrsovP05TZ5WkPiMFU92atOWmjMvGcqTxkLualIN7XXYx'
  }
});
