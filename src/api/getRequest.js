import interceptor from "../util/interceptor.js";

const methodAll = "get";
var getString = (urlSelf, methodSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
  };
};

//get携带参数
var getString_P = (urlSelf, data, methodSelf) => {
  return {
    url: urlSelf,
    params: { customId: data },
    method: methodSelf,
  };
};

export default {
  /** 公共 */
  //获取所有通告
  getNotice() {
    return interceptor(getString("/apis/pet/findByStatus", methodAll));
  },
};
