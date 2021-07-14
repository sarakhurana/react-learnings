import axios from "axios";
import axiosConfig from "../api/axiosConfig";
import { CREATE_POST } from "../constants/Constants";

export const createPostService = async (post) => {
  try {
    const response = await axiosConfig.post(CREATE_POST, post);
    return { error: false, result: response.data };
  } catch (error) {
    return { error: true, result: {} };
  }
};
