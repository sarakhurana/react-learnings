import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import PostView from "./PostView";
import configureMockStore from "redux-mock-store";
import axiosConfig from "../../api/axiosConfig";
import MockAdapter from "axios-mock-adapter";
import { GET_POSTS } from "../../constants/Constants";

const mockStore = configureMockStore();

jest.mock("../../containers/post/CreatePost", () => ({ isCreatePost }) => {
  return isCreatePost ? (
    <>
      <label>Enter Post</label>
      <input data-testid="test-create-post" />
    </>
  ) : (
    <></>
  );
});

describe("PostView", () => {
  const mockAxios = new MockAdapter(axiosConfig, {
    delayResponse: 200,
  });
  let store;
  beforeEach(() => {
    store = mockStore({ post: ["abc"] });
  });
  it("should render", async () => {
    act(() => {
      const { asFragment } = render(
        <StateProvider store={store}>
          <PostView />
        </StateProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("should give option to create post", () => {
    const { getByTestId } = render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );
    const element = getByTestId("test-create-button");

    expect(element).toBeInTheDocument();
  });
  it("should open form for creating new post on button click", () => {
    const { asFragment, getByTestId } = render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );
    const button = getByTestId("test-create-button");
    fireEvent.click(button);
    const element = getByTestId("test-create-post");

    expect(element).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should make api call to fetch posts", async () => {
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
    jest.spyOn(axiosConfig, "get").mockImplementation().mockResolvedValue({
      status: 200,
      data: posts,
    });
    render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );

    await waitFor(() => expect(axiosConfig.get).toHaveBeenCalledWith(GET_POSTS));
  });
});
