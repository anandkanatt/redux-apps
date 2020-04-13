import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export function fetchPosts() {
    return async function action(dispatch) {

        const request = await jsonPlaceholder.get('/posts');
        return dispatch({ type: "FETCH_POSTS",payload:request.data});

    }
}

export function fetchUser(id) {
    return async function action(dispatch) {

        const request = await jsonPlaceholder.get(`/users/${id}`);
        return dispatch({ type: "FETCH_USER",payload:request.data});

    }
}