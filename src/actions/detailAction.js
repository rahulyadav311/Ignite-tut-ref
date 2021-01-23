import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "./../api";

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const detailScreenhotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: detailScreenhotData.data,
    },
  });
};

export default loadDetail;
