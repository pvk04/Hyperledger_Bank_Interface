export async function login(address, password, org) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ login: address, password, org }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:5000/auth/login", config);

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function registration(name, address, password) {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify({ name, login: address, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:5000/auth/registration",
      config
    );

    const result = await response.text();
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}
