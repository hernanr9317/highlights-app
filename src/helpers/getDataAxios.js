

export const getDataAxios = async() => {

    const axios = require('axios').default;

    const URl = 'https://www.scorebat.com/video-api/v3/';

    let data;

    try {
        const resp = await axios.get(URl);
        data = resp.data.response;
      } catch (error) {
        console.error(error);
      }

      return data
}
