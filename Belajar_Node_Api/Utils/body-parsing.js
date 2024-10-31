exports.parse = (req) => {
    return new Promise((resolve, reject) => {
        console.log("On parsing");
        if (req.method == "POST" || req.method == "PUT" || req.method == "DELETE") {
            let body = ""
            req.on("data", (c) => {
                body += c.toString()
            })
            req.on("end", () => {
                try {
                    const parsedBody = JSON.parse(body)
                    resolve([parsedBody, null])
                } catch (error) {
                    console.error("Failed to parse JSON: " + error);
                    resolve([null, error])
                }
            })
        }
    })
} 