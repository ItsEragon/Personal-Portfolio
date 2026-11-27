import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { viewerProfiles, type ProfileId, type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import ContinueWatching from './components/ContinueWatching';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

const PlayIntro = lazy(() => import('./components/PlayIntro'));

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'amritpal-series-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY);
    return viewerProfiles.some((p) => p.id === v) ? (v as ProfileId) : null;
  } catch {
    return null;
  }
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const stored = readStoredProfile();
  const [stage, setStage] = useState<Stage>(stored ? 'home' : 'opening');
  const [profileId, setProfileId] = useState<ProfileId>(stored ?? 'amritpal');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { scrollTo, lock, unlock } = useSmoothScroll();

  const order = viewerProfiles.find((p) => p.id === profileId)!.order;

  useEffect(() => {
    if (stage === 'home') return;
    lock();
    return unlock;
  }, [stage, lock, unlock]);

  const pickProfile = (id: ProfileId) => {
    setProfileId(id);
    try {
      sessionStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable — profile simply won't persist */
    }
    if (stage !== 'home') {
      window.scrollTo(0, 0);
      setStage('home');
    } else {
      const p = viewerProfiles.find((v) => v.id === id)!;
      setToast(`Now watching as ${p.name} — ${p.blurb.toLowerCase()}`);
      scrollTo(0, { offset: 0 });
    }
  };

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const sections: Record<SectionId, ReactNode> = {
    about: <About />,
    journey: <Seasons />,
    originals: <Originals onOpen={setProject} />,
    picks: <TopPicks />,
    skills: <Skills />,
    moments: <Achievements />,
    story: <ResumeSection onView={() => setResumeOpen(true)} />,
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />
      <CustomCursor />

      {stage === 'opening' && <OpeningSequence onDone={() => setStage('profiles')} />}
      {stage === 'profiles' && <ProfileSelector onPick={pickProfile} />}

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar order={order} profileId={profileId} onSwitch={pickProfile} />
          <main>
            <Hero key={`hero-${profileId}`} onPlay={() => setPlaying(true)} onResume={() => setResumeOpen(true)} profileId={profileId} />
            <ContinueWatching order={order} />
            {order.map((id) => (
              <Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
                {sections[id]}
              </Scene>
            ))}
            <FinalCTA onReplay={() => { setProject(null); setResumeOpen(false); setPlaying(false); setStage('opening'); }} />
          </main>
        </motion.div>
      )}

      {toast && (
        <motion.div
          role="status"
          className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {toast}
        </motion.div>
      )}

      {project && <ProjectModal project={project} onClose={() => setProject(null)} onSwitch={setProject} />}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <Suspense fallback={null}>{playing && <PlayIntro onClose={() => setPlaying(false)} />}</Suspense>
    </LayoutGroup>
  );
}
