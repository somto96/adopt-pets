import cats from '../components/data/cats'
import dogs from '../components/data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
