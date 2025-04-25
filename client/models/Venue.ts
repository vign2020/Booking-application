import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
  venue_name: { type: String, required: true },
  no_of_courts: { type: Number, required: true },
  court_names: [{ type: mongoose.Schema.Types.Mixed, required: true }],
  hourly_price: { type: Number, required: true },
});

const Venue =
  mongoose.models.venueSchema || mongoose.model("Venue", venueSchema);
export default Venue;
