"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Slide {
  imageUrl: string;
  title: string;
  description: string;
}

const AdminPanel = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [slides, setSlides] = useState<Slide[]>([]);
  const [newSlide, setNewSlide] = useState<Slide>({
    imageUrl: "",
    title: "",
    description: "",
  });

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  // Fetch slides only when the user is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      const fetchSlides = async () => {
        const res = await fetch("/api/slides");
        const data = await res.json();
        setSlides(data);
      };
      fetchSlides();
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewSlide({ ...newSlide, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/slides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSlide),
    });
    setNewSlide({ imageUrl: "", title: "", description: "" });

    // Refresh slides after adding a new one
    const res = await fetch("/api/slides");
    const data = await res.json();
    setSlides(data);
  };

  // Show loading state
  if (status === "loading") return <p>Loading...</p>;
  
  // Prevent rendering anything if unauthenticated (redirect already happens)
  if (status === "unauthenticated") return null;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Manage Slides</h1>

      <button className="bg-red-500 text-white px-4 py-2 mb-4" onClick={() => signOut()}>
        Logout
      </button>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newSlide.imageUrl}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newSlide.title}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={newSlide.description}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Slide
        </button>
      </form>

      <h2 className="text-xl font-bold">Existing Slides</h2>
      <ul>
        {slides.map((slide, index) => (
          <li key={index} className="border p-2 my-2">
            <p>
              <strong>Title:</strong> {slide.title}
            </p>
            <p>
              <strong>Description:</strong> {slide.description}
            </p>
            <img src={slide.imageUrl} alt={slide.title} className="w-32 h-20" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
