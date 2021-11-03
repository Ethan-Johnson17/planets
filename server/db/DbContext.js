import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy'
import { StarSchema } from '../models/Star'
import { PlanetSchema } from '../models/Planet'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema)
}

export const dbContext = new DbContext()
