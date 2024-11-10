const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createEmployee = async (req, res) => {
    const { name, email, mobile, designation, gender, course } = req.body;
    try {
        const employee = new Employee({ name, email, mobile, designation, gender, course });
        await employee.save();
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

