import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luiz' },
    { id: 2, name: 'Pedro' },
    { id: 3, name: 'Victor' },
    { id: 4, name: 'Yuri' },
  ]

  return response.json(users)
}