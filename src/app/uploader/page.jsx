"use client";
import React, { useState } from "react";

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [comment, setComment] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedFile || !comment.trim()) {
            alert("Please select a file and add a comment.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('comment', comment);  // Adding the comment to formData

        try {
            const response = await fetch("api/photo", {
                method: 'POST',
                body: formData,
                headers: {
                    'content-type': 'application/json'
                }
            });

            const data = await response.json();
            if (data.success) {
                alert('File uploaded successfully!');
            } else {
                alert('File upload failed.');
            }
        } catch (error) {
            alert('Error uploading file.');
        }
    };

    return (
        <div>
            <h1>Upload a File</h1>
            <form onSubmit={handleUploadSubmit}>
                <input type="file" onChange={handleFileChange} />
                <input 
                    type="text" 
                    placeholder="Add your comment here" 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadPage;
