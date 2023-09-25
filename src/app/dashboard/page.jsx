"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

const Dashboard = () => {

  const session = useSession();
  console.log(session);
 
const router = useRouter();
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const { data, mutate, error, isLoading } = useSWR(
  "https://eoxxijal95.execute-api.us-east-1.amazonaws.com/",
   fetcher
 );

 if (session.status === "loading") {
  return <div className="flex justify-center mt-10">
  <ThreeDots height="80" width="80" radius="9" color="#4fa94d" ariaLabel="three-dots-loading" />
</div>;
}

// if (session.status === "unauthenticated") {
//   router?.push("/dashboard/login");
// }

const handleSubmit = async (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const imgFile = e.target[2].files[0];  // Get the uploaded file
  const content = e.target[3].value;

  const formData = new FormData();
  formData.append('title', title);
  formData.append('topic', desc);
  formData.append('files', imgFile); // Append the file to formData
  formData.append('comment', content);
  formData.append('posterName', session.data.user.name);


   
  try {
    const response = await fetch("https://eoxxijal95.execute-api.us-east-1.amazonaws.com/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) { // Check if the response status is not OK (e.g., 200)
      throw new Error("Failed to upload the data."); // This will move to the catch block
    }

    toast.success("Successfully uploaded!"); // Success notification
    mutate();
    e.target.reset();
  } catch (err) {
    console.log(err);
    toast.error("Error uploading data: " + err.message); // Error notification
}
};

if (session.status === "authenticated") {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? "loading"
          : data?.map((post) => (
              <div className={styles.post} key={post.imageUrl}>
                <div className={styles.imgContainer}>
                  <Image src={post.imageUrl} alt="" width={300} height={350} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="file" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
}
};

export default Dashboard;
