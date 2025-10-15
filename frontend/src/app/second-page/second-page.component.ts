import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-page.component.html',
})
export class SecondPageComponent {
  called: boolean | null = null;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  callApi() {
    this.loading = true;
    this.error = null;
    this.http.get<{ called: boolean }>('http://localhost:6060/some').subscribe({
      next: (res) => {
        this.called = !!res.called;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message ?? 'Request failed';
        this.loading = false;
      }
    });
  }
}
