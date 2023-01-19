import { Request, Response } from 'express';
import express from 'express';
import { Role, RoleInput } from '../models/user.model';

//create
const createUser = async (req: express.Request, res: express.Response) => {
  const {
    name,
    address,
    city,
    state,
    pincode,
    gst,
    lei,
    cin,
    lut,
    contact,
    accountNo,
    accountName,
    bankName,
    bankAddress,
    ifsc,
    swiftCode, 
    isDelete,
  } = req.body;

  if (
    !name ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !gst ||
    !lei ||
    !cin ||
    !lut ||
    !contact ||
    !accountNo ||
    !accountName ||
    !bankName ||
    !bankAddress ||
    !ifsc ||
    !swiftCode
  ) {
    return res.status(402).json({
      message: 'All fields are required, please enter the fields',
    });
  }

  const roleInput: RoleInput = {
    name,
    address,
    city,
    state,
    pincode,
    gst,
    lei,
    cin,
    lut,
    contact,
    accountNo,
    accountName,
    bankName,
    bankAddress,
    ifsc,
    swiftCode,
    isDelete,
  };
  const roleCreated = Role.create(roleInput);
  return res.status(201).json({ data: roleCreated, message: "Created Successfully" });
};

//get all
const getAllUsers = async (req: express.Request, res: express.Response) => {
  const roles = await Role.find({isDelete: false}).exec();
  return res.status(200).json({ data: roles })
};

//get unique
const getUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const role = await Role.findOne({ _id: id });
  if (!role || role.isDelete == true) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }
  console.log(role);
  return res.status(200).json({ data: role });
};

//update
const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  const {
    name,
    address,
    city,
    state,
    pincode,
    gst,
    lei,
    cin,
    lut,
    contact,
    accountNo,
    accountName,
    bankName,
    bankAddress,
    ifsc,
    swiftCode,
    isDelete
  } = req.body;

  const role = await Role.findOne({ _id: id });

  if (!role || role.isDelete == true) {
    return res.status(404).json({ message: `Role with id "${id}" not found.` });
  }
  if (
    !name ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !gst ||
    !lei ||
    !cin ||
    !lut ||
    !contact ||
    !accountNo ||
    !accountName ||
    !bankName ||
    !bankAddress ||
    !ifsc ||
    !swiftCode
  ) {
    return res.status(422).json({ message: 'The fields name and description are required' });
  }
  await Role.updateOne(
    { _id: id },
    { name, address, city, state, pincode, gst, lei, cin, lut, contact, accountNo, accountName, bankName, bankAddress, ifsc, swiftCode },
  );

  const roleUpdated = await Role.findById(id, {
    name,
    address,
    city,
    state,
    pincode,
    gst,
    lei,
    cin,
    lut,
    contact,
    accountNo,
    accountName,
    bankName,
    bankAddress,
    ifsc,
    swiftCode,
  });

  return res.status(200).json({ data: roleUpdated });
};

//delete
const deleteUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { isDelete } = req.body;
  await Role.updateOne({ _id: id }, { isDelete: true });
  //await Role.findByIdAndDelete(id);
  return res.status(200).json({ message: 'Role deleted successfully.' });
};

export { createUser, getAllUsers, getUser, updateUser, deleteUser };
