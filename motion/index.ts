export const navbarVarients = {
   initial: {
      opacity: 0,
      y: -50,
      transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         stiffness: 80,
         delay: 1,
      },
   },
};

export const heroTextVarients = {
   initial: {
      opacity: 0, y: "100%", transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   animate: {
      opacity: 1, y: 0, transition: {
         duration: 2,
         type: "spring",
         ease: "easeInOut"
      }
   },
};

export const scaleInVarients = (i: number) => ({
   initial: {
      opacity: 0, scale: 0, transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   animate: {
      opacity: 1, scale: 1, transition: {
         delay: 0.5 * i,
         duration: 1.5,
         type: "spring",
         ease: "easeInOut"
      }
   },
});

export const partnerVarients = (i: number) => ({
   initial: {
      opacity: 0, y: "-100%", transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   vissible: {
      opacity: 1, y: "0", transition: {
         delay: 0.3 * i,
         duration: 1,
         type: "spring",
         ease: "easeInOut"
      }
   },
});

export const textContainer = {
   hidden: {
      opacity: 0,
   },
   show: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
   }),
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
   hidden: {},
   show: {
      transition: {
         staggerChildren,
         delayChildren,
      },
   },
});

export const textVariant = (delay: number) => ({
   hidden: {
      y: 50,
      opacity: 0,
   },
   show: {
      y: 0,
      opacity: 1,
      transition: {
         type: 'spring',
         delay,
      },
   },
});

export const textVariant2 = {
   hidden: {
      opacity: 0,
      y: 20,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'tween',
         ease: 'easeIn',
      },
   },
};