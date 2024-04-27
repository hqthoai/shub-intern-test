const inputUrl = "https://share.shub.edu.vn/api/intern-test/input";
const outputUrl = "https://share.shub.edu.vn/api/intern-test/output";

const calculateSumOne = (arr, l, r) => {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += arr[i];
  }
  return sum;
};

const calculateSumTwo = (arr, l, r) => {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }
  return sum;
};

const sendOutput = (token, results) => {
  fetch(outputUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(results),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Output sent successfully:", data);
    })
    .catch((error) => {
      console.log("Error sending output:", error);
    });
};

fetch(inputUrl)
  .then((response) => {
    if (response.ok) return response.json();
  })
  .then((input) => {
    const { token, data, query } = input;
    const results = [];

    for (let i = 0; i < query.length; i++) {
      const { type, range } = query[i];
      const [l, r] = range;
      let result;
      if (type === "1") result = calculateSumOne(data, l, r);
      else if (type === "2") result = calculateSumTwo(data, l, r);

      results.push(result);
    }
    sendOutput(token, results);
  })
  .catch((err) => console.log(err));
