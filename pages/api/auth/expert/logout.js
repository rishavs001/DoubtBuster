import { errorHandler } from '@/middlewares/error'
// import { cookieSetter } from '@/utils/feature'
import { cookieS } from '@/utils/feature'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return errorHandler(res, null, false)
  }

  try {
    cookieS(res, null, false)

    res.status(200).json({
      success: true,
      message: 'logout successfully',
    })
  } catch (error) {
    console.error('Error during logout:', error)
    return errorHandler(res, error, false)
  }
}