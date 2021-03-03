import { act, fireEvent, render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useContext } from "react";
import PostView from "../../components/posts/PostView";
import { Context, StateProvider } from "../../context/Context";
import DeletePost from "./DeletePost";

describe("DeletePost", () => {

  it("should render", () => {
    const { asFragment } = render(<DeletePost />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should delete post", () => {
    const state = {
      posts: [
        {
          postId: 1,
          title: "First Post",
          body: "This is the first post",
          isFavourite: false,
        },
      ],
    };
    const { getByTestId } = render(
      <StateProvider>
        <DeletePost id={1} />
      </StateProvider>
    );
    const deleteButton = getByTestId("test-delete-btn");

    fireEvent.click(deleteButton);

    act(async () => {
      const { asFragment,findByText } = render(
        <StateProvider state={state}>
          <PostView />
        </StateProvider>
      );
    //   const element = await findByText("First Post");
    //   expect(element).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
