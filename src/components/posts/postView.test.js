import { render } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import PostView from "./PostView";

jest.mock("../../containers/post/CreatePost", () => () => {
  return (
    <>
      <label>Enter Post</label>
      <input data-testid="test-create-post" />
    </>
  );
});

describe("PostView", () => {
  it("should render", () => {
    const { asFragment } = render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );

    expect(asFragment()).toMatchSnapshot();
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
