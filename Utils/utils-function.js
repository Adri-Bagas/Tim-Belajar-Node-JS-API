exports.parseBody = function (req) {
  return new Promise((resolve, reject) => {
    console.log("Do parsing with method " + req.method);
    if (req.method == "POST" || req.method == "PUT" || req.method == "DELETE") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        try {
          const parsedData = JSON.parse(body);
          resolve([parsedData, null]);
        } catch (error) {
          console.error("Failed to parse JSON:", error);
          resolve([null, error]);
        }
      });
    } else {
      resolve([null, "Method Not Allowed!"]);
    }
  });
};
