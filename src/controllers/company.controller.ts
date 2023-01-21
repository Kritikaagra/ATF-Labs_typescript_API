import express from 'express';
import { Company, CompanyInput } from '../models/company.model';

//create
const createCompany = async (req: express.Request, res: express.Response) => {
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
    isDeleted,
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

  const companyInput: CompanyInput = {
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
    isDeleted,
  };
  const companyCreated = Company.create(companyInput);
  return res.status(201).json({message: "Company Created Successfully" });
};

//get all
const getAllCompany = async (req: express.Request, res: express.Response) => {
  const companies = await Company.find({isDeleted: false}).exec();
  return res.status(200).json({ data: companies })
};

//get unique
const getCompany = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const company = await Company.findOne({ _id: id });
  if (!company || company.isDeleted == true) {
    return res.status(404).json({ message: `Company with id "${id}" not found.` });
  }
  return res.status(200).json({ data: company });
};

//update
const updateCompany = async (req: express.Request, res: express.Response) => {
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
    isDeleted
  } = req.body;

  const company = await Company.findOne({ _id: id });

  if (!company || company.isDeleted == true) {
    return res.status(404).json({ message: `Company with id "${id}" not found.` });
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
  await Company.updateOne(
    { _id: id },
    { name, address, city, state, pincode, gst, lei, cin, lut, contact, accountNo, accountName, bankName, bankAddress, ifsc, swiftCode },
  );

  const companyUpdated = await Company.findById(id, {
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

  return res.status(200).json({ data: companyUpdated, message:"Company updated Successfully." });
};

//delete
const deleteCompany = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { isDeleted } = req.body;
  await Company.updateOne({ _id: id }, { isDeleted: true });
  return res.status(200).json({ message: 'Company deleted successfully.' });
};

export { createCompany, getAllCompany, getCompany, updateCompany, deleteCompany };
