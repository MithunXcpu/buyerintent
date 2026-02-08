import Link from "next/link";
import { Eye, Shield, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-amber" />
              </div>
              <span className="text-lg font-bold text-white">IntentSight</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              AI-powered buyer intent detection from video. Understand your buyers before they tell you.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/demo" className="text-sm text-muted hover:text-amber transition-colors">Demo</Link></li>
              <li><Link href="/dashboard" className="text-sm text-muted hover:text-amber transition-colors">Dashboard</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted hover:text-amber transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-amber transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted">About</span></li>
              <li><span className="text-sm text-muted">Careers</span></li>
              <li><span className="text-sm text-muted">Blog</span></li>
              <li><span className="text-sm text-muted">Press</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted">Privacy Policy</span></li>
              <li><span className="text-sm text-muted">Terms of Service</span></li>
              <li><span className="text-sm text-muted">Cookie Policy</span></li>
              <li><span className="text-sm text-muted">DPA</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; 2026 IntentSight. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Shield className="w-4 h-4 text-teal" />
              GDPR Compliant
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Lock className="w-4 h-4 text-teal" />
              CCPA Compliant
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Shield className="w-4 h-4 text-teal" />
              SOC 2 Type II
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
