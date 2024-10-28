"use client";
import { useEffect, useState } from "react";
import './globals.css';
import LoadingScreen from "./compornents/Loading";
import Header from './compornents/Header';
import Home from "./compornents/Home";

export default function App() {
  const [loading, setLoading] =useState(true);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false)
      }, 1000);

      return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div >
      {loading ? (<LoadingScreen/>):(<body><Header /> <Home/></body>)}
    </div>
  );
};