import React from 'react';
import { useState, useEffect} from 'react';

function TestForm() {
    const [name, setName] = useState('')
    const [note, setNote] = useState('')
    const [upload, setUpload] = useState(null)
    const [files, setFiles] = useState([])
    const [case_managers, setCaseManagers] = useState([])
    
    useEffect(() => {
        fetch('/case_managers')
        .then(res => res.json())
        .then(data => setCaseManagers(data))
    }, [])

    useEffect(() => {
        fetch('/files')
        .then(res => res.json())
        .then(data => setFiles(data))
    }, [])

    function handleUploadSubmit(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('case_manager_id', case_managers[0].id)
        formData.append('name', name)
        formData.append('note', note)
        formData.append('upload', upload)

        fetch('/files', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <>
            <h1> TEST FORM </h1>
            <form onSubmit={handleUploadSubmit}>
                <h2>name</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <h2>note</h2>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                <h2>upload file</h2>
                <input type="file" accepts=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" onChange={(e) => setUpload(e.target.files[0])}/>
                <input type='submit'/>
            </form>
        </>
    )
}
export default TestForm;