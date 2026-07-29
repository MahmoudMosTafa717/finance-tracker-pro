import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LucideWallet } from '@lucide/angular';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, LucideWallet, RouterLink],
  templateUrl: './auth-layout.html',
})
export class AuthLayout {}
