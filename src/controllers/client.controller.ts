import express from 'express';
import { Client, ClientInput } from '../models/client.model';

//create
const createClient = async (req: express.Request, res: express.Response) => {
  const { address, name, city, state, country, gst, mainContactPerson, contact, email, isDeleted } = req.body;

  if (!name || !address || !city || !state || !country || !gst || !mainContactPerson || !contact || !email) {
    return res.status(402).json({
      message: 'All fields are required, please enter the fields',
    });
  }

  const clientInput: ClientInput = {
    name,
    address,
    city,
    state,
    country,
    gst,
    mainContactPerson,
    contact,
    email,
    isDeleted,
  };
  const clientCreated = Client.create(clientInput);
  return res.status(201).json({message: 'Client Created Successfully!' });
};

//get all roles
const getAllClients = async (req: express.Request, res: express.Response) => {
  const clients = await Client.find({isDeleted: false}).exec();
  return res.status(200).json({ data: clients });
};

//get unique
const getClient = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const client = await Client.findOne({ _id: id });
  console.log(client?.isDeleted);
  if (!client || client?.isDeleted == true) {
    return res.status(404).json({ message: `Client with id "${id}" not found.` });
  }
  return res.status(200).json({ data: client });
};

//update
const updateClient = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { address, name, city, state, country, gst, mainContactPerson, contact, email } = req.body;
  const client = await Client.findOne({ _id: id });

  if (!client || client?.isDeleted == true) {
    return res.status(404).json({ message: `Client with id "${id}" not found.` });
  }
  if (!name || !address || !city || !state || !country || !gst || !mainContactPerson || !contact || !email) {
    return res.status(422).json({ message: 'The fields name and description are required' });
  }
  await Client.updateOne({ _id: id }, { address, name, city, state, country, gst, mainContactPerson, contact, email });

  const clientUpdated = await Client.findById(id, { address, name, city, state, country, gst, mainContactPerson, contact, email });
  return res.status(200).json({ data: clientUpdated, message: 'Client Updated Successfully!' });
};

//delete
const deleteClient = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { isDeleted } = req.body;
  await Client.updateOne({ _id: id }, { isDeleted: true });
  //await Client.findByIdAndDelete(id);
  return res.status(200).json({ message: 'Client deleted successfully.' });
};

export { createClient, getAllClients, getClient, updateClient, deleteClient };