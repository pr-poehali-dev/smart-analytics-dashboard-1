import { motion } from "framer-motion"
import { ProfileSection } from "@/components/ProfileSection"
import { LinkCard } from "@/components/LinkCard"
import { SocialFooter } from "@/components/SocialFooter"
import { Youtube, Twitch, Send, MessageCircle, Trophy, Clock } from "lucide-react"
import Icon from "@/components/ui/icon"

const links = [
  {
    title: "Twitch",
    description: "Смотреть стримы в прямом эфире",
    href: "https://www.twitch.tv/artem_maybach",
    icon: Twitch,
  },
  {
    title: "YouTube",
    description: "Лучшие моменты и хайлайты",
    href: "#",
    icon: Youtube,
  },
  {
    title: "Telegram-канал",
    description: "Анонсы стримов и новости",
    href: "#",
    icon: Send,
  },
  {
    title: "Discord-сервер",
    description: "Общение с комьюнити",
    href: "#",
    icon: MessageCircle,
  },
  {
    title: "Донат",
    description: "Поддержать стримера",
    href: "#",
    icon: Trophy,
  },
]

const socials = [
  { icon: Twitch, href: "#", label: "Twitch" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
}

export function LinkBioPage() {
  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0d0d1a] via-[#1a1035] to-[#0d1a2e]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 44, 209, 0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "30%",
          right: "-20%",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "-5%",
          left: "20%",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "60%",
          left: "-5%",
        }}
        animate={{
          x: [0, 40, 80, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 30% 80%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 80% 40%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 60% 60%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(255,255,255,0.4), transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 pointer-events-none"
        style={{
          width: "200%",
          height: "100px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          transform: "rotate(-35deg)",
          top: "20%",
          left: "-50%",
        }}
        animate={{
          left: ["-50%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-[400px] w-full flex flex-col flex-1 justify-between"
      >
        <motion.div variants={itemVariants} className="pt-2">
          <ProfileSection
            name="Artem_Maybah"
            bio="🎮 Стример • Игры, общение, атмосфера"
            imageUrl="/placeholder-user.jpg"
          />
        </motion.div>

        <motion.div className="space-y-3 py-8" variants={containerVariants}>
          {links.map((link) => (
            <motion.div key={link.title} variants={itemVariants}>
              <LinkCard {...link} />
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <div
              className="rounded-2xl px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Clock" size={16} className="text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Расписание стримов</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/70 text-sm">Понедельник</span>
                <span className="text-white font-bold text-sm">21:00 МСК</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Вторник</span>
                <span className="text-white font-bold text-sm">21:00 МСК</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/70 text-sm">Среда</span>
                <span className="text-white font-bold text-sm">21:00 МСК</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/70 text-sm">Четверг</span>
                <span className="text-white font-bold text-sm">21:00 МСК</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/70 text-sm">Пятница</span>
                <span className="text-white font-bold text-sm">21:00 МСК</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/50 text-sm">Суббота</span>
                <span className="text-white/40 text-sm">нет стрима</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/50 text-sm">Воскресенье</span>
                <span className="text-white/40 text-sm">нет стрима</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="pb-2">
          <SocialFooter socials={socials} copyright="2026 Artem_Maybah" />
        </motion.div>
      </motion.div>
    </main>
  )
}