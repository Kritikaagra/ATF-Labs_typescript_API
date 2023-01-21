import mongoose, { Schema, Model, Document } from "mongoose";

type CompanyDocument = Document & {
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
  isDeleted: boolean;
};

type CompanyInput = {
  name: CompanyDocument['name'];
  address: CompanyDocument['address'];
  city: CompanyDocument['city'];
  state: CompanyDocument['state'];
  pincode: CompanyDocument['pincode'];
  gst: CompanyDocument['gst'];
  lei: CompanyDocument['lei'];
  cin: CompanyDocument['cin'];
  lut: CompanyDocument['lut'];
  contact: CompanyDocument['contact'];
  accountNo: CompanyDocument['accountNo'];
  accountName: CompanyDocument['accountName'];
  bankName: CompanyDocument['bankName'];
  bankAddress: CompanyDocument['bankAddress'];
  ifsc: CompanyDocument['ifsc'];
  swiftCode: CompanyDocument['swiftCode'];
  isDeleted: CompanyDocument['isDeleted'];
};

const companySchema = new Schema(
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
    isDeleted: {
      type: Schema.Types.Boolean,
      required: false,
      default: false
    }
  },
  {
    collection: 'companies',
    timestamps: true,
  },
);

const Company: Model<CompanyDocument> = mongoose.model<CompanyDocument>('Company', companySchema);

export { Company, CompanyInput, CompanyDocument };