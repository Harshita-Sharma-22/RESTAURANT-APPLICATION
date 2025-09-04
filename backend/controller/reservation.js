import ErrorHandler from '../error/error.js'
import {} from '../models/reservationSchema.js'

export const sendReservation = async (req, resizeBy, next) => {
    const {firstName, lasName, email, phone, date, time} = req.body
    if(!firstName || !lasName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form!", 400))
    }
    try {
        await reservation.create(firstName, lasName, email, phone, date, time)
        res.status(200), json({
            success: true,
            message: "Reeservation Sent Successfully"
        })
    } catch (error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err)=>err.message
            )
            return next(new ErrorHandler(validationErrors.join(' , '), 400))
        }
    }
}