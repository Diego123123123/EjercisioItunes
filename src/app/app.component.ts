import { Component } from '@angular/core';
import {ItunesService} from './services/itunes.service';
import {ResultResponse} from './models/result-response';
import {SongWrapper} from './models/song-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchedArtist = '';
  searhingResult: Array<SongWrapper>;
  columnNames: ['Image Cover', 'Song Name', 'Artist Name', 'Album Name', 'Time', 'Price'];

  search() {
    this.itunesService.getObservableByArtist(this.searchedArtist).subscribe((msg: ResultResponse) => {
      this.searhingResult = msg.results;
    });
  }

  parseFirstElement(element: SongWrapper) {
    return element.artistName;
  }

  constructor(private itunesService: ItunesService) {
  }
}
