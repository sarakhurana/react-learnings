import { render } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import PostView from "./PostView";

describe("PostView", () => {
  it("should render", () => {
    const { asFragment } = render(
      <StateProvider>
        <PostView />
      </StateProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
