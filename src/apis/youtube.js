import axios from "axios";

const KEY = "AIzaSyANY7g_0iG3ii3S_5KVz5w6Ymj9h2V51vU";

export const baseParams = { part: "snippet", maxResults: 5, key: KEY };

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
