import mongoose, { Schema, Model, Document } from "mongoose";

type ClientDocument = Document & {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  gst: number;
  mainContactPerson: string;
  contact: number;
  email: string;
  isDeleted: boolean;
};

type ClientInput = {
  name: ClientDocument['name'];
  address: ClientDocument['address'];
  city: ClientDocument['city'];
  state: ClientDocument['state'];
  country: ClientDocument['country'];
  gst: ClientDocument['gst'];
  mainContactPerson: ClientDocument['mainContactPerson'];
  contact: ClientDocument['contact'];
  email: ClientDocument['email'];
  isDeleted: ClientDocument['isDeleted'];
};

const clientSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    address: {
      type: Schema.Types.String,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    state: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
    gst: {
      type: Schema.Types.Number,
      required: true,
    },
    mainContactPerson: {
      type: Schema.Types.String,
      required: true,
    },
    contact: {
      type: Schema.Types.Number,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      // unique: true,
      // lowercase: true,
      // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    isDeleted: {
      type: Schema.Types.Boolean,
      required: false,
      default: false
    }
  },
  {
    collection: 'clients',
    timestamps: true,
  },
);

const Client: Model<ClientDocument> = mongoose.model<ClientDocument>('Client', clientSchema);

export { Client, ClientInput, ClientDocument };