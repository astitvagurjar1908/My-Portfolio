import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import AmbientBackground from '@/components/AmbientBackground';
import Home from '@/pages/Home';
import { profile } from '@/data/resume';

export default function App() {
  return (
    <>
      <Helmet>
        <title>{profile.name} — {profile.title} | Backend & Scalable Systems</title>
        <meta name="description" content={profile.summary} />
      </Helmet>

      <AmbientBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
