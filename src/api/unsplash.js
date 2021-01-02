import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l0T7QL2Ylp97Ba2obyG32eLElh0eDAjH8BptPeLDGGs ",
  },
});
