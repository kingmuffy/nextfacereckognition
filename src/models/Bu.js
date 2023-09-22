import mongoose from 'mongoose';

const { Schema } = mongoose;

const QSchema = new Schema({
  age: {
    type: String,
    required: false
  },
  gender: {
    type: String,

    required: false
  },
  onlineFrequency: {
    type: String,
    required: false
  },
  trustLevel: {
    type: Number,
    required: false
  
  },
  deceivedBefore: {
    type: String,
    required: false
  
  },
  imageRecognitionTrust: {
    type: String,
    required: false
  },
  usePlatform: {
    type: String,
    required: false
  },
  preventDeception: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false  }

});

const Q = mongoose.model('Q', QSchema);

export default Q;
