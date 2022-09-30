import React, { useState } from 'react'
import { Box, Fab } from '@mui/material'
import { Check } from '@mui/icons-material'

const TableActions = ({params, rowId, setRowId}) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    return (
        <Box>
            sx={{
                m:1,
                postiton: 'relative'
            }}
            >
                {success ? (
                    <Fab>
                        <Check/>
                    </Fab>
                ): []}
        </Box>
    )
}

export default TableActions