import { Schema, model, models } from "mongoose";

export const DepositSchema = new Schema(
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

const Deposit = models.Deposit || model("Deposit", DepositSchema);

export default Deposit;
