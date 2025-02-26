import mongoose from 'mongoose';
import Recipe from './floor';

const floorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  archive: {
    type: Boolean,
    required: false,
  },
});

export default mongoose.model('Floor', floorSchema);
