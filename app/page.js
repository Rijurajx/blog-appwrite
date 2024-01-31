"use client";
import Image from "next/image";
// import { Client } from "appwrite";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Client, Databases, ID } from "appwrite";
import Footer from "./components/Footer";

const client = new Client();
const client1 = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648da12d2e57f0ef3c14");
client1
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648da12d2e57f0ef3c14");
export default function Home() {
  const [blogPosts, setblogPosts] = useState([]);
  useEffect(() => {
    document.title = "depression blog"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648da48b47076db5bdb1",
      "648da4963247ae782022",
    
    );
    useEffect(() => {
    
      const databases1 = new Databases(client1);

      let promise1 = databases.listDocuments(
        "648da48b47076db5bdb1",
        "648f1597c1665be447b9",
    
      );

      promise.then(function (response) {
        console.log(response);
        setblogPosts(response.documents)
      }, function (error) {
        console.log(error);
      });
    }, [])
  
  
  
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.Title}</h2>
                  <p className="text-gray-700">{post.metadesc}...</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-block"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        
        </div>
        <Footer />

      </>
    );
  }
  )
}
