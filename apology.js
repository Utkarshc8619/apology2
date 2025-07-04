import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const CONFETTI_COUNT = 24;
const STICKERS = [
  { emoji: '🐻', label: 'bear' },
  { emoji: '🐰', label: 'bunny' },
  { emoji: '🦊', label: 'fox' },
  { emoji: '🦄', label: 'unicorn' },
  { emoji: '🌸', label: 'cherry blossom' },
  { emoji: '✨', label: 'sparkle' },
  { emoji: '💖', label: 'heart' },
  { emoji: '🥺', label: 'puppy eyes' },
];

function FloatingStickers() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 z-0">
      {Array.from({ length: 12 }).map((_, i) => {
        const sticker = STICKERS[Math.floor(Math.random() * STICKERS.length)];
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 4;
        const delay = Math.random() * 3;
        const size = 28 + Math.random() * 24;
        return (
          <motion.div
            key={i}
            style={{ left: `${left}%`, fontSize: `${size}px`, top: '-3rem' }}
            className="absolute"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: '110vh', opacity: 0.2 }}
            transition={{ duration, delay, repeat: Infinity, repeatType: 'loop' }}
          >
            {sticker.emoji}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ForgiveMe() {
  const [forgiven, setForgiven] = useState(null);

  const handleForgive = useCallback(() => setForgiven(true), []);
  const handleNotYet = useCallback(() => setForgiven(false), []);

  return (
    <main className="min-h-screen flex flex-col items-center p-6 space-y-6 overflow-x-hidden relative" style={{ background: 'linear-gradient(135deg, #ffe4e6 0%, #fbc2eb 100%)' }}>
      <FloatingStickers />

      <motion.h1 
        className="text-4xl font-bold text-pink-600 mt-20 animate-heartbeat relative z-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        I'm Truly Sorry 💔
      </motion.h1>

      <motion.section
        className="max-w-xl text-center text-pink-700 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg mb-4">
          I know I messed up by not giving you the time you deserve. Being out with my friends shouldn't have meant ignoring the person who matters most to me. I'm truly sorry, and I hope you know that I never meant to make you feel less important. I love you, and I'll do better.
        </p>
      </motion.section>

      <motion.section 
        className="grid gap-6 max-w-xl w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 1, duration: 0.7 }}
        >
          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold text-pink-500">💭 Favorite Memories</h2>
              <ul className="list-disc list-inside mt-3 text-pink-700 space-y-1">
                <li>I remember how I saw the girl running through the classroom and fell in love with her in that same moment.</li>
                <li>I love how we can forgive each other and move on with our relationship and make it better.</li>
                <li>My most precious moments in this college were when I was with you.</li>
                <li>When you are by my side, I love you more than anything.</li>
                <li>I'm still obsessed with you.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: 8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 1.2, duration: 0.7 }}
        >
          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold text-pink-500">🤝 My Promises</h2>
              <ul className="list-disc list-inside mt-3 text-pink-700 space-y-1">
                <li>I'll always make time for you, even during busy days.</li>
                <li>I'll put you first.</li>
                <li>I'll never forget the love we share.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <AnimatePresence>
            {forgiven === true && (
              <>
                <motion.p 
                  className="text-2xl text-pink-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  aria-live="polite"
                >
                  Thank you for forgiving me ❤️
                </motion.p>
                {[...Array(CONFETTI_COUNT)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-pink-300 text-2xl pointer-events-none select-none"
                    style={{ left: `${Math.random() * 90 + 5}%`, top: '-2rem', rotate: `${Math.random() * 360}deg` }}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: "100vh", opacity: 0, rotate: `${Math.random() * 360}deg` }}
                    transition={{ duration: 2.5 + Math.random(), delay: i * 0.08 }}
                  >
                    {Math.random() > 0.5 ? '💕' : '💖'}
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          {forgiven === false && (
            <motion.p 
              className="text-xl text-red-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              aria-live="polite"
            >
              I understand. I'll keep trying to be better. 💔
            </motion.p>
          )}

          {forgiven === null && (
            <div className="space-x-4 mt-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  className="bg-green-400 hover:bg-green-500 text-white text-lg px-6 py-2 rounded-2xl shadow-lg focus:ring-2 focus:ring-green-300 animate-wiggle"
                  onClick={handleForgive}
                >
                  Yes, I forgive you 💖
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  className="bg-red-300 hover:bg-red-400 text-white text-lg px-6 py-2 rounded-2xl shadow-lg focus:ring-2 focus:ring-red-200 animate-wiggle"
                  onClick={handleNotYet}
                >
                  Not yet 💔
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.section>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.08); }
          20%, 40% { transform: scale(0.95); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          20% { transform: rotate(2deg); }
          40% { transform: rotate(-2deg); }
          60% { transform: rotate(2deg); }
          80% { transform: rotate(-2deg); }
        }
        .animate-wiggle:hover {
          animation: wiggle 0.5s;
        }
      `}</style>
    </main>
  );
}
