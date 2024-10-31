const { User } = require("../Models/user");
const bodyParsing = require("../Utils/body-parsing")

exports.createTable = async (req, res, conn) => {
  let [result, error] = await User.createTable(conn);
  if (error) throw error;
};

exports.index = async (req, res, conn) => {
  let [result, error] = await User.index(conn);
  if (error) throw error;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      msg: "Successfully fetch users data",
      data: result,
      code: 200,
    })
  );
  res.end();
};

exports.create = async (req, res, conn) => {
  let [resultB, errorB] = await bodyParsing.parse(req)
  if (errorB) throw errorB
  
  let [result, error] = await User.create(conn, resultB.name);
  if (error) throw error;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      msg: "Successfully created user data",
      data: null,
      code: 200,
    })
  );
  res.end();
};

exports.update = async (req, res, conn) => {
  let [resultB, errorB] = await bodyParsing.parse(req)
  if (errorB) throw errorB
  
  console.log("Test");
  
  let [result, error] = await User.update(conn, resultB.name, resultB.id);
  if (error) throw error;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      msg: `Successfully update user data with id: ${resultB.id}`,
      data: null,
      code: 200,
    })
  );
  res.end();
};

exports.destroy = async (req, res, conn) => {
  let [resultB, errorB] = await bodyParsing.parse(req)
  if (errorB) throw errorB
  
  console.log("Test");
  
  let [result, error] = await User.destroy(conn, resultB.id);
  if (error) throw error;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      msg: `Successfully delete user data with id: ${resultB.id}`,
      data: null,
      code: 200,
    })
  );
  res.end();
};
