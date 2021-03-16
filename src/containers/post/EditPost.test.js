import { render } from "@testing-library/react";
import EditPost from "./EditPost";
import configureMockStore from "redux-mock-store";
import { editPost, EDIT_POST } from "../../store/actions";

const mockStore = configureMockStore();

describe("EditPost", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ post: ["abc"] });
  });

  it("should render", () => {
    const { asFragment } = render(<EditPost setIsEditPost={jest.fn()} postId={1} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should dispatch editPost", () => {
    store.dispatch(editPost({title: "new title", body: "new body"}));
    expect(store.getActions()).toEqual([{ type: EDIT_POST, payload: {title: "new title", body: "new body"} }]);
  });
});
