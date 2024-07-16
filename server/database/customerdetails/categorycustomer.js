import { customer } from "../models/customerschema.js";

const categorycustomer = async (req, res) => {
  const { category } = req.body;
  let data;
  category == "all"
    ? (data = await customer.find({}))
    : (data = await customer.find({ status: category }));
  res.json(data);
};

export default categorycustomer;
