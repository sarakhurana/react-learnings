import { act, fireEvent, render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useContext } from "react";
import PostView from "../../components/posts/PostView";
import { Context, StateProvider } from "../../context/Context";
import CreatePost from "./CreatePost";

describe("CreatePost", () => {

  it("should render", () => {
    const { asFragment } = render(<CreatePost />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should change value in input field", () => {
    const { getByTestId } = render(<CreatePost />);
    const titleInput = getByTestId("test-post-title");
    const postInput = getByTestId("test-post-body");

    fireEvent.change(titleInput, { target: { value: "First Post" } });
    fireEvent.change(postInput, { target: { value: "Post body" } });

    expect(titleInput.value).toBe("First Post");
    expect(postInput.value).toBe("Post body");
  });

  it("should create post", async() => {
    const { getByTestId } = render(
      <StateProvider>
        <CreatePost />
      </StateProvider>
    );
    const createButton = getByTestId("test-create-button");
    const titleInput = getByTestId("test-post-title");
    const postInput = getByTestId("test-post-body");

    fireEvent.change(titleInput, { target: { value: "First Post" } });
    fireEvent.change(postInput, { target: { value: "Post body" } });
    fireEvent.click(createButton);

     act(async() => {
      const {asFragment, findByText } = render(
        <StateProvider>
          <PostView />
        </StateProvider>
      );
      expect(asFragment()).toMatchSnapshot();
      const element = await findByText("First Post");
      expect(element).toBeInTheDocument();
     
    });
  });
    
});

//  it("should update state in redux", () => {
  //     const state={};
      
  //   const { getByTestId } = render(
  //     <Context.Provider value={{state:state, dispatch:dispatch}}>
  //       <CreatePost />
  //     </Context.Provider>
  //   );
  //   const titleInput = getByTestId("test-post-title");
  //   const postInput = getByTestId("test-post-body");
  //   const createButton = getByTestId("test-create-button");

  //   fireEvent.change(titleInput, { target: { value: "First Post" } });
  //   fireEvent.change(postInput, { target: { value: "Post body" } });
  //   // fireEvent.click(createButton);
  //   // expect(dispatch).toHaveBeenCalledTimes(1);
  //   // expect(state).toBe("First Post");
  // });