import axiosConfig from "../api/axiosConfig";
import { CREATE_POST } from "../constants/Constants";
import { createPostService } from "./CreatePostService";

describe("createPostService", () => {
  it("should make success api call with given post", async () => {
    jest.spyOn(axiosConfig, "post").mockImplementation().mockResolvedValue({
      status: 200,
      data: true,
    });
    const post = {
      postId: "1",
      body: "hello!",
    };

    const response = await createPostService(post);

    expect(axiosConfig.post).toHaveBeenLastCalledWith(CREATE_POST, post);
    expect(response.result).toBe(true);
  });

  it("should return error if api call fails", async () => {
    jest
      .spyOn(axiosConfig, "post")
      .mockImplementation()
      .mockRejectedValue({
        response: {
          error: "failed",
          status: 404,
        },
      });
    const post = {
      postId: "1",
      body: "hello!",
    };

    const response = await createPostService(post);

    expect(axiosConfig.post).toHaveBeenLastCalledWith(CREATE_POST, post);
    expect(response.error).toBe(true);
  });
});
