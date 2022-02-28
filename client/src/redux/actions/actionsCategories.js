import axios from 'axios'

export const getCategory = async _id => {
  const params = { _id }
  return await axios.get('http://localhost:3001/categories', { params })
}
