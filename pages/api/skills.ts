import type { NextApiRequest, NextApiResponse } from 'next'
import { ISkills } from '../../interfaces'
import { data } from '../../data/dataSkills'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISkills[]>
) {
  res.status(200).json(data)
}
