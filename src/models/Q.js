import mongoose from 'mongoose';

const { Schema } = mongoose;

const QSchema = new Schema({
  age: {
    type: String,
    required: fale
  },
  gender: {
    type: String,

    required: fale
  },
  onlineFrequency: {
    type: String,
    required: fale
  },
  trustLevel: {
    type: Number,
    required: fale
  
  },
  deceivedBefore: {
    type: String,
    required: fale
  
  },
  imageRecognitionTrust: {
    type: String,
    required: fale
  },
  usePlatform: {
    type: String,
    required: fale
  },
  preventDeception: {
    type: String,
    required: fale
  },
  username: {
    type: String,
    required: fale  }

});

const Q = mongoose.model('Q', QSchema);

export default Q;
