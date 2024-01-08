"use client";

export default function AddBlog() {
  return (
    <div>
      <h1 className='font-bold text-lg '>Add a new blog</h1>

      <div className="flex flex-col gap-4">
      <div>
        <label>Enter blog Title</label>
        <input name="title" placeholder="Enter blog title" />
      </div>
      <div>
        <label>Enter blog description</label>
        <textarea name="description" placeholder="Enter blog description" />
      </div>

      <div>
        <button>Add Blog</button>
      </div>
      </div>
    </div>
  );
}
