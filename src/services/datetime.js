export const getDateTime = async (options = {}) => {
    return fetch(`http://worldtimeapi.org/api/timezone/Europe/${options.city}`, {
        method: "GET",
    }).then((res) => defaultResponse(res));
}



const defaultResponse = async (res) => {
    const { status } = res;

    const response = await res.json();
  
    // console.log('response => ',response)
    if (status >= 400) {
      const { message } = response;
      return { resStatus: status, message };
    }
    return { ...response, resStatus: status };
  };
  