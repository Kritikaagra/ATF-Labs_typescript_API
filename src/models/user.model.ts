import mongoose, { Schema, Model, Document } from "mongoose";

type RoleDocument = Document & {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: number;
  gst: number;
  lei: number;
  cin: number;
  lut: number;
  contact: number;
  accountNo: number;
  accountName: string;
  bankName: string;
  bankAddress: string;
  ifsc: string;
  swiftCode: string;
  isDelete: boolean;
};

type RoleInput = {
  name: RoleDocument['name'];
  address: RoleDocument['address'];
  city: RoleDocument['city'];
  state: RoleDocument['state'];
  pincode: RoleDocument['pincode'];
  gst: RoleDocument['gst'];
  lei: RoleDocument['lei'];
  cin: RoleDocument['cin'];
  lut: RoleDocument['lut'];
  contact: RoleDocument['contact'];
  accountNo: RoleDocument['accountNo'];
  accountName: RoleDocument['accountName'];
  bankName: RoleDocument['bankName'];
  bankAddress: RoleDocument['bankAddress'];
  ifsc: RoleDocument['ifsc'];
  swiftCode: RoleDocument['swiftCode'];
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
    pincode: {
      type: Schema.Types.Number,
      required: true,
    },
    gst: {
      type: Schema.Types.Number,
      required: true,
    },
    lei: {
      type: Schema.Types.Number,
      required: true,
    },
    cin: {
      type: Schema.Types.Number,
      required: true,
    },
    lut: {
      type: Schema.Types.Number,
      required: true,
    },
    contact: {
      type: Schema.Types.Number,
      required: true,
    },
    accountNo: {
        type: Schema.Types.Number,
        required:true,
    },
    accountName: {
        type: Schema.Types.String,
        required:true,
    },
    bankName: {
        type: Schema.Types.String,
        required:true,
    },
    bankAddress: {
        type: Schema.Types.String,
        required:true,
    },
    ifsc: {
        type: Schema.Types.String,
        required:true,
    },
    swiftCode: {
        type: Schema.Types.String,
        required:true,
    },
    isDelete: {
      type: Schema.Types.Boolean,
      required: false,
      default: false
    }
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

const Role: Model<RoleDocument> = mongoose.model<RoleDocument>('User', roleSchema);

export { Role, RoleInput, RoleDocument };