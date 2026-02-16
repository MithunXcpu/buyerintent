"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Mail,
  Building2,
  User,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-base">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-red">
            IntentSight
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-24">
        <motion.div initial="hidden" animate="visible" className="text-center">
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-4xl font-bold text-white"
          >
            Get in touch
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted"
          >
            Ready to decode buyer intent? Let us know how we can help.
          </motion.p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 rounded-xl border border-success/30 bg-success/5 p-12 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <Send className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-white">Message sent!</h2>
            <p className="mt-2 text-muted">
              We will get back to you within 24 hours.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-red px-6 py-3 text-sm font-semibold text-base transition-colors hover:bg-red-light"
            >
              Back to Home
            </Link>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            animate="visible"
            action="https://formspree.io/f/xnjbjvng"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="mt-12 space-y-6"
          >
            {/* Name */}
            <motion.div variants={fadeUp} custom={2}>
              <label
                htmlFor="name"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white"
              >
                <User className="h-4 w-4 text-muted" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-white placeholder-muted/60 outline-none transition-colors focus:border-red"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} custom={3}>
              <label
                htmlFor="email"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white"
              >
                <Mail className="h-4 w-4 text-muted" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-white placeholder-muted/60 outline-none transition-colors focus:border-red"
              />
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeUp} custom={4}>
              <label
                htmlFor="company"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white"
              >
                <Building2 className="h-4 w-4 text-muted" />
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-white placeholder-muted/60 outline-none transition-colors focus:border-red"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} custom={5}>
              <label
                htmlFor="message"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white"
              >
                <MessageSquare className="h-4 w-4 text-muted" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your needs..."
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-white placeholder-muted/60 outline-none transition-colors focus:border-red"
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp} custom={6}>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red px-6 py-3 font-semibold text-base transition-colors hover:bg-red-light"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
