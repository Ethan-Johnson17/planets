import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    population: { type: Number, default: 'Population Unknown' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  {
    timestamps: true, toJSON: { virtuals: true }
  }
)

PlanetSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})
