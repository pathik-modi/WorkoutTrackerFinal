import request from 'superagent'
import { Users } from '../../models/fruit'

const rootUrl = '/api/v1/'

export async function getAllUsers(): Promise<Users[]> {
  const res = await request.get(rootUrl)
  console.log(res.body)
  return res.body
}
