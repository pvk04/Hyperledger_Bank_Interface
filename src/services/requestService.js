export async function setRequest(login, role, shopId) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ login, role, shopId }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:5001/auth/setRequest",
      config
    );

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function getRequests() {
  try {
    const config = {
      method: "GET",
    };
    const response = await fetch(
      "http://localhost:5001/auth/getRequests",
      config
    );

    const result = await response.text();
    console.log(JSON.parse(result));
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function answerRequest(login, id, answer) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ login, id, answer }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:5001/auth/answerRequest",
      config
    );

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}
