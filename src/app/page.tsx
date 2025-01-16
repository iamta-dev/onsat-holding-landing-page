"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaHandshake } from "react-icons/fa";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <FaBriefcase className="h-8 w-8" />,
      title: "ที่ปรึกษาธุรกิจมืออาชีพ",
      description:
        "วิเคราะห์และวางแผนธุรกิจโดยผู้เชี่ยวชาญ พร้อมให้คำแนะนำที่เหมาะสมกับธุรกิจของคุณ",
    },
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "บริการด้านการเงินและการลงทุน",
      description:
        "วางแผนการเงินและการลงทุนอย่างชาญฉลาด เพื่อการเติบโตที่ยั่งยืนของธุรกิจ",
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: "พัฒนาระบบและเทคโนโลยี",
      description:
        "ยกระดับธุรกิจด้วยเทคโนโลยีที่ทันสมัย เพิ่มประสิทธิภาพการทำงานและการบริการ",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <img src="/logo.png" alt="Onsat Holding" className="h-12" />
            <div className="hidden space-x-6 md:flex">
              <a
                href="#services"
                className="text-secondary transition-colors hover:text-primary"
              >
                บริการ
              </a>
              <a
                href="#about"
                className="text-secondary transition-colors hover:text-primary"
              >
                เกี่ยวกับเรา
              </a>
              <a
                href="#contact"
                className="text-secondary transition-colors hover:text-primary"
              >
                ติดต่อ
              </a>
            </div>
          </div>
          <button className="rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90">
            ปรึกษาฟรี
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 pb-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div>
              <h1 className="mb-6 font-heading text-4xl font-bold text-secondary md:text-5xl">
                เติบโตอย่างมั่นคง ก้าวไกลไปด้วยกัน
              </h1>
              <p className="mb-8 text-lg text-text-secondary">
                เรามุ่งมั่นสร้างความสำเร็จร่วมกับพาร์ทเนอร์
                ด้วยประสบการณ์และความเชี่ยวชาญกว่า 10 ปี
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90">
                  ปรึกษาธุรกิจฟรี
                </button>
                <button className="rounded-lg border border-secondary px-8 py-3 text-secondary transition-colors hover:bg-gray-50">
                  ดูบริการทั้งหมด
                </button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="/Business Growth.png"
                alt="Business Growth"
                className="w-full bg-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20" id="services">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center font-heading text-3xl font-bold text-secondary md:text-4xl"
          >
            บริการครบวงจรเพื่อความสำเร็จของธุรกิจคุณ
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="mb-3 font-heading text-xl font-bold text-secondary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20" id="about">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 font-heading text-3xl font-bold text-secondary md:text-4xl">
              เกี่ยวกับเรา
            </h2>
            <p className="mb-8 text-text-secondary">
              Onsat Holding เป็นบริษัทที่ปรึกษาธุรกิจชั้นนำ
              ที่มุ่งมั่นสร้างความสำเร็จให้กับพาร์ทเนอร์ของเรา
              ด้วยทีมงานผู้เชี่ยวชาญที่พร้อมให้คำปรึกษาและสนับสนุนการเติบโตของธุรกิจคุณ
            </p>
            <address className="not-italic text-text-secondary">
              82/655 หมู่ 20 ต.บางพลีใหญ่ อ.บางพลี
              <br />
              จ.สมุทรปราการ 10540
            </address>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-secondary md:text-4xl">
              ติดต่อเรา
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="อีเมล"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="เบอร์โทรศัพท์"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="ข้อความ"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button className="w-full rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90">
                ส่งข้อความ
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img
                src="/logo.png"
                alt="Onsat Holding"
                className="mb-4 h-12"
              />
              <p className="text-gray-300">สร้างความสำเร็จทางธุรกิจไปด้วยกัน</p>
            </div>
            <div>
              <h4 className="mb-4 font-heading text-lg font-bold">
                บริการของเรา
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    ที่ปรึกษาธุรกิจ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    บริการด้านการเงิน
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    พัฒนาระบบ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-heading text-lg font-bold">ติดต่อเรา</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  82/655 หมู่ 20 ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540
                </li>
                <li>
                  <a
                    href="mailto:contact@onsatholding.com"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    อีเมล: contact@onsatholding.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-heading text-lg font-bold">ติดตามเรา</h4>
              <form className="mb-4">
                <label htmlFor="newsletter" className="mb-2 block text-sm">
                  รับข่าวสารจากเรา
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    id="newsletter"
                    placeholder="อีเมลของคุณ"
                    className="flex-1 rounded-lg px-3 py-2 text-gray-900"
                  />
                  <button className="rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90">
                    ติดตาม
                  </button>
                </div>
              </form>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <span className="sr-only">Line</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 7.12c-.28 0-.5.22-.5.5v3.77c0 .28.22.5.5.5s.5-.22.5-.5v-3.77c0-.28-.22-.5-.5-.5zm-2.29 4.08c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-6.09-4.08c-.28 0-.5.22-.5.5v3.77c0 .28.22.5.5.5s.5-.22.5-.5v-3.77c0-.28-.22-.5-.5-.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Onsat Holding. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
