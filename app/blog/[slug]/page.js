// BlogPage.js
"use client";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Client, Databases, ID, Query } from "appwrite";
import Footer from "@/app/components/Footer";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648da12d2e57f0ef3c14");
const BlogPage = ({ params }) => {
  const [blogPost, setBlogPost] = useState();
  const { slug } = params;
  useEffect(() => {
    document.title = "depression blog";
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648da48b47076db5bdb1",
      "648da4963247ae782022",
      [Query.equal("slug", slug)]
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlogPost(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  // Replace with your actual blog post data or fetch it from an API based on the slug
  // const blogPost = {
  //   slug: "first-blog-post",
  //   title: "First Blog Post",
  //   image: "/images/first-post-image.jpg",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum a erat id ultricies.",
  // };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold p-6 text-center">{blogPost?.Title}</h1>
          <img
            src={blogPost?.image}
            alt={blogPost?.title}
            className="w-full h-auto rounded-t-lg"
          />
          <div className="p-6">
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogPost?.content}}
            />
            <p />
          </div>
          <img
            src={blogPost?.image1}
            alt={blogPost?.title}
            className="w-full h-auto rounded-t-lg"
          />
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;
