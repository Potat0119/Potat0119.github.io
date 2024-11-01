"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import './globals.css';
import LoadingScreen from "./compornents/Loading";
import Header from './compornents/Header';
import Home from "./compornents/Home";
import Footer from "./compornents/Footer";
import HomeJP from "./compornents/HomeJP";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<"JPPage" | "ENPage" | null>(null);
  const searchParams = useSearchParams().get('content');

  const toggleLanguage = () => {
    setContent(prevContent => (prevContent === "ENPage" ? "JPPage" : "ENPage"));
  };

  useEffect(() => {
    if (searchParams === "JPPage" || searchParams === "ENPage") {
      setContent(searchParams);
    } else {
      const userLanguage = navigator.language.startsWith('ja') ? 'JPPage' : 'ENPage';
      setContent(userLanguage);
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Header toggleLanguage={toggleLanguage} />
          {content === 'ENPage' && <Home />}
          {content === 'JPPage' && <HomeJP />}
          <Footer />
        </div>
      )}
    </div>
  );
}