import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiService } from './api.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zadanie-rekrutacyjne';
  ratesData:any = [];
  ratesTable:any = [];
  first: number = 0;

  constructor(private api:ApiService, private themeService: ThemeService) {}


  ngOnInit(): void {
    this.api.getExchangeRates().subscribe((data) => {
      this.ratesData = data;
      this.ratesTable = this.ratesData[0].rates;
      console.log(this.ratesTable);
    });
  }

  reset() {
    this.first = 0;
  }

  clear(table: Table) {
    table.clear();
  }

  changeTheme(theme: string){
    this.themeService.switchTheme(theme);
  }
}
