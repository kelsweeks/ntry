import React, {useState} from 'react'


function UpdateClient({client, handleClientUpdate}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [medical_history, setMedicalHistory] = useState('')
    return (
        <form onSubmit={handleClientUpdate}>
            <h1>Update A Client</h1>
            <input placeholder={client.name} onChange={(e) => setName(e.target.value)}></input> 
            <input placeholder={client.age} onChange={(e) => setAge(e.target.value)}></input>
            <input placeholder={client.date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)}></input>
            <input placeholder={client.address} onChange={(e) => setAddress(e.target.value)}></input>
            <input placeholder={client.phone} onChange={(e) => setPhone(e.target.value)}></input>
            <input placeholder={client.email} onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder={client.medical_history} onChange={(e) => setMedicalHistory(e.target.value)}></input>
            <br/>
            <input type='submit' value='Update'></input>
        </form>
    )
}

export default UpdateClient