import { act, fireEvent, render } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import PostView from "./PostView";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

jest.mock("../../containers/post/CreatePost", () => ({isCreatePost}) => {
  return (
   isCreatePost?<>
      <label>Enter Post</label>
      <input data-testid="test-create-post" />
    </>:<></>
  );
});
// jest.mock("../../containers/post/EditPost", () => () => {
//   return (
//     <>
//       <label>Edit Post</label>
//       <input data-testid="test-edit-post" />
//     </>
//   );
// });

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
    expect(asFragment()).toMatchSnapshot()
  });
});
