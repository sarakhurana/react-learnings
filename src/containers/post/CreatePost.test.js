import { fireEvent, render } from "@testing-library/react";
import { createPost, CREATE_POST } from "../../store/actions";
import CreatePost from "./CreatePost";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("CreatePost", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ post: []});
  });

  it("should render", () => {
    const { asFragment } = render(<CreatePost />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("on click of create button should render post form fields",()=>{
    const {asFragment, getByTestId} = render(<CreatePost/>);

    expect(asFragment()).toMatchSnapshot();
    const button = getByTestId("test-create-button");
    fireEvent.click(button);

    expect(getByTestId("test-post-title")).toBeInTheDocument();
  })

  it("should change value in input field", () => {
    const { getByTestId } = render(<CreatePost />);
    const button = getByTestId("test-create-button");
    fireEvent.click(button);

    const titleInput = getByTestId("test-post-title");
    const postInput = getByTestId("test-post-body");
   
    fireEvent.change(titleInput, { target: { value: "First Post" } });
    fireEvent.change(postInput, { target: { value: "Post body" } });

    expect(titleInput.value).toBe("First Post");
    expect(postInput.value).toBe("Post body");
  });

  it("should dispatch createPost", async () => {
    store.dispatch(
      createPost({
        title: "title",
        body: "body",
        postId: 1,
        isFavourite: false,
        isEditMode: false,
      })
    );
    expect(store.getActions()).toEqual([
      {
        type: CREATE_POST,
        payload: {
          title: "title",
          body: "body",
          postId: 1,
          isFavourite: false,
          isEditMode: false,
        },
      },
    ]);
  });
});
