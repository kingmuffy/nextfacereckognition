import mongoose from 'mongoose';

const { Schema } = mongoose;

const QueSchema = new Schema({
  age: {
    type: String,
    enum: ['under18', '18-24', '25-34', '35-44', '45-54', '55plus'],
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'nonBinary', 'preferNotToSay'],
    required: true
  },
  onlineFrequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'rarely', 'never'],
    required: true
  },
  trustLevel: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  deceivedBefore: {
    type: String,
    enum: ['yes', 'no'],
    required: true
  },
  imageRecognitionTrust: {
    type: String,
    enum: ['stronglyAgree', 'agree', 'neutral', 'disagree', 'stronglyDisagree'],
    required: true
  },
  usePlatform: {
    type: String,
    enum: ['definitely', 'probably', 'notSure', 'probablyNot', 'definitelyNot'],
    required: true
  },
  preventDeception: {
    type: String,
    enum: ['stronglyAgree', 'agree', 'neutral', 'disagree', 'stronglyDisagree'],
    required: true
  },
  username: {
    type: String,
    required: false,
  }
});

const Que = mongoose.model('Que', QueSchema);

export default Que;
