import axios from "axios";
import axiosConfig from "../api/axiosConfig";
import { GET_POSTS } from "../constants/Constants";

export const getPostService = async () => {
  try {
    const response = await axiosConfig.get(GET_POSTS);
    return { error: false, result: response.data };
  } catch (error) {
    return { error: true, result: {} };
  }
};
