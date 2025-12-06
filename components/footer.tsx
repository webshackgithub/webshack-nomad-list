import { Facebook, Twitter, Instagram, Mail, MapPin, Linkedin, Github, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              🌍 노마드 리스트
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              전 세계 디지털 노마드를 위한<br />
              최고의 도시 정보 큐레이션 서비스.<br />
              당신의 다음 목적지를 찾아보세요.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">바로가기</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  홈으로
                </a>
              </li>
              <li>
                <a href="#cities" className="text-muted-foreground hover:text-primary transition-colors">
                  도시 탐험
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  커뮤니티
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Social Section (New) */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">소셜 미디어</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://codefactory.ai" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://codefactory.ai" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://codefactory.ai" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://codefactory.ai" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Contact Section (New) */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">연락처</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:leesanghooncapple@gmail.com" className="hover:text-primary transition-colors">
                  leesanghooncapple@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>010-1234-1234</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  대한민국
                </span>
              </li>
            </ul>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} 노마드 리스트 (Nomad List Clone). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <a href="#" className="hover:text-foreground transition-colors">쿠키 정책</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
