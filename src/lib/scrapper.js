const axios = require("axios");
const iconv = require("iconv-lite");

const url = "https://velog.io/@yeoungil012";

const config = {
    url: "https://velog.io/@yeoungil012",
    method: "GET",
    responseType: 'arraybuffer',
}

axios(config)
.then((e) => {
    console.log(e.data);
    const content = iconv.decode(e.data, "UTF-8");

    console.log(content);

})