import { motion } from "framer-motion";
const Banner = () => {
  const animate = {
    initial: {
      opacity: 0.5,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };
  const childAnimate = {
    initial: {
      y: -200,
    },
    animate: {
      y: 0,

      transition: {
        duration: 2,
        y: {
          duration: 2,
        },
      },
    },
  };
  return (
    <motion.div
      className=" w-full md:p-20"
      variants={animate}
      initial="initial"
      animate="animate"
    >
      <div className="text-center space-y-8 pb-10">
        <motion.h1
          variants={childAnimate}
          className="text-4xl lg:text-[64px] md:text-4xl font-bold uppercase md:text-nowrap text-wrap"
        >
          Brand New event Packages
        </motion.h1>
        <motion.h1
          variants={childAnimate}
          className="md:text-3xl lg:text-[56px] py-1 font-extrabold gradientBg"
        >
          <span className="gradientBg">
            <span className="gradientBg">For Winter</span>
          </span>
        </motion.h1>
        <motion.p variants={childAnimate} className="max-w-[70ch] mx-auto">
          Step into a world where moments are not just witnessed but celebrated
          – welcome to our extraordinary event experience.
        </motion.p>
      </div>
      <div>
        <img
          className="h-full] w-full mx-auto"
          src="https://s3-alpha-sig.figma.com/img/819a/5613/0d16cd845d0bd69d72f1baae950cff76?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ogvcVK~BAGibYWyuzdiSGj7inD0cp0k1dMbaR06p2GUQ9nt9V5Dh43tY566Z8ELtnGP0nUOgGakSXD8LYKhgDvVk-DdauDh3xQSrEoLUsCqjrzAgfpaa-v3QzGxfWEtFD2b1~UDbKJZWMeNjQStEd6npE0xWdSZUeHqRUrSCA25yrzlAv9O1Gv0~aKykMQNzv1-jF1KLPDDNTk1ZK9yb8vKw-1i6LiU6AJ65psfowhm6mMRT9UsS~9qfXCgr44LHWlGAnKKjCn-~k7iBaL2B-B25gZBcSQgjhn2yh82Lds5CPLWiWo1ZaQeSLsZ7bW4nqn1SOr--QB7MWGLaE6XP7w__"
          alt=""
        />
      </div>
      <div className="w-[300px] h-[300px] rounded-[999px] absolute top-[100px] left-20 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
    </motion.div>
  );
};

export default Banner;
