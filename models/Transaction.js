import mongoose from 'mongoose';

const TranscationSchema = new mongoose.Schema({
    userId: String,
    cost: String,
    products: {
        type: [mongoose.Types.ObjectId],
        of: Number
    }
},
    { timestamps: true }
);

const Trasaction = mongoose.model("Transaction", TranscationSchema);
export default Trasaction;