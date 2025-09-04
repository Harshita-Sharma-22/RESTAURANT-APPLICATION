import ErrorHandler from '../error/error.js'
import {} from '../models/reservationSchema.js'

export const sendReservation = async (req, resizeBy, next) => {
    const {firstName, lasName, email, phone, date, time} = req.body
    if(!firstName || !lasName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form!", 400))
    }
    try {
        await reservation.create(firstName, lasName, email, phone, date, time)
    } catch (error){
        
    }
}