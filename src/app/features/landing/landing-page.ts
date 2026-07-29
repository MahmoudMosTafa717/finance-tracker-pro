import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import {
  LucideWallet,
  LucideTrendingUp,
  LucideShieldCheck,
  LucideZap,
  LucideFileText,
  LucideCheckCircle2,
  LucideMenu,
  LucideX,
  LucideArrowRight,
  LucideDollarSign,
  LucideCheck,
  LucideChevronRight,
  LucideSparkles,
  LucideArrowRightLeft,
  LucidePieChart
} from '@lucide/angular';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LucideWallet,
    LucideTrendingUp,
    LucideShieldCheck,
    LucideZap,
    LucideFileText,
    LucideCheckCircle2,
    LucideMenu,
    LucideX,
    LucideArrowRight,
    LucideDollarSign,
    LucideCheck,
    LucideChevronRight,
    LucideSparkles,
    LucideArrowRightLeft,
    LucidePieChart
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  isMobileMenuOpen = false;

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => revealObserver.observe(el));
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
