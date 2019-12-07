import { Component } from '@angular/core';
import {SongWrapper} from './models/song-wrapper';
import {ResultResponse} from './models/result-response';
import {ItunesService} from './services/itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchedArtist = '';
  searhingResult: Array<SongWrapper>;
  areColumnsSortedAscendently: boolean;

  search() {
    this.itunesService.getObservableByArtist(this.searchedArtist).subscribe((msg: ResultResponse) => {
      this.searhingResult = msg.results;
    });
  }

  constructor(private itunesService: ItunesService) {
  }
}
