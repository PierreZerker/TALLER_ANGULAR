import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];

  average: number =0;

  getSeries() {
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;
      this.average = this.getAverage();
    })
  }


  ngOnInit() {
    this.getSeries();
  }

  getAverage(): number{
    let series:Serie[]=this.series;
    let totalSeasons:number=0;
    for(let serie of series){
        totalSeasons+=serie.seasons;
    }
    let prom:number=totalSeasons/series.length;
    return prom;
  }

}
