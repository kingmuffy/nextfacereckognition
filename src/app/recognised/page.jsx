"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import styles from './page.module.css';  // Make sure the path is correct

const SearchWithImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recognizedFaces, setRecognizedFaces] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://eoxxijal95.execute-api.us-east-1.amazonaws.com/index', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to recognize the face.');
      }

      const data = await response.json();
      if (data.faces && data.faces.length > 0) {
        setRecognizedFaces(data.faces);
        toast.success('Face recognition process completed!');
      } else {
        toast.info('No faces recognized.');
        toast.warn('No user found.');
      }

    } catch (error) {
      toast.error('Error recognizing face: ' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search with Image</h1>
  
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.fileInput} type="file" onChange={handleFileChange} />
        <button className={styles.submitButton} type="submit">Search</button>
      </form>
  
      {recognizedFaces.length > 0 && (
        <div className={styles.recognizedFaces}>
          <h2>Recognized Faces</h2>
          {recognizedFaces.map((face, index) => (
            <div key={index} className={styles.faceContainer}>
              <div className={styles.faceCard}>
              <Image src={face.imageUrl} alt="Recognized face" layout='fill' objectFit='cover' />
    
            
              </div>
              <div className={styles.faceName}>
                {face.posterName} <MdVerified style={{ color: 'blue' }}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchWithImage;
