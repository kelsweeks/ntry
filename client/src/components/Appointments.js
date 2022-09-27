import React, { useState, useEffect } from 'react'
import { Paper, Grid } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers"
import enLocale from "date-fns/locale/en-US"
import frLocale from "date-fns/locale/fr-CA"
import AppointmentCard from './AppointmentCard'

const localeMap= {
    en: enLocale,
    fr: frLocale
}


class Utils extends DateFnsUtils {
    getWeekdays() {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
}

function Appointments() {
    const [appointments, setAppointments] = useState([])
    const [errors, setErrors] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date() )
    const locale = "en"

    useEffect(() => {
        fetch('/appointments')
        .then(res => {
            if(res.ok){
                res.json().then(setAppointments)
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    const handleDateChange = (date) => {
        setSelectedDate(date)
        console.log("Date is:", date)
    }
    const deleteAppointment = (id) => setAppointments(appointments.filter(a => a.id !== id))
    return (
        <>
        <h1>Appointments</h1>
        <MuiPickersUtilsProvider utils={Utils} locale={localeMap[locale]}>
            <Paper style={{ overflow: "hidden" }}>
                <Calendar date={selectedDate} onChange={handleDateChange} />
            </Paper>
        </MuiPickersUtilsProvider>
        <Grid container spacing={2}>
            {appointments.map(appointment => <AppointmentCard key={appointment.id} appointment={appointment} />)}
        </Grid>
        </>
    )
}

export default Appointments