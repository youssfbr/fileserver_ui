import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  URLapi = 'http://localhost:8080/arquivos';

  constructor(private http: HttpClient) {}

  uploadArquivo(event) {
    if (event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];

      const formData = new FormData();
      formData.append('arquivo', arquivo);

      this.http.post(this.URLapi, formData)
        .subscribe(reposta => console.log('Upload OK.'));
    }
  }

}
