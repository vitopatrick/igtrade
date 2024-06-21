import { Schema, model, models } from "mongoose";

export const WithdrawalSchema = new Schema({
  amount: Number,
  status: String,
  method: String,
  remarks: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Withdrawal = models.Withdrawal || model("Withdrawal", WithdrawalSchema);

export default Withdrawal;
