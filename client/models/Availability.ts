import mongoose from "mongoose";

const availSchema = new mongoose.Schema({
  player_name: { type: String, required: true },
  venue: { type: String, required: true },
  from_time: { type: Date, required: true },
  to_time: { type: Date, required: true },
  court_no: [{ type: String }],
});

const Avail =
  mongoose.models.availSchema || mongoose.model("Avail", availSchema);
export default Avail;
