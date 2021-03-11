import { act, render } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import PostView from "./PostView";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

jest.mock("../../containers/post/CreatePost", () => () => {
  return (
    <>
      <label>Enter Post</label>
      <input data-testid="test-create-post" />
    </>
  );
});
jest.mock("../../containers/post/EditPost", () => () => {
  return (
    <>
      <label>Edit Post</label>
      <input data-testid="test-edit-post" />
    </>
  );
});

describe("PostView", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ post: ["abc"] });
  });
  it("should render", async() => {
    act(() => {
      const {asFragment}= render(
        <StateProvider store={store}>
          <PostView />
        </StateProvider>
      )
      expect(asFragment()).toMatchSnapshot();
      });
  });

  it("should give option to create post", () => {
    const { getByTestId } = render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );
    const element = getByTestId("test-create-post");

    expect(element).toBeInTheDocument();
  });
});
