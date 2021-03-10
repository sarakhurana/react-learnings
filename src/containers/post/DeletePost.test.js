import { render } from "@testing-library/react";
import DeletePost from "./DeletePost";
import configureMockStore from "redux-mock-store";
import { deletePost, DELETE_POST } from "../../store/actions";

const mockStore = configureMockStore();

describe("DeletePost", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ post: ["abc"] });
  });
  it("should render", () => {
    const { asFragment } = render(
        <DeletePost postId={1} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should dispatch deletePost", () => {
    store.dispatch(deletePost(1));
    expect(store.getActions()).toEqual([{ type: DELETE_POST, payload: 1 }]);
  });
});
