import { render } from "@testing-library/react";
import FavouritePost from "./favouritePost";
import configureMockStore from "redux-mock-store";
import { favouritePost, FAVOURITE_POST } from "../../store/actions";

const mockStore = configureMockStore();

describe("favouritePost", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ post: ["abc"] });
  });

  it("should render", () => {
    const { asFragment } = render(<FavouritePost />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should dispatch favouritePost", () => {
    store.dispatch(favouritePost(1));
    expect(store.getActions()).toEqual([{ type: FAVOURITE_POST, payload: 1 }]);
  });
});
