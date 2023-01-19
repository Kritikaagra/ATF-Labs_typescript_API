import { Request, Response } from 'express';
import express from 'express';
import { Role, RoleInput } from '../models/role.model';

//create
const createRole = async (req: express.Request, res: express.Response) => {
  const { address, name, city, state, country, gst, mainContactPerson, contact, email, isDelete } = req.body;

  if (!name || !address || !city || !state || !country || !gst || !mainContactPerson || !contact || !email) {
    return res.status(402).json({
      message: 'All fields are required, please enter the fields',
    });
  }

  const roleInput: RoleInput = {
    name,
    address,
    city,
    state,
    country,
    gst,
    mainContactPerson,
    contact,
    email,
    isDelete,
  };
  const roleCreated = Role.create(roleInput);
  return res.status(201).json({ message: 'Role Created Successfully!' });
};

//get all
const getAllRoles = async (req: express.Request, res: express.Response) => {
  const roles = await Role.find({isDelete: false}).exec();
  return res.status(200).json({ data: roles });
};

//get unique
const getRole = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const role = await Role.findOne({ _id: id });
  console.log(role?.isDelete);
  if (!role || role?.isDelete == true) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }
  return res.status(200).json({ data: role });
};

//update
const updateRole = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { address, name, city, state, country, gst, mainContactPerson, contact, email } = req.body;
  const role = await Role.findOne({ _id: id });

  if (!role || role?.isDelete == true) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }
  if (!name || !address || !city || !state || !country || !gst || !mainContactPerson || !contact || !email) {
    return res.status(422).json({ message: 'The fields name and description are required' });
  }
  await Role.updateOne({ _id: id }, { address, name, city, state, country, gst, mainContactPerson, contact, email });

  const roleUpdated = await Role.findById(id, { address, name, city, state, country, gst, mainContactPerson, contact, email });
  return res.status(200).json({ data: roleUpdated, message: 'Updated Successfully!' });
};

//delete
const deleteRole = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { isDelete } = req.body;
  await Role.updateOne({ _id: id }, { isDelete: true });
  //await Role.findByIdAndDelete(id);
  return res.status(200).json({ message: 'Role deleted successfully.' });
};

export { createRole, getAllRoles, getRole, updateRole, deleteRole };
