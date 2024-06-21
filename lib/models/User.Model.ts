import { Schema, model, models } from "mongoose";
import { DepositSchema } from "./Deposit.Model";
import { TransactionSchema } from "./Transactions.Model";
import { WithdrawalSchema } from "./Withdrawals.Model";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    revenue: {
      type: Number,
      default: 0,
    },
    profit: {
      type: Number,
      default: 0,
    },
    trading_bonus: {
      type: Number,
      default: 0,
    },
    deposits: {
      type: [DepositSchema],
    },
    transactions: {
      type: [TransactionSchema],
    },
    withdrawals: {
      type: [WithdrawalSchema],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
