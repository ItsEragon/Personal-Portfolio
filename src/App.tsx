import { lazy, Suspense, useEffect, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import type { SectionId } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Skills from './components/Skills';
import ContinueWatching from './components/ContinueWatching';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

const PlayIntro = lazy(() => import('./components/PlayIntro'));

type Stage = 'opening' | 'home';

/** Sections live in the nav/Continue row as each phase lands. */
const PHASE_ORDER: SectionId[] = ['about', 'journey', 'skills'];

/** Option B: the Continue Exploring row only appears once all seven sections exist. */
const ALL_SECTIONS = 7;

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const [stage, setStage] = useState<Stage>('opening');
  const [playing, setPlaying] = useState(false);
  const { lock, unlock } = useSmoothScroll();

  useEffect(() => {
    if (stage === 'home') return;
    lock();
    return unlock;
  }, [stage, lock, unlock]);

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />
      <CustomCursor />

      {/* No AnimatePresence here: its exit animation can stall under reduced motion and leave a click blocker. */}
      {stage === 'opening' && <OpeningSequence onDone={() => setStage('home')} />}

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar order={PHASE_ORDER} />
          <main>
            <Hero onPlay={() => setPlaying(true)} onResume={() => {}} profileId="amritpal" />
            {PHASE_ORDER.length === ALL_SECTIONS && <ContinueWatching order={PHASE_ORDER} />}
            <Scene id="about">
              <About />
            </Scene>
            <Scene id="journey">
              <Seasons />
            </Scene>
            <Scene id="skills">
              <Skills />
            </Scene>
            <FinalCTA onReplay={() => setStage('opening')} />
          </main>
        </motion.div>
      )}

      <Suspense fallback={null}>{playing && <PlayIntro onClose={() => setPlaying(false)} />}</Suspense>
    </LayoutGroup>
  );
}
