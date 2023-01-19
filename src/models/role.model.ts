import mongoose, { Schema, Model, Document } from "mongoose";

type RoleDocument = Document & {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  gst: number;
  mainContactPerson: string;
  contact: number;
  email: string;
  isDelete: boolean;
};

type RoleInput = {
  name: RoleDocument['name'];
  address: RoleDocument['address'];
  city: RoleDocument['city'];
  state: RoleDocument['state'];
  country: RoleDocument['country'];
  gst: RoleDocument['gst'];
  mainContactPerson: RoleDocument['mainContactPerson'];
  contact: RoleDocument['contact'];
  email: RoleDocument['email'];
  isDelete: RoleDocument['isDelete'];
};

const roleSchema = new Schema(
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
    },
    isDelete: {
      type: Schema.Types.Boolean,
      required: false,
      default: false
    }
  },
  {
    collection: 'roles',
    timestamps: true,
  },
);

const Role: Model<RoleDocument> = mongoose.model<RoleDocument>('Role', roleSchema);

export { Role, RoleInput, RoleDocument };