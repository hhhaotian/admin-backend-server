import mongoose from "mongoose";

const AffliateStatSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId, ref: 'User' },
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: 'Transaction'
        }
    },
    { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffliateStatSchema);
export default AffiliateStat;