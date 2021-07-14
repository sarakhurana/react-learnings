import axiosConfig from "../api/axiosConfig";
import { GET_POSTS } from "../constants/Constants";
import { getPostService } from "./GetPostsService";

describe("getPostService", () => {
  const posts = [
    {
      postId: "1",
      body: "hello!",
    },
    {
      postId: "2",
      body: "new post",
    },
  ];
  it("should make success api call", async () => {
    jest.spyOn(axiosConfig, "get").mockImplementation().mockResolvedValue({
      status: 200,
      data: posts,
    });

    const response = await getPostService();

    expect(axiosConfig.get).toHaveBeenLastCalledWith(GET_POSTS);
    expect(response.result).toBe(posts);
  });

  it("should return error if api call fails", async () => {
    jest
      .spyOn(axiosConfig, "get")
      .mockImplementation()
      .mockRejectedValue({
        response: {
          error: "failed",
          status: 404,
        },
      });

    const response = await getPostService();

    expect(axiosConfig.get).toHaveBeenLastCalledWith(GET_POSTS);
    expect(response.error).toBe(true);
  });
});
