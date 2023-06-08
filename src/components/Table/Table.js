import {
  Delete,
  Edit,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Table = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [pageRange, setPageRange] = useState([1, 3]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay of 1 second
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (pageNumber < 3) {
      setPageRange([1, 3]);
    } else if (pageNumber > totalPages - 2) {
      setPageRange([totalPages - 2, totalPages]);
    } else {
      setPageRange([pageNumber - 1, pageNumber + 1]);
    }
  };

  const handleEdit = (postId) => {
    console.log("Edit post with ID:", postId);
  };

  const handleDelete = (postId) => {
    console.log("Delete post with ID:", postId);
  };

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-4">
        <input
          type="text"
          placeholder="Filter by title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-1 mt-6 border rounded-md outline-none"
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <HashLoader color="#0366d6" />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="mb-12 mt-2 table-auto w-full">
              <thead>
                <tr className="text-blue-500 text-lg">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Body</th>
                  <th className="py-2 px-4 text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((post) => (
                  <tr key={post.id} className="border-b">
                    <td className="py-2 px-4">{post.id}</td>
                    <td className="py-2 px-4">
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </td>
                    <td className="py-2 px-4">
                      {truncateText(post.body, 20)}
                      {post.body.split(" ").length > 20 && (
                        <span className="text-blue-500 cursor-pointer">
                          ... (expand)
                        </span>
                      )}
                    </td>
                    <td className="flex py-2 px-4">
                      <button
                        className="w-6 h-6 p-2 flex items-center justify-center text-white rounded bg-blue-700 hover:bg-blue-500 mr-2"
                        onClick={() => handleEdit(post.id)}
                      >
                        <Edit style={{ fontSize: "18px" }} />
                      </button>
                      <button
                        className="w-6 h-6 p-2 flex items-center justify-center text-white rounded bg-red-700 hover:bg-red-500"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Delete style={{ fontSize: "18px" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex my-12 justify-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              disabled={currentPage === 1}
            >
              <NavigateBefore />
            </button>
            {pageRange[0] > 1 && (
              <>
                <button
                  onClick={() => paginate(1)}
                  className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-700"
                >
                  1
                </button>
                {pageRange[0] > 2 && <span className="mx-1">...</span>}
              </>
            )}
            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter(
                (pageNumber) =>
                  pageNumber >= pageRange[0] && pageNumber <= pageRange[1]
              )
              .map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            {pageRange[1] < totalPages && (
              <>
                {pageRange[1] < totalPages - 1 && (
                  <span className="mx-1">...</span>
                )}
                <button
                  onClick={() => paginate(totalPages)}
                  className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-700"
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              disabled={currentPage === totalPages}
            >
              <NavigateNext />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
