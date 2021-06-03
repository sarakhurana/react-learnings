import { StateProvider } from "../../context/Context";
import configureMockStore from "redux-mock-store";
import usePostDetails from "./usePostDetails";
import { renderHook } from "@testing-library/react-hooks";

const mockStore = configureMockStore();

describe("usePostDetails", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      post: {
        posts: [ {
          id: "1",
          body: "abc"
        }],
      }
      });
  });

  it("should findPost", () => {
    const wrapper = ({ children }) => (
      <StateProvider store={store}>{children}</StateProvider>
    );
    const { result } = renderHook(() => usePostDetails(), { wrapper });
    console.log(result.current);
    const { findPost } = result.current;

    expect(findPost(1)).toBe("");
  });
});
