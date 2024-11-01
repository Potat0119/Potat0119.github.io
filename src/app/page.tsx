"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from "react";
import './globals.css';
import LoadingScreen from "./compornents/Loading";
import Header from './compornents/Header';
import Home from "./compornents/Home";
import Footer from "./compornents/Footer";
import HomeJP from "./compornents/HomeJP";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<"JPPage" | "ENPage">("ENPage"); // デフォルトを英語に設定

  function SearchParamsComponent() {
    const searchParams = useSearchParams().get('content');

    useEffect(() => {
      if (searchParams === "JPPage" || searchParams === "ENPage") {
        setContent(searchParams);
      }
    }, [searchParams]);

    return null; // 状態を更新するだけのコンポーネントなのでレンダリングは不要
  }

  const toggleLanguage = () => {
    setContent(prevContent => (prevContent === "ENPage" ? "JPPage" : "ENPage"));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []); // 初回のみ実行されるように依存配列を空に

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Header toggleLanguage={toggleLanguage} />
          <Suspense fallback={<LoadingScreen />}>
            <SearchParamsComponent />
          </Suspense>
          <div>
            {content === 'ENPage' && <Home />}
            {content === 'JPPage' && <HomeJP />}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}