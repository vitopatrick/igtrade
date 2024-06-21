import { Schema, model, models } from "mongoose";

export const TransactionSchema = new Schema(
  {
    amount: Number,
    status: String,
    method: String,
    remarks: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
