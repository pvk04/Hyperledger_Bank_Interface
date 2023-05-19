export async function getShops() {
  try {
    const config = {
      method: "GET",
    };
    const response = await fetch(
      "http://localhost:5001/shops/getShops",
      config
    );

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function like(login, shopId, rateId, isLike) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ login, shopId, rateId, isLike }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "http://localhost:5001/shops/likeRate",
      config
    );

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function createReview(login, shopId, rate, text) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ login, shopId, rate, text }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("http://localhost:5001/shops/setRate", config);
    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}
