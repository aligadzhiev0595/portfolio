import type { NextApiRequest, NextApiResponse } from 'next'
import { IWorks } from '../../../../interfaces'
import { data } from '../../../../data/dataWorks'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWorks[]>
) {
  
  res.status(200).json(data.filter((el) => el.id === req.query.id))
}
