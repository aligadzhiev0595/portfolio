import type { NextApiRequest, NextApiResponse } from 'next'
import { ITabs } from '../../interfaces'
import { data } from '../../data/dataTabs'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITabs[]>
) {
  res.status(200).json(data)
}
