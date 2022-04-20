const Employee = require("../models/employee");
module.exports = {
  async index(_req, res, _next) {
    try {
      const employee = await Employee.findAll();
      return res.json({ employee });
    } catch (error) {
      throw ("error", error.response.data);
    }
  },

  async show(req, res, _next) {
    const { id } = req.params;
    try {
      const employee = await Employee.findAll({
        where: {
          id,
        },
      });
      return res.json({ employee });
    } catch (error) {
      throw ("error", error.response.data);
    }
  },

  async store(req, res, _next) {
    const { name, age } = req.body;
    const employee = await Employee.create({
      name,
      age,
    });
    res.status(201).json({ employee });
  },

  async update(req, res, _next) {
    const { id } = req.params;
    const { name, age } = req.body;
    const employee = await Employee.update(
      {
        name,
        age,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ employee });
  },

  async delete(req, res, _next) {
    const { id } = req.params;
    const employee = await Employee.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ employee });
  },
};
