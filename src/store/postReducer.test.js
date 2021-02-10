import { CREATE_POST } from "./actions";
import postReducer from "./postReducer";

const initialState = {
  posts: [],
};
describe("postReducer", () => {
  it("set initial state correctly", () => {
    const result = postReducer(initialState, {});
    expect(result).toEqual(initialState);
  });

  it("set correct state for given action", () => {
    const newState = [
      {
        title: "First Post",
        body: "Hello!",
      },
    ];
    const action = {
      type: CREATE_POST,
      payload: newState,
    };
    const result = postReducer(initialState, action);
    expect(result.posts).toEqual(newState);
  });
});
